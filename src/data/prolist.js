import Mock from 'mockjs';
var Random = Mock.Random;

Random.extend({
    xingzuo: function(date) {
        var constellations = []
        return this.pick(constellations)
    }
})

var data = Mock.mock({
    "list|8-14": [{
        "pid|+1": 0,
        "time": "@date()",
        "img": "@image('200x100')",
        "text": "@cparagraph()",
        "address": "@county(true)",
        "sfz": "@id",
        "xz": "@xingzuo()",
        "name": "@cname()"
    }]
})
Mock.mock('http://www.jingdong.com/api', data)