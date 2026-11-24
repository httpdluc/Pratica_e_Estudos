const express = require('express');
const router = express.Router();

const dbKnex = require('./data/db_config');

router.get('/', async (req, res) => {
  try {
    const livros = await dbKnex('livros').orderBy('id', 'desc');
    res.json(livros);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/filtro/:palavra', async (req, res) => {
  const { palavra } = req.params;

  try {
    const livros = await dbKnex('livros')
      .where('titulo', 'like', `%${palavra}%`)
      .orWhere('autor', 'like', `%${palavra}%`);

    res.json(livros);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/dados/grafico', async (req, res) => {
  try {
    const dados = await dbKnex('livros')
      .select('ano')
      .sum({ total: 'preco' })
      .groupBy('ano');

    res.json(dados);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post('/', async (req, res) => {
  const { titulo, autor, ano, preco, foto } = req.body;

  if (!titulo || !autor || !ano || !preco || !foto) {
    return res.status(400).json({ msg: 'Campos obrigatórios' });
  }

  try {
    const [id] = await dbKnex('livros').insert({ titulo, autor, ano, preco, foto });
    res.status(201).json({ id });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { preco } = req.body;

  if (!preco) {
    return res.status(400).json({ msg: 'Informe o preço' });
  }

  try {
    const updated = await dbKnex('livros').where({ id }).update({ preco });

    if (!updated) {
      return res.status(404).json({ msg: 'Livro não encontrado' });
    }

    res.json({ msg: 'Atualizado' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await dbKnex('livros').where({ id }).del();

    if (!deleted) {
      return res.status(404).json({ msg: 'Livro não encontrado' });
    }

    res.json({ msg: 'Removido' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;