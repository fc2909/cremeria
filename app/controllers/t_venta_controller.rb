class TVentaController < ApplicationController
def index 
		get_data('t_venta')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 't_venta') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 't_venta') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 't_venta') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			TVentum.find(params[:id]) 
		end
		def model_params
			params.permit(:idProduct, :nProduct, :idColumna, :nColumna,:n1)
		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end
