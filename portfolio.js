
gsap.to('.big-circle',{opacity:1,delay:4.5,duration:1.5,x:-50});
gsap.to('.pc-img',{opacity:2,delay:5.5,duration:2.5,x:-190});
gsap.to('.title-1',{opacity:2,delay:3,duration:2,y:-15});
gsap.to('.small-text',{opacity:2,delay:3.4,duration:1,y:-15});
gsap.to('.see-more',{opacity:2,delay:4,duration:1,y:-15});
gsap.to('.c-3',{opacity:2,delay:6.5,duration:1,y:-30});
gsap.to('.c-2',{opacity:1,delay:5,duration:1,y:30,x:30});
gsap.to('.c-4',{opacity:1,delay:6.8,duration:1,x:50});
gsap.to('.navbar',{opacity:1,delay:2.5,duration:1,y:35});


var humNav = document.getElementById("hum-nav");
var upBtn = document.getElementById("up-btn");
var downBtn = document.getElementById("down-btn");

upBtn.addEventListener("click" , () =>{
    humNav.style.display = "block";
    humNav.classList.add("open");
    humNav.classList.remove("close");
    upBtn.style.display = "none";
    downBtn.style.display = "block" ; 
    gsap.to('.navbar-2',{opacity:1,delay:0.4,duration:0.4,y:-40});
})
downBtn.addEventListener("click" , () =>{
    
    humNav.style.display = "block";
    humNav.classList.remove("open");
    humNav.classList.add("close");
    upBtn.style.display = "block";
    downBtn.style.display = "none" ; 
    gsap.to('.navbar-2',{opacity:0,delay:0.1,duration:0.1,});
    
})
var manImg = document.getElementById('man-1')
function scrollMe(){
   window.onscroll = () =>{
       if (window.scrollY >= 450){
        gsap.to('.man-img',{opacity:1,delay:1,duration:1,y:-13});
       } 

   }
}
scrollMe();

var eyeOne = document.getElementById("eye-one");
var crossOne = document.getElementById("cross-one");
var social =document.getElementById("social");
var content = document.getElementById("content-1-1")

eyeOne.addEventListener("click" , () =>{
   social.classList.add("grow-1");
   social.classList.remove("back-1");
   eyeOne.style.display = "none";
   crossOne.style.display = "block";
   gsap.to('.social-title',{ opacity:1,delay:0.4,duration:0.4,y:-110,x:-110});
   gsap.to('.content-1',{opacity:1,delay:0.6,duration:0.6 , x:10});
   
   content.style.zIndex = 50;
   social.style.zIndex = 100;


})


crossOne.addEventListener("click" , () =>{
    social.classList.add("back-1");
    social.classList.remove("grow-1");
    eyeOne.style.display = "block";
    crossOne.style.display = "none";
    gsap.to('.social-title',{ opacity:1,delay:0.3,duration:0.3,y:0,x:0});
    gsap.to('.content-1',{opacity:0,delay:0.2,duration:0.2 ,});
    content.style.zIndex = -50;
    social.style.zIndex = 0;

    
 
 })



 var eyeTow = document.getElementById("eye-tow");
var crossTow = document.getElementById("cross-tow");
var design =document.getElementById("design");
var contentTow = document.getElementById("content-2-2");

