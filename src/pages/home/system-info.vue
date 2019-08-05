<template>
  <div class="middle-wrap">
    <div class="form-wrap">
      <div class="caption">系统信息</div>
      <div class="table-wrap">
        <table>
          <tr>
            <td>服务器操作系统:</td>
            <td>Linux (114.55.34.251)</td>
            <td>
              Web 服务器:</td>
            <td>
              nginx/1.10.2</td>
          </tr>
          <tr>
            <td>
              PHP 版本:</td>
            <td>5.6.30</td>
            <td>MySQL 版本:</td>
            <td>
              5.5.56</td>
          </tr>
          <tr>
            <td>安全模式:</td>
            <td>否</td>
            <td>安全模式GID:</td>
            <td>否</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar: ''
    }
  }
}

</script>
<style lang="scss" scoped>
.form-wrap {
  width: 700px;
  border-radius: $borderRadius;
  border: 1px solid $borderColor;
  margin: auto;
}

.table-wrap {
  padding: 50px;
}

table {
  border: 1px solid $borderColor;
  width: 100%;
}

tr {
  td {
    border-bottom: 1px solid $borderColor;
    border-right: 1px solid $borderColor;
    height: 40px;

    &:last-child {
      border-right: none;
    }
  }

  &:last-child {
    td {
      border-bottom: none;
    }

  }
}

</style>
