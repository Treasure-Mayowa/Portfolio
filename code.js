document.addEventListener('DOMContentLoaded', ()=> {
    const nav = document.querySelectorAll('.nav-item')
    const pl = document.getElementById('pl')
    const fr = document.getElementById('fr')
    const db = document.getElementById('db')
    const ui = document.getElementById('ui')
    const ip = document.getElementById('ip')

    nav.forEach(item => {
        item.addEventListener('click', ()=> {
            nav.forEach(element => {
                element.classList.remove('active');
            });
            item.classList.add('active')
            if (item.id === 'pl-1') {
                pl.style.display = 'block'
                fr.style.display = 'none'
                db.style.display = 'none'
                ui.style.display = 'none'
                ip.style.display = 'none'
            } else if (item.id === 'fr-1') {
                pl.style.display = 'none'
                fr.style.display = 'block'
                db.style.display = 'none'
                ui.style.display = 'none'
                ip.style.display = 'none'
            } else if (item.id === 'db-1') {
                pl.style.display = 'none'
                fr.style.display = 'none'
                db.style.display = 'block'
                ui.style.display = 'none'
                ip.style.display = 'none'
            } else if (item.id === 'ui-1') {
                pl.style.display = 'none'
                fr.style.display = 'none'
                db.style.display = 'none'
                ui.style.display = 'block'
                ip.style.display = 'none'
            } else {
                pl.style.display = 'none'
                fr.style.display = 'none'
                db.style.display = 'none'
                ui.style.display = 'none'
                ip.style.display = 'block'
            }
        })
    });
})