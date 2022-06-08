<template>
  <div id="box">
    <div v-if="list.length === 0">购物车为空</div>
    <div v-else>
      <input
        type="checkbox"
        @change="handleAllcheck"
        v-model="Allchecked"
      />全选：
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div>
            <input
              type="checkbox"
              v-model="checkGroup"
              :value="item"
              @change="handlechange"
            />
          </div>
          <img :src="item.imgUrl" />
          <div class="shoppinggoods">
            <div>商品名：{{ item.name }}</div>
            <div>价格：{{ item.price }}</div>
          </div>
          <div class="quantity">
            <button @click="item.number--" :disabled="item.number == 1">
              -
            </button>
            {{ item.number }}
            <button
              @click="item.number++"
              :disabled="item.number == item.limit"
            >
              +
            </button>
          </div>
          <div class="delete">
            <button @click="handleDelete(index, item.id)">删除</button>
          </div>
        </li>
      </ul>
      <div style="height:40px;background:#d6d6d7">
        <div class="total">总金额&nbsp;{{ sum() }}
        <div id="box">
		<button @click="handleisshow" class="jiesuan">结算</button>
		<div id="overlay" v-show="isShow" @click="isShow=false" >
			<div id="center" @click.stop>
				<div>银行卡支付</div>
				<div>微信支付</div>
				<div>支付宝支付</div>
				<div><button>确认支付</button></div>
			</div>
		</div>
	</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkGroup: [],
      Allchecked: false,
      list: [
        {
          name: "包包",
          price: 4891,
          number: 1,
          id: 1,
          limit: 5,
          imgUrl: require("../assets/bag/2.png"),
        },
        {
          name: "戒指",
          price: 4620,
          number: 1,
          id: 2,
          limit: 5,
          imgUrl: require("../assets/ring/4.png"),
        },
        {
          name: "戒指",
          price: 7810,
          number: 1,
          id: 3,
          limit: 5,
          imgUrl: require("../assets/ring/6.png"),
        },
        {
          name: "项链",
          price: 9620,
          number: 1,
          id: 3,
          limit: 5,
          imgUrl: require("../assets/good/20.png"),
        },
        {
          name: "戒指",
          price: 4890,
          number: 1,
          id: 3,
          limit: 5,
          imgUrl: require("../assets/ring/7.png"),
        },
        {
          name: "包包",
          price: 9621,
          number: 1,
          id: 3,
          limit: 5,
          imgUrl: require("../assets/bag/1.png"),
        },
      ],
      isShow:false,
    };
  },
  methods: {
    sum() {
      var total = 0;
      this.checkGroup.forEach((item) => {
        total += item.price * item.number;
      });
      return total;
    },
    handleDelete(index, deleteid) {
      console.log(deleteid);
      this.list.splice(index, 1);
      this.checkGroup = this.checkGroup.filter((item) => item.id !== deleteid);
    },
    handleAllcheck() {
      console.log(this.Allchecked);
      if (this.Allchecked) {
        this.checkGroup = this.list;
      } else {
        this.checkGroup = [];
      }
    },
    handlechange() {
      if (this.checkGroup.length == this.list.length) {
        this.Allchecked = true;
      } else {
        this.Allchecked = false;
      }
    },
    handleisshow(){
					this.isShow=!this.isShow
				}
  },
};
</script>
<style scoped>
ul {
  width: 100%;
  height: 100%;
  padding: 0px 0px 0px 0px;
}
li {
  display: flex;
  justify-content: space-around;
}
img {
  height: 100px;
  width: 100px;
}
.shoppinggoods {
  width: 100%;
}
.quantity {
  width: 70%;
}
.quantity,
.delete {
  transform: translate(0, 50%);
}
.total{
	margin-left:160px;
	height:40px;
	line-height:40px;
	text-align:center;
}
.jiesuan{
	margin-top: -36px;
	margin-left: 160px;
}
	#overlay{
			background: rgba(0,0,0,0.6);
			width: 100%;
			margin: auto;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1000;
		}
		#center{
			background: #fff;
			border-radius: 5px;
			/* 边框圆角 */
			text-align: center;
			width: 290px;
			line-height: 40px;
			height: 180px;
			position: fixed;
			margin: auto;
			right: 0;
			left:0;
			top: 0;
			bottom: 0;
		}
</style>