/*
    ====================
    COUNTDOWN TIMER
    ====================
*/

const countDown = document.querySelector(".countDown");
const countDownInfo = document.querySelectorAll(".countDownInfo h3");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

// we would set todays date;
const date = new Date();
const tempYear = date.getFullYear();
const tempMonth = date.getMonth();
const tempDate = date.getDate();
const tempHour = date.getHours();
const tempMins = date.getMinutes();

// set Future Date
const futureDate = new Date(tempYear, tempMonth, tempDate + 2, 0 , 0, 0);
//console.log(futureDate);

const futureYear = futureDate.getFullYear();
const futureHours = futureDate.getHours();
const futureMins = futureDate.getMinutes();
const newDate = futureDate.getDate();
const month = months[futureDate.getMonth()];
const day = weekDays[futureDate.getDay()];

// we would love to get futuretime in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime () {
    today = new Date().getTime();

    const tml = futureTime - today;
   
    // 1s = 1000s;
    // 1mins = 60s;
    //1hour = 60mins;
    //1day = 24hours;

        const oneMin = 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneDay = 24 * 60 * 60 * 1000; 

        const daysLeft = Math.floor(tml / oneDay);
        const hoursLeft = Math.floor((tml % oneDay) / oneHour);
        const minsLeft = Math.floor((tml % oneHour) / oneMin);
        const secsLeft = Math.floor((tml % oneMin) / 1000);
    

        // set the value in an array 
        const values = [daysLeft, hoursLeft, minsLeft, secsLeft];


        //want to make add 0 when the value is less than 10;
        function reduce(countDownInfo) {
            if (countDownInfo < 10) {
               return  (countDownInfo = `0${countDownInfo}`);
            }
            return countDownInfo
        }

        // insert the values in each element
        countDownInfo.forEach( function (countDownInfo, index) {
            countDownInfo.innerHTML = reduce(values[index]);
        }); 

        if (tml < 0) {
            clearInterval(countdownTimer);
            countDown.innerHTML = `<h4 class="expired"> Today is Valentine <br> HAPPY VALENTINE'S DAY </h4>`;
          }

    }
            
    let countdownTimer = setInterval(getRemainingTime, 1000);
    getRemainingTime();


/*
    ====================
    TOGGLE NAV 
    ====================
*/

const toggleBtn = document.querySelector('.bars');
const links = document.querySelector('.links');
const linkContainer = document.querySelector('.linkContainer');

toggleBtn.addEventListener("click", function(){
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if (containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
    } else {
        linkContainer.style.height = "0px";
    }
})



/*
============
gift functionality
============
*/

const fistLinks = document.querySelector(".firstLink");
const giftPage = document.querySelector(".giftPage");
const giftPageTimes = document.querySelector(".giftTimes");

const giftMenu = [
        `./images/gifts/car.jpeg`,

        `./images/gifts/bucketList.jpg`, 

        `./images/gifts/moments.jpg`, 

        `./images/gifts/robe.jpg`, 

        `./images/gifts/case.jpg`,

        `./images/gifts/download.jpeg`,

        `./images/gifts/hair.jpeg`,
   
        `./images/gifts/keylace.jpg`,

        `./images/gifts/mug.jpg`,

        `./images/gifts/necklace.jpg`,
    
        `./images/gifts/phone.jpeg`,

        `./images/gifts/rose.jpg`,
   
        `./images/gifts/shoe.jpg`,

        `./images/gifts/watch.jpg`,

        `./images/gifts/wine.jpg`,
]
const giftImage = document.querySelector(".giftImage")
const giftSection = document.querySelector(".gift");

window.addEventListener("DOMContentLoaded", function(){ 
    //onclick of link display first gift page
    fistLinks.addEventListener("click", function(){
        giftPage.classList.add("showGiftPage")
    })

    // close first gift page
    giftPageTimes.addEventListener("click", function(){
        giftPage.classList.remove("showGiftPage");
    })    

    // onclick of giftPageBtn, displays gifts
    const giftPageBtn = document.querySelector(".giftPageBtn");
    giftPageBtn.addEventListener("click", function(e){
        const id = e.currentTarget;
        const gift = document.querySelector(".gift");

        if (id) {
         ChangeSrcAttribute();
           gift.classList.add("showGift");
            }
            //close gift and giftPage onclick.
            const timesBtn = document.querySelector(".giftTimesBtn");
            timesBtn.addEventListener("click", function(){
            if (gift.classList.contains("showGift") || giftPage.classlist.contains("showGiftPage")) {
                gift.classList.remove("showGift");
                giftPage.classList.remove("showGiftPage");
                alert("Please refresh your browser")
            }
        })

    })

    const random = Math.floor(Math.random() * giftMenu.length) 
    function ChangeSrcAttribute () {
        giftImage.setAttribute("src", `${giftMenu[random]}`)
    }

})


/*
======================
SUSCRIBE TO LOVELETTER
======================
*/

const form = document.querySelector(".formCont")
const formText = document.querySelector(".formtext");
const letterDisplay = document.querySelector(".letterDisplay");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const formTextValue = formText.value;

    alert("This is " + formTextValue + " " + "are you sure its your valid @");

    if (formTextValue ==" ") {
       alert("fill in the Text Field")
    } else {
        letterDisplay.textContent = "Thank You For Subscribing! Have a Wonderful Experience"
    }

   
})


/*
======================
 ADD DYNAMIC YEAR TO FOOTER
======================
*/
// set the footerDate 
const footerDate = document.querySelector(".footerDate");
 today = new Date();
year = today.getFullYear();

footerDate.textContent = year;


/*
THANK YOU JS
IT ONLY GETS BETTER.
*/