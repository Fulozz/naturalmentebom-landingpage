import React from "react";

import { ArrowDownToLine, PackageCheck, Leaf } from "lucide-react";
const Work = () => {
  const workInfoData = [
    {
      Icon: Leaf,
      title: "Escolha o tipo",
      text: "Seu pedido pode ser de alface lisa, crespa ou americana, o que preferir.",
    },
    {
      Icon: ArrowDownToLine,
      title: "Qual frequencia?",
      text: "Você decide a cada quanto tempo quer receber.",
    },
    {
      Icon: PackageCheck,
      title: "A pronta-entrega",
      text: "Tenha sempre alface fresquinha em casa.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funciona</p>
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
              <data.Icon alt="" className="icons"/>
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
