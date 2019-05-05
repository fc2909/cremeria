class SuperCategoriaController < ApplicationController
def index 
		get_data('super_categoria')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'super_categoria') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'super_categoria') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'super_categoria') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			SuperCategorium.find(params[:id]) 
		end
		def model_params
			params.permit(:nombre)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end

