import { expect } from 'chai'
import * as example from '../../api/example'

describe('example.echo', () => {
	it('should return the first argument', () => {
		const data = {}
		expect(example.echo(data)).to.equal(data)
	})
})

describe('example.keys', () => {
	it('should return the sorted keys of the first argument', () => {
		const data = { b: 1, a: 2 }
		expect(example.keys(data)).to.deep.equal(['a','b'])
	})
})
