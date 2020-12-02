function toggle_more() {
    var sidebar = document.querySelector('.sidebar');
    var sidebarBackground = document.querySelector('.sidebar-background');
    var moreButton = document.querySelector('div.more');

    if (sidebar.style.display == 'block') {
        sidebar.style.display = '';
        sidebarBackground.style.display = '';
        moreButton.style.backgroundColor = '';
    } else {
        sidebar.style.display = 'block';
        sidebarBackground.style.display = 'block';
        moreButton.style.backgroundColor = '#919194';
    }
}

function lineChart(ctx, labelName, labelList, dataList, bdcolor, bgcolor) {
    Chart.defaults.global.defaultFontFamily = "Oxygen";
    Chart.defaults.global.defaultFontColor = "black";

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: labelList,
            datasets: [{
                label: labelName,
                backgroundColor: bgcolor,
                borderColor: bdcolor,
                data: dataList
            }]
        },

        // Configuration options go here
        options: {}
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 850) {
        var sidebar = document.querySelector('.sidebar');
        var sidebarBackground = document.querySelector('.sidebar-background');
        var moreButton = document.querySelector('div.more');

        sidebar.style.display = '';
        sidebarBackground.style.display = '';
        moreButton.style.backgroundColor = '';
    }
});