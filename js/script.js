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

function counterAnimation()
{
  const counterNodeList = document.querySelectorAll("[id^=counter-]");
  const numbersArray = [7, 80, 5];

  console.log(numbersArray);
  console.log(counterNodeList[0]);
  console.log(counterNodeList.length);
  counterNodeList[0].innerHTML = 12;
}

//only execute the function if the figure section exists
if(document.getElementById("figures-section"))
{
  counterAnimation();
}


// end of script for counters