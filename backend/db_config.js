const Pool = require('pg').Pool
const pool = new Pool({
    user: 'chef',
    database: 'datas',
    password: 'pw',
    port: 5432,
})

const getEntries = (request, response) => {
    pool.query('SELECT * FROM entries ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEntry = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })

}

const createEntry = (request, response) => {
    console.log(request.body)
    const { title, text, location } = request.body

    pool.query('INSERT INTO users (title, text, location) VALUES ($1, $2)', [title, text, location], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`New entry added with ID: ${results.insertId}`)
    })
}

const updateEntry = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE entries SET title = $1, text = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`An entry was modified with ID: ${id}`)
        }
    )
}

const deleteEntry = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM entries WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getEntries,
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry,
}