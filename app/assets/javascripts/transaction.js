function Transaction(args){
  this.id = args['id'] || null
  this.description = args['description']
  this.amount = args['amount']
  this.inflow = args['inflow']
  this.date = args['date']
}

Transaction.prototype = {}

function Scenario(transactions){
  this.transactions = transactions
}

Scenario.prototype = {
  add: function(transaction){
    this.transactions.push(transaction)
  }
}