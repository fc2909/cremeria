class AddN3ToInventario < ActiveRecord::Migration[5.0]
  def change
    add_column :inventarios, :n3, :string
  end
end
