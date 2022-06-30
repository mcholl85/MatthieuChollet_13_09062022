export default function Feature({ icon, title, paragraph }: feature) {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}

interface feature {
  icon: string
  title: string
  paragraph: string
}