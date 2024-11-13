FROM node
WORKDIR /Website-Ticket
COPY package.json /Website-Ticket/
RUN npm install -g http-server
COPY . /Website-Ticket/
CMD ["http-server", "-c", "-1"]
