const hero = document.getElementById("hero");
const leftGreen = document.getElementById("leftGreen");

let pinned = false;
let released = false;

window.addEventListener("scroll", () => {

    if (released) return;

    const heroTop = hero.getBoundingClientRect().top;
    const greenTop = leftGreen.getBoundingClientRect().top;

   
    if (heroTop <= 0 && !pinned) {

        hero.style.position = "fixed";
        hero.style.top = "0";
        hero.style.left = "0";
        hero.style.width = "100%";
        hero.style.zIndex = "999";

        pinned = true;
    }


    if (pinned && greenTop <= 0) {

        hero.style.position = "relative";
        hero.style.top = "";
        hero.style.left = "";
        hero.style.width = "";
        hero.style.zIndex = "";

        released = true;
    }

});