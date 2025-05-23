// Database configuration for Replit
const { Database } = require('@replit/database');
const db = new Database();

// Initialize the images_main table if it doesn't exist
async function initializeDatabase() {
    try {
        // Check if the table exists
        const tableExists = await db.get('images_main');
        
        if (!tableExists) {
            // Create the table with initial structure
            await db.set('images_main', {
                schema: {
                    id: 'auto_increment',
                    img_url_1: 'text'
                },
                data: []
            });
            console.log('Database initialized successfully');
        }
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

// Export the database instance and initialization function
module.exports = {
    db,
    initializeDatabase
}; 