document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("9").innerHTML = localStorage.getItem("textInput9AM");
  document.getElementById("10").innerHTML = localStorage.getItem(
    "textInput10AM"
  );

  document.getElementById("11").innerHTML = localStorage.getItem(
    "textInput11AM"
  );

  document.getElementById("12").innerHTML = localStorage.getItem(
    "textInput12PM"
  );

  document.getElementById("13").innerHTML = localStorage.getItem(
    "textInput13PM"
  );

  document.getElementById("14").innerHTML = localStorage.getItem(
    "textInput14PM"
  );

  document.getElementById("15").innerHTML = localStorage.getItem(
    "textInput15PM"
  );

  document.getElementById("16").innerHTML = localStorage.getItem(
    "textInput16PM"
  );

  document.getElementById("17").innerHTML = localStorage.getItem(
    "textInput17PM"
  );
});
const time = moment().format("MMMM Do YYYY, h:mm a");
const placeTime = document.getElementById("currentDay");
placeTime.innerText = time;
var hourMin = moment().format("hh:mm a");
const storeInput = document.querySelector(".storage");
const button = document.getElementById("saveButton");
const storedInput = localStorage.getItem("textinput");

var nineAm = "09:00";
var tenAm = "10:00";
var elevenAm = "11:00";
var twelvePm = "12:00";
var onePm = "13:00";
var twoPm = "14:00";
var threePm = "15:00";
var fourPm = "16:00";
var fivePm = "17:00";

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
      //   localStorage.removeItem("textinput");
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

storeInput.addEventListener("input", (letter) => {
  console.log(letter.target.value);
  test.textContent = letter.target.value;
});

const saveToLocalStorage = () => {
  var value9 = document.getElementById("9").value;
  localStorage.setItem("textInput9AM", value9);
  var value10 = document.getElementById("10").value;
  localStorage.setItem("textInput10AM", value10);
  var value11 = document.getElementById("11").value;
  localStorage.setItem("textInput11AM", value11);

  var value12 = document.getElementById("12").value;
  localStorage.setItem("textInput12PM", value12);

  var value13 = document.getElementById("13").value;
  localStorage.setItem("textInput13PM", value13);

  var value14 = document.getElementById("14").value;
  localStorage.setItem("textInput14PM", value14);

  var value15 = document.getElementById("15").value;
  localStorage.setItem("textInput15PM", value15);

  var value16 = document.getElementById("16").value;
  localStorage.setItem("textInput16PM", value16);

  var value17 = document.getElementById("17").value;
  localStorage.setItem("textInput17PM", value17);
};

if (storeInput) {
  test.textContent = storedInput;
}
