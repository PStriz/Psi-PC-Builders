import $ from "jquery";

let services = $(".services").offset().top;
let nav = $(".fixed-nav");
if (nav) {
    $(window).scroll((_) => {
        let winScroll = $(window).scrollTop();
        if (winScroll >= services) {
            nav.removeClass("nav-hidden").addClass("nav-shown");
        } else {
            if (nav.hasClass("nav-shown")) {
                nav.removeClass("nav-shown").addClass("nav-hidden");
            }
        }
    });
}
