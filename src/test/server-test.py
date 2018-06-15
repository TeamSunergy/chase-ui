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
        if json_ex["motConVehicleVelocity"] == 100:
            json_ex["motConVehicleVelocity"] = 1
        json_ex['netPower'] = random.randint(-200, 200)
        json_ex['highestCellTemperature'] = random.randint(1, 75)
        json_ex['batteryPackInstantaneousVoltage'] = random.randint(1,75)
        json_ex['gpio5'] = 1
        json_ex['gpio12'] = 1
        json_ex['soc'] = random.randint(0, 100)
        json_ex['bpsHighVoltage'] = random.randint(100, 200)
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
