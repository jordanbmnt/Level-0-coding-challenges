function timeConverter(num){
    if (num == 0){
        console.log(num, "hours,", num, "minutes")
    }else if (num == 60){
        console.log(num, " hours,", "0 minutes");
    }else if (num == 1){
        console.log("0 hours, ", num + " minute");
    }else if (num < 60){
        console.log("0 hours, ", num + " minutes");
    }else if (num > 60){
        var amountOfMinutes = num%60;
        var amountOfHours = ((num-amountOfMinutes)/60);
        if (num % 60 == 0){
            console.log(amountOfHours + " hours, 0 minutes");
        }else if (num % 60 > 0){
            if((amountOfHours == 1)&&(amountOfMinutes ==1)){
                console.log(amountOfHours + " hour, " + amountOfMinutes + " minute");
            }else if(amountOfMinutes == 1){
                console.log(amountOfHours + " hours, " + amountOfMinutes + " minute");
            }else if(amountOfHours == 1){
                console.log(amountOfHours + " hour, " + amountOfMinutes + " minutes");
            }else{
                console.log(amountOfHours + " hours, " + amountOfMinutes + " minutes");
            }
            
        }
    }
}

timeConverter(62);
timeConverter(61);
timeConverter(51);
timeConverter(0);
timeConverter(1);
