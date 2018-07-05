from socket import *
from ex_json import json_ex
from datetime import datetime
import json
import asyncio
import random


async def echo_server(address, loop, sleep_seconds):
    sock = socket(AF_INET, SOCK_STREAM)
    sock.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
    sock.bind(address)
    sock.listen(1)
    print("Server started. Host: %s Port: %s " % (address[0],address[1]))
    # client is a new socket object usable to send and receive data on the connection,
    # address is the address bound to the socket on the other end of the connection
    sock.setblocking(False)
    while True:
        client, address = await loop.sock_accept(sock)
        print('Connection from: ', address)
        loop.create_task(echo_handler(client,loop,sleep_seconds))


async def echo_handler(client, loop, sleep_seconds):
    while True:
        json_ex["motConVehicleVelocity"] += 1
        if json_ex["motConVehicleVelocity"] == 75:
            json_ex["motConVehicleVelocity"] = 1
        json_ex['netPower'] = random.uniform(-200, 200)
        json_ex['averageCellTemperature'] = random.uniform(26, 45)
        json_ex['highestCellTemperature'] = random.uniform(45, 75)
        json_ex['lowestCellTemperature'] = random.uniform(1, 25)
        json_ex['batteryPackInstantaneousVoltage'] = random.uniform(84,123)
        json_ex['batteryPackCurrent'] = random.uniform(-50,105)
        json_ex['batteryPackSummedVoltage'] = random.uniform(1,75)
        json_ex['gpio5'] = 1
        json_ex['gpio12'] = 1
        json_ex['soc'] = random.randint(0, 100)
        json_ex['packHealth'] = random.randint(0, 100)
        json_ex['bpsHighVoltage'] = random.uniform(4.2, 4.3)
        json_ex['bpsLowVoltage'] = random.uniform(4.1, 4.2)
        json_ex['mpptTotalNetPower'] = random.randint(100, 200)
        json_ex['mppt0ArrayVoltage'] = random.randint(0, 96)
        json_ex['mppt1ArrayVoltage'] = random.randint(0, 96)
        json_ex['mppt2ArrayVoltage'] = random.randint(0, 96)
        json_ex['mppt0ArrayCurrent'] = random.randint(900, 1000)
        json_ex['mppt1ArrayCurrent'] = random.randint(900, 1000)
        json_ex['mppt2ArrayCurrent'] = random.randint(900, 1000)
        json_ex['mppt0ArrayNetPower'] = random.randint(100, 200)
        json_ex['mppt1ArrayNetPower'] = random.randint(100, 200)
        json_ex['mppt2ArrayNetPower'] = random.randint(100, 200)
        json_ex['mpptTotalNetPower'] = random.randint(100, 200)
        json_ex['mppt1UnitTemperature'] = random.randint(100, 200)
        json_ex['mppt2UnitTemperature'] = random.randint(100, 200)
        json_ex['mppt3UnitTemperature'] = random.randint(100, 200)
        json_ex['internalBPSTemperature'] = random.randint(100, 200)
        json_ex['motConOdometer'] = random.randint(100, 200)

        await asyncio.sleep(sleep_seconds)
        await loop.sock_sendall(client,json.dumps(json_ex).encode())
        print("Send user JSON @", datetime.now())

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(echo_server(('127.0.0.1',25000), loop, .3))
