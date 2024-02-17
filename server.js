const express = require('express');
const app = express();
const path = require('path');

// Устанавливаем путь к папке с файлами статики
app.use(express.static(path.join(__dirname, 'public')));

// Обрабатываем GET запросы к корневому URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = process.env.PORT || 2024;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));