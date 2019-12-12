var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false;

var updateClock = function () {
    var lolcat = document.getElementById("lolcat");
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    var timeEventJS = document.getElementById("timeEvent");

    if (time == partyTime) {
        image = "https://image.freepik.com/free-photo/cat-with-party-hat_1339-74445.jpg";
        messageText = "IZ PARTEE TIME!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "IZ NAP TIME…";
    } else if (time == lunchTime) {
        image = "https://2x0r8i4133bf3vh7w91g7xh4-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/What-to-Try-When-Your-Cant-Wont-Eat-1080×675.jpg";
        messageText = "IZ NOM NOM NOM TIME!!";
    } else if (time == wakeupTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "IZ TIME TO GETTUP.";
    } else if (time < noon) {
        image = "http://images2.fanpop.com/image/photos/12800000/Good-Morning-cats-12844151-720-562.jpg";
        messageText = "Good morning!";
    } else if (time > evening) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Good Evening!";
    } else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Good afternoon!";
    }

    timeEventJS.innerHTML = messageText;
    lolcat.src = image;

    var showCurrentTime = function () {
        // display the string on the webpage
        var clock = document.getElementById('clock');

        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours 
        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = hours - 12;
        }

        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };

    showCurrentTime();
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var partyEvent = function () {

    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
       
        // text in the button should read "PARTY TIME!"
         partyTimeButton.innerText = "PARTY TIME!";

        // color of the button should be "#222" (bonus!)
        partyTimeButton.style.backgroundColor = "#222";
        
    }
    else {
        isPartyTime = false;
        time = new Date().getHours();
         
        // text in the button should read "Party Over"	
        partyTimeButton.innerText = "PARTY OVER";
       
        // color of the button should be "#0A8DAB" (bonus!)
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
};

partyTimeButton.addEventListener("click", partyEvent);

var lunchEvent = function () {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function () {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function () {
    napTime = napTimeSelector.value;
};


var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
    wakeupTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);