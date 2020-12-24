let Time;

function momentTime(){
    let nowTime = new Date();
    Time = nowTime.getTime();
}
startBtn.addEventListener('click',momentTime);

function stopwatchTime(){
    let nowTime = new Date();
    let currentT = nowTime.getTime();
    let stHours = parseInt( (currentT - Time)/3600000 );
    let stMin = parseInt( ( (currentT - Time)%3600000 )/60000 );
    let stSec = parseInt( ( ( (currentT - Time)%3600000 )%60000 )/1000 )

    document.getElementById('stopwatchTime').innerHTML = stHours+' : '+stMin+' : '+stSec;
}


function start(){
    setInterval(stopwatchTime,1000);
}

startBtn.addEventListener('click',start);
stopBtn.addEventListener('click', function(){
    console.log('hi');
});