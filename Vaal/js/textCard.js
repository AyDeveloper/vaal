/*
==============================
DISPLAY TEXT CARD.
===============================
*/

//we would want to grab the necessary elements
const secondLink = document.querySelector(".secondLink");
const textQuestion = document.querySelector(".textQuestion");
const textCloseBtn = document.querySelector(".textCloseBtn")
    //form section
const submitForm = document.querySelector(".form");
const age = document.querySelector(".number");
const submit = document.querySelector(".btn");
const textCard = document.querySelector(".textCard");
const textMessage = document.querySelector(".textMessage");
const personName = document.querySelector(".personName");
const loverName = document.querySelector(".loverName");
const valIdea = document.querySelector(".valIdea");


// onclick of textcard link on the index page
secondLink.addEventListener("click", function(){
    textQuestion.classList.add("showTextQuestion");
})
// closes the display of textQuestion
textCloseBtn.addEventListener("click", function(){
    textQuestion.classList.remove("showTextQuestion");
})

//set the text in an array
const text = [
    `This Valentine’s Day I long for your sweet kisses, your warm embrace, and the magic that binds our hearts together`,
    `If I had to choose whether to breathe or to love you, I would use my last breath to tell you that… I love you.`,
    `I wish to God that I can be reborn a million times just so I can fall in love with you each and every one of time.`,
    `You are sweeter than chocolate and more beautiful than a rose, it seems like God was creative when he was creating you.`,
    `Happy Valentine’s Day to the sweetest valentine I could ever wish for. You are my sweetheart, and I am glad you’re mine.`,
    `I loved you when the sunset yesterday, I love you when the moon comes tonight, and I will love when the sun rises tomorrow.`,
    `The day we met is one that I will cherish until the end of time. I have never felt as happy as I do when you are at my side.`,
    `Whether it’s Valentine’s Day or not, I can’t think of anyone I would rather spend the day with but you.`,
    `I have seen angels in the sky, I have seen snowfall in July, I have seen stars falling apart, but I haven’t seen anyone like you.`,
    `Sometimes I laugh even when there is no around thinking about all the funny things that you do just to make me happy.`,
    `Love is sweet when it is new and sweeter when it is true and sweetest when it is with you.`,
    `If you ask me how much I love you, count the stars! This is how much.`,
    `Thousands may come in your life, and thousands may go, but there will be one person on earth who can give away life for you-and that’s me!`,
    `Love knows no boundaries other than those that we impose on it, but we don’t know anything about limits. It is Valentine’s Day every day for us.`,
    `The reassuring smile on your lips, the soft touch of your hands, and the little ways in which you make me happy are what keeps me alive every day`,
    `No other relationship in my life could compare to the love we share. I’m enamored by your tender touch and your ravishing romance. Happy Valentine’s Day to my amazing love!`,
    `Warmer than a summer breeze, hotter than the sun, more beautiful than a flower, but most importantly, the best thing that has ever happened to me. I love you. Happy Valentine’s day!`,
    `You always know exactly how I feel, and you are still there to make me feel better. You are the best thing that has ever happened to me, and I thank God that I met you. I love you.`,
    `The first time you touched me, I felt love, and even now, the feeling of anxiety and excitement remains the same when you come close to me. The love for you grows with every passing moment.`,
    `You are beautiful inside and out. You are my forever Valentine, without a doubt.`,
]

const valEvent = [
    `make a special meal together: The whole process of going to the grocery store, preparing, cooking and serving the meal to each other can be incredibly meaningful.`,
    `write love notes to each other: it might seem cheesy, but taking time to put down in words why we love each other can be incredibly valuable.`,
    `have a photoshoot together: this can seem strangely self-serving, but documenting the two of us would help make special memories and remember special times spent together.`,
    `check-off bucket list: if there is something on your bucket list then that might be achievable together.`,
    `explore adventurous sides together: do something daring that neither of us have tried before.`,
    `volunteer together to take care of babies at the orphanage.`,
    `rent some silly comedies and spend the night laughing together.`,
]

submit.addEventListener("click", function(e){
    e.preventDefault();

    const ageValue = parseInt(age.value);
    const personNameValue = personName.value;
    const random = Math.floor(Math.random() * text.length);
    const randomTwo = Math.floor(Math.random() * valEvent.length);

   

    if ((ageValue > 15 && ageValue < 60)|| (!personNameValue ==="") ) {
        valIdea.textContent = `${valEvent[randomTwo]}`
        textMessage.textContent = `${text[random]}`
        loverName.textContent = personNameValue;
        textCard.classList.add("showTextCard");
    }
 
})
// close textcard and textQuestion on click
const cardCloseBtn = document.querySelector(".cardCloseBtn");
cardCloseBtn.addEventListener("click", function(e){
    const id = e.currentTarget
    if (id || textQuestion.classList.contains("showTextQuestion")) {
        textCard.classList.remove("showTextCard");
        textQuestion.classList.remove("showTextQuestion");
        alert("Please refresh your browser")
    }
    
})