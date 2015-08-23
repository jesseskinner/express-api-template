import express from 'express'
import api from './api/index'
import { port, hotrestart } from './config'
import { watch } from 'fs'

export default express()
	.use('/api', api)
	.listen(port, () => {
		console.log('listening on port ' + port)
	})

if (hotrestart) {
	const reload = () => {
		console.log('hotrestarting')
		process.exit()
	} 
 
	watch('.', reload)
	watch('config.js', reload)
	watch('api', { recursive: true }, reload)
}
