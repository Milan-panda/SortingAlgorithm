var speed=1000;
var inp_aspeed=document.getElementById("a_speed");
inp_aspeed.addEventListener("input",vspeed);
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var cont=document.getElementById("data");

// function to calculate speed
function vspeed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=500;
                break;
        case 5: speed=1000;
                break;
    }

    delay_time=10000/(Math.floor(array_size/10)*speed); //Decreases numerator to increase the speed of algorithm
}

var delay_time=10000/(Math.floor(array_size/10)*speed);
var delay =0; //dealy is updated over every div change so that the visualisation is visible

//update function takes parameters as height color and cont
// this function changes background colour and height of the sorting elements
function update(cont,height,color){
    window.setTimeout(function(){
        cont.style=" margin: 0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background:" + color + ";";
    },delay+=delay_time);
}

//to disable buttons while sorting
function disable()
{
        document.getElementById("bbtn").disabled = true;
        document.getElementById("qbtn").disabled = true;
        document.getElementById("mbtn").disabled = true;
        document.getElementById("hbtn").disabled = true;
        document.getElementById("ibtn").disabled = true;
        document.getElementById("sbtn").disabled = true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
}

//to enable buttons after sorting
function enable(){
    window.setTimeout(function(){
        document.getElementById("bbtn").disabled = false;
        document.getElementById("qbtn").disabled = false;
        document.getElementById("mbtn").disabled = false;
        document.getElementById("hbtn").disabled = false;
        document.getElementById("ibtn").disabled = false;
        document.getElementById("sbtn").disabled = false;
        inp_as.disabled=false;
        inp_gen.disabled=false;
        inp_aspeed.disabled=false;
    },delay+=delay_time);
}

function swap(cont,number){
    window.setTimeout(function(){
        cont.innerHTML=number;
    },delay+=delay_time);
}
