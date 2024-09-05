import { ref } from 'vue'


export default function () {
    let sum = ref(0)

    function changeSum() {
        sum.value++
    }
    //向外部提供东西
    return {
        sum,
        changeSum
    }
}