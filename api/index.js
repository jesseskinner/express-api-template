import express from 'express'

import { echo, keys } from './example'

export default express()
	.get('/hello', (req, res) => res.send('Hello, World!'))
	.get('/echo', (req, res) => res.send(echo(req.query)))
	.get('/keys', (req, res) => res.send(keys(req.query)))
