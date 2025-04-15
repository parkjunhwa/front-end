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
        <VCol cols="12" class="top-search-return">
          <div class="top-search-return-start">
            <div class="item">
              <h6 class="d-flex text-h6 font-weight-medium align-center">
                [IDIDID] 로그인 거래처명
              </h6>
            </div>
          </div>
          <div class="top-search-return-mid" v-show="expanded">
            <div class="item">
              <AppDateTimePicker
                v-model="dateRange"
                placeholder="날자 선택"
                prefix="조회기간"
                :config="{ mode: 'range' }"
                prepend-inner-icon="tabler-calendar-event"
                clearable
                @keydown.esc="onClear"
                style="min-width: 320px"
              />
            </div>
            <div class="item">
              <AppSelect :items="items" placeholder="처리상태" />
            </div>
          </div>
          <Vcol class="top-search-return-end" v-show="expanded">
            <div class="d-flex gap-2 justify-end w-100">
              <VBtn variant="outlined" color="secondary"
                ><VIcon start icon="tabler-refresh" />초기화</VBtn
              >
              <VBtn color="primary"
                ><VIcon start icon="tabler-search" />조회</VBtn
              >
            </div>
          </Vcol>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text"
                  >선택한 반품 수거지 선택한 반품 수거지</span
                >
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text"
                  >수거요청사항 글이 있습니다.수거요청사항 글이 있습니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text"
                  ><VChip color="error" size="small"> 반품불가</VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 </span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="primary" size="small"> 반품완료 </VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 반품 수거지 주소 상세 출력</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청사항 글이 있습니다.</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="info" size="small"> 진행중 </VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 반품 수거지 주소 상세 출력</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청사항 글이 있습니다.</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text"
                  ><VChip size="small"> 반품등록</VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 반품 수거지 주소 상세 출력</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청사항 글이 있습니다.</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="primary" size="small"> 반품완료 </VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 반품 수거지 주소 상세 출력</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청사항 글이 있습니다.</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="info" size="small"> 진행중 </VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 반품 수거지 주소 상세 출력</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청사항 글이 있습니다.</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text"
                  ><VChip size="small"> 반품등록</VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 반품 수거지 주소 상세 출력</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청사항 글이 있습니다.</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="primary" size="small"> 반품완료 </VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 반품 수거지 주소 상세 출력</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청사항 글이 있습니다.</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="info" size="small"> 진행중 </VChip>
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
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">반품수거지</span>
                  </div>
                </VChip>
                <span class="item-text">선택한 반품 수거지 주소 상세 출력</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">비고</span>
                  </div>
                </VChip>
                <span class="item-text">수거요청사항 글이 있습니다.</span>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">처리상태</span>
                <span class="item-text">
                  <VChip color="info" size="small"> 진행중 </VChip>
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
      items: ["Option 1", "Option 2", "Option 3"],
      nameRules: [(v) => !!v || "필수 항목입니다"],
      dateRange: ["2024-10-11", "2024-11-10"],
    };
  },
};
</script>

<style lang="scss" scoped>
.top-search-return {
  display: flex;
  gap: 8px 16px;
  flex-direction: row !important;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.top-search-return-start {
  display: flex;
  flex-wrap: wrap;
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
.top-search-return-end {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-end;
  .item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  @media (max-width: 1024px) {
    flex: 0 0 100%;
  }
}
.top-search-return-mid {
  display: flex;
  gap: 8px;
  flex-direction: row !important;
  align-items: center;
  .app-text-field {
    max-width: 300px;
  }
  .item:last-child {
    min-width: 160px;
    width: 100%;
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
.card-table-infinity .data .justify-content-start .item {
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
  width: 160px;
  .v-chip {
    width: 100%;
  }
}
.card-table-infinity .data .justify-content-start .item:nth-child(4),
.card-table-infinity .data .justify-content-start .item:nth-child(5) {
  width: 300px;
  display: flex;
  flex-direction: row !important;
  .item-text {
    white-space: wrap;
  }
}
.card-table-infinity .data .justify-content-start .item:nth-child(4) .v-chip {
  min-width: 75px;
}
.card-table-infinity .data .justify-content-start .item:nth-child(5) .v-chip {
  min-width: 42px;
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
  .top-search-return-mid {
    display: flex;
    gap: 8px;
    width: 100%;
    flex-direction: column !important;
    align-items: center;

    .app-text-field {
      width: 100% !important;
    }
    .item {
      width: 100%;
    }
  }
  .top-search-return-end {
    display: flex;
    gap: 8px;
    width: 100%;
    flex-direction: row !important;
    align-items: center;

    .app-text-field {
      width: 100% !important;
    }
    .item {
      width: 100%;
    }
  }
  .card-table-infinity .data .justify-content-end {
    flex-direction: row !important;
    flex-wrap: wrap;
    gap: 4px;
  }
  .card-table-infinity .data .justify-content-end .item {
    width: 100%;
    .item-text {
      width: auto;
    }
  }
  .v-card.data {
    .gap-2 {
      gap: 4px;
    }
  }
  .card-table-infinity .data .justify-content-start .item:nth-child(4),
  .card-table-infinity .data .justify-content-start .item:nth-child(5) {
    width: 100%;
  }

  .app-picker-field {
    width: 100%;
  }
}
</style>
