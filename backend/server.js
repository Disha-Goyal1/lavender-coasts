require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from your frontend domain
app.use(cors({
    origin: process.env.FRONTEND_URL || '*'
}));
app.use(express.json());

const users = [];
const orders = [];
const products = [
    { id: 1,  cat: 'acc',  name: "Daisy Keychain",    price: 149,  img: "https://image2url.com/r2/default/images/1775568225170-6bb843ca-408f-4035-886c-96494aa2ec18.png" },
    { id: 2,  cat: 'acc',  name: "Strawberry Charm",  price: 99,   img: "https://image2url.com/r2/default/images/1775568930873-ea3d8222-8c0b-4a99-840d-5b9e8896edce.png" },
    { id: 3,  cat: 'acc',  name: "AirPod Cosy",       price: 299,  img: "https://image2url.com/r2/default/images/1775569913295-f249aaa2-7a8f-4ace-9018-c9220fd75e03.png" },
    { id: 4,  cat: 'acc',  name: "Bow",               price: 199,  img: "https://image2url.com/r2/default/images/1775570277950-5eff7391-4758-46ff-8a32-b1d5ea88733b.png" },
    { id: 5,  cat: 'acc',  name: "Lip Balm Holder",   price: 79,   img: "https://image2url.com/r2/default/images/1775570162426-98c1cf7a-74d7-43a1-b00d-78d69d34cc4f.png" },
    { id: 6,  cat: 'home', name: "Lavender Pot",      price: 499,  img: "https://image2url.com/r2/default/images/1775571522076-c9c4c4d5-90e4-4e96-843e-85f84083d3fd.png" },
    { id: 7,  cat: 'home', name: "Sunflower Coaster", price: 349,  img: "https://image2url.com/r2/default/images/1775571320893-2caecf85-6caf-4e81-8c40-f5d86aca5113.png" },
    { id: 8,  cat: 'home', name: "Wall Hanging",      price: 899,  img: "https://image2url.com/r2/default/images/1775571652682-18da3722-3239-453b-bc80-c3b893a6c2df.png" },
    { id: 9,  cat: 'home', name: "Tulip Bouquet",     price: 699,  img: "https://image2url.com/r2/default/images/1775572062875-bce9d8f7-addd-46d1-af22-a44967f59a46.png" },
    { id: 10, cat: 'home', name: "Dining Set (4)",    price: 1200, img: "https://image2url.com/r2/default/images/1775572264355-435b4d64-335f-489a-87c2-76b4dec8399e.png" },
    { id: 11, cat: 'bags', name: "Classic Tote",      price: 899,  img: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/30dbe9dc-18a7-41d8-bcd7-fc6259c399c4.png" },
    { id: 12, cat: 'bags', name: "Pastel Sling",      price: 599,  img: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/59256367-ace5-49c2-be29-15c3948b5a04.png" },
    { id: 13, cat: 'bags', name: "Checkered Bag",     price: 1100, img: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/69aa2b66-46c5-457e-b2c4-f9ce895aa426.png" },
    { id: 14, cat: 'bags', name: "Winter Beanie",     price: 450,  img: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/fb6b8eee-4188-40ca-b70d-5360240ca6f0.png" },
    { id: 15, cat: 'bags', name: "Phone Pouch",       price: 350,  img: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/d19b072e-4714-4696-8de9-964c5ebdf1d9.png" }
];

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/products', (req, res) => res.json(products));
app.post('/api/users', (req, res) => {
    const user = { id: Date.now(), ...req.body };
    users.push(user);
    console.log('New user:', user.name);
    res.json(user);
});
app.post('/api/orders', (req, res) => {
    const order = { id: Date.now(), ...req.body };
    orders.push(order);
    console.log(`New order #${order.id} from ${order.user.name} | ₹${order.total}`);
    res.json(order);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));