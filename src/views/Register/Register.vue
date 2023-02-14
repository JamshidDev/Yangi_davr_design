<template>
    <div class="login_page">
        <img class="login_logo_picture" src="@/assets/images/login_logo.png" alt="Login logo">

        <div class="form_conatiner">

            <span class="login_title">Ro'yxatdan o'tish</span>

            <div class="input_box">
                <input class="fluid_input" type="text" placeholder="Login">
                <Icon class="fluid_icon" icon="mdi:account-outline" width="32" color="#ffffff" />
            </div>

            <div class="input_box phone_number">
                <input class="fluid_input" type="text" placeholder="Telefon raqam">
                <Icon class="fluid_icon" icon="ic:baseline-call" width="30" color="#ffffff" />
            </div>

            <div class="input_box phone_number">
                <input class="fluid_input" type="text" placeholder="Promo code">
                <Icon class="fluid_icon" icon="ic:baseline-lock" width="30" color="#ffffff" />
            </div>

            <div class="auth-btn-box">
                <div class="login_btn" @click="controlLoading">
                    <span>Ro'yxatdan o'tish</span>
                    <Icon class="fluid_icon" :icon="loading ? 'svg-spinners:bars-rotate-fade' : 'mdi:chevron-right'"
                        width="26" color="#ffffff" />
                </div>
                <div class="register_btn">
                    <span @click="goPush('login')"> Tizimga kirish</span>
                </div>
            </div>

            <div class="support_box">
                <Icon @click="goPush('support')" class="fluid_icon" icon="bx:support" width="30"  /> <span @click="goPush('support')">Qo'llab quvatlash xizmati</span>
            </div>


        </div>

        <div class="logo_box">
            <Transition name="title">
                <div class="title">
                    Yangi davr raqamli ta'lim
                </div>
            </Transition>

            <div class="subtitle">
                platformasiga xush kelibsiz!
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from "@iconify/vue"
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const loading = ref(false);


function controlLoading() {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 3000)
}


function goPush(link){
    router.push({name:link})
}

</script>


<style lang="scss">
.login_page {
    width: 100% !important;
    height: 100vh;
    background-image: url("@/assets/images/login_bg.jpg");
    background-position: left;
    background-size: cover;
    position: relative !important;

    .form_conatiner {
        min-height: 100%;
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: #000000cf;
        backdrop-filter: blur(10px);
        padding: 350px 100px 0px 100px;

        &>.login_title {
            width: 100%;
            display: inline-block;
            font-size: 30px;
            color: #ffffff;
        }

        .phone_number {
            margin-top: 30px;
        }

        .input_box {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 40px;


            .fluid_icon {
                width: 26px;
                font-weight: 500 !important;
                position: absolute;
                right: 0px;
                top: 10px;


            }

            .fluid_input {
                display: inline-block;
                width: 100% !important;
                height: 100% !important;
                background-color: transparent;
                border: none;
                font-size: 20px;
                color: #F9A226;
                border-bottom: 1px solid #F2F2F2;

            }

            .fluid_input:focus {
                outline: none;
                border-bottom: 1px solid #F9A226;
            }

            .fluid_input::placeholder {
                color: #ffffff;
                font-size: 14px;
                font-weight: 500;
                font-family: 'Montserrat', sans-serif !important;
            }
        }

        .auth-btn-box {
            margin-top: 30px;
            width: 100%;
            display: flex;
            align-items: center;

            .login_btn {
                width: 230px;
                height: 40px;
                background-color: #F9A226;
                color: #ffffff;
                padding: 10px 20px;
                display: flex;
                align-items: center;
                gap: 10px;
                cursor: pointer;
                transition: all 0.3s ease-out;

                &:active {
                    transform: scale(0.98);
                    background-color: #a76406e3;
                }
            }

            .register_btn {
                width: calc(100% - 230px);
                height: 40px;
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;

                span:hover {
                    cursor: pointer;
                    color: #F9A226;
                }
            }
        }
        .support_box{
            display: flex;
            align-items: center;
            width: 100%;
            gap: 20px;
            margin-top: 50px;
            .fluid_icon{
                color: #ffffff !important;
                cursor: pointer;
                 transition: all 0.3s ease-out;
                &:hover {
                    color: #F9A226 !important;
                }
            }
            span{
                font-size: 14px;
                 color: #ffffff;
                 cursor: pointer;
                 transition: all 0.3s ease-out;
                 &:hover {
                    color: #F9A226;
                }
            }
        }

    }

    .logo_box {
        position: absolute;
        bottom: 50px;
        left: 99px;
        color: #412A52;

        .title {
            font-size: 38px;
            font-weight: 500;
            opacity: 0;
            animation: brand-title 1s cubic-bezier(1, 0.5, 0.8, 1) 0.5s forwards;
        }

        .subtitle {
            font-size: 20px;
            font-weight: 500;
            opacity: 0;
            animation: brand-subtitle 1s cubic-bezier(1, 0.5, 0.8, 1) 0.5s forwards;
        }
    }

    .login_logo_picture {
        width: 70px;
        object-fit: contain;
        position: absolute;
        opacity: 0;
        animation: logo-picture 1s cubic-bezier(1, 0.5, 0.8, 1) 0.5s forwards;

    }



}



