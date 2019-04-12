	
	class Car{
        constructor(options){
            this.tbody = options.tbody;
            this.url = options.url;
            

            this.load();
            

            this.addEvent();
        }
        load(){
            var that = this;
            ajax({
                url:this.url,
                success:function(res){
                    that.res = JSON.parse(res);

                    that.getCookie();
                }
            })
        }
        getCookie(){

            this.goods = JSON.parse(getCookie("goods"));

            this.display()
        }
        display(){
            var str = "";
            for(var i=0;i<this.res.length;i++){
                for(var j=0;j<this.goods.length;j++){
                    if(this.res[i].goodsId == this.goods[j].id){
                        str += `<tr>
                                    <td><input type="checkbox" name="" id="" value="" /></td>
                                    <td><img src="${this.res[i].src}"/></td>
                                    <td>${this.res[i].name}</td>
                                    <td>${this.res[i].price}</td>
                                    <td><input type="number" value="${this.goods[j].num}"></td>
                                    <td><em data-index="${this.res[i].goodsId}">删除</em></td>
                                </tr>`
                    }
                }
            }
            this.tbody.innerHTML = str;
        }
        addEvent(){
            var that = this;
            this.tbody.addEventListener("click",function(eve){
                if(eve.target.nodeName == "EM"){
                    that.id = eve.target.getAttribute("data-index");
                    eve.target.parentNode.parentNode.remove();
                    that.changeCookie(function(index){
                        that.goods.splice(index,1);
                    })
                }
            })
            this.tbody.addEventListener("input",function(eve){
                if(eve.target.type == "number"){
                    that.value = eve.target.value;
                    that.id = eve.target.parentNode.nextElementSibling.children[0].getAttribute("data-index");
                    that.changeCookie(function(index){
                        that.goods[index].num = that.value;
                    });
                }
            })
        }
        changeCookie(callback){
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id == this.id){
                    break;
                }
            }
            
            callback(i);
            
            setCookie("goods",JSON.stringify(this.goods))
        }
    }
    
    new Car({
        tbody:document.getElementById("tbody"),
        url:"http://localhost/lingshi/goods/data3.json"
    })