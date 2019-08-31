function getMusicData(url) {
    var request = require("request");
    var data = {
        'url': url,
        'return': 'timecode,apple_music,deezer,spotify',
        'api_token': 'test'
    };
    request({
        uri: 'https://api.audd.io/',
        form: data,
        method: 'POST'
    }, function(err, res, body) {
        console.log(body);
    });
}