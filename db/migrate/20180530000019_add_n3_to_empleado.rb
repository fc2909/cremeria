class AddN3ToEmpleado < ActiveRecord::Migration[5.0]
  def change
    add_column :empleados, :n3, :string
  end
end
