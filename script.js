function formValidator() {
    var principal = document.getElementById("principal");

    if(principal.value == 0 || principal.value < 0)
    {
        alert("Enter a positive number (above zero), e.g. 1, 7, 23, etc");
        principal.focus();
        return false;
    }
}
function compute()
{
    //user input variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //system variables
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = "<br />If you deposit <strong>" + principal + "</strong>,<br />" +
                "at an interest rate of <strong>" + rate + "%</strong>. <br />" +
                "You will receive an amount of <strong>" + interest + "</strong>,<br />" +
                "in the year <strong>" + year + "</strong>.";

    //a function for validating the form
    
    //displaying the results to the screen            
    document.getElementById("result").innerHTML=result;
    
}
function updateRate(){
    //retrieving the value of the slider
    var rateVal = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText=rateVal;
}

        
