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

        for (var i=0; i<10; i++){
            console.log(i);
        };
        /*winnerCheck()*/
    };

    function winnerCheck(){
        //code will go here
    };

/**** The program gets started below ****/
    console.log('program starts');
    fight();


})();