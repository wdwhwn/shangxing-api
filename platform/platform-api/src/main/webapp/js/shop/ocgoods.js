$(function () {
    $("#jqGrid").Grid({
        url: '../ocgoods/list',
        colModel: [
			{label: 'goodsId', name: 'goodsId', index: 'goods_id', key: true, hidden: true},
			{label: '商品名称', name: 'goodsName', index: 'goods_name', width: 80},
			{label: '供货商id', name: 'supplierId', index: 'supplier_id', width: 80},
			{label: '店铺id', name: 'shopId', index: 'shop_id', width: 80},
			{label: '商品分类id', name: 'categoryId', index: 'category_id', width: 80},
			{label: '一级分类id', name: 'categoryId1', index: 'category_id_1', width: 80},
			{label: '二级分类id', name: 'categoryId2', index: 'category_id_2', width: 80},
			{label: '三级分类id', name: 'categoryId3', index: 'category_id_3', width: 80},
			{label: '品牌id', name: 'brandId', index: 'brand_id', width: 80},
			{label: '店铺分类id 首尾用,隔开', name: 'groupIdArray', index: 'group_id_array', width: 80},
			{label: '商品促销价格', name: 'promotionPrice', index: 'promotion_price', width: 80},
			{label: '促销类型 0无促销，1团购，2限时折扣', name: 'promotionType', index: 'promotion_type', width: 80},
			{label: '促销活动ID', name: 'discountId', index: 'discount_id', width: 80},
			{label: '专场活动ID', name: 'festivalId', index: 'festival_id', width: 80},
			{label: '实物或虚拟商品标志 1实物商品 0 虚拟商品 2 F码商品', name: 'goodsType', index: 'goods_type', width: 80},
			{label: '市场价', name: 'marketPrice', index: 'market_price', width: 80},
			{label: '零售价', name: 'price', index: 'price', width: 80},
			{label: '供货商价格', name: 'supplierPrice', index: 'supplier_price', width: 80},
			{label: '会员价', name: 'memberPrice', index: 'member_price', width: 80},
			{label: '成本价', name: 'costPrice', index: 'cost_price', width: 80},
			{label: '余额使用限制', name: 'limitmoney', index: 'limitmoney', width: 80},
			{label: '积分兑换类型 0 非积分兑换 1 只能积分兑换 ', name: 'pointExchangeType', index: 'point_exchange_type', width: 80},
			{label: '积分兑换', name: 'pointExchange', index: 'point_exchange', width: 80},
			{label: '购买商品赠送积分', name: 'givePoint', index: 'give_point', width: 80},
			{label: '参与会员折扣', name: 'isMemberDiscount', index: 'is_member_discount', width: 80},
			{label: '运费 0为免运费', name: 'shippingFee', index: 'shipping_fee', width: 80},
			{label: '售卖区域id 物流模板id  ns_order_shipping_fee 表id', name: 'shippingFeeId', index: 'shipping_fee_id', width: 80},
			{label: '商品库存', name: 'stock', index: 'stock', width: 80},
			{label: '限购 0 不限购', name: 'maxBuy', index: 'max_buy', width: 80},
			{label: '商品点击数量', name: 'clicks', index: 'clicks', width: 80},
			{label: '库存预警值', name: 'minStockAlarm', index: 'min_stock_alarm', width: 80},
			{label: '销售数量', name: 'sales', index: 'sales', width: 80},
			{label: '收藏数量', name: 'collects', index: 'collects', width: 80},
			{label: '好评星级', name: 'star', index: 'star', width: 80},
			{label: '评价数', name: 'evaluates', index: 'evaluates', width: 80},
			{label: '分享数', name: 'shares', index: 'shares', width: 80},
			{label: '一级地区id', name: 'provinceId', index: 'province_id', width: 80},
			{label: '二级地区id', name: 'cityId', index: 'city_id', width: 80},
			{label: '三级地区id', name: 'districtId', index: 'district_id', width: 80},
			{label: '所在街道ID', name: 'streetId', index: 'street_id', width: 80},
			{label: '归属地', name: 'locationplace', index: 'locationplace', width: 80},
			{label: '商品主图', name: 'picture', index: 'picture', width: 80},
			{label: '商品关键词', name: 'keywords', index: 'keywords', width: 80},
			{label: '商品简介，促销语', name: 'introduction', index: 'introduction', width: 80},
			{label: '商品详情', name: 'description', index: 'description', width: 80},
			{label: '商品二维码', name: 'qrcode', index: 'QRcode', width: 80},
			{label: '视频地址', name: 'videourl', index: 'videoUrl', width: 80},
			{label: '商家编号', name: 'code', index: 'code', width: 80},
			{label: '页面不显示库存', name: 'isStockVisible', index: 'is_stock_visible', width: 80},
			{label: '是否热销商品', name: 'isHot', index: 'is_hot', width: 80},
			{label: '是否推荐', name: 'isRecommend', index: 'is_recommend', width: 80},
			{label: '是否新品', name: 'isNew', index: 'is_new', width: 80},
			{label: '', name: 'isPreSale', index: 'is_pre_sale', width: 80},
			{label: '是否开具增值税发票 1是，0否', name: 'isBill', index: 'is_bill', width: 80},
			{label: '商品状态 0下架，1正常，10违规（禁售）', name: 'status', index: 'status', width: 80},
			{label: '排序', name: 'sort', index: 'sort', width: 80},
			{label: '商品图片序列', name: 'imgIdArray', index: 'img_id_array', width: 80},
			{label: '商品sku应用图片列表  属性,属性值，图片ID', name: 'skuImgArray', index: 'sku_img_array', width: 80},
			{label: '实物与描述相符（根据评价计算）', name: 'matchPoint', index: 'match_point', width: 80},
			{label: '实物与描述相符（根据评价计算）百分比', name: 'matchRatio', index: 'match_ratio', width: 80},
			{label: '实际销量', name: 'realSales', index: 'real_sales', width: 80},
			{label: '商品类型', name: 'goodsAttributeId', index: 'goods_attribute_id', width: 80},
			{label: '商品规格', name: 'goodsSpecFormat', index: 'goods_spec_format', width: 80},
			{label: '商品重量', name: 'goodsWeight', index: 'goods_weight', width: 80},
			{label: '商品体积', name: 'goodsVolume', index: 'goods_volume', width: 80},
			{label: '计价方式1.重量2.体积3.计件', name: 'shippingFeeType', index: 'shipping_fee_type', width: 80},
			{label: '', name: 'extendCategoryId', index: 'extend_category_id', width: 80},
			{label: '', name: 'extendCategoryId1', index: 'extend_category_id_1', width: 80},
			{label: '', name: 'extendCategoryId2', index: 'extend_category_id_2', width: 80},
			{label: '', name: 'extendCategoryId3', index: 'extend_category_id_3', width: 80},
			{label: '上下架时间', name: 'saleDate', index: 'sale_date', width: 80},
			{label: '商品添加时间', name: 'createTime', index: 'create_time', width: 80},
			{label: '商品编辑时间', name: 'updateTime', index: 'update_time', width: 80},
			{label: '最少买几件', name: 'minBuy', index: 'min_buy', width: 80},
			{label: '虚拟商品类型id', name: 'virtualGoodsTypeId', index: 'virtual_goods_type_id', width: 80},
			{label: '生产日期', name: 'productionDate', index: 'production_date', width: 80},
			{label: '保质期', name: 'shelfLife', index: 'shelf_life', width: 80},
			{label: '商品视频地址，不为空时前台显示视频', name: 'goodsVideoAddress', index: 'goods_video_address', width: 80},
			{label: '积分抵现最大可用积分数 0为不可使用', name: 'maxUsePoint', index: 'max_use_point', width: 80},
			{label: '是否支持预售', name: 'isOpenPresell', index: 'is_open_presell', width: 80},
			{label: '预售发货时间', name: 'presellTime', index: 'presell_time', width: 80},
			{label: '预售发货天数', name: 'presellDay', index: 'presell_day', width: 80},
			{label: '预售发货方式1. 按照预售发货时间 2.按照预售发货天数', name: 'presellDeliveryType', index: 'presell_delivery_type', width: 80},
			{label: '预售金额', name: 'presellPrice', index: 'presell_price', width: 80},
			{label: '商品单位', name: 'goodsUnit', index: 'goods_unit', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		ocGoods: {},
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
			vm.ocGoods = {};
		},
		update: function (event) {
            let goodsId = getSelectedRow("#jqGrid");
			if (goodsId == null) {
				return;
			}
			vm.showList = false;
            vm.title = "修改";

            vm.getInfo(goodsId)
		},
		saveOrUpdate: function (event) {
            let url = vm.ocGoods.goodsId == null ? "../ocgoods/save" : "../ocgoods/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.ocGoods),
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
            let goodsIds = getSelectedRows("#jqGrid");
			if (goodsIds == null){
				return;
			}

			confirm('确定要删除选中的记录？', function () {
                Ajax.request({
				    url: "../ocgoods/delete",
                    params: JSON.stringify(goodsIds),
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
		getInfo: function(goodsId){
            Ajax.request({
                url: "../ocgoods/info/"+goodsId,
                async: true,
                successCallback: function (r) {
                    vm.ocGoods = r.ocGoods;
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