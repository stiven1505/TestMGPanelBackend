import app from './app.js'
import './database.js'
app.listen(process.env.PORT || 7124)
console.log('server listening', process.env.PORT || 7124);
