<template>
  <UsersView />
</template>

<script>
import UsersView from './views/UsersView.vue'

export default {
  components: {
    UsersView
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
tr {
  line-height: 1rem;
  height: 1rem;
}
td {
  padding: 0;
  line-height: 1rem;
  vertical-align: middle;
}
.btn-link {
  text-decoration: none;
  padding: 0.1rem 0.5rem;
}
.btn-create {
  margin-left: 4px;
  background-color: #42b983;
  border: 1px solid #cacaca;
  height: 36px;
  /* padding: 0.1rem 0.5rem; */
}

/* grid */
.grid th {
  background-color: #fafafa;
}
.grid th.wide {
  width: 180px;
}
.grid th.medium {
  width: 120px;
}
.grid th.short {
  width: 80px;
}
.grid td {
  padding: 0;
  line-height: 2rem;
  vertical-align: middle;
}
.grid .btn-link {
  text-decoration: none;
}

/* pagination */
.pagination .btn {
  padding: 0.28rem 0.55rem;
  color: inherit;
  background: white;
  border: 1px solid #e7eaec;
}
.pagination .btn-white.disabled,
.pagination .btn-white.disabled:hover,
.pagination .btn-white.disabled:focus,
.pagination .btn-white.disabled:active,
.pagination .btn-white.disabled.active,
.pagination .btn-white[disabled],
.pagination .btn-white[disabled]:hover,
.pagination .btn-white[disabled]:focus,
.pagination .btn-white[disabled]:active,
.pagination .btn-white.active[disabled] {
  color: #cacaca;
}
.pagination .btn:active,
.pagination .btn.active {
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%) inset;
}

/* searchfield  */
.searchfield-wrap {
  width: 200px;
  display: inline-flex;
  height: 36px;
}

/* datepicker */
.datepicker-wrap {
  width: 200px;
  display: inline-flex;
  height: 36px;
}
.datepicker {
  border-radius: 4px;
  direction: ltr;
}
.datepicker .dropdown-menu {
  border: medium none;
  border-radius: 3px;
  box-shadow: 0 0 3px rgb(86 96 117 / 70%);
  display: none;
  float: left;
  font-size: 12px;
  left: 0;
  list-style: none outside none;
  padding: 0 10px;
  position: absolute;
  text-shadow: none;
  top: 100%;
  z-index: 1000;
}
.datepicker table tr td,
.datepicker table tr th {
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: none;
}
.datepicker-dropdown.datepicker-orient-top:before {
  bottom: -7px;
  border-bottom: 0;
  border-top: 7px solid rgba(0, 0, 0, 0.15);
}
.input-group.date .input-group-addon {
  cursor: pointer;
}
.input-group.date .input-group-addon {
  border-right: 0;
}
.input-group-addon {
  background-color: #fff;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  padding: 9px 12px 4px 12px;
  text-align: center;
}
.input-group > .custom-select:not(:first-child),
.input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .custom-file,
.input-group > .custom-select,
.input-group > .form-control,
.input-group > .form-control-plaintext {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}
.form-control,
.single-line {
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  display: block;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;
}

.form-control {
  font-size: 0.9rem;
}

/* modal */
.modal {
  background-color: rgba(0, 0, 0, 0.6);
}
.modal.show {
  display: block;
}
.modal label {
  text-align: left;
}

/* loading spinners */
.loading-section {
  margin: 0;
  position: fixed;
  background-color: rgba(200, 200, 200, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-modal {
  position: absolute;
  background-color: rgba(200, 200, 200, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
