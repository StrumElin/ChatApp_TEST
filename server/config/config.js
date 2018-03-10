/**
 * Created by zhoupengkai on 2018/3/10.
 */

var configJSON = require("./config.json");

var env = process.env.NODE_ENV || "development";

if(env === "development" || env === "test"){

    var config = configJSON[env];

    Object.keys(config).forEach((keys)=>{

        process.env[keys] = config[keys];
    })
}

