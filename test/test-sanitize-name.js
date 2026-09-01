/* eslint-env mocha */

const { sanitizeName } = require('../util/sanitize-name')

describe('sanitizeName()', function() {
  it('should leave valid names unchanged', function() {
    sanitizeName('Kitchen Light').should.equal('Kitchen Light')
  })

  it('should remove disallowed characters, such as "#"', function() {
    sanitizeName('Shelly 2.5 4022D8966691 #1')
      .should.equal('Shelly 2.5 4022D8966691 1')
  })

  it('should collapse repeated whitespace', function() {
    sanitizeName('Shelly  2.5   4022D8966691').should.equal(
      'Shelly 2.5 4022D8966691'
    )
  })

  it('should trim leading and trailing punctuation', function() {
    sanitizeName('#Shelly 2.5#').should.equal('Shelly 2.5')
  })
})
