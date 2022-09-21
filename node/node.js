/*
- node.js uses v8 engine as runtime to process javascript
- core modules
    - path modules => allows us to normalize paths to work across platforms.
    - http/https => data transfer
    - url => parsing and resolving urls
    - tls/ssl => security protocols
- node APIS === node modules
    ex: console module === console api
    - timers
    - console
    - process => gives you information about the current process taking place
              => add additional events before the process ends
              => give the process additional information
              => relates to the process of running a file with node.js
              => relates to the global node execution process which occurs when you run a file through node.js
              => shares information about the process
              => provide inputs
              ex: node index.js var1 var2 => prints it's arguments
              output: [node,index.js,var1,var2]

    - file system
    - fetch as 3rd-party module
- commonjs is the default module system for node
- there are two modules in javascript 
    - commonjs
        => When using require, a preceding slash must come before a locally created module name; otherwise, Node.js will search the core modules and then node_modules (discussed later).
    - es6
- working with files
    - __filename => get the file name of the current module
    - __dirname => get the directory name of the current module
- new timer in the timers module
    - setImmediate => allows you to run async code within the input-output blocks without circling back to the start of the event loop
- 

*/
