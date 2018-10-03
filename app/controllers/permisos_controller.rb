class PermisosController < ApplicationController
def index 
		get_data('permisos')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'permisos') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'permisos') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'permisos') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Permiso.find(params[:id]) 
		end
		def model_params
			params.permit(:user, :ventas, :movimientos, :inventario, :clientes, :vehiculos, :logistica, :nomina, :empleados, :usuarios, :reportes, :bitacoras, :manuales, :remisiones, :fabrica, :n1, :n2, :n3, :activo)
		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end