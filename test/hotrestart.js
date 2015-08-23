import { watch } from 'fs'

const reload = () => {
	console.log('hotrestarting')
	process.exit()
} 

watch('.', reload)
watch('config.js', reload)
watch('api', { recursive: true }, reload)
