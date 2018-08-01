class AddPesajeToInventario < ActiveRecord::Migration[5.0]
  def change
    add_column :inventarios, :pesaje, :string
  end
end
