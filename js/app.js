document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click',(event)=>event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click',(event)=>event.preventDefault())
})

//  code không chạy đc
// document.queryselector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active'))

// document.queryselector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))




document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active'))

document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))


