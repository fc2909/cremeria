class AddTamanioToInventarios < ActiveRecord::Migration[5.0]
  def change
    add_column :inventarios, :tamanio, :string
  end
end
