<template>
  <div class="map" id="map"></div>
</template>

<script>
// 基础引入
import L from 'leaflet'
import 'leaflet.chinatmsproviders'
import 'leaflet/dist/leaflet.css'
// 聚合相关
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'

// 常量
// 定位中心点
const center = [30.659791980587134, 104.0633797645569]

const monitorImg = require('@/assets/gis/monitor.png')
const monitorActiveImg = require('@/assets/gis/monitor-active.png')
function produceIcon (iconUrl) {
  return L.Icon.extend({
    options: {
      iconUrl: iconUrl,
      iconSize: [36, 39],
      iconAnchor: [18, -5]
    }
  })
}
const Icon = produceIcon(monitorImg)
const IconActive = produceIcon(monitorActiveImg)
// marker正常态
const icon = new Icon()
// marker点击态
const iconActive = new IconActive()

export default {
  data () {
    return {
      map: null,
      curMarker: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.initMap()
      this.initMarkers()
    },
    initMap () {
      this.map = L.map('map', {
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
        .addTo(this.map)

      // 地图被点击时，marker恢复原style
      this.map.addEventListener('click', () => {
        this.clearCurMarker()
      })
      // 点击popup close按钮，marker恢复原style
      this.map.on('popupclose', () => {
        this.clearCurMarker()
      })
    },
    initMarkers () {
      // 造100个随机点
      const arr = new Array(100)
      const heatMarkerLayer = L.markerClusterGroup(10)
      arr.fill(1).forEach((item, i) => {
        let marker = new L.Marker(
          i % 2 === 0 ? [center[0] + i * 0.01 * Math.random(), center[1] + i * 0.01 * Math.random()] : [center[0] - i * 0.01 * Math.random(), center[1] - i * 0.01 * Math.random()],
          {
            icon: icon,
            id: i
          }
        )
        const content = `
          <b>Hello world!</b><br/>
          我是成都<br/>
          编号：${i + 1}
        `
        marker.bindPopup(content, {
          minWidth: 200,
          maxWidth: 500,
          maxHeight: 200
        })
        // 点击修改marker的状态
        marker.on('click', e => {
          console.log(`marker被点击了，编号${marker.options.id}`)

          let curMarker = this.curMarker
          if (curMarker !== marker) {
            curMarker && curMarker.setIcon(icon)
            marker.setIcon(iconActive)
            this.curMarker = marker
          } else {
            marker.openPopup()
          }
        })
        heatMarkerLayer.addLayer(marker)
      })
      // 聚合打点
      heatMarkerLayer.addTo(this.map)
    },
    clearCurMarker () {
      if (this.curMarker) {
        this.curMarker.setIcon(icon)
        this.curMarker = null
      }
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
