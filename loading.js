import loadComponent from './../plugin/loading.vue'
export default{
	install:function(Vue,options){
		let loadPlugin=Vue.extend(loadComponent);
		let vm;
		if(!vm){
			/*vm=new loadPlugin({
				el:document.createElement('div')
			});
			document.body.appendChild(vm.$el);*/
			//或
			vm=new loadPlugin().$mount();
			document.body.appendChild(vm.$el);

		}
		let loading={
			show:function(){
				vm.show=true
			},
			hide:function(){
				vm.show=false
			}
		}
		//Vue.prototype.$loading=loading;
		//或者
		Vue.mixin({
			created:function(){
				this.$loading=loading
			}
		})
	}
}