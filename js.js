var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    // console.log("hey");
    var rectloc = rect.getBoundingClientRect();
    // console.log(details);
    var insiderectval = details.clientX - rectloc.left;

    if(insiderectval<199.5){
        var redcolor = gsap.utils.mapRange(0,199.5,255,0,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    }else{
        var bluecolor = gsap.utils.mapRange(199.5,399,0,255,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease: Power4,
        });
    }
     
});
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"White"
    })
})