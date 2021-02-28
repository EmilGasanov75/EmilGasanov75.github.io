let credits = 23580;

let pricePerDroid = 3000;

let HowManyDroids = prompt('How many droids do you want to buy?');

let totalPrice = HowManyDroids * pricePerDroid;

let minusResult = credits - totalPrice

if(credits < totalPrice) {
    alert('Not enought credits')
}

if(HowManyDroids === null) {
     alert('Cancelled') 
}

if(totalPrice < credits && HowManyDroids !== null) {
    alert(`Purchase done successfully. You have left ${minusResult} credits`)
}

