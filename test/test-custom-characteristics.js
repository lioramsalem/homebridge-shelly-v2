/* eslint-env mocha */

const Homebridge = require('./mocks/homebridge')

const homebridge = new Homebridge()

const {
  ConsumptionCharacteristic,
  ElectricCurrentCharacteristic,
  VoltageCharacteristic,
} = require('../util/custom-characteristics')(homebridge)

describe('ConsumptionCharacteristic', function() {
  describe('#constructor()', function() {
    it('should set a name and UUID', function() {
      const char = new ConsumptionCharacteristic()
      char.displayName.should.be.ok()
      char.UUID.should.be.ok()
    })

    it('should use paired-read and notify permissions', function() {
      const types = [
        ConsumptionCharacteristic,
        ElectricCurrentCharacteristic,
        VoltageCharacteristic,
      ]

      for (const Type of types) {
        const char = new Type()
        char.props.format.should.be.ok()
        char.props.perms.should.eql([
          homebridge.hap.Perms.PAIRED_READ,
          homebridge.hap.Perms.NOTIFY,
        ])
      }
    })
  })
})
