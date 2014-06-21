function Transaction(args){
  this.id = args['id']
  this.description = args['description']
  this.amount = args['amount']
  this.inflow = args['inflow']
  this.date = args['date']
}

Transaction.prototype = {}

function Scenario(args){
  this.transactions = args['transactions'] || []
}

Scenario.prototype = {
  push: function(transaction){
    this.transactions.push(transaction)
  }
}