document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.show-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const fullDesc = this.previousElementSibling;
            const showMoreBtn = this;
            if (fullDesc.style.display === 'none') {
                fullDesc.style.display = 'block';
                showMoreBtn.textContent = 'Show Less';
            } else {
                fullDesc.style.display = 'none';
                showMoreBtn.textContent = 'Show More';
            }
        });
    });
});
