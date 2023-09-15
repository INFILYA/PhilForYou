export default function WrapperForSection({ background, content, className, contentClassName }) {
  return (
    <section className={className}>
      <div className="section-border">
        <div className="section-background">{background}</div>
      </div>
      <div className={`content-wrapper ${contentClassName}`}>
        <div className="content">{content}</div>
      </div>
    </section>
  );
}
