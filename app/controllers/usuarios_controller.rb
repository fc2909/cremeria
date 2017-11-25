class UsuariosController < ApplicationController
	def index 
		#get_data('usuario')
		usuario = Usuario.select(:idUsuario, :usuario, :contrasenia, :pin, :tipo, :activo)
		if params[:where].present?
			params[:where].each do |campo, valor|
				usuario = usuario.by_campo(campo, valor)
			end
		end
		render :json => usuario

	end
	def create 
		SetResul({:data=> set_data(create_params, params[:action], nil, 'usuario') })
		
	end
	def update
		SetResul({:data=> set_data(update_params, params[:action], find_model, 'usuario') })

	end
	def destroy
		SetResul({:data=> set_data(delete_model, "update", find_model, 'usuario') })

		#SetResul({:data=> set_data(nil, "delete", find_model, 'usuario') })
	end

	# def login
	# 	usuario = Usuario.find_by("usuario = :usuario COLLATE utf8_bin AND contrasenia = :contrasenia COLLATE utf8_bin AND activo = 1", {usuario: params[:usuario], contrasenia: params[:contrasenia]})
	# 	if usuario.present?
	# 		session[:usuario] = usuario.as_json
    # 	   	redirect_to index_path
	# 	else
	# 		render :json => errs("1")
	# 	end
	# end

	# def logout
	# 	session[:usuario] = nil
	# 	redirect_to singup_path
	# end

	private
		def find_model
			Usuario.find(params[:id])
		end
		def create_params
			params.permit(:usuario, :contrasenia, :pin, :tipo)
		end
		def update_params
			params.permit(:usuario, :contrasenia, :pin, :tipo)
		end
		def delete_model
			params = ActionController::Parameters.new(activo: 0)
			params.permit(:activo)
		end
end