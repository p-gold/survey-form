let nav = document.querySelector(".header");
let sticky = nav.offsetTop;

function stick(){
    if(window.pageYOffset >= sticky){
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky');
    }
};

window.onscroll = function(){stick()};