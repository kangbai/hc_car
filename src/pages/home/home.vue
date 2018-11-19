<template>
  <div class="lay_wrap">
    <div class="lay_cts">
      <div class="lay_let">
        <div class="logo">
          <img :src="require('@/assets/imgs/logo.png')" alt="">
        </div>
        <div class="log-out" @click="logOut">
          <Icon type="md-power" />
          <span style="margin-left: 30px;">退出</span>
        </div>
        <Menu active-name="1-2" :open-names="['1']" theme="dark" class="menu" width="215px">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate" />
              业务管理
            </template>
            <MenuItem name="1-1">
              <router-link to="/financialLease">
                融租合同
              </router-link>
            </MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-navigate" />
                导航2
            </template>
              <MenuItem name="2-1">wwws</MenuItem>
              <MenuItem name="2-2">www</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="lay_rig">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    logOut () {
      // this.$router.push({name: 'login'})
      this.$Modal.confirm({ // 用户退出时, 提示是否确认退出
        title: '你确定退出吗',
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$Modal.remove()
            this.$Message.success({
              content: '退出成功',
              onClose: () => {
                this.$router.push({name: 'login'})
              }
            })
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.lay_wrap {
  width: 100%;
  height: 100%;
  .lay_cts {
    height: 100%;
    width: 100%;
    display: flex;
  }
  .lay_let {
    max-width: 215px;
    color: #fff !important;
    background-color: #2b3f56;
    .ivu-menu-dark {
      background-color: #2b3f56;
    }
    .logo {
      padding: 20px 10px 10px 24px;
    }
    .log-out {
      cursor: pointer;
      margin-top: 10px;
      color: #fff;
      padding-left: 25px;
    }
  }
  .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item{
    padding-left: 43px !important;
  }
  .lay_rig {
    flex: 1;
    padding: 20px 12px 0 20px;
    background-color: #EEEEEE;
    overflow-x: auto;
  }
}
</style>
