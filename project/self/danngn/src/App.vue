<template>
  <HeaderLayout />
  <SectionLayoutA />
  <SectionLayoutB />
  <SectionLayoutC />
  <SectionLayoutD />
  <SectionLayoutE />
  <SectionLayoutF />
  <!-- <router-view /> -->
  <FooterLayout />
</template>
<script>
import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
import SectionLayoutA from '@/components/layouts/SectionLayoutA.vue'
import SectionLayoutB from '@/components/layouts/SectionLayoutB.vue'
import SectionLayoutC from '@/components/layouts/SectionLayoutC.vue'
import SectionLayoutD from '@/components/layouts/SectionLayoutD.vue'
import SectionLayoutE from '@/components/layouts/SectionLayoutE.vue'
import SectionLayoutF from '@/components/layouts/SectionLayoutF.vue'
export default {
  components: {
    HeaderLayout,
    FooterLayout,
    SectionLayoutA,
    SectionLayoutB,
    SectionLayoutC,
    SectionLayoutD,
    SectionLayoutE,
    SectionLayoutF
  }
}
</script>
<style>
.fb_hidden {
  position: absolute;
  top: -10000px;
  z-index: 10001;
}
.fb_reposition {
  overflow: hidden;
  position: relative;
}
.fb_invisible {
  display: none;
}
.fb_reset {
  background: none;
  border: 0;
  border-spacing: 0;
  color: #000;
  cursor: auto;
  direction: ltr;
  font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1;
  margin: 0;
  overflow: visible;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-spacing: normal;
}
.fb_reset > div {
  overflow: hidden;
}
@keyframes fb_transform {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.fb_animate {
  animation: fb_transform 0.3s forwards;
}
.fb_dialog {
  background: rgba(82, 82, 82, 0.7);
  position: absolute;
  top: -10000px;
  z-index: 10001;
}
.fb_dialog_advanced {
  border-radius: 8px;
  padding: 10px;
}
.fb_dialog_content {
  background: #fff;
  color: #373737;
}
.fb_dialog_close_icon {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png)
    no-repeat scroll 0 0 transparent;
  cursor: pointer;
  display: block;
  height: 15px;
  position: absolute;
  right: 18px;
  top: 17px;
  width: 15px;
}
.fb_dialog_mobile .fb_dialog_close_icon {
  left: 5px;
  right: auto;
  top: 5px;
}
.fb_dialog_padding {
  background-color: transparent;
  position: absolute;
  width: 1px;
  z-index: -1;
}
.fb_dialog_close_icon:hover {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png)
    no-repeat scroll 0 -15px transparent;
}
.fb_dialog_close_icon:active {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png)
    no-repeat scroll 0 -30px transparent;
}
.fb_dialog_iframe {
  line-height: 0;
}
.fb_dialog_content .dialog_title {
  background: #6d84b4;
  border: 1px solid #365899;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
.fb_dialog_content .dialog_title > span {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif)
    no-repeat 5px 50%;
  float: left;
  padding: 5px 0 7px 26px;
}
body.fb_hidden {
  height: 100%;
  left: 0;
  margin: 0;
  overflow: visible;
  position: absolute;
  top: -10000px;
  transform: none;
  width: 100%;
}
.fb_dialog.fb_dialog_mobile.loading {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif)
    white no-repeat 50% 50%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 10001;
}
.fb_dialog.fb_dialog_mobile.loading.centered {
  background: none;
  height: auto;
  min-height: initial;
  min-width: initial;
  width: auto;
}
.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner {
  width: 100%;
}
.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content {
  background: none;
}
.loading.centered #fb_dialog_loader_close {
  clear: both;
  color: #fff;
  display: block;
  font-size: 18px;
  padding-top: 20px;
}
#fb-root #fb_dialog_ipad_overlay {
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  min-height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10000;
}
#fb-root #fb_dialog_ipad_overlay.hidden {
  display: none;
}
.fb_dialog.fb_dialog_mobile.loading iframe {
  visibility: hidden;
}
.fb_dialog_mobile .fb_dialog_iframe {
  position: sticky;
  top: 0;
}
.fb_dialog_content .dialog_header {
  background: linear-gradient(from(#738aba), to(#2c4987));
  border-bottom: 1px solid;
  border-color: #043b87;
  box-shadow: white 0 1px 1px -1px inset;
  color: #fff;
  font: bold 14px Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: rgba(0, 30, 84, 0.296875) 0 -1px 0;
  vertical-align: middle;
  white-space: nowrap;
}
.fb_dialog_content .dialog_header table {
  height: 43px;
  width: 100%;
}
.fb_dialog_content .dialog_header td.header_left {
  font-size: 12px;
  padding-left: 5px;
  vertical-align: middle;
  width: 60px;
}
.fb_dialog_content .dialog_header td.header_right {
  font-size: 12px;
  padding-right: 5px;
  vertical-align: middle;
  width: 60px;
}
.fb_dialog_content .touchable_button {
  background: linear-gradient(from(#4267b2), to(#2a4887));
  background-clip: padding-box;
  border: 1px solid #29487d;
  border-radius: 3px;
  display: inline-block;
  line-height: 18px;
  margin-top: 3px;
  max-width: 85px;
  padding: 4px 12px;
  position: relative;
}
.fb_dialog_content .dialog_header .touchable_button input {
  background: none;
  border: none;
  color: #fff;
  font: bold 12px Helvetica, sans-serif;
  margin: 2px -12px;
  padding: 2px 6px 3px 6px;
  text-shadow: rgba(0, 30, 84, 0.296875) 0 -1px 0;
}
.fb_dialog_content .dialog_header .header_center {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
}
.fb_dialog_content .dialog_content {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif)
    no-repeat 50% 50%;
  border: 1px solid #4a4a4a;
  border-bottom: 0;
  border-top: 0;
  height: 150px;
}
.fb_dialog_content .dialog_footer {
  background: #f5f6f7;
  border: 1px solid #4a4a4a;
  border-top-color: #ccc;
  height: 40px;
}
#fb_dialog_loader_close {
  float: left;
}
.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon {
  visibility: hidden;
}
#fb_dialog_loader_spinner {
  animation: rotateSpinner 1.2s linear infinite;
  background-color: transparent;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
}
@keyframes rotateSpinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fb_iframe_widget {
  display: inline-block;
  position: relative;
}
.fb_iframe_widget span {
  display: inline-block;
  position: relative;
  text-align: justify;
}
.fb_iframe_widget iframe {
  position: absolute;
}
.fb_iframe_widget_fluid_desktop,
.fb_iframe_widget_fluid_desktop span,
.fb_iframe_widget_fluid_desktop iframe {
  max-width: 100%;
}
.fb_iframe_widget_fluid_desktop iframe {
  min-width: 220px;
  position: relative;
}
.fb_iframe_widget_lift {
  z-index: 1;
}
.fb_iframe_widget_fluid {
  display: inline;
}
.fb_iframe_widget_fluid span {
  width: 100%;
}
.fb_mpn_mobile_landing_page_slide_out {
  animation-duration: 200ms;
  animation-name: fb_mpn_landing_page_slide_out;
  transition-timing-function: ease-in;
}
.fb_mpn_mobile_landing_page_slide_out_from_left {
  animation-duration: 200ms;
  animation-name: fb_mpn_landing_page_slide_out_from_left;
  transition-timing-function: ease-in;
}
.fb_mpn_mobile_landing_page_slide_up {
  animation-duration: 500ms;
  animation-name: fb_mpn_landing_page_slide_up;
  transition-timing-function: ease-in;
}
.fb_mpn_mobile_bounce_in {
  animation-duration: 300ms;
  animation-name: fb_mpn_bounce_in;
  transition-timing-function: ease-in;
}
.fb_mpn_mobile_bounce_out {
  animation-duration: 300ms;
  animation-name: fb_mpn_bounce_out;
  transition-timing-function: ease-in;
}
.fb_mpn_mobile_bounce_out_v2 {
  animation-duration: 300ms;
  animation-name: fb_mpn_fade_out;
  transition-timing-function: ease-in;
}
.fb_customer_chat_bounce_in_v2 {
  animation-duration: 300ms;
  animation-name: fb_bounce_in_v2;
  transition-timing-function: ease-in;
}
.fb_customer_chat_bounce_in_from_left {
  animation-duration: 300ms;
  animation-name: fb_bounce_in_from_left;
  transition-timing-function: ease-in;
}
.fb_customer_chat_bounce_out_v2 {
  animation-duration: 300ms;
  animation-name: fb_bounce_out_v2;
  transition-timing-function: ease-in;
}
.fb_customer_chat_bounce_out_from_left {
  animation-duration: 300ms;
  animation-name: fb_bounce_out_from_left;
  transition-timing-function: ease-in;
}
.fb_invisible_flow {
  display: inherit;
  height: 0;
  overflow-x: hidden;
  width: 0;
}
@keyframes fb_mpn_landing_page_slide_out {
  0% {
    margin: 0 12px;
    width: 100% - 24px;
  }
  60% {
    border-radius: 18px;
  }
  100% {
    border-radius: 50%;
    margin: 0 24px;
    width: 60px;
  }
}
@keyframes fb_mpn_landing_page_slide_out_from_left {
  0% {
    left: 12px;
    width: 100% - 24px;
  }
  60% {
    border-radius: 18px;
  }
  100% {
    border-radius: 50%;
    left: 12px;
    width: 60px;
  }
}
@keyframes fb_mpn_landing_page_slide_up {
  0% {
    bottom: 0;
    opacity: 0;
  }
  100% {
    bottom: 24px;
    opacity: 1;
  }
}
@keyframes fb_mpn_bounce_in {
  0% {
    opacity: 0.5;
    top: 100%;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
@keyframes fb_mpn_fade_out {
  0% {
    bottom: 30px;
    opacity: 1;
  }
  100% {
    bottom: 0;
    opacity: 0;
  }
}
@keyframes fb_mpn_bounce_out {
  0% {
    opacity: 1;
    top: 0;
  }
  100% {
    opacity: 0.5;
    top: 100%;
  }
}
@keyframes fb_bounce_in_v2 {
  0% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom right;
  }
  50% {
    transform: scale(1.03, 1.03);
    transform-origin: bottom right;
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom right;
  }
}
@keyframes fb_bounce_in_from_left {
  0% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom left;
  }
  50% {
    transform: scale(1.03, 1.03);
    transform-origin: bottom left;
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom left;
  }
}
@keyframes fb_bounce_out_v2 {
  0% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom right;
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom right;
  }
}
@keyframes fb_bounce_out_from_left {
  0% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom left;
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom left;
  }
}
@keyframes slideInFromBottom {
  0% {
    opacity: 0.1;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideInFromBottomDelay {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  97% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@font-face {
  font-family: 'Gilroy-Bold';
  src: url(https://d1unjqcospf8gs.cloudfront.net/assets/Gilroy-Bold-76f01426d347c0a032cb7669f76f457dfe153f125b58f0ab76a71693796c6918.woff);
}
* {
  margin: 0;
  padding: 0;
}
html {
  min-width: 980px;
  height: 100%;
  font-size: 62.5%;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  min-height: calc(100% - 77px);
  position: relative;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
h3 {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.6px;
  color: #212529;
  text-align: center;
  margin-bottom: 40px;
}
.clear {
  clear: both;
}
.hide {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
}
#town-banner {
  text-align: left;
  padding: 48px 0;
  background-color: #fff4ee;
}
#town-banner #town-banner-wrap {
  position: relative;
  width: 980px;
  margin: 0 auto;
}
#town-banner #town-banner-wrap .town-logo {
  width: 154px;
  display: block;
  margin-bottom: 10px;
}
#town-banner #town-banner-wrap .town-banner-desc {
  color: #212529;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 12px;
}
#town-banner #town-banner-wrap .town-link-button {
  display: block;
  text-align: center;
  background-color: #ff8a3d;
  width: 240px;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
}
#town-banner #town-banner-wrap .town-illust {
  position: absolute;
  bottom: 8px;
  right: 30px;
  width: 322px;
}
#introduction {
  text-align: center;
  padding-top: 120px;
  padding-bottom: 20px;
  background-color: #f8f9fa;
}
#introduction #introduction-wrap {
  width: 980px;
  margin: 0 auto;
}
#introduction .introduction-detail {
  display: inline-block;
  margin-right: 138px;
  margin-bottom: 100px;
}
#introduction .introduction-detail .introduction-title {
  margin-top: 32px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: -0.6px;
  text-align: center;
}
#introduction .introduction-detail .introduction-desc {
  margin-top: 6px;
  font-size: 17px;
  line-height: 1.59;
  letter-spacing: -1.2px;
  text-align: center;
  color: #495057;
}
#introduction .introduction-detail:nth-child(3n) {
  margin-right: 0;
}
.home-chatting,
.home-checkin,
.home-notification,
.home-share,
.home-temperature,
.home-thanks,
.home-logo,
.home-icon-add:hover,
.home-icon-add,
.home-icon-quotation {
  display: inline-block;
  background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/base/icon-set-50e8f0ea464db3f581f26893911142973cff6fedc7c2c917725338ddd47f5648.png)
    no-repeat;
  overflow: hidden;
  text-indent: -9999px;
  text-align: left;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-resolution: 1.5dppx) {
  .home-chatting,
  .home-checkin,
  .home-notification,
  .home-share,
  .home-temperature,
  .home-thanks,
  .home-logo,
  .home-icon-add:hover,
  .home-icon-add,
  .home-icon-quotation {
    background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/base/icon-set@2x-f3a71226a57dc10686a03d9336d94ae48731c6400f91d585711e3cb0ea553c78.png)
      no-repeat;
    background-size: 230px 1417px;
  }
  #header-top #header-title-wrap #header-image {
    background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/base/phone@2x-9611a35b152568b8a6c1deaff4b665668e3350c62382eccfaf496e974cef5d50.png);
  }
}
.home-checkin {
  background-position: -0px -0px;
  width: 230px;
  height: 230px;
}
.home-temperature {
  background-position: -0px -230px;
  width: 230px;
  height: 230px;
}
.home-chatting {
  background-position: -0px -460px;
  width: 230px;
  height: 230px;
}
.home-notification {
  background-position: -0px -690px;
  width: 230px;
  height: 230px;
}
.home-share {
  background-position: -0px -920px;
  width: 230px;
  height: 230px;
}
.home-thanks {
  background-position: -0px -1150px;
  width: 230px;
  height: 230px;
}
.home-logo {
  background-position: -0px -1380px;
  width: 123px;
  height: 37px;
}
.home-icon-add-hover {
  background-position: -123px -1380px;
  width: 25px;
  height: 24px;
}
.home-icon-add {
  background-position: -148px -1380px;
  width: 24px;
  height: 24px;
}
.home-icon-quotation {
  background-position: -172px -1380px;
  width: 16px;
  height: 15px;
}
::-moz-placeholder {
  color: #868e96;
  opacity: 1;
}
:-ms-input-placeholder {
  color: #868e96;
  opacity: 1;
}
::-ms-input-placeholder {
  color: #868e96;
  opacity: 1;
}
::placeholder {
  color: #868e96;
  opacity: 1;
}
input {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
#fixed-bar {
  width: 100%;
  background-color: #fff;
}
#fixed-bar #fixed-bar-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px 0;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-logo-title {
  display: inline-block;
  margin-right: 32px;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-logo-title .fixed-logo {
  width: 120px;
  margin-bottom: 5px;
  vertical-align: text-bottom;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-search {
  flex: 1;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-search .search-input-wrap {
  display: flex;
  max-width: 400px;
  height: 40px;
  justify-content: space-between;
  padding: 0 1.6rem;
  border-radius: 5px;
  border: solid 1px #e9ecef;
  text-decoration: none;
  box-sizing: border-box;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-search .search-input-wrap:focus-within {
  border: solid 1px #212529;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-search
  .search-input-wrap
  .fixed-search-input {
  display: block;
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #212529;
  background-color: transparent;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-search
  .search-input-wrap
  .fixed-search-input:focus {
  outline: none;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-search
  .search-input-wrap
  .fixed-search-icon {
  width: 19px;
  height: 19px;
  fill: #868e96;
  padding: 1rem 0;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-search
  .search-input-wrap
  #header-search-button {
  border: none;
  margin: 0;
  background-color: transparent;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-search .search-keyword-wrap {
  border: 1px solid #ff8a3d;
  width: 448px;
  padding: 10px;
  background: #fff;
  z-index: 101;
  line-height: 2;
  display: none;
  font-size: 16px;
  font-weight: 600;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-search
  .search-keyword-wrap
  .search-keyword-text {
  color: #ff8a3d;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-search
  .search-keyword-wrap
  .search-keyword-list {
  white-space: normal;
  word-break: normal;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-search
  .search-keyword-wrap
  .search-keyword-list
  .search-keyword {
  text-decoration: none;
  color: #212529;
  white-space: nowrap;
  margin-right: 8px;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-download .fixed-download-button {
  width: 140px;
  border-radius: 5px;
  border: solid 1px #e9ecef;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 0.9rem 0;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-download
  .fixed-download-button
  .fixed-download-text {
  display: inline-block;
  color: #495057;
  font-size: 14px;
  margin-left: 8px;
  font-weight: 700;
  vertical-align: middle;
}
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-download
  .fixed-download-button
  .fixed-google-play,
#fixed-bar
  #fixed-bar-wrap
  #fixed-bar-download
  .fixed-download-button
  .fixed-apple-store {
  fill: #495057;
  vertical-align: middle;
  display: inline-block;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-download .fixed-download-button:hover {
  border: solid 1px #ced4da;
}
#fixed-bar #fixed-bar-wrap #fixed-bar-download #header-download-button-ios {
  margin-right: 8px;
}
#fixed-bar #fixed-bar-wrap .fixed-bar-menu {
  display: flex;
  font-family: Noto Sans KR;
  color: #4d5159;
}
#fixed-bar #fixed-bar-wrap .fixed-bar-menu .fixed-download-wrapper {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-label {
  display: inline-flex;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.02em;
  cursor: pointer;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-label
  .menu-icon-svg {
  margin-left: 9px;
  margin-top: -3px;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-checkbox {
  display: none;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-checkbox:checked
  + .fixed-label
  .menu-icon-svg {
  transform: rotateX(-180deg);
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-checkbox:checked
  ~ .fixed-menu-ul {
  display: block;
  opacity: 1;
  z-index: 1;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-menu-ul {
  list-style-type: none;
  display: none;
  position: absolute;
  width: 200px;
  height: 114px;
  top: 46px;
  right: 0;
  border: 1px solid #868b94;
  padding: 24px;
  background: #f8f9fa;
  box-sizing: border-box;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.5s;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-menu-ul
  li {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-menu-ul
  li
  .menu-anchor {
  display: block;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: #4d5159;
  cursor: pointer;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-menu-ul
  li
  .menu-anchor
  img {
  vertical-align: middle;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-menu-ul
  li
  .menu-anchor
  span {
  margin-left: 8px;
  vertical-align: text-top;
}
#fixed-bar
  #fixed-bar-wrap
  .fixed-bar-menu
  .fixed-download-wrapper
  .fixed-menu-ul
  li
  ~ li {
  margin-top: 24px;
}
#fixed-bar #fixed-bar-wrap .fixed-bar-menu .chat-button {
  margin: 0;
  width: 120px;
  height: 40px;
  border: 1px solid #d1d3d8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 0;
}
#fixed-bar #fixed-bar-wrap .fixed-bar-menu .chat-button span {
  font-style: normal;
  font-weight: bold;
  vertical-align: middle;
}
#fixed-bar #fixed-bar-wrap .fixed-bar-menu .chat-button span.button-text {
  color: #4d5159;
  font-size: 16px;
}
#fixed-bar #fixed-bar-wrap .fixed-bar-menu .chat-button span.button-beta {
  margin-top: 1px;
  margin-left: 2px;
  font-family: Roboto;
  font-size: 14px;
  color: #ff7e36;
}
.fixed-bar-box-shadow {
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}
body.global #fixed-bar #fixed-bar-wrap {
  width: 1150px;
  padding: 0;
  height: 68px;
  display: flex;
  justify-content: space-between;
  font-family: Gilroy-Bold;
  font-weight: 700;
}
body.global #fixed-bar #fixed-bar-wrap #fixed-bar-logo-title {
  display: flex;
  align-items: center;
}
body.global #fixed-bar #fixed-bar-wrap a {
  text-decoration: none;
}
body.global #fixed-bar #fixed-bar-wrap a:hover {
  opacity: 0.64;
}
body.global #fixed-bar #fixed-bar-wrap ul {
  list-style: none;
}
body.global #fixed-bar #fixed-bar-wrap .links {
  display: flex;
  gap: 28px;
}
body.global #fixed-bar #fixed-bar-wrap .links li {
  display: flex;
  align-items: center;
}
body.global #fixed-bar #fixed-bar-wrap .social-links {
  display: flex;
  gap: 28px;
}
body.global #fixed-bar #fixed-bar-wrap .social-link {
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
}
body.global #fixed-bar #fixed-bar-wrap .nav-links {
  color: #212124;
  vertical-align: middle;
  font-size: 16px;
  line-height: 28px;
}
body.global #fixed-bar #fixed-bar-wrap .active {
  color: #ff7e36;
}
body.global
  #fixed-bar
  #fixed-bar-wrap
  #fixed-bar-download
  .fixed-download-button {
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}
body.global
  #fixed-bar
  #fixed-bar-wrap
  #fixed-bar-download
  .fixed-download-button:hover {
  background-color: #17191d;
}
body.global
  #fixed-bar
  #fixed-bar-wrap
  #fixed-bar-download
  .fixed-download-button:hover {
  border-color: rgba(255, 255, 255, 0.6);
}
body.global
  #fixed-bar
  #fixed-bar-wrap
  #fixed-bar-download
  .fixed-download-button
  .fixed-download-text {
  color: #fff;
}
footer {
  background-color: #495057;
  color: #fff;
  padding: 8rem 0;
}
footer .footer-container {
  width: 1024px;
  margin: 0 auto;
}
footer .footer-container .footer-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
}
footer .footer-container .footer-top .footer-logo {
  width: 130px;
  height: 37px;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/logo-a4f4848ffd1d5fcb13d1d3ecf82ffbc77c31ebe226f67097386497a34638c059.svg);
  background-size: 130px 37px;
}
footer .footer-container .footer-top .footer-list {
  list-style-type: none;
}
footer .footer-container .footer-top .footer-list .footer-list-item {
  display: block;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
}
footer .footer-container .footer-top .footer-list .footer-list-item a {
  color: #adb5bd;
  text-decoration: none;
}
footer .footer-container .footer-top .footer-list .footer-list-item a:hover {
  text-decoration: underline;
}
footer
  .footer-container
  .footer-top
  .footer-list
  .footer-list-item
  .link-highlight {
  color: #fff;
  font-weight: 700;
}
footer .footer-container .footer-bottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3.2rem;
}
footer .footer-container #copyright {
  color: #adb5bd;
  margin-top: 3.2rem;
}
footer .footer-container #copyright .copyright-list {
  list-style-type: none;
  margin-bottom: 0.4rem;
}
footer .footer-container #copyright .copyright-list .copyright-list-item {
  display: inline-block;
  font-size: 1.4rem;
  margin: 0 0.8rem 0 0;
}
footer
  .footer-container
  #copyright
  .copyright-list
  .copyright-list-item
  address {
  font-style: normal;
}
footer .footer-container #copyright .copyright-list .copyright-list-item a {
  text-decoration: none;
  color: #868e96;
}
footer
  .footer-container
  #copyright
  .copyright-list
  .copyright-list-item
  a:hover {
  text-decoration: underline;
}
footer .footer-container #copyright .copyright-list-light {
  margin-top: 1.6rem;
  color: #868e96;
}
footer .footer-container #copyright .copyright-text {
  font-size: 1.4rem;
  margin: 0.4rem 0;
  color: #868e96;
}
footer .footer-container #social {
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
}
footer .footer-container #social .social-list {
  list-style-type: none;
}
footer .footer-container #social .social-list .social-list-item {
  display: inline-block;
  margin: 0px;
  margin-right: 2.4rem;
}
footer
  .footer-container
  #social
  .social-list
  .social-list-item
  .footer-social-link {
  display: block;
}
footer .footer-container #social .social-list .social-list-item:last-child {
  margin-right: 0;
}
footer .footer-container #social .social-list .global-links {
  padding-left: 26px;
  display: inline-block;
  margin: 0px;
}
footer .footer-container #social .social-list .global-links select {
  margin-left: 6px;
  text-decoration: underline;
  text-underline-position: under;
  vertical-align: top;
  background: #495057;
  color: #adb5bd;
  font-size: 16px;
  line-height: 24px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-appearance: none;
}
body.global footer {
  border-top: 1px solid #dcdee3;
  background-color: #ffffff;
  font-size: 14px;
  color: #212124;
}
body.global footer .links {
  display: flex;
  justify-content: space-between;
}
body.global footer a {
  text-decoration: none;
  color: #212124;
}
body.global footer a:hover {
  opacity: 0.64;
}
body.global footer ul > li {
  display: inline-block;
  margin-right: 48px;
}
body.global footer .copyright-text {
  margin-top: 33px;
  color: #adb1ba;
  font-size: 12px;
}
body.global footer .social-link {
  vertical-align: middle;
  margin-left: 30px;
}
.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}
.slick-slider .slick-track,
.slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
}
.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-track:before,
.slick-track:after {
  display: table;
  content: '';
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir='rtl'] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
.slick-slide:focus,
.slick-slide a {
  outline: none;
}
#image-slider .slider-wrap {
  position: relative;
}
#image-slider .slider-wrap .slider {
  border: none;
}
#image-slider .slider-wrap .slick-arrow {
  outline: none;
  width: 11px;
  height: 21px;
  text-indent: -9999px;
}
#image-slider .slider-wrap .slick-prev {
  position: absolute;
  left: 0;
  top: 240px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  z-index: 99;
  background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-left-4c0e713bfa2cd12bd959e6dd9ef456cd6fc094953c41e605f6b9a59bc1680686.svg)
    no-repeat;
}
#image-slider .slider-wrap .slick-prev:hover {
  background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-left-hover-bbda49cc160e798261c2dd4894cc623d0118a701fbb705546fc06de658ce3996.svg)
    no-repeat;
}
#image-slider .slider-wrap .slick-next {
  position: absolute;
  right: 0;
  top: 240px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-right-134c53f44716c3bef227ec30da385b4b09c9c068d339a617a23093718f379d02.svg)
    no-repeat;
}
#image-slider .slider-wrap .slick-next:hover {
  background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-right-hover-c71a5a4d1745bf59f056660eadc57e451f619b5bddaff0c9fdf2f8e3b4d955f8.svg)
    no-repeat;
}
#image-slider .slider-wrap .slick-dots {
  position: absolute;
  bottom: 3px;
  left: 26px;
  right: 26px;
  width: 677px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  list-style: none;
  text-align: center;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-blend-mode: multiply;
}
#image-slider .slider-wrap .slick-dots li {
  position: relative;
  bottom: 0;
  display: inline-block;
  cursor: pointer;
}
#image-slider .slider-wrap .slick-dots li button {
  display: block;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
  margin: 0 4px;
  width: 8px;
}
#image-slider .slider-wrap .slick-dots li button:before {
  content: ' ';
  background-color: #fff;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: block;
  position: absolute;
  bottom: 0;
  opacity: 0.3;
}
#image-slider .slider-wrap .slick-dots .slick-active button:before {
  background-color: #fff;
  opacity: 0.8;
}
#image-slider .slider-wrap .image-wrap {
  position: relative;
  width: 677px;
  margin: 0 auto;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
}
#image-slider .slider-wrap .image-wrap img {
  border-radius: 8px;
  position: relative;
  min-width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
}
#image-slider .slider-wrap .image-wrap .landscape {
  height: 100%;
  width: auto;
}
#image-slider .slider-wrap .image-wrap .portrait {
  width: 100%;
  height: auto;
}
.cards-wrap {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}
.cards-wrap .card-link {
  text-decoration: none;
  color: #212529;
}
.cards-wrap .card-top,
.cards-wrap .card {
  width: calc(25% - 44px);
  margin-right: 44px;
  margin-bottom: 56px;
}
.cards-wrap .card-top .card-photo,
.cards-wrap .card .card-photo {
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
}
.cards-wrap .card-top .card-photo img,
.cards-wrap .card .card-photo img {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid transparent;
}
.cards-wrap .card-top .card-category,
.cards-wrap .card .card-category {
  position: relative;
}
.cards-wrap .card-top .card-category .category-image,
.cards-wrap .card .card-category .category-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  transform: translate(-50%, -50%);
}
.cards-wrap .card-top .card-desc,
.cards-wrap .card .card-desc {
  margin-top: 12px;
}
.cards-wrap .card-top .card-desc .card-title,
.cards-wrap .card .card-desc .card-title {
  font-size: 16px;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: normal;
}
.cards-wrap .card-top .card-desc .card-region-name,
.cards-wrap .card .card-desc .card-region-name {
  font-size: 13px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
}
.cards-wrap .card-top .card-desc .card-price,
.cards-wrap .card .card-desc .card-price {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 4px;
}
.cards-wrap .card-top .card-desc .card-price.blank-price,
.cards-wrap .card .card-desc .card-price.blank-price {
  color: #212529;
}
.cards-wrap .card-top .card-desc .card-counts,
.cards-wrap .card .card-desc .card-counts {
  color: #868e96;
  font-size: 13px;
}
.cards-wrap .card {
  width: calc(33% - 16px);
  margin-right: 16px;
}
.cards-wrap .card-top:nth-child(4n),
.cards-wrap .card:nth-child(3n) {
  margin-right: 0;
}
* {
  padding: 0;
  margin: 0;
  outline: none;
}
section,
article,
aside,
footer,
header,
nav,
hgroup {
  display: block;
}
a {
  -webkit-tap-highlight-color: rgba(73, 80, 87, 0.05);
}
html {
  font-size: 62.5%;
  height: 100%;
}
body {
  position: relative;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-weight: 400;
  min-height: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
h4,
h5,
h5 {
  font-weight: 700;
  line-height: 1.5;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.8rem;
}
h3 {
  font-size: 1.6rem;
}
h4 {
  font-size: 1.4rem;
}
h5 {
  font-size: 1.3rem;
}
h6 {
  font-size: 1.2rem;
}
strong,
b {
  font-weight: 700;
}
ul {
  list-style-type: disc;
}
ul li {
  margin: 1.6rem;
}
input,
textarea,
select,
button {
  font-family: inherit;
}
textarea {
  font-family: inherit;
  font-size: 1.6rem;
  color: #212529;
  margin: 1.6rem 0;
}
textarea.border {
  border: 1px solid #ced4da;
  border-radius: 6px;
  padding: 1rem 1.4rem;
  margin: 1.6rem 0;
}
textarea.width-full {
  display: block;
  width: calc(100% - 1.4rem * 2 - 2px);
}
input {
  -webkit-appearance: none;
  border: solid 1px #ced4da;
  padding: 1rem 1.4rem;
  margin: 1.6rem 0;
  font-size: 1.6rem;
  border-radius: 3px;
}
input.input-full,
input.width-full {
  display: block;
  width: calc(100% - 1.4rem * 2 - 2px);
}
input.width-full.border-none {
  width: 100%;
  padding: 1rem 0;
  margin: 0;
}
input.width-full[type='submit'] {
  display: block;
  width: 100%;
}
input.border-carrot {
  border: 1px solid #ff8a3d;
}
input:disabled {
  background-color: #e9ecef;
  color: #fff;
}
button:focus,
input:focus,
textarea:focus {
  outline: none !important;
  box-shadow: none;
}
input::-webkit-input-placeholder {
  color: #ced4da;
}
input:-moz-placeholder {
  color: #ced4da;
}
input::-moz-placeholder {
  color: #ced4da;
}
input:-ms-input-placeholder {
  color: #ced4da;
}
textarea::-webkit-input-placeholder {
  color: #ced4da;
}
textarea:-moz-placeholder {
  color: #ced4da;
}
textarea::-moz-placeholder {
  color: #ced4da;
}
textarea:-ms-input-placeholder {
  color: #ced4da;
}
textarea:focus::-webkit-input-placeholder {
  color: #ced4da;
}
textarea:focus:-moz-placeholder {
  color: #ced4da;
}
textarea:focus::-moz-placeholder {
  color: #ced4da;
}
textarea:focus:-ms-input-placeholder {
  color: #ced4da;
}
button:focus,
input:focus,
textarea:focus {
  outline: none !important;
  box-shadow: none;
}
::-moz-selection {
  color: #212529;
  background: #ffb98b;
}
::-moz-selection {
  color: #212529;
  background: #ffb98b;
}
::selection {
  color: #212529;
  background: #ffb98b;
}
.clear {
  clear: both;
}
.hide {
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  height: 0;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
}
.text-normal {
  font-weight: normal;
}
.text-bold {
  font-weight: bold;
}
.text-black {
  color: #212529;
}
.text-carrot {
  color: #ff8a3d;
}
.text-tomato {
  color: #ff3e46;
}
.text-green {
  color: #56c271;
}
.text-gray {
  color: #868e96;
}
.text-light-gray {
  color: #adb5bd;
}
.text-dark-gray {
  color: #495057;
}
.text-white {
  color: #fff;
}
.text-center {
  text-align: center;
}
.text-xxl {
  font-size: 2.4rem !important;
  line-height: 1.54;
  letter-spacing: -0.8px;
}
.text-xl {
  font-size: 2rem !important;
  line-height: 1.55;
  letter-spacing: -0.3px;
}
.text-l {
  font-size: 1.8rem !important;
  line-height: 1.47;
  letter-spacing: -0.3px;
}
.text-m {
  font-size: 1.6rem !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
}
.text-s {
  font-size: 1.4rem !important;
  line-height: 1.5;
}
.text-xs {
  font-size: 1.3rem !important;
  line-height: 1.5;
}
.text-xxs {
  font-size: 1.2rem !important;
  line-height: 1.5;
}
.text-no-decoration {
  text-decoration: none;
}
.overflow-hidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.background-gray {
  background-color: #f8f9fa;
}
.background-dark-gray {
  background-color: #e9ecef;
}
.background-white {
  background-color: #fff;
}
.background-green {
  background-color: #56c271;
}
.background-pale-green {
  background-color: #e6f3e6;
}
.circle-image {
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}
.circle-image-s {
  width: 40px;
  height: 40px;
}
.circle-image-m {
  width: 48px;
  height: 48px;
}
.circle-image-l {
  width: 60px;
  height: 60px;
}
.rounded {
  border-radius: 4px;
}
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-image img {
  width: 100%;
}
.image-s img {
  width: 48px;
  height: 48px;
}
.article-thumbnail {
  width: 180px;
  height: 180px;
}
.article-thumbnail-text {
  width: 180px;
}
.inline-block {
  display: inline-block;
  vertical-align: middle;
}
.space-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.flex-1 {
  flex: 1;
}
.relative {
  position: relative;
}
.vertical-top {
  vertical-align: top;
}
.vertical-text-top {
  vertical-align: text-top;
}
.width-full {
  width: 100%;
}
.list-unstyled {
  list-style-type: none;
}
.shadow-bottom {
  box-shadow: 0 1px 0 0 #e9ecef;
}
.border-bottom {
  border-bottom: 1px solid #e9ecef;
}
.border-top {
  border-top: 1px solid #e9ecef;
}
.border-none {
  border: none;
}
.tag {
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
  margin-top: 0.4rem;
  background-color: #f8f9fa;
  color: #212529;
  font-size: 1.3rem;
}
button,
.button {
  -webkit-appearance: none;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  color: #212529;
  text-align: center;
  font-weight: 700;
  background-color: #fff;
  margin: 1.6rem 0;
  text-decoration: none;
}
button:disabled,
.button:disabled {
  background-color: #e9ecef;
  color: #fff;
  border: none;
}
.button-rounded {
  border-radius: 100px;
}
.button-s {
  padding: 0.4rem 1rem;
}
.button-m {
  padding: 1rem 1.4rem;
  font-size: 1.6rem;
}
.button-xl {
  padding: 1.1rem 2rem;
  font-size: 1.8rem;
}
.button-full {
  display: block;
  width: 100%;
}
.button-carrot {
  background-color: #ff8a3d;
  color: #fff;
  border: 1px solid #ff8a3d;
}
.button-tomato {
  background-color: #fff;
  color: #ff3e46;
  border: 1px solid #ff3e46;
}
.button-green {
  background-color: #fff;
  color: #56c271;
  border: none;
}
.button-dark-gray {
  background-color: #495057;
  color: #fff;
  border: 1px solid #495057;
}
.button-black {
  background-color: #fff;
  color: #212529;
  border: 1px solid #212529;
}
.button-black:hover {
  border: 1px solid #868e96;
  color: #868e96;
}
.right-arrow {
  background: #fff
    url(https://d1unjqcospf8gs.cloudfront.net/assets/wv/smbs/icon-small-rignt-arrow-c84f1abd85c1f283b11c7605514833e464cd93cf5b309c62477ab4a299fc63f0.svg)
    no-repeat right 0 center;
}
.right-arrow-disabled {
  background: #fff
    url(https://d1unjqcospf8gs.cloudfront.net/assets/wv/smbs/icon-small-rignt-arrow-disabled-f9761ec61d7893eba985673575d5dfdf56ddcfe1392261e035dd4840c71270c7.svg)
    no-repeat right 0 center;
}
.divider-bold {
  border-bottom: 2px solid #212529;
}
.m-3 {
  margin: 1.6rem;
}
.ml-0_5 {
  margin-left: 0.2rem;
}
.ml-1 {
  margin-left: 0.4rem;
}
.ml-2 {
  margin-left: 0.8rem;
}
.ml-3 {
  margin-left: 1.6rem;
}
.mr-2 {
  margin-right: 0.8rem;
}
.mt-0 {
  margin-top: 0;
}
.mt-0_5 {
  margin-top: 0.2rem;
}
.mt-1 {
  margin-top: 0.4rem;
}
.mt-2 {
  margin-top: 0.8rem;
}
.mt-3 {
  margin-top: 1.6rem;
}
.mt-4 {
  margin-top: 2.4rem;
}
.mt-5 {
  margin-top: 3.2rem;
}
.mb-1 {
  margin-bottom: 0.4rem;
}
.mb-2 {
  margin-bottom: 0.8rem;
}
.mb-3 {
  margin-bottom: 1.6rem;
}
.mb-4 {
  margin-bottom: 2.4rem;
}
.mb-5 {
  margin-bottom: 3.2rem;
}
.mx-1 {
  margin-left: 0.4rem;
  margin-right: 0.4rem;
}
.mx-3 {
  margin-left: 1.6rem;
  margin-right: 1.6rem;
}
.mx-4 {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
}
.my-1 {
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.my-2 {
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}
.my-3 {
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
}
.my-4 {
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
}
.my-5 {
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
}
.pt-1 {
  padding-top: 0.4rem;
}
.pt-2 {
  padding-top: 0.8rem;
}
.pt-3 {
  padding-top: 1.6rem;
}
.pt-4 {
  padding-top: 2.4rem;
}
.pt-5 {
  padding-top: 3.2rem;
}
.pb-2 {
  padding-bottom: 0.8rem;
}
.pb-3 {
  padding-bottom: 1.6rem;
}
.pb-4 {
  padding-bottom: 2.4rem;
}
.pb-5 {
  padding-bottom: 3.2rem;
}
.py-1 {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}
.py-2 {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
.py-2_5 {
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
}
.py-3 {
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
}
.py-4 {
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
}
.py-5 {
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
}
.px-1 {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}
.px-3 {
  padding-left: 1.6rem;
  padding-right: 1.6rem;
}
.p-1 {
  padding: 0.4rem;
}
.p-3 {
  padding: 1.6rem;
}
.p-4 {
  padding: 2.4rem;
}
.mb-0 {
  margin-bottom: 0;
}
.pb-0 {
  padding-bottom: 0;
}
.trust-header {
  margin-top: 7.3rem;
  background-color: #f8f9fa;
  padding-top: 9.6rem;
}
.trust-header .title {
  font-size: 4.8rem;
  text-align: center;
  margin-bottom: 2.4rem;
}
.trust-header .description {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5.6rem;
}
.trust-header .trust-header-image {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-top-9311b8d953145ff88e5951f372dc9bb72837b476559f12f31bc4606a693c893c.png);
  background-size: 760px 363px;
  width: 760px;
  height: 363px;
  margin: 0 auto;
}
.trust-top {
  width: 980px;
  margin: 0 auto;
}
.trust-bottom,
.trust-top {
  padding-top: 10rem;
}
.trust-bottom .main-title,
.trust-top .main-title {
  font-size: 3.4rem;
  width: 980px;
  margin: 0 auto;
}
.trust-bottom .trust-image,
.trust-top .trust-image {
  display: inline-block;
  margin: 0 6rem;
  width: 340px;
  height: 254px;
  background-size: 340px 254px;
  vertical-align: middle;
}
.trust-bottom .trust-image-01,
.trust-top .trust-image-01 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-1-08564a68dc6a07f9f05a35b2308a288ace19158318c3412960a257b4ffa2d9f8.png);
}
.trust-bottom .trust-image-02,
.trust-top .trust-image-02 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-2-c6c12bebd3e9dfca05c66eefa0705981e3f4442256dcd9ec365e7704d549faf6.png);
}
.trust-bottom .trust-image-03,
.trust-top .trust-image-03 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-3-09bd31cba4a5bbf730fa26059aeaf08c24e425747343700d42cd7ffc28adf649.png);
}
.trust-bottom .trust-image-04,
.trust-top .trust-image-04 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-4-40a7a99a51eec3025cc5a7a29b1a240564cd39bcc7c9f4d1c54ac4b36110ec2b.png);
}
.trust-bottom .trust-detail,
.trust-top .trust-detail {
  display: inline-block;
  width: calc(100% - 340px - 120px - 60px - 6px);
  vertical-align: middle;
  margin-left: 6rem;
}
.trust-bottom .trust-detail .title,
.trust-top .trust-detail .title {
  display: block;
  font-size: 2.4rem;
  text-align: left;
  margin-bottom: 1.6rem;
}
.trust-bottom .trust-detail .description,
.trust-top .trust-detail .description {
  display: block;
  font-size: 1.6rem;
  line-height: 1.6;
}
.trust-bottom .trust-detail-left,
.trust-top .trust-detail-left {
  margin-left: 0;
  margin-right: 6rem;
}
.trust-bottom .trust-section,
.trust-top .trust-section {
  margin: 8rem 0;
}
.trust-bottom .trust-section-reverse,
.trust-top .trust-section-reverse {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.trust-bottom {
  background-color: #f8f9fa;
}
.trust-bottom .trust-container {
  width: 980px;
  margin: 8rem auto 0 auto;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}
.trust-bottom .trust-container .trust-section {
  max-width: 330px;
  margin-top: 0;
  margin-bottom: 8rem;
}
.trust-bottom .trust-container .trust-section .trust-detail {
  width: 100%;
  margin: 1.6rem 0 0 0;
}
.trust-bottom .trust-container .trust-section-left {
  margin-left: 19rem;
}
.trust-bottom .trust-image {
  display: block;
  width: 250px;
  height: 250px;
  background-size: 250px 250px;
  vertical-align: middle;
  margin: 0;
}
.trust-bottom .trust-image-01 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-5-9b0bb1401ef34ea10b1dbbf34d4b8efa56609c5d69f8916a2a9eb942513f09a3.png);
}
.trust-bottom .trust-image-02 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-6-dfda3618d665719e09e20386b6b82efc400e45b48ddaf0178b82debaa6d7be7b.png);
}
.trust-bottom .trust-image-03 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-7-e6b37bc404aeddde1810544c4cf05db9141b49b4d65aea6887493d3d31df8a5d.png);
}
.trust-bottom .trust-image-04 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/trust/3x/img-trust-8-7bb8b91a94c04b7103db580fa2fee6ecadbe0ea6284c6c917cb035bb1a0229ef.png);
}
#sleeping-bd {
  min-width: 320px;
  max-width: 600px;
  margin: 0 auto;
}
#content {
  width: 677px;
  margin: 30px auto 0 auto;
}
#content #smb-images {
  width: 729px;
  margin-left: -26px;
}
#no-data {
  height: 300px;
}
.smb-info-list-text {
  width: calc(100% - 1.6rem - 18px - 4px);
}
.smb-info-list-text .url-link {
  word-break: break-all;
}
.smb-detail-info-list li:first-child {
  margin-top: 0;
}
.smb-detail-info-list li:last-child {
  margin-bottom: 0;
}
#smb-detail-map {
  width: 100%;
  height: 46vw;
  max-height: 370px;
  border: solid 1px #dee2e6;
}
#smb-detail-map .customoverlay {
  position: relative;
  bottom: -32px;
  border-radius: 3px;
  border: 1px solid #e9ecef;
  border-bottom: 2px solid #888;
  float: left;
}
#smb-detail-map .customoverlay a {
  display: block;
  text-decoration: none;
  color: #212529;
  text-align: center;
  border-radius: 3px;
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
  background: #ff8a3d;
  background: #ff8a3d
    url(https://d1unjqcospf8gs.cloudfront.net/assets/wv/smbs/icon_arrow_right_white-c5dce226f58f0913364e0838e50fe6654a7b6b1411d5186b588c8607891c2eb9.png)
    no-repeat right 10px center;
}
#smb-detail-map .customoverlay .text-wrap {
  display: block;
  text-decoration: none;
  color: #212529;
  text-align: center;
  border-radius: 3px;
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
}
#smb-detail-map .customoverlay .text-wrap .title {
  margin-right: 0;
}
#smb-detail-map .customoverlay .title {
  display: block;
  text-align: center;
  background: #fff;
  margin-right: 30px;
  padding: 0.8rem 0.7rem 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}
