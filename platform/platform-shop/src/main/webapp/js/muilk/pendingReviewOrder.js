var mydata;
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
        rownumbers: true,
        datatype: "json",
        rowNum: 10,
        rowList: [10, 20, 30],
        colModel: [
            {label: 'id', name: 'id', index: 'id', key: true, hien: true},
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
                label: '操作', width: 70, align: 'center', sortable: false, formatter: function (value, col, row) {
                    if (row.status == '0') {
                        return '<button class="btn btn-outline btn-info" onclick="vm.review(\'' + row.id  +'\' , \''+ row.orderId  +'\'  )"><i class="fa fa-info-circle"></i>&nbsp;审核</button>';
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

     mydata = [
        {
            id: "DD10001",
            orderId: "10001",
            commodity: "牛奶",
            status: "0",
            customerName: "张三",
            phone: "1555555",
            address: "郑州市东风路",
            NXFlag:true,
        },
        {
            id: "10002",
            orderId: "10002",
            commodity: "酸奶",
            status: "0",
            customerName: "王五",
            phone: "177777777",
            address: "郑州市未来路",NXFlag:false,
        },
        {
            id: "10003",
            orderId: "10003",
            commodity: "羊奶",
            status: "0",
            customerName: "李四",
            phone: "1666666",
            address: "郑州市农业路",NXFlag:true,
        },
        {
            id: "10004",
            orderId: "10004",
            commodity: "原味奶",
            status: "0",
            customerName: "马六",
            phone: "1888888",
            address: "郑州市花园路",NXFlag:false,
        },

    ];
    for (var i = 0; i <= mydata.length; i++) {
        jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
    }
});

let vm = new Vue({
    el: '#pendingReviewOrder',
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
        /*审核按钮model*/
        orderId:'',
        dialogTableVisible: false,
        dialogFormVisible: false,
        info:{},
    },
    methods: {
        add() {

        },
        query() {

        },
        review(id,orderId) {
            vm.dialogFormVisible = true;
            vm.orderId='订单号:'+orderId;
            for (let i = 0; i < mydata.length; i++) {
                if (mydata[i].id==id){
                    vm.info=mydata[i];
                }
            }
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