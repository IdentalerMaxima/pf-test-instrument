function showPage(id){

    // console.log("Selected page", id);

    const pages = document.querySelectorAll('.page');

    // console.log("Pages", pages);

    pages.forEach(page => page.setAttribute("active", "off"));

    const selectedPage = document.getElementById(id);
    if (selectedPage) {
        selectedPage.setAttribute("active", "on");
        console.log(`Page ${id} set to on`);
    }


}

// window.onload.showPage('attitude-indicator-component'); 