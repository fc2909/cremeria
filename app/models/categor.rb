class Categor < ApplicationRecord
	self.primary_key = :id

	# --------------------------- Scopes ------------------------------- #
	default_scope { where(activo: 1) }
	default_scope { order(:jerarquia) }
end
