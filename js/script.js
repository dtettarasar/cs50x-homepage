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

// script to get scroll position

function logScroll()
{
  let scroll = window.pageYOffset;
  return scroll;
}

// end of script to get scroll position

// script for counters

//we have to do the counter animation only once. This bool is here to track that
let counterDone = false;

function counterAnimation()
{
  const counterNodeList = document.querySelectorAll("[id^=counter-]");
  const numbersArray = [7, 80, 5];

  if (numbersArray.length != counterNodeList.length)
  {
    console.log("warning : numbersArray.length & counterNodeList.length are different");
    return false;
  }

  console.log(numbersArray);
  console.log(counterNodeList[0]);
  console.log(counterNodeList.length);
  counterNodeList[0].innerHTML = 12;
}

function execAnimation(sectionTop)
{
  let scrollPosition = logScroll();

  // check if we reached the figure section on the page & if the animation hasn't already been done
  if(scrollPosition >= sectionTop && counterDone == false)
    {
      counterAnimation();
      counterDone = true;
    }
}

//only execute the function if the figure section exists
if(document.getElementById("figures-section"))
{
  const figureSection = document.getElementById("figures-section");
  const figureSectionTop = figureSection.getBoundingClientRect().top;

  window.addEventListener('scroll', function()
  {
    execAnimation(figureSectionTop);
  });
}

// end of script for counters