/* Large desktops and laptops */
@media (min-width: 1537px) {
    .login_page {
        .form_conatiner {
            width: 790px;
            padding: 350px 100px 0px 100px;

            &>.login_title {
                margin-bottom: 50px;
            }
        }

    }

    .login_logo_picture {
        width: 60px !important;
        top: 89px;
        left: 99px;
    }

}

/* Landscape tablets and medium desktops */
@media (min-width: 1301px) and (max-width: 1536.99px) {
    .login_page {
        .form_conatiner {
            width: 40%;
            padding: 250px 60px 0px 60px;

            &>.login_title {
                margin-bottom: 50px;
            }



        }
    }

    .logo_box {
        position: absolute;
        bottom: 30px !important;
        left: 99px;

        .title {
            font-size: 30px !important;
            font-weight: 500;
        }

        .subtitle {
            font-size: 16px !important;
            font-weight: 500;
        }
    }

    .login_logo_picture {
        width: 60px !important;
        top: 89px;
        left: 99px;
    }
}

@media (min-width: 991.1px) and (max-width: 1300.99px) {
    .login_page {
        .form_conatiner {
            width: 40%;
            padding: 200px 30px 0px 30px;

            &>.login_title {
                margin-bottom: 50px;
            }
            .auth-btn-box {
                margin-top: 30px;
                width: 100%;
                display: flex;
                align-items: center;
                .login_btn {
                    width: 200px;
                    height: 40px;
                    
                    padding: 10px 20px !important;
                }

                .register_btn {
                    width: calc(100% - 200px);



                }
            }
        }
    }

    .logo_box {
        position: absolute;
        bottom: 30px !important;
        left: 99px;

        .title {
            font-size: 30px !important;
           
        }

        .subtitle {
            font-size: 16px !important;
        }
    }

    .login_logo_picture {
        width: 60px !important;
        top: 89px;
        left: 99px;
    }
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
    .login_page {
        .form_conatiner {
            width: 100%;
            padding: 200px 20% 0px 20%;

            &>.login_title {
                margin-bottom: 50px;
            }
        }
    }

    .logo_box {
        bottom: 30px !important;
        left: 99px;
        z-index: 10;

        .title {
            font-size: 20px !important;
            font-weight: 500;
            color: #ffffff !important;
        }

        .subtitle {
            font-size: 14px !important;
            font-weight: 500;
            color: #ffffff !important;
        }
    }

    .login_logo_picture {
        width: 60px !important;
        top: 89px;
        left: 99px;
        z-index: 10;
    }
}

/* Landscape phones and portrait tablets */
@media (min-width: 480.99px) and (max-width: 767px) {
    .login_page {
        .form_conatiner {
            width: 100%;
            padding: 100px 20% 0px 20%;

            &>.login_title {
                margin-bottom: 50px;
            }
        }
    }

    .logo_box {
        position: absolute;
        bottom: 40px !important;
        left: 40px !important;
        z-index: 10;

        .title {
            font-size: 20px !important;
            font-weight: 500;
            color: #ffffff !important;
        }

        .subtitle {
            font-size: 14px !important;
            font-weight: 500;
            color: #ffffff !important;
        }
    }

    .login_logo_picture {
        width: 50px !important;
        top: 30px !important;
        left: 40px !important;
        z-index: 10;
    }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {

    .login_page {
        .form_conatiner {
            width: 100%;
            padding: 160px 20px 0px 20px;

            &>.login_title {
                font-size: 20px !important;
                margin-bottom: 30px !important;
            }

            .auth-btn-box {
                margin-top: 30px;
                width: 100%;
                display: flex;
                align-items: center;
                .login_btn {
                    width: 200px;
                    height: 50px;
                    
                    padding: 10px 20px !important;
                }

                .register_btn {
                    width: calc(100% - 200px);



                }
            }

        }
    }

    .logo_box {
        bottom: 40px !important;
        left: 40px !important;
        z-index: 10;

       .title {
            font-size: 20px !important;
            color: #ffffff !important;
        }

        .subtitle {
            font-size: 14px !important;
            font-weight: 500;
            color: #ffffff !important;
        }
    }

    .login_logo_picture {
        width: 60px !important;
        top: 30px !important;
        left: 20px !important;
        z-index: 10;
    }


}

// bacground image

// 1920x1080


@keyframes brand-title{
    0%{
        opacity: 0;
        transform: translateX(200px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
}
@keyframes brand-subtitle{
    0%{
        opacity: 0;
        transform: translateX(-200px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
}
@keyframes logo-picture{
    0%{
        opacity: 0;
        transform: scale(0);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
}
</style>
