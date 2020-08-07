const db = require('./database.service');

async function getDataChart() {
    return db('models')
    .select('cod', 'name')
}

module.exports = { getDataChart }