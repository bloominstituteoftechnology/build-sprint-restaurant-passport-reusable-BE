const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = require('../data/dbConfig');

module.exports = {
    getManyToMany,
    addManyToMany,
    removeManyToMany
}

function getManyToMany(userId) {
    return db('manyToMany')
        .join('restaurants', 'restaurants.id', 'manyToMany.restaurant_id')
        .select('manyToMany.user_id', 'restaurants.city', 'restaurants.id as restId', 'restaurants.name', 'manyToMany.id')
        .where('manyToMany.user_id', userId)
}


function addManyToMany(many) {
    return db('manyToMany')
        .insert(many, 'id')
}

function removeManyToMany(id) {


    return db('manyTomany')
        .where({ id })
        .del()
}