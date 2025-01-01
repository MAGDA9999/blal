// function
function Dollar(){
    var inter =document.getElementById("inter").value;
    var output =document.getElementById("output");
    if(inter==""){
        output.innerHTML="Please Enter Your Data";
        return false;
    }else if(isNaN(inter)){
        output.innerHTML="Enter Number Not Text";
        return false;
    }else if(inter<0){
        output.innerHTML="Enter Postive Number";
        return false;
    }else if(inter==0){
        output.innerHTML="Enter Number Rather Than Zero";
        return false;
    }else{
        output.innerHTML= inter * 55 +" " + "L.E";
        return false;
    }
}