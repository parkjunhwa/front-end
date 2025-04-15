<script setup>
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";

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
        { title: '주문' },
        { title: '주문내역조회' },
      ]"
    />
  </div>

  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        주문내역조회
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="3" md="6" sm="12" xs="12">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="거래처코드, 거래처명을 검색하세요."
          />
        </VCol>
        <VCol cols="12" lg="3" md="6" sm="12" xs="12" v-show="expanded">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="부서 및 사원을 검색하세요."
          />
        </VCol>
        <VCol cols="12" lg="3" md="6" sm="12" xs="12" v-show="expanded">
          <AppDateTimePicker
            v-model="dateRange"
            placeholder="날자 선택"
            prefix="조회기간"
            :config="{ mode: 'range' }"
            prepend-inner-icon="tabler-calendar-event"
            clearable
            @keydown.esc="onClear"
          />
        </VCol>
        <VCol cols="12" lg="3" md="6" sm="12" xs="12" v-show="expanded"
          ><VRadioGroup v-model="inlineRadio" inline>
            <VRadio label="전체" value="radio-1" />
            <VRadio label="OTC" value="radio-2" />
            <VRadio label="ETC" value="radio-3" /> </VRadioGroup
        ></VCol>
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
    <VCol class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            주문 목록
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small" color="secondary" variant="tonal"
            ><VIcon start icon="tabler-minus" />삭제
          </VBtn>
          <VBtn size="small"
            ><VIcon start icon="tabler-plus" />관리자 승인</VBtn
          >
        </div>
      </STitleArea>
      <VCard class="data">
        <VCardText>
          <!-- 왼쪽 컨텐츠 -->
          <div class="d-flex flex-row flex-grow-1 justify-content-start">
            <div class="grid01">
              <div class="d-flex flex-row flex-md-row gap-2 w-100">
                <div class="item">
                  <VCheckbox />
                </div>
                <div class="item">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text">MIDIDIDIDIDID</span>
                    </div>
                  </VChip>
                </div>
                <div class="item">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">주문번호</span>
                      <span class="item-text">IDIDIDIDIDIDIDIDIDID</span>
                    </div>
                  </VChip>
                </div>
                <div class="item">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품신청일</span>
                      <span class="item-text">2024.12.12</span>
                    </div>
                  </VChip>
                </div>
                <div class="item">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">유형</span>
                      <span class="item-text">OTC-일반약</span>
                    </div>
                  </VChip>
                </div>
              </div>
            </div>
            <div class="grid02">
              <div class="d-flex flex-row flex-md-row gap-2 w-100">
                <div class="item">
                  <span class="item-cell-title">
                    [IDIDID]거래처명거래처명거래처명거래처명거래처명</span
                  >
                </div>
                <div class="item">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">간납처</span>
                    </div>
                  </VChip>
                  <span class="item-text">[ididid]선택 간납처명</span>
                </div>
                <div class="item">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">처방처</span>
                    </div>
                  </VChip>
                  <span class="item-text">[ididid]선택 처방처명</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 오른쪽 컨텐츠 -->
          <div class="d-flex flex-row justify-content-end">
            <div class="item">
              <span class="item-title">공급가액(VAT제외)</span>
              <span class="item-text">80,000</span>
            </div>
            <div class="item">
              <span class="item-title">관리자 승인</span>
              <span class="item-text">승인</span>
            </div>
            <div class="item">
              <span class="item-title">주문상태</span>
              <span class="item-text">확정</span>
            </div>
          </div>
        </VCardText>
      </VCard>
      <div class="d-flex mt-2 flex-wrap justify-center w-100 card-more-btn">
        <VBtn size="small" color="secondary" variant="tonal">
          <VIcon start icon="tabler-plus" />
          더보기
        </VBtn>
      </div>
    </VCol>
  </VRow>
</template>
<script>
export default {
  data() {
    return {
      expanded: true,
      values: "",
      dateRange: ["2024-10-11", "2024-11-10"],
    };
  },
};
</script>

<style lang="scss" scoped>
.top-search-order-start {
  display: flex;
  gap: 8px;
  flex-direction: row !important;
  align-items: center;

  .app-text-field {
    max-width: 300px;
  }
}

.card-table-infinity {
  .data {
    gap: 8px 16px;

    .v-card-text {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
    }

    .justify-content-start {
      gap: 8px;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: center;
      flex: 1;
      .grid01 {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .item {
          &:nth-child(1) {
            width: 24px;
            min-width: 24px;
            height: 24px;
            overflow: visible;

            :deep(.v-selection-control__wrapper) {
              margin: -6px;
            }
          }

          &:nth-child(2) {
            width: 190px;
            .v-chip {
              width: 100%;
            }
          }
          &:nth-child(3) {
            width: 210px;
            .v-chip {
              width: 100%;
            }
          }
          &:nth-child(4),
          &:nth-child(5) {
            width: 160px;

            .v-chip {
              width: 100%;
            }
          }
        }
      }
      .grid02 {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .item {
          &:nth-child(1) {
            flex: 1;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          &:nth-child(2),
          &:nth-child(3) {
            flex: 0;
            min-width: 240px;
          }
        }
      }
    }

    .justify-content-end {
      gap: 8px 16px;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      flex: 0;
      .item {
        align-items: center;
        width: 100%;

        &:nth-child(1) {
          width: 180px;
          justify-content: space-between;
        }

        &:nth-child(2),
        &:nth-child(3) {
          width: 100px;
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .card-table-infinity {
    .data {
      gap: 4px 16px;

      .v-card-text {
        display: flex;
        flex-flow: column;
      }
      .grid01 .d-flex {
        flex-flow: row !important;
        flex-wrap: wrap !important;

        .item {
          &:nth-child(2) {
            width: 180px;
            .v-chip {
              width: 100%;
            }
          }
          &:nth-child(3) {
            width: 210px;
            .v-chip {
              width: 100%;
            }
          }
          &:nth-child(4) {
            width: 160px;
          }
        }
      }
      .grid02 .d-flex {
        flex-flow: column !important;
      }

      .justify-content-start {
        flex-direction: column !important;
        justify-content: left;
        gap: 4px;
        align-items: normal;
      }

      .justify-content-end {
        flex-direction: row !important;
        flex-wrap: wrap;
        gap: 4px 16px;
        justify-content: flex-start;

        .item {
          width: 100%;
        }
      }
    }
  }

  .top-search-order-start {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;

    .app-text-field {
      max-width: none;
    }
  }

  .item-cell-title {
    display: block;
  }

  .v-card.data {
    .gap-2 {
      gap: 4px;
    }
  }
}
.app-picker-field {
  width: 100%;
  min-width: auto;
}
</style>
