function time(){
    let nowTime= new Date();
    document.getElementById('nowTime').innerHTML = '현재 시간'+nowTime.getHours()+' : '+nowTime.getMinutes()+' : '+nowTime.getSeconds()
} 

setInterval(time,1000);