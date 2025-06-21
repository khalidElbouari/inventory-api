import fs from 'fs/promises';
const dataPath = './src/data/products.json';

export async function selectAllProducts() {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    return data; 
  } catch (err) {
    return '[]';
  }
}
