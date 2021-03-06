class ColumnasController < ApplicationController
def index 
		get_data('columnas')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'columnas') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'columnas') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'columnas') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Columna.find(params[:id])
		end
		def model_params
			params.permit(:nombre, :tipo, :modulo, :n1, :n2)

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end