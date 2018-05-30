class AddN1ToEmpleado < ActiveRecord::Migration[5.0]
  def change
    add_column :empleados, :n1, :string
  end
end
