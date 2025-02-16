import { motion } from 'framer-motion';

// Components
import PresentationCard from '../components/PresentationCard';

// Images
import AbortionCardImage from '../assets/images/cards-images/AbortionCardImage.jpg';
import EuthanasiaCardImage from '../assets/images/cards-images/EuthanasiaCardImage.png';
import InVitroCardImage from '../assets/images/cards-images/InVitroCardImage.png';

interface Props {
    animation?: { [key: string]: any };
}

const Topics = ({ animation }: Props) => {
    return (
        <motion.main
            {...animation}
            className='topics-page__container'
        >
            <h1 className='topics-page__header-text'>Pro-Life: O czym warto wiedzieć</h1>
            <div className="cards__container">
                <PresentationCard {
                    ...{
                        title: 'Aborcja',
                        description: 'Czym jest aborcja, jakie niesie skutki i dlaczego warto bronić życia od poczęcia?',
                        image: { url: AbortionCardImage, alt: "Aborcja" },
                        btnText: 'Poznaj Fakty',
                        pathname: '/abortion-presentation'
                    }
                } />
                <PresentationCard {
                    ...{
                        title: 'Eutanazja',
                        description: 'Poznaj temat eutanazji - jej definicję, etyczne dylematy oraz wpływ na wartość i godność ludzkiego życia.',
                        image: { url: EuthanasiaCardImage, alt: 'Eutanazja' },
                        btnText: 'Poznaj Perspektywę',
                        pathname: '/euthanasia-presentation'
                    }
                } />
                <PresentationCard {
                    ...{
                        title: 'In vitro',
                        description: 'Zrozum proces in vitro, jego moralne wyzwania i wpływ na szacunek dla ludzkiego życia.',
                        image: { url: InVitroCardImage, alt: 'In vitro' },
                        btnText: 'Zrozum Proces',
                        pathname: '/in-vitro-presentation'
                    }
                } />
            </div>
        </motion.main>
    );
};

export default Topics;
