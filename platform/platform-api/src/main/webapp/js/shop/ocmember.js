$(function () {
    $("#jqGrid").Grid({
        url: '../ocmember/list',
        colModel: [
			{label: 'mid', name: 'mid', index: 'mid', key: true, hidden: true},
			{label: '传播ID', name: 'tid', index: 'tid', width: 80},
			{label: '上线ID', name: 'pid', index: 'pid', width: 80},
			{label: '手机号', name: 'mobile', index: 'mobile', width: 80},
			{label: '推荐码', name: 'invitecode', index: 'invitecode', width: 80},
			{label: 'app唯一用户标识', name: 'token', index: 'token', width: 80},
			{label: '密码', name: 'password', index: 'password', width: 80},
			{label: '店铺ID', name: 'shopId', index: 'shop_id', width: 80},
			{label: '前台用户名', name: 'username', index: 'username', width: 80},
			{label: '真实姓名', name: 'realname', index: 'realname', width: 80},
			{label: '小程序openid', name: 'miniopenid', index: 'miniopenid', width: 80},
			{label: '会员等级ID', name: 'memberLevel', index: 'member_level', width: 80},
			{label: '用户等级', name: 'levelId', index: 'level_id', width: 80},
			{label: '', name: 'levelName', index: 'level_name', width: 80},
			{label: '在平台的收益-可以提现操作', name: 'profit', index: 'profit', width: 80},
			{label: '余额', name: 'money', index: 'money', width: 80},
			{label: '备注', name: 'memo', index: 'memo', width: 80},
			{label: '所在省ID', name: 'provinceId', index: 'province_id', width: 80},
			{label: '所在城市ID', name: 'cityId', index: 'city_id', width: 80},
			{label: '所在区ID', name: 'districtId', index: 'district_id', width: 80},
			{label: '省市区', name: 'locationplace', index: 'locationplace', width: 80},
			{label: '镇乡：非必填', name: 'town', index: 'town', width: 80},
			{label: '乡：非必填', name: 'village', index: 'village', width: 80},
			{label: '积分,保留字段', name: 'point', index: 'point', width: 80},
			{label: '头像图片地址', name: 'headUrl', index: 'head_url', width: 80},
			{label: '邮箱', name: 'email', index: 'email', width: 80},
			{label: '0：男，1：女', name: 'sex', index: 'sex', width: 80},
			{label: '性别别名', name: 'sexCn', index: 'sex_cn', width: 80},
			{label: '注册时间', name: 'createTime', index: 'create_time', width: 80},
			{label: '更新时间', name: 'updateTime', index: 'update_time', width: 80},
			{label: '状态', name: 'status', index: 'status', width: 80},
			{label: '', name: 'qq', index: 'qq', width: 80},
			{label: '公众号，小程序唯一标识-unionid', name: 'unionid', index: 'unionid', width: 80},
			{label: '微信用户昵称', name: 'nickname', index: 'nickname', width: 80},
			{label: '微信用户：access_token', name: 'accessToken', index: 'access_token', width: 80},
			{label: '微信用户头像', name: 'headimgurl', index: 'headimgurl', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocMember: {},
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
			vm.ocMember = {};
		},
		update: function (event) {
            let mid = getSelectedRow("#jqGrid");
			if (mid == null) {
				return;
			}
			vm.showList = false;
            vm.title = "修改";

            vm.getInfo(mid)
		},
		saveOrUpdate: function (event) {
            let url = vm.ocMember.mid == null ? "../ocmember/save" : "../ocmember/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocMember),
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
            let mids = getSelectedRows("#jqGrid");
			if (mids == null){
				return;
			}

			confirm('确定要删除选中的记录？', function () {
                Ajax.request({
				    url: "../ocmember/delete",
                    params: JSON.stringify(mids),
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
		getInfo: function(mid){
            Ajax.request({
                url: "../ocmember/info/"+mid,
                async: true,
                successCallback: function (r) {
                    vm.ocMember = r.ocMember;
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