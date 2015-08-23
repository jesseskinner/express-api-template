import express from 'express'

import example from './example'

export default express()
	.get('/example/echo', (req, res) => res.send(example.echo(req.query)))
	.get('/example/keys', (req, res) => res.send(example.keys(req.query)))
