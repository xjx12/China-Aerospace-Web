//初始化
(function(){
	//1.将列表第一个元素克隆到最后一项
	var list=document.querySelector('.list1');
	function cloneFirstItem(){
		var firstItem=list.children[0]
		var newItem=firstItem.cloneNode(true);
		list.appendChild(newItem);
	}
	cloneFirstItem()
	//滚动：每隔一段时间，将列表滚动到下一个位置
	var duration=2000;//滚动的间隔时间
	setInterval(moveNext,duration)
	var itemHeight=30;//每一项的高度
	var curIndex=0;//目前展示的是第几项
	//将列表滚动到下一个位置
	function moveNext(){
		var from=curIndex*itemHeight;//开始的滚动高度
		curIndex++;
		var to=curIndex*itemHeight//下一项滚动高度
		//让list的scrollTop，从from慢慢变为to
		//list.scrollTop=to;
		 var totalDuration=500;
		 var duration=10;//变化的间隔时间
		 var times=totalDuration/duration;//变化的次数
		 var dis=(to-from)/times;//每次变化的量
		 var timerID= setInterval(function(){
		 	from+=dis;
		 	if (from>=to) {
		 		clearInterval(timerID);
		 		if(curIndex ===list.children.length-1){
		 			from=0;
		 			curIndex=0;
				}
		 	} 
		 	list.scrollTop=from;
		 },duration)
		//list.scrollTop=to;
	}
})();//立即执行函数