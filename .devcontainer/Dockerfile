# Use Node.js 18 base image (matching production)
FROM node:18

# Install additional system dependencies useful for development
RUN apt-get update && apt-get install -y \
    git \
    curl \
    vim \
    nano \
    htop \
    procps \
    && rm -rf /var/lib/apt/lists/*

# Install global Node.js packages useful for development
RUN npm install -g \
    nodemon \
    pm2 \
    typescript \
    ts-node \
    @types/node

# Set the working directory
WORKDIR /workspace

# Copy package files and TypeScript config for better layer caching
COPY package.json yarn.lock tsconfig.json ./

# Give node user ownership of the workspace directory
RUN chown -R node:node /workspace

# Switch to node user for development
USER node

# Install dependencies as the node user, skipping scripts to avoid build issues
RUN yarn install --frozen-lockfile --ignore-scripts

# Copy source files for development (after dependencies are installed)
COPY --chown=node:node . .

# Set up bash history persistence
RUN echo 'export HISTFILE=/home/node/.bash_history' >> /home/node/.bashrc

# Keep the container running for development
CMD ["sleep", "infinity"]
