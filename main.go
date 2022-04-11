package main

import (
	"bufio"
	"database/sql"
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	_ "github.com/go-sql-driver/mysql"
)

type returnAddDB struct {
	Value int
}
type returnClass struct {
	Value  string
	Status int
}

var tpl *template.Template
var db *sql.DB

func main() {
	tpl, _ = template.ParseGlob("tmp/*.html")
	var err error

	db, err = sql.Open("mysql", readTtx())
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	r := mux.NewRouter().StrictSlash(true)
	r.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets/"))))

	r.HandleFunc("/", indexHandler)
	r.HandleFunc("/add_question", insertQuestion)
	r.HandleFunc("/firstBind", classBind)
	r.HandleFunc("/secondBind", lessonBind)
	r.HandleFunc("/thirdBind", sectionBind)

	srv := &http.Server{Handler: handlers.CompressHandler(r), Addr: ":8081"}
	log.Fatal(srv.ListenAndServe())
}

func readTtx() (dbPath string) {
	file, err := os.Open("./gitignore/db.txt")
	if err != nil {
		log.Fatal(err)
	}
	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanLines)
	var text []string
	for scanner.Scan() {
		text = append(text, scanner.Text())
	}
	file.Close()
	//for _, each_ln := range text {
	//	fmt.Println(each_ln)
	//}
	return text[0]
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	tpl.ExecuteTemplate(w, "main.html", "Logged In")
}

func insertQuestion(w http.ResponseWriter, r *http.Request) {
	getQuestion := r.URL.Query().Get("l1")
	getQuestion = strings.Replace(getQuestion, "€", "+", -1)
	getQuestion = strings.TrimRight(getQuestion, `"`)
	getFirstAnswer := r.URL.Query().Get("l2")
	getFirstAnswer = strings.Replace(getFirstAnswer, "€", "+", -1)
	getFirstAnswer = strings.TrimRight(getFirstAnswer, `"`)
	getSecondAnswer := r.URL.Query().Get("l3")
	getSecondAnswer = strings.Replace(getSecondAnswer, "€", "+", -1)
	getSecondAnswer = strings.TrimRight(getSecondAnswer, `"`)
	getThirdAnswer := r.URL.Query().Get("l4")
	getThirdAnswer = strings.Replace(getThirdAnswer, "€", "+", -1)
	getThirdAnswer = strings.TrimRight(getThirdAnswer, `"`)
	getFourthAnswer := r.URL.Query().Get("l5")
	getFourthAnswer = strings.Replace(getFourthAnswer, "€", "+", -1)
	getFourthAnswer = strings.TrimRight(getFourthAnswer, `"`)
	getFifthAnswer := r.URL.Query().Get("l6")
	getFifthAnswer = strings.Replace(getFifthAnswer, "€", "+", -1)
	getFifthAnswer = strings.TrimRight(getFifthAnswer, `"`)
	getCorrect := r.URL.Query().Get("l7")
	getIsImage := r.URL.Query().Get("l8")
	getKonuID := r.URL.Query().Get("k")

	var insertUsers *sql.Stmt
	insertUsers, err := db.Prepare("insert into math.turkishexams (section_id, question,first_answer, second_answer, third_answer, fourth_answer, fifth_answer, answer, difficulty, is_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer insertUsers.Close()

	var _ sql.Result
	_, err = insertUsers.Exec(getKonuID, getQuestion, getFirstAnswer, getSecondAnswer, getThirdAnswer, getFourthAnswer, getFifthAnswer, getCorrect, 1, getIsImage)

	if err != nil {
		fmt.Println(err)
		return
	} else {
		jsonfinal := returnAddDB{1}
		js, _ := json.Marshal(jsonfinal)
		w.Write(js)
	}
}

func classBind(w http.ResponseWriter, r *http.Request) {
	var classID, status int
	var className string
	strArray := ""

	rows, err := db.Query("select id, name from class")
	if err != nil {
	} else {
		for rows.Next() {
			if err := rows.Scan(&classID, &className); err != nil {
				status = 0
			} else {
				strArray += `<option value="` + strconv.Itoa(classID) + `">` + className + `</option>`
				status = 1
			}
		}
	}
	w.Header().Set("Content-Type", "application/json")
	jsonfinal := returnClass{strArray, status}
	js, _ := json.Marshal(jsonfinal)
	w.Write(js)
}

func lessonBind(w http.ResponseWriter, r *http.Request) {
	getClassID := r.URL.Query().Get("c")
	var classID, status int
	var className string
	strArray := ""

	rows, err := db.Query("select id,name from lessons where class_id=? order by id", getClassID)
	if err != nil {
	} else {
		for rows.Next() {
			if err := rows.Scan(&classID, &className); err != nil {
				status = 0
			} else {
				strArray += `<option value="` + strconv.Itoa(classID) + `">` + className + `</option>`
				status = 1
			}
		}
	}
	w.Header().Set("Content-Type", "application/json")
	jsonfinal := returnClass{strArray, status}
	js, _ := json.Marshal(jsonfinal)
	w.Write(js)
}

func sectionBind(w http.ResponseWriter, r *http.Request) {
	getLessonID := r.URL.Query().Get("s")
	var classID, status int
	var className string
	strArray := ""

	rows, err := db.Query("select id,name from section where lesson_id=? order by id", getLessonID)
	if err != nil {
	} else {
		for rows.Next() {
			if err := rows.Scan(&classID, &className); err != nil {
				status = 0
			} else {
				strArray += `<option value="` + strconv.Itoa(classID) + `">` + className + `</option>`
				status = 1
			}
		}
	}
	w.Header().Set("Content-Type", "application/json")
	jsonfinal := returnClass{strArray, status}
	js, _ := json.Marshal(jsonfinal)
	w.Write(js)
}
