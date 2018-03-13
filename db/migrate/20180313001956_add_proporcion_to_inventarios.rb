class AddProporcionToInventarios < ActiveRecord::Migration[5.0]
  def change
    add_column :inventarios, :proporcion, :string
  end
end
