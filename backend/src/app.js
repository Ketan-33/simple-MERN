const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running!');
});
const PORT = process.env.PORT || 3000; // Use environment port or 3000 as default

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
