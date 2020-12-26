let Time;

function momentTime(){
    let nowTime = new Date();
    Time = nowTime.getTime();
}
startBtn.addEventListener('click',momentTime);

let TimeObj = {
    Hour: 0,
    Min: 0,
    Sec: 0
}
function stopwatchTime(){
    let nowTime = new Date();
    let currentT = nowTime.getTime();
    let stHours = parseInt( (currentT - Time)/3600000 );
    let stMin = parseInt( ( (currentT - Time)%3600000 )/60000 );
    let stSec = parseInt( ( ( (currentT - Time)%3600000 )%60000 )/1000 )
    TimeObj.Hour = stHours
    TimeObj.Min = stMin
    TimeObj.Sec = stSec
    document.getElementById('stopwatchTime').innerHTML = stHours+' : '+stMin+' : '+stSec;
}
//start button,stop button 관련
let pause; 
let start = 0; //0일때 초기화 1일때 일시정지 2일때 재시작
function onoff () {
    if (start === 0){
        pause = setInterval(stopwatchTime,500);
        start ++;
        startBtn.innerHTML = '&#10074&#10074';//pause
    }else{
        clearInterval(pause);
        start = 0;
        startBtn.innerHTML = '&#9654';//play
        document.getSelection('li')
    }
}

startBtn.addEventListener('click', onoff);

//split button 관련
function splitTime(){
    let node = document.createElement("LI");
    let textnode = document.createTextNode(
            TimeObj.Hour+' : '+TimeObj.Min+' : '+TimeObj.Sec
        );
    node.appendChild(textnode);
    document.getElementById("splitDiv").appendChild(node);
}
splitBtn.addEventListener('click', splitTime);