/**
 * 
 */
$(function () {
$("#jqGrid").Grid({
        //url: url,
        datatype: "json",
        multiselect: false,
        rowNum: 200,
        height: getPageSize().WinH-38-39-$('.header').height()-15,
        //toolbar:[true,'top'],
        colModel: [
            {label: 'id', name: 'id', index: 'id', key: true, hidden: true},
            {label: '货柜编号', name: 'containerSn', index: 'containerSn', width: 100,formatter:function(value,col,row){
            	let text = "";
            	text = '<a href="javascript:void(0)" onclick="vm.viewContainer('+row.id+')">'+value+'</a>';
            	return text;
            }},
            {label: '配送人', name: 'deliveryPerson', index: 'deliveryPerson', width: 80},
            {label: '小区名称', name: 'uptownName', index: 'uptownName', width: 80},
            {label: '货柜地址', name: 'containerAddr', index: 'containerAddr', width: 80},
            {label: '鲜奶数量', name: 'milkNum', index: 'milkNum', width: 80,formatter: 'int'},
            {label: '酸奶数量', name: 'yogurtNum', index: 'yogurtNum', width: 80,formatter: 'int'},
            {label: '补货时间', name: 'createTime', index: 'createTime', width: 80},
            {
                label: '货柜状态', name: 'containerState', index: 'containerState', width: 80, formatter: function (value) {
                    if (value == '1') {
                        return '补货完成';
                    } else if (value == '0') {
                        return '<font color="red">待补货</font>';
                    }
                    return '-';
                }
            }
        ],
        footerrow : true,
        loadComplete: function (res) {
            debugger;
            console.info(res);
        	// res是服务器返回的数据
            originalData = res.list;
        },
        afterInsertRow(rowid,rowdata,rowelem){
        	console.info(rowid);
        	console.info(rowdata);
        	console.info(rowelem);
        },
        gridComplete(){
        	var sum_milkNum=$("#jqGrid").getCol('milkNum',false,'sum');
        	var sum_yogurtNum=$("#jqGrid").getCol('yogurtNum',false,'sum');
        	$("#jqGrid").footerData('set', { containerSn: '合计:', milkNum: sum_milkNum, yogurtNum: sum_yogurtNum});
        }
    });
    
    var mydata = [ 
        {id : "1",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址1",milkNum:"20",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"}, 
        {id : "2",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址2",milkNum:"30",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"}, 
        {id : "3",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址3",milkNum:"10",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"}, 
        {id : "4",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址4",milkNum:"40",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"}, 
        {id : "5",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址5",milkNum:"30",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"}, 
        {id : "6",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址6",milkNum:"30",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"}, 
        {id : "7",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址7",milkNum:"30",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"}, 
        {id : "8",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址8",milkNum:"30",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"}, 
        {id : "9",containerSn : "2019030600001",deliveryPerson : "郑慧杰",uptownName : "XX001",containerAddr:"地址9",milkNum:"30",yogurtNum:'20',createTime:"2019-03-21",containerState:"0"} 
      ];
	for ( var i = 0; i <= mydata.length; i++){
	jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
	}
	
	jQuery("#toolbarMenu").appendTo(jQuery("#t_jqGrid"));

});

let vm = new Vue({
	el:"#containerGoodsRemainApp",
	data:{
		horizontal:'horizontal',
		showList:true,
        detail: false,
		q: {
			containerSn: '',
            orderStatus: '',
            orderType: ''
        },
		queryCascaderDataValue: ['beijing', 'gugong'],
        addCascaderDataValue:[],
        containerState:'1',
        cascaderData: [{
            value: 'beijing',
            label: '北京市',
            children: [
                {
                    value: 'gugong',
                    label: '市辖区',
                    children: [
                        {
                            value: 'cp',
                            label: '昌平区'
                        },
                        {
                            value: 'hd',
                            label: '海淀区'
                        },
                        {
                            value: 'fs',
                            label: '房山区'
                        }
                    ]
                }
            ]
        }, {
            value: 'jiangsu',
            label: '江苏省',
            children: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                        {
                            value: 'fuzimiao',
                            label: '夫子庙',
                        }
                    ]
                },
                {
                    value: 'suzhou',
                    label: '苏州',
                    children: [
                        {
                            value: 'zhuozhengyuan',
                            label: '拙政园',
                        },
                        {
                            value: 'shizilin',
                            label: '狮子林',
                        }
                    ]
                }
            ],
        }]
        
	},
	create(){
		
	},
	mounted(){
		
	},
	methods:{
		query: function () {
            //vm.reload();
        },
        viewContainer:function(id){
        	if (id == null) {
                return;
            }
            openWindow({
                type: 2,
                title: '配送任务明细',
                content: '../muilk/viewContainer.html?id=' + id+'&delivery=1'
            });
        }
	}
});
