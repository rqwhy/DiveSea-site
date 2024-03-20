const button1 = document.querySelector('profile-right__shift--collection')
const button2 = document.querySelector('profile-right__shift--cactivity')

function switchVisible() {
    document.getElementById('Div1').style.display = 'none';
    document.getElementById('Div2').style.display = 'block';
    button1.classList.add('profile-right__collection-active')
    button2.classList.remove('profile-right__activity-active')
}

function switchVisible1() {
    document.getElementById('Div2').style.display = 'none';
    document.getElementById('Div1').style.display = 'grid';
    button2.classList.add('profile-right__activity-active')
    button1.classList.remove('profile-right__collection-active')
}