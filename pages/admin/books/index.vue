<template>
  <NuxtLayout :name="layout">
    <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>Abandon</th>
        <th>Abnormal</th>
        <th>Abolish</th>
        <th>...</th>
        <th>万事开头难</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
    </tbody>
  </n-table>
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = 'admin-layout'
</script>



