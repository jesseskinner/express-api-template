import { expect } from 'chai'
import api from '../../api/index'

// make sure api/index doesn't contain any syntax errors
describe('api', () => {

	it('should be defined', () => {
		expect(api).to.not.be.undefined
	})

})
