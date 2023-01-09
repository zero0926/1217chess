anime.timeline({loop: true})
    .add({
        targets: '.h2-lg-text',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
    }).add({
    targets: '.h2-lg-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});