import express from 'express';
import { join } from "path";

const app = express()

const PORT = process.env.PORT ?? 1234

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "..","index.html"))

})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})