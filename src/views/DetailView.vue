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
            Agente: {{ agente.agentName }}
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
            }
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







