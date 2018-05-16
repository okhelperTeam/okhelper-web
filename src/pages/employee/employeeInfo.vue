/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <div class="back-bar">
        <div @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
        </div>
        <div class="back-bar-name">
          员工信息
        </div>
        <div class="back-bar-cancelBtn">
          <div @click="addNewOrUpdateEmployee($route.query.id)" style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
            保存
          </div>
        </div>
      </div>
      <div class="ok-model-text-box">
        <div class="ok-text-first ok-text-box">
          <div class="ok-text-name">员工账号<span style="color: #C20C0C">*</span></div>
          <div class="ok-text-textBox">
            <input @blur="checkUserName" class="ok-text-text" v-model="employee.userName" placeholder="由字母数字组成，用于员工登陆" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">员工姓名</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" placeholder="请输入员工姓名" v-model="employee.userNick" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">员工手机号</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" placeholder="请输入员工手机号" v-model="employee.userPhone" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">密码<span style="color: #C20C0C">*</span></div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" placeholder="不设，则默认为12345" v-model="employee.userPassword" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">密码确认</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" v-model="passwordAgain" type="password"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
      </div>
      <div class="ok-border"></div>
      <div class="ok-model-text-box">
        <div class="ok-text-box">
          <div class="ok-text-name">性别</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text"  @click="showSexPicker=!showSexPicker" v-model="employee.userSex" placeholder="请选择员工性别" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">员工生日</div>
          <div class="ok-text-textBox">
            <div class="ok-text-text"  @click="showBirthdayPicker=!showBirthdayPicker">{{employee.userBirthday | formateTime('YMD')}}</div>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">邮箱</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" v-model="employee.userEmail" placeholder="请输入邮箱" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name" style="font-size: 14px">账号是否启用</div>
          <div class="ok-text-textBox" style="border-bottom: 0px;">
            <div style="width: auto;height: auto;float: right;margin-top: 10px;">
              <van-switch v-model="isActiveEmployee" />
            </div>
          </div>
        </div>
        <!--<div class="ok-model-border"></div>-->
        <!--<div class="ok-text-box">-->
          <!--<div class="ok-text-name">备注</div>-->
          <!--<div class="ok-text-textBox">-->
            <!--<input class="ok-text-text" type="text"/>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="ok-model-border"></div>-->
      </div>
      <div class="ok-border"></div>
      <div style="background:#F2F2F2;width: 100%;height: 35px;padding-top:10px;padding-left: 5px;font-family: '微软雅黑'">
        <span style="font-size: 14px;color: #575757;">所属角色</span>
        <span style="font-size: 12px;color: #575757;">(如需编辑或者新增角色权限，请前往&nbsp;<span @click="$router.push({path:'/role'})" style="color: #108ee9;font-size: 14px">【角色权限】</span>)</span>
      </div>
        <van-checkbox-group v-model="roleId">

          <div style="height: 80px;width: 100%;border-bottom: 1px solid #888888;">
            <van-checkbox
              v-for="(item, index) in roleList"
              :key="item"
              :name="item"
              >
            <div style="width: 80%;height: 80px;padding-right: 10px;display: block;float: left;">
              <div style="width: 100%;font-size: 18px;margin-top: 10px;color: black;">采购员</div>
              <span style="color: #888888">负责采购事宜，包括新建商品、采购单、采购退货、库存盘点等</span>
            </div>
            </van-checkbox>
          </div>
      </van-checkbox-group>
      <van-popup v-model="showSexPicker" position="bottom" :overlay="true">
        <van-picker :columns="sexArray" @change="onSexChange" />
      </van-popup>
      <van-popup v-model="showBirthdayPicker" position="bottom" :overlay="true">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @change="onBirthdayChange"
          @confirm="onBirthdayConfirm"
          @cancel="onBirthdayCancel"
        />
      </van-popup>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Checkbox, CheckboxGroup } from 'vant';
  import { Switch } from 'vant';
  import {getCheckName,addEmployee} from '@/service/getData';

  Vue.use(Switch);
  Vue.use(Checkbox).use(CheckboxGroup);
  import { Toast } from 'vant';
  import { Picker,Popup,DatetimePicker } from 'vant';

  Vue.use(Picker).use(Popup).use(DatetimePicker);

  const Back = resolve => require(['@/components/common/backBar'], resolve);

    export default {
        mixins: [],     //混合
        components: {
          'ok-back':Back
        },//注册组件
        data() {         //数据
            return {
              sexArray: [ '女', '男', '保密'],
              checked: true,
              roleId:['1','2'],
              roleList:['1','2'],
              passwordAgain:'',
              showSexPicker:false,
              showBirthdayPicker:false,
              currentDate: new Date(),
              minDate: new Date(1950, 1, 1),
              maxDate:new Date(),
              employee:{userName:'',userNick:'',userPassword:'',userPhone:'',userEmail:'',userSex:'',userBirthday:'',deleteStatus:1}
            };
        },
        computed: {
          isActiveEmployee:{

            get: function () {
              if (this.employee.deleteStatus == 1) {
                return true;
              } else {
                return false;
              }
            },
            set: function (v) {
              if(v){
                this.employee.deleteStatus=1;
              }else {
                this.employee.deleteStatus=0;
              }

            }
          }
        },  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          onBirthdayChange(picker,value,index){
            this.employee.userBirthday=value;
          },
          onBirthdayConfirm(value){
            this.employee.userBirthday=value;
            this.showBirthdayPicker=false;
          },
          onBirthdayCancel(){
            this.employee.userBirthday='';
            this.showBirthdayPicker=false;
          },
          onSexChange(picker, value, index) {//性别选择器值回调
            this.employee.userSex=value;
          },
          addNewOrUpdateEmployee(id){//添加/修改员工
            if(id!=null&&id!=''){
              //修改员工

            }else{
              //添加员工
              if(this.employee.userName==''||this.employee.userName==null){
                Toast({
                  position: 'bottom',
                  message: '员工账号不可为空！'
                });
              }else if(this.employee.userPassword==''||this.employee.userPassword==null){
                this.employee.userPassword='12345';
              }else if(this.employee.userBirthday==''||this.employee.userBirthday==null){
                this.employee.userBirthday=new Date(1900, 1, 1);//不填生日，默认传1900-1-1
              }else{
                this.employee.userBirthday=this.employee.userBirthday.toString();
                addEmployee(this.employee).then(
                  response=>{
                    Toast({
                      position: 'bottom',
                      message: '添加员工成功'
                    });
                    this.employee.userBirthday=new Date((this.employee.userBirthday).replace("/-/g", "/"));
                  },
                  error=>{}
                );
              }
            }

          },
          checkUserName(){//检查账号是否重复
            getCheckName({userName:this.employee.userName}).then(
              response=>{

              },
              error=>{
                Toast({
                  position: 'bottom',
                  message: '已有此员工账号，请重新填写'
                });
                this.product.userName='';
              }
            );
          },
          checkUserPassword(){
            if(this.passwordAgain!=this.employee.userPassword){
              Toast({
                position: 'bottom',
                message: '密码不一致'
              });
              return false;
            }else {
              return true;
            }
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style >

  .login-icon{
    width: 30%;
    display: inline;
    font-size: 25px;
    color: #f44;
  }
  .login-text{
    width: 70%;
    display: inline-block;
    margin: 10px 10px 10px 10px;
  }
  .van-checkbox__label{
    width: 80%;
    margin-left: 20px;
  }
  .van-checkbox__icon{
    margin-left: 20px;
  }
  .van-checkbox--checked{
    color: white!important;
  }
</style>
