// script.js

// When the document is ready
window.onload = () => {
    // Get all the tab links and tab content sections
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listeners to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove 'active' class from all tab links
            tabLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked tab link
            link.classList.add('active');

            // Get the tab content ID associated with the clicked tab
            const targetTab = link.getAttribute('data-tab');

            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Show the content of the clicked tab
            document.getElementById(targetTab).classList.add('active');
        });
    });
};
