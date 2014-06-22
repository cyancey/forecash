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

  buildChartData: function(startBalance, numDays) {
    var balances = []
    var date = new Date(Date.now())
    var transactions = this.transactions
    var transactionsLength = transactions.length
    var balance = startBalance

    for(var i=0; i < numDays; i++) {
      var change = 0
      for (var y=0; y<transactionsLength; y++) {
        if(this.dateMatch(transactions[y].date, date)) {
          console.log(transactions[y].cash_inflow)
          if(transactions[y].cash_inflow) {
            change += transactions[y].amount
            console.log(transactions[y].amount)
            console.log(change)
          } else {
            change -= transactions[y].amount
            console.log(transactions[y].amount)
            console.log(change)
          }
        }
      }
      balance += change
      balances.push(balance)
      date = this.incrementDay(date)
    }
    return balances
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
  },

}
