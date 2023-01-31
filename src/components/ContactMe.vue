<template>

    <div class="container">
        <div class="row">
            <h1>contact me</h1>
        </div>
        <div class="row">
            <h4 style="text-align:center"></h4>
        </div>
        <div class="row input-container">
            <form class="form" ref="form" @submit.prevent="sendMail">
                <div class="col-xs-6">
                    <div class="styled-input wide" >
                        <input type="text" required name="to_name" v-bind:class="{ 'text-white': theme, 'text-black': !theme }" :value="inputFieldReset" />
                        <label class="label-name">Name</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" required name="from_name" :value="inputFieldReset" />
                        <label class="label-email">Email</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" class="input-subject" required name="message" :value="inputFieldReset" />
                        <label class="lable-subject">Subject</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <textarea required name="message" type="text" :value="inputFieldReset"></textarea>
                        <label class="label-message">Message</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <!-- <div class="btn-lrg submit-btn">Send Message</div> -->
                    <input class="btn-lrg submit-btn" type="submit" name="Send Message" />
                </div>
            </form>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const theme = ref('light')
theme.value = localStorage.getItem('theme');
console.log(theme.value);
const form = ref(null);
const inputFieldReset = ref(null);
const sendMail = () => {
    emailjs.sendForm('service_g9i2dpl', 'template_6w0672m', form.value, '3z66-fmfviL9jQHXe')
        .then(() => {
            // alert('Message sent!')
            Swal.fire({
                icon: 'success',
                title: 'Submitted successfully',
                text: 'Thank you for your comments',
            })
            console.log(form.value);
            inputFieldReset.value = " ";
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'An error occurred',
                text: 'Sorry, try again in a few minutes',
            })
        });
}


</script>

<style scoped>
@media screen and (max-width: 767px) {
    .input-container {
        width: 70% !important;
        /* display: flex; */
        /* max-width: 100%; */
        margin: auto;
    }
    .styled-input {
        width: 100% !important;
    }
    .container {
        width: 100%;
    }

    .input-subject {
        margin-left: 0 !important;
    }

}

@media screen and (max-width: 595px) {
    .container {
        width: 100%;
    }

    .styled-input {
        max-width: 100% !important;
    }

    h1{
        font-size:40px !important ;
    }
}
@media screen and (min-width: 768px) {
    .lable-subject {
    padding-left: 5rem !important;
}
}

.text-white{
    color:#fff
}
.text-black{
    color:#000
}

.input-subject {
    margin-left: 64px;
}

h1 {
    font-family: "Poppins", sans-serif, "arial";
    font-weight: 600;
    font-size: 72px;
    /* color: white; */
    text-align: center;
}

h4 {
    font-family: "Roboto", sans-serif, "arial";
    font-weight: 400;
    font-size: 20px;
    /* color: #9b9b9b; */
    line-height: 1.5;
}

/* ///// inputs /////*/

input:focus~label,
textarea:focus~label,
input:valid~label,
textarea:valid~label {
    font-size: 0.75em;
    /* color: #999; */
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}

.styled-input {
    float: left;
    width: 293px;
    margin: 1rem 0;
    position: relative;
    border-radius: 4px;
}

/* @media only screen and (max-width: 768px) {
    .styled-input {
        width: 100%;
    }
} */


.label-email,
.label-name,
.label-message,
 .lable-subject {
    /* color: #999; */
    padding: 0.5rem 30px 1rem 1.5rem;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
}

.styled-input.wide {
    width: 650px;
    max-width: 100%;
}

input,
textarea {
    padding: 15px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    /* background-color: #2d2d2d; */
    /* color: white; */
    border-radius: 4px;
    border: 1px solid;

}

input:focus,
textarea:focus {
    outline: 0;
}

input:focus~span,
textarea:focus~span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
}

textarea {
    width: 100%;
    min-height: 15em;

}

.input-container {
    width: 650px;
    max-width: 100%;
    margin: 20px auto 25px auto;
}

.submit-btn {
    /* float: right; */
    padding: 7px 35px;
    border-radius: 60px;
    display: inline-block;
    border: 1px solid;
    /* background-color: #4b8cfb; */
    /* color: white; */
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
}

.submit-btn:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);
}

/* @media (max-width: 768px) {
    .submit-btn {
        width: 100%;
        float: none;
        text-align: center;
    }
} */

input[type="checkbox"]+label {
    /* color: #ccc; */
    font-style: italic;
}

input[type="checkbox"]:checked+label {
    /* color: #f00; */
    font-style: normal;
}
</style>



<!-- <style scoped>
p {
    font-size: 30px;
    padding: 10px;
    font-weight: bold;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid;
    width: 500px;
}

.form-group {
    padding: 15px;
}

.form-group input {
    padding: 10px 10px 10px 10px;
    border: 1px solid;
    border-radius: 10px;
    width: 400px;
    outline: none;
    font-family: 'Comfortaa', cursive;
    font-weight: 500;
}

.text-area {
    height: 150px;
    width: 400px;
    border: 1px solid;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    font-family: 'Comfortaa', cursive;
    font-weight: 500;
}

.form-group .submit {
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 70px;
    cursor: pointer;
    font-family: 'Comfortaa', cursive;
    font-weight: 500;
}
</style> -->