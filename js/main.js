$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();
    // Create Animation for 0.5s
    var tween = TweenMax.from('#mission', 1.5, {
        left: 500,
        ease: Power1.easeOut
    });
    // Create the Scene and trigger when visible with ScrollMagic
    var scene = new ScrollScene({
        triggerElement: 'body'
    }).setTween(tween).addTo(scrollMagicController);
});
