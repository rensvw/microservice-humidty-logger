FROM node:4-onbuild
ADD . /usr/src/app
RUN npm install
EXPOSE 9001
CMD [ "npm", "start" ]