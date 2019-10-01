// =====================================
// Puerto
// =====================================

process.env.PORT = process.env.PORT || 3000;


// =====================================
// Entorno
// =====================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =====================================
// Base de datos
// =====================================

let urlDB;

if (process.env.NODE_ENV === 1) {
    urlDB = 'mongodb://localhost:27018/personas';
} else {
    urlDB = 'mongodb+srv://ironman:ZpNAAJvwlHt1ei8W@cluster0-ils3r.mongodb.net/personas';
}


process.env.URLDB = urlDB;