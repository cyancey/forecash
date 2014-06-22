class TransactionsController < ApplicationController
	def index
		render json: Transaction.all
	end

	def create # get to Frequency if have time, may have to delete frequency
		@transaction = Transaction.create(description: params[:description], amount: params[:number], 
			cash_inflow: params[:cash_inflow], date: params[:date])
		render json: @transaction
	end
end