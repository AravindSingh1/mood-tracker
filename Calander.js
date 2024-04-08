let month, year, monthName;
const currentdate = new Date();
month = currentdate.getMonth();
year = currentdate.getFullYear();


//DATA -------------------DATA --------------------DATA//
const days = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
}

const months = {
    0: ["January", 31],
    1: ["February", 28],
    2: ["March", 31],
    3: ["April", 30],
    4: ["May", 31],
    5: ["June", 30],
    6: ["July", 31],
    7: ["August", 31],
    8: ["September", 30],
    9: ["October", 31],
    10: ["November", 30],
    11: ["December", 31]
}
monthName = months[month][0];

const EMOJI = {
    "happy": "😊",
    "sad": "😢",
    "VerySad": "😭",
    "Angry": "😡",
    "Depressed": "😕",
}

let DailyMoodData = {
    // all the data has to be store here//
}


function saveToLOcalStorage() {
    localStorage.MoodData = JSON.stringify(DailyMoodData);
}

if (localStorage.MoodData) {
    DailyMoodData = JSON.parse(localStorage.MoodData);
}

function DateExists(year, month, date) {
    return (!DailyMoodData[year]) || (!DailyMoodData[year][month]) || (!DailyMoodData[year][month][date]);
}


//--------------------------Adding mood data-----------------------------------------------------------------//

let dayEmoji, dayText;
let date;
let dateId;
document.querySelector(".calander").addEventListener("click", add);

function addToData(year, month, date, emoji, comment) {
    if (!DailyMoodData[year]) {
        DailyMoodData[year] = {};
    }
    if (!DailyMoodData[year][month]) {
        DailyMoodData[year][month] = {};
    }
    DailyMoodData[year][month][date] = [emoji, comment];
}

function add(ev) {
    dateId = ev.target.closest(".dateBox").id;
    date = document.getElementById(dateId).children[0].textContent;
    if (document.getElementById(dateId).textContent != "   ") {
        console.log(date, month, year);
        if ((year < currentdate.getFullYear()) || (year == currentdate.getFullYear() && month < currentdate.getMonth()) || (year == currentdate.getFullYear() && month == currentdate.getMonth() && date <= currentdate.getDate())) {
            document.querySelector(".mood").style.scale = "1";
        } else {
            console.log("future");
        }
    }
}


document.querySelector(".emojis").addEventListener("click", takeMoodData);
function takeMoodData(ele) {
    dayEmoji = ele.target.id;
    document.getElementById(dayEmoji).style.scale = "0.7";
    setTimeout(() => {
        document.getElementById(dayEmoji).style.scale = "1";
    }, 200);
}

document.getElementById("moodSetButton").addEventListener("click", close);
function close() {
    dayText = document.getElementById("dayText").value;
    addToData(year, month, date, dayEmoji, dayText);
    document.querySelector(".mood").style.scale = "0";
    dayText = document.getElementById("dayText").value = null;
    init();
}



//--------------------------Calander creating function--------------------------------//


function init() {
    create();
    updateMonthYear()
    fillDates();
    saveToLOcalStorage();
}

function create() {
    let op = "";
    for (let i = 0; i < 42; i++) {
        op += `<div id="dateBox${i}" class="dateBox"> <span id="d${i}"></span> <span class="eachDateEmoji"></span> </div>`;
    }
    document.querySelector(".dates").innerHTML = op;
}


function updateMonthYear() {
    document.querySelector(".monthYear").textContent = `${monthName} ${year}`;
}

