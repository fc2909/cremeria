class NotaseController < ApplicationController
def index 
		get_data('notase')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'notase') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'notase') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'notase') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Notase.find(params[:id]) 
		end
		def model_params
			params.permit(:idnombre, :notas, :descripcion)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end