const SPENDING_THRESHOLD = 200;
const TEXT_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
    return amount * TEXT_RATE;
}

function formatAmount(amount) {
    return amount.toFixed(2) + " zł";
}

//Zakupy telefonów, dopóki starczy kasa na koncie
while (amount < bank_balance) {
    amount += PHONE_PRICE;

    //Czy można dokupić do telefonu akcesoria?
    if (amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE;
    }
}

amount += calculateTax(amount);

console.log(
    "Kwota do zapłaty: " + formatAmount(amount);
)

//Czy faktycznie można sobie pozwolić na ten zakup?
if (amount > bank_balance) {
    console.log(
        "Niestety nie możesz pozwolić sobie na taki wydatek :("
    );
} else {
    console.log(
        "Masz hajsy na zakup :D Kuupuj!!!"
    );
}