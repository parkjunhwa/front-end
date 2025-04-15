<script setup>
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
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
        { title: '마스터관리' },
        { title: '단가마스터' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">단가마스터</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="3" md="3" sm="12" xs="12">
          <AppTextField
            append-inner-icon="tabler-search"
            placeholder="거래처 코드, 거래처명을 검색하세요."
          />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <AppTextField
            append-inner-icon="tabler-search"
            placeholder="제품코드, 제품명을 입력하세요."
          />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded"
          ><VRadioGroup v-model="inlineRadio" inline>
            <VRadio label="전체" value="radio-1" />
            <VRadio label="OTC" value="radio-2" />
            <VRadio label="ETC" value="radio-3" /> </VRadioGroup
        ></VCol>
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
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            단가 리스트
          </h5>
        </div>

        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small" variant="outlined" color="secondary"
            ><VIcon start icon="tabler-arrow-bar-to-down" />엑셀다운로드</VBtn
          >
          <VBtn size="small" variant="outlined" color="secondary"
            ><VIcon start icon="tabler-arrow-bar-to-up" />엑셀업로드</VBtn
          >
        </div>
      </STitleArea>
      <VCard class="basic-table-card">
        <VCardText>
          <VDataTable
            :headers="headers"
            :items="tabledata"
            density="compact"
            class="text-no-wrap"
            fixed-header
            style="max-height: 397px"
            hide-default-footer
          >
            <thead>
              <tr>
                <th>대출유형</th>
                <th>거래처코드</th>
                <th>거래처명</th>
                <th>제품코드</th>
                <th>간납납품코드</th>
                <th>간접납품처</th>
                <th>간접접납품처 지점명</th>
                <th>간접납품처 영업사원명</th>
                <th>단위</th>
                <th>시작일</th>
                <th>종료일</th>
                <th>단위가격(부가세제외)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
              <tr>
                <td>매출처</td>
                <td>IDIDID</td>
                <td>거래처(매출처)명</td>
                <td>IDIDID</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>IDIDID</td>
                <td>간접납품처명</td>
                <td>책임센터 명칭 출력</td>
                <td>EA</td>
                <td>24.10.24</td>
                <td>24.10.24</td>
                <td class="text-right">50,000</td>
              </tr>
            </tbody>
          </VDataTable>
          <div class="d-flex mt-2 flex-wrap justify-center w-100 card-more-btn">
            <VBtn size="small" color="secondary" variant="tonal">
              <VIcon start icon="tabler-plus" />
              더보기
            </VBtn>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            단가 상세 정보
          </h5>
        </div>

        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small">저장</VBtn>
        </div>
      </STitleArea>
      <BottomTotalArea>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppSelect
            label="품목유형"
            :items="items"
            v-model="selectedItem"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="거래처 코드/거래처명"
            value="[IDIDID]거래처명 출력"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="제품 코드/제품명"
            value="[IDIDID]제품명 출력"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppSelect
            label="간접납품처 코드/간접납품처명"
            :items="items"
            v-model="selectedItem"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="간접납품처 지점명"
            value="간접납품 지점명 출력(책임센터명)"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="간접납품처 영업사원명"
            value="영업사원명 출력"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12">
          <AppSelect
            label="단위"
            :items="items"
            v-model="selectedItem"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12">
          <AppDateTimePicker
            v-model="date1"
            label="시작일"
            :config="{ dateFormat: 'Y.m.d', allowInput: true }"
            prepend-inner-icon="tabler-calendar-event"
            clearable
            disabled
            @keydown.esc="onClear"
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12">
          <AppDateTimePicker
            v-model="date2"
            label="종료일"
            :config="{ dateFormat: 'Y.m.d', allowInput: true }"
            prepend-inner-icon="tabler-calendar-event"
            clearable
            disabled
            @keydown.esc="onClear"
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="단위가격(부가세제외)"
            placeholder="금액입력"
            value="2,000,000"
            suffix="원"
            class="required form-align-right"
          />
        </VCol>
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
      items: ["Option 1", "Option 2", "Option 3"],
      nameRules: [(v) => !!v || "필수 항목입니다"],
      date1: ["2024-10-11"],
      date2: ["2024-11-11"],
    };
  },
};
</script>

<style lang="scss" scoped>
.basic-table-card {
  .v-card-text {
    padding: 16px;
  }
}
.botttom-total-area {
  .app-picker-field {
    margin: -8px;
    width: calc(100% + 16px);
  }
}
</style>
