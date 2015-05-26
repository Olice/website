// $(function() {
//     // Init Controller
//     var scrollMagicController = new ScrollMagic();
//     // Create Animation for 0.5s
//     var tween = TweenMax.from('.quote-right', 1, {
//         rotation: 360,
//         // transformOrigin: 'right top',
//         xPercent: 300,
//         // scale: 10
//         // ease: Power1.easeOut
//     });
//     // Create the Scene and trigger when visible with ScrollMagic
//     var scene = new ScrollScene({
//         triggerElement: 'body'
//     }).setTween(tween).addTo(scrollMagicController);
// });
$(function() {
    var chevronAnim = new TimelineMax({
        repeat: -1,
        repeatDelay: 0,
        yoyo: true
    });
    var introAnim = new TimelineMax({
        // yoyo: true
    });
    chevronAnim.to('#chevron', 0.6, {
        bottom: 40
    });
    introAnim.from('p.mission', 0.6, {
        x: '500vw'
    });
    chevronAnim.play();
});
$(function() {
    // Init Controller
    var controller = new ScrollMagic();
    var chevronOutro = TweenMax.to('#chevron', 1, {
        // Chevron outro Animation
        rotation: 360,
        y: -200,
        opacity: 0,
        ease: Power1.easeOut
    });
    var headerPin = new ScrollScene({
        triggerElement: 'header',
        triggerHook: 0
    }).setPin('header').addTo(controller);
    var colorPin = new ScrollScene({
        triggerElement: '.greenLine',
        triggerHook: 0,
        offset: -48
    }).setPin('.greenLine').addTo(controller);
    var scene = new ScrollScene({
        triggerElement: 'header'
    }).setTween(chevronOutro).addTo(controller);
    var whoColorChange = new ScrollScene({
        triggerElement: '#who',
        triggerHook: 0,
        offset: -48
    }).on("enter", function() {
        $(".greenLine").css("border-top-color", "#34912c");
    }).on("leave", function() {
        $(".greenLine").css("border-top-color", "#80a721");
    }).addTo(controller);
    var whatColorChange = new ScrollScene({
        triggerElement: '#how',
        triggerHook: 0,
        offset: -48
    }).on("enter", function() {
        $(".greenLine").css("border-top-color", "#29b5e9");
    }).on("leave", function() {
        $(".greenLine").css("border-top-color", "#34912c");
    }).addTo(controller);
    var whereColorChange = new ScrollScene({
        triggerElement: '#where',
        triggerHook: 0,
        offset: -48
    }).on("enter", function() {
        $(".greenLine").css("border-top-color", "#f18d1e");
    }).on("leave", function() {
        $(".greenLine").css("border-top-color", "#29b5e9");
    }).addTo(controller);
    // show indicators (requires debug extension)
    // pin.addIndicators();
    // scene.addIndicators();
});
