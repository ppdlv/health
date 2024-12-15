document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Activate first tab by default
    if (tabLinks.length > 0 && tabContents.length > 0) {
        tabLinks[0].classList.add('active');
        tabContents[0].classList.add('active');
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTab = link.dataset.tab;

            // Remove active class from all tabs and contents
            tabLinks.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            link.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});