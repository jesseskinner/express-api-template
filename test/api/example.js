import { expect } from 'chai'
import * as example from '../../api/example'

describe('example.echo', () => {
	it('should return the first argument', () => {
		const data = { a: 1 }
		expect(example.echo(data)).to.equal(data)
	})
})

describe('example.keys', () => {
	it('should return the sorted keys of the first argument', () => {
		const data = { a: 1, c: 3, b: 2 }
		expect(example.keys(data)).to.deep.equal(['a','b','c'])
	})
})
