// Chrome 49 compatibility checked

let currPage = null;

function showPage(id) {

    if (currPage) {
        currPage.style.display = 'none';
    }

    currPage = document.getElementById(id);
    currPage.style.display = '';
}

window.onload = function() {
    showPage('attitude-indicator');
};