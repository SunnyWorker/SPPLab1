const filterToggle = document.querySelector('.filter-toggle');
const filterSidebar = document.querySelector('.filter-sidebar');
const main = document.querySelector('.main');

filterToggle.addEventListener('click', () => {
    filterSidebar.classList.toggle('open');
    main.classList.toggle('open');
});

main.addEventListener('click', () => {
    if(main.classList.contains('open')) {
        filterSidebar.classList.toggle('open');
        main.classList.toggle('open');
    }
});

