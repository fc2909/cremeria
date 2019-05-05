class CategoriasController < ApplicationController
def index 
		get_data('categor')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'categor') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'categor') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'categor') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Categor.find(params[:id]) 
		end
		def model_params
			params.permit(:nombre, :descripcion, :unidades, :jerarquia, :n1, :n2,  :n3, :n4,:idCategoria)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end