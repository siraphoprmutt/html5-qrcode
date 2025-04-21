import express from 'express';
import cors from 'cors';
import QRCode from 'qrcode';
import multer from 'multer';
import path from 'path';

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// ✅ QR Generator
app.get('/api/gen-qrcode', async (req, res) => {
    const { text } = req.query;
    if (!text) return res.status(400).json({ error: 'Missing text' });
    try {
        const qr = await QRCode.toDataURL(text);
        res.json({ qr });
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate QR', details: err.message });
    }
});

// ✅ QR Scan Receiver
app.post('/api/scan-result', async (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Missing scanned text' });
    console.log("📥 Scanned:", text);
    res.json({ message: 'Scanned text received', text });
});

// ✅ File Upload Registration
app.post('/api/register', upload.single('attachment'), (req, res) => {
    const { name, email, phone } = req.body;
    const file = req.file;
    const allowed = ['application/pdf', 'image/jpeg', 'image/png'];
    if (file && !allowed.includes(file.mimetype)) {
        return res.status(400).json({ message: 'Only PDF or image files are allowed' });
    }

    res.json({
        message: 'Register success',
        data: {
            ...req.body,
            file: file?.originalname || null
        }
    });
});

// ❌ Catch API not found
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'API route not found' });
});

// 🌐 404.html for frontend
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

// ✅ สำหรับ local dev: listen port
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`🚀 Local server running at http://localhost:${port}`));
}

// ✅ สำหรับ Vercel
export default app;
