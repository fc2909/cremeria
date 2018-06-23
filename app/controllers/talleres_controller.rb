class TalleresController < ApplicationController
def index 
		get_data('taller')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'taller') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'taller') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'taller') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Taller.find(params[:id]) 
		end
		def model_params
			params.permit(:idTaller, :nombre, :direccion, :n1, :n2,  :n3)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end