let Time;

function momentTime(){
    let nowTime = new Date();
    Time = nowTime.getTime();
}
startBtn.addEventListener('click',momentTime);

let Hour;
let Min;
let Sec;
function stopwatchTime(){
    let nowTime = new Date();
    let currentT = nowTime.getTime();
    let stHours = parseInt( (currentT - Time)/3600000 );
    let stMin = parseInt( ( (currentT - Time)%3600000 )/60000 );
    let stSec = parseInt( ( ( (currentT - Time)%3600000 )%60000 )/1000 )
    Hour = stHours
    Min = stMin
    Sec = stSec
    document.getElementById('stopwatchTime').innerHTML = stHours+' : '+stMin+' : '+stSec;
}
//start button,stop button 관련
let pause;
let start = 0; //0일때 초기화 1일때 일시정지 2일때 재시작
function onoff () {
    if (start === 0){
        pause = setInterval(stopwatchTime,1000);
        start ++;
    }else{
        clearInterval(pause);
        start = 0;
    }
}

startBtn.addEventListener('click',onoff);
stopBtn.addEventListener('click', onoff);
//split button 관련
function splitTime(){
    splitDiv.createElement('div').innerHTML = {Hour}+{Min}+{Sec}
}