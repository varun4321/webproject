function calctip(){
    var billamount = document.getElementById("billamount").value;
    var servicequality = document.getElementById("servicequality").value;
    var numpeople = document.getElementById("totalpeople").value;
    
    if(billamount==="" || servicequality==0){
        window.alert("Pls Enter some values to get this baby up and running!");
        return;
    }
    if(numpeople === "" || numpeople<=1){
        numpeople=1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }

    var total = (billamount*servicequality)/numpeople;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);
    // window.alert(total);
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}



document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {calctip();};