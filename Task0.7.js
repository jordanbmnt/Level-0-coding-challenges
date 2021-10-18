function celsiusToFahrenheit (temp){
    var sum = ((temp * (9/5))+32);
    console.log(sum);
}


function fahrenheitToCelsius (temp){
    var sum = ((temp - 32) * (5/9));
    console.log(sum);
}

celsiusToFahrenheit(40);
fahrenheitToCelsius(140);