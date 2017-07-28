/**
 * 对订单进行操作
 */
//删除订单
function deleteorder(id,type){
	if(type=="park"){
		$.ajax({
			url : 'deletePorderAction.action',
			type : 'post',
			dataType : 'text',
			data : {
				id:id,
			},
			success : function(data) {
					alert("操作成功");
					getparkOrder();
			},
			error : function() {
				return;
			}
		});
	}else if(type=="fs"){
		$.ajax({
			url : 'deleteOrder.action',
			type : 'post',
			dataType : 'text',
			data : {
				id:id,
			},
			success : function(data) {
				alert("操作成功");
				getFSOrder();
			},
			error : function() {
				return;
			}
		});
	}
}
/*查看更多维修管理订单
 * 当滚动到底部时，自动加几条订单记录
 * 直到查询结束
 */
function getpoMore(){
	var scrollTop=$(document).scrollTop();
	if (scrollTop>=$(document).height()-$(window).height()) {
		getparkOrder();
	};
}
/*查看更多预定停车订单
 * 当滚动到底部时，自动加几条订单记录
 * 直到查询结束
 */
function getfoMore(){
	var scrollTop=$(document).scrollTop();
	if (scrollTop>=$(document).height()-$(window).height()) {
		
		getFSOrder();
	};
}
