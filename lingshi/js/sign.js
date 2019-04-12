class Login{
    constructor(){
        this.url = "http://www.icodeilife.cn/ctrl/login.php";
        
        this.init()
    }
    init(){
        var that = this;
        $("#btn").click(function(){
            that.load()
        })
    }
    load(){
        var that = this;
        $.ajax({
            url:this.url,
            data:{
                user:$("#user").val(),
                pass:$("#pass").val()
            },
            success:function(res){
                switch(res){
                    case "0":
                        $("span").html("用户名密码不符");break;
                    case "1":
                        $("span").html("重新登录");break;
                    default:
                        $("span").html("登录成功");
                        setTimeout(()=>{
                            location.href = "http://localhost/lingshi/index.html";
                        },1000)

                }
            }
        })
    }
}

new Login;