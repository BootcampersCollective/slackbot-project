// Description:
//    Example scripts for you to examine and try out.
// commands:

module.exports = function(robot) {
    robot.hear(/hostInfo/i, function(res) {
        res.send("To contact the hosts, direct message Scott Bowman or Charlie Beck.");
    });
    robot.hear(/hackathonInfo/i, function(res) {
        res.send("For more information on the hackathon, direct message Scott Bowman");
    });
    robot.hear(/organizerInfo/i, function(res) {
        res.send("To contact the organizers, direct message Scott Bowman or Charlie Beck.");
    });
    robot.hear(/furtherInfo/i, function(res) {
        res.send("To contact the hosts, direct message Scott Bowman or Charlie Beck.");
    });
    robot.hear(/volunteerInfo/i, function(res) {
        res.send("To volunteer, direct message Scott Bowman.");
    });
};