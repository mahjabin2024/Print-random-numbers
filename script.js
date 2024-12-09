
var i;
var text="";
{
    let i=0;
    while (i<10){
         text +="The values inside the block: " +i+ "<br>";
         i++;
    }
    document.getElementById("result").innerHTML=text;
    document.write("The value outside the block is: " + i);
}


