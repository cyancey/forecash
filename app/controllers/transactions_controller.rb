class TransactionsController < ApplicationController
	def index
		render json: Transaction.all
	end

	def create # get to Frequency if have time, may have to delete frequency
		p params

		# @transaction = Transaction.create(description: params[:description], amount: params[:number], 
		# 	cash_inflow: Transaction.inflow_converter(params[:cash_flow]), date: params[:date])

		if params[:frequency] == "daily"
			0.upto(params[:num_times].to_i - 1).each do |day_in_future|
				@transaction = Transaction.create(description: params[:description], amount: params[:number], cash_inflow: Transaction.inflow_converter(params[:cash_flow]), date: (Date.parse(params[:date]) + day_in_future))
			end	

		elsif params[:frequency] == "weekly"
			0.upto(params[:num_times].to_i - 1).each do |week_in_future|
				@transaction = Transaction.create(description: params[:description], amount: params[:number], cash_inflow: Transaction.inflow_converter(params[:cash_flow]), date: (Date.parse(params[:date]) + week_in_future * 7))
			end

		elsif params[:frequency] == "monthly"
			0.upto(params[:num_times].to_i - 1).each do |month_in_future|
				@transaction = Transaction.create(description: params[:description], amount: params[:number], cash_inflow: Transaction.inflow_converter(params[:cash_flow]), date: (Date.parse(params[:date]) + month_in_future * 30)
					)
			end

		elsif params[:frequency] == "yearly"
			0.upto(params[:num_times].to_i - 1).each do |year_in_future|
				@transaction = Transaction.create(description: params[:description], amount: params[:number], cash_inflow: Transaction.inflow_converter(params[:cash_flow]), date: (Date.parse(params[:date]) + year_in_future * 365))
			end
		end
		render json: @transaction
	end

	def destroy
			
	end
end