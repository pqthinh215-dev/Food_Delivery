# 🍔 Food Delivery & Restaurant Management RESTful API

[![NestJS](https://img.shields.io/badge/NestJS-12-ea2845?style=flat&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.10-2d3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479a1?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ed?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85ea2d?style=flat&logo=swagger&logoColor=black)](http://localhost:3000/api-docs)

Hệ thống RESTful API hoàn chỉnh phục vụ nền tảng đặt đồ ăn và đánh giá nhà hàng trực tuyến (tương tự GrabFood / ShopeeFood). Dự án được xây dựng theo chuẩn kiến trúc **Modular Architecture** của NestJS, sử dụng **Prisma ORM**, cơ sở dữ liệu **MySQL**, đóng gói toàn bộ qua **Docker & Docker Compose**, bảo mật tài khoản với **JWT** và **Bcrypt**, kiểm thử tự động với **Vitest**.

---

## 🚀 Công nghệ sử dụng (Tech Stack)

* **Backend Framework:** [NestJS 12](https://nestjs.com/) (Modules, Controllers, Services, Pipes, Guards, Filters)
* **Ngôn ngữ:** [TypeScript 6](https://www.typescriptlang.org/) (ESM native)
* **Cơ sở dữ liệu & ORM:** [MySQL 8.0](https://www.mysql.com/) / [MariaDB](https://mariadb.org/) + [Prisma ORM 7](https://www.prisma.io/) (`@prisma/client`, `@prisma/adapter-mariadb`)
* **Xác thực & Bảo mật:** JWT (`@nestjs/jwt`), Bcrypt (Password Hashing với 10 Salt Rounds), `AuthGuard`
* **Xác thực dữ liệu (Validation):** `class-validator`, `class-transformer` với Global ValidationPipe (Whitelist filtering)
* **Xử lý lỗi toàn cục:** Custom `CatchEverythingFilter` (HttpExceptionFilter) chuẩn hóa định dạng phản hồi
* **Tài liệu API:** Swagger / OpenAPI UI
* **Kiểm thử & Linter:** Vitest (100% passed cho Unit Test), Oxlint (0 errors, 0 warnings)
* **DevOps & Containerization:** Multi-stage Dockerfile, Docker Compose (API + MySQL + Healthcheck)

---

## 📌 Tính năng chính (Key Features)

1. **Xác thực & Người dùng (Auth & User):**
   * Đăng ký tài khoản, kiểm tra chống trùng lặp email (HTTP 409 Conflict).
   * Mã hóa mật khẩu 1 chiều bằng thuật toán **Bcrypt** khi đăng ký hoặc cập nhật thông tin.
   * Đăng nhập (`POST /auth/login`), cấp phát Bearer **JWT Token**.
   * Bảo vệ các route nhạy cảm thông qua **`AuthGuard`**.
2. **Quản lý Thực đơn & Nhà hàng (Menu & Restaurant):**
   * CRUD thông tin nhà hàng (`restaurant`).
   * Phân loại danh mục món ăn (`food_type`).
   * Quản lý món ăn chính (`food`) với giá, hình ảnh, mô tả và liên kết loại món.
   * Quản lý món phụ / topping (`sub_food`) đính kèm theo món chính.
3. **Quy trình Đặt hàng (Order Flow):**
   * Đặt món ăn (`order_food`), quản lý số lượng (`amount`), mã giảm giá (`code`).
   * Lưu trữ cấu hình món phụ / topping đã chọn (`arr_sub_id`) dạng JSON string.
4. **Tương tác & Đánh giá (Social Engagement):**
   * Thả tim / yêu thích nhà hàng (`like_res`).
   * Đánh giá chất lượng nhà hàng (`rate_res`) từ 1 đến 5 sao, tự động lưu thời gian đánh giá.

---

## 🗄️ Cấu trúc Cơ sở dữ liệu (Database Schema)

```mermaid
erDiagram
    user ||--o{ order_food : places
    user ||--o{ like_res : likes
    user ||--o{ rate_res : rates
    
    restaurant ||--o{ like_res : has
    restaurant ||--o{ rate_res : receives
    
    food_type ||--o{ food : categorizes
    food ||--o{ sub_food : has_addons
    food ||--o{ order_food : ordered_in

    user {
        int user_id PK
        string fullname
        string email
        string password
    }

    restaurant {
        int res_id PK
        string res_name
        string image
        string description
    }

    food_type {
        int type_id PK
        string type_name
    }

    food {
        int food_id PK
        string food_name
        string image
        float price
        string description
        int type_id FK
    }

    sub_food {
        int sub_id PK
        string sub_name
        float sub_price
        int food_id FK
    }

    order_food {
        int id PK
        int user_id FK
        int food_id FK
        int amount
        string code
        string arr_sub_id
    }

    like_res {
        int id PK
        int user_id FK
        int res_id FK
        datetime date_like
    }

    rate_res {
        int id PK
        int user_id FK
        int res_id FK
        int amount
        datetime date_rate
    }
```

---

## 📑 Danh sách API Endpoints

Tài liệu Swagger UI tương tác trực tiếp tại: **`http://localhost:3000/api-docs`**

| Nhóm | Phương thức | Endpoint | Mô tả |
| :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/auth/login` | Đăng nhập hệ thống & lấy JWT Token |
| **User** | `POST` | `/user` | Tạo người dùng mới (Mã hóa mật khẩu) |
| | `GET` | `/user` | Lấy danh sách người dùng |
| | `GET` | `/user/:id` | Lấy chi tiết người dùng kèm lịch sử đặt món/đánh giá |
| | `PATCH` | `/user/:id` | Cập nhật thông tin (Tự động hash nếu đổi password) |
| | `DELETE` | `/user/:id` | Xóa người dùng |
| **Food Type** | `POST` | `/food-type` | Tạo danh mục món ăn |
| | `GET` | `/food-type` | Lấy danh sách danh mục kèm món ăn |
| | `GET` | `/food-type/:id` | Lấy chi tiết danh mục |
| | `PATCH` | `/food-type/:id` | Cập nhật danh mục |
| | `DELETE` | `/food-type/:id` | Xóa danh mục |
| **Restaurant**| `POST` | `/restaurant` | Tạo nhà hàng mới |
| | `GET` | `/restaurant` | Lấy danh sách nhà hàng kèm lượt like & đánh giá |
| | `GET` | `/restaurant/:id`| Chi tiết nhà hàng |
| | `PATCH` | `/restaurant/:id`| Cập nhật nhà hàng |
| | `DELETE` | `/restaurant/:id`| Xóa nhà hàng |
| **Food** | `POST` | `/food` | Thêm món ăn mới |
| | `GET` | `/food` | Danh sách món ăn kèm loại món và topping |
| | `GET` | `/food/:id` | Chi tiết món ăn |
| | `PATCH` | `/food/:id` | Cập nhật món ăn |
| | `DELETE` | `/food/:id` | Xóa món ăn |
| **Sub Food** | `POST` | `/sub-food` | Tạo món ăn kèm / topping |
| | `GET` | `/sub-food` | Danh sách món ăn kèm |
| | `GET` | `/sub-food/:id` | Chi tiết món kèm |
| | `PATCH` | `/sub-food/:id` | Cập nhật món kèm |
| | `DELETE` | `/sub-food/:id` | Xóa món kèm |
| **Order Food**| `POST` | `/order-food` | Đặt món ăn kèm topping và voucher code |
| | `GET` | `/order-food` | Lấy danh sách đơn đặt món kèm thông tin khách/món |
| | `GET` | `/order-food/:id`| Chi tiết đơn đặt món |
| | `PATCH` | `/order-food/:id`| Cập nhật đơn đặt món |
| | `DELETE` | `/order-food/:id`| Hủy đơn đặt món |
| **Like Res** | `POST` | `/like-res` | Thích nhà hàng |
| | `GET` | `/like-res` | Danh sách lượt thích kèm user và nhà hàng |
| | `GET` | `/like-res/:id` | Chi tiết lượt thích |
| | `DELETE` | `/like-res/:id` | Bỏ thích nhà hàng |
| **Rate Res** | `POST` | `/rate-res` | Đánh giá sao nhà hàng (1 - 5 sao) |
| | `GET` | `/rate-res` | Danh sách đánh giá |
| | `GET` | `/rate-res/:id` | Chi tiết đánh giá |
| | `PATCH` | `/rate-res/:id` | Cập nhật số sao |
| | `DELETE` | `/rate-res/:id` | Xóa đánh giá |

---

## 🛠️ Hướng dẫn Cài đặt & Chạy dự án

### Cách 1: Chạy bằng Docker Compose (Khuyên dùng - Nhanh nhất)

Chỉ cần cài đặt Docker Desktop, không cần cài MySQL trên máy:

```bash
# 1. Khởi động toàn bộ container (API + MySQL 8.0)
docker-compose up -d --build

# 2. Đẩy cấu trúc bảng vào database trong Docker (chỉ chạy lần đầu)
docker-compose exec api npx prisma db push

# 3. Xem log hoạt động
docker-compose logs -f api
```
* **API:** `http://localhost:3000`
* **Swagger Docs:** `http://localhost:3000/api-docs`
* **Dừng container:** `docker-compose down`

---

### Cách 2: Chạy trực tiếp trên máy (Local Development)

#### 1. Yêu cầu môi trường
* Node.js >= 20.x
* MySQL / MariaDB (XAMPP, Laragon hoặc MySQL Server)

#### 2. Cài đặt dependencies
```bash
npm install
```

#### 3. Cấu hình biến môi trường
Tạo file `.env` tại thư mục gốc của dự án:
```env
PORT=3000

DATABASE_URL="mysql://root:123456@127.0.0.1:3306/bt_sql"
DATABASE_HOST="127.0.0.1"
DATABASE_PORT=3306
DATABASE_USER="root"
DATABASE_PASSWORD="your_password"
DATABASE_NAME="bt_sql"

JWT_SECRET="YourSuperSecretKeyForJWT"
JWT_EXPIRES_IN="1d"
```

#### 4. Sinh Prisma Client & Đồng bộ Database
```bash
npx prisma generate
npx prisma db push
```

#### 5. Khởi động ứng dụng
```bash
# Chế độ phát triển (Hot reload)
npm run start:dev

# Chế độ Production
npm run build
npm run start:prod
```

---

## 🧪 Kiểm thử & Chất lượng mã nguồn (Testing & Linting)

```bash
# Chạy Unit Tests với Vitest
npm test

# Chạy kiểm tra chất lượng code với Oxlint (Siêu nhanh, 0 warnings)
npm run lint

# Format code với Prettier
npm run format
```

---

## 📂 Cấu trúc thư mục dự án (Project Structure)

```text
project-nestjs/
├── prisma/
│   └── schema.prisma            # Định nghĩa các model và quan hệ DB
├── src/
│   ├── common/                  # Các thành phần dùng chung toàn hệ thống
│   │   ├── filters/             # Global Exception Filter (CatchEverythingFilter)
│   │   └── guards/              # AuthGuard xác thực JWT Bearer
│   ├── modules/                 # Các module nghiệp vụ theo cấu trúc Domain-driven
│   │   ├── auth/                # Module Đăng nhập & cấp JWT Token
│   │   ├── user/                # Module Quản lý người dùng & Hash Bcrypt
│   │   ├── restaurant/          # Module Quản lý nhà hàng
│   │   ├── food_type/           # Module Phân loại danh mục món ăn
│   │   ├── food/                # Module Món ăn chính
│   │   ├── sub_food/            # Module Món ăn phụ / Topping
│   │   ├── order_food/          # Module Đơn đặt hàng
│   │   ├── like_res/            # Module Tương tác yêu thích nhà hàng
│   │   └── rate_res/            # Module Đánh giá sao nhà hàng
│   ├── prisma/                  # Global Prisma Module & Service (MariaDB Adapter)
│   ├── app.module.ts            # Root Module tổng hợp toàn bộ tính năng
│   └── main.ts                  # Entry point, tích hợp Swagger, Global Pipes & Filters
├── Dockerfile                   # Multi-stage Docker build tối ưu
├── docker-compose.yml           # Điều phối API và MySQL Container
├── prisma.config.ts             # Cấu hình Prisma 7 Data Source
├── package.json                 # Dependencies và scripts
└── README.md
```
