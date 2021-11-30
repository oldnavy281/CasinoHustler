var chips = 0;

var slots = 0;
var poker = 0;
var bljk = 0;
var roul = 0;

var slotCost = 10;
var pokerCost = 25;
var bljkCost = 40;
var roulCost = 55;

var slotsMul = 0;
var pokerMul = 0;
var bljkMul = 0;
var roulMul = 0;

//TODO: Allow for money to only incriment when theres things out

setInterval(theCounter, 1000);

function theCounter() {
    //earn money each second

    if (slots > 0) {
        chips++
        chips = chips + slotsMul;
    }
    if (poker > 0) {
        chips++
        chips = chips + pokerMul;
    }
    if (bljk > 0) {
        chips++
        chips = chips + bljkMul;
    }
    if (roul > 0) {
        chips++
        chips = chips + roulMul;
    }

    document.getElementById("Money").innerHTML = "$" + chips;
    console.log("Money: " + chips);
}

function tokenClicked() {
    //money click
    chips++
    console.log("Money: " + chips);
}

function slotsClicked() {

    //slots cost
    //cannot buy if money is less than cost
    if (chips >= slotCost) {
        slots++
        slotsMul = 1 * slots;
        console.log("Slots: " + slots);
        chips -= slotCost;
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + chips);
        console.log("Needed: " + slotCost);
    }
}

function pokerClicked() {
    //poker cost
    //cannot buy if money is less than cost
    if (chips >= 25) {
        poker++
        pokerMul = 3 * poker;
        console.log("Poker: " + poker);
        chips -= 25
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + chips);
        console.log("Needed: 25");
    }
}

function bljkClicked() {
    //bljk cost
    //cannot buy if money is less than cost
    if (chips >= 40) {
        bljk++
        bljkMul = 7 * bljk;
        console.log("BlackJack: " + bljk);
        chips -= 40;
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + chips);
        console.log("Needed: 40");
    }
}

function roulClicked() {
    //roul cost
    //cannot buy if money is less than cost
    if (chips >= 55) {
        roul++
        roulMul = 12 * roul;
        console.log("Roulette: " + roul);
        chips -= 55;
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + chips);
        console.log("Needed: 55");
    }
}