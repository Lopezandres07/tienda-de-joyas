import pg from 'pg'

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'joyas',
  password: 'Magdalena1',
  port: 5432,
})

export default pool
