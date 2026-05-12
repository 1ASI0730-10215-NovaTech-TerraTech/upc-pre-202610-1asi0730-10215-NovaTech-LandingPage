<script setup>
import FooterContent from "../components/footer-content.vue";
import ToolbarContent from "../components/toolbar-content.vue";

import { ref } from 'vue';

const activeTab = ref('about');

const contents = {
  about: {
    title: "About Us",
    text: "At TerraTech, we were founded on the conviction that the future of agriculture lies not only in technology, but also in a deep respect for those who work the land. We are a technology ecosystem designed to bridge the gap between traditional methods and digital precision, offering smart monitoring solutions that adapt to the most challenging conditions. Our mission is to empower local producers through the use of LoRaWAN networks, ensuring that a lack of connectivity or power is never an obstacle to the security of their crops. We firmly believe in transparency as a driver of change; therefore, we connect farmers, advisors, and consumers in a network of trust where water conservation, soil health, and product traceability are the foundation of a fairer and more sustainable economy. We don't just collect data: we cultivate certainty, protect the community's efforts, and pave the way for every harvest to be a testament to quality, transparency, and national pride."
  },
  features: {
    title: "Application Features",
    text: "TerraTech's technical architecture is based on precision and resource efficiency. The implementation of IoT nodes enables constant monitoring of key biopedological variables, ensuring optimal nutritional management. This data network integrates with computer vision algorithms to generate dynamic Fertility Maps, providing a layer of geospatial intelligence on the ground. The ecosystem culminates in a Predictive Alerts engine based on local weather models, enabling proactive agriculture that reduces input waste and maximizes yield under any weather conditions, even in areas with limited connectivity thanks to our LoRaWAN technology.",
  },
  community: {
    title: "Our Community",
    text: "We build a bridge of trust between the field and the table. Our community allows farmers to share projections of their input needs based on real data, receiving timely advice and technical support. At the same time, we empower suppliers with market intelligence, enabling them to anticipate their store's demand and offer exactly what the soil requires, optimizing their sales and inventory. Finally, the end user goes from being a spectator to becoming part of the story, accessing complete traceability of their food. At TerraTech, every piece of data shared is a step towards fairer, more predictable, and more transparent agriculture for everyone.",
  },
  developers: {
    title: "Developers",
    text: "The TerraTech development team applies industry best practices and modern technologies to ensure high-quality, efficient, and scalable systems. We focus on designing clean architectures and innovative solutions that enable continuous improvement at every stage of the project."
  }
};
</script>

