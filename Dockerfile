# Dockerfile
FROM node:22.7.0

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm run dev

# Copy application code
COPY . .

# Expose the port the app runs on
EXPOSE 3500

# Start the application
## CMD ["npm", "start"]
