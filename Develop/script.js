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

var nineAm = "09:00";
var tenAm = "10:00";
var elevenAm = "11:00";
var twelvePm = "12:50";
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
  var timeArrayb = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  for (let a = 0; a < timeArray.length; a++) {
    if (convertedHourMin > timeArray[a] && convertedHourMin < timeArrayb[b]) {
      var storeID = document.getElementById(id);
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

var storageArray = [
  "storage1",
  "storage2",
  "storage3",
  "storage4",
  "storage5",
  "storage6",
  "storage7",
  "storage8",
  "storage9",
];

storeInput.addEventListener("input", (letter) => {
  console.log(letter.target.value);
  test.textContent = letter.target.value;
});

const saveToLocalStorage = () => {
  localStorage.setItem("textinput", test.textContent);
};
//-----

// if (storeInput) {
//   test.textContent = storedInput;
// }

test.textContent = storedInput;

button.addEventListener("click", saveToLocalStorage);

// Remove data from local storage
// localStorage.removeItem("textinput");
