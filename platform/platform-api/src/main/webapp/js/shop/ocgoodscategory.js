$(function () {
    $("#jqGrid").Grid({
        url: '../ocgoodscategory/list',
        colModel: [
			{label: 'id', name: 'id', index: 'id', key: true, hidden: true},
			{label: '父类ID', name: 'pid', index: 'pid', width: 80},
			{label: '分类名称', name: 'categoryName', index: 'category_name', width: 80},
			{label: '商品分类简称', name: 'shortName', index: 'short_name', width: 80},
			{label: '图片', name: 'categoryPic', index: 'category_pic', width: 80},
			{label: '图片ID', name: 'cover', index: 'cover', width: 80},
			{label: '创建时间', name: 'createTime', index: 'create_time', width: 80},
			{label: '修改时间', name: 'updateTime', index: 'update_time', width: 80},
			{label: '状态,0：隐藏，1：显示', name: 'isVisible', index: 'is_visible', width: 80},
			{label: '层级级别', name: 'level', index: 'level', width: 80},
			{label: '排序', name: 'sort', index: 'sort', width: 80},
			{label: '是否展开显示', name: 'open', index: 'open', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocGoodsCategory: {},
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
			vm.ocGoodsCategory = {};
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
            let url = vm.ocGoodsCategory.id == null ? "../ocgoodscategory/save" : "../ocgoodscategory/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocGoodsCategory),
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
				    url: "../ocgoodscategory/delete",
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
                url: "../ocgoodscategory/info/"+id,
                async: true,
                successCallback: function (r) {
                    vm.ocGoodsCategory = r.ocGoodsCategory;
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