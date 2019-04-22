$(function () {
    $("#jqGrid").Grid({
        url: '../ocmemberbankaccount/list',
        colModel: [
			{label: 'id', name: 'id', index: 'id', key: true, hidden: true},
			{label: '会员id', name: 'mid', index: 'mid', width: 80},
			{label: '支行信息', name: 'branchBankName', index: 'branch_bank_name', width: 80},
			{label: '真实姓名', name: 'realname', index: 'realname', width: 80},
			{label: '银行账号', name: 'accountNumber', index: 'account_number', width: 80},
			{label: '手机号', name: 'mobile', index: 'mobile', width: 80},
			{label: '是否默认账号', name: 'isDefault', index: 'is_default', width: 80},
			{label: '创建日期', name: 'createTime', index: 'create_time', width: 80},
			{label: '修改日期', name: 'updateTime', index: 'update_time', width: 80},
			{label: '账户类型，1：银行卡，2：微信，3：支付宝', name: 'accountType', index: 'account_type', width: 80},
			{label: '账户类型名称：银行卡，微信，支付宝', name: 'accountTypeName', index: 'account_type_name', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocMemberBankAccount: {},
		ruleValidate: {
			name: [
				{required: true, message: '名称不能为空', trigger: 'blur'}
			]
		},
		q: {
		    name: ''
		}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function () {
			vm.showList = false;
			vm.title = "新增";
			vm.ocMemberBankAccount = {};
		},
		update: function (event) {
            let id = getSelectedRow("#jqGrid");
			if (id == null) {
				return;
			}
			vm.showList = false;
            vm.title = "修改";

            vm.getInfo(id)
		},
		saveOrUpdate: function (event) {
            let url = vm.ocMemberBankAccount.id == null ? "../ocmemberbankaccount/save" : "../ocmemberbankaccount/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocMemberBankAccount),
                type: "POST",
			    contentType: "application/json",
                successCallback: function (r) {
                    alert('操作成功', function (index) {
                        vm.reload();
                    });
                }
			});
		},
		del: function (event) {
            let ids = getSelectedRows("#jqGrid");
			if (ids == null){
				return;
			}

			confirm('确定要删除选中的记录？', function () {
                Ajax.request({
				    url: "../ocmemberbankaccount/delete",
                    params: JSON.stringify(ids),
                    type: "POST",
				    contentType: "application/json",
                    successCallback: function () {
                        alert('操作成功', function (index) {
                            vm.reload();
                        });
					}
				});
			});
		},
		getInfo: function(id){
            Ajax.request({
                url: "../ocmemberbankaccount/info/"+id,
                async: true,
                successCallback: function (r) {
                    vm.ocMemberBankAccount = r.ocMemberBankAccount;
                }
            });
		},
		reload: function (event) {
			vm.showList = true;
            let page = $("#jqGrid").jqGrid('getGridParam', 'page');
			$("#jqGrid").jqGrid('setGridParam', {
                postData: {'name': vm.q.name},
                page: page
            }).trigger("reloadGrid");
            vm.handleReset('formValidate');
		},
        reloadSearch: function() {
            vm.q = {
                name: ''
            }
            vm.reload();
        },
        handleSubmit: function (name) {
            handleSubmitValidate(this, name, function () {
                vm.saveOrUpdate()
            });
        },
        handleReset: function (name) {
            handleResetForm(this, name);
        }
	}
});