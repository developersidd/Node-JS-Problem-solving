export function router(req, res) {
	// Write your Routing Logic Here
	// If URL path is `/hello` send "Hello, World!"
	// If URL Path is `/bye` send "Goodbye, World!"
	// If any other URL Path is encountered send "Not found"
	const pathname = req.url
	console.log(pathname)
	if (req.method === 'GET') {
		if (pathname === '/hello') {
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			})
			res.end('Hello, World!')
		} else if (pathname === '/bye') {
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			})
			res.end('Goodbye, World!')
		} else {
			res.writeHead(404, {
				'Content-Type': 'text/plain'
			})
			res.end('Not found')
		}
	}else {
        
    }
}