#smb-detail-map .customoverlay:nth-of-type(n) {
  border: 0;
  box-shadow: 0 1px 2px #888;
}
#smb-detail-map .customoverlay:after {
  content: '';
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: -12px;
  width: 22px;
  height: 12px;
}
.home-main-section {
  padding: 6rem 0;
}
.home-main-section .home-main-content {
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home-main-section .home-main-title {
  font-size: 4rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
}
.home-main-section .home-buttons {
  margin-top: 3.2rem;
}
.home-main-section .home-buttons .home-button {
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 1.45rem 2.6rem;
  display: inline-block;
}
.home-main-section .home-buttons .home-button:hover {
  background-color: #e9ecef;
}
.home-main-section .home-main-image {
  display: inline-block;
}
.home-main-section .home-main-image-01 {
  background-size: 532px 684px;
  width: 532px;
  height: 684px;
}
.home-main-section .home-main-image-02 {
  background-size: 546px 740px;
  width: 546px;
  height: 740px;
}
.home-main-section .home-main-image-03 {
  background-size: 526px 735px;
  width: 526px;
  height: 735px;
}
.home-main-section .home-main-reverse {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.home-main-section .home-hot-title {
  margin-bottom: 8rem;
}
.home-main-section .home-hot-content {
  width: 1024px;
  margin: 6rem auto 12rem auto;
}
.home-main-section .home-hot-content #hot-articles-more {
  cursor: pointer;
  text-decoration: underline;
}
.home-main-section .home-story-list {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}
.home-main-section .home-story-list .home-story-list-item {
  margin-right: 4rem;
  margin-left: 0;
  max-width: 14rem;
}
.home-main-section .home-story-list .home-story-list-item:last-child {
  margin-right: 0;
}
.home-main-section .home-story-list .icon-story {
  width: 56px;
  height: 56px;
  background-size: 56px 56px;
}
.home-main-section .home-story-list .icon-story-01 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg);
}
.home-main-section .home-story-list .icon-story-02 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg);
}
.home-main-section .home-story-list .icon-story-03 {
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg);
}
#home-main-section-top {
  padding-top: 24px;
  background-color: #fbf7f2;
}
#home-main-section-top #home-main-top {
  width: 1024px;
  height: 760px;
  margin: 0 auto;
  position: relative;
  background-color: #fbf7f2;
}
#home-main-section-top .home-main-title {
  font-size: 4.8rem;
  line-height: 1.3;
  padding-top: 27rem;
  margin-bottom: 3.2rem;
  letter-spacing: -0.4px;
}
#home-main-section-top .home-main-image-top {
  position: absolute;
  right: -84px;
  bottom: 0;
  width: 804px;
  height: 685px;
  background-color: #fbf7f2;
  background-repeat: no-repeat;
  background-size: 804px 685px;
}
.home-keywords-content {
  width: 1024px;
  margin: 4rem auto;
}
.home-keywords-content .home-main-title {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0;
}
.home-keywords-content .top-keywords-list {
  display: inline-block;
  list-style-type: none;
  vertical-align: middle;
  margin-left: 4rem;
}
.home-keywords-content .top-keywords-list .keyword-item {
  display: inline-block;
  vertical-align: middle;
  margin-right: 3.2rem;
}
.home-keywords-content .top-keywords-list .keyword-item .keyword-link {
  text-decoration: none;
  color: #212529;
}
.home-keywords-content .top-keywords-list .keyword-item:last-child {
  margin-right: 0;
}
.home-keywords-content .top-keywords-list .keyword-item:hover {
  text-decoration: underline;
}
</style>
