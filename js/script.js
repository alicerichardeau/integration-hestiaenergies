// url
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar-nav a').forEach(link => {
    // if url add class active
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
    if(activePage == '/') {
        link.classList.remove('active');
    }
})