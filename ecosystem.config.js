module.exports = {
  apps : [{
    name        : "serverweb",
    script      : "./serverweb.js",
    watch       : '.',
	error_file  : 'out.log',
  out_file      : 'out.log',
  log_file      : 'combine.log',
  time          :true,
  
    env: {
		"PORT": 3000,
      "NODE_ENV": "development",
    },
    env_production : {
		"PORT":4000,
       "NODE_ENV": "production"
    }
  },{
    name       : "dupweb",
    script     : "./dupserverweb.js",
	watch 	   : '.',
    error_file  : 'out.log',
  out_file      : 'out.log',
  log_file      : 'combine.log',
  time          :true,
  }]
}