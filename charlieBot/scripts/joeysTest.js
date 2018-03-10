/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = function(robot) {
  robot.hear(/meetups/i, function(res) {
    robot.http("https://api.meetup.com/Bootcampers-Collective/events?&sign=true&photo-host=public&page=20")
      .header('Accept', 'application/json')
      .get()(function(err, response, body) {
            // error checking code here
            if (err){
              res.send('done fucked up')
              robot.logger.info(err)
            }
            else if(response.statusCode === 200){
              const data = JSON.parse(body);
              for(var i=0; i < 5; i++){
                res.send(data[i].name + ' : ' + data[i].link);
              }
              robot.logger.info(body);
            } else {
              res.send('done fucked up')
              robot.logger.info(response.statusCode + body)
            }
        })
    });
  };
