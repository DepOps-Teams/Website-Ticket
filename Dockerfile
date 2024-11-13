# Gunakan image Node sebagai base
FROM node:16

# Setel direktori kerja di dalam container
WORKDIR /Website-Ticket

# Salin file package.json dan package-lock.json untuk instalasi dependencies
COPY package.json /Website-Ticket/

# Install dependencies
RUN npm install

# Salin semua file proyek ke dalam container
COPY . /Website-Ticket/

# Build aplikasi untuk produksi
RUN npm run build

# Install http-server secara global untuk menyajikan build
RUN npm install -g http-server

# Atur command untuk menjalankan server di folder build pada port 3000
CMD ["http-server", "build", "-p", "3000", "-c-1", "--spa",]

# Pastikan port 3000 diekspos
EXPOSE 3000
