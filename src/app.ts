import http from 'node:http';

const products = [
  { id: 1, name: 'Camiseta', price: 29.99 },
  { id: 2, name: 'Calça', price: 99.99 },
  { id: 3, name: 'Sapato', price: 129.99 },
];

const app = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/products') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
  }
});

export { app };
