<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">개발자의품격</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/home' }"
                aria-current="page"
                @click="goToMenu('/home')"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/listtodetail' }"
                @click="goToMenu('/template/listtodetail')"
                >ListToDetail</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/singleedit' }"
                @click="goToMenu('/template/singleedit')"
                >SingleEdit</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/multipleedit' }"
                @click="goToMenu('/template/multipleedit')"
                >MultipleEdit</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/masterdetail' }"
                @click="goToMenu('/template/masterdetail')"
                >MultipleEdit</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/shuttle' }"
                @click="goToMenu('/template/shuttle')"
                >Shuttle</a
              >
            </li>
          </ul>
          <div class="d-flex">
            <span v-if="userInfo.name" class="text-white">{{
              userInfo.name
            }}</span>
            <button class="btn btn-outline-success" @click="logout">
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo
    }
  },
  methods: {
    goToMenu(path) {
      this.$router.push({ path: path })
    },
    logout() {
      this.$store.commit('user/logout')

      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
header {
  margin-bottom: 70px;
}
</style>
