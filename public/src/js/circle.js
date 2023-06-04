


window.addEventListener("mousemove", (e)=>{
    // document.getElementById("cursor").style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    document.getElementById("cursor").style.left = `${e.clientX}px`;
    document.getElementById("cursor").style.top = `${e.clientY}px`;
    //transform the div to the 50%
        document.getElementById("cursor").style.transform = "translate(-50%, -50%)" 

})



