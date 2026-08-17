let users = [
  {
    id: 1,
    nome: "Raffael Vieira Andrade",
    email: "raffael.andrade@example.com"
  }
];

let nextId = 2;

const generateId = () => {
  const currentId = nextId;
  nextId++; 
  return currentId;
};

module.exports = {
  users,
  generateId
};