function celsiusToFahrenheit (temp){
    var sum = ((temp * (9/5))+32);
    return sum;
}


function fahrenheitToCelsius (temp){
    var sum = ((temp - 32) * (5/9));
    return sum;
}

celsiusToFahrenheit(40);
fahrenheitToCelsius(140);