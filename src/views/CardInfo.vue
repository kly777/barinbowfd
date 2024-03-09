<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
interface info {
    id: number | null,
    title: string,
    content: string,
    createdTime: string,
    revisedTime: string,
}
interface tran {
    data: info,
}
const post = reactive<tran>({ data: { id: null, title: "", content: "", createdTime: "", revisedTime: "" } });
async function fetchData() {
    try {
        const res = await axios({
            url: "http://127.0.0.1:9000/api/card/" + route.params.id,
            method: 'get',
        });
        console.log('API response:', res.data); // 可以在这里添加日志输出
        post.data = res.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        // 在这里处理错误
    }
}
// 调用异步函数
fetchData();
</script>


<template>
    <div>
        <p>{{ post.data.id }}</p>
        <p>{{ post.data.title }}</p>
        <p>{{ post.data.content }}</p>
        <p>{{ post.data.createdTime }}</p>
    </div>
</template>
