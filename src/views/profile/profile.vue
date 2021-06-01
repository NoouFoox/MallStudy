<template>
  <div>
    <navbar class="nav-bar">
      <div slot="center">我的商城</div>
    </navbar>
    <ProfilInfo/>
    <profile-money/>
    <profile-order/>
    <profile-tools/>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import ProfilInfo from "@/views/profile/childComps/ProfilInfo";
import ProfileMoney from "@/views/profile/childComps/ProfileMoney";
import ProfileOrder from "@/views/profile/childComps/ProfileOrder";
import ProfileTools from "@/views/profile/childComps/ProfileTools";

export default {
  name: "profile",
  components: {ProfileTools, ProfileOrder, ProfileMoney, ProfilInfo, Navbar}
}
</script>

<style scoped>
.nav-bar {
  color: #ffffff;
  font-weight: 300;
  letter-spacing: 2px;
  background-color: var(--color-tint);
}
</style>
