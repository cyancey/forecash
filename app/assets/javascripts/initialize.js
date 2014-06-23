$(document).ready(function() {
  ApplicationController = new ApplicationController(new ChartController(), new Scenario(), new FormController(new FormView(formViewSelectors)))
  ApplicationController.initialize()
})

var formViewSelectors = {
  addForm: '#add-form',
  cancelForm: '#cancel-form',
  transactionForm: '#transaction-form'
}
