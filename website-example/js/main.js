var nav_link = document.querySelector(".nav-links");
    var nav = document.querySelector("nav");
    var menu_btn = document.querySelector(".menu");
    var width = window.getComputedStyle(document.querySelector(".line"), ":before").getPropertyValue("width");
    var linne = document.querySelector(".line");
    console.log(width);
    var prevScrollPos = window.pageYOffset;
    window.onscroll = function(){
        var currentPos = window.pageYOffset;
        if(prevScrollPos > currentPos){
            nav.style.top = "0";
            menu_btn.style.top = "0";
            
        }else{
            nav.style.top = "-450px";
            menu_btn.style.top = "-100px";
        }
        prevScrollPos = currentPos;
    }
    function menuFunc(e){
        e.classList.toggle("change");
        var navstyle = window.getComputedStyle(nav_link);
        var height = navstyle.getPropertyValue("height");
        console.log(height);
        if(height === "0px"){
            nav_link.style.height = "350px";
        }else{
            nav_link.style.height = "0";
        }
    }
    
    //slide images
    var slideIndex = 0;
    slideShow();
    
    function slideShow(){
        var i;
        var img_content = document.getElementsByClassName("slide-content");
        
        for(i = 0; i < img_content.length; i++ ){
            img_content[i].style.display = "none";
        }
        slideIndex++;
        
        if(slideIndex > img_content.length){
            slideIndex = 1;
        }
        img_content[slideIndex - 1].style.display = "block"; 
        setTimeout(slideShow, 4000);
    }
    