FROM node
WORKDIR / login-page
COPY package.json /login-page
RUN npm install -g http-server
COPY . /login-page
CMD ["http-server", "-c", "-1"]
