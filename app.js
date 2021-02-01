let flag = 0;
$(".bars").click(()=>{
    if(flag===0){
        $(".min-menu").slideDown();
        flag += 1;
        $(".nav-item").click(()=>{
            $(".min-menu").slideUp();
            flag = 0;
        })
    }else{
        $(".min-menu").slideUp();
        flag = 0;
    }
})
$(document).scroll(()=>{
    const scrollTop = $(document).scrollTop();
    const navHeight = $("nav").height();
    if(scrollTop>navHeight) {
        $("nav").addClass("nav-fixed");
        $(".nav-item a").css("color","black");
    }else{
        $("nav").removeClass("nav-fixed");
        $(".nav-item a").css("color","white");
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
    });
})