let menu = document.querySelector('#menu')
let sidebar_nav = document.querySelector('.sidebar-nav')

menu.onclick = function() {
    if(menu.className === 'fa-solid fa-bars'){
        menu.className = 'fa-solid fa-x'
    }
    else{
        menu.className = 'fa-solid fa-bars'
    }
    sidebar_nav.classList.toggle('active')
}