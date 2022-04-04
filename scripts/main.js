var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");


var div_sizes=[];
var divs=[];
var margin_size;
var margin1;
var x=[];
var cont=document.getElementById("data");


inp_gen.document.addEventListener("click",generate_array);
inp_as.document.addEventListener("input",update_array_size);


function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 1.81 * (inp_as.max - inp_as.min) ) + 5;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        // x[i]=document.createElement("label");
        // x[i].setAttribute('class','lab');
        // divs[i].appendChild(x[i]);
        divs[i].innerText=div_sizes[i];
        divs[i].style=" margin:" + margin_size + "%; background-image: linear-gradient( to right, #4a47a3, #000080); width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();
