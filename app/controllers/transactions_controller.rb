class TransactionsController < ApplicationController
	def index
		render json: Transaction.all
	end

	def create
		# Transaction.create(description: params[:description], number: params[:number], 
		# 	)
	end
end