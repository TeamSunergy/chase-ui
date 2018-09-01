

#!/usr/bin/env python
import pika
import json
import random
import time


connection = pika.BlockingConnection(pika.ConnectionParameters(
        host='localhost', port=32768))
channel = connection.channel()

i = 0
channel.queue_declare(queue='data')
while True:
    i += 1
    channel.basic_publish(exchange='',
                          routing_key='data',
                          body=json.dumps({
        'bpsHighVoltage': 1,
        'bpsLowVoltage': random.randint(100,200),
        'packAmpHours': random.randint(1,100),
        'packTotalCycles': random.randint(1,100),
        'packHealth': random.randint(1,100),
        'highestCellTemperature': random.randint(1,100),
        'lowestCellTemperature': random.randint(1,100),
        'averageCellTemperature': random.randint(1,100),
        'internalBPSTemperature': random.randint(1,100),
        'batteryPackCurrent': random.randint(1,100),
        'batteryPackInstantaneousVoltage': random.randint(1,100),
        'batteryPackSummedVoltage': random.randint(1,100),
        'motConSerialNumber': random.randint(1,100),
        'motConTritiumID': random.randint(1,100),
        'motConReceiveErrorCount': random.randint(1,100),
        'motConTransmitErrorCount': random.randint(1,100),
        'motConActiveMotor': random.randint(1,100),
        'motConErrorMotorOverSpeed': False,
        'motConErrorDesaturation': False,
        'motConErrorUVLO': False,
        'motConErrorConfigReadError': False,
        'motConErrorWatchdog': False,
        'motConErrorBadMotorPosition': False,
        'motConErrorDCBusOverVoltage': False,
        'motConErrorSoftwareOverCurrent': False,
        'mpptTotalNetPower': random.randint(1,100),
        'motConLimitTemperature': False,
        'motConLimitBusVoltageLower': False,
        'motConLimitBusVoltageUpper': False,
        'motConLimitCurrent': False,
        'motConLimitVelocity': False,
        'motConLimitMotorCurrent': False,
        'motConLimitOutputVoltagePWM': False,
        'motConBusCurrent': random.randint(1,100),
        'motConBusVoltage': random.randint(1,100),
        'motConVehicleVelocity': random.randint(1,100),
        'motConMotorVelocity': random.randint(1,100),
        'motConPhaseCCurrent':random.randint(1,100),
        'motConPhaseBCurrent': random.randint(1,100),
        'motConVd': random.randint(1,100),
        'motConVq': random.randint(1,100),
        'motConId': random.randint(1,100),
        'motConIq': random.randint(1,100),
        'motConBEMFd': random.randint(1,100),
        'motConBEMFq': random.randint(1,100),
        'motConFifteenVSupply': random.randint(1,100),
        'motConThreePointThreeVSupply': random.randint(1,100),
        'motConOnePointNineVSupply': random.randint(1,100),
        'motConHeatSinkTemp': random.randint(1,100),
        'motConMotorTemp': random.randint(1,100),
        'motConDSPBoardTemp': random.randint(1,100),
        'motConDCBusAmpHours': random.randint(1,100),
        'motConOdometer': random.randint(1,100),
        'motConSlipSpeed': random.randint(1,100),
        'InvalidCanMessage': random.randint(1,100),
        'netPower':random.randint(1,100),
        'mppt0ArrayVoltage': 1,
        'mppt0ArrayCurrent': 1,
        'mppt0BatteryVoltage': 1,
        'mppt0UnitTemperature': random.randint(1,100),
        'mppt1ArrayVoltage': 1,
        'mppt1ArrayCurrent': 1,
        'mppt1BatteryVoltage': random.randint(1,100),
        'mppt1UnitTemperature': random.randint(1,100),
        'mppt2ArrayVoltage': 1,
        'mppt2ArrayCurrent': 1,
        'mppt2BatteryVoltage': random.randint(1,100),
        'mppt2UnitTemperature': random.randint(1,100),
        'mppt3ArrayVoltage': 1,
        'mppt3ArrayCurrent': 1,
        'mppt3BatteryVoltage':random.randint(1,100),
        'mppt3UnitTemperature': 0.0,
        'timeSent': 0.0,
        'coordinates': (0.0, 0.0),
        'coordinatesPrecision': (0.0, 0.0, 0.0),
        'gpio5': 0,
        'gpio6': 0,
        'gpio12': 0,
        'gpio13': 0,
        'gpio19': 0,
        'gpio26': random.randint(1,100),
        'GPIORestarted': None,
        'messageRestarted': None,
        'echo_serverRestarted': None,
        'toDashRestarted': None,
        'gpsStuffRestarted': None,
        'soc': random.randint(1,100)
    }))
    time.sleep(1)
    print('Message sent')
