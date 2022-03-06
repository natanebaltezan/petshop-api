const tableModel = require('../models/providers');

tableModel
    .sync()
    .then(() => console.log('Tabela criada...'))
    .catch();