class Transaction < ActiveRecord::Base
	attr_accessible :description, :amount, :cash_inflow, :date
end