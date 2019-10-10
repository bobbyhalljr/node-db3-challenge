const db = require('../data/db-config');

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
    return db('schemes', 'steps')
    .select('scheme_name', 'step_number', 'instructions')
    .from('scheme')
    .join('steps', 'scheme.scheme_name', '=', 'steps.scheme_id')

}

function add(scheme){
    return db('schemes')
    .insert(scheme, 'id')
    .then(([id]) => {
        return findById(id)
    })
}

function update(scheme, id){
    return db('schemes')
    .where('id', Number(id))
    .update(scheme)
}

function remove(id){
    return db('schemes')
    .where('id', Number(id))
    .del();
}