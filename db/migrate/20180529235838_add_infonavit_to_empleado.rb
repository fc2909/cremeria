class AddInfonavitToEmpleado < ActiveRecord::Migration[5.0]
  def change
    add_column :empleados, :infonavit, :string
  end
end
