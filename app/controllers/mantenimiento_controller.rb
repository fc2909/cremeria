class MantenimientoController < ApplicationController
def index 
		get_data('mantenimientos')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'mantenimientos') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'mantenimientos') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'mantenimientos') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Mantenimiento.find(params[:id]) 
		end
		def model_params
			params.permit(:descripcion, :fecha, :nombre, :vehiculo, :jerarquia, :servicio, :n1, :n2)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end