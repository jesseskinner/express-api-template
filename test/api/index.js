import { expect } from 'chai'
import api from '../../api'

describe('api', () => {

	it('api.listen should be a function', () => {
		expect(api.listen).to.be.a('function')
	})

})
