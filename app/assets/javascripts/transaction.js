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
  },

  buildChartData: function() {
    var balances = []
    var date = new Date(Date.now())
  },

  dateMatch: function(dateOne, dateTwo) {
    var date1 = this.sanatizeDate(new Date(Date.parse(dateOne)))
    var date2 = this.sanatizeDate(new Date(Date.parse(dateTwo)))
    return date1.getTime() === date2.getTime()
  },

  incrementDay: function(dateObj) {
    var month = dateObj.getMonth()
    var day = dateObj.getDate()
    var year = dateObj.getFullYear()
    return new Date(year, month, day+1)
  },

  sanatizeDate: function(dateObj) {
    var month = dateObj.getMonth()
    var day = dateObj.getDate()
    var year = dateObj.getFullYear()
    return new Date(year, month, day)
  }
}