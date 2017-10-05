class InventariosController < ApplicationController
def index 
		get_data('inventario')
	end
	def create 
		SetResul({:data=> set_data(model_params, params[:action], nil, 'inventario') })
	end
	def update
		SetResul({:data=> set_data(model_params, params[:action], find_model, 'inventario') })
	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'inventario') })
		#SetResul({:data=> set_data(nil, "delete", find_model, 'inventario') })
	end

	def agregar
		# url:'/inventarios/agregar', data:{idInventario:1, cantidad:12, costo:13}, type:'POST'
		ActiveRecord::Base.transaction do
			# varialbles
			fecha = Time.new.strftime("%Y-%m-%d")
			hora = Time.new.strftime("%H:%M")
			idUsuario = session[:idUsuario]

			#Agregar cantidad al inventario
			unless Inventario.where(id: params[:id]).update_all(["cantidad = cantidad + #{params[:cantidad]}"])
				render :json => {'errmsg' => @control.errors.full_messages.to_sentence(:last_word_connector => ', ', :two_words_connector => ', '), 'errnum' => 9500, 'data' => nil, 'params' => control_params}
				raise ActiveRecord::Rollback
			end

			#Agregar registro al historial
			#historial_inventiario = HistorialInventario.new(idInventario: params[:idInventario], cantidad: params[:cantidad], costo: params[:costo], idUsuario: idUsuario, fecha: fecha, hora: hora)
			#unless historial_inventiario.save
			#	render :json => {'errmsg' => @control.errors.full_messages.to_sentence(:last_word_connector => ', ', :two_words_connector => ', '), 'errnum' => 9500, 'data' => nil, 'params' => control_params}
			#	raise ActiveRecord::Rollback
			#end
			#render :json => {data:historial_inventiario, errnum: 0, errmsg:''}
		end
	end

	private
		def find_model
			Inventario.find(params[:id, :descripcion, :cantidad])
		end
		def model_params
			params.permit(:idInventario, :descripcion, :detalle, :mayoreo, :foraneo, :restaurante, :cantidad, :medida, :s_min, :s_max)
		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end


end
