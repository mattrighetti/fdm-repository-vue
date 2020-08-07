const db = require('./database.service');

async function getFiltersWithoutSlash() {
    return db("models")
    .distinct('eis')
    .map(obj => obj.eis)
    .filter(obj => { return !obj.includes('/') })
}

async function getCountriesOfDevelopment() {
    return db("models")
    .distinct('cod')
    .map(obj => obj.cod)
}

module.exports = { 
    getFiltersWithoutSlash,
    getCountriesOfDevelopment
}