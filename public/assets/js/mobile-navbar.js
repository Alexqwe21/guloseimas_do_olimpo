class MobileNavbar {

    constructor(mobileMenu, navlist, navlinks) {


        this.mobileMenu = document.querySelector(mobileMenu);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeClass = "active";

    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => {
            console.log("hey !!!!");
        });
    }


    init(){


if(this.mobileMenu){
    this.addClickEvent();
}
return this

    }

}

const mobileNavbarInstance = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbarInstance.init();