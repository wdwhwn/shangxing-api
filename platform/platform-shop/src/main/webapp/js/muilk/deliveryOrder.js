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
            {
                label: '状态', name: 'status', index: 'status', width: 80, formatter: function (value, col, row) {
                    if (value == '0') {
                        return '<span class="font-red">待审核<span>';
                    }
                    if (value == '1') {
                        return '<span class="font-green">审核通过<span>';
                    }
                    if (value == '2') {
                        return '<span class="font-blue">配送中<span>';
                    }
                    if (value == '3') {
                        return '<span class="font-black">暂停<span>';
                    }
                }
            },
            {label: '目的地', name: 'mudd', index: 'mudd', width: 80},
            {label: '配送员', name: 'name', index: 'name', width: 80},
            {
                label: '操作', width: 160, align: 'center', sortable: false, formatter: function (value, col, row) {
                    return '<button class="btn btn-outline btn-info" onclick="vm.f1(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;暂停配送</button>' +
                        '<button class="btn btn-outline btn-success" onclick="vm.f2(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;终止配送</button>' +
                        '<button class="btn btn-outline btn-toolbar" onclick="vm.f3(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;退款</button>' +
                        '<button class="btn btn-outline btn-danger" onclick="vm.f4(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;查看配送详情</button>';
                }
            }
        ]
    });

    var mydata = [
        {id: "1001", orderId: "1001", status: "2", mudd: 'xx小区', name: '无'},
        {id: "1002", orderId: "1002", status: "2", mudd: 'xx小区', name: '无'},
        {id: "1003", orderId: "1003", status: "2", mudd: 'xx小区', name: '无'},
        {id: "1004", orderId: "1004", status: "2", mudd: 'xx小区', name: '张三'},
        {id: "1005", orderId: "1005", status: "2", mudd: 'xx小区', name: '无'},
        {id: "1006", orderId: "1006", status: "2", mudd: 'xx小区', name: '无'},
        {id: "1007", orderId: "1007", status: "2", mudd: 'xx小区', name: '李四'},

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
        formLabelWidth: '120px',
        dialogVisible: false,
    },
    methods: {
        f1(id) {
            this.$confirm('此操作将暂停配送任务, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '操作成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消操作'
                });
            });
        },
        f2(id) {
            this.$confirm('此操作将终止配送任务, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '操作成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消操作'
                });
            });
        },
        f3(id) {
            vm.dialogFormVisible = true;
        },
        f4(id) {
            vm.dialogVisible = true

        },
        showMap() {

        },
        tabclick(v) {
            var map = new BMap.Map("container");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
            var driving = new BMap.DrivingRoute(map, {
                renderOptions: {
                    map: map,
                    autoViewport: true
                }
            });
            var start = new BMap.Point(116.310791, 40.003419);
            var end = new BMap.Point(116.486419, 39.877282);
            driving.search(start, end);
        },
    },
    mounted() {
    },
    created: function () {

    }
});