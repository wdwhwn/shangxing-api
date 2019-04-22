$(function () {
    let a = getQueryString("aa");

    let url = '../order/list';
    if (a) {
        url += '?shippingStatus=' + shippingStatus;
    }
    var height = window.screen.availHeight * 0.6;
    $("#jqGrid").Grid({
        pagerpos: 'right',
        height: height,
        multiselect: false,
        rownumbers: true,
        datatype: "json",
        rowNum: 10,
        rowList: [10, 20, 30],
        colModel: [
            {label: 'id', name: 'id', index: 'id', key: true, hidden: true},
            {label: '订单号', name: 'orderId', index: 'orderId', width: 100},
            {label: '状态', name: 'status', index: 'status', width: 80},
            {label: '目的地', name: 'mudd', index: 'mudd', width: 80},
            {label: '配送员', name: 'name', index: 'name', width: 80},
            {
                label: '操作', width: 160, align: 'center', sortable: false, formatter: function (value, col, row) {
                    if (row.name != '无') {
                        return '<button class="btn btn-outline btn-info" onclick="vm.task(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;指派配送员</button>';
                    } else {
                        return '<button class="btn btn-outline btn-success" ' + ' onclick="vm.edit( ' + row.id + ' )"><i class="fa fa-info-circle"></i>&nbsp;修改配送员</button>';
                    }

                }
            }
        ]
    });

    var mydata = [
        {id: "1001", orderId: "1001", status: "待分配", mudd: 'xx小区', name: '无'},
        {id: "1002", orderId: "1002", status: "待分配", mudd: 'xx小区', name: '无'},
        {id: "1003", orderId: "1003", status: "待分配", mudd: 'xx小区', name: '无'},
        {id: "1004", orderId: "1004", status: "待分配", mudd: 'xx小区', name: '张三'},
        {id: "1005", orderId: "1005", status: "待分配", mudd: 'xx小区', name: '无'},
        {id: "1006", orderId: "1006", status: "待分配", mudd: 'xx小区', name: '无'},
        {id: "1007", orderId: "1007", status: "待分配", mudd: 'xx小区', name: '李四'},

    ];
    for (var i = 0; i <= mydata.length; i++) {
        jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
    }
});

let vm = new Vue({
    el: '#delivery',
    data: {
        title: '',
        tableDivFlag: true,
        dialogTableVisible: false,
        dialogFormVisible: false,
        select: '',
        name: '',
        restaurants: [],
        state1: '',
    },
    methods: {
        task(id) {
            vm.dialogFormVisible = true;
        },
        edit(id) {
            vm.dialogFormVisible = true;
        },
        querySearch(queryString, cb) {
            var restaurants = vm.restaurants;
            var results = queryString ? restaurants.filter(vm.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [{'value': '张三'},
                {'value': '李四'},
                {'value': '王五'}];
        },
    },
    mounted() {
        this.restaurants = this.loadAll();
    },
    created: function () {
    }
});