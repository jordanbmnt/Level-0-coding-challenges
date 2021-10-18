function timeConverter(num){
    if (num == 60){
        console.log("1 Hour");
    }else if (num == 1){
        console.log(num + " minute");
    }else if (num == 1){
        console.log(num + " minute");
    }else if (num < 60){
        console.log(num + " minutes");
    }else if (num > 60){
        var amountOfMinutes = num%60;
        var amountOfHours = ((num-amountOfMinutes)/60);
        if (num % 60 == 0){
            console.log(amountOfHours + " Hours");
        }else if (num % 60 > 0){
            if((amountOfHours == 1)&&(amountOfMinutes ==1)){
                console.log(amountOfHours + " Hour, " + amountOfMinutes + " minute");
            }else if(amountOfMinutes == 1){
                console.log(amountOfHours + " Hours, " + amountOfMinutes + " minute");
            }else if(amountOfHours == 1){
                console.log(amountOfHours + " Hour, " + amountOfMinutes + " minutes");
            }else{
                console.log(amountOfHours + " Hours, " + amountOfMinutes + " minutes");
            }
            
        }
    }
}

timeConverter(121);