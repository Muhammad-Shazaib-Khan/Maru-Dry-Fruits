// let current_page = document.title;
// switch (current_page) {
//     case "Home":
//         document.querySelector(".nav-btns .home").classList.add
// }

gsap.to("nav",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top 0",
        end: "top -20%",
        scrub : true
    }
})

gsap.to(".nav-after",{
    width: "100%",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top 0",
        end: "top -20%",
        scrub : true
    }
})

let decision_1 = 0;
function search_clicked() {
    if (decision_1 == 0) {
        gsap.to ("nav .user .search-field", {
            width: "100%",
            duration: .5
        })
        decision_1 = 1;
    }
    else {
        gsap.to ("nav .user .search-field", {
            width: "2%",
            duration: .5
        })
        decision_1 = 0;
    }
}