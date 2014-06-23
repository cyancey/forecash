function FormView(selectors) {
  this.addFormSelector = selectors["addForm"]
  this.cancelFormSelector = selectors["cancelForm"]
  this.transactionFormSelector = selectors["transactionForm"]
}

FormView.prototype = {
  getAddFormSelector: function() {
    return $(this.addFormSelector)
  },
  getCancelFormSelector: function() {
    return $(this.cancelFormSelector)
  },
  showForm: function() {
    $(this.addFormSelector).hide()
    $(this.cancelFormSelector).show()
    $(this.transactionFormSelector).slideDown()
  },
  hideForm: function() {
    $(this.cancelFormSelector).hide()
    $(this.addFormSelector).show()
    $(this.transactionFormSelector).slideUp()
  }
}

