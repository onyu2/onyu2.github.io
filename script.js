// function to show the appropriate section based on the url hash
function showSection(sectionId, event) {
    if (event) event.preventDefault();
    
    // remove active class from all tabs
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // add active class to the clicked tab
    document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');

    // hide all sections
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });

    // show the clicked section
    document.getElementById(sectionId).classList.add('active');

    // update the url hash
    history.pushState(null, null, `#${sectionId}`);
}

// function to handle the initial page load
function handleInitialLoad() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
    } else {
        showSection('home');
    }
}

// bind the showSection function to each nav link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId, event);
    });
});

// handle the initial load
document.addEventListener('DOMContentLoaded', handleInitialLoad);
