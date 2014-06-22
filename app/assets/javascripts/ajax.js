var ajaxController = function(){

};

ajaxController.prototype = {
	start: function() {
		this.getNewTransaction()
		this.deleteTransaction()
	},
	getNewTransaction: function(){
		$("#add-transaction").on("ajax:success", this.transactionsToHome)
	},

	transactionsToHome: function(e, transaction){
		$("#view_transactions").append("<li>" + transaction.description + "</li>")
	},

	deleteTransaction: function(){
		$("#delete_transaction").on("click", this.deleteAjax)
	},

	// deleteAjax: function(){
	// 	var request = $.ajax({
	// 		url: "/transactions/" + 
	// 		type: "delete"
	// 	})
	// }
}