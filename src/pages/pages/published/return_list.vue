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
        { title: '반품' },
        { title: '반품내역조회' },
      ]"
    />
  </div>

  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        반품내역조회
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="9" md="9" sm="12" xs="12">
          <div class="top-search-return-start">
            <AppTextField
              prepend-inner-icon="tabler-asterisk-simple"
              append-inner-icon="tabler-search"
              placeholder="거래처코드, 거래처명을 검색하세요."
            />
            <AppTextField
              prepend-inner-icon="tabler-asterisk-simple"
              append-inner-icon="tabler-search"
              placeholder="부서 및 사원을 검색하세요."
              v-show="expanded"
            />
            <AppDateTimePicker
              v-model="dateRange"
              placeholder="날자 선택"
              prefix="조회기간"
              :config="{ mode: 'range' }"
              prepend-inner-icon="tabler-calendar-event"
              clearable
              @keydown.esc="onClear"
              v-show="expanded"
            />
          </div>
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
    <VCol class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            반품 정보 목록
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="primary" size="small"> 처리완료 </VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="primary" size="small"> 처리완료 </VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="info" size="small"> 주문생성 </VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text"
                  ><VChip size="small"> 반품의뢰</VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="primary" size="small"> 처리완료 </VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="info" size="small"> 주문생성 </VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text"
                  ><VChip size="small"> 반품의뢰</VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="primary" size="small"> 처리완료 </VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="info" size="small"> 주문생성 </VChip>
                </span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
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
                    <span class="item-title">반품번호</span>
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
                <span class="item-cell-title"> [IDIDID]거래처명</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="info" size="small"> 주문생성 </VChip>
                </span>
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
.top-search-return-start {
  display: flex;
  gap: 8px;
  flex-direction: row !important;
  align-items: center;
  .app-text-field {
    max-width: 300px;
  }
}
.card-table-infinity .data {
  gap: 8px 16px;
}
.card-table-infinity .data .justify-content-start {
  gap: 8px 16px;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
.card-table-infinity .data .justify-content-start .item:nth-child(1) {
  width: 190px;
  .v-chip {
    width: 100%;
  }
}
.card-table-infinity .data .justify-content-start .item:nth-child(2) {
  width: 210px;
  .v-chip {
    width: 100%;
  }
}
.card-table-infinity .data .justify-content-start .item:nth-child(3) {
  width: 180px;
  .v-chip {
    width: 100%;
  }
}
.card-table-infinity .data .justify-content-end {
  gap: 8px 16px;
  align-items: center;
}
.card-table-infinity .data .justify-content-end .item {
  width: 120px;
  align-items: center;
  .item-text {
    width: 68px;
  }
  .v-chip {
    width: 100%;
    justify-content: center;
  }
}
.app-picker-field {
  width: 340px;
}
@media (max-width: 960px) {
  .top-search-return-start {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;
    .app-text-field {
      max-width: none;
    }
  }
  .card-table-infinity .data .justify-content-start {
    flex-direction: column !important;
    justify-content: left;
    gap: 4px;
    align-items: normal;
  }
  .card-table-infinity .data .justify-content-end {
    flex-direction: row !important;
    flex-wrap: wrap;
    gap: 4px;
    .item-text {
      width: auto;
    }
  }
  .card-table-infinity .data .justify-content-end .item {
    width: 100%;
  }
  .v-card.data {
    .gap-2 {
      gap: 4px;
    }
  }

  .app-picker-field {
    width: 100%;
  }
}
</style>
