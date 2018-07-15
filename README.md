# APPTEL: ChaseUI

**Developers**:

- Steve Soares – @stevesoaress
- Matthew Alicea – @matthew-ia

## Introduction

**ChaseUI** is a web application that displays telemetry data in a dashboard format. ChaseUI works by creating a TCP connection over a wireless access points to a running instance of the `canpi` application. The data recevied is sent to a client-side application via a socket that allows real-time, event based communication. 

This application works primarily offline, so as to not require internet access to receive data.

## Install & Run Instructions

To install, clone the repo, step into the root directory, and install the dependencies using `npm`:

```
git clone <chaseui-repo>
cd chaseui
npm install
```

Run the app using the `npm` start script:

```
npm start
```

A new tab should open up in your default browser with the web app. The page should be static with values zeroed. 

### Testing

To test the application with simulated values you need to start two server files. 

1. Open a new terminal window or tab and change directories into `src/test/`. You should see a file named `server-test.py` and a `.json`. The `.json` holds a copy of an initialized dictionary based on the values `canpi` will send. `server-test.py` establishes a server to connect the app to, which updates and sends values. Note that this is a Python file to emulate it coming from `canpi` which is written in Python. 
2. Once you're in `src/test/` run the server and you should see the following output:

```
user$ python3 server-test.py
Server started. Host: 127.0.0.1 Port: 25000
```

3. In a new terminal tab change directories into `src/`. Here you will see a file called `server.js` which is the file that connects this application to the python test server. 

4. Once you're in `src/` run the server using `node` and you should see the following output:

   ```
   user$ node server.js
   Listening on port:  4001
   [2018-06-24T22:36:21.387] [INFO] chase-server - Connection made with host: 127.0.0.1 on port: 25000
   [2018-06-24T22:36:24.454] [INFO] chase-server - Event: SocketIO Connection Established w/ browser
   ```

5. Note that the second output message will take a few seconds to appear, and as soon as it does the `server-test.py` output will look something like:

   ```
   Connection from:  ('127.0.0.1', 60030)
   Send user JSON @ 2018-06-24 22:36:21.683016
   Send user JSON @ 2018-06-24 22:36:21.983465
   Send user JSON @ 2018-06-24 22:36:22.284105
   ...
   ```

6. Now if you go back to the browser tab with the application running you'll see that the values are changing (as of 2018.06.24, only the Overview page should work). The graph data updates every second while the other data in the two widgets on the left should be updating more rapidly. 


RabbitMQ
```
docker login 
-Insert Credentials
docker run -d --hostname my-rabbit --name some-rabbit -p 8080:15672 -p 5672 rabbitmq:3
docker ps -a 
-Find container id
docker exec <contiainer_id> rabbitmq-plugins enable rabbitmq_management
```
Browse to localhost:8080 or <host_ip:8080> for management console

