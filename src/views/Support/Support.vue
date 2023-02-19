<template>
    <div class="login_page">
        <img class="support_logo_picture" src="@/assets/images/login_logo.png" alt="Login logo">

        <div class="form_conatiner">

            <span class="support_title">Qo'llab quvvatlash xizmati</span>
            <span class="support_subtitle">Platforma bo'yicha savol, taklif, muammolar yuzasidan:</span>


            <div class="support-btn-box">
                <a href="tel:+998907884547" class="btn-container phone-support-btn">
                    <Icon class="fluid_icon" icon="ic:baseline-call" width="26" color="#ffffff" /> <span>Telefon</span>
                </a>
                <a href="https://t.me/saidovUmidbek" class="btn-container telegram-support-btn">
                    <Icon class="fluid_icon" icon="uit:telegram-alt" width="26" color="#ffffff" /> <span>Telegram</span>
                </a>
            </div>



            <!-- <div class="support_box">
                    <Icon class="fluid_icon" icon="mdi:arrow-left-circle-outline" width="24" color="#ffffff" /> <span>Orqaga qaytish</span>
                </div> -->
            <div class="support_box">
                <Icon @click="goPush('login')" class="fluid_icon" icon="mdi:arrow-left-circle-outline" width="24" /> <span
                    @click="goPush('login')">Kirish sahifasiga qaytish</span>
            </div>


        </div>

        <div class="support_logo_box">
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


function goPush(link) {
    router.push({ name: link })
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
        padding: 250px 100px 0px 100px;

        .support_title {
            display: block;
            color: #ffffff;
            font-size: 30px;
            text-align: center;
        }

        .support_subtitle {
            display: block;
            color: #ffffff;
            font-size: 20px;
            text-align: center;
            margin-top: 50px;
        }

        .support-btn-box {
            display: flex;
            justify-content: center;
            gap: 20px;
            width: 100%;
            margin-top: 50px;

            .btn-container {
                display: inline-block;
                padding: 10px 30px;
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s ease-out;


            }

            .phone-support-btn {
                background-color: #F9A226;
                color: #ffffff;

                &:active {
                    transform: scale(0.98);
                    background-color: #a76406e3;
                }
            }

            .telegram-support-btn {
                background-color: #4994c9;
                color: #ffffff;

                &:active {
                    transform: scale(0.98);
                    background-color: #5d9cc9;
                }

            }
        }

        .support_box {
            display: flex;
            align-items: center;
            width: 100%;
            gap: 20px;
            margin-top: 50px;

            span {
                font-size: 14px;
                color: #ffffff;
            }
        }


    }

    .support_logo_box {
        position: absolute;
        bottom: 50px;
        left: 99px;
        color: #412A52;

        .title {
            font-size: 38px;
            font-weight: 500;
            // opacity: 0;
            // animation: brand-title 1s cubic-bezier(1, 0.5, 0.8, 1) 0.5s forwards;
        }

        .subtitle {
            font-size: 20px;
            font-weight: 500;
            // opacity: 0;
            // animation: brand-subtitle 1s cubic-bezier(1, 0.5, 0.8, 1) 0.5s forwards;
        }
    }

    .support_logo_picture {
        width: 70px;
        object-fit: contain;
        position: absolute;
        // opacity: 0;
        // animation: logo-picture 1s cubic-bezier(1, 0.5, 0.8, 1) 0.5s forwards;

    }

    .support_box {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 20px;
        margin-top: 50px;

        .fluid_icon {
            color: #ffffff !important;
            cursor: pointer;
            transition: all 0.3s ease-out;

            &:hover {
                color: #F9A226 !important;
            }
        }

        span {
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



/* Large desktops and laptops */
@media (min-width: 1537px) {
    .login_page {
        .form_conatiner {
            width: 790px;
            padding: 350px 100px 0px 100px;


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





        }
    }

    .support_logo_box {
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

    .support_logo_picture {
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


        }
    }

    .support_logo_box {
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

    .support_logo_picture {
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

    .support_logo_box {
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

    .support_logo_picture {
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

    .support_logo_box {
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

    .support_logo_picture {
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
                    height: 40px;

                    padding: 10px 20px !important;
                }

                .register_btn {
                    width: calc(100% - 200px);



                }
            }

        }
    }

    .support_logo_box {
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

    .support_logo_picture {
        width: 60px !important;
        top: 30px !important;
        left: 20px !important;
        z-index: 10;
    }


}

// bacground image

// 1920x1080


@keyframes brand-title {
    0% {
        opacity: 0;
        transform: translateX(200px);
    }

    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}

@keyframes brand-subtitle {
    0% {
        opacity: 0;
        transform: translateX(-200px);
    }

    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}

@keyframes logo-picture {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}</style>
