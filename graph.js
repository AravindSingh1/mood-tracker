// document.addEventListener("DOMContentLoaded", ()=>{
// })

// --------------------------------- Graph Data----------------------------//

//   let testObj = { happy: 4, sad: 2, verySad: 2, angry: 3, depressed: 6 };
let resultArray = [];

//   let total = 17;
//   testResArr = []
//   Object.keys(testObj).forEach(key => {
//     let obj = {name:key, y:((testObj[key]*100)/total).toFixed(2)};
//     testResArr.push(obj);
//   });
//   console.log(testResArr);

let total = 0;
let moodsObj = {
    Happy: 0,
    Sad: 0,
    "Very Sad": 0,
    Angry: 0,
    Depressed: 0
}
function iterator() {
    for (let i = 0; i < Object.keys(DailyMoodData).length; i++) {
        let eachYear = Object.keys(DailyMoodData)[i];
        for (let j = 0; j < Object.keys(DailyMoodData[eachYear]).length; j++) {
            let eachMonth = Object.keys(DailyMoodData[eachYear])[j];
            for (let k = 0; k < Object.keys(DailyMoodData[eachYear][eachMonth]).length; k++) {
                let eachDayM = Object.values(DailyMoodData[eachYear][eachMonth])[k][0];
                // console.log(eachDayM);
                switch (eachDayM) {
                    case "happy":
                        moodsObj.Happy++;
                        total++;
                        break;
                    case "sad":
                        moodsObj.Sad++
                        total++;
                        break;
                    case "VerySad":
                        moodsObj["Very Sad"]++;
                        total++;
                        break;
                    case "Angry":
                        moodsObj.Angry++;
                        total++;
                        break;
                    case "Depressed":
                        moodsObj.Depressed++;
                        total++;
                        break;
                    default:
                        break;
                }
            }
        }
    }
    Object.keys(moodsObj).forEach(key => {
        let oneObj = { name: key, y: Number((moodsObj[key] * 100) / total) };
        resultArray.push(oneObj);
        // console.log(resultArray);
    })
}


function renderChart(div) {
    // console.log("Loaded")
    Highcharts.chart(div, {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
            style: {
                fontFamily: 'Montserrat, sans-serif',
            }
        },
        title: {
            text: 'Mood Percentage',
            style: {
                color: 'white'
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        subtitle: {
            text: 'Your monthly mood stats.',
            style: {
                color: '#a0a0a0',
            }
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 25,
                    color: 'black',
                    style: {
                        fontSize: '13px',
                    }
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.2f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 1
                      }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: resultArray,
            }
        ],
    })
}
iterator();
renderChart("graph");
