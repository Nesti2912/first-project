
let body = document.body
let greeting = document.getElementById('greeting')
let currentTime = document.getElementById('currentTime')

const GREETING_DAY = 'Good Day'
const GREETING_NIGHT = 'Good Night'

function getImageURL(imageID){
    return 'https://picsum.photos/id/' + imageID + '/1920/1080'
}


console.log( getImageURL(62) )

if (getDayPart()== 'day')
{

body.style.backgroundImage = 'url("' + getImageURL(62) + '")'
greeting.classList.add('greeting-night-style')
currentTime.classList.add('current-night-style')
greeting.innerText = GREETING_DAY
}

else if (getDayPart()== 'night')
{
body.style.backgroundImage = 'url("' + getImageURL(84) + '")'
greeting.classList.add('greeting-night-style')
currentTime.classList.add('current-night-style')
greeting.innerText = GREETING_NIGHT
}

function getDayPart()
{
 let myDate = new Date()
console.log('Today is' + myDate.toUTCString() )
console.log('Today is' + myDate.getSeconds() )   
let hour =  myDate.getHours()
if (hour >= 6 && hour <=17)
{
    return 'day'
}
else
{
    return 'night'
}
}

function showTime(){

    setInterval(function(){

        let cTime = new Date()

        let cHour = cTime.getHours()
        let cMinute = cTime.getMinutes()
        let cSeconds = cTime.getSeconds()

        if(cHour < 10) cHour = '0' + cHour
        if(cMinute < 10) cMinute = '0' + cMinute
        if(cSeconds < 10) cSeconds = '0' + cSeconds

       
    currentTime.innerText = cTime.getHours() + ':'
    + cTime.getMinutes() + ':' + cTime.getSeconds()

    },1000)

    
}

showTime()

