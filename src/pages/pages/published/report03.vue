<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import chart02 from "@/views/charts/apex-chart/chart02.vue";
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
        { title: '유통별실적조회' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        유통별실적조회
      </h3>
    </div>
    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="2" md="2" sm="12" xs="12"
          ><VRadioGroup v-model="inlineRadio" inline>
            <VRadio label="판매" value="radio-1" />
            <VRadio label="수금" value="radio-2" /> </VRadioGroup
        ></VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <AppSelect
            :items="items"
            placeholder="지점별 또는 담당자별 선택"
            prepend-inner-icon="tabler-asterisk-simple"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
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
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <div class="d-flex gap-2 flex-wrap justify-end w-100">
            <VBtn variant="outlined" color="secondary"
              ><VIcon start icon="tabler-refresh" />초기화</VBtn
            >
            <VBtn color="primary"
              ><VIcon start icon="tabler-search" />조회</VBtn
            >
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <VCard class="chart_area">
        <chart02 />
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            지점원 리스트
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
            fixed-header
            style="max-height: 500px"
            hide-default-footer
          >
            <thead>
              <tr>
                <th>구분</th>
                <th colspan="3">종병유통</th>
                <th colspan="3">도매유통</th>
                <th colspan="3">NP유통</th>
                <th colspan="3">LOCAL유통</th>
                <th>총계</th>
              </tr>

              <tr>
                <th>담당자</th>
                <th>목표</th>
                <th>실적</th>
                <th>달성률</th>
                <th>목표</th>
                <th>실적</th>
                <th>달성률</th>
                <th>목표</th>
                <th>실적</th>
                <th>달성률</th>
                <th>목표</th>
                <th>실적</th>
                <th>달성률</th>
                <th>목표총계</th>
                <th>ETC실적</th>
                <th>OTC실적</th>
                <th>실적총계</th>
                <th>달성률</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr>
                <td>사원명</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56,456,000</td>
                <td class="text-right">56.78</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">123,456,000</td>
                <td class="text-right">56.78</td>
              </tr>
              <tr class="total-line">
                <td class="font-weight-bold">합계</td>
                <td class="text-right font-weight-bold">123,456,000</td>
                <td class="text-right font-weight-bold">56,456,000</td>
                <td class="text-right font-weight-bold">56.78</td>
                <td class="text-right font-weight-bold">123,456,000</td>
                <td class="text-right font-weight-bold">56,456,000</td>
                <td class="text-right font-weight-bold">56.78</td>
                <td class="text-right font-weight-bold">123,456,000</td>
                <td class="text-right font-weight-bold">56,456,000</td>
                <td class="text-right font-weight-bold">56.78</td>
                <td class="text-right font-weight-bold">123,456,000</td>
                <td class="text-right font-weight-bold">56,456,000</td>
                <td class="text-right font-weight-bold">56.78</td>
                <td class="text-right font-weight-bold">123,456,000</td>
                <td class="text-right font-weight-bold">123,456,000</td>
                <td class="text-right font-weight-bold">123,456,000</td>
                <td class="text-right font-weight-bold">123,456,000</td>
                <td class="text-right font-weight-bold">56.78</td>
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
.basic-table-card {
  @media (max-width: 960px) {
    padding: 0px !important;
  }
  tr.total-line {
    background: rgba(var(--v-theme-warning), 0.08);
  }
  td {
    align-items: center;
    .v-btn {
      vertical-align: bottom;
      width: auto;
    }
  }
}
</style>
