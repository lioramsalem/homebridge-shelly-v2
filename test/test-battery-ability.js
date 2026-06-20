/* eslint-env mocha */

const Homebridge = require('./mocks/homebridge')

const homebridge = new Homebridge()
const BatteryAbility = require('../abilities/battery')(homebridge)

describe('BatteryAbility', function() {
  describe('#service', function() {
    it('should use the HAP Battery service', function() {
      const ability = new BatteryAbility('battery')
      ability.platformAccessory = {
        getService: Service => Service,
      }

      ability.service.should.equal(homebridge.hap.Service.Battery)
    })
  })

  describe('#_createService()', function() {
    it('should create a HAP Battery service', function() {
      const ability = new BatteryAbility('battery')
      ability.device = { battery: 50 }

      ability
        ._createService()
        .should.be.instanceof(homebridge.hap.Service.Battery)
    })
  })
})
