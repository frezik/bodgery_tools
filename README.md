Tools access server for the Bodgery, written in Node.js.

Ensure you have all the prerequisites installed:

    $ npm install

And then start the server:

    $ node index.js

The server implements the following API calls:

* /v1/tools - returns a list of the available tools
* /v1/is-allowed/:rfid/:tool - Sees if the given RFID is allowed to access 
  the named tool. Response codes are:
** 200 - RFID is allowed for this tool
** 404 - RFID or tool was not found
** 403 - RFID is not allowed for this tool
