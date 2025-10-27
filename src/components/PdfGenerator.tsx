"use client";

import { useState, type CSSProperties } from "react";
import { jsPDF } from "jspdf";

interface PdfGeneratorProps {
  className?: string;
}

export function PdfGenerator({ className }: PdfGeneratorProps) {
  const [investorName, setInvestorName] = useState("");
  const [investmentValue, setInvestmentValue] = useState("R$ 100.000,00");

  const handleGeneratePdf = () => {
    const doc = new jsPDF();
    const title = "Operação Penha 142 – Memorando de Investimento";
    const date = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "long"
    }).format(new Date());

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(title, 15, 20, { maxWidth: 180 });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Investidor: ${investorName || "Nome do Investidor"}`, 15, 40);
    doc.text(`Valor da Cota: ${investmentValue}`, 15, 48);
    doc.text(`Data: ${date}`, 15, 56);

    const summary = [
      "Sumário Executivo",
      "Localização: Penha / SC (próximo ao Beto Carrero World)",
      "Área privativa: 142 m²",
      "Valor de aquisição: R$ 1.000.000",
      "Valor projetado de revenda: R$ 2.628.000",
      "Retorno projetado: +125% em 5 anos (≈19,7% a.a.)",
      "Estrutura Jurídica: SPE exclusiva com governança Alvo Capital",
      "Taxa de Gestão: 15% sobre o lucro",
      "Declaração de Risco: Operação sujeita a riscos de mercado e execução"
    ];

    let offset = 70;

    summary.forEach((line) => {
      doc.text(`• ${line}`, 15, offset, { maxWidth: 180 });
      offset += 8;
    });

    doc.setFontSize(10);
    doc.text(
      "Alvo Capital Gestão e Participações Ltda. | CNPJ 12.345.678/0001-99",
      15,
      250
    );
    doc.text("contato@alvocapital.com.br | (47) 9XXXX-XXXX", 15, 258);

    doc.save("Alvo-Capital-Memorando.pdf");
  };

  return (
    <div className={className}>
      <div className="card" style={{ gap: "1rem", display: "grid" }}>
        <h3 style={{ fontSize: "1.5rem" }}>Gerar memorando personalizado</h3>
        <p style={{ color: "var(--color-text-muted)" }}>
          Informe seu nome e valor pretendido para gerar um PDF com o memorando
          resumido da Operação Penha 142.
        </p>
        <label style={{ display: "grid", gap: "0.35rem" }}>
          <span style={{ fontWeight: 600 }}>Nome do investidor</span>
          <input
            value={investorName}
            onChange={(event) => setInvestorName(event.target.value)}
            placeholder="Seu nome completo"
            style={inputStyles}
          />
        </label>
        <label style={{ display: "grid", gap: "0.35rem" }}>
          <span style={{ fontWeight: 600 }}>Valor da cota</span>
          <input
            value={investmentValue}
            onChange={(event) => setInvestmentValue(event.target.value)}
            placeholder="R$ 100.000,00"
            style={inputStyles}
          />
        </label>
        <button className="cta-button" onClick={handleGeneratePdf}>
          Gerar e baixar memorando
        </button>
      </div>
    </div>
  );
}

const inputStyles: CSSProperties = {
  border: "1px solid rgba(11, 61, 59, 0.15)",
  borderRadius: "12px",
  fontSize: "1rem",
  padding: "0.75rem 1rem"
};
