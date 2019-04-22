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
        rownumbers: true,
        multiselect: false,
        datatype: "json",
        rowNum: 10,
        rowList: [10, 20, 30],
        colModel: [
            {label: 'id', name: 'id', index: 'id', key: true, hidden: true},
            {label: '订单号', name: 'orderId', index: 'orderId', width: 100},
            {label: '商品', name: 'commodity', index: 'commodity', width: 80},
            {
                label: '状态', name: 'status', index: 'status', width: 100, formatter: function (value, col, row) {
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
            {
                label: '操作', width: 150, align: 'center', sortable: false, formatter: function (value, col, row) {
                    if (row.status == '0') {
                        return '<button class="btn btn-outline btn-info" onclick="vm.review(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;审核</button>';
                    }
                    if (row.status == '1') {
                        return '<button class="btn btn-outline btn-success" onclick="vm.refund( ' + row.id + ' )"><i class="fa fa-info-circle"></i>&nbsp;退款</button>';
                    }
                    if (row.status == '2') {
                        return '<button class="btn btn-outline btn-danger" onclick="vm.pause(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;暂停</button>' +
                            '<button class="btn btn-outline btn-success" onclick="vm.refund( ' + row.id + ' )"><i class="fa fa-info-circle"></i>&nbsp;退款</button>';
                    }
                    if (row.status == '3') {
                        return '<button class="btn btn-outline btn-group" onclick="vm.restore(' + row.id + ')"><i class="fa fa-info-circle"></i>&nbsp;恢复配送</button>';
                    }

                }
            },
            {label: '客户名', name: 'customerName', index: 'customerName', width: 100},
            {label: '联系电话', name: 'phone', index: 'phone', width: 100},
            {label: '小区名', name: 'address', index: 'address', width: 100},

        ]
    });

    var mydata = [
        {
            id: "1",
            orderId: "DD0001",
            commodity: "酸奶",
            status: "0",
            customerName: "张三",
            phone: "177777777",
            address: "郑州市xxxx路xxx小区"
        },
        {
            id: "2",
            orderId: "DD0002",
            commodity: "酸奶",
            status: "1",
            customerName: "王五",
            phone: "177777777",
            address: "郑州市xxxx路xxx小区"
        },
        {
            id: "3",
            orderId: "DD0003",
            commodity: "酸奶",
            status: "2",
            customerName: "李四",
            phone: "177777777",
            address: "郑州市xxxx路xxx小区"
        },
        {
            id: "4",
            orderId: "DD0004",
            commodity: "酸奶",
            status: "3",
            customerName: "马六",
            phone: "177777777",
            address: "郑州市xxxx路xxx小区"
        },

    ];
    for (var i = 0; i <= mydata.length; i++) {
        jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
    }
});

let vm = new Vue({
    el: '#queryOrder',
    data: {
        tableDivFlag: true,
        q: {
            orderId: '',
            customerName: '',
            status: '',
        },
        statuss: [
            {
                label: '审核中',
                value: '0'
            },
            {
                label: '审核通过',
                value: '1'
            },
            {
                label: '配送中',
                value: '2'
            },
            {
                label: '暂停',
                value: '3'
            },

            ],
    },
    methods: {
        add() {

        },
        query() {

        },
        review() {

        },
        refund() {

        },
        pause() {

        },
        restore() {

        },
    },
    mounted() {

    },
    created() {

    },
});