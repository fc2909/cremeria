class PagaresController < ApplicationController
def index 
		get_data('pagare')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'pagare') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'pagare') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'pagare') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Pagare.find(params[:id]) 
		end
		def model_params
			params.permit(:nombre)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end

