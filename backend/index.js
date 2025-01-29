const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const rootRouter = require('./routes/index.js')

app.use('/api/v1', rootRouter);

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})