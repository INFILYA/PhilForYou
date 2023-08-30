export default function WrapperForSection({
  background,
  content,
  styleSection,
  styleContentWrapper,
}) {
  return (
    <section style={styleSection}>
      <div className="section-border">
        <div className="section-background">{background}</div>
      </div>
      <div className="content-wrapper" style={styleContentWrapper}>
        <div className="content">{content}</div>
      </div>
    </section>
  );
}
