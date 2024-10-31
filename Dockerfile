# FROM node:18

# WORKDIR /app

# COPY . /app/

# RUN npm ci

# RUN npm run build

# EXPOSE 5000

# CMD ["npx", "serve" , "dist"]

# ใช้ Node.js image เป็น base image
FROM node:18

# ตั้งค่า working directory ภายในคอนเทนเนอร์ 
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json ไปที่ working directory
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดแอปพลิเคชันไปที่ working directory
COPY . .

RUN chmod -R 777 /usr/src/app
RUN chown -R node:node /usr/src/app
RUN ls -l
USER node

# สร้างแอปพลิเคชัน NestJS
RUN npm run build

# เปิด port ที่แอปพลิเคชันจะทำงาน
EXPOSE 5000

# คำสั่งในการรันแอปพลิเคชัน
CMD ["npm", "run", "start:dev"]
