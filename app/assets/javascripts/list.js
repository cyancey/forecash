function ListView() {
  this.template = HandlebarsTemplates.list
  this.selector = "#list"
  this.containerSelector = "#list-container"
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
    debugger
    $(this.containerSelector).append(this.template(context))
  }
}

var List = {
  view: new ListView(),
  update: function(scenario){
    this.view.refresh(scenario)
  }
}