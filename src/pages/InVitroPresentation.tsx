import { useState } from "react";
import { motion } from "framer-motion";

// Components
import ProgressBar from "../components/ProgressBar";
import SlidesContainer from "../components/SlidesContainer";

// Slides Components
import ListImageLayout from "../components/SlidesTemplates/layouts/TitleListImageLayout";
import SummaryLayout from "../components/SlidesTemplates/layouts/SummaryLayout";
import TextListLayout from "../components/SlidesTemplates/layouts/TextTitleListLayout";
import QuizComponent from "../components/SlidesTemplates/components/MultipleChoiceQuiz";
import BulletListImageLayout from "../components/SlidesTemplates/layouts/BulletListImageLayout";
import TextImageLayout from "../components/SlidesTemplates/layouts/TextImageLayout";
import InfoCardLayout from "../components/SlidesTemplates/layouts/InfoCardLayout";
import TwoTitleListsLayout from "../components/SlidesTemplates/layouts/TwoTitleListsLayout";
import TitleListImageLayout from "../components/SlidesTemplates/layouts/TitleListImageLayout";
import TwoListsImage from "../components/SlidesTemplates/layouts/TwoBulletListsImageLayout";
import TextTitleListLayout from "../components/SlidesTemplates/layouts/TextTitleListLayout";

// Images
import coupleImage from "../assets/images/presentation-images/InVitro/couple.webp";
import dietImage from "../assets/images/presentation-images/InVitro/diet.webp";
import cycleImage from "../assets/images/presentation-images/InVitro/cycle.webp";
import InVitroMainImage from "../assets/images/presentation-images/InVitro/InVitroMain.webp"
import Image2 from "../assets/images/presentation-images/InVitro/image2.webp"
import Image3 from "../assets/images/presentation-images/InVitro/image3.webp"
import Image4 from "../assets/images/presentation-images/InVitro/image4.webp"
import Image5 from "../assets/images/presentation-images/InVitro/image5.webp"
import Image7 from "../assets/images/presentation-images/InVitro/image7.webp"
import Image11 from "../assets/images/presentation-images/InVitro/image11.webp"
import Image12 from "../assets/images/presentation-images/InVitro/image12.webp"

// Icons
import HeartIcon from "../assets/icons/heart.svg";
import FertilizationSpermIcon from "../assets/icons/FertilizationSperm.svg";
import SyringeIcon from "../assets/icons/Syringe.svg";
import MoonIcon from "../assets/icons/Moon.svg";
import LotusIcon from "../assets/icons/Lotus.svg";
import BabyBottleIcon from "../assets/icons/BabyBottle.svg";
import WomanHoldingBabyIcon from "../assets/icons/WomanHoldingBaby.svg";
import DangerTriangleIcon from "../assets/icons/DangerTriangle.svg";
import FlaskSampleIcon from "../assets/icons/FlaskSample.svg";
import JusticeIcon from "../assets/icons/Justice.svg";
import TagIcon from "../assets/icons/Tag.svg";

interface Props {
    animation?: { [key: string]: any };
}

