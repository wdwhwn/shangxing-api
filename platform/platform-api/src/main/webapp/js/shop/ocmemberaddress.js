$(function () {
    $("#jqGrid").Grid({
        url: '../ocmemberaddress/list',
        colModel: [
			{label: 'id', name: 'id', index: 'id', key: true, hidden: true},
			{label: '当前用户id', name: 'mid', index: 'mid', width: 80},
			{label: '收货人名称', name: 'name', index: 'name', width: 80},
			{label: '手机', name: 'mobile', index: 'mobile', width: 80},
			{label: '省', name: 'provinceId', index: 'province_id', width: 80},
			{label: '市', name: 'cityId', index: 'city_id', width: 80},
			{label: '区', name: 'districtId', index: 'district_id', width: 80},
			{label: '省市区', name: 'locationplace', index: 'locationplace', width: 80},
			{label: '具体收货地址', name: 'addressDetail', index: 'address_detail', width: 80},
			{label: '1:默认收货地址，0：非默认收货地址', name: 'isDefault', index: 'is_default', width: 80},
			{label: '创建时间', name: 'createTime', index: 'create_time', width: 80},
			{label: '修改时间', name: 'updateTime', index: 'update_time', width: 80},
			{label: '状态,1：显示，0：隐藏', name: 'status', index: 'status', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocMemberAddress: {},
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
			vm.ocMemberAddress = {};
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
            let url = vm.ocMemberAddress.id == null ? "../ocmemberaddress/save" : "../ocmemberaddress/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocMemberAddress),
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
				    url: "../ocmemberaddress/delete",
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
                url: "../ocmemberaddress/info/"+id,
                async: true,
                successCallback: function (r) {
                    vm.ocMemberAddress = r.ocMemberAddress;
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