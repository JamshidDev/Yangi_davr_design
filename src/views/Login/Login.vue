<template>
    <div class="login_page">
        <img class="login_logo_picture" src="@/assets/images/login_logo.png" alt="Login logo">

        <div class="form_conatiner">
           
            <span class="login_title">Tizimga kirish</span>

            <div class="input_box">
                <input class="fluid_input" type="text" placeholder="Login">
                <Icon class="fluid_icon" icon="mdi:account-outline" width="32" color="#ffffff" />
            </div>

            <div class="input_box phone_number">
                <input class="fluid_input" type="text" placeholder="Telefon raqam">
                <Icon class="fluid_icon" icon="ic:baseline-call" width="30" color="#ffffff" />
            </div>
            
            <div class="btn-box">
                <div class="login_btn" @click="controlLoading"> 
                    <span>Kirish</span>
                    <Icon class="fluid_icon" :icon="loading?'svg-spinners:bars-rotate-fade' : 'mdi:chevron-right'" width="26"  color="#ffffff" />
                </div>
                <div class="register_btn">
                  <span>  Ro'yxatdan o'tish</span>
                </div>
            </div>

         
        </div>

        <div class="logo_box">
                <div class="title">
                    Yangi davr raqamli ta'lim
                </div>
                <div class="subtitle">
                    platformasiga xush kelibsiz!
                </div>
            </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from "@iconify/vue"
const loading = ref(false);


function controlLoading(){
    loading.value = true;
    setTimeout(()=>{
        loading.value = false;
    }, 3000)
}

</script>


<style lang="scss">
.login_page {
    width: 100% !important;
    height: 100vh;
    background: url("@/assets/images/login_bg.jpg");
    background-size: cover;
    background-position: bottom left;
    
    position: relative !important;

    .form_conatiner {
        width: 630px;
        min-height: 100%;
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: #000000b3;
        backdrop-filter: blur(10px);
        padding: 250px 70px 0px 70px;

        &>.login_title {
            width: 100%;
            display: inline-block;
            font-size: 30px;
            color: #ffffff;
            margin-bottom: 50px;
        }
        .phone_number{
            margin-top: 30px;
        }

        .input_box {
            display: flex;
            align-items: center;
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #F2F2F2;

            .fluid_icon {
                width: 26px;
                font-weight: 500 !important;
                
            }

            .fluid_input {
                display: inline-block;
                width: calc(100% - 32px) !important;
                height: 100% !important;
                background-color: transparent;
                border: none;
                font-size: 20px;
                color: #F9A226;

            }

            .fluid_input:focus {
                outline: none;
            }

            .fluid_input::placeholder {
                color: #ffffff;
                font-size: 14px;
                font-weight: 500;
            }
        }

        .btn-box{
            margin-top: 30px;
            width: 100%;
            display: flex;
            align-items: center;
            .login_btn{
                width: 140px;
                height: 40px;
                background-color: #F9A226;
                color: #ffffff;
                padding: 10px 30px;
                display: flex;
                align-items: center;
                
                gap: 10px;
                cursor: pointer;
                transition: all 0.3s ease-out;
                &:active{
                    transform: scale(0.8);
                }
            }
            .register_btn{
                width: calc(100% - 140px);
                height: 40px;
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;
                span:hover{
                    cursor: pointer;
                    color: #F9A226;
                }
            }
        }

    }

    .logo_box{
        position: absolute;
        bottom: 50px;
        left: 80px;
        color: #412A52;
        .title{
            font-size: 38px;
        }
        .subtitle{
            font-size: 20px;
        }
    }
    .login_logo_picture{
        width: 70px;
        object-fit: contain;
        position: absolute;
        top: 50px;
        left: 80px;
    }



}
</style>