<script setup>
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
const inputValue = ref("");
const selectedItem = ref("있음");
const items = ["있음", "없음"];
const onClear = () => {
  inputValue.value = "";
};
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2 align-center">
    <VIcon size="18" icon="tabler-arrow-left" />
    <router-link to="-1" class="text-secondary">이전</router-link>
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        거래처마스터 상세
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            거래처 상세정보
          </h5>
        </div>

        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <BottomTotalArea>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12">
          <AppTextField label="거래처코드" value="IDIDID" readonly />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            label="거래처명"
            value="거래처 명칭 출력"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="1" md="1" sm="12" xs="12">
          <AppTextField label="책임센터코드" value="IDIDID" readonly />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            label="책임센터명"
            value="서울종병1지부"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="1" md="1" sm="12" xs="12">
          <AppTextField label="위치코드" value="IDIDID" readonly />
        </VCol>

        <VCol cols="12" lg="1" md="1" sm="12" xs="12">
          <AppTextField label="영업사원코드" value="IDIDID" readonly />
        </VCol>
        <VCol cols="12" lg="5" md="5" sm="12" xs="12">
          <AppTextField
            label="영업사원명"
            value="서울종병1지부"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="이메일"
            value="거래처메일주소@sdsd.com"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12">
          <AppTextField
            label="부가세등록번호"
            value="IDIDID"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12">
          <AppSelect
            label="행정취급허가증 여부"
            :items="items"
            v-model="selectedItem"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12">
          <AppTextField
            label="전화번호"
            value="010-0000-0000"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="1" md="1" sm="12" xs="12">
          <AppTextField
            label="대표자"
            value="홍길동"
            class="required"
            readonly
          />
        </VCol>

        <VCol cols="12" lg="2" md="2" sm="12" xs="12">
          <AppTextField
            label="매출처가격그룹"
            value="직거래약국,의원"
            class="required"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="1" md="1" sm="12" xs="12">
          <AppTextField
            label="유통구분분"
            value="병,의원원"
            class="required"
            readonly
          />
        </VCol>
      </BottomTotalArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            간납처 상세정보
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
            class="table01 text-no-wrap"
            fixed-header
            style="max-height: 144px"
            hide-default-footer
          >
            <thead>
              <tr>
                <th>코드</th>
                <th>간납처명</th>
                <th>영업사원코드</th>
                <th>영업사원명</th>
                <th>주소</th>
                <th>시작일</th>
                <th>종료일</th>
                <th>매출처가격그룹</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IDIDID</td>
                <td>간납처명</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>간납처방처 주소입니다.</td>
                <td>2024.02.01</td>
                <td>2024.02.31</td>
                <td>매출처</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>간납처명</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>간납처방처 주소입니다.</td>
                <td>2024.02.01</td>
                <td>2024.02.31</td>
                <td>매출처</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>간납처명</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>간납처방처 주소입니다.</td>
                <td>2024.02.01</td>
                <td>2024.02.31</td>
                <td>매출처</td>
              </tr>
            </tbody>
          </VDataTable>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            원외처방처 상세정보
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
            class="table01 text-no-wrap"
            fixed-header
            style="max-height: 144px"
            hide-default-footer
          >
            <thead>
              <tr>
                <th>코드</th>
                <th>원외처방처명</th>
                <th>영업사원코드</th>
                <th>영업사원명</th>
                <th>주소</th>
                <th>시작일</th>
                <th>종료일</th>
                <th>매출처가격그룹</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IDIDID</td>
                <td>간납처명</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>간납처방처 주소입니다.</td>
                <td>2024.02.01</td>
                <td>2024.02.31</td>
                <td>매출처</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>간납처명</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>간납처방처 주소입니다.</td>
                <td>2024.02.01</td>
                <td>2024.02.31</td>
                <td>매출처</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>간납처명</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>간납처방처 주소입니다.</td>
                <td>2024.02.01</td>
                <td>2024.02.31</td>
                <td>매출처</td>
              </tr>
            </tbody>
          </VDataTable>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            출고지 상세정보
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
            class="table02 text-no-wrap"
            fixed-header
            style="max-height: 144px"
            hide-default-footer
          >
            <thead>
              <tr>
                <th>구분</th>
                <th>코드</th>
                <th>출고지명</th>
                <th>주소</th>
                <th>요양기관번호</th>
                <th>상대마약류 취급자 식별 번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>전체</td>
                <td>IDIDID</td>
                <td>출고지명</td>
                <td>출고지 주소입니다.</td>
                <td>IDIDIDIDIDIDIDID</td>
                <td>IDIDIDIDIDIDIDID</td>
              </tr>
              <tr>
                <td>원외처방처</td>
                <td>IDIDID</td>
                <td>출고지명</td>
                <td>출고지 주소입니다.</td>
                <td>IDIDIDIDIDIDIDID</td>
                <td>IDIDIDIDIDIDIDID</td>
              </tr>
              <tr>
                <td>전체</td>
                <td>IDIDID</td>
                <td>출고지명</td>
                <td>출고지 주소입니다.</td>
                <td>IDIDIDIDIDIDIDID</td>
                <td>IDIDIDIDIDIDIDID</td>
              </tr>
            </tbody>
          </VDataTable>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.basic-table-card {
  .v-card-text {
    padding: 16px;
  }
  .table01 tr {
    td:nth-child(1) {
      width: 104px;
    }
    td:nth-child(2) {
      width: 200px;
    }
    td:nth-child(3) {
      width: 104px;
    }
    td:nth-child(4) {
      width: 104px;
    }
    td:nth-child(6) {
      width: 120px;
    }
    td:nth-child(7) {
      width: 120px;
    }
    td:nth-child(8) {
      width: 120px;
    }
  }
  .table02 tr {
    td:nth-child(1) {
      width: 104px;
    }
    td:nth-child(2) {
      width: 104px;
    }
    td:nth-child(3) {
      width: 200px;
    }
    td:nth-child(5) {
      width: 120px;
    }
    td:nth-child(6) {
      width: 120px;
    }
  }
}
</style>
