<script setup>
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
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
        { title: '수금' },
        { title: '수금내역조회' },
      ]"
    />
  </div>
  <div
    class="page-title-area d-flex flex-wrap justify-start justify-sm-space-between gap-x-6 mb-6 align-items-center"
  >
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        수금내역조회
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </div>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
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
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="거래처코드, 거래처명을 검색하세요."
            v-show="expanded"
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
    <VCol cols="12" class="card-table-infinity">
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
            </div>
          </div>
        </VCardText> </VCard
      ><VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">수금일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">수금구분</span>
                <span class="item-text">카드</span>
              </div>
              <div class="item">
                <span class="item-title">금액</span>
                <span class="item-text">5,555,000</span>
              </div>
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
  <VRow>
    <VCol cols="12">
      <BottomTotalArea>
        <AppTextField
          label="합계"
          placeholder="금액입력"
          value="2,000,000"
          readonly
          suffix="원"
          class="form-align-right"
        />
      </BottomTotalArea>
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
      dateRange: ["2024-10-11", "2024-11-10"],
    };
  },
};
</script>
<style lang="scss" scoped>
.top-search-collect01-start {
  display: flex;
  gap: 8px;
  flex-direction: row !important;
  align-items: center;
}
.card-table-infinity .data {
  gap: 8px 16px;
}
.card-table-infinity .data .justify-content-start {
  gap: 16px;
  justify-content: flex-start;
}
.card-table-infinity .data .justify-content-start .item:nth-child(1) {
  width: 140px;
  min-width: 140px;
  .v-chip {
    width: 140px;
  }
}
.card-table-infinity .data .justify-content-end .item:nth-child(1) {
  width: 90px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(2) {
  width: 140px;
  justify-content: space-between;
}
@media (max-width: 960px) {
  .top-search-collect01-start {
    display: flex;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;
  }
  .collect-start {
    gap: 8px;
    align-items: center;
  }
  .card-table-infinity .data .justify-content-start {
    flex-direction: column !important;
    justify-content: left;
    gap: 4px;
  }
  .card-table-infinity .data .justify-content-end {
    justify-content: space-between;
    .item:last-child {
      justify-content: space-between;
    }
  }
  .v-card.data {
    .gap-2 {
      gap: 4px;
    }
  }
}
</style>
