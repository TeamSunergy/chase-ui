let Client = require('ssh2-sftp-client');
let sftp = new Client();

let exec = require('child_process').exec;
let child;
let fs = require('fs');
let localFilePath = "";
let localRootDir = "";
let remoteRootDir = "./test/";
let fileList = [];
let localLogFiles = [];

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
});

exec("ls ./logs/", function (error, stdout, stderr) {
  //console.log('stdout: ' + stdout);
  //console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
  console.log("exec: ls ./logs/");
  localLogFiles = stdout.split('\n');
});

console.log("Connecting to host...");
sftp.connect({
  host: 'student.cs.appstate.edu',
  port: '',
  username: 'aliceami',
  password: 'lizardgrad2018'
}).then(() => {
  //console.log("Executing ls...");
  return sftp.list('./test/logs/');
}).then((list) => {

  //console.log("Generating array from file list...");
  // Generate array of file names from list of file objects
  for (let i = 0; i < list.length; i++) {
    fileList.push(list[i].name);
  }

  let data, filePath;
  console.log("Writing to local files...");
  for (let i = 0; i < fileList.length; i++) {
    filePath = './test/logs/' + fileList[i];
    if (!isLocalFile(fileList[i], localLogFiles)) {
      sftp.fastGet(filePath, (localFilePath + fileList[i]));
      //console.log("Remote file: ", data.path);
      localLogFiles.push(fileList[i]);
      console.log("Got file: ", fileList[i]);
    }
    else console.log("Ignored file. Local copy found: ", fileList[i]);

    //data.pipe(fs.createWriteStream(localFilePath + fileList[i]));
  }
}).catch((err) => {
  console.log(err, 'catch error');
});

function isLocalFile(fn, files) {
  for (let i = 0; i < files.length; i++) {
    if (files[i] === fn) return true;
  }
  return false;
}



