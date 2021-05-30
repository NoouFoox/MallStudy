import {debounce} from "@/common/utils";
export const itemIxin= {
    data(){
        return {
            itemimglistener:null
        }
    },
    mounted(){
        let refresh=debounce(  this.$refs.scroll&&this.$refs.scroll.refresh,200)
        this.itemimglistener=()=>{refresh()}
        this.$bus.$on('aaa',this.itemimglistener)
        // console.log('混录')
    }
}
