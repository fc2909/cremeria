class AvisosController < ApplicationController
		get_data('aviso')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'aviso') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'aviso') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'aviso') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Aviso.find(params[:id]) 
		end
		def model_params
			params.permit(:id,:descripcion, :fecha, :n1, :n2)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end