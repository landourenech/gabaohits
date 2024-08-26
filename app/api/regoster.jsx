// pages/api/register.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Logique pour enregistrer les données dans la base de données
      // ou toute autre opération côté serveur
  
      res.status(200).json({ message: 'Inscription réussie' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  