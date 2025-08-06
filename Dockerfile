# Use Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files first for caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy the rest of the code
COPY . .

# Expose Next.js port
EXPOSE 3000

# Default command
CMD ["pnpm", "dev", "-H", "0.0.0.0", "-p", "3000"]
