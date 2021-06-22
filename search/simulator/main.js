/*

    Code is not canon
    House of Arson is not canon
    Dylan Robinson is not canon

    Web Development Simulator created by Dylan Robinson
    Produced and funded by House of Arson


*/



var style = document.createElement('style');

var Game = {
    money: 0,
    moneyPerSecond: 0, // prior to subtractions
    moneyPerSecondFinal: 0, // after subtractions

    serverMult: 1,

    popularity: 1,

    HTMLlines: 1,
    CSSlines: 1,
    JSlines: 1,

    HTMLtutors: 0,
    CSStutors: 0,
    JStutors: 0,

    HTMLtutorCost: 25,
    CSStutorCost: 25,
    JStutorCost: 25,

    HTMLperclick: 1,
    CSSperclick: 1,
    JSperclick: 1,

    ads: 0,
    adRequirement: 50,

    donationButtons: 0,
    donationRequirement: 250,

    autoRunAds: false,
    autoRunDonations: false,

    HTMLcoders: 0,
    CSScoders: 0,
    JScoders: 0,

    HTMLCoderCost: 8,
    CSSCoderCost: 8,
    JSCoderCost: 8,
    workEthic: 4
}

function simplify(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function writeHTML() {
    Game.HTMLlines += Game.HTMLperclick;
}
function writeCSS() {
    Game.CSSlines += Game.CSSperclick;
}
function writeJS() {
    Game.JSlines += Game.JSperclick;
}

function autoRunAds(){
    Game.autoRunAds = true;
}
function autoRunDonations(){
    Game.autoRunDonations = true;
}

function increasePay() {
    Game.HTMLCoderCost += 1;
    Game.CSSCoderCost += 1;
    Game.JSCoderCost += 1;

    Game.workEthic += 0.5;
}
function decreasePay() {
    if (Game.workEthic >= 1){
        Game.HTMLCoderCost -= 1;
        Game.CSSCoderCost -= 1;
        Game.JSCoderCost -= 1;

        Game.workEthic -= 0.5;
    }
}

function HTMLtutorbuy() {
    if (Game.money >= Game.HTMLtutorCost) {
        Game.money -= Game.HTMLtutorCost;
        Game.HTMLperclick *= 1.25;
        Game.HTMLtutorCost *= 1.5;
        Game.HTMLtutors += 1;
    }
}
function CSStutorbuy() {
    if (Game.money >= Game.CSStutorCost) {
        Game.money -= Game.CSStutorCost;
        Game.CSSperclick *= 1.25;
        Game.CSStutorCost *= 1.5;
        Game.CSStutors += 1;
    }
}
function JStutorbuy() {
    if (Game.money >= Game.JStutorCost) {
        Game.money -= Game.JStutorCost;
        Game.JSperclick *= 1.25;
        Game.JStutorCost *= 1.5;
        Game.JStutors += 1;
    }
}


function HTMLcoderbuy() {
    if (Game.money >= Game.HTMLCoderCost) {
        Game.HTMLcoders += 1;
    }
}
function CSScoderbuy() {
    if (Game.money >= Game.CSSCoderCost) {
        Game.CSScoders += 1;
    }
}
function JScoderbuy() {
    if (Game.money >= Game.JSCoderCost) {
        Game.JScoders += 1;
    }
}



function runAds() {
    if (Game.HTMLlines >= Game.adRequirement) {
        Game.ads += 1;
        Game.adRequirement *= 1.5;
    }
}

function acceptDonations() {
    if (Game.HTMLlines >= Game.donationRequirement) {
        Game.donationButtons += 1;
        Game.donationRequirement *= 1.5;
    }
}

var GameLoop = window.setInterval(function() {
    if (Game.money < 0) {
        Game.money = 0;
    }

    document.getElementById("HTMLlines").innerHTML = simplify(Game.HTMLlines.toFixed(2));
    document.getElementById("CSSlines").innerHTML = simplify(Game.CSSlines.toFixed(2));
    document.getElementById("JSlines").innerHTML = simplify(Game.JSlines.toFixed(2));

    document.getElementById("workEthic").innerHTML = simplify(Game.workEthic.toFixed(1));

    document.getElementById("popularity").innerHTML = simplify(Game.popularity.toFixed(2));

    document.getElementById("HTMLtutors").innerHTML = simplify(Game.HTMLperclick.toFixed(2));
    document.getElementById("CSStutors").innerHTML = simplify(Game.CSSperclick.toFixed(2));
    document.getElementById("JStutors").innerHTML = simplify(Game.JSperclick.toFixed(2));
    document.getElementById("money").innerHTML = simplify(Game.money.toFixed(2));
    document.getElementById("mps").innerHTML = simplify(Game.moneyPerSecondFinal.toFixed(2));
    document.getElementById("ads").innerHTML = simplify(Game.ads);
    document.getElementById("donationButtons").innerHTML = simplify(Game.donationButtons);

    document.getElementById("tutorCost").innerHTML = simplify(Math.ceil(Game.HTMLtutorCost));
    document.getElementById("CSStutorCost").innerHTML = simplify(Math.ceil(Game.CSStutorCost));
    document.getElementById("JStutorCost").innerHTML = simplify(Math.ceil(Game.JStutorCost));
    document.getElementById("adRequirement").innerHTML = simplify(Math.ceil(Game.adRequirement));
    document.getElementById("donationRequirement").innerHTML = simplify(Math.ceil(Game.donationRequirement));

    document.getElementById("CoderCost").innerHTML = simplify(Math.ceil(Game.HTMLCoderCost));
    document.getElementById("CSSCoderCost").innerHTML = simplify(Math.ceil(Game.CSSCoderCost));
    document.getElementById("JSCoderCost").innerHTML = simplify(Math.ceil(Game.JSCoderCost));

    document.getElementById("HTMLcoders").innerHTML = simplify(Game.HTMLcoders);
    document.getElementById("CSScoders").innerHTML = simplify(Game.CSScoders);
    document.getElementById("JScoders").innerHTML = simplify(Game.JScoders);

    document.getElementById("pay").innerHTML = simplify(Game.HTMLCoderCost);


    if (Game.CSSlines >= 0) {
        style.innerHTML = 'body{font-family: Helvetica, Arial, sans-serif;margin: 15px;line-height: 150%;margin-bottom:2%;}';
        document.head.appendChild(style);
    }
    if (Game.CSSlines >= 50) {
        style.innerHTML = 'body{font-family: Helvetica, Arial, sans-serif;background-color: #28d;color: #F8F8F8;margin: 15px;line-height: 150%;}';
        document.head.appendChild(style);
    }
    if (Game.CSSlines >= 100) {
        style.innerHTML = 'body{font-family: Helvetica, Arial, sans-serif;background-color: #28d;color: #F8F8F8;margin: 15px;line-height: 150%;}button{cursor: pointer;background-color: #F8F8F8;color:#28d;border: none;}';
        document.head.appendChild(style);
    }


    if (Game.HTMLlines >= 10) {
        document.getElementById("shop").style.display = "block";
    }
    if (Game.HTMLlines >= 50) {
        document.getElementById("upperright").style.display = "block";
    }


    if (Game.CSSlines >= 50) {
        if (Game.moneyPerSecondFinal >= 0) {
            document.getElementById("mpsCount").style.color = "#F8F8F8";
        } else {
            document.getElementById("mpsCount").style.color = "#f33";
        }
    }



    if (Game.HTMLlines >= Game.adRequirement) {
        document.getElementById("runAdsButton").style.color = "#28d";
    } else {
        document.getElementById("runAdsButton").style.color = "#f33";
    }

    if (Game.HTMLlines >= Game.donationRequirement) {
        document.getElementById("acceptDonationsButton").style.color = "#28d";
    } else {
        document.getElementById("acceptDonationsButton").style.color = "#f33";
    }

    if (Game.money >= Game.HTMLtutorCost) {
        document.getElementById("HTMLTutorButton").style.color = "#28d";
    } else {
        document.getElementById("HTMLTutorButton").style.color = "#f33";
    }
    if (Game.money >= Game.CSStutorCost) {
        document.getElementById("CSSTutorButton").style.color = "#28d";
    } else {
        document.getElementById("CSSTutorButton").style.color = "#f33";
    }
    if (Game.money >= Game.JStutorCost) {
        document.getElementById("JSTutorButton").style.color = "#28d";
    } else {
        document.getElementById("JSTutorButton").style.color = "#f33";
    }
    

    if (Game.money >= Game.HTMLCoderCost) {
        document.getElementById("HTMLCoderButton").style.color = "#28d";
    } else {
        document.getElementById("HTMLCoderButton").style.color = "#f33";
    }
    if (Game.money >= Game.CSSCoderCost) {
        document.getElementById("CSSCoderButton").style.color = "#28d";
    } else {
        document.getElementById("CSSCoderButton").style.color = "#f33";
    }
    if (Game.money >= Game.JSCoderCost) {
        document.getElementById("JSCoderButton").style.color = "#28d";
    } else {
        document.getElementById("JSCoderButton").style.color = "#f33";
    }


    if (Game.money >= 100) {
        document.getElementById("rightpane").style.display = "block";
    }

    if (Game.ads > 0) {
        document.getElementById("mpsCount").style.display = "block";
    }

    Game.moneyPerSecond = (Game.ads*Game.popularity)+(Game.donationButtons*4*Game.popularity)

    if (Game.workEthic >= 25) {
        Game.workEthic = 25;
    }

    if (Game.money >= 0) {
        Game.moneyPerSecondFinal = (Game.moneyPerSecond - (Game.workEthic * Game.HTMLcoders)-(Game.workEthic * Game.CSScoders)-(Game.workEthic * Game.JScoders)) * Game.serverMult;
    } else {
        Game.moneyPerSecondFinal = Game.moneyPerSecond * Game.serverMult;
    }

    if (Game.HTMLcoders > 0) {
        document.getElementById("workerPay").style.display = "block";
    }
    if (Game.CSScoders > 0) {
        document.getElementById("workerPay").style.display = "block";
    }
    if (Game.JScoders > 0) {
        document.getElementById("workerPay").style.display = "block";
    }

    if (Game.money > 10000) {
        document.getElementById("autoRunAdsButton").style.display = "block";
    }if (Game.money > 100000) {
        document.getElementById("autoRunDonationsButton").style.display = "block";
    }

    if (Game.autoRunAds) {
        runAds();
        document.getElementById("ADS").style.display = "none";
        document.getElementById("autoRunAdsButton").style.display = "none";
        document.getElementById("autoBr").style.display = "none";
    }
    if (Game.autoRunDonations) {
        acceptDonations();
        document.getElementById("DONATIONS").style.display = "none";
        document.getElementById("autoRunDonationsButton").style.display = "none";
    }

    Game.popularity = -0.02 + (Game.CSSlines/100) + (Game.JSlines/100) //rework this asap
}, 1)

var mpsLoop = setInterval(function(){
    Game.money += Game.moneyPerSecondFinal/100;
}, 10)

var coderLoop = setInterval(function() {

    if (Game.HTMLcoders >= 1 && Game.money >= Game.HTMLCoderCost) {
        Game.HTMLlines += Game.HTMLcoders * Game.workEthic
    }


    if (Game.CSScoders >= 1 && Game.money >= Game.CSSCoderCost) {
        Game.CSSlines += Game.CSScoders * Game.workEthic
    }

    
    if (Game.JScoders >= 1 && Game.money >= Game.JSCoderCost) {
        Game.JSlines += Game.JScoders * Game.workEthic
    }


}, 1000)

/*


to add:

    the option to upgrade your website's servers for a forefit of 10% mps per upgrade, max 5 upgrades
        - after you upgrade to a custom server (the first upgrade), you can write PHP and SQL
    the ability to buy other websites and companies, making an extra source of income for little to no work
    the ability to upgrade your workplace (like from tiny apartment to giant 12-story 4 mile long building)
    the ability to develop a web development masterclass for extra money

*/