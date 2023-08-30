import WrapperForSection from "./Wrapper and Button/WrapperForSection";

export default function Footer() {
  return (
    <div className="footer">
      <WrapperForSection
        content={
          <div>
            <h3>Philip Harmash</h3>
            <div style={{ fontWeight: 600, fontSize: 17 }}>
              <div>Infilya@ukr.net</div>
              <div>+38 (066) 718-38-72</div>
            </div>
          </div>
        }
      />
    </div>
  );
}
