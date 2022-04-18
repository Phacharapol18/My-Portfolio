let firstB = document.querySelector('.html');
let firstB1 = document.querySelector('.ja');
let firstB2 = document.querySelector('.nj');
let firstB3 = document.querySelector('.sq');
let firstB4 = document.querySelector('.rj');
let gone = document.querySelectorAll('.gone');
let back = document.querySelectorAll('.back');


 function disappear1 (){
    for (let i = 0; i < gone.length; i++) {
        let element = gone[i];
        element.style.display = 'none'
    }
    
}

firstB.addEventListener('click', function (){
    disappear1()
    document.querySelector('.listHTML').style.display = 'block'
})
firstB1.addEventListener('click', function (){
    disappear1()
    document.querySelector('.listJA').style.display = 'block'
})
firstB2.addEventListener('click', function (){
    disappear1()
    document.querySelector('.listNJ').style.display = 'block'
})
firstB3.addEventListener('click', function (){
    disappear1()
    document.querySelector('.listSQ').style.display = 'block'
})
firstB4.addEventListener('click', function (){
    disappear1()
    document.querySelector('.listRJ').style.display = 'block'
})

for (let i = 0; i < back.length; i++) {
    let element = back[i];
    element.addEventListener('click', function(){
        document.querySelector('.listHTML').style.display = 'none'
        document.querySelector('.listJA').style.display = 'none'
        document.querySelector('.listNJ').style.display = 'none'
        document.querySelector('.listSQ').style.display = 'none'
        document.querySelector('.listRJ').style.display = 'none'
        for (let i = 0; i < gone.length; i++) {
         let element = gone[i];
         element.style.display = 'unset'
     }
 })
}
