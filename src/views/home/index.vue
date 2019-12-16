<template>
  <div class="map" id="map"></div>
</template>

<script>
import L from 'leaflet'
import 'leaflet.chinatmsproviders'
import 'leaflet/dist/leaflet.css'

// 常量
// 定位中心点
const center = [30.659791980587134, 104.0633797645569]

export default {
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 普通高德地图
      const normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
        maxZoom: 18,
        minZoom: 1,
        ak: '您申请的key值'
      })
      // 卫星高德地图，无注解
      const imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
        maxZoom: 18,
        minZoom: 1,
        ak: '您申请的key值'
      })
      // 卫星高德地图，有注解
      const imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 1,
        ak: '您申请的key值'
      })

      const normal = L.layerGroup([normalm])
      const img = L.layerGroup([imgm])
      const image = L.layerGroup([imgm, imga])

      const baseLayers = {
        '地图': normal,
        '影像(无注解)': img,
        '影像(有注解)': image
      }

      // 第一个参数为容器id，第二个参数options配置
      const map = L.map('map', {
        center: center, // 初始化定位点
        zoom: 13, // 初始化显示级别
        maxZoom: 18, // 最大缩放
        minZoom: 1, // 最小缩放
        layers: [normal], // 地图图层
        zoomControl: false, // 是否显示放大缩小按钮
        attributionControl: false, // 是否关闭leaflet广告链接（在地图的右下角）
        closePopupOnClick: true // 点击地图是否关闭popup
      })
      // 地图模式切换
      L.control.layers(baseLayers, null).addTo(map)
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
