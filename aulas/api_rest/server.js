import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`Ctrl + Clique em http://localhost:${port}`);
});
