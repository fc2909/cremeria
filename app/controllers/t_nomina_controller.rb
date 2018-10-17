class TNominaController < ApplicationController
def index 
		get_data('t_nomina')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 't_nomina') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 't_nomina') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 't_nomina') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			TNomina.find(params[:id]) 
		end
		def model_params
			params.permit(:idEmpleado, :idColumna, :cantidad, :n1, :n2,  :n3)
		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end
