namespace :db do
  desc "TODO"
  task :scenario_populate => :environment do

    Transaction.destroy_all
    12.times do |month|
      date = Time.now + (month + 1).months
      Transaction.create(description: "Monthly Rent", amount: 3500, date: date, cash_inflow: false)
    end

    365.times do |day|
      date = Time.now + (day + 1).days
      Transaction.create(description: "Projected Daily Cash", amount: 270, date: date, cash_inflow: true)
    end

    52.times do |week|
      date = Time.now + (week + 1).weeks
      if week.odd?
        Transaction.create(description: "Payroll", amount: 1200, date: date, cash_inflow: false)
      end
      Transaction.create(description: "Weekly Supplies", amount: 450, date: date, cash_inflow: false)
    end

  end
end
