<script setup>
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import { ref } from "vue";
const inputValueA = ref("");
const inputValueB = ref("");
const inputValueC = ref("");
const inputValueD = ref("");

const onClear = (inputRef) => {
  inputRef.value = "";
};

const isDialogVisible = ref(false);
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2 align-center">
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
      :items="[
        {
          title: 'Home',
          to: { name: 'pages-published-collectpay-vwrite' },
        },
        { title: '수금' },
        { title: '카드수금등록' },
      ]"
    />
  </div>

  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        카드수금등록
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="primary">카드수금 등록완료</VBtn>
    </div>
  </TitleArea>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <div class="top-search-collect01-start">
            <VChip>
              <div class="gap-2 flex-wrap justify-start w-100 top-chip-item">
                <span class="item-title">영업담당자</span>
                <span class="item-text">김영업</span>
              </div>
            </VChip>
            <AppDateTimePicker
              v-model="dateRange"
              placeholder="날자 선택"
              prefix="조회기간"
              :config="{ mode: 'range' }"
              prepend-inner-icon="tabler-calendar-event"
              clearable
              @keydown.esc="onClear"
              v-show="expanded"
              class="w-100"
            />
          </div>
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12" v-show="expanded">
          <div class="d-flex gap-2 flex-wrap justify-end w-100">
            <VBtn
              color="primary"
              style="background-color: var(--bg-facebook) !important"
              ><VIcon start icon="tabler-search" />토스결제내역 조회</VBtn
            >
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" lg="9" md="12" sm="12" xs="12" class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            카드 수금내역 등록
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <!-- <DemoCustomInputCustomRadios />  참조-->
      <!-- 샘플 -->
      <VDialog v-model="isDialogVisible" width="500">
        <!-- Activator -->
        <template #activator="{ props }">
          <VCard class="data" v-bind="props">
            <VCardText>
              <div class="d-flex flex-column flex-md-row gap-2 w-100">
                <!-- 왼쪽 컨텐츠 -->
                <div class="d-flex flex-row flex-grow-1 justify-content-start">
                  <div class="item">
                    <VChip color="primary" size="small">
                      <div class="chip-item">
                        <span class="item-title">승인일자</span>
                        <span class="item-text">2024.12.12</span>
                      </div>
                    </VChip>
                  </div>
                  <div class="item">
                    <VChip color="primary" size="small">
                      <div class="chip-item">
                        <span class="item-title">승인번호</span>
                        <span class="item-text">12345678</span>
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
                  <div class="item">
                    <span class="item-title">수금등록상태</span>
                    <span class="item-text">등록</span>
                  </div>
                </div>
              </div>
            </VCardText>
          </VCard>
        </template>
        <!-- Dialog close btn -->
        <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />
        <VCard title="카드수금등록 상세입력">
          <VCardText>
            <BottomTotalArea>
              <div class="justify-content-start">
                <AppTextField
                  v-model="inputValueA"
                  label="거래처코드"
                  placeholder="거래처ID"
                  value="IDIDID"
                  clearable
                />
                <AppTextField
                  v-model="inputValueB"
                  placeholder="거래처명"
                  value="거래처명"
                  clearable
                />
              </div>
              <div class="justify-content-end">
                <AppTextField
                  placeholder="금액입력"
                  value="2,000,000"
                  prefix="수금예정금액 OTC"
                  suffix="원"
                  readonly
                  class="form-align-right"
                />
                <AppTextField
                  placeholder="금액입력"
                  value="2,000,000"
                  prefix="수금예정금액 ETC"
                  suffix="원"
                  readonly
                  class="form-align-right"
                />
                <AppTextField
                  v-model="inputValueC"
                  label="OTC수금"
                  placeholder="금액입력"
                  value="2,000,000"
                  suffix="원"
                  class="required form-align-right"
                  clearable
                  @keydown.esc="onClear"
                />
                <AppTextField
                  v-model="inputValueD"
                  label="ETC수금"
                  placeholder="금액입력"
                  value="2,000,000"
                  suffix="원"
                  class="required form-align-right"
                  clearable
                  @keydown.esc="onClear"
                />
                <AppTextField
                  label="수입합계금액액"
                  placeholder="금액입력"
                  value="2,000,000"
                  readonly
                  suffix="원"
                  class="form-align-right"
                />
              </div>
            </BottomTotalArea>
          </VCardText>

          <VCardText class="d-flex">
            <VBtn @click="isDialogVisible = false" class="v-100"
              >카드수금 등록저장</VBtn
            >
          </VCardText>
        </VCard>
      </VDialog>
      <!-- / 샘플 -->
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
                    <span class="item-title">승인일자</span>
                    <span class="item-text">2024.12.12</span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">승인번호</span>
                    <span class="item-text">12345678</span>
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
              <div class="item">
                <span class="item-title">수금등록상태</span>
                <span class="item-text">등록</span>
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
    <VCol cols="12" lg="3" class="sticky-area">
      <!-- md이하 모드에서 숨김-->
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            상세입력
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small">카드수금 등록저장</VBtn>
        </div>
      </STitleArea>
      <BottomTotalArea>
        <div class="justify-content-start">
          <AppTextField
            v-model="inputValueA"
            label="거래처코드"
            placeholder="거래처ID"
            value="IDIDID"
            clearable
          />
          <AppTextField
            v-model="inputValueB"
            placeholder="거래처명"
            value="거래처명"
            clearable
          />
        </div>
        <div class="justify-content-end">
          <AppTextField
            placeholder="금액입력"
            value="2,000,000"
            prefix="수금예정금액 OTC"
            suffix="원"
            readonly
            class="form-align-right"
          />
          <AppTextField
            placeholder="금액입력"
            value="2,000,000"
            prefix="수금예정금액 ETC"
            suffix="원"
            readonly
            class="form-align-right"
          />
          <AppTextField
            v-model="inputValueC"
            label="OTC수금"
            placeholder="금액입력"
            value="2,000,000"
            suffix="원"
            class="required form-align-right"
            clearable
            @keydown.esc="onClear"
          />
          <AppTextField
            v-model="inputValueD"
            label="ETC수금"
            placeholder="금액입력"
            value="2,000,000"
            suffix="원"
            class="required form-align-right"
            clearable
            @keydown.esc="onClear"
          />
          <AppTextField
            label="수입합계금액액"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </div>
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
.app-picker-field {
  flex: 1;
}
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
  gap: 8px 16px;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
