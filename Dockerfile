FROM node:18-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=Europe/Moscow
ARG PUBLIC_HELLO

COPY. /usr/src/app

# Install build dependencies
RUN apk --no-cache add curl tzdata git

# Explicitly install the missing rollup binary for Alpine
RUN npm install --global @rollup/rollup-linux-x64-musl

# Set timezone
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install project dependencies
RUN npm install --force

# Continue with the rest of your build process
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/app

ARG TZ=Europe/Moscow

# Install runtime dependencies
RUN apk --no-cache add curl tzdata git
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Copy only package.json and package-lock.json to leverage Docker cache
COPY --from=sk-build /usr/src/app/package*.json /usr/src/app/

# Install production dependencies only
RUN npm install --only=production --force

# Copy the rest of your application
COPY --from=sk-build /usr/src/app/build /usr/src/app/build

EXPOSE 3000
CMD ["node", "build/index.js"]
