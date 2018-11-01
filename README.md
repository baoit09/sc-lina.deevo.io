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
	
