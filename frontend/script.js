var chips = 0;

var slots = 0;
var poker = 0;
var bljk = 0;
var roul = 0;

var updates = 0;

var slotCost = 10;
var pokerCost = 25;
var bljkCost = 40;
var roulCost = 55;

var updateCost = 25000;

var slotsMul = 0;
var pokerMul = 0;
var bljkMul = 0;
var roulMul = 0;

var slotC = 0;
var pokerC = 0;
var bljkC = 0;
var roulC = 0;

var randomGood1;
var randomGood2;
var randomBad1;
var randomBad2;

/*
Add upgrade system **Semi Finished (needs image changes and button css)
Allow Images to Show
Increase cost of items further you go **FINISHED
Double Money Event **FINISHED
Lose Money Event **FINISHED
Add Commas to money
*/

setInterval(theCounter, 1000);
setInterval(theUpdate, 100);

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
    } //this probably has issue

    console.log("Money: " + chips);
}

function theUpdate() {
    //update the Money and cost of each item
    document.getElementById("Money").innerHTML = "$" + chips;

    document.getElementById("btn").innerHTML = "Slots! $" + slotCost;
    document.getElementById("btn2").innerHTML = "Poker! $" + pokerCost;
    document.getElementById("btn3").innerHTML = "BlackJack! $" + bljkCost;
    document.getElementById("btn4").innerHTML = "Roulette! $" + roulCost;

    document.getElementById("btn5").innerHTML = "Update! $" + updateCost;

    //DoubleMoney event & HalfMoney event
    if (chips >= 50) {
        randomGood1 = Math.floor(Math.random() * 11);
        randomGood2 = Math.floor(Math.random() * 11);

        randomBad1 = Math.floor(Math.random() * 11);
        randomBad2 = Math.floor(Math.random() * 11);
    }

    //Random chance for good to happen
    if (randomGood1 == 5 && randomGood2 == 7) {
        chips *= 2;

        randomGood1 = 0;
        randomGood2 = 0;
    }

    //Random chance for bad to happen
    if (randomBad1 == 3 && randomBad2 == 9) {
        chips = chips / 2;

        randomBad1 = 0;
        randomBad2 = 0;
    }
}

function tokenClicked() {
    //money click
    chips++
}

function slotsClicked() {

    //slots cost
    //cannot buy if money is less than cost
    if (chips >= slotCost) {
        slots++
        slotsMul = 1 * slots;
        console.log("Slots: " + slots);
        chips -= slotCost;

        slotC++;

        if (slotC >= 5) {
            slotC = 0;
        }
        if (slotC == 4) {
            slotCost = slotCost * 2;
        }

        console.log("SlotC: " + slotC);
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
    if (chips >= pokerCost) {
        poker++
        pokerMul = 3 * poker;
        console.log("Poker: " + poker);
        chips -= pokerCost;

        pokerC++;

        if (pokerC >= 5) {
            pokerC = 0;
        }
        if (poker == 4) {
            pokerCost = pokerCost * 2;
        }

        console.log("PokerC: " + pokerC);
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
    if (chips >= bljkCost) {
        bljk++
        bljkMul = 7 * bljk;
        console.log("BlackJack: " + bljk);
        chips -= bljkCost;

        bljkC++

        if (bljkC >= 5) {
            bljkC = 0;
        }
        if (bljk == 4) {
            bljkCost = bljkCost * 2;
        }

        console.log("BljkC: " + bljkC);
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
    if (chips >= roulCost) {
        roul++
        roulMul = 12 * roul;
        console.log("Roulette: " + roul);
        chips -= roulCost;

        roulC++

        if (roulC >= 5) {
            roulC = 0;
        }
        if (roul == 4) {
            roulCost = roulCost * 2;
        }

        console.log("RoulC: " + roulC);
    }
    //log money and needed amount if money is not enough
    else {
        console.log("Not Enough Muns: " + chips);
        console.log("Needed: 55");
    }


}

function updateClicked() {

    //cannot buy if money is less than cost and if first update
    if (updates == 0 && chips >= updateCost) {
        //make everything expensive
        slotCost * 5;
        pokerCost * 5;
        bljkCost * 5;
        roulCost * 5;

        chips -= updateCost;

        updateCost == 900000;
    }
    //cannot buy if money is less than cost and if first update
    if (updates == 1 && chips >= updateCost) {
        //make everything expensive
        slotCost * 10;
        pokerCost * 10;
        bljkCost * 10;
        roulCost * 10;

        chips -= updateCost;

        updateCost == 2500000;
    }
    //cannot buy if money is less than cost and if first update
    if (updates == 2 && chips >= updateCost) {
        //make everything expensive
        slotCost * 15;
        pokerCost * 15;
        bljkCost * 15;
        roulCost * 15;

        chips -= updateCost;
    }
}