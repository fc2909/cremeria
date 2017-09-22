class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	#protect_from_forgery with: :exception
	#protect_from_forgery with: :null_session
	before_action :save_logs, except: [:loggin, :login, :logout]
	before_action :check_user, except: [:login, :loggin]

	def errs(num)
		return errors[num]
	end

	def menu
		@usuario = session[:usuario]
		puts "hola mundo"
	end

	def get_data(model)
		where = params[:where] || @where || Array.new
		includes = params[:includes] || Array.new
		p_where = ""

		puts '-------------------- where --------------------'
		puts where
		
		if where.size > 0 then
			p_where = ''
			n = 1
			for key, value in where
				puts key
				puts value
				puts value.class.name == 'String'

				con = ' AND '
				if n == 1
					con = ''
				end

				if value.class.name == 'String'
					p_where += con + key + " = '" + value + "' "
				elsif value.class.name == 'Array'
					p_where += con + key + " IN ('" + value.join("', '") + "') "
				else
					op = value[:op] || '='
					if n > 1
						con = value[:con] || con
					end

					v_value = value[:value]
					if value[:value].class.name == 'Array'
						op = ' IN '
						v_value = "('" + v_value.join("', '") + "')"
					else
						v_value = " '" + v_value + "' "
					end

					p_where +=  con + " " + key + " " + op + v_value
				end
				n += 1
			end
		end
		puts p_where
		p_query = "#{p_where}"

		puts '-------------------------- p_query --------------------------'
		puts p_query
		@resul = model.singularize.classify.constantize.where(p_query)

		puts includes
		if includes.class == Array
			includes = Hash[(0...includes.size).zip includes]
		end
		puts includes.class
		puts includes
		if includes.length > 0
			includes_x = { :include => Array.new }

			puts '--- includes ---'
			for index, item in includes
				puts item
				puts index

				if item[:include]
					puts 1
					table = {}
					table[item[:table]] = { :include => Array.new }

					if item[:only]
						puts 1.2
						table[item[:table]][:only] = Array.new

						for only in item[:only]
							table[item[:table]][:only].push(only)
						end
					end

					puts '--- includes ---'
					for index_in, item_in in item[:include]
						puts index_in
						puts item_in

						if item_in[:only]
							puts 1.3
							table_in = {}
							table_in[item_in[:table]] = { :only => Array.new }

							for only in item_in[:only]
								table_in[item_in[:table]][:only].push(only)
							end

							table[item[:table]][:include].push(table_in)
						else
							puts 1.4
							table[item[:table]][:include].push(item_in[:table])
						end
					end
					puts table
					puts '--- end ---'
					includes_x[:include].push(table)
				elsif item[:only]
					puts 2
					table = {}
					table[item[:table]] = { :only => Array.new }

					for only in item[:only]
						table[item[:table]][:only].push(only)
					end

					includes_x[:include].push(table)
				else
					includes_x[:include].push(item[:table])
				end

				# if item.class.name == 'String'
				# 	includes_x.push({:include => item})
				# else
				# 	puts '--- key value---'
				# 	puts item

				# 	# for key, value in item
				# 	# 	puts key
				# 	# 	for item_in in value
				# 	# 		puts item_in
				# 	# 	end
				# 	# end
				# end
			end
			puts '--- begin includes_x ---'
			puts includes_x
			puts '--- end includes_x ---'
			@resul = @resul.as_json(includes_x)
		end

		#@model = model.pluralize.classify.constantize.all
		# puts @resul.length
		# if @resul.length == 1
		# 	return @resul[0].as_json
		# else
		#	return @resul.as_json
		#end
		render :json => @resul.as_json
	end
	def set_data(params, action, data, model)

		puts '--'
		case action
			when "create" then
				puts ' -- '
				@model = model.singularize.classify.constantize.new(params)
				puts '--'
				if @model.save
					return @model
					puts '--'
				else
					puts '--'
					return {
						'msg' => @model.errors.full_messages.to_sentence(:last_word_connector => ', ', :two_words_connector => ', '), 
						'num' => 9500, 
						'data' => nil, 
						'params' => params
					}
				end
			when "update" then
				@model = data
				if @model.update(params)
					return @model
				else
					return {
						'msg' => @model.errors.full_messages.to_sentence(:last_word_connector => ', ', :two_words_connector => ', '), 
						'num' => 9500, 
						'data' => nil, 
						'params' => params
					}
				end
			when "delete" then
				@model = data
				if @model.destroy
					return @model
				else
					return {
						'msg' => @model.errors.full_messages.to_sentence(:last_word_connector => ', ', :two_words_connector => ', '), 
						'num' => 9500, 
						'data' => nil, 
						'params' => nil
					}
				end
		end
	end

	def SetResul(json)
		msg = json[:msg]
		num = json[:num]
		data = json[:data]
		if !json[:msg] then
			msg = ""
		end
		if !json[:num] then
			num = 0
		end
		if !json[:data] then
			data = {}
		end
		render :json => {
							'errmsg' => msg, 
							'errnum' => num, 
							'data' => data.as_json.except!("contrasenia")
						}
		@model.errors.full_messages.to_sentence(:last_word_connector => ', ', :two_words_connector => ', ')
	end
	
	private
		def errors
			{
				'1' =>'el usuario o la contraseñia son incorrectos',
			}
		end
		def save_logs
			small_params = params.to_json
			metodo = "#{request.method_symbol}"
			fecha = Time.new.strftime("%Y-%m-%d")
			hora = Time.new.strftime("%H:%M")
			puts 'sesion'
			puts session.as_json
			log_params = {url: "#{params[:controller]}/#{params[:action]}", data: small_params, tipo: metodo, idUsuario: session[:idUsuario], fecha: fecha, hora: hora}
			unless Log.create(log_params)
				render :json => {'errmsg' => @control.errors.full_messages.to_sentence(:last_word_connector => ', ', :two_words_connector => ', '), 'errnum' => 9500, 'data' => nil, 'params' => control_params}
				raise ActiveRecord::Rollback
			end
		end
		def check_user
			puts 'checando session'
			puts session.to_json
			puts session[:usuario].blank?
			if session[:usuario].blank?
				puts 'inicio sesion'
				redirect_to singup_path and return
			end
		end
end