function fillDates() {

    let selectedDate = new Date(year, month, 1);
    let startingDay = selectedDate.getDay();
    let noOfDays = months[month][1];

    for (let i = 0; i < noOfDays; i++) {
        document.querySelector(`#dateBox${startingDay + i}`).children[1].id = `dEmoji${i + 1}`;
        document.querySelector(`#d${startingDay + i}`).textContent = i + 1;
        if ((year < currentdate.getFullYear()) || (year == currentdate.getFullYear() && month < currentdate.getMonth()) || (year == currentdate.getFullYear() && month == currentdate.getMonth() && i + 1 <= currentdate.getDate())) {
            // console.log(startingDay + 1 + i);
            document.querySelector(`#dEmoji${i + 1}`).textContent = '☻';}

        //--------------------Adding Emojis-----------------------------------------------------------// 
        if (!DateExists(year, month, i + 1)) {
            let mood = DailyMoodData[year][month][i + 1][0];
            let emoji = EMOJI[mood];
            document.querySelector(`#dEmoji${i + 1}`).textContent = emoji;
            document.querySelector(`#dEmoji${i + 1}`).setAttribute("title", `${mood} \n ${DailyMoodData[year][month][i + 1][1]}`);
            // console.log(DailyMoodData[year][month][i+1][0]);
        }
    }

    // document.querySelector(`#dateBox${startingDay-1+currentdate.getDate()}`).classList.add("current-date");
    let crMonth = new Date().getMonth();
    let crYear = new Date().getFullYear();
    let crDate = new Date().getDate();
    if(month==crMonth && year == crYear){
        document.querySelector(`#dateBox${startingDay-1+crDate}`).classList.add("current-date");
    }
}


//--------------------------Month-year Changing---------------------------------//


document.querySelector(".fa-caret-left").addEventListener('click', prevMonthYear);
document.querySelector(".fa-caret-right").addEventListener('click', nextMonthYear);

function prevMonthYear() {
    if (month > 0) {
        month--;
        monthName = months[month][0];
        init()
    }
    else {
        month = 11;
        year--;
        monthName = months[month][0];
        init();
    }
}
function nextMonthYear() {
    if (month < 11) {
        month++;
        monthName = months[month][0];
        init();
    } else {
        month = 0;
        year++;
        monthName = months[month][0];
        init();
    }
}

init();


// --------------------------Bottom swap function----------------------------//

document.querySelector(".bottom").addEventListener("click", swap);

function swap(elem) {
    let swap = document.querySelector(".wrapper");
    if (elem.target.id == "homeIcon") {
        swap.style.transform = "translateX(-33.25%)";
        document.getElementById("homeIcon").style.scale = "0.8";
        setTimeout(function () {
            document.getElementById("homeIcon").style.scale = "1";            
        }, 500);
    } else if (elem.target.id == "calIcon") {
        swap.style.transform = "translateX(0)"
        document.getElementById("calIcon").style.scale = "0.8";
        document.getElementById("calIcon").style.backgroundColor = "#4CB9E7";
        setTimeout(function () {
            document.getElementById("calIcon").style.scale = "1";
            document.getElementById("calIcon").style.background = "none";         
        }, 500);
    } else if (elem.target.id == "barGraphIcon") {
        swap.style.transform = "translateX(-66.5%)";
        document.getElementById("barGraphIcon").style.scale = "0.8";
        document.getElementById("barGraphIcon").style.backgroundColor = "#4CB9E7";
        setTimeout(function () {
            document.getElementById("barGraphIcon").style.scale = "1";
            document.getElementById("barGraphIcon").style.background = "none";         
        }, 500);
        renderChart("graph");
    }
}


//------------------------------Hover effects--------------------------------//

let dateboxes = document.querySelectorAll(".dateBox");
dateboxes.forEach(function (datebox) {
    if (datebox.textContent == '   ') {
      datebox.style.scale = "0";
    }
});


// ----------------------- Adding daily data---------------------------//
if((!DailyMoodData[currentdate.getFullYear()])||(!DailyMoodData[currentdate.getFullYear()][currentdate.getMonth()])||(!DailyMoodData[currentdate.getFullYear()][currentdate.getMonth()][currentdate.getDate()])){
    date = currentdate.getDate();
    year = currentdate.getFullYear();
    month = currentdate.getMonth();
    document.querySelector(".mood").style.scale = "1";
}
