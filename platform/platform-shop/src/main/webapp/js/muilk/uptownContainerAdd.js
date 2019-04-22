/**
 * 
 */
let uptownId = getQueryString("id");

let vm = new Vue({
	el:'#uptownContainerAddApp',
	data:{
		uptownContainer:{},
		ruleValidate: {
			position: [
                {required: true, message: '货柜位置不能为空', trigger: 'blur'},
                {min:2,message:'请输入最少2位'},{max:32,message:'请输入最多50位'}
            ],
            uptownName: [
                {required: true, message: '小区名称不能为空', trigger: 'blur'}
            ],
            containerSn: [
                {required: true, message: '货柜不能为空', trigger: 'blur'}
            ]
        },
        data1: [],
        targetKeys1: []
		
	},
	methods:{
		handleSubmit:function() {
			
		},
		close:function() {
			parent.layer.close(parseInt($("#layerIndexId").val()));
		},
		handleReset:function(){
			
		},
		getMockData () {
            let mockData = [];
            for (let i = 1; i <= 20; i++) {
                mockData.push({
                    key: i.toString(),
                    label: '货柜' + i,
                    description: '货柜' + i + '的描述信息',
                    disabled: Math.random() * 3 < 1
                });
            }
            return mockData;
        },
        getTargetKeys () {
            return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);
        },
        render1 (item) {
            return item.label;
        },
        handleChange1 (newTargetKeys, direction, moveKeys) {
            console.log(newTargetKeys);
            console.log(direction);
            console.log(moveKeys);
            this.targetKeys1 = newTargetKeys;
        }
	},
	create:function(){
		
	},
	mounted:function(){
		this.data1 = this.getMockData();
		//this.targetKeys1 = this.getTargetKeys();
	}
});