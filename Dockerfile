# --- STAGE 1: BUILD THE APPLICATION (Builder) ---
FROM node:20-alpine AS builder

# Set the working directory for the application
WORKDIR /app

# Install utility packages often needed by Next.js dependencies (e.g., glibc compatibility)
# This is crucial for Next.js binaries on Alpine.
RUN apk add --no-cache openssl libc6-compat

# 1. Optimize caching: Copy *only* package files first
COPY package.json ./
COPY package-lock.json ./

# 2. Install dependencies (including devDependencies for the build step)
# This layer is only invalidated if package.json changes.
RUN npm install

# Copy the TypeScript configuration file (needed for build)
COPY tsconfig.json ./

# Copy the rest of the application source code
COPY . .

# Environment variables for Next.js build optimization
ENV NEXT_TELEMETRY_DISABLED=1

# Run the production build command. This generates the optimized '.next' folder,
# including the required 'standalone' directory.
RUN npm run build

# --- STAGE 2: RUN THE APPLICATION (Runner) ---
# Use the Node Slim image for a smaller, more secure final image
FROM node:20-slim AS runner

# 3. Create and switch to a non-root user for security (Next.js best practice)
ENV NEXT_PUBLIC_PORT=3000
ENV HOST=0.0.0.0
# The 'node' image already has a 'node' user, so we'll use that.
USER node
WORKDIR /app

# Copy the standalone build files from the builder stage
# The `server.js` (entry point) and all necessary files are included here.
COPY --from=builder --chown=node:node /app/.next/standalone ./

# Copy the static assets (chunks, etc.)
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Copy the public assets (images, logos, favicon, etc.)
COPY --from=builder --chown=node:node /app/public ./public

# Expose the application port
EXPOSE ${NEXT_PUBLIC_PORT}

# Start the Next.js production server using the copied server.js
# Note: Since the output is 'standalone', `node server.js` is the correct entry point.
CMD ["node", "server.js"]