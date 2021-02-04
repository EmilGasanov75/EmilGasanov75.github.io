let credits = 23580;

let pricePerDroid = 3000;

let promp = parseInt(prompt('How many droids do you wanna buy?'));

let totalPrice = promp * pricePerDroid;

let minusResult = credits - totalPrice

if(credits < totalPrice) {
    alert('Not enought credits')
}

if(promp === null) {
    alert('Cancelled')
}

if(totalPrice < credits) {
    alert(`Purchase done successfully. You have left ${minusResult} credits`)
}