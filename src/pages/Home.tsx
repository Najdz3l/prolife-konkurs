import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

import Quote from '../components/Quote';

interface Props {
  animation?: { [key: string]: any };
}

const Home = ({ animation }: Props) => {
  // Check the width of the window
  // alert(window.innerWidth);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.main
      ref={ref}
      {...animation}
      className='home-page__container'
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial='hidden'
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h1 className='home-page__header-text'>Wybierajcie życie - Pro Life!</h1>
      <Quote
        quote={{
          type: 'quote',
          quote: "Każde życie ma wartość i zasługuje na ochronę.",
          author: 'Papież Jan Paweł II'
        }}
      />
      <Link to="/topics"><button className="btn-primary">Poznaj Tematy Pro-Life!</button></Link>
    </motion.main>
  );
};

export default Home;
