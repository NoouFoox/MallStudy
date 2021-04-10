<template>
  <div class="wrapper">
    <ul class="content">
      <li>消息列表1</li>
      <li>消息列表2</li>
      <li>消息列表3</li>
      <li>消息列表4</li>
      <li>消息列表5</li>
      <li>消息列表6</li>
      <li>消息列表7</li>
      <li>消息列表8</li>
      <li>消息列表9</li>
      <li>消息列表10</li>
      <li>消息列表11</li>
      <li>消息列表12</li>
      <li>消息列表13</li>
      <li>消息列表14</li>
      <li>消息列表15</li>
      <li>消息列表16</li>
      <li>消息列表17</li>
      <li>消息列表18</li>
      <li>消息列表19</li>
      <li>消息列表20</li>
      <li>消息列表21</li>
      <li>消息列表22</li>
      <li>消息列表23</li>
      <li>消息列表24</li>
      <li>消息列表25</li>
      <li>消息列表26</li>
      <li>消息列表27</li>
      <li>消息列表28</li>
      <li>消息列表29</li>
      <li>消息列表30</li>
      <li>消息列表31</li>
      <li>消息列表32</li>
      <li>消息列表33</li>
      <li>消息列表34</li>
      <li>消息列表35</li>
      <li>消息列表36</li>
      <li>消息列表37</li>
      <li>消息列表38</li>
      <li>消息列表39</li>
      <li>消息列表40</li>
      <li>消息列表41</li>
      <li>消息列表42</li>
      <li>消息列表43</li>
      <li>消息列表44</li>
      <li>消息列表45</li>
      <li>消息列表46</li>
      <li>消息列表47</li>
      <li>消息列表48</li>
      <li>消息列表49</li>
      <li>消息列表50</li>
      <li>消息列表51</li>
      <li>消息列表52</li>
      <li>消息列表53</li>
      <li>消息列表54</li>
      <li>消息列表55</li>
      <li>消息列表56</li>
      <li>消息列表57</li>
      <li>消息列表58</li>
      <li>消息列表59</li>
      <li>消息列表60</li>
      <li>消息列表61</li>
      <li>消息列表62</li>
      <li>消息列表63</li>
      <li>消息列表64</li>
      <li>消息列表65</li>
      <li>消息列表66</li>
      <li>消息列表67</li>
      <li>消息列表68</li>
      <li>消息列表69</li>
      <li>消息列表70</li>
      <li>消息列表71</li>
      <li>消息列表72</li>
      <li>消息列表73</li>
      <li>消息列表74</li>
      <li>消息列表75</li>
      <li>消息列表76</li>
      <li>消息列表77</li>
      <li>消息列表78</li>
      <li>消息列表79</li>
      <li>消息列表80</li>
      <li>消息列表81</li>
      <li>消息列表82</li>
      <li>消息列表83</li>
      <li>消息列表84</li>
      <li>消息列表85</li>
      <li>消息列表86</li>
      <li>消息列表87</li>
      <li>消息列表88</li>
      <li>消息列表89</li>
      <li>消息列表90</li>
      <li>消息列表91</li>
      <li>消息列表92</li>
      <li>消息列表93</li>
      <li>消息列表94</li>
      <li>消息列表95</li>
      <li>消息列表96</li>
      <li>消息列表97</li>
      <li>消息列表98</li>
      <li>消息列表99</li>
      <li>消息列表100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "category",
  data() {
    return {
      scroll: null
    }
  },
  // 挂载完成
  mounted() {

    this.scroll = new BScroll('.wrapper', {
      probeType: 3,
      pullUpLoad: true
    })
    this.scroll.on('scroll',()=>{
      // console.log(p)
    })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多')
      setTimeout(()=>{
        this.scroll.finishPullUp()
      },2000)
    })
  }
}
</script>

<style scoped>
.wrapper {
  /*必须确定高度 设置overflow-y: scroll;*/
  height: 150px;
  background-color: black;
  /*overflow: hidden;*/
  overflow-y: scroll;
  color: white;
}
</style>
