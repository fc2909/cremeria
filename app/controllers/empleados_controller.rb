class EmpleadosController < ApplicationController
def index 
		get_data('empleado')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'empleado') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'empleado') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'empleado') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Empleado.find(params[:id])
		end
		def model_params
			params.permit(:id, :idEmpleados, :nombre_Emple, :paterno_Emple, :materno_Emple, :n_seguro, :curp, :domicilio, :rfc, :tipo, :n_licencia, :f_exp, :ruta, :t_venta, :l_credito, :l_bon, :merma, :tipocontrato, :iniciocontrato, :fincontrato, :telp , :tell, :fnacimiento, :estado, :ingreso, :vacaciones, :renuncia, :reingresos, :razon, :solicitud, :ine2, :curp2, :rfc2, :nss, :acta, :cdomicilio, :foto, :recomendaciones, :licenciac, :antecedentes, :ineaval, :predial, :comprobanted, :pagare)


		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end
