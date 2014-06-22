class TransactionsController < ApplicationController
	def index
		render json: Transaction.all
	end

	def create
		Transaction.create(description: params[:description], amount: params[:number], 
			cash_inflow: params[:cash_inflow], date: params[:date])
	end
end