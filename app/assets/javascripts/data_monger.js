var DataMonger = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  transactionsToChartData: function(transactions, numDays, startBalance) {
    var balances = []
    var date = new Date(Date.now())
    var transactions = transactions
    var transactionsLength = transactions.length
    var balance = startBalance || 0

    for(var i=0; i < numDays; i++) {
      var change = 0
      for (var y=0; y<transactionsLength; y++) {
        if(this.dateMatch(transactions[y].date, date)) {
          if(transactions[y].inflow) {
            change += transactions[y].amount
          } else {
            change -= transactions[y].amount
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
  createMonths: function() {
    var smartMonths = []
    var monthsLength = this.months.length
    for (var i = 0; i < monthsLength; i++) {
      smartMonths.push(new Month(this.months[i]))
    }
    return smartMonths;
  },
  sortIntoMonths: function(scenario) {
    var smartMonths = this.createMonths()
    var currentMonth = new Date(Date.now()).getMonth()
    var transactionsLength = scenario.transactions.length
    for (var i = 0; i < transactionsLength; i++) {
      var transactionMonth = new Date(scenario.transactions[i].date).getMonth()
      smartMonths[transactionMonth].transactions.push(scenario.transactions[i])
    }
    var rearrangedMonths = this.rearrangeMonths(currentMonth, smartMonths)
    return rearrangedMonths
  },
  rearrangeMonths: function(currentMonth, smartMonths) {
    var pastMonths = smartMonths.splice(0, currentMonth)
    for (var i = 0; i < pastMonths.length; i++) {
      smartMonths.push(pastMonths[i])
    }
    return smartMonths
  },
  setMonthlyTotals: function(sortedMonths) {
    var sortedMonthsLength = sortedMonths.length
    for (var i = 0; i < sortedMonthsLength; i++) {
      var total = 0
      var transactionsLength = sortedMonths[i].transactions.length
      for (var j = 0; j < transactionsLength; j++) {
        if (sortedMonths[i].transactions[j].inflow) {
          total += sortedMonths[i].transactions[j].amount
        } else {
          total -= sortedMonths[i].transactions[j].amount
        }
      }
      sortedMonths[i].total = total
    }
  },
  setMonthlyInflows: function(sortedMonths) {
    var sortedMonthsLength = sortedMonths.length
    for (var i = 0; i < sortedMonthsLength; i++) {
      if (sortedMonths[i].total >= 0) {
        sortedMonths[i].inflow = true
      } else {
        sortedMonths[i].inflow = false
      }
      sortedMonths[i].total = Math.abs(sortedMonths[i].total)
    }
  }
}