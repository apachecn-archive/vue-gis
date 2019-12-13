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
      const normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
        maxZoom: 18,
        minZoom: 1,
        ak: '123321'
      })
      const imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
        maxZoom: 18,
        minZoom: 1
      })
      const imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 1
      })

      const normal = L.layerGroup([normalm])
      const image = L.layerGroup([imgm, imga])

      const baseLayers = {
        '地图': normal,
        '影像': image
      }

      const map = L.map('map', {
        center: center, // 初始化定位点
        zoom: 13, // 初始化显示级别
        maxZoom: 18, // 最大缩放
        minZoom: 1, // 最小缩放
        layers: [normal], //
        zoomControl: false,
        attributionControl: false
      })

      L.control.layers(baseLayers, null).addTo(map)
      L.control
        .zoom({
          zoomInTitle: '放大',
          zoomOutTitle: '缩小'
        })
        .addTo(map)
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
