class RemisionController < ApplicationController

def index 
		get_data('remision')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'remision') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'remision') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'remision') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Remision.find(params[:id]) 
		end
		def model_params
			params.permit(:folio, :importe, :ppd, :fc, :fechaf, :totalValor, :depositoT, :tipo, :totaDepos, :totalFacturarString, :activo)


		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end

