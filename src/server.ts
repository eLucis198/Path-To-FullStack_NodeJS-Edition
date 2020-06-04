import app from './app'

app.listen(process.env.PORT || 3000)
console.log('>>> Running as "' + process.env.NODE_ENV + '"' + ' in port "' + (process.env.PORT ? process.env.PORT : 3000) + '"')
