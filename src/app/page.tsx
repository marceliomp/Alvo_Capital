import type { ReactNode } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { PdfGenerator } from "@/components/PdfGenerator";
import { FaFilePdf, FaShieldAlt, FaUniversity, FaBalanceScale } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const highlights = [
  { label: "Retorno projetado", value: "+125% em 5 anos" },
  { label: "Rentabilidade média anual", value: "≈ 19,7% a.a." },
  { label: "Ticket mínimo", value: "R$ 100 mil" },
  { label: "Localização", value: "Penha / SC" },
  { label: "Status", value: "Captação em andamento" }
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <InvestmentStructure />
      <ReturnProjection />
      <SecuritySection />
      <LegalTrailSection />
      <MemorandumSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section style={{ padding: "6rem 0 2rem", background: "#ffffff" }}>
      <div className="container" style={{ display: "grid", gap: "3rem" }}>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          <span className="tag">Operação Penha 142</span>
          <h1 style={{ fontSize: "3.2rem", lineHeight: 1.1 }}>
            Transforme R$ 100 mil em R$ 225 mil com lastro imobiliário real.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", maxWidth: "620px" }}>
            Participe da operação exclusiva da Alvo Capital — 10 cotas de R$ 100 mil cada, em um
            imóvel premium a preço de custo, próximo ao Beto Carrero World.
          </p>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <div key={item.label} className="highlight-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a className="cta-button" href="#memorando">
              Baixar Memorando de Investimento (PDF)
            </a>
            <a
              className="cta-button"
              style={{ background: "transparent", color: "var(--color-petroleo)", boxShadow: "none", border: "1px solid rgba(11,61,59,0.2)" }}
              href="#contato"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section style={{ padding: "6rem 0" }}>
      <div className="container grid" style={{ gap: "3rem", alignItems: "center" }}>
        <div>
          <SectionHeader
            tag="Localização"
            title="Projeto premium no eixo turístico que mais cresce em Santa Catarina"
            subtitle="A poucos minutos do Beto Carrero World e das praias de Penha e Piçarras, a região está entre as que mais se valorizam no estado — com crescimento superior a 50% desde 2020."
          />
          <div className="cards-grid">
            <InfoCard label="Área privativa" value="142 m²" />
            <InfoCard label="Valor de aquisição" value="R$ 1.000.000" />
            <InfoCard label="Valor de mercado (lançamento)" value="R$ 1.988.000" />
            <InfoCard label="Valorização estimada" value="15% a.a." />
            <InfoCard label="Padrão construtivo" value="Alto padrão / Construtora sólida" />
          </div>
        </div>
        <div className="card" style={{ display: "grid", gap: "1rem" }}>
          <img
            src="https://images.unsplash.com/photo-1529429617124-aee0a93d72cc?auto=format&fit=crop&w=900&q=60"
            alt="Vista aérea de Penha, Santa Catarina"
            style={{ borderRadius: "12px", width: "100%", height: "auto", objectFit: "cover" }}
          />
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
            Render ilustrativo do empreendimento e destaque da localização estratégica em Penha/SC.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="card" style={{ display: "grid", gap: "0.5rem" }}>
      <span style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </span>
      <strong style={{ fontSize: "1.25rem" }}>{value}</strong>
    </div>
  );
}

