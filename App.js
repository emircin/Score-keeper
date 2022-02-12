let buttonHome = document.querySelector("#button-home");
let buttonAway = document.querySelector("#button-away");

let scoreHome = document.querySelector("#score-home");
let scoreAway = document.querySelector("#score-away");
let scorePeriod = document.querySelector("#score-period")


let winFirstMatch1 = document.querySelector("#score1-home")
let winFirstMatch2 = document.querySelector("#score2-home")
let winFirstMatch3 = document.querySelector("#score3-home")
let winFirstMatch4 = document.querySelector("#score1-away")
let winFirstMatch5 = document.querySelector("#score2-away")
let winFirstMatch6 = document.querySelector("#score3-away")

var a = 0;
var b = 0;

let winner = document.querySelector("#winner")




buttonHome.addEventListener("click", ()=>{


    scoreHome.innerText = (Number(scoreHome.innerText) + 1).toString().padStart(2, "0");
    if (scoreHome.innerText == 15) {

        scorePeriod.innerText = (parseInt(scorePeriod.innerText) + 1).toString().padStart(2, "0");

        scoreHome.innerText = "00";

        if (scorePeriod.innerText == "01") { 

            winFirstMatch1.style.backgroundColor = "green";

            a = a + 1 

        }
        if (scorePeriod.innerText == "02") { 

            winFirstMatch2.style.backgroundColor = "green";
            a++

        }
        if (scorePeriod.innerText == "03") { 

            winFirstMatch3.style.backgroundColor = "green";
            a++
            

        }



    }
    if (a == 3 || b == 3 || (a == 2 && b == 1) || (a == 1 && b == 2)) {
        setTimeout(() => (winner.innerHTML = "<img src='./images/giphy.gif' alt=''></img>"),
        
        1000);

        setTimeout(() => (scorePeriod.innerText = "00"),
        
        1000);
    };

});

buttonAway.addEventListener("click", ()=>{

    scoreAway.innerText = (parseInt(scoreAway.innerText) + 1).toString().padStart(2, "0");

    if (scoreAway.innerText == 15) {

        scorePeriod.innerText = (parseInt(scorePeriod.innerText) + 1).toString().padStart(2, "0");

        scoreAway.innerText = "00";

        if (scorePeriod.innerText == "01") { 

            winFirstMatch4.style.backgroundColor = "green";
            b++

        }
        if (scorePeriod.innerText == "02") { 

            winFirstMatch5.style.backgroundColor = "green";
            b++

        }
        if (scorePeriod.innerText == "03") { 

            winFirstMatch6.style.backgroundColor = "green";
            b++

        }
        


    }

    if (a == 3 || b == 3 || (a == 2 && b == 1) || (a == 1 && b == 2)) {
        setTimeout(() => (winner.innerHTML = "<img src='./images/giphy.gif' alt='' width='200px'></img>"),
        
        1000);

        setTimeout(() => (scorePeriod.innerText = "00"),
        
        1000);

        
    };

    

});

