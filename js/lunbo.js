$(function(){
	//$：表示一个查找对象的函数；
	//例如obj=$(‘ss’)就是引用的这个id='ss’的对象
	//具体解释详见：https://blog.csdn.net/grbrb/article/details/106862636
    var index=0;//标记当前图片索引
    var f;
    dingshiqi();
    function dingshiqi(){
        f=setInterval(function(){
        if (index==$(".bannar img").length-1) {
            index=0;
            $(".bannar img").css("opacity","0");//设置图片css样式完全透明
            $(".bannar img").eq(index).css("opacity","1");//设置索引图片css样式完全不透明
			//eq：eq（）选择器选取带有指定 index 值的元素。
			//具体解释详见：https://www.php.cn/js-tutorial-485762.html
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
        }else{
            index++;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1"); 
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
        }
    }
    ,3000)
    }
    $(".left-btn").click(function(){
        clearInterval(f);
        if (index==0) {
            index=$(".bannar img").length-1;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
            dingshiqi();
        }else{
            index--;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
            dingshiqi();
        }
        
    })
    $(".right-btn").click(function(){
        clearInterval(f);
        if (index==$(".bannar img").length-1) {
            index=0;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
            dingshiqi();
        }else{
            index++;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
            dingshiqi();
        }
    })
    $(".botton").click(function(){
        clearInterval(f);
        var indexx=$(this).index();
        index=indexx;
        $(".bannar img").css("opacity","0");
        $(".bannar img").eq(index).css("opacity","1");
        $(".botton").css("background-color","#ccc");
        $(".botton").eq(index).css("background-color","#fff");
        dingshiqi();
    })
})
