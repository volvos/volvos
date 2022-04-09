function addQuestion() {
    var question = document.getElementById('questionText').value
    if (question=="") {
        question= document.getElementById('questionImg').style.backgroundImage
    }
    var answer1 = document.getElementById('answerText1').value
    if (answer1=="") {
        answer1= document.getElementById('answerImg1').style.backgroundImage
    }
    var answer2 = document.getElementById('answerText2').value
    if (answer2=="") {
        answer2= document.getElementById('answerImg2').style.backgroundImage
    }
    var answer3 = document.getElementById('answerText3').value
    if (answer3=="") {
        answer3= document.getElementById('answerImg3').style.backgroundImage
    }
    var answer4 = document.getElementById('answerText4').value
    if (answer4=="") {
        answer4= document.getElementById('answerImg4').style.backgroundImage
    }
    var answer5 = document.getElementById('answerText5').value
    if (answer5=="") {
        answer5= document.getElementById('answerImg5').style.backgroundImage
    }
    var answerCorrect = document.getElementById('answerCorrect').value

    console.log(question)
    console.log(answer1)
    console.log(answer2)
    console.log(answer3)
    console.log(answer4)
    console.log(answer5)
    console.log(answerCorrect)
}

function auto_height(elem) { 
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight)+"px";
}