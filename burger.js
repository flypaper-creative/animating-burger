var burgerTl = new TimelineMax({paused:true});
var clickedOn = false;

    burgerTl.reversed(true);

    burgerTl.add("start1");

    burgerTl.to( "#bLine1", .2, { width:"100%"}, "-=0");

    burgerTl.add("start2");

    burgerTl.to("#bLine1", .5, {delay: 0, rotation:45, x:"7%", width:"128%", transformOrigin:"left top", ease: Power4.easeIn, y: 0}, "-=0");

    burgerTl.to("#bLine2", .5, {delay: 0, width:"0%", x:"7.5%", opacity:0, ease: Power4.easeIn, y: 0}, "-=.5");

    burgerTl.to("#bLine3", .5, {delay: 0, rotation:-45, x:"7.5%", width:"128%", transformOrigin:"left bottom", ease: Power4.easeIn, y: 0, }, "-=.5");

    burgerTl.to(".burgerLine", .5, {delay: 0, backgroundColor:"#ffd200", ease: Power4.easeIn, y: 0}, "-=.75");

function toggleDirection()
{
    //toggle timeline play/reverse
    burgerTl.reversed() ? burgerTl.play() : burgerTl.reverse();

    //ClickedOn variable, toggle true/false
    clickedOn = !clickedOn;
}

//bind Click event to parent
$('.burgerWrapper').bind('mousedown', function () {
    
    //play animation from -start2- label (top and bottom lines rotate to form -X- while middle line decreases width to 0)
    toggleDirection();
    
    burgerTl.to(".menuBkg", .5, {delay: 0, width:"100%", height:"100%", transformOrigin:"left top", ease: Power4.easeIn, y: 0}, "-=.5");
    
});

//bind Hover event to parent
$('.burgerWrapper').bind('mouseenter', function () {

    //if parent HAS NOT BEEN clicked
    if (clickedOn == false){
        
        //play animation from -start1- to -start2- label (top line extends to full width)
        burgerTl.tweenFromTo("start1", "start2");
    }
    
    //if parent HAS BEEN clicked, do nothing
    else{}
    
});

//bind Mouse Out event to parent
$('.burgerWrapper').bind('mouseleave', function () {

   //if parent HAS NOT BEEN clicked
    if (clickedOn == false){
        
        //reverse animation from wherever it leaves off on mouse exit
        burgerTl.reverse();
    }
    
    //if parent HAS BEEN clicked, do nothing
    else{}
    
});