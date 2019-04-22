var originalData;
$(function () {
    let shippingStatus = getQueryString("shippingStatus");
    let payStatus = getQueryString("payStatus");
    let orderStatus = getQueryString("orderStatus");
    let orderType = getQueryString("orderType");
    let url = '../order/list';
    if (shippingStatus) {
        url += '?shippingStatus=' + shippingStatus;
    }
    if (payStatus) {
        url += '?payStatus=' + payStatus;
    }
    if (orderStatus) {
        url += '?orderStatus=' + orderStatus;
    }
    if (orderType) {
        url += '?orderType=' + orderType;
    }
    
    $("#jqGrid").Grid({
        //url: url,
        datatype: "json",
        height: getPageSize().WinH-38-39-$('.header').height()-15,
        colModel: [
            {label: 'id', name: 'id', index: 'id', key: true, hidden: true},
            {label: '货柜编号', name: 'containerSn', index: 'container_sn', width: 100,formatter:function(value,col,row){
            	let text = "";
            	text = '<a href="javascript:void(0)" onclick="vm.viewContainer('+row.id+')">'+value+'</a>';
            	return text;
            }},
            {label: '设备编号', name: 'deviceSn', index: 'deviceSn', width: 80},
            {label: '货柜型号', name: 'containerModel', index: 'containerModel', width: 80},
            {label: '柜箱数量', name: 'cellNum', index: 'cellNum', width: 60},
            {label: '创建时间', name: 'createTime', index: 'create_time', width: 60},
            {
                label: '货柜状态', name: 'containerState', index: 'container_state', width: 60, formatter: function (value) {
                    if (value == '1') {
                        return '正常';
                    } else if (value == '0') {
                        return '停用';
                    }
                    return '-';
                }
            },
            
            {
                label: '操作', width: 80, align: 'center', sortable: false, formatter: function (value, col, row) {
                    return '<button class="btn btn-outline" onclick="vm.deleteRow(' + row.id + ')"><i class="fa fa-info-circle"></i>删除</button>';
                }
            }
        ],
        loadComplete(data) {
            debugger;
        	originalData = data.list;
        },
        afterInsertRow(rowid,rowdata,rowelem){
        	var ss = getPageSize(); 
        	
        },
        gridComplete(){
        	
        }
    });
    
    var mydata = [ 
        {id : "1",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"20",createTime:"2019-03-06",containerState:"1"}, 
        {id : "2",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"30",createTime:"2019-03-06",containerState:"1"}, 
        {id : "3",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"10",createTime:"2019-03-06",containerState:"1"}, 
        {id : "4",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"40",createTime:"2019-03-06",containerState:"1"}, 
        {id : "5",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"30",createTime:"2019-03-06",containerState:"1"}, 
        {id : "6",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"30",createTime:"2019-03-06",containerState:"1"}, 
        {id : "7",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"30",createTime:"2019-03-06",containerState:"1"}, 
        {id : "8",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"30",createTime:"2019-03-06",containerState:"1"}, 
        {id : "9",containerSn : "2019030600001",containerModel : "大格,中格",cellNum:"30",createTime:"2019-03-06",containerState:"1"} 
      ];
	for ( var i = 0; i <= mydata.length; i++){
		jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
	}
	
});

var validatAddCascaderDataValue = function(rule,value,callback){
	if(!value){
        return callback(new Error("请选择地区"));
    }else{
        callback();
    }
};

//let cellStr = 'return ' + '`<div class="ivu-col ivu-col-span-6"><div title="" data-code=${cellCode} data-num=${num} class="cell-empty">货箱编号:${cellCode},容积:${num}瓶</div></div>`';
let cellStr = 'return '+'`<div class="ivu-col ivu-col-span-4">'
	+'<div id=${id} title="" data-cell-code=${cellCode} data-cell-type=${cellType} class="cell cell-empty" onclick="vm.selCellClick(this)">'
	+'	<table>'
	+'		<tr><td><strong>货箱编号:</strong></td><td>${cellCode}</td></tr>'
	+'		<tr><td><strong>容积:</strong></td><td id="cellTypeName">${cellTypeName}</td></tr>'
	+'		<tr><td><strong>&nbsp;</strong></td><td>&nbsp;</td></tr>'
	+'	</table>'
	+'</div></div>`';

let cellFunc = new Function('id','cellCode','cellType','cellCode','cellTypeName', cellStr);

