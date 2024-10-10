function showPage(id) {
    console.log(id, 'clicked');

    const pages = document.querySelectorAll('.content');

    console.log(pages);

    pages.forEach(page => page.style.display = 'none');

    document.getElementById(id).style.display = '';
}

window.onload = function() {
    showPage('attitude-indicator');
};