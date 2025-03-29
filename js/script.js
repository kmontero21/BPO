
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        // Toggle dropdown on click
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = dropdownContent.classList.contains('open');

            // Close all other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('open');
            });

            // Toggle the clicked dropdown
            if (!isOpen) {
                dropdownContent.classList.add('open');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function () {
            dropdownContent.classList.remove('open');
        });
    });
});
