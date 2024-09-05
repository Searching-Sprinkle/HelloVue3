import { ref,onMounted,computed } from 'vue'


export default function () {
    //数据
    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 10
    })
    //方法
    function changeSum() {
        sum.value++
    }

    //钩子
    onMounted(() => {
        changeSum()
    })

    //向外部提供东西
    return {
        sum,
        changeSum,
        bigSum
    }
}