function ListView() {
  console.log("works")
}

ListView.prototype = {
  speak: function(){
    console.log('works')
  }
}

var List = {
  view: new ListView(),
  update: function(scenario){
    debugger
  }
}