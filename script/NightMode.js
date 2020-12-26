let NigthModeClick = 0
const body = document.getElementsByTagName("BODY")[0];
function NightMode(){
    if (NigthModeClick === 0){
        body.style.backgroundColor = '#1E1E1E';
        body.style.color = '#FFFFFF'
        NigthModeClick++;
    }else{
        body.style.backgroundColor = '#F2F2F2';
        body.style.color = '#14171A'
        NigthModeClick--;
    }
}

nightMode.addEventListener('click', NightMode)