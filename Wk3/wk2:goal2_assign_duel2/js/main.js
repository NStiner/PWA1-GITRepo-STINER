/*
 Nicole Stiner
 03/11/15
 Assignment: Develop Duel week 3
 */

/*** Pseudocode ***/
/*
DISPLAY player names, player healths, starting round


/*** player One health > 1 , player two health < 1 ***/
/*
PSEUDOCODE:
    DISPLAY  player one health > 1 , player two health < 1
    CALCULATE winner
    RESET counters
    START new fight
*/

/*** player one health < 1 , player two health > 1 ***/
/*
PSEUDOCODE:
    DISPLAY player one health > 1 , player two health < 1
    CALCULATE winner
    RESET counters
    START new fight
*/

/*** both players health < 1 ***/
/*
PSEUDOCODE:
    DISPLAY play one health < 1 , player two health < 1
    RESET counters
    START new fight
*/

/*** both players have health > 1 ***/
/*
PSEUDOCODE:
    DISPLAY play one health > 1 , player two health > 1
    READ round
    CALCULATE life
    RETURN values
    STORE life
    START next round
*/

/*** max rounds reached - round 10 and both players health > 1 ***/
/*
PSEUDOCODE:
    READ max rounds
    READ player one health > 1 && player two health > 1
    CALCULATE life
    RETURN values
    STORE life
    START next round
 */

//self-executing function
(function(){

    console.log("FIGHT!!!");

    //Using objects
    var player1 = {name:Kabal, damage:20, health:100};
    var player2 = {name:Kratos, damage:20, health:100};

    //Using Arrays
//    var player1 = ["Kabal", 20, 100];
//    var player2 = ["Kratos", 20, 100];

    //player names
//    var playerOneName = "Kabal";
//    var playerTwoName = "Kratos";

    //player damage
//    var playerOneDamage = 20;
//    var playerTwoDamage = 20;

    //player health
//    var playerOneHealth = 100;
//    var playerTwoHealth = 100;

    //round
    var round = 0;

    //functions
    function fight(){
        alert(player1[0] + ":" + " " + player1[2] + " " + "*START*" + " " + player2[0] + ":" + " " + player2[2]);

        for (var i=0; i<10; i++) {
            var minDamage1 = player1[1] * .5;
            var minDamage2 = player2[1] * .5;
            var f1 = Math.floor(Math.random() * (player1[1] - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (player1[1] - minDamage2) + minDamage2);

            //inflicting damage
            player1[2] -= f1;
            player2[2] -= f2;

            console.log(player1[0] + ":" + " " + player1[2] + " " + " " + player2[0] + ":" + " " + player2[2]);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner") {
                round++;
                alert(player1[0] + ":" + " " + player1[2] + " " + "*ROUND" + " " + round + " " + "OVER*" + " " + player2[0] + ":" + " " + player2[2]);
            } else {
                alert(results);
                break;
            };
        };
    };

    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result = "no winner";

        if(player1[2] < 1 && player2[2] < 1){
            result = "You both die"
        }else if(player1[2] < 1){
            result = player2[0] + " " + "WINS!!!"
        }else if(player2[2] < 1){
            result = player1[0] + " " + "WINS!!!"
        };
        return result;
    };

/**** The program gets started below ****/
    console.log('program starts');
    fight();


})();