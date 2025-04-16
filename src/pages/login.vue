<!-- ❗Errors in the form are set on line 60 -->
<script setup lang="ts">
import logoIcon from "@images/logos/logo.png";
import { themeConfig } from "@themeConfig";
import { VForm } from "vuetify/components/VForm";
definePage({
  meta: {
    layout: "blank",
    unauthenticatedOnly: true,
  },
});
const isPasswordVisible = ref(false);
const route = useRoute();
const router = useRouter();
const ability = useAbility();

const errors = ref<Record<string, string | undefined>>({
  email: undefined,
  password: undefined,
});

const refVForm = ref<VForm>();

const credentials = ref({
  email: "admin@demo.com",
  password: "admin",
});

const rememberMe = ref(false);

const login = async () => {
  try {
    const res = await $api("/auth/login", {
      method: "POST",
      body: {
        email: credentials.value.email,
        password: credentials.value.password,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors;
      },
    });

    const { accessToken, userData, userAbilityRules } = res;

    useCookie("userAbilityRules").value = userAbilityRules;
    ability.update(userAbilityRules);

    useCookie("userData").value = userData;
    useCookie("accessToken").value = accessToken;

    // Redirect to `to` query if exist or redirect to index route
    // ❗ nextTick is required to wait for DOM updates and later redirect
    await nextTick(() => {
      router.replace(route.query.to ? String(route.query.to) : "/");
    });
  } catch (err) {
    console.error(err);
  }
};

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) login();
  });
};

// 입력 값 초기화 함수
const onClear1 = () => {
  credentials.value.companycode = "";
};
const onClear2 = () => {
  credentials.value.userid = "";
};
const onClear3 = () => {
  credentials.value.password = "";
};

// 팝업
const isDialogVisible = ref(false);
const isDialogTwoShow = ref(false);

import { ref } from "vue";

const password = ref("");
const confirmPassword = ref("");
const show = ref(false);

// 상황에 맞게 개발수정 필요
const passwordRules = [
  (v) => !!v || "비밀번호를 입력해주세요.",
  (v) => v.length >= 8 || "8글자 이상 입력해주세요.",
  (v) => /[0-9]/.test(v) || "숫자를 포함해야 합니다.",
  (v) => /[a-zA-Z]/.test(v) || "문자를 포함해야 합니다.",
  (v) => /[^a-zA-Z0-9]/.test(v) || "특수문자를 포함해야 합니다.",
];

const matchPasswordRule = (v) =>
  v === password.value || "비밀번호가 일치하지 않습니다.";
</script>

