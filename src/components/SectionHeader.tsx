interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export function SectionHeader({ title, subtitle, tag }: SectionHeaderProps) {
  return (
    <div>
      {tag ? <span className="tag">{tag}</span> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
