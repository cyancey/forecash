var Controller = {
  start: function(){
    this.getTransactions()
  },
  getTransactions: function(){
    var request = $.ajax({
      url: "/transactions",
      type: "get"
    })

    request.done(handleTransactions)
    request.fail(debug)
  },
  handleTransactions: function(response){
    this.scenario = new Scenario(this.importTransactions(response))
    List.update(scenario)
    Chart.update(scenario)
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

