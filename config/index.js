var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + 
            '@cluster0.fm3if.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    }

}