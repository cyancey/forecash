function ApplicationController(chartController, scenario) {
  this.chartController = chartController
  this.scenario = scenario
}

ApplicationController.prototype = {
  initialize: function() {
    this.chartController.initialize()
    $('#add-transaction').on('ajax:success', this.updateScenario.bind(this))
    $('#list-container').on('click', '.remove-transaction', this.removeTransaction.bind(this))
  },
  updateScenario: function(e, response) {
    var transaction = new Transaction(response)
    this.scenario.addTransaction(transaction)
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