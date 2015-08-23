import express from 'express'
import api from './api/index'
import { port } from './config'

export default express()
	.use('/api', api)
	.listen(port, () => {
		console.log('listening on port ' + port)
	})
