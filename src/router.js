import Vue from "vue"
import Home from "./components/home.vue"
import Topic from "./components/topic.vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

var router = new VueRouter({
    history : true;
})

router.map({
    "/":{
        component:Home
    },
    "/topic/:topicId": {
        component:topic
    }
});

router.redirect({
    "*":"/"
})
