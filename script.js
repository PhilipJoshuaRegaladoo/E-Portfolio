$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //typing animaton script
    var typed = new Typed(".typing",{
        strings:["Aspiring Web Developer", "Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings:["Aspiring Web Developer", "Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //toggle menu/navbar script
   $('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass("active");
     //$('.menu-btn i').toggleClass("active");
   });
});

// this function is for download cv that will direct on gdrive
    // select the download button
    const downloadBtn = document.querySelector('#button');

    // add an event listener to the button
    downloadBtn.addEventListener('click', () => {
    // create a new anchor element with the URL of your CV
    const link = document.createElement('a');
    link.href = 'C:\Users\Joshua Regalado\OneDrive\Desktop\E-portfolio\CV.jpg';
  
    // set the download attribute and trigger a click on the link
    link.download = 'CV.jpg';
    link.click();
  });
  
