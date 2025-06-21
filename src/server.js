import express from 'express';
import { getAllProducts } from './services/product.service.js';
import cors from 'cors';

export default class Server {
  constructor(port = 3000) {
    this.app = express();
    this.port = port;
    this.config();
    this.routes();
  }

  config() {
    this.app.use(express.static('public'));
    this.app.use(express.json()); // conversion automatique du body en JSON
    this.app.use(cors()); // autorise les requêtes cross-origin (CORS)
  }

  routes() {
    // Endpoint GET pour récupérer tous les produits
    this.app.get('/api/products', async (req, res) => {
      try {
        const products = await getAllProducts();
        res.json(products);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  }

  start(callback) {
    if (callback === undefined) {
      callback = () =>
        console.log(`Serveur démarré sur http://localhost:${this.port}`);
    }
    this.app.listen(this.port, callback);
  }
}
