<template>
    <div class="mui-numbox" data-numbox-min="1" :data-number-max="max" :style="myStyle">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input type="number" class="mui-input-numbox" :value="initcount" ref="num" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
            myStyle:{}
        }
    },
    mounted(){
        mui('.mui-numbox').numbox()//初始化数字选择框
        if(this.$props.size==='min'){
            this.myStyle={height:'25px',margin:'0 10px 0px 10px'}  //设置数字框尺寸
        }
    },
    props:['initcount','max','goodsid','size'],  //监听父组件传递过来的值
    watch:{//监听父组件传递过来的max值
    'max'(newVal){
        mui('.mui-numbox').numbox().setOption('max',newVal) //设置numbox的最大值
    }
    }
}
</script>