class VentaspasadaController < ApplicationController
def index 
		get_data('ventaspasada')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'ventaspasada') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'ventaspasada') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'ventaspasada') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Ventaspasada.find(params[:id]) 
		end
		def model_params
			params.permit(:idVentap, :fecha, :ruta, :nombre, :tipo, :credito_p, :bonificacion_p, :v_mercancia, :t_venta,   :cobrado, :t_vendido, :creditos, :efectivo, :otros, :t_venta_merca, :f_s_dia, :loquedeberiatraer, :f_s_real, :dsc, :sc, :dsd, :sd, :dsfc, :sfc, :n1, :n2, :n3, :n4, :fechaf, :despachador2, :km, :gas, :gasolina, :diesel, :tipoCombustible, :fechaCarga, :vehiculo, :despachador, :user)
      
    


		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end

