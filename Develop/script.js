// console.log(moment().format("dddd, MMMM Do"));

// const hourMin = moment().format("LT");
// const time = moment().format("dddd, MMMM Do");
const time = moment().format("MMMM Do YYYY, h:mm a");
const placeTime = document.getElementById("currentDay");
placeTime.innerText = time;
var hourMin = moment().format("hh:mm a");
const storeInput = document.querySelector(".storage");
const test = document.querySelector(".text9");
const button = document.querySelector(".save9");
const storedInput = localStorage.getItem("textinput");

// var tenAm = moment().format("10:00a");
var nineAm = "09:00";
var tenAm = "10:00";
// var nineAm = moment("09:00am", "h:mma");
// var tenAm = moment("10:00am", "h:mma");
var elevenAm = "11:00";
var twelvePm = "12:50";
// var onePm = moment().format("1:00p");
var onePm = "13:00";
var twoPm = "14:00";
var threePm = "15:00";
var fourPm = "16:00";
var fivePm = "17:00";

// console.log(hourMin);

// ----Dont delete yet ------------------
// function convert(input) {
//   return moment(input, "HH:mm").format("h:mm a");
// }

// console.log(convert("20:00"));
// console.log(convert("08:00"));
// console.log(convert("16:30"));
//----------------------------------------

function convert(input) {
  return moment(input, "h:mm a").format("HH:mm");
}

// console.log(convert(hourMin));
var convertedHourMin = convert(hourMin);

var timeArray = [
  nineAm,
  tenAm,
  elevenAm,
  twelvePm,
  onePm,
  twoPm,
  threePm,
  fourPm,
  fivePm,
];

// var TimeID = [9, 10, 11, 12, 1, 2, 3, 4, 5];

//Check current time
// if (convertedHourMin <= "08:00") {
//   var storeID = document.getElementById("9");
//   storeID.classList.remove("past");
//   storeID.classList.add("future");
// } else {
//   timeBlockColor();
// }

hasDaychanged();
checkPresentTime();

//Present timeslot
function checkPresentTime() {
  var b = 1;
  var id = 9;
  for (let a = 0; a < timeArray.length; a++) {
    console.log("start for time-----");
    console.log(convertedHourMin);
    console.log("Present Test-----");
    console.log(timeArray[a]);
    console.log(timeArray[b]);
    console.log("----END--Present Test-----");
    if (convertedHourMin > timeArray[a] && convertedHourMin < timeArray[b]) {
      console.log("-----in if----------");
      console.log(timeArray[a]);
      console.log(timeArray[b]);
      console.log("------end if---------");
      var storeID = document.getElementById(id);
      console.log("P store loop");
      console.log(storeID);
      storeID.classList.remove("future");
      storeID.classList.remove("past");
      storeID.classList.add("present");
    }
    id++;
    b++;
  }
}

//Check current time
function hasDaychanged() {
  var id = 9;
  for (let i = 0; i < timeArray.length; i++) {
    if (convertedHourMin <= "08:00") {
      const storeID = document.getElementById(id);
      storeID.classList.remove("past");
      storeID.classList.add("future");
      id++;
    } else {
      timeBlockColor();
    }
  }
}

//Change Time Block Color
function timeBlockColor() {
  var id = 9;
  for (let i = 0; i < timeArray.length; i++) {
    if (convertedHourMin > timeArray[i]) {
      var storeID = document.getElementById(id);
      storeID.classList.remove("future");
      storeID.classList.add("past");
      id++;
    }
  }
}

const parentList = document.getElementById("52");
const listChildren = parentList.children;

console.log(listChildren[1]);

storeInput.addEventListener("input", (letter) => {
  console.log(letter.target.value);
  test.textContent = letter.target.value;
});

const saveToLocalStorage = () => {
  var value = currentNode.nextElementsibling;
  var time = localStorage.setItem("textinput", test.textContent);

  console.log(value);
  console.log(time);
};

button.addEventListener("click", saveToLocalStorage);

if (storeInput) {
  test.textContent = storedInput;
}

// Remove data from local storage
// localStorage.removeItem("textinput");
