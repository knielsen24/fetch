class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.integer :num_of_employees
      t.string :phone
      t.string :address
      t.string :image
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
