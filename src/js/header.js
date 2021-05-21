// Render #header in DOM
let header = document.getElementById("header");
header.innerHTML = `
<nav class="navbar navbar-dark fixed-top">
    <a href="./" class="navbar-brand logo">
        <h4>Steve Orchosky</h4>
    </a>

    <button id="navbarToggle" class="hamburger hamburger--squeeze" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>

    <!-- Full Nav -->
    <div class="full-nav" id="fullNav">

        <!-- Nav Left (Projects) -->
        <div class="full-nav__projects" id="projectLoopMenu"></div>

        <!-- Nav Right -->
        <div class="full-nav--right">

            <!-- Nav Links -->
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <h2><a class="nav-link" href="index.html">Home</a></h2>
                </li>
                <li class="nav-item">
                    <h2><a class="nav-link" href="about.html">About</a></h2>
                </li>
                <li class="nav-item">
                    <h2><a class="nav-link" href="projects.html">Projects</a></h2>
                </li>
                <li class="nav-item">
                    <h2><a class="nav-link" href="visual-design.html">Visual Design</a></h2>
                </li>
            </ul>

            <!-- Social Links -->
            <div class="full-nav__social">
                <a href="mailto:steve@steveorchosky.com">steve@steveorchosky.com</a>
                <ul class="list-inline navbar-social">
                    <li class="list-inline-item">
                        <a class="social-icon" href="https://www.linkedin.com/in/steve-orchosky/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-icon" href="https://dribbble.com/sorchosky" target="_blank">
                            <i class="fab fa-dribbble"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-icon" href="https://www.instagram.com/sorchosky/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
`

// Animated hamburger menu
let navbarToggle = document.getElementById("navbarToggle");
let fullNav = document.getElementById("fullNav");
navbarToggle.onclick = function() {
    navbarToggle.classList.toggle("is-active");
    fullNav.classList.toggle("active");
}