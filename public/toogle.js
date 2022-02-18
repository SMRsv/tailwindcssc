function myFunction() {
    var element = document.getElementsByTagName("html");
    console.log(element[0].classList);  
    if (element[0].classList.contains("dark")){
        element[0].classList.remove("dark");
    }else{
        element[0].classList.add("dark");
    }
 }