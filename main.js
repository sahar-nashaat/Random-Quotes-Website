// var x 
// document.getElementById('quoteBtn').onclick = function (){
//     x = Math.floor(Math.random() * 10)
//     return console.log(x);
// }
// if (x === 1){
//         document.getElementById('quote').innerHTML = '“Be yourself; everyone else is already taken.” -- Oscar Wilde';
// }
//     else if (x === 2){
//         document.getElementById('quote').innerHTML = ;
//     }



var allQuotes = [
'“You only live once, but if you do it right, once is enough.”'+'<br>―'+' Mae West',
"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”"+ '<br> ―'+ "Maya Angelou",
"“To live is the rarest thing in the world. Most people exist, that is all.”"+ '<br> ―'+ " Oscar Wilde",
"“We accept the love we think we deserve.”"+ '<br> ―'+ " Stephen Chbosky, The Perks of Being a Wallflower",
"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"+ '<br> ―'+ " Ralph Waldo Emerson",
"“It is better to be hated for what you are than to be loved for what you are not.”"+ '<br> ―'+ " Andre Gide, Autumn Leaves",
"“In three words I can sum up everything I've learned about life: it goes on.”"+ '<br> ―'+ " Robert Frost",
"“Be the change that you wish to see in the world.”"+ '<br> ―'+ " Mahatma Gandhi",
'“Be yourself; everyone else is already taken.”'+ '<br> ―'+  'Oscar Wilde',
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"+ '<br> ―'+ " Bernard M. Baruch"
]

document.getElementById('quoteBtn').onclick = function getRandom (){
    var x = Math.round(Math.random () * 9)
    console.log(x);
    if (x == 0){
        document.getElementById('quote').innerHTML = allQuotes[0]
    }
    else if (x == 1){
        document.getElementById('quote').innerHTML = allQuotes[1]
    }
    else if (x == 2){
        document.getElementById('quote').innerHTML = allQuotes[2]
    }
    else if (x == 3){
        document.getElementById('quote').innerHTML = allQuotes[3]
    }
    else if (x == 4){
        document.getElementById('quote').innerHTML = allQuotes[4]
    }
    else if (x == 5){
        document.getElementById('quote').innerHTML = allQuotes[5]
    }
    else if (x == 6){
        document.getElementById('quote').innerHTML = allQuotes[6]
    }
    else if (x == 7){
        document.getElementById('quote').innerHTML = allQuotes[7]
    }
    else if (x == 8){
        document.getElementById('quote').innerHTML = allQuotes[8]
    }
    else if (x == 9){
        document.getElementById('quote').innerHTML = allQuotes[9]
    }
}







