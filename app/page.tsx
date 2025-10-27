import Link from "next/link";

const stats = [
  { label: "Retorno projetado", value: "+125% em 5 anos" },
  { label: "Rentabilidade média anual", value: "≈ 19,7% a.a." },
  { label: "Ticket mínimo", value: "R$ 100 mil" },
  { label: "Localização", value: "Penha / SC" },
  { label: "Status", value: "Captação em andamento" }
];

const investmentStructure = [
  { label: "Valor total", value: "R$ 1.000.000" },
  { label: "Nº de cotas", value: "10 (R$ 100 mil cada)" },
  { label: "Pagamento", value: "20 mil de entrada + 10×5 mil + 2×15 mil" },
  { label: "Prazo", value: "5 anos (2025–2030)" },
  { label: "Administração", value: "Alvo Capital" },
  { label: "Taxa de gestão", value: "15% sobre lucro" },
  { label: "Comissão de revenda", value: "6% (paga pela SPE)" }
];

const guarantees = [
  "Lastro real com matrícula e escritura da SPE",
  "Auditoria e relatórios trimestrais",
  "Governança com prioridade ao investidor",
  "Contratos e compliance com AML e LGPD"
];

const legalTimeline = [
  "Criação da SPE",
  "Assinatura dos contratos",
  "Captação dos cotistas",
  "Compra do imóvel",
  "Lançamento e revenda",
  "Pagamento do comprador",
  "Distribuição dos lucros"
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="badge">Operação Penha 142 • Alvo Capital</div>
          <h1>Transforme R$ 100 mil em R$ 225 mil com lastro imobiliário real.</h1>
          <p>
            Participe da operação exclusiva da Alvo Capital — 10 cotas de R$ 100 mil cada, em um imóvel premium a
            preço de custo, próximo ao Beto Carrero World.
          </p>
          <div className="stats">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <h3>{stat.label}</h3>
                <p>{stat.value}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="#cta" className="btn btn-primary">
              Baixar Memorando de Investimento (PDF)
            </Link>
            <Link href="#contato" className="btn btn-outline">
              Falar com a Alvo Capital
            </Link>
          </div>
        </div>
      </section>

      <section id="sobre">
        <div className="container grid" style={{ gap: "2.5rem" }}>
          <div>
            <h2 className="section-title">Sobre o projeto</h2>
            <p className="section-subtitle">
              A poucos minutos do Beto Carrero World e das praias de Penha e Piçarras, a região está entre as que mais
              se valorizam em Santa Catarina — com crescimento superior a 50% desde 2020.
            </p>
          </div>
          <div className="card">
            <h3>Detalhes técnicos</h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {[
                { label: "Área", value: "142 m²" },
                { label: "Valor de aquisição", value: "R$ 1.000.000" },
                { label: "Valor de mercado (lançamento)", value: "R$ 1.988.000" },
                { label: "Valorização estimada", value: "15% a.a." },
                { label: "Padrão construtivo", value: "Alto padrão / Construtora sólida" }
              ].map((item) => (
                <div key={item.label}>
                  <h4 style={{ marginBottom: "0.35rem", color: "rgba(3, 17, 17, 0.65)", fontSize: "0.9rem" }}>
                    {item.label}
                  </h4>
                  <p style={{ fontWeight: 600, color: "var(--color-petroleo)" }}>{item.value}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.5rem", color: "rgba(3, 17, 17, 0.7)" }}>
              Investimento estratégico com potencial de valorização acima da média do litoral catarinense, em um
              empreendimento com padrão construtivo elevado e demanda comprovada pela proximidade com o parque.
            </p>
          </div>
        </div>
      </section>

      <section id="estrutura" style={{ background: "white" }}>
        <div className="container grid" style={{ gap: "2rem" }}>
          <div>
            <h2 className="section-title">Estrutura do investimento</h2>
            <p className="section-subtitle">
              Você participa como cotista de uma SPE junto com a Alvo Capital, adquirindo o imóvel antes do lançamento e
              compartilhando o lucro integral da revenda.
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {investmentStructure.map((item) => (
              <article className="card" key={item.label}>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.35rem" }}>{item.label}</h3>
                <p style={{ fontWeight: 600, color: "rgba(3, 17, 17, 0.82)" }}>{item.value}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <Link href="#cta" className="btn btn-primary">
              Quero receber o material completo
            </Link>
          </div>
        </div>
      </section>

      <section id="retorno">
        <div className="container grid" style={{ gap: "2.5rem" }}>
          <div>
            <h2 className="section-title">Projeção de retorno</h2>
            <p className="section-subtitle">
              Rentabilidade de fundo de desenvolvimento com a segurança de um ativo físico e gestão profissional.
            </p>
          </div>
          <div className="card">
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              {[ 
                { label: "Investimento total", value: "R$ 100.000" },
                { label: "Valor de revenda (2027)", value: "R$ 2.628.000" },
                { label: "Lucro líquido por cota", value: "R$ 125.000" },
                { label: "Valor final recebido", value: "R$ 225.000" },
                { label: "TIR anual", value: "≈ 19,7% a.a." }
              ].map((item) => (
                <div key={item.label}>
                  <h4 style={{ marginBottom: "0.35rem", color: "rgba(3, 17, 17, 0.65)", fontSize: "0.9rem" }}>
                    {item.label}
                  </h4>
                  <p style={{ fontWeight: 600, color: "var(--color-petroleo)" }}>{item.value}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <p style={{ color: "rgba(3, 17, 17, 0.75)", lineHeight: 1.6 }}>
                2025 → aporte inicial → 2026 valorização acelerada com obras e divulgação → 2027 revenda do ativo →
                2027–2030 recebimento do comprador final → 2030 distribuição do lucro aos cotistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="seguranca" style={{ background: "white" }}>
        <div className="container grid" style={{ gap: "2rem" }}>
          <div>
            <h2 className="section-title">Segurança e governança</h2>
            <p className="section-subtitle">
              Estrutura jurídica robusta, com auditoria independente, governança alinhada ao investidor e lastro
              imobiliário registrado em cartório.
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <article className="card">
              <h3>Estrutura Jurídica</h3>
              <ul style={{ paddingLeft: "1.2rem", color: "rgba(3, 17, 17, 0.7)", lineHeight: 1.6 }}>
                <li>Cada operação estruturada em uma SPE exclusiva.</li>
                <li>Contratos formais: Constituição, Acordo de Quotistas, Gestão, Intermediação e Compliance.</li>
                <li>Auditoria independente e conta bancária segregada.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Estrutura Tributária</h3>
              <div className="grid" style={{ gap: "1rem" }}>
                {[
                  { entity: "Alvo Capital", regime: "Simples Nacional", tax: "6%", note: "Taxa de gestão" },
                  { entity: "SPE", regime: "Lucro Presumido", tax: "5–6%", note: "Revenda do imóvel" },
                  { entity: "Investidor", regime: "Pessoa Física", tax: "Isento", note: "Lucro líquido distribuído" }
                ].map((item) => (
                  <div key={item.entity} style={{ borderBottom: "1px solid rgba(11, 61, 59, 0.1)", paddingBottom: "0.75rem" }}>
                    <h4 style={{ marginBottom: "0.25rem", color: "var(--color-petroleo)" }}>{item.entity}</h4>
                    <p style={{ margin: 0, color: "rgba(3, 17, 17, 0.7)" }}>
                      {item.regime} • {item.tax}
                    </p>
                    <p style={{ margin: 0, color: "rgba(3, 17, 17, 0.55)", fontSize: "0.9rem" }}>{item.note}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="card">
              <h3>Garantias</h3>
              <ul style={{ paddingLeft: "1.2rem", color: "rgba(3, 17, 17, 0.7)", lineHeight: 1.6 }}>
                {guarantees.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="trilha">
        <div className="container">
          <h2 className="section-title">Trilha jurídica e transparência</h2>
          <p className="section-subtitle">
            Linha do tempo operacional com governança clara e compliance desde a criação da SPE até a distribuição
            final de lucros aos cotistas.
          </p>
          <div className="timeline">
            {legalTimeline.map((step, index) => (
              <div className="timeline-step" key={step} data-step={`${index + 1}`}>
                <h3 style={{ marginBottom: "0.35rem", color: "var(--color-petroleo)" }}>{step}</h3>
                <p style={{ color: "rgba(3, 17, 17, 0.66)" }}>
                  {index === 0 && "Constituição da SPE com objeto exclusivo da operação."}
                  {index === 1 && "Assinatura simultânea de acordo de quotistas, contratos de gestão e compliance."}
                  {index === 2 && "Captação estruturada, com subscrição integral das cotas e comprovação de recursos."}
                  {index === 3 && "Aquisição do ativo com lavratura de escritura e registro em nome da SPE."}
                  {index === 4 && "Estratégia comercial de lançamento e revenda conduzida pela Alvo Capital."}
                  {index === 5 && "Recebimento do comprador final em conta vinculada com auditoria independente."}
                  {index === 6 && "Distribuição proporcional dos resultados aos cotistas da SPE."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" style={{ background: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Memorando de investimento</h2>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "680px" }}>
            Gere um PDF personalizado com os dados da operação, simulação financeira completa, estrutura jurídica,
            cronograma e declaração de risco com a assinatura da Alvo Capital.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/docs/memorando-operacao-penha142.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Gerar e baixar memorando personalizado
            </Link>
            <Link href="#contato" className="btn btn-outline">
              Quero falar com um especialista
            </Link>
          </div>
        </div>
      </section>

      <section id="pitch">
        <div className="container grid" style={{ gap: "2rem" }}>
          <div>
            <h2 className="section-title">Pitch institucional</h2>
            <p className="section-subtitle">
              Roteiro de 45 segundos para vídeo de apresentação da Operação Penha 142 no site.
            </p>
          </div>
          <article className="card" style={{ lineHeight: 1.7, color: "rgba(3, 17, 17, 0.75)" }}>
            <p>
              “A Alvo Capital cria oportunidades exclusivas em imóveis de alto padrão com valorização garantida. Nesta
              operação, em Penha, você investe com segurança e participa da valorização total do ativo. Estamos comprando
              agora o que o mercado vai lançar pelo dobro do preço. Com R$ 100 mil, você se torna sócio de um imóvel de
              R$ 1 milhão, com retorno projetado de 19% ao ano. É simples, transparente e com lastro físico. Invista com
              inteligência. Invista com a Alvo Capital.”
            </p>
          </article>
        </div>
      </section>

      <section id="contato" style={{ background: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Garanta sua participação</h2>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "620px" }}>
            Garanta sua participação na Operação Penha 142 — vagas limitadas a 10 cotas.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="mailto:contato@alvocapital.com.br" className="btn btn-primary">
              Quero investir agora
            </Link>
            <a href="tel:+554799999999" className="btn btn-outline">
              Fale com o time Alvo Capital
            </a>
          </div>
          <div style={{ marginTop: "2rem", color: "rgba(3, 17, 17, 0.66)" }}>
            contato@alvocapital.com.br • Riviera Business Mall – Itajaí, SC
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <strong>Alvo Capital Gestão e Participações Ltda.</strong>
          <span>CNPJ 12.345.678/0001-99 | Itajaí / SC</span>
          <span>contato@alvocapital.com.br | (47) 9XXXX-XXXX</span>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="#">Termos de uso</Link>
            <Link href="#">Política de privacidade</Link>
            <Link href="#">LGPD e compliance</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
