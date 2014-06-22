class HomepagesController < ApplicationController
	def index
		@transactions = Transaction.all
	end
end