# Use a lightweight Node.js image with TypeScript support
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json build.ts tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the TypeScript project (if necessary)
RUN npm run build

# Switch to a smaller runtime image for production
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy production-ready project files
COPY . .

# Expose the port your application listens on
EXPOSE 4000

# Installing pm2 globally
# RUN npm install pm2 -g

# Starting our application
# CMD pm2 start process.yml && tail -f /dev/null

# Start the application
CMD [ "npm", "start" ]

