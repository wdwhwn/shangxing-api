$(function () {
    let a = getQueryString("aa");

    let url = '../order/list';
    if (a) {
        url += '?shippingStatus=' + shippingStatus;
    }
       var height =window.screen.availHeight*0.6;
    $("#jqGrid").Grid({
        pagerpos:'right',
        height:height,
        multiselect: false,
        //url: url,
        rownumbers: true,
        datatype: "json",
        rowNum: 10,
        rowList: [10, 20, 30],
        colModel: [
            {label: 'id', name: 'id', index: 'id', key: true, hidden: true},
            {label: '姓名', name: 'name', index: 'name', width: 100},
            {label: '电话', name: 'phone', index: 'phone', width: 80},
            {label: '管辖小区', name: 'jurisdiction', index: 'jurisdiction', width: 100},
            {
                label: '操作', width: 160, align: 'center', sortable: false, formatter: function (value, col, row) {
                    return '<button class="btn btn-outline btn-info" onclick="vm.task(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;配送任务</button>' +
                        '<button class="btn btn-outline btn-success" ' + ' onclick="vm.edit( ' + row.id + ' )"><i class="fa fa-info-circle"></i>&nbsp;编辑</button>' +
                        '<button class="btn btn-outline btn-danger" onclick="vm.delete(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;删除</button>';
                }
            }
        ]
    });

    var mydata = [
        {id: "1", name: "张三", phone: "17777777777", jurisdiction: "丽水花园"},
        {id: "2", name: "张三", phone: "17777777777", jurisdiction: "丽水花园"},
        {id: "3", name: "张三", phone: "17777777777", jurisdiction: "丽水花园"},
        {id: "4", name: "张三", phone: "17777777777", jurisdiction: "丽水花园"},
        {id: "5", name: "张三", phone: "17777777777", jurisdiction: "丽水花园"},
        {id: "6", name: "张三", phone: "17777777777", jurisdiction: "丽水花园"},
        {id: "7", name: "张三", phone: "17777777777", jurisdiction: "丽水花园"},
        {id: "8", name: "张三", phone: "17777777777", jurisdiction: "丽水花园"},

    ];
    for (var i = 0; i <= mydata.length; i++) {
        jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
    }
});

let vm = new Vue({
    el: '#delivery',
    data: {
        title: '',
        taskDate: '',
        cascaderOptions: area,
        range: [],
        taskFlag: false,//配送任务页面显示
        tableDivFlag: true,//列表显示
        editFlag: false,//编辑页面显示
        q: {
            name: '',
            phone: '',
            jurisdiction: ''
        },
        formItem: {
            name: '',
            phone: '',
            jurisdiction: {}
        },
        ruleValidate: {},
        jurisdictions: [
            {lable: '丽水花园', value: '丽水花园'},
            {lable: '玫瑰花园', value: '玫瑰花园'},
            {lable: '东方福地', value: '东方福地'},
            {lable: '太极乡', value: '太极乡'},
        ],//管辖范围
        tableData3: [{
            info: '自提柜编号:A001; 状态:在线;小区:郑州市金水区丽水花园; 片区:小区南门;配送员:刘xxx;配送员手机:1555xxxxx',
            orderNum: 'DD001',
            code: 'A001001',
            spec: '小',
            goods: '花花牛酸奶X2',
            receiver: '小明'
        }, {
            info: '自提柜编号:A001; 状态:在线;小区:郑州市金水区丽水花园; 片区:小区南门;配送员:刘xxx;配送员手机:1555xxxxx',
            orderNum: 'DD0012',
            code: 'A0010012',
            spec: '小',
            goods: '花花牛酸奶X23', receiver: '小红'
        }, {
            info: '自提柜编号:A001; 状态:在线;小区:郑州市金水区丽水花园; 片区:小区南门;配送员:刘xxx;配送员手机:1555xxxxx',
            orderNum: 'DD0013',
            code: 'A00100123',
            spec: '小',
            goods: '花花牛酸奶X234', receiver: '小刚'
        }, {
            info: '自提柜编号:A001; 状态:在线;小区:郑州市金水区丽水花园; 片区:小区南门;配送员:刘xxx;配送员手机:1555xxxxx',
            orderNum: 'DD0013',
            code: 'A00100123',
            spec: '小',
            goods: '花花牛酸奶X234', receiver: '小丽'
        }, {
            info: '自提柜编号:A001; 状态:在线;小区:郑州市金水区丽水花园; 片区:小区南门;配送员:刘xxx;配送员手机:1555xxxxx',
            orderNum: 'DD0013',
            code: 'A00100123',
            spec: '小',
            goods: '花花牛酸奶X234', receiver: '小南'
        },],

    },
    methods: {
        objectSpanMethod({row, column, rowIndex, columnIndex}) {
            if (columnIndex === 0) {
                if (rowIndex === 0) {
                    return {
                        rowspan: this.tableData3.length,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },

        taskBack() {
            vm.tableDivFlag = true;
            vm.taskFlag = false;
        }
        ,
        add() {
            vm.title = '新增';
            vm.tableDivFlag = false;
            vm.editFlag = true;
        }
        ,
        handleSubmit: function (name) {

        }
        ,

        reload() {
            this.tableDivFlag = true;
            this.editFlag = false;
        }
        ,
        query() {

        }
        ,
        task(id) {
            vm.tableDivFlag = false;
            vm.taskFlag = true;
        }
        ,
        edit(id) {
            console.log(id)
            vm.title = '编辑';
            let row = {}
            vm.formItem = Object.assign({}, row);
            vm.tableDivFlag = false;
            vm.editFlag = true;
        }
        ,
        delete(id) {
            confirm('确定要删除选中的记录？', function () {
                /*Ajax.request({
                    type: "POST",
                    url: "../goods/delete",
                    contentType: "application/json",
                    params: JSON.stringify(ids),
                    successCallback: function (r) {
                        alert('操作成功', function (index) {
                            vm.reload();;
                        });
                    }
                });*/
                alert('操作成功', function (index) {
                    vm.reload();
                    ;
                });
            });
        }

    },
    created: function () {
        let vue = this;

    }
});