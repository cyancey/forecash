var ajaxController = function(){

};

ajaxController.prototype = {
	start: function() {
		this.getNewTransaction()
	},
	getNewTransaction: function(){
		$("#add-transaction").on("ajax:success", this.transactionsToHome)
	},

	transactionsToHome: function(e, transaction){
		$("#view_transactions").append("<li>" + transaction.description + "</li>")
	}
}