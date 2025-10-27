import type { Metadata } from "next";
import "@/styles/globals.css";
import { montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Alvo Capital | Operação Penha 142",
  description:
    "Operação exclusiva da Alvo Capital com lastro imobiliário em Penha/SC. Conheça a estrutura, projeção de retorno e faça o download do memorando de investimento.",
  openGraph: {
    title: "Alvo Capital | Operação Penha 142",
    description:
      "Transforme R$ 100 mil em R$ 225 mil com lastro imobiliário real. Conheça a operação Penha 142 da Alvo Capital.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
