export default {
  data () {
    return {
      dataList: [],
      currentPage: 1,
      limit: 10,
      totalPage: 0,//总页数
      pageCount:0,//总条数
    }
  },
  created () {
    this.initList()
  },
  watch: {
    currentPage: 'loadData'
  },
  methods: {
    /**
     * 获取请求参数 默认只传递index(页码) limit(每页条数) 可以由调用方传递指定对象合并(或者覆盖)原参数
     * @param params
     * @returns {*}
     */
    getParams (params) {
      return Object.assign({
        paging: true,
        page: this.currentPage,
        limit: this.limit
      }, params)
    },
    /**
     * 加载更多
     */
    loadMore () {
      this.currentPage++;
    },
    /**
     * 跳到第几页
     */
    toPage(pagenum){
      this.currentPage=pagenum;
    },
    /**
     * 推送到list中 因为vue的监听特性 只能用push进行数据的添加 如果有特殊处理 通过传递一个filter来过滤数据
     * @param list
     * @param filter
     */
    pushToList (dataList, filter) {
      dataList.forEach((item) => {
        if (typeof filter === 'function') {
          this.dataList.push(filter(item))
        } else {
          this.dataList.push(item)
        }
      })
    },
    /**
     * 初始化列表
     */
    initList () {
      this.currentPage = 1
      this.dataList = []
      this.loadData()
    },
    /**
     * @overwrite
     * 加载数据方法 用到该mixin的都应该重写该方法 否则无法实现加载数据
     */
    loadData () {
      // 每个列表自己的获取数据的方法需要重写
    },
    reload() {
      this.initList();
    },
  }
}
