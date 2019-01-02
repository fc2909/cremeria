class AddSemanaToVentadiaria < ActiveRecord::Migration[5.0]
  def change
    add_column :ventadiaria, :semana, :string
  end
end
