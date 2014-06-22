$(document).ready(function() {
  ApplicationController = new ApplicationController(new ChartController(), new Scenario())
  ApplicationController.initialize()

  // STYLE
  $('#add-form').on('click', function(){$('#transaction-form').show(1000)})
})

// var options = {
//         chart: {
//             renderTo: 'chart',
//             type: 'spline'
//         },
//         title: {
//             text: ''
//         },
//         legend: {
//             enabled: false
//         },
//         xAxis: {
//             title: {
//               text: 'Dates'
//             },
//             type: 'datetime'
//             // categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         yAxis: {
//             title: {
//                 text: 'Cashflow'
//             },
//             floor: -100000,
//             ceiling: 100000,
//             plotLines: [{
//                           color: '#000000',
//                           width: 3,
//                           value: 0
//                         }]
//         },
//         series: [{
//             name: false,
//             data: [29.9, 71.5, 106.4, 129.2, -144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//             pointStart: Date.now(),
//             pointInterval: 24 * 3600 * 1000, // one day
//             color: '#00E000'
//         }],
//         tooltip: {
//           backgroundColor: '#00E000',
//           formatter: function() {

//                           return '<b>$' + this.y.toFixed(2) +'</b>';
//                       }
//         }
//     }
