<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">DevSewol</a>
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
                @Click="goToMenu('/home')"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/listtodetail' }"
                @Click="goToMenu('/template/listtodetail')"
                >ListToDetail</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/singleedit' }"
                @Click="goToMenu('/template/singleedit')"
                >SingleEdit</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/multipleedit' }"
                @Click="goToMenu('/template/multipleedit')"
                >MultipleEdit</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/masterdetail' }"
                @Click="goToMenu('/template/masterdetail')"
                >MasterDetail</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/shuttle' }"
                @Click="goToMenu('/template/shuttle')"
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
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/hello">hello</router-link>
  </nav> -->
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
      this.$store.commit('user/logout', {})

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
