class MVehicularController < ApplicationController
def index 
		get_data('vehiculo')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'vehiculo') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'vehiculo') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'vehiculo') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Vehiculo.find(params[:id])
		end
		def model_params
			params.permit(:id, :idEmpleados, :nombre_Emple, :paterno_Emple, :materno_Emple, :n_seguro, :curp, :domicilio, :rfc, :tipo, :n_licencia, :f_exp, :ruta, :t_venta, :l_credito, :l_bon, :merma)



		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end
