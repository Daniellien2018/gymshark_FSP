class AddIndexToCart < ActiveRecord::Migration[7.0]
  def change
   
    remove_index :cart_items, :user_id
  end
end
