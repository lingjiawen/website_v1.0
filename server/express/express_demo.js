var express = require('express');
var app = express();
var fs = require('fs');
var multer  = require('multer');
var sio=require('socket.io');


var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/runoob';
/*****************************************
*****************Base64编码解码************
*****************************************/
// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
} 
/***********************************************/


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });  // 作为参数传递给post方法


 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); //使用post方法需要加载
// app.use(multer({ dest: '/Users/charling/Desktop/pictures'}).array('image'));

 
// app.get('/changetobase64', function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   var picturename = req.query.picturename;
//   var url = "/Users/charling/Desktop/pictures/" + picturename ;
//   var pic = base64_encode(url);
//   pic = "data:image/png;base64," + pic;
//   res.send(pic);
// })

/********************************************
*               聊天室页面                   *
********************************************/
app.get('/', function(req,res) {
    res.sendfile(__dirname + '/chat.html');
});


/********************************************
*              文件上传页面                  *
********************************************/
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

/********************************************
*               实现文件上传                 *
********************************************/

// 重定义文件存储路径和文件名
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/charling/Desktop/pictures')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
app.use(upload.array('image'));

app.post('/file_upload', function (req, res) {
 
   console.log(req.files);  // 上传的文件信息
 
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          res.end( JSON.stringify( response ) );
       });
   });
})

/********************************************
*               插入图片数据                 *
********************************************/ 
app.post('/process_get', urlencodedParser, function (req, res) {
   // 输出 JSON 格式
    var response = {
        "text": req.body.text||"",
        "title": req.body.title||"",
        "picture": req.body.pictureName||""
    };


    var insertData = function(db, callback) {  
      //连接到表 site
      var collection = db.collection('site');
      //插入数据
      collection.insert(response, function(err, result) { 
          if(err)
          {
            console.log("连接数据库出错");
            console.log('Error:'+ err);
            return;
          }     
          callback(result);
      });
    }

    MongoClient.connect(DB_CONN_STR, function(err, db) {
      if(err)
      {
        console.log("连接数据库出错");
        console.log('Error'+err);
      }
      console.log("数据库连接成功！");
      insertData(db, function(result) {
          console.log(result);
          db.close();
      });
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(response));
});


/********************************************
*              获取图片数据                  *
********************************************/
app.post('/process_post', urlencodedParser, function(req, res) {
    var selectData = function(db, callback) {  
      //连接到表  
      var collection = db.collection('site');
      //查询数据
      var whereStr = {};
      collection.find(whereStr).toArray(function(err, result) {
          if(err)
          {
            console.log('Error:'+ err);
            return;
          }     
          callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function(err, db) {
      console.log("连接成功！");
      selectData(db, function(result) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(JSON.stringify(result));
        console.log(result)
        db.close();
      });
    });

});

/*********************************************
*               服务器监听                    *
*********************************************/

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

/********************************************
*                 聊天室                     *
********************************************/
var io =sio.listen(server);
var names= [];
var arrAllSocket = [];  
io.sockets.on('connection', function (socket) {
    // console.log(socket);
    socket.on('login', function (name) {
        for(var i=0;i<names.length;i++){
            if(names[i]==name){
                socket.emit('duplicate');
                return;
            }
        }
        names.push(name);
        io.sockets.emit('login',name);
        io.sockets.emit('sendClients',names);
        arrAllSocket[name] = socket;

    });  
    socket.on('chat',function (data) {
        io.sockets.emit('chat',data);
    }); 
    socket.on('logout',function (name) {
        for(var i=0;i<names.length;i++){
            if(names[i]==name){
                names.splice(i,1);
                break;
            }
        }
        socket.broadcast.emit('logout',name);
        io.sockets.emit('sendClients',names);
    });
    socket.on('private_message', function (from,to,msg)  
    {  
        var target = arrAllSocket[to];  
        if(target)  
        {  
            console.log('emitting private message by ', from, ' say to ',to, msg);  
            target.emit("pmsg",from,to,msg);  
        }  
    });       
});

