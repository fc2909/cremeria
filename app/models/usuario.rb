class Usuario < ApplicationRecord
	def self.authenticate(usuario, contrasenia)
		usuario = Usuario.find_by("usuario = :usuario COLLATE utf8_bin AND contrasenia = :contrasenia COLLATE utf8_bin AND activo = 1", {usuario: usuario, contrasenia: contrasenia})
		if usuario.present?
			usuario
		else
			nil
		end
	end

	# --------------------------- Scopes ------------------------------- #
	default_scope { where(activo: 1) }
	default_scope { order(:usuario) }
	scope :by_campo, -> (campo, valor) {  where("#{campo.parameterize.to_s} = :valor", {valor:valor}) if campo.present? && valor.present? }
	#scope :activos, -> { where(activo: 1) }
end
