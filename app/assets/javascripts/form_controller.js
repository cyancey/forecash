function FormController(view) {
  this.view = view;
}

FormController.prototype = {
  initialize: function() {
    this.bindListeners()
  },
  bindListeners: function() {
    var $addFormSelector = this.view.getAddFormSelector()
    var $cancelFormSelector = this.view.getCancelFormSelector()
    $addFormSelector.on('click', this.showForm.bind(this))
    $cancelFormSelector.on('click', this.hideForm.bind(this))
  },
  showForm: function() {
    this.view.showForm()
  },
  hideForm: function() {
    this.view.hideForm()
  }
}