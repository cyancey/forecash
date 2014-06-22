function Scenario(){
  this.transactions = []
  this.getTransactions()
}

Scenario.prototype = {
  addTransaction: function(transactions) {
    var transactionsLength = transactions.length
    for (var i = 0; i < transactionsLength; i++) {
      this.transactions.push(new Transaction(transactions[i]))
    }
    this.sortTransactions()
  },
  getTransactions: function(){
    var request = $.ajax({
      url: "/transactions",
      type: "get"
    })

    request.done(this.handleTransactions.bind(this))
  },
  removeTransaction: function(event) {
    var request = $.ajax({
      url: "/transactions/" + event.target.parentNode.parentNode.id,
      type: "delete"
    })

    request.done(this.handleTransactions.bind(this))
  },
  handleTransactions: function(response){
    this.transactions = this.importTransactions(response)
    this.sortTransactions()
    this.update()
  },
  sortTransactions: function() {
    this.transactions.sort(function(a, b) {
      var aDate = new Date(a.date)
      var bDate = new Date(b.date)
      return aDate.getTime() - bDate.getTime()
    });
  },
  importTransactions: function(data){
    var transactions = []
    for(var index = 0; index < data.length; index++){
      transactions.push(new Transaction(data[index]))
    }
    return transactions
  },
  update: function(){
    ApplicationController.update(this.transactions)
  }
}