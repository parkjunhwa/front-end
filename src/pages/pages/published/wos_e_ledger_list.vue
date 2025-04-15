<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";

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

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="primary">잔고확인 조회</VBtn>
    </div>
  </div>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" class="top-search-eledgerlist">
          <div class="top-search-eledgerlist-start">
            <div class="item">
              <h6 class="d-flex text-h6 font-weight-medium align-center">
                [IDIDID] 선택 거래처명
              </h6>
            </div>
            <div class="item">
              <VChip color="primary" size="small">
                <div class="chip-item">
                  <span class="item-title">사업자번호</span>
                </div>
              </VChip>
              <span class="item-text">1234567890</span>
            </div>
            <div class="item">
              <VChip color="primary" size="small">
                <div class="chip-item">
                  <span class="item-title">대표자</span>
                </div>
              </VChip>
              <span class="item-text">홍길동</span>
            </div>
          </div>
          <div class="top-search-eledgerlist-end">
            <div class="item">
              <span class="item-title">지점명</span>
              <span class="item-text">1지부1팀</span>
            </div>
            <div class="item">
              <span class="item-title">담당자</span>
              <span class="item-text">김영업</span>
            </div>
            <div class="item">
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
          </div>
          <div class="top-search-eledgerlist-start2">
            <AppTextField
              prepend-inner-icon="tabler-asterisk-simple"
              value="여신여부 이상없음"
              type="text"
              class="creditfield"
              readonly
              v-show="expanded"
            />
            <div class="button" v-show="expanded">
              <VBtn variant="tonal">
                <VIcon start icon="tabler-search" />거래처 내역 조회
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
        <div class="d-flex gap-2 align-center flex-wrap"></div>
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
      nameRules: [(v) => !!v || "필수 항목입니다"],
      moon: ["2024-10", "2024-11"],
    };
  },
};
</script>
<style lang="scss" scoped>
.top-search-eledgerlist {
  display: flex;
  gap: 8px 16px;
  flex-direction: row !important;
  flex-wrap: wrap;
  justify-content: space-between;
}
.top-search-eledgerlist-start {
  display: flex;
  gap: 8px 16px;
  flex-direction: row !important;
  align-items: center;
  .item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .item:nth-child(1) h6 {
    flex-wrap: nowrap;
    text-overflow: ellipsis;
    width: max-content;
  }
}
.top-search-eledgerlist-end {
  display: flex;
  gap: 8px 16px;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-end;
  .item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
.top-search-eledgerlist-start2 {
  display: flex;
  gap: 8px 8px;
  flex-direction: row !important;
  align-items: center;
  flex: 1;
  min-width: 360px;
  max-width: 360px;
  .item {
    display: flex;
    align-items: center;
    gap: 4px 4px;
  }
}
@media (max-width: 960px) {
  .top-search-eledgerlist-start {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
    flex-direction: column !important;
    align-items: normal;
  }
  .top-search-eledgerlist-end {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
    justify-content: flex-start;
    flex-direction: row !important;
    align-items: normal;
    .item:nth-child(3) {
      width: 100%;
    }
  }
  .top-search-eledgerlist-start2 {
    max-width: 100%;
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