<template>
  <div
    class="auth-wrapper d-flex align-center justify-center pa-5 background-image"
  >
    <div class="position-relative">
      <VRow class="match-height">
        <VCol cols="12" sm="12" lg="6" class="d-none d-lg-block">
          <VCard class="auth-card background-side">
            <VCardText class="pa-12">
              <h1 class="text-h1 mb-5 text-white" style="font-weight: 700">
                <span class="color-red">Better</span><br />
                Quality medicine<br /><span class="color-red">Better</span
                ><br />
                Public Health
              </h1>
              <p class="text-white text-h6 mb-0">
                ‘좋은 치료제, 넘치는 건강’ 명인제약 입니다.
              </p>
            </VCardText>
            <div class="icon">
              <img src="@images/logos/logo_w.png" alt="logo" />
            </div>
          </VCard>
        </VCol>
        <VCol cols="12" sm="12" lg="6">
          <VCard class="auth-card">
            <VCardText class="pa-12">
              <VCol cols="12" class="pa-0 text-center d-block d-lg-none">
                <RouterLink to="/" class="d-inline-block pb-6">
                  <div class="app-logo align-center">
                    <v-img>
                      <img :src="logoIcon" alt="Logo" />
                    </v-img>
                    <h1 class="app-logo-title">
                      {{ themeConfig.app.title }}
                    </h1>
                  </div>
                </RouterLink>
                <h5 class="text-h5 mb-1 text-primary">
                  <span class="color-blue">Better</span>
                  Quality medicine<br /><span class="color-blue">Better</span>
                  Public Health
                </h5>
                <p class="text-body-2 mb-10">
                  ‘좋은 치료제, 넘치는 건강’ 명인제약 입니다.
                </p>
              </VCol>
              <h4 class="text-h4 mb-8">로그인</h4>
              <VForm ref="refVForm" @submit.prevent="onSubmit">
                <VRow>
                  <!-- companycode -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="credentials.companycode"
                      autofocus
                      label="회사코드"
                      type="text"
                      placeholder="회사코드 입력"
                      prepend-inner-icon="tabler-building-community"
                      clearable
                      @keydown.esc="onClear1"
                    />
                  </VCol>
                  <!-- userid -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="credentials.userid"
                      label="아이디 입력"
                      type="text"
                      placeholder="아이디 입력"
                      prepend-inner-icon="tabler-user"
                      clearable
                      @keydown.esc="onClear2"
                    />
                  </VCol>
                  <!-- password -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="credentials.password"
                      label="비밀번호"
                      placeholder="비밀번호 입력"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      autocomplete="password"
                      prepend-inner-icon="tabler-lock"
                      clearable
                      @keydown.esc="onClear3"
                      :append-inner-icon="
                        isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                      "
                      @click:append-inner="
                        isPasswordVisible = !isPasswordVisible
                      "
                    />
                  </VCol>
                  <VCol cols="12">
                    <!-- remember me checkbox -->
                    <div
                      class="d-flex align-center justify-space-between flex-wrap"
                    >
                      <VCheckbox v-model="rememberMe" label="아이디 저장" />

                      <VBtn
                        variant="text"
                        class="text-primary ms-2 mb-1 px-0 min-h-0 resetpass"
                        @click="isDialogVisible = true"
                      >
                        비밀번호 재설정
                      </VBtn>

                      <!-- Dialog -->
                      <VDialog v-model="isDialogVisible" class="v-dialog-sm">
                        <!-- Dialog close btn -->
                        <DialogCloseBtn
                          @click="isDialogVisible = !isDialogVisible"
                        />
                        <VCard title="비밀번호 재설정">
                          <VCardText>
                            <!-- <AppTextField placeholder="회사코드" />  도매상의 경우 -->
                            <AppTextField placeholder="아이디" />
                            <AppTextField placeholder="이름" />
                          </VCardText>
                          <VCardText class="d-flex flex-wrap">
                            <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
                              비밀번호 변경</VBtn
                            >
                          </VCardText>
                        </VCard>
                      </VDialog>

                      <!-- Dialog 2 -->
                      <VDialog v-model="isDialogTwoShow" class="v-dialog-sm">
                        <!-- Dialog close btn -->
                        <DialogCloseBtn @click="isDialogTwoShow = false" />

                        <VCard title="비밀번호 재설정">
                          <VCardText>
                            <AppTextField
                              placeholder="신규 비밀번호를 입력해주세요."
                              :type="show ? 'text' : 'password'"
                              :rules="passwordRules"
                            />
                            <AppTextField
                              placeholder="동일한 비밀번호를 입력해 주세요."
                              :type="show ? 'text' : 'password'"
                              :rules="[matchPasswordRule]"
                            />
                            <ul class="ml-4 text-secondary">
                              <li>
                                비밀번호는 숫자, 문자, 특수기호를 포함하여 8글자
                                이상 구성하여야 합니다.
                              </li>
                              <li>
                                최근 사용한 3개의 비밀번호는 사용이 불가합니다.
                              </li>
                            </ul>
                          </VCardText>
                          <VCardText class="d-flex flex-wrap">
                            <VBtn @click="isDialogTwoShow = false">
                              비밀번호 변경 완료
                            </VBtn>
                          </VCardText>
                        </VCard>
                      </VDialog>
                    </div>
                  </VCol>
                  <VCol cols="12">
                    <!-- login button -->
                    <VBtn block type="submit"> 로그인</VBtn>
                  </VCol>
                  <!-- create account -->
                  <VCol cols="12" class="text-body-2 text-center">
                    <RouterLink
                      class="text-primary ms-1 d-inline-block text-body-2"
                      to="/email_password_confirm.html"
                    >
                      관리자에게 계정요청
                    </RouterLink>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
      <div class="d-flex align-center justify-center footer">
        <span class="d-flex align-center text-body-2">
          &copy;
          {{ new Date().getFullYear() }}
          명인제약 by UBCare All Right Reserved.
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/pages/page-auth";
.text-h2 {
  font-weight: 700;
}
.text-h5 {
  font-weight: 700;
}
.app-logo-desk {
  display: flex;
  height: 64px;
  width: fit-content;
  gap: 12px;
  .app-logo-title {
    font-size: 44px;
  }
  img {
    height: 64px;
  }
  .v-responsive__content {
    flex: none;
  }
}
@media (max-width: 1280px) {
  .layout-wrapper > .v-card-text {
    background: none;
  }
  .match-height > .v-col-sm-12 > .v-card--variant-elevated {
    background: none;
    box-shadow: none;
  }
  .v-field__overlay {
    background: #fff !important;
  }
  .app-logo {
    height: 40px;
    gap: 8px;
    .app-logo-title {
      font-size: 28px;
    }
    img {
      height: 40px;
    }
  }
  .footer {
    width: 100%;
  }
  .background-image {
    background-color: #fff;
  }
  .resetpass {
    flex: none;
    width: auto;
  }
}
@media (min-width: 1281px) {
  .position-relative {
    width: 1000px;
  }
  .footer {
    margin-top: 24px;
  }
  .background-image {
    background-color: var(--color-primary-primary-100);
  }
  .match-height {
    > .v-col-12 {
      padding: 0 !important;
      height: 650px;
    }
  }
}
.background-side {
  background: url("@/assets/images/front-pages/backgrounds/login-bg-02.png"),
    linear-gradient(151deg, black 0%, #00348b 100%);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
}
.auth-card {
  border-radius: 20px;
}
.color-red {
  color: #e60012;
}
.color-blue {
  color: #113264;
}
.icon {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  img {
    height: 24px;
  }
}
.resetpass {
  background-color: transparent !important;
  box-shadow: none !important;
  min-height: auto !important;
  padding: 0 !important;
  font-weight: normal !important;
  :deep(.v-btn__overlay),
  :deep(.v-ripple__container) {
    display: none !important;
  }
}
</style>
