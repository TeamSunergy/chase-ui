from socket import *
from data import data
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
        generateValues()
        await asyncio.sleep(sleep_seconds)
        await loop.sock_sendall(client,json.dumps(data).encode())
        print("Send user JSON @", datetime.now())

def generateValues():
    data["motConVehicleVelocity"] += 1
    data['netPower'] = random.randint(-200, 200)
    data['highestCellTemperature'] = random.randint(1, 75)
    data['batteryPackInstantaneousVoltage'] = random.randint(1,75)
    data['gpio5'] = 1
    data['gpio12'] = 1
    data['soc'] = random.randint(0, 100)
    data['bpsHighVoltage'] = random.randint(100, 200)
    data['mpptTotalNetPower'] = random.randint(100, 200)
    data['mppt1UnitTemperature'] = random.randint(100, 200)
    data['mppt2UnitTemperature'] = random.randint(100, 200)
    data['mppt3UnitTemperature'] = random.randint(100, 200)
    data['internalBPSTemperature'] = random.randint(100, 200)
    data['motConOdometer'] = random.randint(100, 200)
    if data["motConVehicleVelocity"] == 100:
        data["motConVehicleVelocity"] = 1

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(echo_server(('127.0.0.1',25000), loop, .3))