eyeTow.addEventListener("click" , () =>{
   design.classList.add("grow-2");
   design.classList.remove("back-2");
   eyeTow.style.display = "none";
   crossTow.style.display = "block";
   gsap.to('.design-title',{ opacity:1,delay:0.4,duration:0.4,y:-110,x:-110});
   gsap.to('.content-2',{opacity:1,delay:0.6,duration:0.6 , x:0});
   design.style.zIndex = 100;
   contentTow.style.zIndex = 50;
   

})
crossTow.addEventListener("click" , () =>{
    design.classList.add("back-2");
    design.classList.remove("grow-2");
    eyeTow.style.display = "block";
    crossTow.style.display = "none";
    gsap.to('.design-title',{ opacity:1,delay:0.3,duration:0.3,y:0,x:0});
    gsap.to('.content-2',{opacity:0,delay:0.2,duration:0.2, });
    design.style.zIndex = 1;
    contentTow.style.display = 'none';
   contentTow.style.zIndex = -50;
 
 })


 var eyeThree = document.getElementById("eye-three");
 var crossThree = document.getElementById("cross-three");
 var tools =document.getElementById("tools");
 var contentThree = document.getElementById("content-3-3");
 
 eyeThree.addEventListener("click" , () =>{
    tools.classList.add("grow-3");
    tools.classList.remove("back-3");
    eyeThree.style.display = "none";
    crossThree.style.display = "block";
    gsap.to('.tools-title',{ opacity:1,delay:0.4,duration:0.4,y:-110,x:-110});
    gsap.to('.content-3',{opacity:1,delay:0.6,duration:0.6});
    tools.style.zIndex = 100;
    contentThree.style.zIndex = 50;
 
 })
 crossThree.addEventListener("click" , () =>{
     tools.classList.add("back-3");
     tools.classList.remove("grow-3");
     eyeThree.style.display = "block";
     crossThree.style.display = "none";
     gsap.to('.tools-title',{ opacity:1,delay:0.3,duration:0.3,y:0,x:0});
     gsap.to('.content-3',{opacity:0,delay:0.2,duration:0.2});
     tools.style.zIndex = 1;
     contentThree.style.zIndex = -50;
  })



  var eyeFour = document.getElementById("eye-four");
  var crossfour = document.getElementById("cross-four");
  var other =document.getElementById("other");
  var contentFour = document.getElementById("content-4-4");
  
  eyeFour.addEventListener("click" , () =>{
     other.classList.add("grow-4");
     other.classList.remove("back-4");
     eyeFour.style.display = "none";
     crossfour.style.display = "block";
     gsap.to('.other-title',{ opacity:1,delay:0.4,duration:0.4,y:-110,x:-110});
     gsap.to('.content-4',{opacity:1,delay:0.6,duration:0.6});
     other.style.zIndex = 100;
     contentFour.style.zIndex = 50;
  
  })
  crossfour.addEventListener("click" , () =>{
      other.classList.add("back-4");
      other.classList.remove("grow-4");
      eyeFour.style.display = "block";
      crossfour.style.display = "none";
      gsap.to('.other-title',{ opacity:1,delay:0.3,duration:0.3,y:0,x:0});
      gsap.to('.content-4',{opacity:0,delay:0.2,duration:0.2});
      other.style.zIndex = 1;
      contentFour.style.zIndex = -50;
   
   })

   
 


var about = document.getElementById("about-me")
var info = document.getElementById("my-info")
var work = document.getElementById("my-work")

 var btnA = document.getElementById("btn-a");
 var btnB = document.getElementById("btn-b");
 var btnC = document.getElementById("btn-c");


 btnA.addEventListener("click" , () =>{
     about.classList.add("box-1-1");
     btnA.classList.add("btn-1-animation");
     info.classList.remove("box-2-2");
    btnB.classList.remove("btn-2-animation");
    work.classList.remove("box-3-3");
    btnC.classList.remove("btn-3-animation");
     info.style.opacity = 0;
     about.style.opacity = 1;
     work.style.opacity = 0;
 })


 btnB.addEventListener("click" , () =>{
    about.classList.remove("box-1-1");
    btnA.classList.remove("btn-1-animation");
    work.classList.remove("box-3-3");
    btnC.classList.remove("btn-3-animation");
    info.classList.add("box-2-2");
    btnB.classList.add("btn-2-animation");
    info.style.opacity = 1;
    about.style.opacity = 0;
    work.style.opacity = 0;
})


btnC.addEventListener("click" , () =>{
    about.classList.remove("box-1-1");
    btnA.classList.remove("btn-1-animation");
    info.classList.remove("box-2-2");
    btnB.classList.remove("btn-2-animation");
    work.classList.add("box-3-3");
    btnC.classList.add("btn-3-animation");
    about.style.opacity = 0;
    info.style.opacity = 0;
    work.style.opacity = 1;
})


var contactBtn = document.getElementById("contact-me-2");
var emailBtn = document.getElementById("eml-btn");
var phoneBtn = document.getElementById("phn-btn");
var contactForm = document.getElementById("Contact-frm");
var exit = document.getElementById("exit");

contactBtn.addEventListener("click" , () =>{
    gsap.to('.contact-form',{opacity:1,delay:0.8,duration:0.8,y:-50});
    contactForm.classList.remove("content-grow");
})

emailBtn.addEventListener("click" , () =>{
    contactForm.classList.add("content-grow");
    gsap.to('.place-email',{opacity:1,delay:0.3,duration:0.3,y:-40});
    gsap.to('.place-phone',{opacity:0,delay:0.3,duration:0.3,y:-40});
})

phoneBtn.addEventListener("click" , () =>{
    contactForm.classList.add("content-grow");
    gsap.to('.place-phone',{opacity:1,delay:0.3,duration:0.3,y:-40});
    gsap.to('.place-email',{opacity:0,delay:0.3,duration:0.3,y:-40});
})
  
exit.addEventListener("click" , () =>{
    gsap.to('.contact-form',{opacity:0,delay:0.4,duration:0.4,y:40});
    gsap.to('.place-phone',{opacity:0,delay:0.3,duration:0.3,y:40});
})
  

