let flag = 0;
$(".bars").click(()=>{
    if(flag===0){
        $(".min-menu").slideDown();
        $(".nav").addClass("white");
        console.log($(".nav").css("background"))
        flag += 1;
        $(".nav-item").click(()=>{
            $(".min-menu").slideUp();
            flag = 0;
        })
    }else{
        $(".min-menu").slideUp();
        $(".nav").removeClass("white");
        flag = 0;
    }
})
$(document).scroll(()=>{
    const scrollTop = $(document).scrollTop();
    const navHeight = $("nav").height();
    if(scrollTop>=navHeight) {
        $("nav").addClass("nav-fixed");
        $(".nav-item a").css("color","black");
    }else{
        $("nav").removeClass("nav-fixed");
        $(".nav").removeClass("white");
        $(".nav-item a").css("color","black");
    }
})
const nav = document.getElementById("nav");
const scrollLinks = document.querySelectorAll(".nav-item");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.innerText;
        const divCont = document.getElementById(id);
        let divHeight = divCont.offsetTop;
        let navHeight;
        if (nav.classList[1]!=="nav-fixed"){
            navHeight = 165;
            if(window.outerWidth <= 805){
                navHeight = 375;
            }
        }else{
            navHeight = 84;
        }
        window.scrollTo({
            left: 0,
            top: divHeight - navHeight,
            behavior: 'smooth'
        });
        console.log(window.outerWidth);
    });
});
const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    const divCont = document.getElementById("Tours");
    let navHeight;
    let divHeight = divCont.offsetTop;
    if (nav.classList[1]!=="nav-fixed"){
        navHeight = 165;
        if(window.outerWidth <= 805){
            navHeight = 200;
        }
    }else{
        navHeight = 84;
    }
    window.scrollTo({
        left: 0,
        top: divHeight - navHeight,
        behavior: 'smooth'
    });
})