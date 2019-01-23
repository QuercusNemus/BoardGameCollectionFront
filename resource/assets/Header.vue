<template>
    <header>
        <nav class="row">
            <img src="resource/img/logo80pOpac.png" alt="Logo" class="logo">
            <ul class="main-nav">
                <li><a href="#">About</a></li>
                <li><a href="#">Sign up</a></li>
            </ul>
        </nav>
        <div class="eurig-text-box">
            <h1>𝚺urìg's Board Game Collection</h1>
            <a class="btn btn-full" id="fetchCollection" href="#">Collection</a>
            <a class="btn btn-ghost" href="#">Search</a>
            <a class="btn btn-login" href="#">Login</a>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    header {
    margin-bottom: 75px;
}

.eurig-text-box {
    position: absolute;
    width: 960px;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);
}

.logo {
    height: 150px;
    width: auto;
    float: left;
    margin-top: 10px;
}

.main-nav {
    float: right;
    list-style: none;
    margin-top: 30px;
}

.main-nav li {
    display: inline-block;
    margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited{
    padding: 5px 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 80%;
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.5s;
}

.main-nav li a:hover,
.main-nav li a:active{
    padding: 5px 0;
    border-bottom: 2px solid #e67e22;
}
</style>
