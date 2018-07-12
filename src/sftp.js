/**
 * Name:
 * sftp.js
 *
 * Desc: Connects to a host using SFTP to get log files and store them locally. Runs on a timer loop.
 * Usage: node sftp.js
 */

// Import modules
let Client = require('ssh2-sftp-client');
let sftp = new Client();
let exec = require('child_process').exec;
const csvjson = require('csvjson');
const fs = require('fs');


// Initialize globals
let localFilePath = "";
let localRootDir = "";
let fileList = [];
let localLogFiles = [];
let localLogFilesJson = [];

// TODO: SET THIS BASED ON HOST FS
let remoteRootDir = "./test/logs/";

// Get local path for logs
exec("pwd", function (error, stdout, stderr) {
  //console.log('stdout: ' + stdout);
  //console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
  console.log("exec: pwd");
  localRootDir = "" + stdout.slice(0, -1); // remove newline from pwd
  localFilePath = localRootDir + "/logs/";
  //console.log("localRootDir: ", localRootDir);
  //console.log("localFilePath: ", localFilePath);
});

console.log("Connecting to host...");
let connection = sftp.connect({
  host: 'student.cs.appstate.edu',
  port: '',
  username: 'aliceami',
  password: 'lizardgrad2018'
});

let timerPeriod = 2000; // 3 seconds
let command = "ls " + "./logs/";
setInterval(function() {
  exec(command, function (error, stdout, stderr) {
    //console.log('stdout: ' + stdout);
    //console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    console.log("================================\nexec: ls ./logs/");
    localLogFiles = stdout.split('\n');
  });
  connection.then(() => {
    //console.log("Executing ls...");
    return sftp.list(remoteRootDir);
  }).then((list) => {

    //console.log("Generating array from file list...");
    // Generate array of file names from list of file objects
    for (let i = 0; i < list.length; i++) {
      fileList.push(list[i].name);
    }
    let fl = fileList;
    let filePath;
    // console.log("Writing to local files...");
    for (let i = 0; i < fileList.length; i++) {
      filePath = './test/logs/' + fileList[i];
      if (!isLocalFile(fileList[i], localLogFiles)) {
        // Ignore swap files (writing in progress)
        if (fileList[i].slice(-4) === '.swp') continue;
        var currCsv = fileList[i].slice(0, -4);
        sftp.fastGet(filePath, (localFilePath + fileList[i]), function(err) {
          if (err) {
            console.log("wow");
          } else convertCsvToJson(currCsv);
        });
        //console.log("Remote file: ", data.path);
        localLogFiles.push(fileList[i]);
        console.log("Got file: ", fileList[i]);
        console.log("THIS: ", (localFilePath + fileList[i]));
        console.log("test: ", fileList[i].slice(-4));

        //convertCsvToJson(localFilePath + fileList[i]);

      }
      else {
        console.log("Ignored file. Local copy found: ", fileList[i]);

      }
    }
    fileList = []; // Reset list of remote log files
    return fl;
  }).then((fileList) => {
    /**
    for (let i = 0; i < fileList.length; i++) {
      if (!isLocalFile((fileList[i].slice(0, -4) + ".json"), localLogFilesJson)) {
        if (fileList[i].slice(-4) === '.csv') {
          console.log("Converting to json...");
          convertCsvToJson(fileList[i].slice(0, -4));
          localLogFilesJson.push(fileList[i].slice(0, -4) + ".json");
        }
      }
    } **/
  }).catch((err) => {
    console.log(err, 'catch error');
  });

}, timerPeriod);

function isLocalFile(fn, files) {
  for (let i = 0; i < files.length; i++) {
    if (files[i] === fn) return true;
  }
  return false;
}

function convertCsvToJson(fn) {
  let read = fs.createReadStream('logs/' + fn + '.csv');
  let write = fs.createWriteStream('logs/' + fn + '.json');
  let toObject = csvjson.stream.toObject();
  let stringify = csvjson.stream.stringify();
  read.pipe(toObject).pipe(stringify).pipe(write);
}



