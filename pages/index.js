import Head from 'next/head';
import styles from '@/styles/Home.module.css';

const metrics = [
  { label: 'Retorno projetado', value: '+125% em 5 anos' },
  { label: 'Rentabilidade média anual', value: '≈ 19,7% a.a.' },
  { label: 'Ticket mínimo', value: 'R$ 100 mil' },
  { label: 'Localização', value: 'Penha / SC' },
  { label: 'Status', value: 'Captação em andamento' },
];

const investmentStructure = [
  { label: 'Valor total', detail: 'R$ 1.000.000' },
  { label: 'Nº de cotas', detail: '10 (R$ 100 mil cada)' },
  { label: 'Pagamento', detail: '20 mil de entrada + 10×5 mil + 2×15 mil' },
  { label: 'Prazo', detail: '5 anos (2025–2030)' },
  { label: 'Administração', detail: 'Alvo Capital' },
  { label: 'Taxa de gestão', detail: '15% sobre lucro' },
  { label: 'Comissão de revenda', detail: '6% (paga pela SPE)' },
];

const investmentDetails = [
  { item: 'Área', description: '142 m²' },
  { item: 'Valor de aquisição', description: 'R$ 1.000.000' },
  { item: 'Valor de mercado (lançamento)', description: 'R$ 1.988.000' },
  { item: 'Valorização estimada', description: '15% a.a.' },
  { item: 'Padrão construtivo', description: 'Alto padrão / Construtora sólida' },
];

const securityHighlights = [
  'Lastro real (matrícula e escritura da SPE)',
  'Auditoria e relatórios trimestrais',
  'Governança com prioridade ao investidor',
  'Contratos e compliance com AML e LGPD',
];

const legalTimeline = [
  'Criação da SPE',
  'Assinatura dos contratos',
  'Captação dos cotistas',
  'Compra do imóvel',
  'Lançamento e revenda',
  'Pagamento do comprador',
  'Distribuição dos lucros',
];

