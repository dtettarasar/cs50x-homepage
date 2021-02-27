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

// function to get scroll position

function logScroll()
{
  let scroll = window.pageYOffset;
  return scroll;
}

// script for counters

//we have to do the counter animation only once. This bool is here to track that
let counterDone = false;

const counterNodeList = document.querySelectorAll("[id^=counter-]");
const numbersArray = [7, 80, 5];

function counterAnimation(counterDiv, index)
{

  // if the numbersArray and the counterNodeList don't have the same length, there will be an error. the condition below is here to prevent that
  if (numbersArray.length != counterNodeList.length)
  {
    console.log("warning : numbersArray.length & counterNodeList.length are different");
    return false;
  }

  let counter = 0;

  //Define a variable for the interval, to make sure each countdown finish their animation at roughly at the same time
  let time = 1600 / numbersArray[index];

  let i = setInterval(function()
  {
    counterDiv.innerHTML = counter;
    counter++;
    if (counter === numbersArray[index] + 1)
    {
      clearInterval(i);
    }
  }, time);

}

function execAnimation(sectionTop)
{
  let scrollPosition = logScroll();

  // check if we reached the figure section on the page & if the animation hasn't already been done
  if(scrollPosition >= sectionTop && counterDone == false)
    {
      for (let j = 0; j < numbersArray.length; j++)
      {
        counterAnimation(counterNodeList[j], j);
        console.log(j);
      }
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

// script for the registration form

// only execute the script if the form is on the page
if(document.getElementById("register-form"))
{
  const submitBtn = document.querySelector("#submit");

  submitBtn.addEventListener("click", function(evnt)
  {
    evnt.preventDefault();
    const attendee = getAttendeeInfos();
    checkSubmission(attendee);
  });

}

//function to get radio value
function getRadioValue(radioInput)
{
  let chosenRadio = "";
  for (let i = 0; i < radioInput.length; i++)
  {
    if(radioInput[i].checked)
    {
      chosenRadio = radioInput[i].value;
      //only one radio can be checked, so we stop the loop once we've found the checked one
      break;
    }
  }
  if(!chosenRadio)
  {
    chosenRadio = "none";
  }
  return chosenRadio;
}

//function to get text area value
function getTxtValue(txtInput)
{
  let txt = "";
  if(txtInput.value == "")
  {
    txt = "none";
  }
  else
  {
    txt = txtInput.value;
  }
  return txt;
}

//function to get checkboxes value
function getCheckBoxesValue(checkboxNodeList)
{
  let checkboxesArray = [];
  for (let i = 0; i < checkboxNodeList.length; i++)
  {
    if(checkboxNodeList[i].checked)
    {
      checkboxesArray.push(checkboxNodeList[i].value);
    }
  }

  //if nothing has been chosen
  if(checkboxesArray.length == 0)
  {
    checkboxesArray.push("none");
  }

  return checkboxesArray;

}

//function to get the user's registration datas
function getAttendeeInfos()
{

  // build the object that record every infos submitted by the attendee on registration
  const attendee = 
  {
    firstName : getTxtValue(document.querySelector("#first-name-input")),
    lastName : getTxtValue(document.querySelector("#last-name-input")),
    title : getTxtValue(document.querySelector("#job-title-input")),
    email : getTxtValue(document.querySelector("#email-input")),
    phone : getTxtValue(document.querySelector("#phone-input")),
    companyName : getTxtValue(document.querySelector("#company-input")),
    companyAddress : getTxtValue(document.querySelector("#address-input")),
    companyCity : getTxtValue(document.querySelector("#city-input")),
    companyState : getTxtValue(document.querySelector("#state-input")),
    companyZipCode : getTxtValue(document.querySelector("#zip-code-input")),
    workShopChoice : getRadioValue(document.querySelectorAll(".workshop-selection")),
    topicsChoice : getCheckBoxesValue(document.querySelectorAll(".topic-selection")),
    otherTopics : getTxtValue(document.querySelector("#other-topics-text")),
    allergies : getTxtValue(document.querySelector("#allergies-input")),
    vegan : getRadioValue(document.querySelectorAll(".vegan")),
    comment : getTxtValue(document.querySelector("#comment-input"))
  }

  return attendee;

}

//function to check the submission
function checkSubmission(obj)
{
  console.log(obj);

  // TODO
  // to check if every value are valid. if not : alert + write on the form the errors to check

  //if every value are valids 
  return true;
}

// end of script for the registration form