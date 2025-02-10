FROM node:23 AS builder

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

# Production stage
FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