const taxStructure = [
  { entity: 'Alvo Capital', regime: 'Simples Nacional', taxation: '6%', note: 'Taxa de gestão' },
  { entity: 'SPE', regime: 'Lucro Presumido', taxation: '5–6%', note: 'Revenda do imóvel' },
  { entity: 'Investidor', regime: 'PF', taxation: 'Isento', note: 'Lucro líquido distribuído' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Alvo Capital — Operação Penha 142</title>
        <meta
          name="description"
          content="Transforme R$ 100 mil em R$ 225 mil com a Operação Penha 142 da Alvo Capital, investimento com lastro imobiliário real."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.pageWrapper}>
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>Operação Penha 142</div>
            <h1>Transforme R$ 100 mil em R$ 225 mil com lastro imobiliário real.</h1>
            <p>
              Participe da operação exclusiva da Alvo Capital — 10 cotas de R$ 100 mil cada, em um imóvel premium a preço de custo,
              próximo ao Beto Carrero World.
            </p>
            <div className={styles.metricsGrid}>
              {metrics.map((metric) => (
                <div key={metric.label} className={styles.metricCard}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#memorando">
                Baixar Memorando de Investimento (PDF)
              </a>
              <a className={styles.secondaryButton} href="#contato">
                Quero investir agora
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className={styles.section} id="sobre">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Sobre o Projeto</span>
              <h2>Localização privilegiada e imóvel de alto padrão</h2>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.twoColumn}>
                <div>
                  <p>
                    A poucos minutos do Beto Carrero World e das praias de Penha e Piçarras, a região está entre as que mais se valorizam em
                    Santa Catarina — com crescimento superior a 50% desde 2020.
                  </p>
                  <div className={styles.detailGrid}>
                    {investmentDetails.map((detail) => (
                      <div key={detail.item} className={styles.detailCard}>
                        <span className={styles.detailLabel}>{detail.item}</span>
                        <span className={styles.detailValue}>{detail.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.visualCard}>
                  <div className={styles.mapPlaceholder}>
                    <span>Render do empreendimento + mapa de Penha</span>
                    <span>Beto Carrero World — 5 min</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionAlt} id="estrutura">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Estrutura do Investimento</span>
              <h2>Participe como cotista de uma SPE exclusiva</h2>
              <p>
                Você participa como cotista de uma SPE (Sociedade de Propósito Específico), junto com a Alvo Capital, adquirindo o imóvel antes
                do lançamento e participando do lucro na revenda.
              </p>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.structureGrid}>
                {investmentStructure.map((item) => (
                  <div key={item.label} className={styles.structureCard}>
                    <span className={styles.detailLabel}>{item.label}</span>
                    <span className={styles.detailValue}>{item.detail}</span>
                  </div>
                ))}
              </div>
              <div className={styles.ctaBanner}>
                <div>
                  <h3>Pronto para receber o material completo?</h3>
                  <p>Solicite agora o dossiê detalhado com fluxo de pagamentos, contratos e projeções.</p>
                </div>
                <a className={styles.primaryButton} href="#contato">
                  Quero receber o material completo
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section} id="retorno">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Projeção de Retorno</span>
              <h2>Rentabilidade de fundo de desenvolvimento com lastro real</h2>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.twoColumn}>
                <div>
                  <ul className={styles.bulletList}>
                    <li>Investimento total: R$ 100.000</li>
                    <li>Valor de revenda (2027): R$ 2.628.000</li>
                    <li>Lucro líquido por cota: R$ 125.000</li>
                    <li>Valor final recebido: R$ 225.000</li>
                    <li>TIR anual: ≈ 19,7% a.a.</li>
                  </ul>
                  <p>
                    Rentabilidade de fundo de desenvolvimento, com a segurança de um ativo físico e gestão profissional.
                  </p>
                </div>
                <div className={styles.timelineCard}>
                  <h3>Linha do tempo da operação</h3>
                  <ol>
                    <li>2025 — aporte dos cotistas e aquisição</li>
                    <li>2026 — evolução da obra e valorização</li>
                    <li>2027 — revenda do imóvel</li>
                    <li>2027–2030 — recebimento do comprador final</li>
                    <li>2030 — distribuição do lucro</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionAlt} id="seguranca">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Segurança e Governança</span>
              <h2>Governança com prioridade ao investidor</h2>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.twoColumn}>
                <div>
                  <h3>Estrutura jurídica</h3>
                  <p>
                    Cada operação registrada em uma SPE exclusiva com contratos de Constituição, Acordo de Quotistas, Gestão, Intermediação e
                    Compliance. Auditoria independente e conta bancária dedicada à operação.
                  </p>
                  <h3>Garantias oferecidas</h3>
                  <ul className={styles.checkList}>
                    {securityHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.tableCard}>
                  <h3>Estrutura tributária</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Entidade</th>
                        <th>Regime</th>
                        <th>Tributação</th>
                        <th>Observação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {taxStructure.map((row) => (
                        <tr key={row.entity}>
                          <td>{row.entity}</td>
                          <td>{row.regime}</td>
                          <td>{row.taxation}</td>
                          <td>{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section} id="juridico">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Trilha Jurídica e Transparência</span>
              <h2>Passo a passo da operação</h2>
            </div>
            <div className={styles.timelineStrip}>
              {legalTimeline.map((step, index) => (
                <div key={step} className={styles.timelineStep}>
                  <div className={styles.timelineIndex}>{index + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.sectionAlt} id="memorando">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Memorando de Investimento</span>
              <h2>Baixe o dossiê completo e personalizado</h2>
              <p>
                Gere um PDF com capa institucional, dados do projeto, estrutura jurídica, projeções financeiras, cronograma e declaração de risco.
              </p>
            </div>
            <div className={styles.pdfCard}>
              <div>
                <h3>O que você recebe</h3>
                <ul className={styles.bulletList}>
                  <li>Sumário executivo com os principais indicadores</li>
                  <li>Detalhes sobre localização, padrão construtivo e cronograma</li>
                  <li>Simulação financeira e TIR do investimento</li>
                  <li>Declaração de risco e termo de investimento simplificado</li>
                </ul>
                <p className={styles.smallPrint}>
                  Alvo Capital Gestão e Participações Ltda. · CNPJ 12.345.678/0001-99 · Itajaí / SC · contato@alvocapital.com.br · (47) 9XXXX-XXXX
                </p>
              </div>
              <form className={styles.pdfForm}>
                <label>
                  Nome completo
                  <input type="text" placeholder="Seu nome" />
                </label>
                <label>
                  E-mail
                  <input type="email" placeholder="seuemail@exemplo.com" />
                </label>
                <label>
                  Valor pretendido para investir
                  <input type="text" placeholder="R$ 100.000" />
                </label>
                <button type="button" className={styles.primaryButton}>
                  Gerar e baixar memorando personalizado
                </button>
              </form>
            </div>
          </section>

          <section className={styles.section} id="contato">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Pronto para investir?</span>
              <h2>Garanta sua participação na Operação Penha 142</h2>
            </div>
            <div className={styles.ctaFinal}>
              <p>
                Vagas limitadas a 10 cotas. Nossa equipe está pronta para apresentar todos os detalhes e conduzir você pelo processo de
                assinatura.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="mailto:contato@alvocapital.com.br">
                  Quero investir agora
                </a>
                <a className={styles.secondaryButton} href="tel:+55479XXXXXXXX">
                  Falar com especialista
                </a>
              </div>
              <div className={styles.contactInfo}>
                <p>contato@alvocapital.com.br · (47) 9XXXX-XXXX</p>
                <p>Riviera Business Mall – Itajaí, SC</p>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div>
            <strong>Alvo Capital Investimentos</strong>
            <p>CNPJ 12.345.678/0001-99 · Riviera Business Mall – Itajaí, SC</p>
            <p>
              contato@alvocapital.com.br · <a href="tel:+55479XXXXXXXX">(47) 9XXXX-XXXX</a>
            </p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </footer>
      </div>
    </>
  );
}
