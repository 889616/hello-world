import Mock from 'mockjs';
var data = Mock.mock({
    "list|10-15": [{
        "pid|+1": 0,
        "time": "@data()",
        "img": '@Image("200x100")',
        "text": "@cparagraph()",
        "name": "@cname()",
        "email": "@email()",
        "address": "@county(true)",
        "sfz": "@id()",
        "title": "@ctitle()",
        "price": "@natural(1000, 9999)"
    }]
})
Mock.mock('http://www.baidu.com/api', data)