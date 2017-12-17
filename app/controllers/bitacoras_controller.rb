class BitacorasController < ApplicationController
def index 
		get_data('logs')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'logs') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'logs') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'logs') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Log.find(params[:idLog])
		end
		def model_params
			params.permit(:idLog)



		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end
