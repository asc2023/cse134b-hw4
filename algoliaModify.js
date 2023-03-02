const algoliasearch = require('algoliasearch');
const client = algoliasearch('YourApplicationID', 'YourWriteAPIKey');
const index = client.initIndex('your_index_name');

const data=require("./data.json");
index.saveObject(data);