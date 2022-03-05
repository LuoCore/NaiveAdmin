import { createApp } from 'vue'
import App from './App.vue'
import router  from './router'




const app= createApp(App);

app.use(router);
app.mount('#app');

//全局注册组件
//Object.keys(ionicons5).forEach((key)=>{
    //console.log(key);
    //字符串做下标报错，
    //在tsconfig.json 中添加,
    //"suppressImplicitAnyIndexErrors":true, //解决字符串做下标错误
    //app.component(key,ionicons5[key]);
    // 推荐使用这种
   //type icontype= typeof ionicons5;
   //type keyType= keyof icontype;
   //key as keyType
   //一句写完
    //app.component(key,ionicons5[key as keyof typeof ionicons5])
//})