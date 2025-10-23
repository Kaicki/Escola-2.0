import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get("/", (req, res) => res.send("API Neon rodando"));

// Notícias
app.post("/noticias", async (req, res) => {
  const { titulo, conteudo } = req.body;
  await pool.query("INSERT INTO noticias (titulo, conteudo) VALUES ($1,$2)", [titulo, conteudo]);
  res.json({ sucesso: true });
});

app.get("/noticias", async (req, res) => {
  const result = await pool.query("SELECT * FROM noticias ORDER BY data DESC");
  res.json(result.rows);
});

// Projetos
app.post("/projetos", async (req, res) => {
  const { titulo, descricao } = req.body;
  await pool.query("INSERT INTO projetos (titulo, descricao) VALUES ($1,$2)", [titulo, descricao]);
  res.json({ sucesso: true });
});

app.get("/projetos", async (req, res) => {
  const result = await pool.query("SELECT * FROM projetos ORDER BY data DESC");
  res.json(result.rows);
});

export default app;
