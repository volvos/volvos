package main

import (
	"database/sql"
	"fmt"
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	_ "github.com/go-sql-driver/mysql"
)

var tpl *template.Template
var db *sql.DB

func main() {
	tpl, _ = template.ParseGlob("tmp/*.html")
	var err error
	db, err = sql.Open("mysql", "root:sanane76?@tcp(127.0.0.1:3306)/math")
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

func indexHandler(w http.ResponseWriter, r *http.Request) {
	tpl.ExecuteTemplate(w, "main.html", "Logged In")
}

func insertQuestion(w http.ResponseWriter, r *http.Request) {
	var insertUsers *sql.Stmt
	insertUsers, err := db.Prepare("insert into math.turkishexam (section_id, question,first_answer, second_answer, third_answer, fourth_answer, fifth_answer, answer, difficulty, is_image) VALUES (?, ?, ?, ?)")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer insertUsers.Close()

	var _ sql.Result
	_, err = insertUsers.Exec(lastIns, uname, ulastname, uemail)
}
