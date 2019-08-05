<template>
  <div id="allmap" class="allmap"></div>
</template>
<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  mounted() {
    this.initMap(0, 0)
  },
  methods: {
    initMap(lng, lat) {

      var map = new BMap.Map("allmap"); // 创建Map实例
      var point = new BMap.Point(lng, lat); // 创建点坐标
      map.centerAndZoom(point, 18);
      map.enableScrollWheelZoom();

      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

      var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }); // 左上角，添加比例尺
      var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
      var top_right_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }); //右上角，仅包含平移和缩放按钮
      /*缩放控件type有四种类型:
      BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
      map.addControl(top_left_control);
      map.addControl(top_left_navigation);
      map.addControl(top_right_navigation);
    },
    searchByStationName(keyword) {
      var map = new BMap.Map("allmap");

      // 创建地址解析器实例
      var myGeo = new BMap.Geocoder();
      // 将地址解析结果显示在地图上,并调整地图视野
      myGeo.getPoint(keyword, function(point) {
        if (point) {
          map.centerAndZoom(point, 12);
          map.addOverlay(new BMap.Marker(point));
          console.log("获取到的经纬度:"+JSON.stringify(point))
          return point
        } else {
          alert("您选择地址没有解析到结果!");
        }
      });
    }
  }
}

</script>
<style scoped>
.allmap {
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
  margin-top:20px;
}

</style>
