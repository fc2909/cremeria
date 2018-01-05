class ClientesController < ApplicationController
def index 
		get_data('clientes')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'clientes') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'clientes') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'clientes') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Cliente.find(params[:id])
		end
		def model_params
			params.permit(:local, :propietario, :telefono, :numero, :fechai, :credito, :bonificacion, :direccion, :lng, :lat, :email, :descripcion, :telefonop)


		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end
