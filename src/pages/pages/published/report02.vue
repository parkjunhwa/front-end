<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
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
        { title: '처방처 원내외 판매현황' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        처방처 원내외 판매현황
      </h3>
    </div>
    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="처방처를 검색하세요. (검색 후 처방처명 출력)"
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
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
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
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            처방처원장
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
                <th>거래처/처방처</th>
                <th>품목명</th>
                <th>수량</th>
                <th>금액</th>
                <th>비고</th>
              </tr>
            </thead>

            <tbody>
              <tr class="total-line">
                <td>첫번째 거래처명</td>
                <td>[판매합계]</td>
                <td></td>
                <td class="text-right font-weight-bold">2,123,456,000</td>
                <td>비고내용</td>
              </tr>
              <tr class="total-line">
                <td>두번째 거래처명 외 {"NN"}처처</td>
                <td>수금예정금액</td>
                <td></td>
                <td class="text-right font-weight-bold">2,123,456,000</td>
                <td>비고내용</td>
              </tr>
              <tr>
                <th>[제품별계]</th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td>아토목신캡슐 10mg 30C</td>
                <td class="text-right">310</td>
                <td class="text-right">3,456,000</td>
                <td>-</td>
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
