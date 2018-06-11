class AddN6ToVentaspasadas < ActiveRecord::Migration[5.0]
  def change
    add_column :ventaspasadas, :n6, :string
  end
end