// .card-table-infinity .data .justify-content-start .item:nth-child(1) {
//   width: 24px;
//   min-width: 24px;
//   height: 24px;
//   overflow: visible;
//   :deep(.v-selection-control__wrapper) {
//     margin: -6px;
//   }
// }
.card-table-infinity .data .justify-content-start .item:nth-child(1) {
  width: 140px;
  min-width: 140px;
  .v-chip {
    width: 140px;
  }
}
.card-table-infinity .data .justify-content-start .item:nth-child(2) {
  width: 140px;
  min-width: 140px;
  .v-chip {
    width: 140px;
  }
}

.card-table-infinity .data .justify-content-end {
  gap: 8px 16px;
  align-items: center;
}
.card-table-infinity .data .justify-content-end .item:nth-child(1) {
  width: 90px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(2) {
  width: 120px;
  justify-content: space-between;
}
.card-table-infinity .data .justify-content-end .item:nth-child(3) {
  width: 100px;
}
@media (max-width: 960px) {
  .top-search-collect01-start {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;
    .app-picker-field {
      width: 340px;
    }
  }
  .card-table-infinity .data .justify-content-start {
    flex-direction: row !important;
    justify-content: left;
    gap: 4px;
    .item:nth-child(3) {
      width: 100%;
    }
  }
  .card-table-infinity .data .justify-content-end {
    flex-direction: row !important;
    flex-wrap: wrap;
    gap: 4px 16px;
    justify-content: left;
  }
  // .card-table-infinity .data .justify-content-end .item:nth-child(1) {
  //   min-width: calc(50% - 8px);
  // }
  .card-table-infinity .data .justify-content-end .item:nth-child(1) {
    min-width: calc(32% - 8px);
    justify-content: space-between;
  }
  .card-table-infinity .data .justify-content-end .item:nth-child(2) {
    min-width: calc(32% - 8px);
    justify-content: space-between;
  }
  .card-table-infinity .data .justify-content-end .item:nth-child(3) {
    min-width: calc(32% - 8px);
    justify-content: space-between;
  }
  .v-card.data {
    .gap-2 {
      gap: 4px;
    }
  }
}
.botttom-total-area {
  padding: 28px;
  display: flex;
  flex-direction: column !important;
  .justify-content-start {
    display: flex;
    flex-direction: row !important;
    width: 100%;
    gap: 4px;
    align-items: flex-end;
    margin-bottom: 4px;
    .flex-grow-1:nth-child(1) {
      flex: 0;
    }
    .flex-grow-1:nth-child(2) {
      flex: 1;
    }
  }
  .justify-content-end {
    display: flex;
    flex-direction: column !important;
    width: 100%;
    gap: 4px;
  }
}
.sticky-area {
  position: sticky;
  top: 60px;
  z-index: 10; /* 다른 요소 위에 고정되도록 설정 */
  @media (max-width: 1280px) {
    display: none;

    position: relative;
    top: 0px;
    z-index: 1;
  }
}
.card-table-infinity,
.v-container,
.v-row {
  overflow: visible !important;
  align-items: flex-start;
  position: static !important;
}
</style>
