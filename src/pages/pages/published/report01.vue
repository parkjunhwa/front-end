<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import chart01 from "@/views/charts/apex-chart/chart01.vue";
import { ref } from "vue";
const inputValue = ref("");

const onClear = () => {
  inputValue.value = "";
};
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2 align-center">
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
      :items="[
        {
          title: 'Home',
          to: { name: 'pages-home' },
        },
        { title: '현황통계' },
        { title: '지점/담당자별 목표대비 실적' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        지점/담당자별 목표대비 실적
      </h3>
    </div>
    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <AppMoonPicker
            v-model="moon"
            placeholder="월 선택"
            prefix="조회기간"
            prepend-inner-icon="tabler-calendar-event"
            moon
            clearable
            range
            @keydown.esc="onClear"
          />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="부서코드 및 부서명 검색"
          />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12">
          <AppSelect :items="items" placeholder="영업사원 선택" />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <div class="d-flex gap-2 flex-wrap justify-end w-100">
            <VBtn variant="outlined" color="secondary"
              ><VIcon start icon="tabler-refresh" />초기화</VBtn
            >
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <VCard class="chart_area">
        <chart01 />
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            월별 조회 리스트
          </h5>
        </div>

        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <VCard class="basic-table-card">
        <VCardText>
          <VDataTable
            :headers="headers"
            :items="tabledata"
            density="compact"
            class="text-no-wrap"
            hide-default-footer
          >
            <thead>
              <tr>
                <th>구분</th>
                <th>24.03</th>
                <th>24.04</th>
                <th>24.05</th>
                <th>24.06</th>
                <th>24.07</th>
                <th>24.08</th>
                <th>24.09</th>
                <th>24.10</th>
                <th>24.11</th>
                <th>24.12</th>
                <th>25.01</th>
                <th>25.02</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>판매목표</th>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
              </tr>
              <tr>
                <th>판매실적</th>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
              </tr>
              <tr>
                <th>수금목표</th>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
              </tr>
              <tr>
                <th>수금실적</th>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
              </tr>
            </tbody>
          </VDataTable>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<script>
export default {
  data() {
    return {
      expanded: true,
      values: "",
      moon: ["2024-10", "2024-11"],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-table-infinity {
  .v-chip .v-icon {
    block-size: 14px;
    font-size: 14px;
    inline-size: 14px;
    width: 20px;
  }
}
.custom-chip {
  padding: 0 !important;
  border-radius: 10px !important;
  min-width: 20px !important;
}
.item-num {
  color: var(--primary-main);
}
.card-table-infinity .data .gap-4 {
  gap: 4px 16px;
}
.card-table-infinity .data .justify-content-start {
  align-items: center;
  gap: 4px 16px;
  overflow: hidden;
}

.card-table-infinity .data .justify-content-start .item:nth-child(1) {
  width: 50px;
  min-width: 50px;
  align-items: center;
}
.item-cell-title {
  white-space: nowrap; /* 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* ...으로 표시 */
}
.card-table-infinity .data .justify-content-start .item:nth-child(2) {
  align-items: center;
  overflow: hidden;
  gap: 4px;
}
.card-table-infinity .data .justify-content-end {
  gap: 4px 16px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(1) {
  width: 93px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(2) {
  width: 121px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(3) {
  width: 120px;
}
@media (max-width: 960px) {
  .card-table-infinity .data .justify-content-end {
    justify-content: space-between;
    gap: 4px 16px;
  }
  .card-table-infinity .data .justify-content-start .item:nth-child(1) {
    width: inherit;
    min-width: inherit;
    flex: 0;
  }
  .card-table-infinity .data .gap-4 {
    gap: 4px;
  }
  .card-table-infinity .data .justify-content-start {
    align-items: center;
    gap: 4px;
    overflow: hidden;
  }

  .app-picker-field {
    width: 100%;
  }
}
.v-chip.bg-error {
  min-width: 30px;
}
</style>
