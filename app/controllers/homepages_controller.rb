class HomepagesController < ApplicationController
  def home
  end

	def index
		@transactions = Transaction.all
	end
end