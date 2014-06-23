function ApplicationController(chartController, scenario, formController) {
  this.chartController = chartController
  this.scenario = scenario
  this.formController = formController
}

ApplicationController.prototype = {
  initialize: function() {
    this.formController.initialize()
    this.chartController.initialize()
    $('#add-transaction').on('ajax:success', this.updateScenario.bind(this))
    $('#list-container').on('click', '.remove-transaction', this.removeTransaction.bind(this))
  },
  updateScenario: function(e, response) {
    this.scenario.addTransaction(response)
    this.scenario.update()
  },
  removeTransaction: function(event) {
    this.scenario.removeTransaction(event)
  },
  update: function(transactions) {
    var dataSet = DataMonger.transactionsToChartData(transactions, 365, 0)
    this.chartController.drawChart(dataSet)
    List.update(this.scenario)
  }
}