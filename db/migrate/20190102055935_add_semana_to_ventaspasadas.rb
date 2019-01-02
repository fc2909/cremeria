class AddSemanaToVentaspasadas < ActiveRecord::Migration[5.0]
  def change
    add_column :ventaspasadas, :semana, :string
  end
end
