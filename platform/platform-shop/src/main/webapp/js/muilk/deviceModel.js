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
            {label: '设备编号', name: 'deviceModelSn', index: 'deviceModelSn', width: 100},
            {label: '设备名称', name: 'deviceModelName', index: 'deviceModelName', width: 80},
            {label: '供应商', name: 'deviceSupplier', index: 'deviceSupplier', width: 80},
            {label: '大箱容积', name: 'bigCellCubage', index: 'bigCellCubage', width: 60},
            {label: '中箱容积', name: 'midCellCubage', index: 'midCellCubage', width: 60},
            {label: '小箱容积', name: 'smallCellCubage', index: 'smallCellCubage', width: 60},
            {label: '创建时间', name: 'createTime', index: 'createTime', width: 60},
            {
                label: '设备状态', name: 'deviceState', index: 'deviceState', width: 60, formatter: function (value) {
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
        {id : "1",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"20",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"}, 
        {id : "2",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"30",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"}, 
        {id : "3",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"10",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"}, 
        {id : "4",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"40",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"}, 
        {id : "5",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"30",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"}, 
        {id : "6",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"30",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"}, 
        {id : "7",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"30",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"}, 
        {id : "8",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"30",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"}, 
        {id : "9",deviceModelSn : "2019030600001",deviceModelName:'abc',deviceSupplier : "XX001",bigCellCubage:"30",midCellCubage:"20",smallCellCubage:"20",createTime:"2019-03-06",deviceState:"1"} 
      ];
	for ( var i = 0; i <= mydata.length; i++){
		jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
	}
	
});


let vm = new Vue({
    el: '#deviceModelapp',
    data: {
        showList: true,
        detail: false,
        title: null,
        showAddAndUpdate:false,
        deviceModel:{deviceState:'1'},
        shippings: [],
        q: {
            orderSn: '',
            orderStatus: '',
            orderType: ''
        },
        containerState:'1',
        ruleValidate: {
        	deviceModelSn: [
                {required: true, message: '设备编码不能为空', trigger: 'blur'},
                {min:2,message:'请输入最少2位'},{max:32,message:'请输入最多32位'}
            ],
            deviceModelName: [
                {required: true, message: '设备名称不能为空', trigger: 'blur'}
            ],
            supplier: [
                {required: true, message: '供应商不能为空', trigger: 'blur'}
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
            vm.title="创建货柜设备";
        },
        handleSubmit: function (name) {
            handleSubmitValidate(vm, name, function () {
                vm.saveOrUpdate()
            });
        },
        
        handleReset: function (name) {
        	handleResetForm(this, name);
        	vm.container.addCascaderDataValue = [];
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
        
        viewContainer:function(id){
        	if (id == null) {
                return;
            }
            openWindow({
                type: 2,
                title: '查看货柜',
                content: '../muilk/viewContainer.html?id=' + id
            });
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