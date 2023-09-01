var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px",
    crsr.style.top = dets.y+"px",
    blur.style.left = dets.x + 50-"px",
    blur.style.top = dets.y+ 50 -"px"
})




gsap.to("#nav",{
    backgroundColor : "#000",
    duration:0.5,
    height:"110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25vh",
        end: "top -70vh",
        scrub:3
    }
})