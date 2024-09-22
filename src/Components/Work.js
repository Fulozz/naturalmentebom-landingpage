import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Escolha o tipo",
      text: "Escolha o tipo de alface que deseja.",
    },
    {
      image: ChooseMeals,
      title: "Qual frequencia?",
      text: "Escolha a frequencia que deseja receber.",
    },
    {
      image: DeliveryMeals,
      title: "A pronta-entrega",
      text: "Tenha suas entregas rapidas e faça o pedido agora!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Como funciona?</h1>
        <p className="primary-text">
          Você realiza o pedido pelo whatsapp e nós entregamos na sua casa ou
          estabelecimento. Simples assim!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
