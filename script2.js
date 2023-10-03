//4. write a class to calculate the uber price.
//code:
class UberPriceCalculator {
    constructor(baseFareINR, costPerKilometerINR, costPerMinuteINR) {
        this.baseFareINR = baseFareINR;
        this.costPerKilometerINR = costPerKilometerINR;
        this.costPerMinuteINR = costPerMinuteINR;
    }
    calculatePrice(distanceInKilometers, timeInMinutes) {
        var totalPriceINR = (
            this.baseFareINR +
            this.costPerKilometerINR * distanceInKilometers +
            this.costPerMinuteINR * timeInMinutes
        ) 
        return totalPriceINR;
    }
    getPriceINR(distanceInKilometers, timeInMinutes) {
        return this.calculatePrice(distanceInKilometers, timeInMinutes);
    }
}
var Fare = new UberPriceCalculator(20, 30, 2); 
var distance = 46; 
var time = 126; 
var priceINR = Fare.getPriceINR(distance, time);
console.log(`Uber Price in INR: ₹${priceINR.toFixed(2)}`);


//Output:
//Uber Price in INR: ₹1652.00