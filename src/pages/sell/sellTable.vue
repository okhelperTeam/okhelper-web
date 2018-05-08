/**
* Created by ztt on 2018/4/19.
*/
<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/sell" class="back-bar-backBtn">&lt;&nbsp;销售
        </router-link>
        <div class="back-bar-name">
          销售单
        </div>
      </div>
        <div style="width: 100%;height: 60px;margin-top: 56px;">
          <div style="width: 20%;height: 60px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">客户*</div>
          <div style="width: 80%;height: 60px;display: block;float: left;">
            <select style="width: 100%;height: 60px;text-align: center;">
              <option value ="volvo">老王</option>
              <option value ="saab">小美</option>
              <option value="opel">大路</option>
              <option value="audi">Audi</option>
            </select>
            <hr>
          </div>
        </div>
      <!--<div style="width: 100%;height: 50px;">-->
        <!--<div style="width: 20%;height: 50px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">仓库*</div>-->
        <!--<div style="width: 80%;height: 50px;display: block;float: left;">-->
          <!--<select style="width: 100%;height: 50px;text-align: center;">-->
            <!--<option value ="volvo">Volvo</option>-->
            <!--<option value ="saab">Saab</option>-->
            <!--<option value="opel">Opel</option>-->
            <!--<option value="audi">Audi</option>-->
          <!--</select>-->
          <!--<hr>-->
        <!--</div>-->
      <!--</div>-->
      <div style="clear: both" class="ok-border"></div>
      <div>
        <div v-if="choosedProductList.length==0">
          <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">选择商品</div>
          <div class="ok-model-border"></div>
        </div>
        <div v-if="choosedProductList.length>0">
          <div style="height: auto;margin-left: 15px;margin-right: 15px;">
            <div style="border-bottom: 1px dashed #F2F2F2">
              <div style="font-size: 14px;color: #108ee9;margin-left: 10px;height: 35px;line-height: 35px;">
                <div @click="editChoosedProductList" style="width: 25%;">
                  <i style="font-size: 20px;" class="ion-ios-compose-outline"></i>&nbsp;<span>{{editText}}</span>
                </div>
              </div>
            </div>
            <div v-for="(item,index) in choosedProductList">
              <div>
                <div style="border-bottom: 1px dashed #F2F2F2;height: 26px;line-height: 26px;">
                  <span style="font-weight: bolder;">商品名（货号）</span>
                  <i style="color: #108ee9;margin-left: 15px;" class="ion-edit"></i>
                </div>
                <div style="border-bottom: 1px dashed #F2F2F2">
                  <ul style="list-style: none;height: 36px;line-height: 36px;width: 100%;font-size: 12px;">
                    <li style="display: block;float: left;width: 10%;">
                      <div v-if="editText=='编辑'">
                        <div @click="showNoteOrPrice(1,index)" style="height: 26px;width: 26px;border-radius: 13px;color:white;background: #F2F2F2;font-size:10px;text-align: center;margin-top: 5px;line-height: 24px;">备</div>
                      </div>
                      <div v-else>
                        <div @click="deleteProduct(index)" style="height: 26px;width: 26px;border-radius: 13px;color:white;background: red;font-size:10px;text-align: center;margin-top: 5px;line-height: 26px;">一</div>
                      </div>
                    </li>
                    <li style="display: block;float: left;width: 20%;text-align: center;">
                      <div>蓝色</div>
                    </li>
                    <li style="display: block;float: left;width: 20%;text-align: center;">
                      <div>xxxs</div>
                    </li>
                    <li style="display: block;float: left;width: 20%;text-align: center;">
                      <div>￥{{item.discountPrice}}</div>
                    </li>
                    <li style="display: block;float: left;width: 20%;text-align: center;">
                      <div>{{item.productCount}}</div>
                    </li>
                    <li style="display: block;float: left;width: 10%;color: #575757;">
                      <i @click="showNoteOrPrice(2,index)" :class="[item.isPriceOpen?'ion-chevron-up':'ion-chevron-down']"></i>
                    </li>
                  </ul>
                  <div v-show="item.isPriceOpen">
                    <ul style="list-style: none;background: #F2F2F2;width: 100%;height:50px;padding-top:5px;text-align: center;">
                      <li class="sell-table-price-detail-open-li">
                        <div>单价</div>
                        <input class="sell-table-price-detail-open-li-input" type="number" v-model="item.retailPrice"/>
                      </li>
                      <li class="sell-table-price-detail-open-li">
                        <div>折扣(%)</div>
                        <input class="sell-table-price-detail-open-li-input" type="number" v-model="item.discounts"/>
                      </li>
                      <li class="sell-table-price-detail-open-li">
                        <div>折后价</div>
                        <input class="sell-table-price-detail-open-li-input" disabled type="number" v-model="item.discountPrice"/>
                      </li>
                      <li class="sell-table-price-detail-open-li">
                        <div>数量</div>
                        <input class="sell-table-price-detail-open-li-input" type="number" v-model="item.productCount"/>
                      </li>
                    </ul>
                  </div>
                  <div v-show="item.isNoteOpen" style="width: 100%;height: 40px;border-top: 1px #F2F2F2 dashed;line-height: 40px;font-size: 16px;margin-top: 5px;margin-bottom: 5px;">
                    <div style="width:20%;height: 100%;float: left;text-align: center;color: #888888">备注</div>
                    <input style="border-bottom:1px solid #108ee9;width: 70%;display: inline;height: 34px;margin-top:3px;float: left;" type="text" v-model="item.productNotes"/>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888;font-size: 30px;color: cornflowerblue">
          <div style="width: 50%;height: 50px;display: block;float: left;text-align: center;"><i class="ion-android-expand"></i></div>
          <router-link to="/product/SearchProduct" style="color: cornflowerblue;width: 50%;height: 50px;display: block;float: left;text-align: center;">
            <i class="ion-android-add"></i>
          </router-link>
        </div>
      </div>

      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户实付金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">优惠金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户欠款
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">本单客户积分
        <input disabled style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0" type="text" v-model="integral"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">备注
        <input style="height: 50px;font-size: 16px;width: 70%;margin-left: 20px;" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 40px;bottom: 0;position: fixed;border-top:1px solid #F2F2F2 ">
        <div style="margin-left:20px;font-size: 14px;height: 40px;line-height:40px;background: white;width: 60%;display: block;float: left;" v-model="choosedProductList.length">合计：{{choosedProductList.length}}件&nbsp;&nbsp;&nbsp;<span style="color: orange;">￥{{totalMoney}}</span></div>
        <div style="width: 30%;height: 40px;display: block;float: right;color:white;background: cadetblue;text-align:center;line-height:40px;font-size: 14px;">出售</div>
      </div>
    </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
    export default {
        mixins: [],     //混合
        components: {
          'ok-back':Back
        },//注册组件
        data() {         //数据
            return {
              editText:'编辑',
              choosedProductList:[
                {isPriceOpen:false,retailPrice:100,discountPrice:100,discounts:100,productCount:15,productNotes:'',isNoteOpen:false,productNotes:''},
                {isPriceOpen:false,retailPrice:200,discountPrice:100,discounts:50,productCount:15,productNotes:'',isNoteOpen:false,productNotes:''},
              ],
              totalMoney:10000.56

            };
        },
        computed: {
          integral(){
            return parseInt(this.totalMoney);
          }
        },  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          editChoosedProductList(){
            if(this.editText=='编辑'){
              this.editText='取消编辑';
            }else{
              this.editText='编辑';
            }
          },
          deleteProduct(index){
            this.choosedProductList.splice(index,1);
          },
          showNoteOrPrice(n,index){
            switch (n){
              case 1:this.choosedProductList[index].isNoteOpen=!this.choosedProductList[index].isNoteOpen;this.choosedProductList[index].isPriceOpen=false;break;
              case 2:this.choosedProductList[index].isNoteOpen=false;this.choosedProductList[index].isPriceOpen=!this.choosedProductList[index].isPriceOpen;break;
              default:this.choosedProductList[index].isNoteOpen=!this.choosedProductList[index].isNoteOpen;this.choosedProductList[index].isPriceOpen=false;
            }
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>
  .sell-table-price-detail-open-li{
    display: block;float: left;width: 25%;padding-left: 10px;padding-right: 10px;
  }
  .sell-table-price-detail-open-li-input{
    height: 20px;width: 100%;margin-top: 2px;border-bottom: 1px solid #108ee9;
  }
</style>
