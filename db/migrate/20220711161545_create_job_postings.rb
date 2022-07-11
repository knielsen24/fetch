class CreateJobPostings < ActiveRecord::Migration[6.1]
  def change
    create_table :job_postings do |t|
      t.belongs_to :company, null: false, foreign_key: true
      t.string :position
      t.string :location
      t.string :compensation
      t.string :job_type
      t.text :description
      t.string :benefits

      t.timestamps
    end
  end
end
