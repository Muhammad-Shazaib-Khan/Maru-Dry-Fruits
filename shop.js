let decision;
function update_view() {
    const view_mode_btn = document.querySelector("#page2 .products .top .view-mode");
    const items = document.querySelector("#page2 .products #items");
    
    if (decision == 0) {
        view_mode_btn.style.backgroundColor = "blue";
        items.className = "items-S1"
        decision = 1;
    }else {
        view_mode_btn.style.backgroundColor = "rgb(136, 65, 39)";
        items.className = "items-S2"
        decision = 0;
    }
}