import express from 'express';
import 'express-async-errors';

const router = express.Router();

// Get /documents
router.get('/', (req, res) => {
  res.json({ message: 'Get root documents' });
});

// Get /documents/:id
router.get('/:id', (req, res) => {
  const documentId = req.params.id;
  res.json({ message: `Get document by id, id is ${documentId}` });
});

// Post /documents
router.post('/', (req, res) => {
  const { title, parent } = req.body;
  res.json({
    message: `Create document, title is ${title} and parent is ${parent}`,
  });
});

// Put /documents/:id
router.put('/:id', (req, res) => {
  const documentId = req.params.id;
  const { title, content } = req.body;
  res.json({
    message: `Update document by id, id is ${documentId}, title is ${title} and content is ${content}`,
  });
});

// Delete /documents/:id
router.delete('/:id', (req, res) => {
  const documentId = req.params.id;
  res.json({ message: `Delete document by id, id is ${documentId}` });
});

export default router;
