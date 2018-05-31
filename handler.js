'use strict';

var AWS = require('aws-sdk');
var qs = require('qs');

module.exports.publish = (event, context, callback) => {
  const result = qs.parse(event.body);
  const msg = result.Body;
  var sns = new AWS.SNS();

  sns.publish({
    Message: msg,
    TopicArn: process.env.SNS_ARN
  }, function(err, data) {
    if(err) {
      console.log(err);
    }
  });

  const response = {
    statusCode: 204    
  };

  callback(null, response);
};
