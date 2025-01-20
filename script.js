document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Page navigation
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.page-navigation button');

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === pageIndex);
        });
        navButtons.forEach((button, index) => {
            button.classList.toggle('active', index === pageIndex);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top when changing pages
        localStorage.setItem('lastPage', pageIndex); // Save the current page index to localStorage
    }

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showPage(index);
        });
    });

    // Show the last visited page or the first page by default
    const lastPage = localStorage.getItem('lastPage');
    showPage(lastPage ? parseInt(lastPage) : 0);

    // Add any additional JavaScript code here to handle dynamic content or interactions
});
