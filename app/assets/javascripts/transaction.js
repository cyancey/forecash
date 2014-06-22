function Transaction(args){
  this.id = args['id']
  this.description = args['description']
  this.amount = args['amount']
  this.inflow = args['cash_inflow']
  this.date = args['date']
}

Transaction.prototype = {}

function Scenario(transactions){
  this.transactions = transactions
}

Scenario.prototype = {
  push: function(transaction){
    this.transactions.push(transaction)
  }
}