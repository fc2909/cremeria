class AddN1ToInventario < ActiveRecord::Migration[5.0]
  def change
    add_column :inventarios, :n1, :string
  end
end
