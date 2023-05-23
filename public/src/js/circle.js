const cursor = document.getElementById('cursor');


// document.addEventListener('wheel',(e))
document.addEventListener('mousemove', (e)=> {
    var x = e.clientX;  
    var y = e.clientY;
let scroll = window.scrollY;
    // scroll = 0
    cursor.style.left = x  + 'px';
    cursor.style.top = y + scroll + 'px';

    console.log(scroll)

})


document.addEventListener('wheel', (e)=> {
    var x = e.clientX;  
    var y = e.clientY;
let scroll = window.scrollY;
    // scroll = [...Array(
    //
    // ).keys()]
    //
    
    cursor.style.left = x  + 'px';
    cursor.style.top = y + scroll + 'px';

    console.log(scroll)

})
