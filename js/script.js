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

// animation css - reveal elements
// ###############################

// define options
const ratio = .5
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

// add class reveal-visible when ratio is good
const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

// loop foreach element who have reveal class css reveal
  const observer = new IntersectionObserver(handleIntersect, options) 
  document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
  })
  