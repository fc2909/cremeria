class ForoController < ApplicationController
def index 
		get_data('foro')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'foro') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'foro') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'foro') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Foro.find(params[:id]) 
		end
		def model_params
			params.permit(:id,:nombre, :tipo, :n1, :n2, :activo)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end