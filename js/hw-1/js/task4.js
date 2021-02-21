let credits = 23580;

let pricePerDroid = 3000;

let HowManyDroids = parseInt(prompt('How many droids do you want to buy?'));

let totalPrice = HowManyDroids * pricePerDroid;

let minusResult = credits - totalPrice

if(credits < totalPrice) {
    alert('Not enought credits')
}

if(HowManyDroids === null) {
     alert('Cancelled') 
}

if(totalPrice < credits) {
    alert(`Purchase done successfully. You have left ${minusResult} credits`)
}

if(typeof(HowManyDroids) != Number && HowManyDroids !== null) {
    alert(`Ooops. Cancelled / Not a number`)
}