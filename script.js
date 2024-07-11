document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function() {
        link.classList.add('clicked');
        setTimeout(() => link.classList.remove('clicked'), 300);
    });
});