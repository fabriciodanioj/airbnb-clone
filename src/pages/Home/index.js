import React from "react";

import Header from "../../components/Header";
import CategoriesCards from "../../components/CategoriesCards";
import ExploreCard from "../../components/ExploreCard";
import ExperienceCard from "../../components/ExperienceCard";

import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>O que você deseja encontrar, Fabricio?</h1>
        <div className="categories">
          <CategoriesCards
            image="https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large"
            text="Estadias"
          />
          <CategoriesCards
            image="https://a0.muscache.com/im/pictures/a77ee672-e790-4362-8cc5-52bec1371ece.jpg?aki_policy=large"
            text="Experiências"
          />
          <CategoriesCards
            image="https://a0.muscache.com/im/pictures/38f2bfd6-1f4d-46d7-babf-61657deef302.jpg?aki_policy=large"
            text="Aventuras"
          />
        </div>
        <div className="explore">
          <h1>Continue explorando</h1>
          <ExploreCard />
        </div>
        <div className="experience">
          <h1>Experiências com avaliações excelentes</h1>
          <h2>
            Reserve atividades guiadas por anfitriões locais em sua próxima
            viagem.
          </h2>
          <div className="experience-cards">
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/c9f2f8b5-1743-47df-87ba-092418d4f6ee.jpg?aki_policy=poster"
              title="Os melhores sabores de Lisboa"
              price="297"
              country="Portugal"
            />
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/2f690952-a2e3-47bc-8736-b98ec3ba60c4.jpg?aki_policy=poster"
              title="Conexão com a alma samurai"
              price="391"
              country="Japão"
            />
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/22c51ce6-fd30-42d7-8ed7-025d93e58a2b.jpg?aki_policy=poster"
              title="Luca e Lorenzo, culinária nas colinas de Chianti "
              price="618"
              country="Itália"
            />
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/06b13b88-40dc-4e5c-ac8e-634b466dbf3b.jpg?aki_policy=poster"
              title="Tour com os segredos mais bem guardados de Paris"
              price="198"
              country="França"
            />
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/e1d37f1a-0edc-4a31-a518-f7da8b2ea630.jpg?aki_policy=poster"
              title="Trufas - caçada e degustação"
              price="489"
              country="Itália"
            />
          </div>
          <a href="www">Mostrar todas as experiências ></a>
        </div>
        <div className="plus">
          <h1>Lugares para ficar do Airbnb Plus</h1>
          <h2>
            Uma seleção de lugares para estadia com qualidade e design
            verificados.
          </h2>
          <img
            src="https://a0.muscache.com/4ea/air/v2/pictures/ea6285d9-5352-4447-b13d-b39bfc92dfe5.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75"
            alt=""
          />
        </div>
        <div className="adventures">
          <h1>Apresentamos as Aventuras Airbnb</h1>
          <h2>
            Viagens de vários dias lideradas por especialistas locais, com
            atividades, refeições e estadias inclusas.
          </h2>
          <div className="adventures-cards">
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/86c31198-0993-4b51-a008-fcb1759d6977.jpg?aki_policy=poster"
              title="Shimba Hills Coastal Rainforest Safari"
              price="1.770"
              country="Quênia"
            />
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/56ba0225-92af-483f-a5c4-6d449d60f09b.jpg?aki_policy=poster"
              title="Atlas Mountains Experience"
              price="442"
              country="Marrocos"
            />
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1366612-media_library/original/2080e5d0-ad8f-4f8f-bd91-e7a0c24004c4.jpeg?aki_policy=poster"
              title="Acampamento no alto da Montanha!"
              price="375"
              country="Brasil"
            />
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-884613-media_library/original/b33f6239-b565-4fdf-acc7-fac480b4112b.jpeg?aki_policy=poster"
              title="Pacote de 2 noites na natureza da Noruega(tudo incluso)"
              price="2.738"
              country="Noruega"
            />
            <ExperienceCard
              image="https://a0.muscache.com/im/pictures/0aae8f15-69ba-42c7-a66a-3c8e83b21a9b.jpg?aki_policy=poster"
              title="3 DIAS NO PARAÍSO DE ILHA GRANDE"
              price="2.950"
              country="Brasil"
            />
          </div>
          <a href="www.www">Mostrar todas as aventuras ></a>
        </div>
      </div>
    </>
  );
}
