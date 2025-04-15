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
const currentTab = ref("window1");
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
                      <VDialog v-model="isDialogVisible" width="500">
                        <!-- Activator -->
                        <template #activator="{ props }">
                          <VBtn
                            variant="text"
                            v-bind="props"
                            class="text-primary ms-2 mb-1"
                            >비밀번호 재설정</VBtn
                          >
                        </template>

                        <!-- Dialog close btn -->
                        <DialogCloseBtn
                          @click="isDialogVisible = !isDialogVisible"
                        />
                        <!-- Dialog Content -->
                        <VCard title="비밀번호 재설정">
                          <VCardText>
                            <!-- <AppTextField placeholder="회사코드" />  도매상의 경우 -->
                            <AppTextField placeholder="아이디" />
                            <AppTextField placeholder="이름" />
                          </VCardText>
                          <VCardText class="d-flex justify-end gap-2 flex-wrap">
                            <VBtn @click="isDialogVisible = false">
                              비밀번호 변경</VBtn
                            >
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
  .v-card-text {
    background: none;
  }
  .v-card--variant-elevated {
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
</style>
