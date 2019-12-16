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

      L.tileLayer
        .chinaProvider('GaoDe.Normal.Map', {
          maxZoom: 18,
          minZoom: 1,
          ak: '您申请的key值'
        })
        .addTo(map)

      // marker icon自定义
      const Icon = L.Icon.extend({
        options: {
          iconUrl: require('@/assets/gis/monitor.png'),
          iconSize: [36, 39],
          iconAnchor: [18, -5]
        }
      })
      const icon = new Icon()

      // 造100个点
      const arr = new Array(100)
      const markers = []
      arr.fill(1).forEach((item, i) => {
        let marker = new L.Marker(
          i % 2 === 0 ? [center[0] + i * 0.01 * Math.random(), center[1] + i * 0.01 * Math.random()] : [center[0] - i * 0.01 * Math.random(), center[1] - i * 0.01 * Math.random()],
          {
            icon: icon
          }
        )
        const content = `
          <b>Hello world!</b><br/>
          我是成都<br/>
          编号：${i + 1}
        `
        marker.bindPopup(content)
        marker.on('click', e => {
          console.log('marker被点击了')
        })
        markers.push(marker)
      })
      // 批量打点
      L.layerGroup(markers).addTo(map)
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
