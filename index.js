const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Deploy!!!");
});

// console.log(process.env.PORT);
const PORT =  process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));