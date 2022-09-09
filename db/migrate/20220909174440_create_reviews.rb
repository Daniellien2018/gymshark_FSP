class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :review, null: false 
      t.integer :rating, null: false
      t.references :author, null: false, foreign_key: {to_table: :users}
      t.references :product, null: false, foreign_key: true, index: false
      t.timestamps
    end
    add_index :reviews, [:product_id, :author_id], unique: true
  end
end
