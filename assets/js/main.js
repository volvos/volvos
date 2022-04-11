function addQuestion() {
    var konuID=document.getElementById('konuID').value
    var isImage="0"
    var question = document.getElementById('questionText').value
    if (question=="") {
        question=document.getElementById('questionImg').style.backgroundImage
        question= question.replace(`url("data:image/png;base64,`,"")
        question= question.replaceAll("+","€")
        question= question.replace(`")`,`"`)
        isImage="1"
    }
    var answer1 = document.getElementById('answerText1').value
    if (answer1=="") {
        answer1=document.getElementById('answerImg1').style.backgroundImage
        answer1= answer1.replace(`url("data:image/png;base64,`,"")
        answer1= answer1.replaceAll("+","€")
        answer1= answer1.replace(`")`,`"`)
    }
    var answer2 = document.getElementById('answerText2').value
    if (answer2=="") {
        answer2=document.getElementById('answerImg2').style.backgroundImage
        answer2= answer2.replace(`url("data:image/png;base64,`,"")
        answer2= answer2.replaceAll("+","€")
        answer2= answer2.replace(`")`,`"`)
    }
    var answer3 = document.getElementById('answerText3').value
    if (answer3=="") {
        answer3=document.getElementById('answerImg3').style.backgroundImage
        answer3= answer3.replace(`url("data:image/png;base64,`,"")
        answer3= answer3.replaceAll("+","€")
        answer3= answer3.replace(`")`,`"`)
    }
    var answer4 = document.getElementById('answerText4').value
    if (answer4=="") {
        answer4=document.getElementById('answerImg4').style.backgroundImage
        answer4= answer4.replace(`url("data:image/png;base64,`,"")
        answer4= answer4.replaceAll("+","€")
        answer4= answer4.replace(`")`,`"`)
    }
    var answer5 = document.getElementById('answerText5').value
    if (answer5=="") {
        answer5=document.getElementById('answerImg5').style.backgroundImage
        answer5= answer5.replace(`url("data:image/png;base64,`,"")
        answer5= answer5.replaceAll("+","€")
        answer5= answer5.replace(`")`,`"`)
    }
    var answerCorrect = document.getElementById('answerCorrect').value

    var result="";
    $.ajax({
        url:'/add_question?l1=' + question +"&l2=" +answer1+"&l3=" + answer2+"&l4=" + answer3+"&l5=" + answer4+"&l6=" + answer5+"&l7=" + answerCorrect+"&l8=" + isImage +"&k="+konuID,
        async: false,  
        success:function(data) {
            result = data.value; 
            if (result=1) {
                console.log("Kayıt ok")
                if (document.getElementById('questionText').value=="") {
                    document.getElementById('questionImg').classList.remove("drop-zone__thumb")
                }
                if (document.getElementById('answerText1').value=="") {
                    document.getElementById('answerImg1').classList.remove("drop-zone-1__thumb")
                }
                if (document.getElementById('answerText2').value=="") {
                    document.getElementById('answerImg2').classList.remove("drop-zone-2__thumb")
                }
                if (document.getElementById('answerText3').value=="") {
                    document.getElementById('answerImg3').classList.remove("drop-zone-3__thumb")
                }
                if (document.getElementById('answerText4').value=="") {
                    document.getElementById('answerImg4').classList.remove("drop-zone-4__thumb")
                }
                if (document.getElementById('answerText5').value=="") {
                    document.getElementById('answerImg5').classList.remove("drop-zone-5__thumb")
                }
                document.getElementById('questionText').value=""
                document.getElementById('answerText1').value=""
                document.getElementById('answerText2').value=""
                document.getElementById('answerText3').value=""
                document.getElementById('answerText4').value=""
                document.getElementById('answerText5').value=""
                document.getElementById('answerCorrect').value=""
            }
        }
    });
}

function auto_height(elem) { 
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight)+"px";
}

function classBind() {
    $.ajax({
        url:'firstBind',
        async: false,  
        success:function(data) {
            if (data.Status==1) {
                $("#sinifID").empty()
                $("#sinifID").append(data.Value)
            } else {
                alert("Veri bulanamadı....")
            }
        }
    })
}
function lessonBind(value) {
    document.getElementById('dersID').classList.remove("section_hide")
    $.ajax({
        url:'secondBind?c=' + value,
        async: false,  
        success:function(data) {
            if (data.Status==1) {
                $("#dersID").empty()
                $("#dersID").append(data.Value)
            } else {
                alert("Veri bulanamadı....")
                document.getElementById('dersID').classList.add("section_hide")
                document.getElementById('konuID').classList.add("section_hide")
            }
        }
    })
}
function sectionBind(value) {
    document.getElementById('konuID').classList.remove("section_hide")
    $.ajax({
        url:'thirdBind?s=' + value,
        async: false,  
        success:function(data) {
            if (data.Status==1) {
                $("#konuID").empty()
                $("#konuID").append(data.Value)
            } else {
                alert("Veri bulanamadı....")
                document.getElementById('konuID').classList.add("section_hide")
            }
        }
    })
}

$(document).ready(function () {
    classBind()
});

function questionInput(value) {
    document.getElementById('addQuestion_Section').classList.remove("section_hide")
}



