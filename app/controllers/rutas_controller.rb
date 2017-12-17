class RutasController < ApplicationController
def index 
		get_data('rutavendedor')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'rutavendedor') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'rutavendedor') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'rutavendedor') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Rutavendedor.find(params[:id]) 
		end
		def model_params
			params.permit(:nombre, :descripcion, :fecha, :n1, :n2,  :n3)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end

