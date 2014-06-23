$(document).ready(function() {
  ApplicationController = new ApplicationController(new ChartController(), new Scenario())
  ApplicationController.initialize()

  // STYLE
  $('#add-form').on('click', function() {
    $('#add-form').hide()
    $('#cancel-form').show()
    $('#transaction-form').show(1000)
  })

  $('#cancel-form').on('click', function() {
    $('#add-form').show()
    $('#cancel-form').hide()
    $('#transaction-form').hide(1000)
  })
})

