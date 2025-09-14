FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# 複製全部檔案（包含 /src、/public 等）
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
