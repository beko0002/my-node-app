# Dockerfile
# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Expose the application port
EXPOSE 3500

# Start the application
CMD ["npm", "start"]

