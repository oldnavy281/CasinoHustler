var muns = 0;

var slots = 0;
var poker = 0;
var bljk = 0;
var roul = 0;

function tokenClicked() {
    muns++
    console.log("Money: " + muns);
}

function slotsClicked() {
    slots++
    console.log("Slots: " + slots);
}

function pokerClicked() {
    poker++
    console.log("Poker: " + poker);
}

function bljkClicked() {
    bljk++
    console.log("BlackJack: " + bljk);
}

function roulClicked() {
    roul++
    console.log("Roulette: " + roul);
}