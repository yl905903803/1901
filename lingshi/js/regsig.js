    
var uonOff = ponOff = p2onOff  = false;

$("#reg-user").on("blur",function(){
    var reg = /^[\u2E80-\u9FFF\w\-]{4,20}$/;
    if(reg.test($(this).value)){
        $(this).next().html("√")
        uonOff = true;
    }else{
        $(this).next().html("请输入4位以上")
        uonOff = false
    }
} )

$("#reg-pass").on("blur",function(){
    var a=b=c=0;
    var numReg = /\d+/;
    if(numReg.test($(this).value)) a = 1;
    var azReg = /[a-zA-Z]+/;
    if(azReg.test($(this).value)) b = 1;
    var tsReg = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\`\-\=\{\}\[\]\\|\;\'\:\"\,\.\/\<\>\?]+/;
    if(tsReg.test($(this).value)) c = 1;
    ponOff = true;
    switch(a+b+c){
        case 1:$(this).next().html("易");break;
        case 2:$(this).next().html("中");break;
        case 3:$(this).next().html("难");break;
        default:
        $(this).next().html("请输入正确的密码")
            ponOff = false;
    }
    
    if($("#reg-pass2").value === $(this).value){
        $("#reg-pass2").next().html("√")
        p2onOff = true
    }else{
        $("#reg-pass").next().html("密码输入不一致")
        p2onOff = false
    }
})

$("#reg-pass2").on("blur", function(){
    if($("#reg-pass").value === $(this).value){
        $(this).next().html("√")
        p2onOff = true
    }else{
        $(this).next().html("密码输入不一致")
        p2onOff = false
    }
})





		class Register{
			constructor(){
				this.url = "http://www.icodeilife.cn/ctrl/register.php";
				
				this.init();
			}
			init(){
				var that = this;
				$("#btn1").click(function(){
                    if(uonOff && ponOff && p2onOff){
                    that.load()
                    }
				})
			}
			load(){
				$.ajax({
					url:this.url,
					success:function(res){
						switch(res){
							case "0":
								$("#reg-user").next().html("用户名重复");break;
                            case "1":
                                alert("注册成功")
								setTimeout(()=>{
									location.href = "http://localhost/lingshi/signin.html";
								},1000)
								break;
							case "2":
								$("span").html("数据不全");break;
						}
					},
					data:{
						tel:$("#reg-user").val(),
						pass:$("#reg-pass").val()
					}
				})
			}
		}
		
		new Register;