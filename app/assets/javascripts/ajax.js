var ajaxController = {
	start: function() {
		this.getNewTransaction()
	},
	getNewTransaction: function(){
		$("#add-transaction").on("ajax:success", this.transactionsToHome)
	},

	transactionsToHome: function(){
		debugger
	}
}