// Kilometer to meter Converter
function kilometerToMeter(num) {
    var meter = num * 1000;
    return meter;
}
var result = kilometerToMeter(7);
if(result<0) {
    console.log('Your input is not a valid number.')
} else{
    console.log(result);
}





//Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var result = watch * 50 + phone * 100 + laptop * 500;
    return result;
}

var budget = budgetCalculator(5, 10, 7);
if(budget<0) {
    console.log('Your input is not a valid number.')
} else{
    console.log(budget);
}



// Hotel Cost 
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
        return cost;
    }
    else if (day <= 20) {
        var tenDayPrice = 10 * 100;
        var remaining = day - 10;
        var secondTenDayPrice = remaining * 80;
        cost = tenDayPrice + secondTenDayPrice;
        return cost;
    }
    else {
        var tenDayPrice = 10 * 100;
        var secondTenDayPrice = 10 * 80;
        var remaining = day - 20;
        var remainingDayPrice = remaining * 50;
        cost = tenDayPrice + secondTenDayPrice + remainingDayPrice;
        return cost;
    }
}

var totalCost = hotelCost(12);
if(totalCost<0) {
    console.log('Your input is not a valid number')
} else{
    console.log(totalCost);
}

