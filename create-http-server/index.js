import http from 'http'
import { router } from './routes.js'
// Create a HTTP Server using the Router Function from 'routes.js'
const server = http.createServer(router)
const PORT = 5000
server.listen(5000, () => {
	console.log(`Server is listening on port: ${PORT}`)
})
