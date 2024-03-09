
<template>
    <div class="card">
        <li v-for="post in  data.list " :key="post.id">
            {{ post.id }} {{ post.title }}<button @click="toDetail(post.id)">跳转</button>
        </li>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
interface Post {
    id: number,
    title: string,
    content: string,
    created_time: string,
    updated_time: string,
}
interface Data {
    list: Post[],
}
const data = reactive<Data>(
    {
        list: [],
    }
)
async function fetchData() {
    try {
        const res = await axios({
            url: "http://127.0.0.1:9000/api/card/self/?action=list_card",
            method: 'get',
        });
        console.log('API response:', res.data); // 可以在这里添加日志输出
        data.list = res.data.retlist;
    } catch (error) {
        console.error('Error fetching data:', error);
        // 在这里处理错误
    }
}
// 调用异步函数
fetchData();


// 使用箭头函数来避免this的错误引用

const toDetail = (cardId: number) => {
    router.push({
        path: `/card/${cardId}`,
    });
};
</script>

