FROM node:lts-slim

RUN npm install -g pnpm

WORKDIR /app
EXPOSE 3000

# Copy the package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

RUN npm run dev-setup

COPY . .
