<template>
    <div class="envelope">
        <div class="propriedade">
            <h1>Detail Property: {{ propriedade.id }}</h1>
            <h1>{{ propriedade.Title }}</h1>
            <h2>Location: {{ propriedade.Location }}</h2>
            <h3> Beds: {{ propriedade.beds }} | Baths: {{ propriedade.bath }}</h3>
            <h3>Summary: {{ propriedade.Description }}</h3>
            <h2>$ {{ propriedade.Value }}</h2>
        </div>

        <div class="agentCl">
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="firstName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp"
                        v-model="agente.agentName">
                    <div id="firstNameHelp" class="form-text">Your first name here</div>
                </div>



                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="agente.agentEmail">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="phone" aria-describedby="phoneHelp"
                        v-model="agente.agentPhone">
                    <div id="phoneHelp" class="form-text">Your phone number here</div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="agente.comments"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <h3> {{ resposta }}</h3>
        </div>
    </div>
</template>
  
<script>

import { properties } from '@/assets/db.js'; // Adjust the path accordingly
import { agents } from '@/assets/agents.js'; // Adjust the path accordingly
export default {
    name: 'DetailView',
    data() {
        return {
            propriedade: {
                id: 1,
                Title: 'Not Found',
                Location: '',
                Description: '',
                Value: 0,
                beds: 0,
                bath: 0,
                agentId: 0

            },
            agente: {
                agentId: 0,
                agentName: 'Not Found ',
                agentEmail: '',
                agentPhone: '',
                comments: ''
            },
            resposta: null
        }
    },

    mounted() {
        this.loadProperty();
        this.loadAgent();
    },
    methods: {
        loadProperty() {
            const propertyId = this.$route.params.id;

            // console.log('Property ID:', propertyId);
            var prop = properties.find(property => property.id === Number(propertyId));
            // console.log(prop);

            if (prop !== undefined) {
                this.propriedade = prop;
            }
        },
        loadAgent() {
            const agentFoundId = this.propriedade.agentId;
            var agent = agents.find(ag => ag.agentId === Number(agentFoundId))
            this.agente = agent;
        },
        submitForm() {
            // exibir mensagem de ok

            this.$swal('Data Received !')

            this.$router.push('/');
        }
    }
}


</script>

<style>
.envelope {
    display: flex;
    flex-direction: row;
}

.agentCl,
.propriedade {
    text-align: center;
    background-color: bisque;
    max-height: 40%;
    min-height: 40%;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    margin: 12px;
    width: 50%;
    padding: 20px;
}
</style>







