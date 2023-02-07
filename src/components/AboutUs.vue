<template>
    <div class="main">
        <div class="profile">
            <img src="@/assets/me/hamid.jpg" alt="profile" />
        </div>
        <h2>hamid choopani</h2>
        <p class="role">VueJs Developer</p>

        <div class="discriptions">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque expedita atque eveniet
                quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus
                a quae totam ipsa illum minus laudantium? </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@font-face {
    font-family: custome;
    src: url('@/assets/font/samim.ttf');
}
* {
    font-family: custome;
}
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
}
.profile img {
    margin-top: 50%;
    width: 200px;
    /* padding-left: 20px; */
    height: 200px;
    border-radius: 50%;
}
h2 {
    margin-top: 5px;
    font-family: sans-serif;
    font-size: 35px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.5px;
}
.role {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 500;
    /* color: #645CBB; */
    color: #fd9600;
}
.discriptions {
    margin-top: 20px;
    align-items: center;
    text-align: center;
    font-size: 17px;
    font-weight: 200;
    letter-spacing: 0.5px;
    line-height: 30px;
    width: 50%;
}


</style>