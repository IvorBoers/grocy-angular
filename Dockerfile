#### Stage 1: Build the angular application
FROM node:22-alpine AS build

# Configure the main working directory inside the docker image.
# This is the base directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH


# Copy the package.json as well as the package-lock.json and install
# the dependencies. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.
COPY package*.json /app/
RUN npm install

# Copy the main application
COPY . /app

# Arguments
ARG configuration=production

# Build the application
RUN npm run build --output-path=/dist --configuration=$configuration

#### Stage 2, use the compiled app, ready for production with Nginx
FROM nginx:1.25.5-alpine

# Copy the angular build from Stage 1
COPY --from=build /app/dist/grocy-angular /usr/share/nginx/html

# Copy our custom nginx config
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf


# Expose port 88 to the Docker host, so we can access it
# from the outside.
EXPOSE 88

ENTRYPOINT ["nginx","-g","daemon off;"]
