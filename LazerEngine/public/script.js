//JavaScript sourcecode
//Copyright 2020 LazerCorp
console.log("Hello,")
console.log("I am Macintosh")
var h = new Date().getHours();
//local storage stuff
function closedialog() {
    document.getElementById("dialog").style.display="none"
}
function showlogin() {
    document.getElementById("dialog").style.display="block";
}
function login() {
    var info = document.getElementById("Username").value
    localStorage.setItem(key, info);
    var username = localStorage.getItem(key)
    console.log(username+" just logged in!")
    console.log(username.valueOf)
    document.getElementById("dialog").style.display="none";
}
console.log(localStorage.getItem(key))
//dark theme
function dark(){
    document.getElementById("light").style.display="block";
    document.getElementById("dark").style.display="none";
    document.getElementById("support-dark").style.display="block";
    document.getElementById("support-light").style.display="none";
}
//light theme
function light(){
    document.getElementById("light").style.display="none";
    document.getElementById("dark").style.display="block";
    document.getElementById("support-light").style.display="block";
    document.getElementById("support-dark").style.display="none";
}
function show(obj){
    document.getElementById(obj).style.display="block";
}
function show(obj){
    document.getElementById(obj).style.display="none";
}
function show(obj1,_obg2){
    document.getElementById(obj1).style.display="block";
    document.getElementById(obj2).style.display="none";

}

//time function 
    if(h < 12){
        document.write("<p style='font-family: Verdana ;'>Good Morning "+localStorage.getItem('username')+"!</p>")
    } else if (h < 18) {
    
        document.write("<p style='font-family: Verdana ;'>Good Afternoon "+localStorage.getItem('username')+"!</p>")
    
    }else{
    
        document.write("<p style='font-family: Verdana ;'>Good Evening "+localStorage.getItem('username')+"!</p>")
    
    }


//searcher
function getQuery() {
    var searchQuery = document.getElementById("search").value;
    window.location.href = "https://www.google.com/search?q="+searchQuery;
}
function gopls() {
    document.getElementById("search").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("GO").click();
        }
      });
}