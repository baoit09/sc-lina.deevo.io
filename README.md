# Nội dung bên dưới được thực hiện trên hệ điều hành Ubuntu

# Cài đặt Node JS
	sudo apt-get update
	sudo apt-get install nodejs
	sudo apt-get install npm
	nodejs -v
	
---> để khởi động Node JS dùng cú pháp: ten_file.js start hoặc NPM start
---> mọi thay đổi trong code server cần phải khởi động lại


# Cài đặt Express
	mkdir myapp 	//tạo thư mục chứa code dự án
	cd myapp	//di chuyển vào thư mục
	npm init	//cài đặt file package.json (quản lý thông tin các gói hỗ trợ đã cài đặt)
	npm install express --save	//cài đặt express
	

# Cài đặt các module cơ bản
	npm install ejs  		//cài đặt module template engine
	npm install -g bower		//cài đặt module bower
	npm install passport 		//cài đặt module passport
	npm install body-parser		//cài đặt module body-parser
	npm install request		//cài đặt module request
	npm install express-session	//cài đặt module session
	npm install cookie-parser	//cài đặt module cookie
	npm install --save path		//cài đặt module path

---> sau khi cài đặt, để sử dụng cần gọi nó theo cú pháp VD: var request = require('request');


# Cài đặt MongoDB
	//nhập key MongoDB
		sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
	
	//tệp danh sách, mỗi phiên Ubuntu có cú pháp khác nhau, ở đây dùng Ubuntu 18.04
		echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
		
	//cập nhật hệ thống
		sudo apt-get update
		
	//tiến hành cài đặt
		sudo apt-get install -y mongodb-org
	
	//khởi động MongoDB
		sudo service mongod start
		
	//khởi động MongoDB cùng hệ thống
		sudo systemctl enable mongod
		
	//kiểm tra trạng thái Mongod	
		sudo systemctl status mongod
		
	//dừng MongoDB
		sudo service mongod stop
		
	//restart MongoDB
		sudo service mongod restart
	
	
# Cài đặt Lina Supply Chain
	//sau khi đã cài đặt Node JS và MongoDB
	//tạo thư mục chứa code dự án
		mkdir lina_sc
		
	//di chuyển vào thư mục và tải toàn bộ source code bằng lệnh 
		cd lina_sc
		git clone https://github.com/deevotech/sc-lina.deevo.io
		
	//di chuyển vào thư mục node-admin
		npm install express --save	//cài đặt express
		bower install			//cài đặt module bower
		sudo service mongod start	//khởi động MongoDB
		npm start			//khởi động Node JS
		
# Cài đặt Node JS service
	//tạo một file .service trên hệ thống
		cd /etc/systemd/system/
		touch demo_lina.service
	//khai báo thông tin
		
		[Unit]
		Description=Node.js Supply chain service node

		[Service]
		PIDFile=/tmp/supply_chain-3000.pid
		User=hoa 				//nhập user máy
		Group=root				
		Restart=always				
		KillSignal=SIGQUIT
		WorkingDirectory=/home/hoa/Desktop/demo/sc-lina.deevo.io/node-sbadmin				//đường dẫn tới thư mục chứa code
		ExecStart=/usr/bin/node /home/hoa/Desktop/demo/sc-lina.deevo.io/node-sbadmin/bin/www		//đường dẫn tới file khai báo server

		[Install]
		WantedBy=multi-user.target
		
	//lưu lại và khởi động
		systemctl daemon-reload		//reload hệ thống
		systemctl enable demo_lina	//khởi động service
		systemctl status demo_lina 	//kiểm tra trạng thái

	
# Cài đặt Nginx
	//cài đặt Nginx
		sudo apt-get update
		sudo apt-get install nginx
	
	//điều chỉnh tường lửa
		sudo ufw app list
		
	//bước trên sẽ trả về nhiều lựa chọn, ở đây chọn Https
		sudo ufw allow 'Nginx HTTPS'
		sudo ufw status 		//kiểm tra trạng thái Nginx
		
	
# Cấu hình HTTPS
	//tạo CSR và Private Key
		sudo mkdir /etc/nginx/ssl				//tạo thư mục chứ file ssl
		cd /etc/nginx/ssl					//đi vào bên trong thư mục
		
		sudo openssl genrsa -des3 -out server.key 2048
		sudo openssl req -new -key server.key -out server.csr
		sudo cp server.key server.key.org
		sudo openssl rsa -in server.key.org -out server.key
		sudo openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
	
	//out put ---> điền thông tin phù hợp.
		Generating a 2048 bit RSA private key
		................................................................................+++
		....................................................................+++
		writing new private key to 'sitecuatui.com.key'
		-----
		You are about to be asked to enter information that will be incorporated
		into your certificate request.
		What you are about to enter is what is called a Distinguished Name or a DN.
		There are quite a few fields but you can leave some blank
		For some fields there will be a default value,
		If you enter '.', the field will be left blank.
		-----
		Country Name (2 letter code) [AU]:VN
		State or Province Name (full name) [Some-State]:Ho Chi Minh
		Locality Name (eg, city) []:Ho Chi Minh
		Organization Name (eg, company) [Internet Widgits Pty Ltd]:Cong Ty A
		Organizational Unit Name (eg, section) []:
		Common Name (e.g. server FQDN or YOUR name) []:sitecuatui.com
		Email Address []:123@gmail.com

		Please enter the following 'extra' attributes
		to be sent with your certificate request
		A challenge password []:123456
		An optional company name []:Cong Ty A

	//Sau khi đã có tệp CSR và Private key,lấy mã CSR để gửi đến nhà cung cấp chứng chỉ SSL bằng lệnh
		cat sitecuatui.com.csr
		
	//di chuyển vào thư mục sites-available và tạo thư mục example
		cd /etc/nginx/sites-available/default
		
	//tạo config server
	
		server {
    			listen 80;
    			server_name localhost;
    			# redirects both www and non-www to ssl port with http (NOT HTTPS, forcing error 497)
    			return 301 https://localhost$request_uri;
		}
		
		server {
		    listen 443 ssl default_server;
		    listen [::]:443 ssl default_server;
		    server_name localhost;
		    error_page 497 https://localhost$request_uri;
		    #include snippets/ssl-domain.com.conf;
		    #include snippets/ssl-params.conf;
		    ssl on;
		    ssl_certificate /etc/nginx/ssl/sitecuatui.com.csr;
		    ssl_certificate_key /etc/nginx/ssl/sitecuatui.com.key;
		    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
		    ssl_prefer_server_ciphers on;
		    ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH'; 
		    #SSLCipherSuite EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH
		    #SSLHonorCipherOrder on
		    
		    # other vhost configuration
		    location / {
			proxy_pass http://localhost:3000;
			proxy_http_version 1.1;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection 'upgrade';
			proxy_set_header Host $host;
			proxy_cache_bypass $http_upgrade;
		    }
		}
		
	//khởi động lại nginx
		sudo service nginx restart

	
