$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();
    // Create Animation for 0.5s
    var tween = TweenMax.from('.quote-right', 1, {
        rotation: 360,
        // transformOrigin: "right top",
        xPercent: 300,
        // scale: 10
        // ease: Power1.easeOut
    });
    // Create the Scene and trigger when visible with ScrollMagic
    var scene = new ScrollScene({
        triggerElement: 'body'
    }).setTween(tween).addTo(scrollMagicController);
});