<template>
  <header>
    <toolbar-content/>
  </header>

  <main>
    <div class="hero-container">
      <img src="/assets/hero-image-green.webp" alt="hero-image-field"/>
    </div>

    <div class="about-container">
      <nav class="about-tabs">
        <button
            class="tab-item"
            :class="{ active: activeTab === 'about' }"
            @click="activeTab = 'about'"
        >About us</button>

        <button
            class="tab-item"
            :class="{ active: activeTab === 'features' }"
            @click="activeTab = 'features'"
        >Features</button>

        <button
            class="tab-item"
            :class="{ active: activeTab === 'community' }"
            @click="activeTab = 'community'"
        >Our community</button>

        <button
            class="tab-item"
            :class="{ active: activeTab === 'developers' }"
            @click="activeTab = 'developers'"
        >Developers</button>
      </nav>

      <div class="about-content">
        <h2 class="dynamic-title">{{ contents[activeTab].title }}</h2>
        <p class="dynamic-text">{{ contents[activeTab].text }}</p>

        <div v-if="activeTab === 'about'">
          <!--TODO: The recording of the 'about' segments is left for future installments.-->
          <img class="about-image" src="/assets/about-the-team.webp" alt="fake-about-the-team"/>
        </div>

        <div v-if="activeTab === 'features'">
          <!--TODO: The recording of the 'about' segments is left for future installments.-->
          <img class="about-image" src="/assets/about-the-product.webp" alt="fake-about-the-product"/>
        </div>

        <div v-if="activeTab === 'community'">
          <!--TODO: The recording of the 'about' segments is left for future installments.-->
          <img class="about-image" src="/assets/community.webp" alt="fake-about-the-community"/>
        </div>

        <div v-if="activeTab === 'developers'" class="team-content">
          <article>
            <img src="/assets/luis.jpeg" alt="Luis Acuña"/>
            <h4>Acuña de la Cruz, Luis Alfredo</h4>
            <p>I am passionate about software development and solving problems through innovative solutions. I apply best practices and modern technologies to create robust, scalable, and high-quality systems, always prioritizing continuous learning in every development project.</p>
          </article>

          <article>
            <img src="/assets/rodrigo.jpeg" alt="Rodrigo Aguilar"/>
            <h4>Aguilar Untiveros, Rodrigo Fabrizio</h4>
            <p>I am motivated by designing functional and innovative solutions to technical challenges. My approach focuses on creating robust digital tools, prioritizing process optimization and implementing quality standards that enable continuous growth.</p>
          </article>

          <article>
            <img src="/assets/guillermo.jpeg" alt="Guillermo Howard"/>
            <h4>Howard Robles, Guillermo Arturo</h4>
            <p>I am passionate about researching and analyzing problems to propose innovative solutions. I strive to develop comprehensive software by applying best practices and modern technologies that ensure efficiency, scalability, quality, and continuous improvement in each of my technology projects.</p>
          </article>

          <article>
            <img src="/assets/breithner.jpeg" alt="Breithner Perez"/>
            <h4>Perez Encarnacion, Breithner Rodolfo</h4>
            <p>I possess strong skills in C++ and relational model design. I have intermediate experience with SQL and NoSQL (MongoDB) databases, including rule validation and aggregation pipelines to ensure structured and efficient data.</p>
          </article>

          <article>
            <img src="/assets/jorge.jpeg" alt="Jorge Retuerto"/>
            <h4>Retuerto Rodríguez, Jorge Manuel</h4>
            <p>I have intermediate skills in C++, C#, HTML, and CSS, as well as basic knowledge of Python and Java. I am responsible for communication, planning, and collaborative development, leading the operational organization within the team.</p>
          </article>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <footer-content/>
  </footer>
</template>

<style scoped>
main {
  background: #ffffff;
}
.hero-container img{
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
.about-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 1500px;
}
.about-tabs {
  display: flex;
  justify-content: center;
  gap: 3rem;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 3rem;
}
.tab-item {
  background: none;
  border: none;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  text-transform: capitalize;
}
.tab-item:hover {
  color: #000;
}
.tab-item.active {
  color: #000;
}
.tab-item.active::after {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #000;
  animation: slideIn 0.3s ease;
}
@keyframes slideIn {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
.about-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.about-content h2{
  font-size: 64px;
  margin-bottom: 2rem;
}
.about-content p {
  transition: opacity 0.3s ease;
}

.team-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  padding: 1rem;
  animation: fadeIn 0.6s ease-out;
  width: 1000px;
  justify-self: center;
}
.about-image{
  display: block;
  margin-top: 4rem;
  width: 800px;
  height: 500px;
}
.team-content article {
  background: #ffffff;
  border: 1px solid #eef2ee;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.team-content article:hover {
  transform: translateY(-10px);
  border-color: #28a745;
  box-shadow: 0 12px 30px rgba(40, 167, 69, 0.15);
}
.team-content article img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 4px solid #f0fdf4;
  transition: transform 0.3s ease;
}
.team-content article:hover img {
  transform: scale(1.05);
  border-color: #28a745;
}
.team-content article h4 {
  font-size: 1.1rem;
  color: #1a1a1a;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
  position: relative;
  padding-bottom: 10px;
}
.team-content article h4::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: #28a745;
  border-radius: 2px;
}
.team-content article p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: center;
  min-height: auto !important;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>