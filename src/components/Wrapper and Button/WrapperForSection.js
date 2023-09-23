export default function WrapperForSection({ background, content, className }) {
  return (
    <section className={className}>
      <div className="section-border">
        <div className="section-background">{background}</div>
      </div>
      <div className={`content-wrapper`}>
        <div className="content">{content}</div>
      </div>
    </section>
  );
}
