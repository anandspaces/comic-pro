# Stage 1 — Build
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 — Serve
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/dist ./dist

# Install a lightweight static file server (you can also use nginx if you want)
RUN npm install -g serve

EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
