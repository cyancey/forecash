function Transaction(args){
  this.id = args['id']
  this.description = args['description']
  this.amount = args['amount']
  this.inflow = args['cash_inflow']
  this.date = args['date']
}

Transaction.prototype = {}