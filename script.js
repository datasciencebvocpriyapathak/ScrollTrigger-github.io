var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#two",
        start: "0% 95%",
        end: "50% 50%",
        markers: true,
        scrub: true
    }
})
tl.to("#fanta", {
    top: "120%",
    left: "0%",
    width: "42%"
}, 'orange')
tl.to("#leaf", {
    top: "115%",
    left: "40%"
}, 'orange')
tl.to("#leaf-3", {
    top: "160%",
    width: "10%",
    left: "0%",
    rotate: "120deg"
}, 'orange')
tl.to("#orange-cut", {
    top: "110%",
    width: "20%",
    left: "5%",
    rotate: "120deg"
}, 'orange')
tl.to("#orange", {
    top: "160%",
    width: "20%",
    right: "-5%",
}, 'orange')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#three",
        start: "0% 95%",
        end: "50% 50%",
        markers: true,
        scrub:true
    }
})
tl2.to("#fanta", {
    top: "205%",
    left: "30%",
}, 'ca')
// tl2.to("#orange-cut", {
//     top: "200%",
//     width: "20%",
//     left: "45%",
// }, 'ca')
tl2.from("#cocacola", {
    scale: 0,
    opacity: 0,
}, 'ca')
tl2.from("#pepsi", {
    scale: 0,
    opacity: 0,
}, 'ca')
