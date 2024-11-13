# Gunakan image Node sebagai base
FROM node:16

# Setel direktori kerja di dalam container
WORKDIR /Website-Ticket

# Salin semua file proyek ke dalam container
COPY package*.json .
RUN npm install

COPY . . 

CMD ["npm", "run", "dev"]
