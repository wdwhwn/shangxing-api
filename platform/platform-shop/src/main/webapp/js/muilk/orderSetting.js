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
        //url: url,
        rownumbers: true,
        datatype: "json",
        rowNum: 10,
        rowList: [10, 20, 30],
        colModel: [
            {label: 'id', name: 'id', index: 'id', key: true, hidden: true},
            {label: '姓名', name: 'name', index: 'name', width: 100},
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

    ];
    for (var i = 0; i <= mydata.length; i++) {
        jQuery("#jqGrid").jqGrid('addRowData', i + 1, mydata[i]);
    }
});

let vm = new Vue({
    el: '#orderSetting',
    data: {
        title: '',
        paySource: '微信',
        closeTime: '15',
        closeTime2: '',
        closeTimeShow: false,
        recivShow: false,
        reciv: '10',
        reciv2: '',
        tableData: [{id: '1', code: 'daily', rule: '每日送', remake: ''},
            {id: '2', code: 'odd', rule: '单日送', remake: ''},
            {id: '3', code: 'two', rule: '双日送', remake: ''},
            {id: '4', code: 'three', rule: '三日送', remake: ''},
            {id: '5', code: 'workday', rule: '工作日送', remake: ''},
            {id: '6', code: 'weekend', rule: '周末送', remake: ''},
        ],
        search: '',
        form: {
            id: '',
            code: '',
            rule: '',
            remake: '',
        },
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',

    },
    methods: {
        closeTimeChange(value) {
            if (value == "自定义") {
                vm.closeTimeShow = true;
                vm.recivShow = true;
            } else {
                vm.closeTimeShow = false;
                vm.recivShow = false;
            }
        },
        save() {
            vm.$notify({
                title: '成功',
                message: '保存成功!',
                type: 'success'
            });
        },
        handleEdit(index, row) {
            vm.dialogFormVisible = true;
            vm.form = row;

        },
        handleDelete(index, row) {
            vm.tableData.splice(index,1);
            vm.$notify({
                title: '成功',
                message: '删除成功!',
                type: 'success'
            });
        },
        add() {
            vm.dialogFormVisible = true;
            vm.form = {
                id: '',
                code: '',
                rule: '',
                remake: '',
            }
        },
        addSubmit() {
            let obj = {
                id: '',
                code: '',
                rule: '',
                remake: '',
            };
            let form = vm.form;
            if (form.id) {
                for (let i = 0; i < vm.tableData.length; i++) {
                    if (form.id == vm.tableData[i].id) {
                        vm.tableData[i] = form;
                        vm.dialogFormVisible = false;
                        vm.$notify({
                            title: '成功',
                            message: '修改成功!',
                            type: 'success'
                        });
                        return;
                    }
                }
            }

            let id = parseInt(vm.tableData[vm.tableData.length - 1].id);
            obj.id = id + 1 + "";
            obj.code = form.code;
            obj.rule = form.rule;
            obj.remake = form.remake;
            vm.tableData.push(obj);
            vm.dialogFormVisible = false;
            vm.$notify({
                title: '成功',
                message: '保存成功!',
                type: 'success'
            });
        },
    },
    created: function () {
        let vue = this;

    },
    mounted() {

    }
});