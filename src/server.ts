import app from './app'

app.listen(process.env.PORT || 3000)
console.log('running on port: ' + process.env.PORT ? process.env.PORT : 3000)
