<template>
  <div
    class="modal"
    :class="{ show: show }"
    tabindex="-1"
    @click="handleCloseButton"
    @keyup.esc="handleCloseButton"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">eListModal</h5>
          <button
            type="button"
            class="btn-close"
            @click="handleCloseButton"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 아이디 -->
          <div class="row mb-3">
            <label for="cId" class="col-sm-4 col-form-label p-1 ps-3">ID</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control form-control-sm"
                id="cId"
                readonly
                v-model="payload.id"
              />
            </div>
          </div>
          eeeeeeeeeeeeeeeeeeeeeeee Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil excepturi corrupti natus architecto vero,
          ipsam ex eius ut obcaecati eligendi non delectus aspernatur autem quam
          quo! Maiores quibusdam, rem ab sit libero ad. Neque modi reprehenderit
          quae eligendi magnam ab nemo voluptas ipsa impedit natus nihil
          perspiciatis quia quidem cum sit, dolores fugit corporis qui beatae
          autem possimus quam veritatis aspernatur? Nam porro unde nihil magni
          minima. Ea fugit impedit, sit neque beatae iure quibusdam porro facere
          itaque assumenda quisquam nulla, nihil maiores officiis ad et omnis
          rerum tempore. Similique voluptatibus quasi fugiat facilis nesciunt ab
          earum qui architecto placeat obcaecati quis ipsum laboriosam maxime
          deleniti, dicta veritatis et a vitae. Numquam doloribus commodi quae
          unde exercitationem hic rerum illo dolores vel, laudantium culpa sit
          praesentium cupiditate cum velit quo ducimus dolorem perspiciatis
          libero, autem laborum repudiandae labore ex minus! Quam reprehenderit
          exercitationem possimus laborum omnis vel culpa impedit eaque. Commodi
          recusandae doloribus eum itaque asperiores tenetur praesentium aperiam
          et eveniet vitae. At recusandae laborum quidem deserunt debitis
          reiciendis nihil ut numquam dolorem blanditiis commodi, esse autem
          nostrum quod assumenda magnam nesciunt? Veritatis beatae fugit nemo.
          Temporibus tenetur delectus nam autem assumenda in fuga unde et non,
          eius ipsam ratione.
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['payload'],
  data() {
    return {
      show: false,
      sampleData: {
        id: 'test',
        nick: '템프유저'
      }
    }
  },
  methods: {
    showModal() {
      this.show = true
    },
    handleCloseButton() {
      console.log('handleCloseButton')
      this.show = false
    },
    handleDialogClick(event) {
      event.stopPropagation()
    }
  }
}
</script>
