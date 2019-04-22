$(function () {
    $("#jqGrid").Grid({
        url: '../ocgoodsattribute/list',
        colModel: [
			{label: 'attrId', name: 'attrId', index: 'attr_id', key: true, hidden: true},
			{label: '属性sku', name: 'sku', index: 'sku', width: 80},
			{label: '商品ID', name: 'goodsId', index: 'goods_id', width: 80},
			{label: '商品原价格', name: 'specPrice', index: 'spec_price', width: 80},
			{label: '市场价', name: 'specMarketPrice', index: 'spec_market_price', width: 80},
			{label: '促销价', name: 'specPromotionPrice', index: 'spec_promotion_price', width: 80},
			{label: '会员价', name: 'specMemberPrice', index: 'spec_member_price', width: 80},
			{label: '商品库存', name: 'specStock', index: 'spec_stock', width: 80},
			{label: '店铺ID', name: 'shopId', index: 'shop_id', width: 80},
			{label: '属性值id', name: 'specIds', index: 'spec_ids', width: 80},
			{label: '属性值名称', name: 'specName', index: 'spec_name', width: 80},
			{label: '属性值对应数据值', name: 'specValueDatas', index: 'spec_value_datas', width: 80},
			{label: '排序', name: 'sort', index: 'sort', width: 80},
			{label: '创建时间', name: 'createTime', index: 'create_time', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocGoodsAttribute: {},
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
			vm.ocGoodsAttribute = {};
		},
		update: function (event) {
            let attrId = getSelectedRow("#jqGrid");
			if (attrId == null) {
				return;
			}
			vm.showList = false;
            vm.title = "修改";

            vm.getInfo(attrId)
		},
		saveOrUpdate: function (event) {
            let url = vm.ocGoodsAttribute.attrId == null ? "../ocgoodsattribute/save" : "../ocgoodsattribute/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocGoodsAttribute),
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
            let attrIds = getSelectedRows("#jqGrid");
			if (attrIds == null){
				return;
			}

			confirm('确定要删除选中的记录？', function () {
                Ajax.request({
				    url: "../ocgoodsattribute/delete",
                    params: JSON.stringify(attrIds),
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
		getInfo: function(attrId){
            Ajax.request({
                url: "../ocgoodsattribute/info/"+attrId,
                async: true,
                successCallback: function (r) {
                    vm.ocGoodsAttribute = r.ocGoodsAttribute;
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