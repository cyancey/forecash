class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.text :description
      t.float :amount
      t.boolean :cash_inflow
      t.date :date

      t.timestamps
    end
  end
end
