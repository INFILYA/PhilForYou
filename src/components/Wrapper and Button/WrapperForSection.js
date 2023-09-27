export default function WrapperForSection({ background, content }) {
  return (
    <section>
      <div className="section-border">
        <div className="section-background">{background}</div>
      </div>
      <div className="content-wrapper">
        <div className="content">{content}</div>
      </div>
    </section>
  );
}