const InVitroPresentation = ({ animation }: Props) => {
    const [results, setResults] = useState<boolean[]>([]);

    const handleAnswer = (answer: boolean) => {
        setResults((prevResults) => [...prevResults, answer]);
    };

    // Array of slides to display
    const slides: JSX.Element[] = [
        // MARK: Opening
        <ListImageLayout
            header={{
                title: "In Vitro",
                subTitle: "Procedury wspomagania rozrodu",
            }}
            items={[
                {
                    title: "Definicja i przebieg procedur In Vitro",
                    text: "Wyjaśnienie, czym jest zapłodnienie in vitro, z omówieniem poszczególnych etapów, takich jak stymulacja jajników i transfer zarodka."
                },
                {
                    title: "Etyczne aspekty procedur In Vitro",
                    text: "Selekcja zarodków, wybór płci, eliminacja wad genetycznych oraz kwestie przechowywania i wykorzystania nadmiarowych zarodków."
                },
                {
                    title: "Psychologiczne skutki dla par",
                    text: "Jak procedura In Vitro wpływa na zdrowie psychiczne osób starających się o dziecko, stres związany z niepowodzeniami i sukcesami."
                },
                {
                    title: "Alternatywne metody leczenia niepłodności",
                    text: "Przegląd innych dostępnych opcji, takich jak inseminacja, terapie hormonalne oraz naturalne sposoby wspomagania płodności."
                },
            ]}
            image={
                {
                    url: InVitroMainImage,
                    alt: "Zapłodnienie in vitro, w którym plemnik jest wprowadzany do komórki jajowej za pomocą mikroskopijnej igły."
                }
            }
        />,
        // MARK: Slide 1 Topic 1
        <TextListLayout
            header={{
                title: "Definicja i przebieg In Vitro",
                subTitle: "Czym jest zapłodnienie in vitro i jak przebiega procedura"
            }}
            items={[
                {
                    title: "Stymulacja jajników",
                    text: "kobieta otrzymuje leki hormonalne, które mają na celu stymulację jajników do produkcji kilku komórek jajowych jednocześnie. Regularne monitorowanie (np. przez USG) pozwala lekarzowi ocenić odpowiedź jajników."
                },
                {
                    title: "Pobranie komórek jajowych",
                    text: "po osiągnięciu odpowiedniej liczby dojrzałych komórek jajowych, wykonuje się zabieg ich pobrania (punkcja jajników), który przeprowadza się w znieczuleniu."
                },
                {
                    title: "Zapłodnienie",
                    text: "pobrane komórki jajowe łączy się z nasieniem partnera lub dawcy. Zapłodnienie może odbywać się tradycyjnie (inseminacja) lub za pomocą techniki mikroiniekcji (ICSI), gdy plemnik jest wstrzykiwany bezpośrednio do komórki jajowej."
                },
                {
                    title: "Hodowla zarodków",
                    text: "zapłodnione komórki jajowe rozwijają się przez kilka dni w laboratorium, a ich rozwój jest monitorowany. Wybierane są najbardziej prawdopodobne do implantacji zarodki."
                },
                {
                    title: "Transfer zarodka",
                    text: "wybrane zarodki (zazwyczaj 1-2) przenoszone są do macicy kobiety. Zabieg ten jest stosunkowo mało inwazyjny i odbywa się bez znieczulenia."
                },
            ]}
            texts={[
                "Zapłodnienie in vitro (IVF) - Jest to zaawansowana technika, polegająca na zapłodnieniu komórki jajowej poza organizmem kobiety, a następnie przeniesieniu zarodka do jej macicy. Procedura składa się z kilku etapów.",
                "Kobieta przechodzi terapię hormonalną, której celem jest pobudzenie jajników do wytworzenia większej liczby komórek jajowych w jednym cyklu. Proces ten, zwany stymulacją owulacji, zwiększa szanse na uzyskanie odpowiednich komórek do zapłodnienia pozaustrojowego.",
                "Podczas terapii pacjentka jest pod stałą opieką lekarza, który monitoruje reakcję organizmu na podawane hormony. Regularne badania, takie jak ultrasonografia (USG) i kontrola poziomu hormonów we krwi, pozwalają specjalistom dostosować dawki leków i określić optymalny moment pobrania komórek jajowych. Odpowiednia reakcja jajników jest kluczowa dla powodzenia procedury in vitro."
            ]}
            // Quote-1
            quote={{
                type: 'quote-no-author',
                quote: "Proces In Vitro możemy porównać do ludzkiej hodowli, gdzie wybieramy najlepsze komórki jajowe i plemniki, aby uzyskać zdrowe zarodki."
            }}
            quoteUnderText
        />,
        // MARK: Q-Quiz-1|3
        <QuizComponent
            questions={[
                "Co jest celem stymulacji jajników w procedurze in vitro?",
                "Jaką techniką można zapłodnić komórkę jajową w laboratorium?",
                "Ile zarodków zazwyczaj przenosi się do macicy podczas transferu?"
            ]}
            answers={[
                [
                    "Zahamowanie owulacji",
                    "Produkcja większej liczby komórek jajowych",
                    "Przyspieszenie zapłodnienia",
                    "Eliminacja słabszych plemników"
                ],
                [
                    "ICSI",
                    "MRI",
                    "IVF-X",
                    "HSG"
                ],
                [
                    "1-2",
                    "5-6",
                    "10",
                    "Wszystkie zapłodnione komórki"
                ],
            ]}
            correctAnswers={[1, 0, 0]}
            onAnswer={handleAnswer}
            classes={["quiz-2x2-js"]}
        />,
        // MARK: Slide 2 Topic 1
        <BulletListImageLayout
            header={{
                title: "Stymulacja jajników",
                subTitle: "Etap przygotowawczy do procedury In Vitro"
            }}
            list={{
                listTitle: "Etapy stymulacji jajników:",
                items: [
                    "Kobieta otrzymuje leki hormonalne w celu stymulacji jajników.",
                    "Leki pobudzają jajniki do produkcji kilku komórek jajowych jednocześnie.",
                    "Proces wymaga regularnego monitorowania za pomocą USG.",
                    "Monitorowanie pozwala ocenić reakcję jajników na leki.",
                    "Odpowiednia stymulacja zwiększa szanse na uzyskanie zdrowych komórek jajowych."
                ]
            }
            }
            image={
                {
                    src: Image2,
                    alt: "Obraz przedstawia stylizowaną, papierową ilustrację procesu zapłodnienia in vitro, w której strzykawka symbolizuje iniekcję plemnika do komórki jajowej."
                }
            }
        />,
        // MARK: Slide 3 Topic 1
        <TextImageLayout
            header={{
                title: "Pobieranie komórek jajowych",
                subTitle: "Przebieg zabiegu i jego znaczenie w procedurze In Vitro"
            }}
            texts={
                [
                    "Po osiągnięciu odpowiedniej liczby dojrzałych komórek jajowych wykonuje się zabieg ich pobrania, znany jako punkcja jajników. Zabieg przeprowadzany jest w znieczuleniu ogólnym lub miejscowym, aby zapewnić komfort pacjentce.",
                    "Podczas procedury lekarz wprowadza cienką igłę przez ścianę pochwy do jajników, aby pobrać komórki jajowe z dojrzewających pęcherzyków. Cały proces jest monitorowany za pomocą USG, co pozwala na precyzyjne pobranie komórek."
                ]
            }
            image={
                {
                    url: Image3,
                    alt: "Przeprowadzane USG na kobiecie w ciąży."
                }
            }
            inverted
        />,
        // MARK: Slide 4 Topic 1
        <InfoCardLayout
            header={{
                title: "Zapłodnienie",
                subTitle: "Techniki zapłodnienia komórki jajowej pozaustrojowej",
                classes: ["text-center"]
            }}
            cards={[
                {
                    image: {
                        url: FertilizationSpermIcon
                    },
                    title: "Inseminacja",
                    text: "To tradycyjna metoda zapłodnienia, polegająca na wprowadzeniu nasienia partnera bezpośrednio do macicy. Stosowana, gdy plemniki mają dobrą jakość, ale występują trudności z naturalnym zapłodnieniem."
                },
                {
                    image: {
                        url: SyringeIcon
                    },
                    title: "Mikroiniekcja (ICSI)",
                    text: "Zaawansowana technika zapłodnienia, w której pojedynczy plemnik jest wstrzykiwany bezpośrednio do komórki jajowej. Stosowana w przypadkach, gdy plemniki nie są wystarczająco ruchliwe lub liczne."
                }
            ]}
        />,
        // MARK: Slide 5 Topic 1
        <TwoTitleListsLayout
            header={{
                title: "Hodowla zarodków",
                subTitle: "Proces rozwoju zarodków po zapłodnieniu"
            }}
            aboveListHeader={[
                {
                    title: "Etapy rozwoju zarodków:",
                },
                {
                    title: "Kryteria wyboru zarodków do transferu:",
                }
            ]}
            lists={[
                [
                    {
                        title: "Dzień 1",
                        text: "Pierwsze podziały komórkowe."
                    },
                    {
                        title: "Dzień 2-3",
                        text: "Stadium 4-8 blastomerów, ocena jakości zarodków."
                    },
                    {
                        title: "Dzień 4",
                        text: "Stadium moruli, komórki zaczynają się łączyć."
                    },
                    {
                        title: "Dzień 5-6",
                        text: "Rozwój do stadium blastocysty, wybór zarodków do transferu."
                    }
                ],
                [
                    {
                        title: "Morfologia",
                        text: "Kształt i symetria komórek."
                    },
                    {
                        title: "Tempo podziału",
                        text: "Odpowiedni rozwój zgodny z harmonogramem."
                    },
                    {
                        title: "Obecność fragmentacji",
                        text: "Im mniej, tym lepiej."
                    },
                    {
                        title: "Etap rozwoju",
                        text: "Preferowane stadium blastocysty."
                    }
                ]
            ]}
            subTexts={[
                {
                    type: 'text',
                    text: "Po zapłodnieniu komórki jajowej, zarodki rozwijają się w laboratorium przez kilka dni. Proces ten jest monitorowany, a zarodki oceniane pod kątem jakości i zdolności do implantacji."
                },
                {
                    type: 'text',
                    text: "Wybór zarodków do transferu jest kluczowym etapem procedury in vitro. Lekarze oceniają zarodki pod kątem morfologii, tempa podziału, obecności fragmentacji oraz etapu rozwoju, aby wybrać te najbardziej obiecujące."
                }
            ]}
        />,
        // MARK: Slide 6 Topic 1
        <TitleListImageLayout
            header={{
                title: "Transfer zarodka",
                subTitle: "Przeniesienie zarodków do macicy kobiety w procedurze In Vitro"
            }}
            items={[
                {
                    "title": "Wybór zarodków",
                    "text": "Do transferu wybiera się najlepiej rozwinięte zarodki, zwykle 1-2, na podstawie ich morfologii i podziałów komórkowych."
                },
                {
                    "title": "Metoda transferu",
                    "text": "Zarodki wprowadza się do macicy cienkim cewnikiem pod kontrolą USG. Procedura jest szybka i bezbolesna."
                },
                {
                    "title": "Szanse powodzenia",
                    "text": "Sukces transferu zależy od wieku kobiety, jakości zarodków oraz stanu endometrium."
                },
                {
                    "title": "Odpoczynek po transferze",
                    "text": "Zaleca się unikanie wysiłku fizycznego i stresu, ale nie jest wymagane leżenie w łóżku."
                },
                {
                    "title": "Dalszy monitoring",
                    "text": "Po około 10-14 dniach wykonuje się test ciążowy, aby ocenić skuteczność transferu."
                }
            ]}
            image={
                {
                    url: Image4,
                    alt: "Procedura transferu zarodka."
                }
            }
        />,
        // MARK: Slide 7 Topic 2
        <ListImageLayout
            header={{
                title: "Etyczne aspekty procedur In Vitro",
                subTitle: "Etyczne dylematy związane z zapłodnieniem pozaustrojowym",
                classes: ["text-right"]
            }}
            items={[
                {
                    "title": "Selekcja zarodków",
                    "text": "Ocenia się jakość i genotyp zarodków, co może prowadzić do eliminacji tych z wadami genetycznymi, budząc wątpliwości etyczne."
                },
                {
                    "title": "Wybór płci",
                    "text": "Technicznie możliwy, lecz kontrowersyjny ze względu na ryzyko nadużyć i wpływ społecznych preferencji na równowagę demograficzną."
                },
                {
                    "title": "Eliminacja wad genetycznych",
                    "text": "Diagnostyka PGD pozwala unikać chorób dziedzicznych, ale rodzi pytania o granice selekcji zarodków."
                },
                {
                    "title": "Przechowywanie zarodków",
                    "text": "Nadmiarowe zarodki są zamrażane, co prowadzi do dylematów dotyczących ich dalszego losu."
                },
            ]}
            image={
                {
                    url: Image5,
                    alt: "Lalki ułożone w jednej linii, ale w różnych orientacjach. Raz na brzuchu raz na plecach."
                }
            }
            inverted
        />,
        // MARK: Slide 8 Topic 2
        <TextListLayout
            header={{
                title: "Wątpliwości etyczne i skuteczność metody In Vitro",
                subTitle: "Koszty, moralność i skuteczność sztucznego rozrodu"
            }}
            items={[
                {
                    title: "Procedura in vitro a godność człowieka",
                    text: "Narusza godność dziecka i rodziców poprzez stosowanie metod weterynaryjnych, sprowadzając poczęcie do poziomu hodowli."
                },
                {
                    title: "Dziecko jako produkt",
                    text: "In vitro traktuje dziecko jak przedmiot wyboru, który można selekcjonować, odrzucać i manipulować nim wedle uznania."
                },
                {
                    title: "Związki z aborcją",
                    text: "Procedura ta wiąże się z selekcją zarodków, niszczeniem tych z wadami, mrożeniem zarodków oraz ich późniejszą eliminacją."
                },
                {
                    title: "Ryzyko poronienia i aborcji eugenicznej",
                    text: "Ciąże z in vitro częściej kończą się poronieniem lub aborcją z powodów eugenicznych."
                },
            ]}
            texts={[
                'Metoda sztucznego rozrodu określana jako „in vitro” to kosztowna i obciążająca organizm procedura, której skuteczność pozostaje relatywnie niska.',
                'Jednocześnie wiąże się ona z poważnymi dylematami moralnymi, ponieważ wymaga selekcji zarodków, ich zamrażania, a często również eliminacji tych uznanych za „nieodpowiednie”.',
                'Proces ten oddziela poczęcie od naturalnej jedności małżeńskiej, traktując życie ludzkie jak produkt laboratoryjny, a nie dar.',
            ]}
        />,
        // MARK: Slide 9 Topic 2
        <TextImageLayout
        header={{
            title: "Terapie hormonalne a etyka pro-life",
            subTitle: "",
        }}
        texts={[
            "W przeciwieństwie do metod takich jak antykoncepcja hormonalna, terapie hormonalne mogą służyć wspieraniu płodności i naturalnego poczęcia, co jest zgodne z wartościami pro-life.",
            "Nie prowadzą do eliminacji życia – ich celem jest leczenie przyczyn niepłodności, a nie ingerencja w procesy zapłodnienia w sposób sprzeczny z etyką.",
        ]}
        image={{
            url: Image7,
            alt: "Kobieta zasłaniająca twarz ogromnym kwiatem.",
        }}
        />,
        // MARK: Slide 10 Topic 2
        <InfoCardLayout
        header={{ title: "Kontrowersje etyczne" }}
        cards={[
            {
                title: "Naruszenie godności ludzkiego życia",
                text: "Selekcja zarodków oznacza często odrzucanie tych, które nie spełniają oczekiwań, co sprzeczne jest z wartością każdego ludzkiego istnienia.",
                image: {
                    url: JusticeIcon
                },
            },
            {
                title: "Ryzyko nadużyć",
                text: "Wybór płci może prowadzić do społecznych nierówności i preferowania jednej płci kosztem drugiej.",
                image: {
                    url: DangerTriangleIcon
                },
            },
            {
                title: "Instrumentalne traktowanie dziecka",
                text: 'Decydowanie o płci na życzenie może prowadzić do postrzegania dziecka jako "produktu", zamiast daru życia.',
                image: {
                    url: TagIcon
                },
            },
            {
                title: "Związek z procedurami in vitro",
                text: "Większość metod wyboru płci jest stosowana w ramach zapłodnienia pozaustrojowego, które w kontekście pro-life budzi poważne wątpliwości moralne.",
                image: {
                    url: FlaskSampleIcon
                },
            },
        ]}
        />,
        // MARK: Slide 11 Topic 3
        <TextImageLayout
            header={{
                title: "Stres związany z niepowodzeniami",
                subTitle: "Trudności psychiczne w procesie In Vitro"
            }}
            texts={[
                "Każda nieudana próba może powodować frustrację, smutek i lęk przed kolejnym podejściem.",
                "Często pojawia się poczucie winy – partnerzy mogą obwiniać siebie nawzajem lub czuć, że zawiedli.",
                "Przedłużające się niepowodzenia mogą prowadzić do depresji i obniżenia poczucia własnej wartości.",
                "Społeczna presja i pytania ze strony rodziny mogą dodatkowo pogłębiać stres."
            ]}
            image={{
                url: Image11,
                alt: "Na pierwszym planie Kobieta siedząca smutna w zamyśleniu. W tle mężczyzna palący papierosa przy oknie."
            }}
        />,
        // MARK: Slide 12 Topic 3
        <InfoCardLayout
            header={{
                title: "Radość i stres związany z sukcesami",
                subTitle: "Pozytywny wynik testu to radość, ale i nowe obawy.",
                classes: ["text-center"]
            }}
            cards={[
                {
                    image: {
                        url: BabyBottleIcon
                    },
                    title: "Radość z pozytywnego testu",
                    text: "Po miesiącach starań pozytywny wynik przynosi ogromną ulgę i szczęście, wzmacniając nadzieję na spełnienie marzenia o rodzicielstwie."
                },
                {
                    image: {
                        url: WomanHoldingBabyIcon
                    },
                    title: "Strach o przebieg ciąży",
                    text: "Ciąża jest wyjątkowym czasem, ale w przypadku In Vitro może towarzyszyć lęk związany z procedurą i wcześniejszymi stratami. Każde życie jest jednak wartościowe od poczęcia."
                },
                {
                    image: {
                        url: HeartIcon
                    },
                    title: "Niepokój przed powikłaniami",
                    text: "Procedura niesie ryzyko komplikacji zdrowotnych dla matki i dziecka. Warto podkreślać wartość życia i rozważać etyczne metody leczenia niepłodności."
                }
            ]}
        />,
        // MARK: Slide 13 Topic 3
        <BulletListImageLayout
            header={{
                title: "Psychologiczne skutki dla par",
                subTitle: "Emocjonalne wyzwania związane z procedurą",
                classes: ["text-left"]
            }}
            list={{
                listTitle: "Skutki psychologiczne procedur In Vitro:",
                items: [
                    "Procedura In Vitro to nie tylko kwestia medyczna, ale również emocjonalne wyzwanie.",
                    "Pary mogą odczuwać stres, lęk i niepewność na każdym etapie procesu.",
                    "Niepowodzenia i oczekiwanie na pozytywne wyniki mogą wpływać na zdrowie psychiczne.",
                    "Sukces może przynieść ulgę, ale również strach o przebieg ciąży.",
                    "Proces może wzmocnić więź między partnerami lub prowadzić do napięć w relacji."
                ]
            }}
            image={{
                src: Image12,
                alt: "Para siedząca na kanapie u psychologa."
            }}
            inverted
        />,
        // MARK: Slide 14 Topic 3
        <TextTitleListLayout
            header={{
                title: "Wpływ na związek",
                subTitle: "",
                classes: ["text-center"]
            }}
            texts={[
                "Proces leczenia niepłodności to duże wyzwanie dla każdej pary. Emocjonalne obciążenie, presja otoczenia i wielokrotne próby mogą zmieniać dynamikę związku.",
                "Niektóre pary zbliżają się do siebie, znajdując w sobie oparcie. Inne doświadczają napięć i trudności w komunikacji.",
                "Wzajemne wsparcie i otwarta rozmowa są kluczowe w tej sytuacji."
            ]}
            items={[
                {
                    title: "Napięcia i konflikty",
                    text: "Silne emocje mogą prowadzić do nieporozumień i frustracji. Stres związany z leczeniem czasem przenosi się na codzienne życie."
                },
                {
                    title: "Bliskość lub dystans",
                    text: "Niektóre pary umacniają swoją więź, przechodząc przez trudności razem. Inne odczuwają emocjonalny dystans i osamotnienie."
                },
                {
                    title: "Wspólna walka",
                    text: "Partnerzy, którzy wspierają się nawzajem, łatwiej radzą sobie ze stresem i niepowodzeniami. Akceptacja i zrozumienie pomagają w przezwyciężeniu trudnych momentów."
                }
            ]}
        />,
        // MARK: Slide 15 Topic 4
        <TextImageLayout
            header={{
                title: "Naturalne Sposoby Wspomagania Płodności",
                subTitle: "Jakie naturalne metody mogą skutecznie wspierać płodność?"
            }}
            texts={[
                "W obliczu rosnących wyzwań związanych z płodnością, wiele par poszukuje naturalnych metod wspierania zdolności rozrodczych.",
                "Zmiany w stylu życia, odpowiednia dieta oraz techniki redukcji stresu mogą znacząco zwiększyć szanse na poczęcie.",
                "W tej sekcji omówimy sprawdzone, naturalne strategie poprawy płodności, które są zarówno bezpieczne, jak i skuteczne."
            ]}
            image={{
                url: coupleImage,
                alt: "Para patrząca sobie głęboko w oczy."
            }}
        />,
        // MARK: Slide 16 Topic 4
        <ListImageLayout
            header={{
                title: "Zdrowy styl życia",
                classes: ["text-left"]
            }}
            items={[
                {
                    title: "Dieta",
                    text: "Badania wskazują, że zbilansowana dieta, bogata w warzywa, owoce, pełnoziarniste produkty zbożowe, ryby oraz zdrowe tłuszcze, może pozytywnie wpływać na płodność zarówno u kobiet, jak i mężczyzn. Dieta śródziemnomorska, charakteryzująca się wysokim spożyciem tych produktów, jest szczególnie korzystna."
                },
                {
                    title: "Aktywność fizyczna",
                    text: "Umiarkowana aktywność fizyczna sprzyja płodności, podczas gdy nadmierny wysiłek może prowadzić do zaburzeń hormonalnych i problemów z płodnością. Badania wykazują, że rekreacyjne uprawianie sportu ma pozytywny lub neutralny wpływ na płodność, natomiast intensywny trening wiąże się z ryzykiem zaburzeń płodności u obu płci.",
                },
                {
                    title: "Unikanie Używek",
                    text: "Palenie tytoniu, nadmierne spożycie alkoholu oraz wysokie spożycie kofeiny mogą negatywnie wpływać na płodność. Badania wskazują, że eliminacja tych czynników może poprawić szanse na poczęcie.",
                }
            ]}
            image={
                {
                    url: dietImage,
                    alt: "Napis \"diet\" ułozony z magnesów na lodówkę. Porozrzucane owocę oraz sprzęt do ćwiczeń."
                }
            }
            inverted
        />,
        // MARK: Slide 17 Topic 4
        <TwoListsImage
            header={{
                title: "Monitorowanie cyklu owulacyjnego"
            }}
            lists={[
                {
                    listTitle: "Metody obserwacji cyklu",
                    items: [
                        "Metoda objawowo-termiczna – polega na codziennym mierzeniu temperatury ciała, obserwacji śluzu szyjkowego i zmian w szyjce macicy. Regularne prowadzenie wykresów pozwala określić dni płodne.",
                        "Testy owulacyjne – wykrywają wzrost hormonu luteinizującego (LH) w moczu, co oznacza zbliżającą się owulację. Są łatwe w użyciu i mogą zwiększyć szanse na poczęcie."

                    ]
                },
                {
                    listTitle: "Korzyści z monitorowania owulacji",
                    items: [
                        "Dokładniejsze określenie dni płodnych – pozwala na lepsze planowanie współżycia w najbardziej sprzyjającym okresie.",
                        "Wczesne wykrycie zaburzeń hormonalnych – nieregularne cykle mogą być sygnałem problemów zdrowotnych, takich jak PCOS czy niedobór progesteronu.",
                        "Wsparcie w diagnostyce niepłodności – lekarz może wykorzystać dane z obserwacji cyklu do oceny zdrowia hormonalnego i rozrodczego.",
                    ]
                }
            ]}
            image={
                {
                    src: cycleImage,
                    alt: "Kalendarz z zaznaczonymi trzema dniami, obok tampon, na kalędarzu podpaska z czerwonym piórem."
                }
            }
        />,
        // MARK: Slide 18 Topic 4
        <InfoCardLayout
            header={{ title: "Odpoczynek i redukcja stresu"}}
            cards={[
                {
                    image: {
                        url: LotusIcon
                    },
                    title: "Techniki relaksacyjne",
                    text: "Techniki relaksacyjne, takie jak głębokie oddychanie czy ćwiczenia relaksacyjne, mogą obniżać poziom kortyzolu – hormonu stresu, który negatywnie wpływa na płodność. Badania potwierdzają, że redukcja stresu może poprawić funkcje rozrodcze."
                },
                {
                    image: {
                        url: MoonIcon
                    },
                    title: "Sen",
                    text: "Odpowiednia ilość snu (7-9 godzin dziennie) jest kluczowa dla utrzymania równowagi hormonalnej i zdrowia reprodukcyjnego. Badania wskazują, że niedobór snu może prowadzić do zaburzeń owulacji i obniżenia płodności."
                },
            ]}
        />,
        // MARK: Summary
        <SummaryLayout
            header={{
                title: "Podsumowanie tematu",
                subTitle: "Ważne informacje oraz bibliografia"
            }}
            texts={[
                '',
            ]}
            links={[
                {
                    title: "Źródła do artykułów:",
                    urls: [
                        'https://pro-life.pl/dlaczego-sprzeciwiamy-sie-in-vitro/',
                        'https://invimed.pl/diagnostyka/in-vitro',
                        'https://klinikanieplodnosci.pl/zdiagnozowana-nieplodnosc-leczenie/dostepne-metody-leczenia/procedura-in-vitro/',
                        'https://tfp-fertility.com/pl-pl/leczenie-nieplodnosci/ivf?gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfgBnNsiKoqTooqQ7_HaE4z9qdVA82kwY1r0WijIVDI7xKEZVxekaGxoCh90QAvD_BwE',
                        'https://klinikabocian.pl/wiedza/artykul/Jak-przebiega-procedura-in-vitro',
                        'https://gemini.pl/poradnik/zdrowie/w-jaki-sposob-aktywnosc-fizyczna-wplywa-na-plodnosc/',
                        'https://eklinika.pl/artykuly/285-badania-plodnosci-kompleksowy-przewodnik',
                        'https://www.opiekaokoloporodowa.pl/artykul/wplyw-diety-matki-na-zdrowie-plodu-najnowsze-badania-i-rekomendacje-dietetyczne',
                        'https://centrumrespo.pl/dietetyka-kliniczna/dieta-na-plodnosc/',
                        'https://gameta.pl/leczenie-nieplodnosci/stymulacja-i-monitorowanie-owulacji/',
                        'https://medistica.com.pl/ginekologia-plodnosc/punkcja-jajnikow-biopsja-jajnikow-w-trakcie-procedury-in-vitro/',
                        'https://polki.pl/dieta-i-fitness/odchudzanie%2Cwplyw-aktywnosci-fizycznej-na-plodnosc%2C10412631%2Cartykul.html',
                        'https://eneida.pl/uslugi/zaplodnienie-pozaustrojowe-invitro/hodowla-do-stadium-blastocysty',
                        'https://diag.pl/pacjent/artykuly/hormonalna-terapia-zastepcza-htz-wsparcie-kobiet-w-menopauzie-na-czym-polega/',
                        'https://www.mp.pl/etyka/poczatki_zycia/53011,zaplodnienie-in-vitro-w-swietle-etyczno-filozoficznym-glos-za',
                        'https://www.monz.pl/Wplyw-diety-i-aktywnosci-fizycznej-na-plodnosc-kobiet%2C73689%2C0%2C1.html'
                    ]
                },
                {
                    title: "Źródła do zdjęć:",
                    urls: [
                        'https://www.istockphoto.com/pl/zdjęcie/kobieta-w-ciąży-brzuch-z-małym-pluszowym-misiem-obraz-koncepcyjny-z-symbolem-wielu-gm1357537622-431413407?searchscope=image%2Cfilm',
                        "https://www.freepik.com/free-photo/fitness-sports-concept-with-clipboard_1322965.htm",
                        'https://www.freepik.com/free-photo/period-calendar-with-copy-space_6943885.htm#from_element=detail_alsolike',
                        'https://www.freepik.com/free-photo/young-happy-woman-positive-man-near-brick-wall_3624538.htm#fromView=search&page=1&position=13&uuid=0f0b0443-9775-450b-a7fb-ba7beee272ac&query=couple+black-white',
                        'https://www.freepik.com/free-photo/top-view-fertility-concept-with-pink-background_21252697.htm#fromView=image_search_similar&page=1&position=0&uuid=4333d4d3-482d-4e69-8253-e5d1744e7896&query=Hormonal+Injection+for+Ovulation',
                        'https://www.freepik.com/search?format=search&last_filter=query&last_value=Ultrasound-Guided+Egg+Collection&query=Ultrasound-Guided+Egg+Collection',
                        'https://www.freepik.com/free-photo/gynecologist-performing-ultrasound-consultation_24749416.htm#fromView=search&page=1&position=41&uuid=832907b7-7ba6-47e2-b80b-5c6a58b46a5a&query=Ultrasound-Guided+Egg+Collection',
                        'https://www.freepik.com/free-photo/close-up-girl-holding-broken-drawing_8445554.htm#fromView=search&page=7&position=49&uuid=7c478c71-fc7f-4c7f-8e3a-400ef309eb92&query=man+woman+icon+',
                        'https://www.freepik.com/free-vector/break-gender-norms-concept_8398716.htm#fromView=search&page=6&position=49&uuid=7c478c71-fc7f-4c7f-8e3a-400ef309eb92&query=man+woman+icon++',
                        'https://www.freepik.com/search?format=search&last_filter=query&last_value=man+woman+icon+&orientation=landscape&query=man+woman+icon+',
                        'https://www.freepik.com/search?format=search&last_filter=query&last_value=Hormonal+Balance+and+Natural+Conception&orientation=landscape&query=Hormonal+Balance+and+Natural+Conception',
                        'https://www.freepik.com/search?format=search&last_filter=query&last_value=Embryo+Selection+Ethics&query=Embryo+Selection+Ethics',
                        'https://www.pexels.com/pl-pl/zdjecie/para-ma-nieporozumienie-3692885/',
                        'https://www.pexels.com/pl-pl/zdjecie/para-rozmawia-z-terapeuta-3958379/'
                    ]
                }
            ]}
            results={results}
        />
    ];

    return (
        <motion.main
            {...animation}
        >
            <ProgressBar />
            <SlidesContainer slides={slides} />
        </motion.main>
    );
};

export default InVitroPresentation;
