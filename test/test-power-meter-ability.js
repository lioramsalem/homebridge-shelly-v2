/* eslint-env mocha */

const EventEmitter = require('events')
const Homebridge = require('./mocks/homebridge')

const homebridge = new Homebridge()
const PowerMeterAbility = require('../abilities/power-meter')(homebridge)
const {
  ConsumptionCharacteristic,
  ElectricCurrentCharacteristic,
  VoltageCharacteristic,
} = require('../util/custom-characteristics')(homebridge)

describe('PowerMeterAbility', function() {
  describe('#_setupEventHandlers()', function() {
    it('updates cached characteristics to paired-read permissions', function() {
      const types = [
        ConsumptionCharacteristic,
        ElectricCurrentCharacteristic,
        VoltageCharacteristic,
      ]
      const characteristics = types.map(Type => new Type())
      for (const characteristic of characteristics) {
        characteristic.setProps({ perms: [homebridge.hap.Perms.READ] })
      }

      const ability = new PowerMeterAbility('power', 'current', 'voltage')
      ability.device = new EventEmitter()
      ability.platformAccessory = {
        getService: () => ({ characteristics }),
      }

      ability._setupEventHandlers()

      for (const characteristic of characteristics) {
        characteristic.props.perms.should.eql([
          homebridge.hap.Perms.PAIRED_READ,
          homebridge.hap.Perms.NOTIFY,
        ])
      }
    })
  })
})
