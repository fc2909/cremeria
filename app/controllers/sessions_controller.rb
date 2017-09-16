class SessionsController < ApplicationController
skip_before_filter :save_logs, :check_user
	after_action :check_user, only: [:create]
	def new
		redirect_to root_path
	end

	def create
		usuario = Usuario.authenticate(params[:usuario], params[:contrasenia])
		puts usuario.to_json
		if usuario.present?
			sesion = { id: usuario[:id], tipo: usuario[:tipo]}
			session[:usuario] = sesion
			puts session.to_json
			#redirect_to index_path
			render :js => "window.location = '/login'"
		else
			render :json => errs("1")
		end
	end

	def destroy
		session[:id] = nil
		session[:tipo] = nil
		#render :json => {ok:1}
		render :js => "window.location = '/login'"
		#redirect_to singup_path, turbolinks: true
end
end
