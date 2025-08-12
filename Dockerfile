# --- Estágio 1: Build (Ambiente de Construção) ---
# Usa uma imagem Node.js mais completa para garantir que todas as dependências sejam instaladas
#  'node:18.19.0-bullseye'
FROM node:18.19.0-bullseye AS builder

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Copia os arquivos de configuração do projeto (package.json).
COPY package.json ./

# Instala as dependências do projeto.
RUN npm install --silent

# Copia todos os outros arquivos da aplicação para o contêiner.
COPY . .

# Executa o comando de build do React. Isso gera a pasta 'build'.
RUN npm run build

# --- Estágio 2: Serve (Ambiente de Produção) ---
# Usa uma imagem NGINX para servir os arquivos estáticos.
FROM nginx:alpine

# Copia o arquivo de configuração do NGINX.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos da pasta 'build' do estágio anterior.
COPY --from=builder /app/build /usr/share/nginx/html

# A porta 80 é a porta padrão que o NGINX usa para servir a aplicação.
EXPOSE 80
