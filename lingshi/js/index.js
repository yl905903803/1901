
$(".banner").banner({
    items:$(".banner .imgbox a"),	
    left:$(".banner .btns #left"),	
    right:$(".banner .btns #right"),
    isList:true,
    delayTime:3000,
    moveTime:2000
})


    var ul = document.getElementById("list");
    var ks =document.getElementById("ks")
    ks.onkeyup = function(){
            $.ajax({
                url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
                success:function(res){
                    var str= ""
                    res.s.forEach(function(v){
                        str += `<li>${v}</li>`;
                    })
                    ul.innerHTML = str;
                },
                data:{
                    wd:ks.value
                },
                dataType:"jsonp",
                jsonp:"cb"
                
             })
       
    }

$(".menu li").on("mouseover",function(){
    $(".menu-3").css({display:"block"});

    $(".menu li").on("mouseout",function(){
        $(".menu-3").css({display:"none"});
    })
})




 $.ajax({
		url:"http://localhost/lingshi/goods/data1.json",
		success:function(res){
            var json = res;
            var str ="";
            for(var i=0;i<json.length;i++){
                   str +=
                     `<li class="">
                    <p><a href="http://localhost/lingshi/details.html" target="_blank" title="${json[i].title}" class="hot_sale_img"><img alt="${json[i].alt}" width="160" height="160" src="${json[i].src}"></a></p>
                    <p><a href="http://localhost/lingshi/details.html" target="_blank" class="name" title="${json[i].title}">${json[i].name}</a></p>
                    <p class="price"><em>￥</em>${json[i].price}</p>
                    </li>` 
             }
               $(".hot_sale_snack").html(str)
		}
	})

    $.ajax({
		url:"http://localhost/lingshi/goods/data2.json",
		success:function(res){
            var json = res;
            var str ="";
            for(var i=0;i<json.length;i++){
                   str +=
                     `<li class="">
                     <p><a href="http://localhost/lingshi/details.html" target="_blank" class="hot_sale_img"><img alt="${json[i].title}" 约7小包" width="160" height="160" src="${json[i].src}"></a></p>
                     <p><a href="http://localhost/lingshi/details.html" target="_blank" class="name" title="${json[i].title}"">${json[i].name}</a></p>
                     <p class="price"><em>￥</em>${json[i].price}</p>
                     <span class="tag">hot</span>
                 </li>` 
             }
               $(".heihei").html(str)
		}
	})

 

 $.ajax({
		url:"http://localhost/lingshi/goods/data2.json",
		success:function(res){
            var json = res;
            var str ="";
            for(var i=0;i<json.length;i++){
                   str +=
                     ` <li class="snack ">
                     <a href="http://localhost/lingshi/details.html" title="${json[i].title}" target="_blank" class="img"><img alt="${json[i].title} width="140" height="140" src="${json[i].src}"></a>
                        <div class="info">
                             <p><a href="http://localhost/lingshi/details.html" title="${json[i].title}" class="name">${json[i].title}</a></p>
                             <p class="price1">¥${json[i].price}</p>
                             </div>
                          </li> ` 
             }
               $(".f1").html(str)
		}
	})

    $(".hot_search").find("a").mouseover(function(){
        $(this).addClass("hot").siblings().removeClass("hot");
        $(".xx").find("ul").removeClass("active").eq($(this).index()).addClass("active")
     })


$(window).on('scroll',function () {
    $('.valign img').each(function () {
        if (checkShow($(this)) && !isLoaded($(this)) ){
            loadImg($(this));
        }
    })
})
function checkShow($img) {
    var scrollTop = $(window).scrollTop();
    var windowH = $(window).height();
    var offsetTop = $img.offset().top;

    if (offsetTop +200 < (scrollTop + windowH) && offsetTop > scrollTop) {
        return true;
    }
    return false;
}
function isLoaded ($img) {
    return $img.attr('data-src') === $img.attr('src'); 
}
function loadImg ($img) {
    $img.attr('src',$img.attr('data-src'));
}


