<template>
    <div>
    <table border="1">
        <colgroup>
            <col width="100" />
            <col width="*" />
            <col width="100" />
        </colgroup>
        <tr>
                <td>
                    {{sampleData.nickname}}
                </td>
                <td>
                    {{sampleData.message_description}}
                </td>
                <td>
                    {{sampleData.restaurant_location}}
                </td>
        </tr>
    </table>
        <div class="txtline">
        </div>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: {
        email: 'abc1@gmail.com',
        nickname: '저는 숟갈1 입니다',
        message_description: '메세지가 도착하였습니다. 메세지가 도착하였습니다메세지가 도착하였습니다메세지가 도착하였습니다\n메세지가 도착하였습니다메세지가 도착하였습니다 메세지가 도착하였습니다메세지가 도착하였습니다 메세지가 도착하였습니다메세지가 도착하였습니다 메세지가 도착하였습니다\n메세지가 도착하였습니다 메세지가 도착하였습니다메세지가 도착하였습니다',
        restaurant_location: '여기는 제주도 할매 칼국수 입니다',
        create_date: '2022.06.06'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style>
td
{
 min-width: 200px;
 max-width: 400px;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
}
</style>
