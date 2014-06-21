class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.text :description
      t.float :amount
      t.string :frequency
      t.integer :number_of_transactions
      t.date :first_transaction_date

      t.timestamps
    end
  end
end
