# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

50.times do
  def time_rand(from = Time.now, to = Time.new(2015, 12, 31))
    Time.at(from + rand * (to.to_f - from.to_f)).to_date
  end

  description = Faker::Company.catch_phrase
  amount = rand(10000).to_f/10
  date = time_rand
  cash_inflow = [true, false].sample

  Transaction.create(description: description, amount: amount, date: date, cash_inflow: cash_inflow)
end

