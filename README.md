## Install WDIO
1. Open terminal input cmd : npm init wdio@latest .    
2. Add script to package.json file
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "wdio": "wdio run wdio.conf.js"
    }
Note: The problem can occurs when using Node version 16 to 18. It is recommended to use Node version 20.
## Run WebdriverIO test
- Using cmd: npm run wdio
