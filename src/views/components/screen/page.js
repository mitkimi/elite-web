export default {
  data () {
    return {
      current: 0,
      currentIndex: 0,
      data: [
        {
          text: '机场大屏'
        },
        {
          text: '是一个'
        },
        {
          text: '不算牛逼'
        },
        {
          text: '的特效'
        },
        {
          text: '呵呵呵呵'
        }
      ],
      timer: null,
      period: 5
    }
  },
  mounted () {
    this.autoPlay()
  },
  methods: {
    autoPlay() {
      clearInterval(this.timer)
      this.timer = setInterval(()=>{
        this.current = null

        setTimeout(()=>{
          this.current = this.currentIndex
          this.currentIndex += 1
          if (this.currentIndex >= this.data.length) {
            this.currentIndex = 0
          }
        }, 100)
      }, this.period * 1000)
    }
  }
}
