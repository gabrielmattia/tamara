# Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN echo "=== BUILD OUTPUT ===" && find /app -maxdepth 3 -type d | sort && echo "=== END ==="

# Production
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