function InvestmentStructure() {
  return (
    <section style={{ padding: "6rem 0", background: "#ffffff" }}>
      <div className="container grid" style={{ gap: "3rem", alignItems: "start" }}>
        <div>
          <SectionHeader
            tag="Estrutura"
            title="Participe como cotista de uma SPE exclusiva"
            subtitle="Você investe ao lado da Alvo Capital, adquirindo o imóvel antes do lançamento, e participa da valorização integral na revenda."
          />
          <div className="cards-grid">
            <InfoCard label="Valor total da operação" value="R$ 1.000.000" />
            <InfoCard label="Número de cotas" value="10 cotas de R$ 100 mil" />
            <InfoCard label="Cronograma de aporte" value="20 mil entrada + 10×5 mil + 2×15 mil" />
            <InfoCard label="Prazo estimado" value="5 anos (2025–2030)" />
            <InfoCard label="Administração" value="Alvo Capital" />
            <InfoCard label="Taxa de gestão" value="15% sobre lucro" />
            <InfoCard label="Comissão de revenda" value="6% (SPE)" />
          </div>
        </div>
        <div className="card" style={{ display: "grid", gap: "1rem" }}>
          <h3 style={{ fontSize: "1.6rem" }}>Oportunidade</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
            Você participa como cotista de uma Sociedade de Propósito Específico, ao lado da Alvo Capital. Compramos o ativo a preço de custo, antes do lançamento oficial, e monetizamos a margem na venda.
          </p>
          <a className="cta-button" href="#contato">
            Quero receber o material completo
          </a>
        </div>
      </div>
    </section>
  );
}

