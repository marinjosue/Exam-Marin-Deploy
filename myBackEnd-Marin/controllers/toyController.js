const pool = require('../config/db');

const toyController = {

    getAllToys: async (req, res) => {
        try {
            const toys = await pool.query('SELECT * FROM toys');
            res.json(toys.rows);
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ message: 'Error fetching toys', error: error.message });
        }
    },

    getToysBySeller: async (req, res) => {
        try {
            const { id_seller } = req.params;
            
            // Consulta para obtener los juguetes del vendedor
            const query = `
                SELECT t.id_toy, t.name_toy, t.price_toy, t.description_toy, t.data_buys, s.name_seller
                FROM toys t
                JOIN sellers s ON t.id_seller = s.id_seller
                WHERE t.id_seller = ?
            `;
            const [toys] = await pool.query(query, [id_seller]);

            if (toys.length === 0) {
                return res.status(404).json({ message: "No toys found for this seller" });
            }

            
            const name_seller = toys[0].name_seller;

            
            const toysSoldQuery = `SELECT COUNT(*) AS toys_sold FROM toys WHERE id_seller = ?`;
            const [toysSoldResult] = await pool.query(toysSoldQuery, [id_seller]);
            const toys_sold = toysSoldResult[0].toys_sold;

            
            const cleanedToys = toys.map(({ name_seller, ...toy }) => toy);

            res.json({
                name_seller,
                toys_sold,
                toys: cleanedToys
            });

        } catch (error) {
            console.error('Error fetching toys by seller:', error);
            res.status(500).json({ message: 'Error fetching toys by seller', error: error.message });
        }
    }

};

module.exports = toyController;