let vm = new Vue({
    el: '#containerapp',
    data: {
        showList: true,
        detail: false,
        title: null,
        showAddAndUpdate:false,
        cellTypeArray: [],
        container:{containerState:'1',cellNum:'',containerModel:''},
        shippings: [],
        q: {
            orderSn: '',
            orderStatus: '',
            orderType: ''
        },
        cellTypeName:{1:'小格',2:'中格',3:'大格'},
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
        }],
        deviceModelList: [
            {
            	value: '00011',
            	label: '高端大气柜 大箱3 小箱2',
                cubage:[{bigCellCubage:7,cellType:3,cellTypeName:'大格'},{midCellCubage:5,cellType:2,cellTypeName:'中格'},{smallCellCubage:3,cellType:1,cellTypeName:'小格'}]
            },
            {
            	value: '00012',
            	label: '高端大气柜001 大箱3 小箱2',
                cubage:[{bigCellCubage:3,cellType:3,cellTypeName:'大格'},{midCellCubage:2,cellType:2,cellTypeName:'中格'}]
            },
            {
            	value: '00013',
            	label: '高端大气柜002 大箱3 小箱2',
                cubage:[{bigCellCubage:3,cellType:3,cellTypeName:'大格'},{midCellCubage:2,cellType:2,cellTypeName:'中格'}]
            },
            {
            	value: '00014',
            	label: '高端大气柜003 大箱3 小箱2',
                cubage:[{bigCellCubage:3,cellType:3,cellTypeName:'大格'},{midCellCubage:2,cellType:2,cellTypeName:'中格'}]
            },
            {
            	value: '00015',
            	label: '高端大气柜004 大箱3 小箱2',
                cubage:[{bigCellCubage:3,cellType:3,cellTypeName:'大格'},{midCellCubage:2,cellType:2,cellTypeName:'中格'}]
            },
            {
            	value: '00016',
            	label: '高端大气柜005 大箱3 小箱2',
                cubage:[{bigCellCubage:3,cellType:3,cellTypeName:'大格'},{midCellCubage:2,cellType:2,cellTypeName:'中格'}]
            }
        ],
        ruleValidate: {
        	containerSn: [
                {required: true, message: '货柜编号不能为空', trigger: 'blur'},
                {min:2,message:'请输入最少2位'},{max:32,message:'请输入最多32位'}
            ],
            cellNum: [
                {required: true, message: '货柜箱数量不能为空', trigger: 'blur'}
            ],
            deviceSn: [
                {required: true, message: '设备编号不能为空', trigger: 'blur'}
            ]
        
        },
        selCellList:[],//被选择需要设置的箱格
        cellArrays:[]//货柜的所有箱格
        
    },
    methods: {
        query: function () {
            vm.reload();
        },
        cellClick: function (event) {
            $(event.srcElement).css("background","#5cadff")
        },
        confirm: function (event) {
            let id = getSelectedRow("#jqGrid");
            if (id == null) {
                return;
            }
            confirm('确定收货？', function () {
                Ajax.request({
                    type: "POST",
                    url: "../order/confirm",
                    contentType: "application/json",
                    params: JSON.stringify(id),
                    successCallback: function (r) {
                        if (r.code == 0) {
                            alert('操作成功', function (index) {
                                vm.reload();
                            });
                        } else {
                            alert(r.msg);
                        }
                    }
                });
            });
        },
        saveOrUpdate: function (event) {
            /**
        	Ajax.request({
                type: "POST",
                url: "../order/sendGoods",
                contentType: "application/json",
                params: JSON.stringify(vm.order),
                successCallback: function (r) {
                    vm.reload();
                }
            });**/
        	vm.reload();
        },
        reload: function (event) {
            vm.showList = true;
            vm.detail = false;
            vm.showAddAndUpdate = false;
            let page = $("#jqGrid").jqGrid('getGridParam', 'page');
            $("#jqGrid").jqGrid('setGridParam', {
                postData: {
                    'orderSn': vm.q.orderSn,
                    'orderStatus': vm.q.orderStatus,
                    'orderType': vm.q.orderType
                },
                page: page
            }).trigger("reloadGrid");
            vm.handleReset('containerFormValidate');
        },
        lookDetail: function (rowId) { //第三步：定义编辑操作
            vm.detail = true;
            vm.title = "详情";
            Ajax.request({
                url: "../order/info/" + rowId,
                async: true,
                successCallback: function (r) {
                    vm.order = r.order;
                }
            });
        },
        printDetail: function (rowId) {
            openWindow({
                type: 2,
                title: '<i class="fa fa-print"></i>打印票据',
                content: '../shop/orderPrint.html?orderId=' + rowId
            })
        },
        add:function() {
        	vm.showList = false;
            vm.showAddAndUpdate = true;
            vm.title="创建货柜";
        },
        handleSubmit: function (name) {
            handleSubmitValidate(vm, name, function () {
                vm.saveOrUpdate()
            });
        },
        casecaderChange:function(value,selectObj) {
        	
        },
        handleReset: function (name) {
        	handleResetForm(this, name);
        	vm.container.addCascaderDataValue = [];
        },
        createContainerCell:function(val) {
        	if(val > 50){
        		iview.Message.error('设置货柜箱数量不能超过50个，请设置50内的箱格！');
        		return false;
        	}else{
        		vm.cellArrays = [];//清空所有箱格
        		$("#container-cell-id").html("");
        		let str = "";
        		for(let i = 0 ; i < val; i++){
        			str += cellFunc('00'+(i+1),'00'+(i+1),'2','00'+(i+1),'中格');
        			vm.cellArrays.push({cellCode:'00'+(i+1),cellType:'2'})//默认是中格
        		}
        		$("#container-cell-id").append(str);
        	}
        },
        deleteRow:function(id){
        	$("#jqGrid").delRowData(id);
        },
        update() {
        	let rowData = getSelectedRowData('#jqGrid');
        	if(!rowData){
        		return false;
        	}
        	vm.container.containerSn = rowData.containerSn;
        	vm.container.containerModel = rowData.containerModel;
        	vm.container.cellNum = rowData.cellNum;
        	vm.container.containerState = rowData.containerState;
        	vm.showList = false;
        	vm.title="修改货柜";
        	vm.showAddAndUpdate = true;
        },
        handleCommand(command) {
            if(vm.selCellList.length == 0) {
            	this.$message('请在货柜配置里选择需要设置的格子！ ');
            	return;
            }
        	
        	let cellType = null;
        	let cellTypeName = null;
        	cellType = command;
        	if('1'==command){
        		cellTypeName ='小格';
        	}else if ('2'== command){
        		cellTypeName ='中格';
        	}else if ('3' == command) {
        		cellTypeName = '大格';
        	}else{
        		cellTypeName = '';
        	}
        	for (let i = 0; i < vm.selCellList.length; i++){
        		let obj = vm.selCellList[i];
        		let cellCode = obj.dataset.cellCode;
        		obj.dataset.cellType = command;
        		$("#cellTypeName",obj).text(cellTypeName);
        		for(let j = 0; j < vm.cellArrays.length;j++) {
        			if(vm.cellArrays[j].cellCode == cellCode){
        				vm.cellArrays[j].cellType = cellType;
        			}
        		}
        		$(obj).removeClass("sel-cell");
        		$(obj).addClass("cell-empty");
        	}
        	vm.selCellList = [];
        },
        selCellClick:function(obj) {
        	if(!$(obj).hasClass("cell")) {
        		return false;
        	}
        	$(obj).toggleClass(function() {
        		if ($(this).hasClass('cell-empty')) {
        			vm.selCellList.push(this);
        			$(this).removeClass("cell-empty");
        			return 'sel-cell';
        		} else {
        			$(this).removeClass("sel-cell");
        			for(let i = 0; i < vm.selCellList.length;i++){
        				if(vm.selCellList[i] == this){
        					vm.selCellList.splice(i,1);
        				}
        			}
        		    return 'cell-empty';
        		}
        		
        	});
        	
        },
        viewContainer:function(id){
        	if (id == null) {
                return;
            }
            openWindow({
                type: 2,
                title: '查看货柜',
                content: '../muilk/viewContainer.html?id=' + id
            });
        },
        deviceSnChange:function(value) {
        	this.cellTypeArray=[];
        	let str = [];
        	for(let i = 0; i < this.deviceModelList.length; i++) {
        		if(this.deviceModelList[i].value==value) {
        			for(let j = 0; j < this.deviceModelList[i].cubage.length; j++){
        				str.push(this.cellTypeName[this.deviceModelList[i].cubage[j].cellType]);
        				this.cellTypeArray.push(this.deviceModelList[i].cubage[j]);
        			}
        		}
        	}
        	this.container.containerModel = str.join(",");
        	
        }
    },
    created: function () {
        let vue = this;
        Ajax.request({
            url: "../shipping/queryAll",
            async: true,
            successCallback: function (r) {
                vue.shippings = r.list;
            }
        });
    },
    watch: {
    	'container.cellNum': function (val) {
          vm.createContainerCell(val);
        }
    },
    mounted:function(){
    	//$("#jqGrid").jqGrid('setGridHeight', ss.WinH); 
    	//console.info($(".footer").height());
    	//console.info(getPageSize());
    	//console.info($(".header").height());
    }
});