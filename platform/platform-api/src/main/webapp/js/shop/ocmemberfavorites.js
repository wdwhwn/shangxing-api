$(function () {
    $("#jqGrid").Grid({
        url: '../ocmemberfavorites/list',
        colModel: [
			{label: 'id', name: 'id', index: 'id', key: true, hidden: true},
			{label: '会员ID', name: 'mid', index: 'mid', width: 80},
			{label: '商品或店铺ID', name: 'goodsId', index: 'goods_id', width: 80},
			{label: '类型:goods为商品,shop为店铺,默认为商品', name: 'favType', index: 'fav_type', width: 80},
			{label: '店铺ID', name: 'shopId', index: 'shop_id', width: 80},
			{label: '店铺名称', name: 'shopName', index: 'shop_name', width: 80},
			{label: '店铺logo', name: 'shopLogo', index: 'shop_logo', width: 80},
			{label: '商品名称', name: 'goodsName', index: 'goods_name', width: 80},
			{label: '', name: 'imgIdArray', index: 'img_id_array', width: 80},
			{label: '商品收藏时价格', name: 'goodsPrice', index: 'goods_price', width: 80},
			{label: '收藏备注', name: 'favMsg', index: 'fav_msg', width: 80},
			{label: '收藏时间', name: 'createTime', index: 'create_time', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocMemberFavorites: {},
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
			vm.ocMemberFavorites = {};
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
            let url = vm.ocMemberFavorites.id == null ? "../ocmemberfavorites/save" : "../ocmemberfavorites/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocMemberFavorites),
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
				    url: "../ocmemberfavorites/delete",
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
                url: "../ocmemberfavorites/info/"+id,
                async: true,
                successCallback: function (r) {
                    vm.ocMemberFavorites = r.ocMemberFavorites;
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