<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
const inputA = ref(1234567489);
const inputB = ref("홍길동");
const inputC = ref("이상없음");
const inputD = ref("회전초과");
const inputE = ref("여신초과");
const currentTab = ref("window1");

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
        { title: '거래원장' },
        { title: '거래원장조회' },
      ]"
    />
  </div>
  <div
    class="page-title-area d-flex flex-wrap justify-start justify-sm-space-between gap-x-6 mb-6 align-items-center"
  >
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        거래원장조회
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </div>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="12" md="12" sm="12" xs="12">
          <div class="top-search-eledgerlist-start">
            <AppTextField
              prepend-inner-icon="tabler-asterisk-simple"
              append-inner-icon="tabler-search"
              placeholder="거래처코드, 거래처명을 검색하세요."
            />
            <AppTextField
              v-model="inputA"
              prefix="사업자번호"
              type="number"
              readonly
              v-show="expanded"
            />
            <AppTextField
              v-model="inputB"
              prefix="대표자"
              type="text"
              readonly
              v-show="expanded"
            />
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
          </div>
        </VCol>
        <VCol cols="12" lg="12" md="12" sm="12" xs="12">
          <div class="top-search-eledgerlist-end">
            <AppTextField
              v-model="inputC"
              prefix="OTC회전여부"
              type="text"
              readonly
              class="otcfield text-right"
              v-show="expanded"
            />
            <AppTextField
              v-model="inputD"
              prefix="ETC회전여부"
              type="text"
              readonly
              class="etcfield text-right error--text"
              v-show="expanded"
            />
            <AppTextField
              v-model="inputE"
              prefix="여신여부"
              type="text"
              readonly
              class="creditfield text-right error--text"
              v-show="expanded"
            />
            <div class="button" v-show="expanded">
              <VBtn variant="tonal">
                <VIcon start icon="tabler-search" />거래처 회전 내역 조회
              </VBtn>
            </div>
          </div>
        </VCol>

        <VCol cols="12" v-show="expanded">
          <div class="d-flex gap-2 flex-wrap justify-center w-100">
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
          <VTabs v-model="currentTab" class="v-tabs-pill">
            <VTab>전체</VTab>
            <VTab>ETC</VTab>
            <VTab>OTC</VTab>
          </VTabs>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small"
            ><VIcon start icon="tabler-plus" />거래원장 전자서명</VBtn
          >
        </div>
      </STitleArea>
      <VCard class="basic-table-card">
        <VCardText>
          <VWindow v-model="currentTab">
            <VWindowItem v-for="item in 3" :key="`window${item}`">
              <VDataTable
                :headers="headers"
                :items="tabledata"
                density="compact"
                class="text-no-wrap"
                fixed-header
                style="max-height: 314px"
                hide-default-footer
              >
                <thead>
                  <tr>
                    <th>일자</th>
                    <th>품목명</th>
                    <th>규격</th>
                    <th>수량</th>
                    <th>단가</th>
                    <th>공급가액</th>
                    <th>부가세</th>
                    <th>잔고</th>
                    <th>서명확인</th>
                  </tr>
                </thead>

                <tbody>
                  <tr class="total-line">
                    <td>전기이월</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-right font-weight-bold">1,000,000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>24.12.12</td>
                    <td>이가탄에프캡슐</td>
                    <td>규격명</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>24.12.12</td>
                    <td>이가탄에프캡슐</td>
                    <td>규격명</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>24.12.12</td>
                    <td>이가탄에프캡슐</td>
                    <td>규격명</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>24.12.12</td>
                    <td>이가탄에프캡슐</td>
                    <td>규격명</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td></td>
                  </tr>
                  <tr class="total-line">
                    <td>24.01</td>
                    <td>판매</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-right font-weight-bold">1,000,000</td>
                    <td class="text-right font-weight-bold">1,000,000</td>
                    <td class="text-right font-weight-bold">-</td>
                    <td></td>
                  </tr>
                  <tr class="total-line">
                    <td>24.01</td>
                    <td>수금</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-right font-weight-bold">1,000,000</td>
                    <td class="text-right font-weight-bold">-</td>
                    <td class="text-right font-weight-bold">-</td>
                    <td>
                      <VBtn size="x-small" color="success">
                        거래원장 전자서명
                      </VBtn>
                      <span class="ml-2"> 2024.12.12 </span>
                    </td>
                  </tr>
                  <tr>
                    <td>24.12.12</td>
                    <td>이가탄에프캡슐</td>
                    <td>규격명</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>24.12.12</td>
                    <td>이가탄에프캡슐</td>
                    <td>규격명</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td class="text-right">1,000,000</td>
                    <td></td>
                  </tr>
                  <tr class="total-line">
                    <td>24.01</td>
                    <td>판매</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-right font-weight-bold">1,000,000</td>
                    <td class="text-right font-weight-bold">1,000,000</td>
                    <td class="text-right font-weight-bold">-</td>
                    <td></td>
                  </tr>
                  <tr class="total-line">
                    <td>24.01</td>
                    <td>수금</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-right font-weight-bold">1,000,000</td>
                    <td class="text-right font-weight-bold">-</td>
                    <td class="text-right font-weight-bold">-</td>
                    <td>
                      <VBtn size="x-small" color="success">
                        거래원장 전자서명
                      </VBtn>
                      <span class="ml-2"> 2024.12.12 </span>
                    </td>
                  </tr>
                </tbody>
              </VDataTable>
            </VWindowItem>
          </VWindow>
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
.top-search-eledgerlist-start {
  display: flex;
  gap: 8px;
  flex-direction: row !important;
  align-items: center;
}

.top-search-eledgerlist-start {
  .app-text-field:nth-child(2) {
    max-width: 220px;
  }
  .app-text-field:nth-child(3) {
    max-width: 150px;
  }
}

.top-search-eledgerlist-end {
  display: flex;
  gap: 8px;
  flex-direction: row !important;
  align-items: center;
}
.top-search-eledgerlist-end {
  .app-text-field {
    max-width: 180px;
  }
}
.app-picker-field {
  flex: 1;
}
@media (max-width: 960px) {
  .top-search-eledgerlist-start {
    display: flex;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;
    .app-text-field:nth-child(2) {
      max-width: none;
    }
    .app-text-field:nth-child(3) {
      max-width: none;
    }
  }
  .top-search-eledgerlist-end {
    display: flex;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;
    .app-text-field {
      max-width: none;
    }
    .button {
      .v-btn {
        width: 100%;
      }
    }
  }
  .app-picker-field {
    width: 100%;
  }
}

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
.page-stitle-area {
  @media (max-width: 960px) {
    .v-slide-group {
      width: 100%;
    }
  }
}
</style>
