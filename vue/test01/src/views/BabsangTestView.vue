<template>
	<div class="container">
		<div class="row my-4">
			<!-- 본문영역 -->
			<div class="col-xl-9 col-sm-12">
				<div class="row row-cols-1">
					<!-- 썸네일 -->
					<div class="col">
						<div class="img-wrap rounded">
							<img
								:src="
									'https://nicespoons.com/static/images/' +
									babsangDetailData.dining_thumbnail
								"
								:alt="babsangDetailData.restaurant_name"
								style="object-fit: cover"
							/>
						</div>
					</div>
					<!-- 타이틀 -->
					<div class="col my-4">
						<div class="title d-flex">
							<h3 class="me-4">{{ babsangDetailData.restaurant_name }}</h3>
							<div class="status">
								<button class="btn btn-primary me-2">
									{{ currentStatus() }}
								</button>
								<button class="btn btn-secondary me-2">
									{{ recruitGender() }}
								</button>
								<button class="btn btn-secondary">
									1/{{ babsangDetailData.dining_count }}
								</button>
							</div>
						</div>

						<ul>
							<li>
								<dl>
									<dt>식사 일시</dt>
									<dd>
										{{ String(babsangDetailData.dining_datetime).slice(0, 10) }}
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>모집 기간</dt>
									<dd>
										{{
											String(babsangDetailData.recruit_start_date).slice(0, 10)
										}}
										~
										{{
											String(babsangDetailData.recruit_end_date).slice(0, 10)
										}}
									</dd>
								</dl>
							</li>
						</ul>
					</div>
					<!-- 소개 내용 -->
					<div class="col">
						<div class="border rounded p-3" style="min-height: 20rem">
							{{ babsangDetailData.dining_description }}
						</div>
					</div>
					<!-- 구분선 -->
					<div class="col my-3 px-4">
						<hr style="background-color: #999" />
					</div>
					<!-- 지도 -->
					<div class="col">
						<ul>
							<li>
								<dl>
									<dt>식당 위치</dt>
									<dd>{{ babsangDetailData.restaurant_location }}</dd>
								</dl>
							</li>
						</ul>
						<div class="img-wrap map-wrap rounded">
							<BabsangMap
								:lat="babsangDetailData.restaurant_latitude"
								:long="babsangDetailData.restaurant_longitude"
							/>
						</div>
					</div>
					<div class="col d-flex justify-content-center my-5">
						<button class="btn btn-secondary mx-2">수정</button>
						<button class="btn btn-secondary mx-2" @click="$goMain">
							목록
						</button>
						<button class="btn btn-secondary mx-2" @click="deleteBabsang">
							삭제
						</button>
					</div>
					<h5>댓글</h5>
					<!-- 구분선 -->
					<div class="col">
						<hr style="background-color: #999" />
					</div>
					<!-- 댓글 -->
					<div class="col my-3">
						<CommentList />
						<CommentCreate />
					</div>
				</div>
			</div>
			<!-- 정보 영역 -->
			<div class="col-xl-3 col-sm-12">
				<div class="row row-cols-1" style="position: sticky; top: 1rem">
					<!-- 밥장 정보 -->
					<div class="row">
						<UserCard
							v-if="babsangDetailData.dining_score !== undefined"
							:email="babsangDetailData.host_email"
							:gender="babsangDetailData.gender"
							:nickname="babsangDetailData.nickname"
							:profile_image="babsangDetailData.profile_image"
							:age_range="babsangDetailData.age_range"
							:dining_score="babsangDetailData.dining_score"
							:dining_spoons_description="babsangDetailData.profile_description"
						/>

						<!-- 숟갈 선택하기 -->
						<div class="col border rounded mt-3 p-3">
							<p>지금까지 신청한 숟갈들</p>
							<p style="font-size: 1.5rem">
								<font-awesome-icon icon="fa-solid fa-spoon" />
								<span class="ps-3">7명 !</span>
							</p>
							<button
								class="btn btn-primary"
								@click="goSelectPage"
								v-if="isLeader"
							>
								숟갈 선택
							</button>
							<div v-else>
								<button
									class="btn btn-primary"
									@click="openApplyForm"
									v-if="!spoonStatus"
								>
									숟갈 얹기
								</button>
								<button
									class="btn btn-primary"
									@click="pickCancle"
									v-if="spoonStatus"
								>
									숟갈 빼기
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UserCard from '@/components/profile/UserCard'
import CommentCreate from '@/components/babsang/CommentCreate'
import CommentList from '@/components/babsang/CommentList'
import BabsangMap from '@/components/kakaoMap/BabsangMap'
export default {
  name: 'Babsang',
  components: { UserCard, CommentCreate, CommentList, BabsangMap },
  data() {
    return {
      babsangDetailData: [],
      spoonStatus: false // false 방상에 숟갈 없음, true 방상에 숟갈 있음
    }
  },

  computed: {
    // 밥장/숟갈/게스트 분기처리
    isLeader() {
      // 유저 정보가 없을 때 false
      if (this.$store.state.user.userData === undefined) {
        return false
      }
      // 현재 유저 정보와 밥상 이메일정보가 일치하면 true
      if (
        this.$store.state.user.userData.email ===
				this.babsangDetailData.host_email
      ) {
        return true
      } else {
        return false
      }
    }
  },
  created() {},
  mounted() {
    window.scrollTo(0, 0)
    console.log('밥상 ID : ' + this.$route.params.babsangId)
    console.log('---------------밥상 data---------------')
    this.getBabsangDetailData()
    console.log('---------------isUser---------------')
    console.log(this.$store.state.user.isUser)
    this.alreadySpoon()
  },

  methods: {
    // 숟갈 얹기/빼기 버튼
    async alreadySpoon() {
      const confirmUsers = (
        await this.$get(
					`https://nicespoons.com/api/v1/babsang/${this.$route.params.babsangId}/babsangSpoons`
        )
      ).result
      console.log('숟갈 얹은 유저들 :', confirmUsers)
      console.log(this.$store.state.user.userData)
      const user = this.$store.state.user.userData.email
      for (const confirmUser of confirmUsers) {
        console.log(confirmUser)
        if (confirmUser.spoon_email === user && confirmUser.apply_yn === 'N') {
          console.log(confirmUser.spoon_email)
          console.log(user)
          this.spoonStatus = false
        } else {
          this.spoonStatus = true
        }
      }
      console.log(this.spoonStatus)
    },
    // 숟갈 얹기
    async openApplyForm() {
      await this.$post(
				`https://nicespoons.com/api/v1/babsang/${this.$route.params.babsangId}/babsangSpoons?type=apply`,
				{
				  param: {
				    apply_yn: 'Y'
				  }
				}
      )
      this.$swal({
        title: '숟갈 얹기 성공!',
        text: `${this.$store.state.user.userData.profile.nickname}님은 ${this.babsangDetailData.restaurant_name} 밥상에 숟갈을 얹으셨습니다.`,
        icon: 'success',
        iconColor: '#ffcb00',
        confirmButtonText: '확인',
        confirmButtonColor: '#ffcb00'
      })
      this.spoonStatus = true
    },
    // 숟갈 빼기
    async pickCancle() {
      console.log('숟갈 뺄 밥상 번호 : ', this.$route.params.babsangId)
      const confirm = (
        await this.$get(
					`https://nicespoons.com/api/v1/babsang/${this.$route.params.babsangId}/babsangSpoons`
        )
      ).result
      const user = this.$store.state.user.userData.email
      for (const alreadyUser of confirm) {
        if (alreadyUser.spoon_email === user) {
          await this.$put(
						`https://nicespoons.com/api/v1/babsang/${this.$route.params.babsangId}/babsangSpoons?type=applyCancel`,
						{
						  param: {
						    apply_yn: 'N'
						    // cancel_date: '2022-06-10',
						  }
						}
          )
        }
      }
      this.$swal({
        title: '숟갈 빼기 완료!',
        text: `${this.$store.state.user.userData.profile.nickname}님은 ${this.babsangDetailData.restaurant_name} 밥상에서 숟갈을 빼셨습니다.`,
        icon: 'warning',
        iconColor: '#ffcb00',
        confirmButtonText: '확인',
        confirmButtonColor: '#ffcb00'
      })
      this.spoonStatus = false
    },
    async deleteBabsang() {
      const confirmResult = confirm('밥상을 삭제 하시겠습니까?')
      if (confirmResult) {
        const babsangId = this.$route.params.babsangId
        await this.$delete('/babsang/' + babsangId)
        this.$goMain()
      }
    },
    goSelectPage() {
      this.$router.push({
        name: 'BabsangSelect',
        query: { babsangId: this.$route.params.babsangId }
      })
    },
    async getBabsangDetailData() {
      this.babsangDetailData = await this.$get(
        '/babsang/' + this.$route.params.babsangId
      )
      this.babsangDetailData = this.babsangDetailData.result[0]
      console.log('----------babsangDetailData----------')
      console.log(this.babsangDetailData)
    },
    currentStatus() {
      const currentStatus = this.babsangDetailData.dining_status
      let status
      if (currentStatus === 0) {
        status = '모집중'
      } else if (currentStatus === 1) {
        status = '모집 마감'
      } else {
        status = '모집 확정'
      }
      return status
    },
    recruitGender() {
      const gender = this.babsangDetailData.gender_check
      let genderStatus
      if (gender === 'ALL') {
        genderStatus = '혼성'
      } else if (gender === 'F') {
        genderStatus = '여성'
      } else {
        genderStatus = '남성'
      }
      return genderStatus
    }
  }
}
</script>
<style scoped lang="scss">
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
	&.map-wrap {
		padding-bottom: 40%;
	}
}
.img-wrap.pf {
	padding-bottom: 100%;
}
.img-wrap img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
ul,
dl {
	padding: 0;
	margin: 0;
	list-style: none;
}
li {
	display: block;
}
dl {
	display: flex;
}
dt {
	margin-right: 1rem;
}

// Sweetalert
.swal-button {
	padding: 7px 19px;
	border-radius: 2px;
	background-color: #ffcb00;
	//   background-color: #4962B3;
	font-size: 12px;
	border: 1px solid #ffcb00;
	//   border: 1px solid #3e549a;
	text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}
</style>
