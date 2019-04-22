$(function () {
    $("#jqGrid").Grid({
        url: '../ocgoodsbrand/list',
        colModel: [
			{label: 'brandId', name: 'brandId', index: 'brand_id', key: true, hidden: true},
			{label: '店铺ID', name: 'shopId', index: 'shop_id', width: 80},
			{label: '品牌名称', name: 'brandName', index: 'brand_name', width: 80},
			{label: '品牌首字母', name: 'brandInitial', index: 'brand_initial', width: 80},
			{label: '图片id', name: 'cover', index: 'cover', width: 80},
			{label: '图片', name: 'brandPic', index: 'brand_pic', width: 80},
			{label: '推荐，0为否，1为是，默认为0', name: 'brandRecommend', index: 'brand_recommend', width: 80},
			{label: '', name: 'sort', index: 'sort', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocGoodsBrand: {},
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
			vm.ocGoodsBrand = {};
		},
		update: function (event) {
            let brandId = getSelectedRow("#jqGrid");
			if (brandId == null) {
				return;
			}
			vm.showList = false;
            vm.title = "修改";

            vm.getInfo(brandId)
		},
		saveOrUpdate: function (event) {
            let url = vm.ocGoodsBrand.brandId == null ? "../ocgoodsbrand/save" : "../ocgoodsbrand/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocGoodsBrand),
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
            let brandIds = getSelectedRows("#jqGrid");
			if (brandIds == null){
				return;
			}

			confirm('确定要删除选中的记录？', function () {
                Ajax.request({
				    url: "../ocgoodsbrand/delete",
                    params: JSON.stringify(brandIds),
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
		getInfo: function(brandId){
            Ajax.request({
                url: "../ocgoodsbrand/info/"+brandId,
                async: true,
                successCallback: function (r) {
                    vm.ocGoodsBrand = r.ocGoodsBrand;
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