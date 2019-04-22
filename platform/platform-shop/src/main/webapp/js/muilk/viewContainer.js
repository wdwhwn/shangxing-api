/**
 * 
 */
let containerId = getQueryString('id');
let delivery = getQueryString('delivery');
let cellStr = 'return '+'`<div class="ivu-col ivu-col-span-4">'
+'<div id=${id} title="" data-cell-code=${cellCode} data-cell-type=${cellType} class=${cellFull} data-order-sn=${orderSn} onclick="vm.cellClick(this)">'
+'	<table>'
+'		<tr><td><strong>货箱编号:</strong></td><td>${cellCode}</td></tr>'
+'		<tr><td><strong>容积:</strong></td><td id="cellTypeName">${cellTypeName}</td></tr>'
+'		<tr><td><strong>订单号:</strong></td><td id="orderCode">${orderSn}</td></tr>'
+'		<tr style="display:none"></tr>'
+'	</table>'
+'</div></div>`';

let cellFunc = new Function('id','cellCode','cellType','cellFull','cellCode','cellTypeName','orderSn','orderSn', cellStr);
var vm = new Vue({
	el:'#viewcontainerapp',
	data:{
		orderInfo:'',
		cellArrays:[]
	},
	methods:{
		cellClick:function(){
			vm.orderInfo ="【订单信息】订单编号:3234342343323423,客户:XXX,联系方式:139XXXXXXXX,购买时间:2019-03-08";
		}
	},
	create:function(){
		
	},
	mounted:function() {
		$("#container-cell-id").html("");
		let str = "";
		let cellObjectStr = null;
		let cellClass = 'cell-empty';
		let orderSn = '';
		for(let i = 0 ; i < 20; i++){
			if(i == 2) {
				cellClass = 'cell-full';
				orderSn = '34254234234234';
			}else{
				cellClass = 'cell-empty';
				orderSn = '';
			}
			cellObjectStr = cellFunc('00'+(i+1),'00'+(i+1),'2',cellClass,'00'+(i+1),'中格',orderSn,orderSn);
			if(delivery){//配送任务显示页面使用
				let cellObj = $(cellObjectStr);
				$('table',cellObj).find('tr').last().show().html('<td><font color="red">鲜奶:1瓶</font></td><td><font color="red">酸奶:2瓶</font></td>');
				str += $(cellObj)[0].outerHTML;
			}else{
				str += cellObjectStr;
			}
		}
		$("#container-cell-id").append(str);
	}
	
});