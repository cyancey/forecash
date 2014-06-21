var Chart = {
  init: function(generator){
    Chart.generator = generator
  }
}

Chart.prototype = {
  update: function(scenario){
    //Ask the chart generator model to turn the transactions into a line-chart
    var chart = this.generator.makeChart(scenario)
    debugger
    //Ask the view to display the line-chart to the DOM
    this.View.display()
  }
}

Chart.View = {
  containerSelector: "#chart",
  display: function(chartNode){
    //put it on the screen
  }
}

// Chart.Controller = {
// }