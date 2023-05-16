# Define la imagen base
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install --global yarn

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Expone el puerto necesario para el proyecto (por ejemplo, 3000 para un servidor de desarrollo de React Native)
EXPOSE 5000

# Comando para iniciar la aplicación
CMD [ "npm", "start" ]