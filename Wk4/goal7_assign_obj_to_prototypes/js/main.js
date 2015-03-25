/**
 * Nicole Stiner
 * 03/25/2015
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){
    //Created all variables
    var numOfPeople =3;
    var people = [];
    var names = ["Nicole","Travis","Holly","James","Chelsea"];
    var interval;

    //Created loop to randomly select persons names and display them
    for(var i = 0; i<numOfPeople;i++){

        //make a number between 1-5
        var personIndex = Math.floor(Math.random()*names.length);

        //Selecting new person
        var person = new Person(names[personIndex],i+1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);
    }


})();