function Month(monthName) {
  this.name = monthName
  this.transactions = []
  this.total
  this.inflow
  this.monthSelector = monthName.toLowerCase()
}