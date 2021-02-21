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

// var to get checkbox and text field's element
let otherTopicsCheckBox;
let otherTopicsText;

// only execute the script if the form is on the page

if(document.getElementById("register-form"))
{
  otherTopicsCheckBox = document.querySelector("#other-topics-checkbox");
  otherTopicsText = document.querySelector("#other-topics-text");

  const submitBtn = document.querySelector("#submit");

  submitBtn.addEventListener("click", function(evnt)
  {
    evnt.preventDefault();
    const attendee = getAttendeeInfos();
    checkSubmission(attendee);
  });

  // addEventListeners
  otherTopicsText.addEventListener("input", otherTopicsCheck);
  otherTopicsCheckBox.addEventListener("click", textFocus);
}

//function to get the user's registration datas
function getAttendeeInfos()
{

  //get the workshop chosen by the attendee
  const radioWs = document.querySelectorAll(".workshop-selection");
  let chosenWorkshop = "";
  for(let i = 0; i < radioWs.length; i++)
  {
    if (radioWs[i].checked)
    {
      chosenWorkshop = radioWs[i].value;
      //only one radio can be checked, so we stop the loop once we've found the checked one
      break;
    }
  }

  //get the topics chosen by the attendee
  const checkboxTopics = document.querySelectorAll(".topic-selection");
  const otherTopicsTxt = document.querySelector("#other-topics-text");
  let topicsArray = [];
  for(let i = 0; i < checkboxTopics.length; i++)
  {
    if (checkboxTopics[i].checked)
    {
      topicsArray.push(checkboxTopics[i].value);
    }
  }

  //check if there's other topics mentionned by the attendee

  console.log(otherTopicsTxt.value);

  // build the object that record every infos submitted by the attendee on registration
  const attendee = {
    firstName : document.querySelector("#first-name-input").value,
    lastName : document.querySelector("#last-name-input").value,
    title : document.querySelector("#job-title-input").value,
    email : document.querySelector("#email-input").value,
    phone : document.querySelector("#phone-input").value,
    companyName : document.querySelector("#company-input").value,
    companyAddress : document.querySelector("#address-input").value,
    companyCity : document.querySelector("#city-input").value,
    companyState : document.querySelector("#state-input").value,
    companyZipCode : document.querySelector("#zip-code-input").value,
    workShopChoice : chosenWorkshop,
    topicsChoice : topicsArray
  }

  return attendee;

}

//function to check the submission
function checkSubmission(obj)
{
  console.log(obj);

  // TODO
  // to check if every value are valid. if not alert + write on the form the errors to check
}


// function to focus on the other topics' text field, if you check its box
function textFocus()
{
  if(otherTopicsCheckBox.checked)
  {
    otherTopicsText.focus();
  }
}

// function to check or uncheck the box, depending on the text field's content
function otherTopicsCheck()
{
  if(otherTopicsText.value == "")
  {
    // if text field empty : uncheck the box
    otherTopicsCheckBox.checked = false;
  }
  else
  {
    // if there's something typed in the text field, check the box
    otherTopicsCheckBox.checked = true;
  }
}

// end of script for the registration form