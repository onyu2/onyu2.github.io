function showSection(sectionId, event) {
    event.preventDefault(); // Prevent default anchor click behavior

    // Hide all sections
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Update active class on navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        if(link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll to the top of the page
    window.scrollTo(0, 0);
}

function showSection(sectionId, event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Remove 'active' class from all sections and tabs
    document.querySelectorAll('.content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));

    // Add 'active' class to the clicked tab and the corresponding section
    document.querySelector(`#${sectionId}`).classList.add('active');
    event.target.classList.add('active');

    // Save the current tab in local storage
    localStorage.setItem('activeTab', sectionId);
}

window.onload = function() {
    // Get the active tab from local storage
    const activeTab = localStorage.getItem('activeTab');

    // If there's an active tab saved, show it, otherwise show the default tab
    if (activeTab) {
        showSection(activeTab, new Event('build'));
    } else {
        showSection('home', new Event('build'));
    }
};

