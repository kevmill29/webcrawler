const {normalizeURL} = require('./crawl.js')
const{test, expect} = require('@jest/globals')

test('normalizeURL strip http', () =>{
    const input = 'https://KEVINEMILE.net/'
    const actual = normalizeURL(input)
    const expected = 'kevinemile.net'
    expect(actual).toEqual(expected)
})

