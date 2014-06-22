function ChartController() {
  this.dataSet = []
  this.chart = null
  this.chartOptions = {
        chart: {
            renderTo: 'chart',
            type: 'spline'
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
              text: 'Dates'
            },
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Cashflow'
            },
            floor: -100000,
            ceiling: 100000,
            plotLines: [{
                          color: '#000000',
                          width: 3,
                          value: 0
                        }]
        },
        series: [{
            name: false,
            data: [],
            pointStart: Date.now(),
            pointInterval: 24 * 3600 * 1000, // one day
            color: '#00E000'
        }],
        tooltip: {
          backgroundColor: '#00E000',
          formatter: function() {

                          return '<b>$' + this.y.toFixed(2) +'</b>';
                      }
        }
    }
}

ChartController.prototype = {
  initialize: function() {
    this.chart = new Highcharts.Chart(this.chartOptions)
  },

  drawChart: function(dataSet) {
    this.dataSet = dataSet
    this.chartOptions.series[0].data = this.dataSet
    this.chart = new Highcharts.Chart(this.chartOptions)
  }
}