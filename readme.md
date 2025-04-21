# 📘 คู่มือการใช้งาน QR Code Generator & Scanner

## 🔗 Repository

[https://github.com/siraphoprmutt/html5-qrcode](https://github.com/siraphoprmutt/html5-qrcode)

---

## 📦 ฟีเจอร์หลัก

| ฟีเจอร์ | รายละเอียด |
|---------|-------------|
| 📷 สแกน QR Code จากกล้อง | รองรับกล้องหลัง, กล้องหน้า, พร้อมขอสิทธิ์ผ่านเบราว์เซอร์ |
| 🖼️ สแกนจากไฟล์ | รองรับการอัปโหลดไฟล์ภาพ QR |
| 🎯 สร้าง QR Code จากข้อความ | เรียก API `/api/gen-qrcode?text=...` เพื่อสร้าง QR |
| 📤 ส่งผล QR ที่สแกนได้ไปหลังบ้าน | POST ไปที่ `/api/scan-result` |
| 📑 ระบบสมัคร + แนบไฟล์ | POST ไป `/api/register` รองรับไฟล์ PDF / รูปภาพ |
| 📄 หน้าเว็บแบบ static | เสิร์ฟผ่าน `/public/index.html` และ fallback `404.html` |

---

## 🚀 Deploy ผ่าน Vercel ทันที

### ▶️ ปุ่ม Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/siraphoprmutt/html5-qrcode)

### 📁 สิ่งที่ Vercel จะใช้

- `api/index.js` → Express App ที่ให้บริการ API
- `public/` → หน้าเว็บ HTML
- `vercel.json` → ตั้งค่า route และ build

---

## 🧪 วิธีใช้งานบน Local

```bash
# 1. Clone โครงการ
git clone https://github.com/siraphoprmutt/html5-qrcode.git
cd html5-qrcode

# 2. ติดตั้ง dependencies
npm install

# 3. รันเซิร์ฟเวอร์แบบ local
node api/index.js

# เปิด browser ที่
http://localhost:3000
```

---

## 📂 โครงสร้างโปรเจกต์

```bash

html5-qrcode/
├── api/                 # Express Server
│   └── index.js
├── public/              # HTML & Static Files
│   ├── index.html
│   ├── 404.html
│   └── images/
├── vercel.json          # Vercel Routing Config
├── package.json
```

---

## 📚 เอกสารเพิ่มเติม

- QR Scanner: [https://scanapp.org/html5-qrcode-docs/](https://scanapp.org/html5-qrcode-docs/)
- Express + QR Code: ใช้ [qrcode](https://www.npmjs.com/package/qrcode) (Base64 Image)

---

## 🔧 เพิ่มเติมที่แนะนำ

| เรื่อง | คำแนะนำ |
|--------|----------|
| ✅ เพิ่ม `README.md` | เพื่อรวมเนื้อหานี้ลงในหน้า repo |
| ✅ เชื่อม Google Analytics หรือ Log | เพิ่มบน Frontend |
| ✅ รองรับ QR Code แบบ Secure | เพิ่ม JWT หรือ HMAC ได้ใน `scan-result` |

---

## ✨ ตัวอย่าง URL

| Endpoint | คำอธิบาย |
|----------|----------|
| `/` หรือ `/index.html` | หน้าเว็บหลัก |
| `/api/gen-qrcode?text=Hello` | สร้าง QR จากข้อความ |
| `/api/scan-result` (POST) | รับผลลัพธ์ QR |
| `/api/register` (POST) | สมัคร + แนบไฟล์ |
