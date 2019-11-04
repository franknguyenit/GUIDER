/*
* PLEASE RENAME THIS FILE TO config.local.js and change the settings for sftp (for deploy task) and the setting destination for copy task 
*/

var config = {
    "sftp": {
        "host": "192.168.159.97",
        "user": "ubuntu",
        "key": "/path/to/key/file/aws-ubuntu-ssh.ppk",
        "remotePath": "path/to/demo/server"
    },
    "root": {
        "theme": "/path/to/theme"
    }
};


module.exports = config;