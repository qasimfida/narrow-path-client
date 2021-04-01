FROM node:12-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when contai
CMD ["npm","start" ]