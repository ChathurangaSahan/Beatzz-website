//function to pop up image container, images and image details when hover on the thummbnail images 
function Openup(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";

    if (imgs.id == "BillieE"){
        document.getElementById("details").innerHTML = document.getElementById("BillE").innerHTML;
    }
    else if (imgs.id == "Taylor"){
        document.getElementById("details").innerHTML = document.getElementById("Tay").innerHTML;
    }
    else if (imgs.id == "HarryS"){
        document.getElementById("details").innerHTML = document.getElementById("Har").innerHTML;
    }
    else if (imgs.id == "DuaLipa"){
        document.getElementById("details").innerHTML = document.getElementById("DuaL").innerHTML;
    }
    else if (imgs.id == "Ariana"){
        document.getElementById("details").innerHTML = document.getElementById("Ari").innerHTML;
    }
       
}
//function to switch to add dark mode class
function turnDarkMode(){
    document.body.style.backgroundColor = "rgb(0,0,0)";
    document.body.classList.remove("copperMode");
    document.body.classList.add("darkMode");
}
//function to remove dark mode and copper mode classes
function turnLightMode(){
    document.body.style.backgroundColor = "rgb(255,255,255)";
    document.body.classList.remove("darkMode");
    document.body.classList.remove("copperMode");
}
//function to remove dark mode class add copper mode class
function turnCopperMode(){
    document.body.style.backgroundColor = "#e48f41"
    document.body.classList.remove("darkMode");
    document.body.classList.add("copperMode");
}
//function for large font class 
function largeTxtMode(){
    document.body.classList.remove("mediumTextMode");
    document.body.classList.add("largeTextMode");
}
//function for medium font class 
function mediumTxtMode(){
    document.body.classList.remove("largeTextMode");
    document.body.classList.add("mediumTextMode");
}
//function to remove large and medium font classes
function smallTxtMode(){
    document.body.classList.remove("largeTextMode");
    document.body.classList.remove("mediumTextMode");
}
//function for create random colors for the background
function RandomclrGen(){
    document.body.classList.remove("darkMode");
    document.body.classList.remove("copperMode");
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}