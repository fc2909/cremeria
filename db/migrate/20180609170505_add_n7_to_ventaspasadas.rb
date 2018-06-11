class AddN7ToVentaspasadas < ActiveRecord::Migration[5.0]
  def change
    add_column :ventaspasadas, :n7, :string
  end
end
