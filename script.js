var idleImageNo = 1;
var idleWorkerNo = 0;


function idle() {

    idleWorkerNo = setInterval(() => {

        idleImageNo = idleImageNo + 1;

        if (idleImageNo == 16) {

            idleImageNo = 1;
        }

        document.getElementById("zombie").src = "idle" + idleImageNo + ".png";


    }, 80);

}




var timerNo = 30;
var timerWorkerNo = 0;


function timer() {

    timerWorkerNo = setInterval(() => {

        timerNo = timerNo - 1;

        if (timerNo == -1) {

            alert("Game over! press ok");
            window.location.reload();
        }

        document.getElementById("timer").innerHTML = "Time:" + timerNo + "s";

    }, 1000);

}




var runImageNo = 1;
var runWorkerNo = 0;
var knightMarginLeft = 60;
var runSound = new Audio("run.mp3");


function run() {

    runSound.play();

    runWorkerNo = setInterval(() => {

        runImageNo = runImageNo + 1;
        if (runImageNo == 11) {
            runImageNo = 1;
        }
        document.getElementById("knight").src = "run" + runImageNo + ".png";


        knightMarginLeft = knightMarginLeft + 10;
        document.getElementById("knight").style.marginLeft = knightMarginLeft + "px";

        if (knightMarginLeft == 1100) {
            clearInterval(runWorkerNo);
            runSound.pause();
        }

    }, 140)

}



var attackImageNo = 1;
var attackWorkerNo = 0;
var attackSound = new Audio("attack.mp3");
var attackCount = 0;


function attack() {

     attackSound.play();

    attackWorkerNo = setInterval(() => {

       

        attackImageNo = attackImageNo + 1;

        if (attackImageNo == 10) {
            attackImageNo = 1;
            clearInterval(attackWorkerNo);
            


            attackCount = attackCount + 1;

            if (attackCount == 5) {
                alert("You won,Press Ok to Play again");
                window.location.reload();
          

            }
        }

        document.getElementById("knight").src = "attack" + attackImageNo + ".png";

    }, 100);

}




function play(event) {

    if (event.code == "Enter" & timerWorkerNo == 0 ){

        timer();
        idle();
        run();

    }

    if (event.code == "Space" & knightMarginLeft == 1100 & attackImageNo == 1){

        attack();
    }


}