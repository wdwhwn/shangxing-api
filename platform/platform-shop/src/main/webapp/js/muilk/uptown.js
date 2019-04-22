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
        subGrid: true,
        multiselect: false,
        height: getPageSize().WinH-38-39-$('.header').height()-25,
        sortname: 'id',
        rownumbers: false,
        colModel: [
            {label: 'id', name: 'id', index: 'id', key: true, hidden: true},
            {label: '小区编号', name: 'uptownSn', index: 'uptown_sn', width: 100},
            {label: '小区名称', name: 'uptownName', index: 'uptown_name', width: 80},
            {label: '省', name: 'provinceName', index: 'province_name', width: 40},
            {label: '市', name: 'cityName', index: 'city_name', width: 40},
            {label: '区县', name: 'districtName', index: 'districtname', width: 40},
            {label: '地址', name: 'addr', index: 'addr', width: 100},
            {label: '货柜数量', name: 'goodsContainer', index: 'goodsContainer', width: 140,formatter:function(value){
            	let str = '';
            	if(value==''){
            		return '--';
            	}else{
            		let gcArray = value.split(',');
            		for (let i = 0; i < gcArray.length; i++){
            			str+='<a href="javascript:void(0)" onclick="vm.viewContainer('+'2019030600001'+')" class="btn btn-default btn-xs active" role="button">货柜'+(i+1)+'</a>';
            		}
            	}
            	return str;
            }},
            {label: '创建时间', name: 'createTime', index: 'create_time', width: 80},
            {
                label: '小区状态', name: 'uptownState', index: 'uptown_state', width: 40, formatter: function (value) {
                    if (value == '1') {
                        return '普通订单';
                    } else if (value == '2') {
                        return '团购订单';
                    } else if (value == '3') {
                        return '砍价订单';
                    } else if (value == '4') {
                        return '立即购买';
                    }
                    return '正常';
                }
            },
            
            {
                label: '操作', width: 160, align: 'center', sortable: false, formatter: function (value, col, row) {
                    return '<button class="btn btn-outline btn-default" onclick="vm.addContainer(' + row.id + ')"><i class="fa fa-archive"></i>添加货柜</button>';
                }
            }
        ]
    });
    
    var mydata = [ 
        {id : "1",uptownSn : "2019030600001",uptownName : "测绘学院家属小区",provinceName : "河南",cityName : "郑州",areaName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"}, 
        {id : "2",uptownSn : "2019030600001",uptownName : "小区1",provinceName : "河南",cityName : "郑州",districtName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"}, 
        {id : "3",uptownSn : "2019030600001",uptownName : "小区2",provinceName : "河南",cityName : "郑州",districtName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"}, 
        {id : "4",uptownSn : "2019030600001",uptownName : "小区3",provinceName : "河南",cityName : "郑州",districtName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"}, 
        {id : "5",uptownSn : "2019030600001",uptownName : "小区4",provinceName : "河南",cityName : "郑州",districtName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"}, 
        {id : "6",uptownSn : "2019030600001",uptownName : "小区5",provinceName : "河南",cityName : "郑州",districtName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"}, 
        {id : "7",uptownSn : "2019030600001",uptownName : "小区6",provinceName : "河南",cityName : "郑州",districtName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"}, 
        {id : "8",uptownSn : "2019030600001",uptownName : "小区7",provinceName : "河南",cityName : "郑州",districtName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"}, 
        {id : "9",uptownSn : "2019030600001",uptownName : "小区8",provinceName : "河南",cityName : "郑州",districtName : "二七区",addr : "大学路",goodsContainer:"货柜1,货柜2,货柜3",createTime:"2019-03-06",containerState:"正常"} 
      ];
	for ( var i = 0; i <= mydata.length; i++){
	jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
	}
});

var validatAddCascaderDataValue = function(rule,value,callback){
	debugger;
	if(!value){
        return callback(new Error("请选择地区"));
    }else{
        callback();
    }
};

let vm = new Vue({
    el: '#uptownapp',
    data: {
        showList: true,
        detail: false,
        title: null,
        showAddAndUpdate:false,
        order: {},
        uptown:{uptownState:'1'},
        shippings: [],
        q: {
            orderSn: '',
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
        }],
        ruleValidate: {
        	uptownSn: [
                {required: true, message: '小区编码不能为空', trigger: 'blur'},
                {min:2,message:'请输入最少2位'},{max:32,message:'请输入最多32位'}
            ],
            uptownName: [
                {required: true, message: '小区名称不能为空', trigger: 'blur'}
            ],
            addCascaderDataValue: [
                {required: true,validator: validatAddCascaderDataValue, trigger: 'blur'}
            ], 
            addr: [
                {required: true, message: '街道地址不能为空', trigger: 'blur'}
            ]
        }
    },
    methods: {
        query: function () {
            vm.reload();
        },
        sendGoods: function (event) {
            let id = getSelectedRow("#jqGrid");
            if (id == null) {
                return;
            }
            vm.showList = false;
            vm.title = "发货";
            Ajax.request({
                url: "../order/info/" + id,
                async: true,
                successCallback: function (r) {
                    vm.order = r.order;
                }
            });
        },
        update: function (event) {
            debugger;
        	let id = getSelectedRow("#jqGrid");
            if (id == null) {
                return;
            }
            let obj = getSelectedRowData("#jqGrid") ;
            vm.showList = false;
            vm.showAddAndUpdate = true;
            vm.title="修改小区信息";
            vm.uptown = obj;
            /**
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
            });**/
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
        	console.info(vm.uptown)
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
            vm.handleReset('uptownFormValidate');
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
            vm.title="小区信息";
        },
        handleSubmit: function (name) {
            handleSubmitValidate(vm, name, function () {
                vm.saveOrUpdate()
            });
        },
        casecaderChange:function(value,selectObj) {
        	console.info(value);
        	console.info(selectObj);
        },
        handleReset: function (name) {
        	handleResetForm(this, name);
        	vm.uptown.addCascaderDataValue = [];
        },
        viewContainer(id) {
        	if (id == null) {
                return;
            }
            openWindow({
                type: 2,
                title: '查看货柜',
                content: '../muilk/viewContainer.html?id=' + id
            });
        },
        addContainer:function(id) {//小区ID
        	if (id == null) {
                return;
            }
            openWindow({
                type: 2,
                title: '给小区添加货柜',
                btn:true,
                success: function(layero, index){
                	let body = layer.getChildFrame('body', index);
                    $("#layerIndexId",body).val(index);
                },
                content: '../muilk/uptownContainerAdd.html?id=' + id
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
    }
});