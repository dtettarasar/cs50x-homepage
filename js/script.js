// script for go to top button

var btnTop = document.getElementById('btn-top');

function goToTop(){
  window.scrollTo(0, 0);
}

function displayBtn(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = 'block';
  }else{
    btnTop.style.display = 'none';
  }
}

window.onscroll = function(){displayBtn()};
btnTop.addEventListener("click",goToTop);

// end of script for go to top button