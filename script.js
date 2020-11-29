function toggle_more() {
    var sidebar = document.querySelector('.sidebar');

    if (sidebar.style.display == 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
    // alert("Hello World");
}

// window.addEventListener("resize", {
//     if (window.matchMedia('(max-width: 850px)').matches) {
//         alert("Hello World");
//     }
// });