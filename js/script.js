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

// script for counters

const counterNodeList = document.querySelectorAll("[id^=counter-]");
console.log(counterNodeList[0]);
console.log(counterNodeList.length);
counterNodeList[0].innerHTML = 12;


// end of script for counters