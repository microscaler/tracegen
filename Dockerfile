FROM node:16

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

CMD node -r './oteltrace.js' app.js

