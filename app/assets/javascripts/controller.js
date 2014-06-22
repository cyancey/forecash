var Controller = {
  start: function(){
    this.getTransactions()
  },
  getTransactions: function(){
    var request = $.ajax({
      url: "/transactions",
      type: "get"
    })

    request.done(this.handleTransactions.bind(this))
    request.fail(this.debug)
  },
  handleTransactions: function(response){
    var transactions = this.importTransactions(response)
    this.scenario = new Scenario(transactions)
    List.update(this.scenario)
    // Chart.update(this.scenario)
  },
  importTransactions: function(data){
    var transactions = []
    for(var index = 0; index < data.length; index++){
      transactions.push(new Transaction(data[index]))
    }
    return transactions
  },
  debug: function(response){
    debugger
  }
}

$(document).ready(function(){
  Controller.start()
})
