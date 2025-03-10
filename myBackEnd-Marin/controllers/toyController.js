const pool = require('../config/db');

const toyController = {

    getAllToys: async (req, res) => {
        try {
            const toys = await pool.query('SELECT * FROM toys');
            res.json(toys.rows);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },

    getToysBySeller: async (req, res) => {
        try {
            const { id_seller } = req.params;
            const query = `
                SELECT s.id_seller, s.name_seller, t.data_buys, t.id_toy, t.name_toy, t.price_toy, t.description_toy
                FROM sellers s
                JOIN toys t ON s.id_seller = t.id_seller
                WHERE s.id_seller = ?
            `;
            const [toys] = await pool.query(query, [id_seller]);

            const toysSoldQuery = `
                SELECT COUNT(*) AS toys_sold
                FROM toys
                WHERE id_seller = ?
            `;
            const [toysSoldResult] = await pool.query(toysSoldQuery, [id_seller]);
            const toys_sold = toysSoldResult[0].toys_sold;

            res.json({
                toys_sold,
                toys
            });
        } catch (error) {
            console.error('Error fetching toys by seller:', error);
            res.status(500).json({ message: 'Error fetching toys by seller', error: error.message });
        }
    }

};

module.exports = toyController;