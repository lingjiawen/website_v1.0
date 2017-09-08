import React from 'react'
import {Link} from 'react-router-dom'


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            pictureName: '',
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
    }

    componentDidMount() {
        $(".div_upload").on("change", "input[type='file']", function () {
            var filePath = $(this).val();
            console.log(filePath.toLowerCase());
            if (filePath.toLowerCase().indexOf("jpg") != -1 || filePath.toLowerCase().indexOf("png") != -1) {
                var arr = filePath.split('\\');
                var fileName = arr[arr.length - 1];
                $(".fileerrorTip").html(fileName);
            } else {
                $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
                return false
            }
        })
    }

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeText(event) {
        this.setState({
            text: event.target.value
        });
    }

    handlePhotoSubmit(event) {
        let psw = $("#div_upload_psw").val();
        if (psw != "19970708") {
            alert("密码有误，请重新输入！")
            return;
        }
        //设置上传按钮不能点击;
        $("#uploadForm").children('input').attr("disabled", true);
        self = this;
        let address = "http://" + window.location.host;
        address = address.split(":")[0] + ":" + address.split(":")[1] + ":8081/file_upload";
        var formData = new FormData(document.getElementById("uploadForm"));
        $(".pic_loading").css("display","block");
        $.ajax({
            url: address,
            type: "POST",
            data: formData,
            /*必须false才会自动加上正确的Content-Type*/
            contentType: false,
            /**
             * 必须false才会避开jQuery对 formdata 的默认处理
             * XMLHttpRequest会对 formdata 进行正确的处理
             */
            processData: false,
            success: function (data) {
                $(".pic_loading").css("display","none");
                self.setState({
                    pictureName: JSON.parse(data).filename
                });
                $("#discribePhotos").css("display", "block");
                $("#uploadForm").children('input').val("上传成功");
                $("#uploadForm").children('input').css("background-color", "grey");
                // $("#imgWait").hide();
            },
            error: function () {
                $(".pic_loading").css("display","none");
                $("#uploadForm").children('input').val("上传失败");
                // $("#imgWait").hide();
                $("#uploadForm").children('input').attr("disabled", false);
            }
        })
        event.preventDefault();
    }

    handleSubmit(event) {
        let address = "http://" + window.location.host;
        address = address.split(":")[0] + ":" + address.split(":")[1] + ":8081/process_get";
        $.ajax({
            type: "POST",
            url: address,
            data: {
                title: this.state.title,
                text: this.state.text,
                pictureName: this.state.pictureName,
            },
            success: function (data) {
                var data = JSON.parse(data);
                alert("插入成功");
                window.location.href = "http://" + window.location.host + "/photos";
            }
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div style={{position: "absolute", width: "100%"}}>
                    <Link to="/photos">
                        <div className="app_back_icon">Backく</div>
                    </Link>
                </div>
                <div style={{paddingTop: "84px"}}>
                    <h1 style={{textAlign: "center", color: "rgb(200, 150, 200)"}}>上传照片</h1>
                    <div className="pic_loading"> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
                    <form id="uploadForm" style={{marginTop: "100px"}}>
                        <div className="group-inputs" style={{border: "0px solid black", margin: "0 auto"}}>
                            <div className="div_upload">
                                <input type="file" name="image"/>
                                <div className="fileerrorTip">选择文件</div>
                            </div>
                            <input id="div_upload_psw" type="password" placeholder="请输入上传密码"/>
                        </div>
                        <input type="button" className="update_btn" value="上传文件" onClick={this.handlePhotoSubmit}/>
                    </form>
                    <form onSubmit={this.handleSubmit} id="discribePhotos">
                        <div className="group-inputs">
                            <div className="input-wrapper">
                                <input className="update_pic" type="text" placeholder="标题" value={this.state.title}
                                       onChange={this.handleChangeTitle}/>
                            </div>
                            <div className="input-wrapper">
                                <input className="update_pic" type="text" placeholder="描述" value={this.state.text}
                                       onChange={this.handleChangeText}/>
                            </div>
                            <div className="input-wrapper">
                                <input className="update_pic" type="text" placeholder="照片名"
                                       value={this.state.pictureName}/>
                            </div>
                        </div>
                        <p><input className="update_btn" type="submit" value="Submit"/></p>
                    </form>
                </div>
            </div>
        );
    }
}


export default Test