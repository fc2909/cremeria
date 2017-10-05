class Inventario < ApplicationRecord
	self.primary_key = :idInventario

	# --------------------------- Scopes ------------------------------- #
	default_scope { where(activo: 1) }
	default_scope { order(:descripcion) }
end
