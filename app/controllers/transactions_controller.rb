class TransactionsController < ApplicationController
	def index
		render json: Transaction.all
	end

	def create # get to Frequency if have time, may have to delete frequency
		p params
		
		@transaction = Transaction.create(description: params[:description], amount: params[:number], 
			cash_inflow: Transaction.inflow_converter(params[:cash_flow]), date: params[:date])
		render json: @transaction
	end

	def destroy
			
	end
end