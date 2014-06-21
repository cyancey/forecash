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
    var transactions = this.importTransactions(response)
    this.scenario = new Scenario(transactions)
    List.update(scenario)
    Chart.update(scenario)
  },
  importTransactions: function(data){
    //iterate over data
    //make a new transaction object out of each data
  },
  debug: function(response){
    debugger
  }
}

