var buns = 0;

var slots = 0;
var poker = 0;
var bljk = 0;
var roul = 0;

var slotCost = 10;
var pokerCost = 25;
var bljkCost = 40;
var roulCost = 55;

function tokenClicked() {
    //money click
    buns++
    console.log("Money: " + muns);

    //allow for it to incriment up without clicking
}

function slotsClicked() {

    //slots cost
    //cannot buy if money is less than cost
    if (buns >= slotCost) {
        slots++
        console.log("Slots: " + slots);
        buns -= slotCost;
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + buns);
        console.log("Needed: " + slotCost);
    }
}

function pokerClicked() {
    //poker cost
    //cannot buy if money is less than cost
    if (buns >= 25) {
        poker++
        console.log("Poker: " + poker);
        buns -= 25
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + buns);
        console.log("Needed: 25");
    }
}

function bljkClicked() {
    //bljk cost
    //cannot buy if money is less than cost
    if (buns >= 40) {
        bljk++
        console.log("BlackJack: " + bljk);
        buns -= 40;
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + buns);
        console.log("Needed: 40");
    }
}

function roulClicked() {
    //roul cost
    //cannot buy if money is less than cost
    if (buns >= 55) {
        roul++
        console.log("Roulette: " + roul);
        buns -= 55;
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + buns);
        console.log("Needed: 55");
    }
}