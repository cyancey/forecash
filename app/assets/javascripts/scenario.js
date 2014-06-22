function Scenario(){
  this.transactions = []
  this.getTransactions()
}

Scenario.prototype = {
  addTransaction: function(transaction){
    this.transactions.push(transaction)
  },

  getTransactions: function(){
    var request = $.ajax({
      url: "/transactions",
      type: "get"
    })

    request.done(this.handleTransactions.bind(this))
  },
  handleTransactions: function(response){
    this.transactions = this.importTransactions(response)
    this.update()
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