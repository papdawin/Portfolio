FROM node:23-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

# Production stage
FROM node:23-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist"]
