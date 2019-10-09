const db = require('../data/schemes.db3');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(){

}

function add(scheme){
    return db('schemes')
    .insert(scheme, 'id')
    .then(([id]) => {
        return findById(id)
    })
}

function update(changes, id){
    return db('schemes')
    .update(changes, id)
}

function remove(id){
    return db('schemes')
    .remove(id)
}