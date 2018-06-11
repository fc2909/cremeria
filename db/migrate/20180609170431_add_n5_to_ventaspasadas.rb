class AddN5ToVentaspasadas < ActiveRecord::Migration[5.0]
  def change
    add_column :ventaspasadas, :n5, :string
  end
end
