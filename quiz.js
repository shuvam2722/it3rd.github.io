function check(){
var c=0;
var q1=document.quiz.question1.value;
var q2=document.quiz.question2.value;
var q3=document.quiz.question3.value;
var q4=document.quiz.question4.value;
var q5=document.quiz.question5.value;
var q6=document.quiz.question6.value;
var q7=document.quiz.question7.value;
var q8=document.quiz.question8.value;
var q9=document.quiz.question9.value;
var q10=document.quiz.question10.value;
var q11=document.quiz.question11.value;
var q12=document.quiz.question12.value;
var q13=document.quiz.question13.value;
var q14=document.quiz.question14.value;
var q15=document.quiz.question15.value;
var result=document.getElementById('result');
var quiz=document.getElementById("quiz");
if(q1=="16") {c++}
if(q2=="4") {c++}
if(q3=="14 hours") {c++}
if(q4=="5 : 3") {c++}
if(q5=="15 days") {c++}
if(q6=="chance") {c++}
if(q7=="Every morning I am greeted cheerfully") {c++}
if(q8=="Tiny") {c++}
if(q9=="Short") {c++}
if(q10=="A man of no substance") {c++}
if(q11=="Erin and her parents live in an apartment") {c++}
if(q12=="JAK") {c++}
if(q13=="rye") {c++}
if(q14=="devotion : reverence") {c++}
if(q15=="Both the statements I and II are effects of independent causes") {c++}

quiz.style.display="none";

if(c<=7){
result.textContent=`Your score : ${c}.`
}
else{
result.textContent=`Your score : ${c}.`
}
}