class Transaction < ActiveRecord::Base
	attr_accessible :description, :amount, :cash_inflow, :date

	def self.inflow_converter(inflow)
		p inflow
		inflow == "positive"
	end

end