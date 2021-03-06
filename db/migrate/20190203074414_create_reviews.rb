class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer    :rate,   null: false
      t.text       :comment
      t.references :user,  null: false, foreign_key: true
      t.timestamps
    end
  end
end
