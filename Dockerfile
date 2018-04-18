FROM node:carbon

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
ADD . /usr/src/app
RUN yarn install

ENV NODE_ENV=production

RUN npm run build
 
RUN ls

# Port to expose
EXPOSE 8080
CMD [ "npm", "start" ]