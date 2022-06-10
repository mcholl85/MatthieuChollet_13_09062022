import Hero from '../../components/Hero/index.jsx';
import Feature from '../../components/Feature/index.jsx';
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';

export default function Home() {
  const itemsFeatures = [
    {
      icon: iconChat,
      title: 'You are our #1 priority',
      paragraph:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
      icon: iconMoney,
      title: 'More savings means higher rates',
      paragraph: 'The more you save with us, the higher your interest rate will be!'
    },
    {
      icon: iconSecurity,
      title: 'Security you can trust',
      paragraph:
        'We use top of the line encryption to make sure your data and money is always safe.'
    }
  ];

  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {itemsFeatures.map((item, index) => (
          <Feature key={index} icon={item.icon} title={item.title} paragraph={item.paragraph} />
        ))}
      </section>
    </main>
  );
}
