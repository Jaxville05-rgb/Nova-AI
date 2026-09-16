// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


// =========================
// DARK / LIGHT THEME
// =========================

const themeButtons = [
    document.getElementById("themeToggle"),
    document.getElementById("mobileThemeToggle")
];

themeButtons.forEach(button => {

    if (!button) return;

    button.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        localStorage.setItem(
            "novaTheme",
            isLight ? "light" : "dark"
        );

        updateThemeIcons();

    });

});


// =========================
// LOAD SAVED THEME
// =========================

if (localStorage.getItem("novaTheme") === "light") {

    document.body.classList.add("light-mode");

}

updateThemeIcons();


function updateThemeIcons() {

    const isLight =
        document.body.classList.contains("light-mode");

    document.querySelectorAll(".theme-toggle").forEach(button => {

        const sun = button.querySelector(".sun-icon");
        const moon = button.querySelector(".moon-icon");

        if (isLight) {

            sun.style.display = "none";
            moon.style.display = "block";

        } else {

            sun.style.display = "block";
            moon.style.display = "none";

        }

    });

}

// =========================
// NAVBAR SECTION HIGHLIGHT
// =========================

const navLinks = document.querySelectorAll(
    ".nav-links a, .mobile-menu a:not(.mobile-start)"
);

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        const selectedPage = link.getAttribute("href");

        // Save every selected section, including Home
        sessionStorage.setItem(
            "novaActiveSection",
            selectedPage
        );

    });

});

const savedSection = sessionStorage.getItem(
    "novaActiveSection"
);

if (savedSection) {

    navLinks.forEach(link => {

        if (link.getAttribute("href") === savedSection) {
            link.classList.add("active");
        }

    });

}