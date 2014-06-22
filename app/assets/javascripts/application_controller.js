function ApplicationController(chartController, scenario) {
  this.chartController = chartController
  this.scenario = scenario
}

ApplicationController.prototype = {
  initialize: function() {
    this.chartController.initialize()
    // $('#add-transaction').on('ajax:success', this.updateScenario)
  },

  update: function(transactions) {
    var dataSet = DataMonger.transactionsToChartData(transactions, 365, 0)
    this.chartController.drawChart(dataSet)
    List.update(this.scenario)

  },
}