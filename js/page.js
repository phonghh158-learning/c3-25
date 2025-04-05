const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.add('hidden'));
        // Show the clicked section
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).classList.remove('hidden');
    });
});
