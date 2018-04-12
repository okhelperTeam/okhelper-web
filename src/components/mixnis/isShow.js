/**
 * Created by zc on 17-4-21.
 */
export default {
  props: {isShow: {default: true}},
  data(){
    return{
      open: this.isShow,
    }
  },
  methods: {
    toggle(){
      this.open = !this.open
    }
  }
}
