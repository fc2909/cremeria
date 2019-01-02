class AddFechaToAviso < ActiveRecord::Migration[5.0]
  def change
    add_column :avisos, :fecha, :string
  end
end
