$(function () {
    $("#jqGrid").Grid({
        url: '../ocgoodsevaluate/list',
        colModel: [
			{label: 'id', name: 'id', index: 'id', key: true, hidden: true},
			{label: '订单ID', name: 'orderId', index: 'order_id', width: 80},
			{label: '订单编号', name: 'orderNo', index: 'order_no', width: 80},
			{label: '商品ID', name: 'goodsId', index: 'goods_id', width: 80},
			{label: '商品名称', name: 'goodsName', index: 'goods_name', width: 80},
			{label: '商品价格', name: 'goodsPrice', index: 'goods_price', width: 80},
			{label: '商品图片', name: 'goodsImage', index: 'goods_image', width: 80},
			{label: '店铺ID', name: 'shopId', index: 'shop_id', width: 80},
			{label: '店铺名称', name: 'shopName', index: 'shop_name', width: 80},
			{label: '评价内容', name: 'content', index: 'content', width: 80},
			{label: '评价图片', name: 'image', index: 'image', width: 80},
			{label: '解释内容', name: 'explainFirst', index: 'explain_first', width: 80},
			{label: '评价人名称', name: 'memberName', index: 'member_name', width: 80},
			{label: '评价人编号', name: 'mid', index: 'mid', width: 80},
			{label: '0表示不是 1表示是匿名评价', name: 'isAnonymous', index: 'is_anonymous', width: 80},
			{label: '1-5分', name: 'scores', index: 'scores', width: 80},
			{label: '追加评价内容', name: 'againContent', index: 'again_content', width: 80},
			{label: '追评评价图片', name: 'againImage', index: 'again_image', width: 80},
			{label: '追加解释内容', name: 'againExplain', index: 'again_explain', width: 80},
			{label: '1好评2中评3差评', name: 'explainType', index: 'explain_type', width: 80},
			{label: '1显示 0隐藏', name: 'isShow', index: 'is_show', width: 80},
			{label: '评价时间', name: 'addtime', index: 'addtime', width: 80},
			{label: '追加评价时间', name: 'againAddtime', index: 'again_addtime', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocGoodsEvaluate: {},
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
			vm.ocGoodsEvaluate = {};
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
            let url = vm.ocGoodsEvaluate.id == null ? "../ocgoodsevaluate/save" : "../ocgoodsevaluate/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocGoodsEvaluate),
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
				    url: "../ocgoodsevaluate/delete",
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
                url: "../ocgoodsevaluate/info/"+id,
                async: true,
                successCallback: function (r) {
                    vm.ocGoodsEvaluate = r.ocGoodsEvaluate;
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