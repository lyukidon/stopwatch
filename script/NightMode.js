let NigthModeClick = 0
const body = document.getElementsByTagName("BODY")[0];
function NightMode(){
    if (NigthModeClick === 0){
        body.style.backgroundColor = '#1E1E1E';
        body.style.color = '#FFFFFF'
        NigthModeClick++;

        nightMode.style.backgroundColor = '#1E1E1E'
        nightMode.style.color = '#FFFFFF'
    }else{
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#14171A'
        NigthModeClick--;

        nightMode.style.backgroundColor = '#FFFFFF'
        nightMode.style.color = '#1E1E1E'
    }
}

nightMode.addEventListener('click', NightMode)