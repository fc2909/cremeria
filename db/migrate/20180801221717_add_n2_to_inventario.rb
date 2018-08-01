class AddN2ToInventario < ActiveRecord::Migration[5.0]
  def change
    add_column :inventarios, :n2, :string
  end
end
