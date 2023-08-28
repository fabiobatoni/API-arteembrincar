require("dotenv/config");
const cors = require("cors");

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const express = require("express");

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  (async () => {
    const response = await notion.databases.query({
      database_id: process.env.DATA_BASE,
    });
    return res.status(200).json(response);
  })();
})


const PORT = 3338;

app.listen(PORT, () => console.log(`Server Listening on ${PORT}`));
