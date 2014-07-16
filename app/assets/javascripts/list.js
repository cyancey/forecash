function ListView() {
  this.template = HandlebarsTemplates.list
  this.selector = "#list"
  this.containerSelector = "#list-container"
  this.tableMonthSelector = "thead.monthly-head"
}

ListView.prototype = {
  refresh: function(scenario){
    this.clear()
    this.display(scenario)
  },
  clear: function(){
    $(this.containerSelector).empty()
  },
  display: function(context){
    $(this.containerSelector).append(this.template(context))
  }
}

var List = {
  view: new ListView(),
  update: function(scenario){
    var sortedMonths = DataMonger.sortIntoMonths(scenario)
    DataMonger.setMonthlyTotals(sortedMonths)
    DataMonger.setMonthlyInflows(sortedMonths)
    this.view.refresh({ months: sortedMonths })
  },
  bindMonthListener: function() {
    $(this.view.containerSelector).on('click', this.view.tableMonthSelector, this.view.toggleMonthlyFlow)
  }
}