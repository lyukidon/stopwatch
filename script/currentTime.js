
// let hour = nowTime.getHours();
// let min = nowTime.getMinutes();
// let sec = nowTime.getSeconds();

// 현재 시간
const time = () => {
    let nowTime= new Date();
    document.getElementById('nowTime').innerHTML = '현재 시간 '+nowTime.getHours()+' : '+nowTime.getMinutes()+' : '+nowTime.getSeconds();
}
setInterval(time,1000);