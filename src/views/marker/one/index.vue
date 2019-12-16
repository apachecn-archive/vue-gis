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
      const map = L.map('map', {
        center: center,
        zoom: 13,
        maxZoom: 18,
        minZoom: 1,
        zoomControl: false,
        attributionControl: false,
        closePopupOnClick: true
      })

      // 采用addTo添加地图图层，一般addTo用的比较多
      L.tileLayer
        .chinaProvider('GaoDe.Normal.Map', {
          maxZoom: 18,
          minZoom: 1,
          ak: '您申请的key值'
        })
        .addTo(map)
      // 或采用addLayer添加地图图层
      // const tileLayer = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
      //   maxZoom: 18,
      //   minZoom: 1,
      //   ak: '您申请的key值'
      // })
      // map.addLayer(tileLayer)

      // marker icon自定义
      const Icon = L.Icon.extend({
        options: {
          iconUrl: require('@/assets/gis/monitor.png'),
          iconSize: [36, 39],
          iconAnchor: [18, -5]
        }
      })

      const content = `
        <b>Hello world!</b><br/>
        我是成都<br/>
        时间戳：${+new Date()}
      `

      L.marker(center, {
        icon: new Icon()
      })
        .addTo(map)
        .bindPopup(content)
        .openPopup()
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
