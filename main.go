package main

import (
	"bufio"
	"database/sql"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	_ "github.com/go-sql-driver/mysql"
)

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
	var insertUsers *sql.Stmt
	insertUsers, err := db.Prepare("insert into math.turkishexam (section_id, question,first_answer, second_answer, third_answer, fourth_answer, fifth_answer, answer, difficulty, is_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer insertUsers.Close()

	var _ sql.Result
	_, err = insertUsers.Exec("", "", "", "", "", "", "", "", "", "")
}
