class VentadiariaController < ApplicationController
	def index 
		get_data('ventadiarium')
		
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'ventadiarium') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'ventadiarium') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'ventadiarium') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end


	private
		def find_model
			Ventadiarium.find(params[:id]) 
		end
		def model_params
			params.permit(:id, :idProducto, :descripcionventa, :piezas, :peso,  :medida, :piezasv, :pesov, :precioUnitario, :valorMercancia, :cantidadregresada, :venta, :horadespacho, :horarecepcion, :empleado, :vendedor, :ruta, :fechadespacho, :fecharecepcion, :user, :dc, :sc, :dfc, :sfc, :fechadespachof, :fecharecepcionf)

 

		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end

end

