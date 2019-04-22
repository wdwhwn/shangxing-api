$(function () {
    $("#jqGrid").Grid({
        url: '../ocshop/list',
        colModel: [
			{label: 'shopId', name: 'shopId', index: 'shop_id', key: true, hidden: true},
			{label: '店铺名称', name: 'shopName', index: 'shop_name', width: 80},
			{label: '店铺类型等级', name: 'shopType', index: 'shop_type', width: 80},
			{label: '会员id', name: 'mid', index: 'mid', width: 80},
			{label: '店铺分类', name: 'shopGroupId', index: 'shop_group_id', width: 80},
			{label: '店铺公司名称', name: 'shopCompanyName', index: 'shop_company_name', width: 80},
			{label: '所在省ID', name: 'provinceId', index: 'province_id', width: 80},
			{label: '所在城市ID', name: 'cityId', index: 'city_id', width: 80},
			{label: '所在区ID', name: 'districtId', index: 'district_id', width: 80},
			{label: '省市区', name: 'locationplace', index: 'locationplace', width: 80},
			{label: '详细地区', name: 'shopAddress', index: 'shop_address', width: 80},
			{label: '邮政编码', name: 'shopZip', index: 'shop_zip', width: 80},
			{label: '店铺状态，0关闭，1开启，2审核中', name: 'shopState', index: 'shop_state', width: 80},
			{label: '店铺关闭原因', name: 'shopCloseInfo', index: 'shop_close_info', width: 80},
			{label: '店铺排序', name: 'shopSort', index: 'shop_sort', width: 80},
			{label: '店铺logo', name: 'shopLogo', index: 'shop_logo', width: 80},
			{label: '店铺横幅', name: 'shopBanner', index: 'shop_banner', width: 80},
			{label: '店铺头像', name: 'shopAvatar', index: 'shop_avatar', width: 80},
			{label: '店铺seo关键字', name: 'shopKeywords', index: 'shop_keywords', width: 80},
			{label: '店铺seo描述', name: 'shopDescription', index: 'shop_description', width: 80},
			{label: 'QQ', name: 'shopQq', index: 'shop_qq', width: 80},
			{label: '阿里旺旺', name: 'shopWw', index: 'shop_ww', width: 80},
			{label: '商家电话', name: 'shopPhone', index: 'shop_phone', width: 80},
			{label: '店铺二级域名', name: 'shopDomain', index: 'shop_domain', width: 80},
			{label: '二级域名修改次数', name: 'shopDomainTimes', index: 'shop_domain_times', width: 80},
			{label: '推荐，0为否，1为是，默认为0', name: 'shopRecommend', index: 'shop_recommend', width: 80},
			{label: '店铺信用', name: 'shopCredit', index: 'shop_credit', width: 80},
			{label: '描述相符度分数', name: 'shopDesccredit', index: 'shop_desccredit', width: 80},
			{label: '服务态度分数', name: 'shopServicecredit', index: 'shop_servicecredit', width: 80},
			{label: '发货速度分数', name: 'shopDeliverycredit', index: 'shop_deliverycredit', width: 80},
			{label: '店铺收藏数量', name: 'shopCollect', index: 'shop_collect', width: 80},
			{label: '店铺印章', name: 'shopStamp', index: 'shop_stamp', width: 80},
			{label: '打印订单页面下方说明文字', name: 'shopPrintdesc', index: 'shop_printdesc', width: 80},
			{label: '店铺销售额（不计算退款）', name: 'shopSales', index: 'shop_sales', width: 80},
			{label: '店铺账户余额', name: 'shopAccount', index: 'shop_account', width: 80},
			{label: '店铺可提现金额', name: 'shopCash', index: 'shop_cash', width: 80},
			{label: '工作时间', name: 'shopWorkingtime', index: 'shop_workingtime', width: 80},
			{label: '商铺名称', name: 'liveStoreName', index: 'live_store_name', width: 80},
			{label: '商家地址', name: 'liveStoreAddress', index: 'live_store_address', width: 80},
			{label: '商铺电话', name: 'liveStoreTel', index: 'live_store_tel', width: 80},
			{label: '公交线路', name: 'liveStoreBus', index: 'live_store_bus', width: 80},
			{label: '商家兑换码前缀', name: 'shopVrcodePrefix', index: 'shop_vrcode_prefix', width: 80},
			{label: '7天退换', name: 'storeQtian', index: 'store_qtian', width: 80},
			{label: '正品保障', name: 'shopZhping', index: 'shop_zhping', width: 80},
			{label: '两小时发货', name: 'shopErxiaoshi', index: 'shop_erxiaoshi', width: 80},
			{label: '退货承诺', name: 'shopTuihuo', index: 'shop_tuihuo', width: 80},
			{label: '试用中心', name: 'shopShiyong', index: 'shop_shiyong', width: 80},
			{label: '实体验证', name: 'shopShiti', index: 'shop_shiti', width: 80},
			{label: '消协保证', name: 'shopXiaoxie', index: 'shop_xiaoxie', width: 80},
			{label: '货到付款', name: 'shopHuodaofk', index: 'shop_huodaofk', width: 80},
			{label: '商家配送时间', name: 'shopFreeTime', index: 'shop_free_time', width: 80},
			{label: '店铺默认配送区域', name: 'shopRegion', index: 'shop_region', width: 80},
			{label: '推荐招商员用户id', name: 'recommendUid', index: 'recommend_uid', width: 80},
			{label: '店铺公众号', name: 'shopQrcode', index: 'shop_qrcode', width: 80},
			{label: '店铺时间', name: 'shopCreateTime', index: 'shop_create_time', width: 80},
			{label: '店铺关闭时间', name: 'shopEndTime', index: 'shop_end_time', width: 80},
			{label: '创建日期', name: 'createTime', index: 'create_time', width: 80},
			{label: '修改日期', name: 'updateTime', index: 'update_time', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocShop: {},
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
			vm.ocShop = {};
		},
		update: function (event) {
            let shopId = getSelectedRow("#jqGrid");
			if (shopId == null) {
				return;
			}
			vm.showList = false;
            vm.title = "修改";

            vm.getInfo(shopId)
		},
		saveOrUpdate: function (event) {
            let url = vm.ocShop.shopId == null ? "../ocshop/save" : "../ocshop/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocShop),
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
            let shopIds = getSelectedRows("#jqGrid");
			if (shopIds == null){
				return;
			}

			confirm('确定要删除选中的记录？', function () {
                Ajax.request({
				    url: "../ocshop/delete",
                    params: JSON.stringify(shopIds),
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
		getInfo: function(shopId){
            Ajax.request({
                url: "../ocshop/info/"+shopId,
                async: true,
                successCallback: function (r) {
                    vm.ocShop = r.ocShop;
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