function ReturnProjection() {
  return (
    <section style={{ padding: "6rem 0" }}>
      <div className="container grid" style={{ gap: "3rem" }}>
        <SectionHeader
          tag="Resultados"
          title="Projeção de retorno com governança profissional"
          subtitle="Investimento de R$ 100 mil com retorno projetado de R$ 225 mil ao final da operação. Rentabilidade de fundo de desenvolvimento, com a segurança de um ativo físico."
        />
        <div className="cards-grid">
          <InfoCard label="Investimento total" value="R$ 100.000" />
          <InfoCard label="Valor de revenda (2027)" value="R$ 2.628.000" />
          <InfoCard label="Lucro líquido por cota" value="R$ 125.000" />
          <InfoCard label="Valor final por cota" value="R$ 225.000" />
          <InfoCard label="TIR anual" value="≈ 19,7% a.a." />
        </div>
        <div className="card" style={{ display: "grid", gap: "1.2rem" }}>
          <h3 style={{ fontSize: "1.6rem" }}>Linha do tempo da operação</h3>
          <ol style={{ listStyle: "none", display: "grid", gap: "0.9rem", padding: 0 }}>
            {[
              "2025 – Aporte inicial e constituição da SPE",
              "2026 – Evolução da obra e valorização do ativo",
              "2027 – Revenda do imóvel",
              "2028-2030 – Recebimento do comprador final",
              "2030 – Distribuição dos lucros aos cotistas"
            ].map((step) => (
              <li key={step} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--color-verde)", fontWeight: 700 }}>•</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section style={{ padding: "6rem 0", background: "#ffffff" }}>
      <div className="container grid" style={{ gap: "3rem" }}>
        <SectionHeader
          tag="Governança"
          title="Segurança jurídica, transparência e governança ativa"
          subtitle="Cada operação da Alvo Capital é estruturada com SPE exclusiva, auditoria independente e contratos que priorizam o investidor."
        />
        <div className="cards-grid">
          <FeatureCard
            icon={<MdOutlineSecurity size={32} color="var(--color-verde)" />}
            title="Estrutura jurídica"
            description="SPE exclusiva, acordos de quotistas, contratos de gestão e compliance completo."
          />
          <FeatureCard
            icon={<FaUniversity size={32} color="var(--color-verde)" />}
            title="Estrutura tributária"
            description="Operação otimizada com Alvo Capital no Simples Nacional e SPE no Lucro Presumido."
          />
          <FeatureCard
            icon={<FaShieldAlt size={32} color="var(--color-verde)" />}
            title="Garantias sólidas"
            description="Lastro em matrícula e escritura, relatórios trimestrais e auditoria independente."
          />
          <FeatureCard
            icon={<FaBalanceScale size={32} color="var(--color-verde)" />}
            title="Compliance"
            description="Contratos aderentes a AML, LGPD e governança corporativa orientada ao investidor."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card" style={{ display: "grid", gap: "0.75rem" }}>
      <span>{icon}</span>
      <h3 style={{ fontSize: "1.4rem" }}>{title}</h3>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{description}</p>
    </div>
  );
}

function LegalTrailSection() {
  const steps = [
    { title: "Criação da SPE", description: "Formalização jurídica e abertura da conta exclusiva." },
    { title: "Assinatura de contratos", description: "Acordo de quotistas, gestão e compliance." },
    { title: "Captação dos cotistas", description: "Aporte conforme cronograma em 10 cotas de R$ 100 mil." },
    { title: "Compra do imóvel", description: "Aquisição a preço de custo diretamente com a construtora." },
    { title: "Lançamento e revenda", description: "Estratégia comercial acompanhada pela Alvo Capital." },
    { title: "Pagamento do comprador", description: "Liquidação do contrato de revenda." },
    { title: "Distribuição dos lucros", description: "Repasse proporcional aos cotistas." }
  ];

  return (
    <section style={{ padding: "6rem 0" }}>
      <div className="container grid" style={{ gap: "3rem" }}>
        <SectionHeader
          tag="Trilha jurídica"
          title="Passo a passo da operação"
          subtitle="Acompanhe as etapas com transparência total — da constituição da SPE até a distribuição do lucro."
        />
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={step.title} className="timeline-step">
              <h4>
                {index + 1}️⃣ {step.title}
              </h4>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemorandumSection() {
  return (
    <section id="memorando" style={{ padding: "6rem 0", background: "#ffffff" }}>
      <div className="container grid" style={{ gap: "3rem", alignItems: "start" }}>
        <div>
          <SectionHeader
            tag="Memorando"
            title="Baixe o memorando completo da Operação Penha 142"
            subtitle="Preencha seus dados e gere um PDF personalizado com informações essenciais da oportunidade."
          />
          <div className="card" style={{ display: "grid", gap: "1rem", alignItems: "center" }}>
            <FaFilePdf size={42} color="var(--color-verde)" />
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
              Conteúdo completo com sumário executivo, estrutura jurídica e tributária, simulação financeira, cronograma e declaração de risco.
            </p>
            <ul style={{ listStyle: "none", display: "grid", gap: "0.5rem", padding: 0 }}>
              <li>• Nome do investidor</li>
              <li>• Valor da cota</li>
              <li>• Data da emissão</li>
            </ul>
          </div>
        </div>
        <PdfGenerator />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" style={{ padding: "6rem 0" }}>
      <div className="container card" style={{ textAlign: "center", display: "grid", gap: "1.5rem" }}>
        <SectionHeader
          tag="Investimento"
          title="Garanta sua participação na Operação Penha 142"
          subtitle="Vagas limitadas a 10 cotas. Entre em contato com nosso time para receber o contrato e iniciar o aporte."
        />
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a className="cta-button" href="mailto:contato@alvocapital.com.br">
            Quero investir agora
          </a>
          <a
            className="cta-button"
            style={{ background: "transparent", color: "var(--color-petroleo)", boxShadow: "none", border: "1px solid rgba(11,61,59,0.2)" }}
            href="tel:+554799999999"
          >
            Falar com a Alvo Capital
          </a>
        </div>
        <div style={{ color: "var(--color-text-muted)" }}>
          contato@alvocapital.com.br | Riviera Business Mall – Itajaí, SC
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <strong>Alvo Capital Gestão e Participações Ltda.</strong>
        <span>CNPJ 12.345.678/0001-99 | Itajaí / SC</span>
        <span>contato@alvocapital.com.br | (47) 9XXXX-XXXX</span>
        <span>© {new Date().getFullYear()} Alvo Capital. Todos os direitos reservados.</span>
        <span>Termos de uso &amp; Política de privacidade sob solicitação.</span>
      </div>
    </footer>
  );
}
