FROM node:16-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install
COPY . .

RUN npm run build

# # Utiliza la imagen oficial de Nginx para el entorno de producción
# FROM nginx:stable-alpine

# # Copiar la versión de producción del proyecto al directorio de Nginx
# COPY --from=build /app/dist /usr/share/nginx/html
# RUN sed -i "s/\/assets/assets/g" /usr/share/nginx/html/index.html

# # Copiar el archivo de configuración de Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para el servidor web
EXPOSE 3000:80

# Iniciar el servidor
CMD ["node",  "dist\main.js"]