import React from 'react'


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            pictureName: '',
        };

        this.handleChangePic = this.handleChangePic.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePic(event) {
        this.setState({
            pictureName: event.target.value
        });
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

    handleSubmit(event) {
        $.ajax({
            type: "POST",
            url: "http://localhost:8081/process_get",
            data: {
                title: this.state.title,
                text: this.state.text,
                pictureName: this.state.pictureName
            },
            success: function (data) {
                var data = JSON.parse(data);
                console.log(data);
                alert("插入成功");
            }
        });
        event.preventDefault();
    }

    render() {
        return (
            <div style={{marginTop: "100px"}}>
                <h1 style={{textAlign: "center",color:"rgb(200, 150, 200)"}}>上传照片</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="group-inputs">
                        <div className="input-wrapper">
                            <input className="update_pic" type="text" placeholder="标题" value={this.state.title} onChange={this.handleChangeTitle}/>
                        </div>
                        <div className="input-wrapper">
                            <input className="update_pic" type="text" placeholder="描述" value={this.state.text} onChange={this.handleChangeText}/>
                        </div>
                        <div className="input-wrapper">
                            <input className="update_pic" type="text" placeholder="照片名" value={this.state.pictureName} onChange={this.handleChangePic}/>
                        </div>
                    </div>
                        <p><input className="update_btn" type="submit" value="Submit"/></p>
                </form>
            </div>
        );
    }
}


export default Test