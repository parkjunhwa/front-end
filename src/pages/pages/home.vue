<script setup>
import STitleArea from "@/layouts/components/STitleArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import Alert001 from "@/pages/pages/published/alert/alert001.vue";
import Alert002 from "@/pages/pages/published/alert/alert002.vue";
import Alert003 from "@/pages/pages/published/alert/alert003.vue";
import Alert004 from "@/pages/pages/published/alert/alert004.vue";
import Alert005 from "@/pages/pages/published/alert/alert005.vue";
import Alert006 from "@/pages/pages/published/alert/alert006.vue";
import Alert007 from "@/pages/pages/published/alert/alert007.vue";
import Alert008 from "@/pages/pages/published/alert/alert008.vue";
import Popup001 from "@/pages/pages/published/popup/popup001.vue";
import Popup002 from "@/pages/pages/published/popup/popup002.vue";
import Popup003 from "@/pages/pages/published/popup/popup003.vue";
import Popup004 from "@/pages/pages/published/popup/popup004.vue";
import Popup005 from "@/pages/pages/published/popup/popup005.vue";
import Popup006 from "@/pages/pages/published/popup/popup006.vue";
import Popup007 from "@/pages/pages/published/popup/popup007.vue";
import Popup008 from "@/pages/pages/published/popup/popup008.vue";
import Popup009 from "@/pages/pages/published/popup/popup009.vue";
import Popup010 from "@/pages/pages/published/popup/popup010.vue";
import Popup011 from "@/pages/pages/published/popup/popup011.vue";
import Popup012 from "@/pages/pages/published/popup/popup012.vue";
import Popup013 from "@/pages/pages/published/popup/popup013.vue";
import Popup014 from "@/pages/pages/published/popup/popup014.vue";
import Popup015 from "@/pages/pages/published/popup/popup015.vue";
import chart00 from "@/views/charts/apex-chart/chart00.vue";
</script>

<template>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            나의목표실적
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <VCard class="chart_area">
        <chart00 />
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            공지사항
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <VCard class="data v-card-clickable" v-ripple @click="handleClick">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-4 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">5</span></div>
              <div class="item">
                <VChip
                  color="primary"
                  size="x-small"
                  variant="elevated"
                  class="custom-chip"
                >
                  <VIcon icon="tabler-pinned" />
                </VChip>
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.공지사항 타이틀이 이렇게
                  들어갑니다.공지사항 타이틀이 이렇게 들어갑니다.공지사항
                  타이틀이 이렇게 들어갑니다.</span
                >
                <VChip color="error" size="x-small" variant="elevated">N</VChip>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
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
              <div class="item"><span class="item-num">4</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
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
              <div class="item"><span class="item-num">3</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
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
              <div class="item"><span class="item-num">2</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
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
              <div class="item"><span class="item-num">1</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="3" md="4" sm="6" xs="12">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>
        <VCol cols="12" class="d-flex flex-wrap justify-center">
          <div class="d-flex gap-2 mt-2 flex-wrap justify-center w-100">
            <VBtn variant="outlined" color="secondary">취소</VBtn>
            <VBtn color="primary">저장</VBtn>
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="12" class="card-table-infinity">
      <div class="d-flex justify-start flex-wrap">
        <h5 class="d-flex text-h5 font-weight-medium align-center">팝업목록</h5>
      </div>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" class="d-flex flex-wrap gap-2">
      <Popup001 />
      <Popup002 />
      <Popup003 />
      <Popup004 />
      <Popup005 />
      <Popup006 />
      <Popup007 />
      <Popup008 />
      <Popup009 />
      <Popup010 />
      <Popup011 />
      <Popup012 />
      <Popup013 />
      <Popup014 />
      <Popup015 />
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <div class="d-flex justify-start flex-wrap">
        <h5 class="d-flex text-h5 font-weight-medium align-center">얼럿</h5>
      </div>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" class="d-flex flex-wrap gap-2">
      <Alert001 />
      <Alert002 />
      <Alert003 />
      <Alert004 />
      <Alert005 />
      <Alert006 />
      <Alert007 />
      <Alert008 />
    </VCol>
  </VRow>
</template>

<script>
export default {
  data() {
    return {
      expanded: false, // Now 'expanded' is defined in the parent
      values: "",
      items: ["Option 1", "Option 2", "Option 3"],
      nameRules: [(v) => !!v || "필수 항목입니다"],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-table-infinity {
  .v-chip .v-icon {
    block-size: 14px;
    font-size: 14px;
    inline-size: 14px;
    width: 20px;
  }
}
.custom-chip {
  padding: 0 !important;
  border-radius: 10px !important;
  min-width: 20px !important;
}
.item-num {
  color: var(--primary-main);
}
.card-table-infinity .data .gap-4 {
  gap: 4px 16px;
}
.card-table-infinity .data .justify-content-start {
  align-items: center;
  gap: 4px 16px;
  overflow: hidden;
}

.card-table-infinity .data .justify-content-start .item:nth-child(1) {
  width: 50px;
  min-width: 50px;
  align-items: center;
}
.item-cell-title {
  white-space: nowrap; /* 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* ...으로 표시 */
}
.card-table-infinity .data .justify-content-start .item:nth-child(2) {
  align-items: center;
  overflow: hidden;
  gap: 4px;
}
.card-table-infinity .data .justify-content-end {
  gap: 4px 16px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(1) {
  width: 93px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(2) {
  width: 121px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(3) {
  width: 120px;
}
@media (max-width: 960px) {
  .card-table-infinity .data .justify-content-end {
    justify-content: space-between;
    gap: 4px 16px;
  }
  .card-table-infinity .data .justify-content-start .item:nth-child(1) {
    width: inherit;
    min-width: inherit;
    flex: 0;
  }
  .card-table-infinity .data .gap-4 {
    gap: 4px;
  }
  .card-table-infinity .data .justify-content-start {
    align-items: center;
    gap: 4px;
    overflow: hidden;
  }
  .app-picker-field {
    width: 100%;
  }
}
.v-chip.bg-error {
  min-width: 30px;
}
</style>
