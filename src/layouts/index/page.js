import NAV from '../../components/nav'
import FOOT from '../../components/footer'
export default {
  components: {
    NAV,
    FOOT
  },
  data () {
    return {
      features: [
        {
          icon: '&#xe619;',
          style: {
            color: '#51d4d4',
            boxShadow: '2px 2px 8px 2px #51d4d440'
          },
          title: '美观',
          desc: '使用 elementUI 体系设计'
        },
        {
          icon: '&#xf25f;',
          style: {
            color: '#fbb614',
            boxShadow: '2px 2px 8px 2px #fbb61440'
          },
          title: 'Vue 技术栈',
          desc: '使用 vue/webpack/element 等前端技术开发'
        },
        {
          icon: '&#xe632;',
          style: {
            color: '#9962df',
            boxShadow: '2px 2px 8px 2px #9962df40'
          },
          title: 'typescript',
          desc: '使用 ts 规范代码，避免问题上线后才初心啊'
        },
        {
          icon: '&#xe61b;',
          style: {
            color: '#ef44a6',
            boxShadow: '2px 2px 8px 2px #ef44a640'
          },
          title: 'Mock 数据',
          desc: '可以脱离后端进行调试的方案'
        },
        {
          icon: '&#xe62c;',
          style: {
            color: '#1bcb57',
            boxShadow: '2px 2px 8px 2px #1bcb5740'
          },
          title: '最佳实践',
          desc: '良好的工程实践助你持续产出高质量代码'
        },
        {
          icon: '&#xe722;',
          style: {
            color: '#f62533',
            boxShadow: '2px 2px 8px 2px #f6253340'
          },
          title: '方案文档',
          desc: '如使用我们推荐的方案，可以快速产出'
        }
      ]
    }
  },
  methods: {
    run (uri, mode) {
      if (mode && mode === 'link') {
        window.location.href = uri
      } else if (mode && mode === 'route') {
        this.$router.push({
          path: uri
        })
      }
    }
  }
}
