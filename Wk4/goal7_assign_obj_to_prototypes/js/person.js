/**
 * Nicole Stiner
 *03/25/2015
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){

    //make person global so main can see it
    window.Person=Person;

    //adds all of the jobs and actions to the person
    Person.jobs = ["Doctor","Fireman","Student","Teacher"];
    Person.actions = ["Sleeping","Working","Eating"];

    function Person(name,row){

        console.log("Person Created: ", name);

        this.name = name;

        //randomly selects 3 out of 5 names
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        //randomly sets job
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //defines the row
        this.row = row;

        //display first action given
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }

    //cycle through actions every couple seconds
    Person.prototype.update = function(){
        if(Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            //use inner html to display the random action
            id.innerHTML=this.action;
        }
    }

})();

