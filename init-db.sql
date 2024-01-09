CREATE DATABASE IF NOT EXISTS seu_banco_de_dados;
CREATE USER IF NOT EXISTS 'seu_usuario'@'%' IDENTIFIED BY 'sua_senha';
GRANT ALL PRIVILEGES ON seu_banco_de_dados.* TO 'seu_usuario'@'%';
FLUSH PRIVILEGES;