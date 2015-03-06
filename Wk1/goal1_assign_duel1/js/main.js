/*
 Nicole Stiner
 03/05/15
 Assignment: Duel 1
 */

//self-executing function
(function(){

    console.log("FIGHT!!!");

    //player names
    var playerOneName = "Kabal";
    var playerTwoName = "Kratos";

    //player damage
    var playerOneDamage = 20;
    var playerTwoDamage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //round
    var round =1;

    //functions
    function fight(){
        console.log('in the fight function');

        alert(playerOneName + ":" + " " + playerOneHealth + " " + "*START*" + " " + playerTwoName + ":" + " " + playerTwoHealth);

        for (var i=0; i<10; i++){
            var minDamage1 = playerOneDamage * .5;
            var minDamage2 = playerTwoDamage * .5;
            var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

            //inflicting damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName + ":" + " " + playerOneHealth + " " + " " + playerTwoName + ":" + " " + playerTwoHealth);
         //random formula is Math.floor(Math.random() * (max - min) + min);


        };
        var results = winnerCheck();
        console.log(results);
    };

    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result = "no winner";

        if(playerOneHealth < 1 && playerTwoHealth <1){
            result = "You both die"
        }else if(playerOneHealth < 1){
            result = playerTwoName + " " + "WINS!!!"
        }else if(playerTwoHealth < 1){
            result = playerOneName + " " + "WINS!!!"
        };
        return result;
    };

/**** The program gets started below ****/
    console.log('program starts');
    fight();


})();