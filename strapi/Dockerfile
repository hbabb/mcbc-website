# Use an official node image as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Set environment variable
ENV NODE_ENV=development

# Build the Strapi application
RUN pnpm build

# Ensure build directory exists (if needed for Strapi)
RUN mkdir -p /app/build

# Expose the port the app runs on
EXPOSE 1337

# Start the application
CMD ["pnpm", "start"]
