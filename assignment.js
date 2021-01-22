// https://github.com/rawshad/Module16-Assignment-Assignment-3-

// kilometerToMeter
function kilometerToMeter(num) {
    var meter = num * 1000;
    return meter;
}
var result = kilometerToMeter(7);
if (result < 0) {
    console.log('Your input is not a valid number.')
} else {
    console.log(result);
}





// budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    var result = watch * 50 + phone * 100 + laptop * 500;
    return result;
}

var budget = budgetCalculator(5, 10, 7);
if (budget < 0) {
    console.log('Your input is not a valid number.')
} else {
    console.log(budget);
}



// hotelCost 
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var tenDayPrice = 10 * 100;
        var remaining = day - 10;
        var secondTenDayPrice = remaining * 80;
        cost = tenDayPrice + secondTenDayPrice;
    }
    else {
        var tenDayPrice = 10 * 100;
        var secondTenDayPrice = 10 * 80;
        var remaining = day - 20;
        var remainingDayPrice = remaining * 50;
        cost = tenDayPrice + secondTenDayPrice + remainingDayPrice;
    }
    return cost;
}

var totalCost = hotelCost(12);
if (totalCost < 0) {
    console.log('Your input is not a valid number')
} else {
    console.log(totalCost);
}


//megaFriend
// var name = ['Maruf', 'Kabir', 'Babu', 'Real', 'Arafat', 'Peyar', 'Newaz Sharif', 'Al Sakik', 'Masum Howlader'];
var name = ['', 'Kabir', 'Babu', 'Real', '', 'Peyar', 'Newaz Sharif', 'Al Sakik', 'Masum Howlader'];

function megaFriend(name) {
    var bigName = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        var elementSize = element.length;
        if (elementSize > bigName.length) {
            bigName = element;
        }
    }
    return bigName;
}

var greatName = megaFriend(name);
console.log(greatName);






