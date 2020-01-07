# vue-gis

目录

- [说明](#说明)
- [使用起步](#使用起步)

## 说明

> 本项目采用插件``leaflet.js``和高德地图开发gis应用。

- [leaflet.js使用文档](https://leafletjs.com/)
- [高德地图API](https://lbs.amap.com/api/javascript-api/summary)

项目使用：

```bash
# yarn
# yarn dev
```

本项目实现demo内容有：

> - [x] 使用起步
> - [x] 打点(一个点、多个点、带popup的点、聚合)
> - [x] 使用

## 使用起步

安装插件

```bash
# yarn add leaflet

# leaflet.chinatmsproviders插件提供了中国主流地图与leaflet结合的配置
# yarn add leaflet.chinatmsproviders
```

使用

```javascript
import L from 'leaflet'
import 'leaflet.chinatmsproviders'
import 'leaflet/dist/leaflet.css'
```

[leaflet.chinatmsproviders文档](https://www.npmjs.com/package/leaflet.chinatmsproviders)

## 聚合

安装插件

```bash
# yarn add leaflet.markercluster
```

使用

```javascript
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'
```
