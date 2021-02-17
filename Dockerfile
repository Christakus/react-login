FROM node
WORKDIR /user/app
COPY package.json .
RUN npm install --quiet

COPY . . 