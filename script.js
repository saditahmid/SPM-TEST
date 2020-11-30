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

// function lineChart1(ctx) {
//     var chart = new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'line',

//         // The data for our dataset
//         data: {
//             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//             datasets: [{
//                 label: 'Sample Dataset 1',
//                 backgroundColor: '#d9e2ec',
//                 borderColor: '#094480',
//                 data: [2, 10, 5, 3, 20, 30, 45]
//             }]
//         },

//         // Configuration options go here
//         options: {}
//     });
// }
// function lineChart2(ctx) {
//     var chart = new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'line',

//         // The data for our dataset
//         data: {
//             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//             datasets: [{
//                 label: 'Sample Dataset 2',
//                 backgroundColor: '#f0cdcd',
//                 borderColor: '#962323',
//                 data: [8, 5, 8, 9, 13, 11, 12]
//             }]
//         },

//         // Configuration options go here
//         options: {}
//     });
// }