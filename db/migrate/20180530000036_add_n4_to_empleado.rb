class AddN4ToEmpleado < ActiveRecord::Migration[5.0]
  def change
    add_column :empleados, :n4, :string
  end
end
