<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
        >
          <img
            class="fixed-logo"
            alt="당근마켓"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
            width="120"
            height="34"
          />
          <use xlink:href="#bootstrap"></use>
        </a>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="동네 이름, 물품명 등을 검색해보세요!"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <img
                class="fixed-search-icon"
                alt="Search"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
                width="24"
                height="24"
              />
            </button>
          </div>
        </form>
        <div class="dropdown">
          <button
            class="accordion-button collapsed"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            다운로드
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                target="_blank"
                class="dropdown-item"
                href="https://itunes.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&amp;ls=1&amp;mt=8"
                ><img
                  alt="App Store"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-3a664174124650d63cae365bc55586fc5ff27b822b1b97788fc4af77d73d00c8.svg"
                  width="15"
                  height="18"
                /><span>App Store</span></a
              >
            </li>
            <li>
              <a
                target="_blank"
                class="dropdown-item"
                href="https://play.google.com/store/apps/details?id=com.towneers.www"
                ><img
                  alt="Google Play"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-c9ad0fc573cd01e2b982df5de6709a3d8d7cec8d9b58a5c08db7da0b92a32a75.svg"
                  width="15"
                  height="18"
                /><span>Google Play</span></a
              >
            </li>
          </ul>
        </div>
        <a href="https://chat.daangn.com" target="_blank">
          <button class="chat-button">
            <span class="button-text">당근채팅</span>
            <span class="button-beta">Beta</span>
          </button>
        </a>
      </div>
    </div>
  </header>
</template>
<style></style>
