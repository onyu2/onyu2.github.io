function showSection(sectionId, event) {
    event.preventDefault(); // prevent default anchor click behavior

    // hide all sections
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
    // show the selected section
    document.getElementById(sectionId).classList.add('active');

    // update active class on navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        if(link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // scroll to the top of the page
    window.scrollTo(0, 0);
}

function showSection(sectionId, event) {
    // prevent the default link behavior
    event.preventDefault();

    // remove 'active' class from all sections and tabs
    document.querySelectorAll('.content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));

    // add 'active' class to the clicked tab and the corresponding section
    document.querySelector(`#${sectionId}`).classList.add('active');
    event.target.classList.add('active');

    // save the current tab in local storage
    localStorage.setItem('activeTab', sectionId);
}

window.onload = function() {
    // get the active tab from local storage
    const activeTab = localStorage.getItem('activeTab');

    // if there's an active tab saved, show it, otherwise show the default tab
    if (activeTab) {
        showSection(activeTab, new Event('build'));
    } else {
        showSection('home', new Event('build'));
    }
};

