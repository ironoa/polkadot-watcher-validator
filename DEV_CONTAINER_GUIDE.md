# Development Container Setup Guide

This project is now configured with VS Code Dev Containers for a consistent development environment without requiring local Node.js installation.

## Prerequisites

1. **Docker**: Make sure Docker is installed and running on your machine
2. **VS Code**: Install Visual Studio Code
3. **Dev Containers Extension**: Install the "Dev Containers" extension (ms-vscode-remote.remote-containers)

## Getting Started

1. **Open the project** in VS Code
2. **Reopen in Container**: VS Code should automatically detect the dev container configuration and show a notification to "Reopen in Container". Click it, or:
   - Open the Command Palette (`Cmd+Shift+P` on Mac / `Ctrl+Shift+P` on Windows/Linux)
   - Type "Dev Containers: Reopen in Container"
   - Select it from the list

3. **Wait for setup**: The first time will take a few minutes as Docker builds the container and installs dependencies

## What's Included

### Development Environment
- **Node.js 18**: Matching your production environment
- **TypeScript**: Global installation with ts-node
- **Development tools**: nodemon, pm2, vim, nano, htop
- **Git & GitHub CLI**: For version control and GitHub operations

### VS Code Extensions (Auto-installed)
- TypeScript support
- ESLint integration
- JSON support
- Mocha test adapter
- Prettier formatting

### Available Commands
Once in the container, you can run:
```bash
# Install dependencies (done automatically on container creation)
yarn install

# Build the project
yarn build

# Run tests
yarn test

# Run linting
yarn lint

# Start the application
yarn start
```

### Debugging
The container includes several debug configurations:
- **Debug Polkadot Watcher**: Debug the built JavaScript application
- **Debug TypeScript (ts-node)**: Debug TypeScript files directly
- **Debug Tests**: Debug your Mocha test suite
- **Attach to Process**: Attach to a running Node.js process

### Port Forwarding
The following ports are automatically forwarded from the container to your host:
- 3000, 8080, 9090

## File Persistence

- **Source code**: Your project files are mounted from the host, so changes persist
- **node_modules**: Stored in the container for better performance
- **Bash history**: Persisted across container rebuilds

## Troubleshooting

### Container won't start
- Make sure Docker is running
- Check Docker has sufficient resources allocated
- Try rebuilding: Command Palette → "Dev Containers: Rebuild Container"

### Extensions not working
- Try reloading the window: Command Palette → "Developer: Reload Window"
- Check if extensions are enabled in the container

### Performance issues
- On macOS/Windows: Ensure Docker has adequate memory allocated (4GB+ recommended)
- Consider using Docker Desktop's improved file sharing if available

## Customization

You can customize the setup by editing:
- `.devcontainer/devcontainer.json`: Container configuration, VS Code settings, extensions
- `.devcontainer/Dockerfile`: Container image and installed packages
- `.vscode/settings.json`: VS Code workspace settings
- `.vscode/launch.json`: Debug configurations

## Rebuilding the Container

If you modify the Dockerfile or devcontainer.json, rebuild the container:
- Command Palette → "Dev Containers: Rebuild Container"
