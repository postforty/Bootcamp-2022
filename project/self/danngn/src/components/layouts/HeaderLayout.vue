<template>
  <header id="fixed-bar" class="fixed-bar-box-shadow">
    <div id="fixed-bar-wrap">
      <a id="fixed-bar-logo-title" href="https://www.daangn.com/">
        <span class="sr-only">당근마켓</span>
        <img
          class="fixed-logo"
          alt="당근마켓"
          src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
          width="120"
          height="34"
        />
      </a>
      <section id="fixed-bar-search">
        <div class="search-input-wrap">
          <span class="sr-only">검색</span>
          <input
            type="text"
            name="header-search-input"
            id="header-search-input"
            class="fixed-search-input"
            placeholder="동네 이름, 물품명 등을 검색해보세요!"
          />
          <button id="header-search-button">
            <img
              class="fixed-search-icon"
              alt="Search"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
              width="24"
              height="24"
            />
          </button>
        </div>
      </section>
      <section class="fixed-bar-menu">
        <div class="fixed-download-wrapper">
          <input
            id="fixed-menu-checkbox"
            type="checkbox"
            class="fixed-checkbox"
          />
          <label for="fixed-menu-checkbox" class="fixed-label">
            다운로드
            <svg
              class="menu-icon-svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#4D5159"
                strokewidth="1.5"
                strokelinecap="round"
                strokelinejoin="round"
              ></path>
            </svg>
          </label>
          <ul class="fixed-menu-ul">
            <li>
              <a
                target="_blank"
                class="menu-anchor"
                id="header-download-button-ios"
                href="https://itunes.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&amp;ls=1&amp;mt=8"
              >
                <img
                  alt="App Store"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-3a664174124650d63cae365bc55586fc5ff27b822b1b97788fc4af77d73d00c8.svg"
                  width="15"
                  height="18"
                />
                <span>App Store</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                class="menu-anchor"
                id="header-download-button-android"
                href="https://play.google.com/store/apps/details?id=com.towneers.www"
              >
                <img
                  alt="Google Play"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-c9ad0fc573cd01e2b982df5de6709a3d8d7cec8d9b58a5c08db7da0b92a32a75.svg"
                  width="15"
                  height="18"
                />
                <span>Google Play</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="https://chat.daangn.com" target="_blank">
          <button class="chat-button">
            <span class="button-text">당근채팅</span>
            <span class="button-beta">Beta</span>
          </button>
        </a>
      </section>
    </div>
  </header>
</template>
