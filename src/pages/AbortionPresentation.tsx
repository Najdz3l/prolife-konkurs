import { useState } from "react";
import { motion } from "framer-motion";

// Components
import SlidesContainer from "../components/SlidesContainer";
import ProgressBar from "../components/ProgressBar";
import ToolTip from "../components/ToolTip";

// Slides Templates
import ListImageLayout from "../components/SlidesTemplates/layouts/TitleListImageLayout";
import InfoCardLayout from "../components/SlidesTemplates/layouts/InfoCardLayout";
import TrueFalseQuestion from "../components/SlidesTemplates/components/TrueFalseQuestion";
import QuizComponent from '../components/SlidesTemplates/components/MultipleChoiceQuiz';
import TextQuestionImage from "../components/SlidesTemplates/layouts/TextQuestionImageLayout";
import TextListLayout from "../components/SlidesTemplates/layouts/TextTitleListLayout";
import HorizontalImage from "../components/SlidesTemplates/layouts/HorizontalImage";
import TwoBulletListsImageLayout from "../components/SlidesTemplates/layouts/TwoBulletListsImageLayout";
import TwoTitleListsLayout from "../components/SlidesTemplates/layouts/TwoTitleListsLayout";
import SummaryLayout from "../components/SlidesTemplates/layouts/SummaryLayout";

// MARK: Images
import Image1 from "../assets/images/presentation-images/Abortion/Image1.webp"; // Opening
import Image2 from "../assets/images/presentation-images/Abortion/Image2.webp"; // Slide 1
import Image3 from "../assets/images/presentation-images/Abortion/Image3.webp"; // Slide 5
import Image4 from "../assets/images/presentation-images/Abortion/Image4.webp"; // Slide 6
import Image5 from "../assets/images/presentation-images/Abortion/Image5.webp"; // Slide 7
import Image6 from "../assets/images/presentation-images/Abortion/Image6.webp"; // Slide 8
import Image7 from "../assets/images/presentation-images/Abortion/Image7.webp"; // Slide 10
import Image8 from "../assets/images/presentation-images/Abortion/Image8.webp"; // Slide 12
import ImageHorizontal from "../assets/images/presentation-images/Abortion/ImageHorizontal.webp"; // Horizontal Image


// MARK: Icons
    // Slide 3
    import DNAIcon from "../assets/icons/Dna.svg";
    import MicroorganismIcon from "../assets/icons/Microorganism.svg";
    import HeartIcon from "../assets/icons/Heart.svg";
    import ScaleIcon from "../assets/icons/Scale.svg";
    import EnvironmentIcon from "../assets/icons/Environment.svg";
    // Slide 10
    import PregnantWomanIcon from "../assets/icons/PregnantWoman.svg";
    import AdoptionIcon from "../assets/icons/Adoption.svg";
    import WomenSupport from "../assets/icons/WomenSupport.svg";
    // Slide 12
    import TreadmillIcon from "../assets/icons/Treadmill.svg";
    import BrainIcon from "../assets/icons/Brain.svg";
    import FamilyIcon from "../assets/icons/Family.svg";

// Styles
import '../styles/PresentationSlides.css';
import TextImageLayout from "../components/SlidesTemplates/layouts/TextImageLayout";

interface AbortionPresentationProps {
    animation?: { [key: string]: any };
}

const AbortionPresentation: React.FC<AbortionPresentationProps> = ({ animation }: AbortionPresentationProps) => {
    const [results, setResults] = useState<boolean[]>([]);

    const handleAnswer = (answer: boolean) => {
        setResults((prevResults) => [...prevResults, answer]);
    };

    // Array of slides to display
    const slides: JSX.Element[] = [
        // MARK: Opening
        <ListImageLayout
            header={{ title: "Czym jest aborcja?", subTitle: "Definicja i kluczowe Informacje" }}
            items={[
                { title: "Przerwanie ciąży", text: "Przerwanie ciąży przed osiągnięciem zdolności do życia poza organizmem matki." },
                { title: "Metody aborcji", text: "Proces medyczny lub farmakologiczny." },
                { title: "Aspekty etyczne", text: "Złożony temat prawny, moralny i etyczny." },
                { title: "Wpływ na zdrowie", text: "Konsekwencje fizyczne i emocjonalne dla matki." }
            ]}
            image={{ url: Image1, alt: "Kobieta w ciąży trzymająca dłonie na brzuchu ułożone w serce." }}
        />,
        // MARK: Slide 1 Topic 1
        <TextQuestionImage
            header={{ title: "Przerwanie Ciąży", subTitle: "Kontrowersje i konsekwencje, które warto zrozumieć", classes: ["text-right"] }}
            image={{ url: Image2, alt: "Cień dziecka w złamanym sercu." }}
            texts={[
                'Przerwanie ciąży, znane również jako aborcja, to temat budzący wiele kontrowersji na płaszczyznach prawnych, moralnych i społecznych.',
                'W Polsce aborcja jest legalna tylko w określonych {przypadkach}, takich jak zagrożenie życia matki czy ciąża będąca wynikiem przestępstwa.'
            ]}
            toolTips={[
                ["przypadkach", <ToolTip
                    text="przypadkach"
                    tip="Dowiedź się więcej o prawie aborcyjnym w Polsce i na świecie"
                    source="https://www.pap.pl/aktualnosci/aborcja-w-polsce-i-na-swiecie-gdzie-i-kiedy-jest-dozwolona-ktore-panstwa-jej-zakazuja"
                />]
            ]}
            // MARK: Q-True/False-1|1
            QuestionComponent={<TrueFalseQuestion
                question="Czy w Polsce aborcja jest legalna na każdym etapie ciąży, jeśli zagrożone jest życie lub zdrowie kobiety?"
                answers={["Tak", "Nie"]}
                correctAnswer={0}
                onAnswer={handleAnswer}
                texts={[
                    "Zgadza się! W Polsce aborcja jest legalna na każdym etapie ciąży, jeśli zagrożone jest życie lub zdrowie kobiety.",
                    "Niepoprawna odpowiedź. W Polsce prawo dopuszcza aborcję na każdym etapie ciąży, jeśli zagrożone jest życie lub zdrowie kobiety."
                ]}
            />}
            inverted
        />,
        // MARK: Slide 2 Topic 1
        <TextListLayout
            header={{ title: "Możliwe sposoby przerwania ciąży", subTitle: "Istnieje zasadnicza różnica między naturalną utratą ciąży a jej celowym przerwaniem." }}
            texts={[
                'Wyróżniamy dwa główne sposoby przerwania ciąży: poronienie i aborcję. Choć oba prowadzą do zakończenia ciąży, różnią się one przyczynami, przebiegiem oraz skutkami.',
                'Poronienie to naturalny proces, który zwykle zachodzi w wyniku czynników, na które nie mamy wpływu, takich jak wady genetyczne płodu czy infekcje. Może wystąpić w każdym etapie ciąży, najczęściej jednak dochodzi do niego we wczesnym okresie.'
            ]}
            items={[
                { title: "Poronienie", text: "Samoistne zakończenie ciąży w wyniku naturalnych przyczyn, takich jak wady genetyczne, infekcje, zaburzenia hormonalne czy choroby matki." },
                { title: "Aborcja", text: "Celowe przerwanie ciąży, które może być przeprowadzone w warunkach medycznych lub pozamedycznych." }
            ]}
        />,
        // MARK: H-Image-1
        <HorizontalImage
            image={{
                url: ImageHorizontal,
                alt: "Napis \"PREGNANCY\" ułożony z kości."
            }}
        />,
        // MARK: Slide 3 Topic 1
        <InfoCardLayout
            header={{ title: "Przyczyny samoistnego poronienia", subTitle: "Najczęstsze przyczyny poronienia w pierwszym trymestrze", classes: ["text-center"] }}
            cards={[
                { image: { url: DNAIcon }, title: "Wady genetyczne płodu", text: "Najczęstsza przyczyna poronień, wynikająca z nieprawidłowości chromosomalnych zarodka, takich jak trisomie czy monosomie." },
                { image: { url: MicroorganismIcon }, title: "Infekcje", text: "Zakażenia wirusowe i bakteryjne, takie jak różyczka czy toksoplazmoza, mogą prowadzić do poronienia, zwłaszcza w pierwszym trymestrze." },
                { image: { url: HeartIcon }, title: "Choroby przewlekłe matki", text: "Niewyrównane choroby przewlekłe, takie jak cukrzyca czy nadciśnienie, zwiększają ryzyko utraty ciąży." },
                { image: { url: ScaleIcon }, title: "Problemy hormonalne", text: "Niedobór progesteronu i inne zaburzenia hormonalne mogą zakłócać proces utrzymania ciąży, prowadząc do problemów z implantacją zarodka lub poronienia, szczególnie w jej wczesnych etapach." },
                { image: { url: EnvironmentIcon }, title: "Czynniki środowiskowe", text: "Ekspozycja na szkodliwe czynniki, takie jak promieniowanie, toksyny czy przewlekły stres, może zwiększać ryzyko poronienia." },
            ]}
        />,
        // MARK: Slide 4 Topic 1
        <TwoTitleListsLayout
            header={{ title: "Rodzaje aborcji", subTitle: "Metody przerywania ciąży i ich przebieg", classes: ["text-center"] }}
            aboveListHeader={[
                { title: "Farmakologiczna", subTitle: "Polega na stosowaniu leków, które powodują wydalenie płodu. Przebiega w dwóch etapach:" },
                { title: "Chirurgiczna", subTitle: "Jest wykonywana metodami zabiegowymi, zależnie od zaawansowania ciąży:" }
            ]}
            lists={[
                [
                    { title: "Pierwszy lek", text: "(np. mifepriston) blokuje działanie progesteronu, hormonu niezbędnego do utrzymania ciąży." },
                    { title: "Drugi lek", text: "(np. misoprostol) powoduje skurcze macicy i wydalenie zarodka lub płodu." },
                ],
                [
                    { title: "Aspiracja próżniowa (odsysanie)", text: "stosowana do ok. 12. tygodnia ciąży, polega na usunięciu płodu przy użyciu podciśnienia." },
                    { title: "Rozszerzenie i wyłyżeczkowanie (D&C)", text: "stosowane w drugim trymestrze, wymaga mechanicznego rozszerzenia szyjki macicy i usunięcia zawartości macicy narzędziami chirurgicznymi." },
                    { title: "Rozszerzenie i ewakuacja (D&E)", text: "stosowane w późniejszych etapach ciąży, łączy rozszerzenie szyjki macicy z usunięciem płodu za pomocą kleszczy i odsysania." }
                ]
            ]}
            subTexts={[
                { type: "text", text: "Stosowana zwykle we wczesnej ciąży (do 9–10 tygodnia), może powodować silne bóle i krwawienie." },
                { type: "text", text: "Każda metoda niesie określone ryzyko powikłań, takich jak infekcje czy uszkodzenie macicy." },
            ]}
        />,
        // MARK: Q-Quiz-1|3
        <QuizComponent
            questions={[
                "Która metoda aborcji niszczy życie dziecka poprzez wprowadzenie substancji chemicznych?",
                "Jakie powikłania mogą wystąpić po aborcji?",
                "Badania wskazują, że aborcja może prowadzić do:"
            ]}
            answers={[
                [
                    "Aspiracja próżniowa",
                    "Rozszerzenie i wyłyżeczkowanie (D&C)",
                    "Farmakologiczna",
                    "Rozszerzenie i ewakuacja (D&E)"
                ],
                [
                    "Zrosty i infekcje",
                    "Zwiększona płodność",
                    "Brak skutków ubocznych",
                    "Silne osłabienie kości"
                ],
                [
                    "Poprawy zdrowia psychicznego",
                    "Konsekwencji emocjonalnych oraz psychicznych",
                    "Całkowitego braku emocji po zabiegu",
                    "Wzrost poziomu hormonów szczęścia"
                ]
            ]
            }
            correctAnswers={[2, 0, 1]}
            onAnswer={handleAnswer}
            classes={["quiz-2x2-js"]}
        />,
        // MARK: Slide 5
        <TwoBulletListsImageLayout
            header={{ title: "Skutki krótko- i długoterminowe aborcji farmologicznej" }}
            lists={[
                {
                    listTitle: "Krótkoterminowe",
                    items: [
                        "Ból i skurcze",
                        "Krwawienie, które może trwać kilka dni",
                        "Nudności i zawroty głowy",
                        "Możliwość wystąpienia gorączki lub dreszczy"
                    ],
                },
                {
                    listTitle: "Długoterminowe",
                    items: [
                        "Ryzyko niewłaściwego zakończenia procedury i konieczności dalszych zabiegów",
                        "Rzadko: powikłania w postaci krwotoków lub infekcji"
                    ],
                }
            ]}
            image={{ src: Image3, alt: "Para pokazująca zdjęcie USG dziecka." }}
        />,
        // MARK: Slide 6
        <TwoBulletListsImageLayout
            header={{
                title: "Skutki krótko- i długoterminowe aborcji chirurgicznej"
            }}
            lists={[
                {
                    listTitle: "Krótkoterminowe",
                    items: [
                        "Ból i skurcze po zabiegu",
                        "Krwawienie",
                        "Możliwość wystąpienia infekcji",
                        "Znieczulenie ogólne lub miejscowe, które może wywołać skutki uboczne, takie jak zawroty głowy czy senność"
                    ],
                },
                {
                    listTitle: "Długoterminowe",
                    items: [
                        "Ryzyko uszkodzenia macicy, jajników lub innych narządów",
                        "Możliwość trudności w późniejszym zajściu w ciążę",
                        "Zwiększone ryzyko wcześniejszego porodu w przyszłości"
                    ],
                }
            ]}
            image={{ src: Image4, alt: "Płacząca kobieta." }}
            inverted
        />,
        // MARK: Slide 7
        <TextImageLayout
            header={{
                title: "Aspekty prawne ochrony życia człowieka",
                subTitle: "Prawo do życia i wybór"
            }}
            image={{
                url: Image5,
                alt: "Młotek sędziowski."
            }}
            texts={[
                "Wbrew często powtarzanym w przestrzeni publicznej tezom aborcja nie jest uznawana przez prawo międzynarodowe za prawo człowieka. Zasadniczo akty prawa międzynarodowego – oparte na uniwersalnych, przyjętych przez społeczność międzynarodową standardach cywilizacyjnych (w tym na godności człowieka) – za pierwsze i fundamentalne prawo człowieka uznają prawo do życia.",
                "Dotyczy to takich dokumentów jak: Powszechna Deklaracja Praw Człowieka(1948 r.), Międzynarodowy Pakt Praw Obywatelskich i Politycznych (1966 r.) czy Konwencja o prawach dziecka (1989 r.).",
                "Zgodnie z art. 6 ust. 1 Międzynarodowego Paktu Praw Obywatelskich i Politycznych „każda istota ludzka ma przyrodzone prawo do życia. Prawo to powinno być chronione przez ustawę. Nikt nie może być samowolnie pozbawiany życia”.",
                "Konwencja o prawach dziecka z 1989 r. poręcza prawo do życia dziecka poczętego, stwierdzając, że „dziecko, z uwagi na swoją niedojrzałość fizyczną oraz umysłową, wymaga szczególnej opieki i troski, w tym właściwej ochrony prawnej, zarówno przed, jak i po urodzeniu”.",
                'W Polsce prawo do ochrony życia jest jedną z najważniejszych gwarancji konstytucyjnych. Art. 38. Konstytucji Rzeczpospolitej Polskiej zawiera następującą treść: "Rzeczpospolita Polska zapewnia każdemu człowiekowi prawną ochronę życia."'
            ]}
        />,
        // MARK: Slide 8
        <ListImageLayout
            header={{ title: "Aspekty społeczne", subTitle: "Jak społeczeństwo postrzega początek życia"}}
            items={[
                {
                    title: "Początek życia",
                    text: "Większość ludzi wierzy, że życie zaczyna się w momencie poczęcia, ponieważ od tego momentu pojawia się unikalna ludzka istota z własnym kodem genetycznym."
                },
                {
                    title: "Moralne uzasadnienie aborcji",
                    text: "Wszelkie argumenty uznające aborcję za uzasadnioną, takie jak zagrożenie życia matki, są kontrowersyjne. Pro-life uważa, że każde życie, w tym życia nienarodzonych dzieci, zasługuje na ochronę."
                },
                {
                    title: "Dylematy etyczne",
                    text: "Pro-life podkreśla, że prawo do życia jest fundamentalne, a decyzja o zakończeniu ciąży stoi w sprzeczności z podstawowymi wartościami moralnymi, które chronią życie ludzkie od poczęcia."
                }
            ]}
            image={
                {
                    url: Image6,
                    alt: "Zdjęcie płodu pokazujące początek życia."
                }
            }
            inverted
        />,
        // MARK: Slide 9
        <InfoCardLayout
            header={{ title: "Alternatywy w trudnych chwilach", subTitle: "Opcje wsparcia i decyzji w obliczu wyzwań" }}
            cards={[
                {
                    image: { url: PregnantWomanIcon },
                    title: "Ciąża wysokiego ryzyka",
                    text: "{Ciąża wysokiego ryzyka} wymaga regularnej opieki medycznej, częstszych wizyt i dostosowania stylu życia, by zwiększyć szanse na bezpieczny poród."
                },
                {
                    image: { url: AdoptionIcon },
                    title: "Adopcja - Nowa Szansa",
                    text: "Adopcja to szansa na miłość, opiekę i bezpieczne życie w nowej rodzinie, wolne od trudnych doświadczeń."
                },
                {
                    image: { url: WomenSupport },
                    title: "Wsparcie dla kobiet",
                    text: "Wsparcie psychologiczne i medyczne pomaga kobietom w trudnych chwilach, oferując pomoc w radzeniu sobie ze stresem, emocjami i zdrowiem, umożliwiając im odzyskanie poczucia bezpieczeństwa."
                }
            ]}
            toolTips={[
                [
                    ["Ciąża wysokiego ryzyka", <ToolTip
                        text="Ciąża wysokiego ryzyka"
                        tip="Dowiedź się więcej o ciąży wysokiego ryzyka"
                        source="https://www.cm-bb.pl/co-to-jest-ciaza-wysokiego-ryzyka/"
                    />]
                ]
            ]}
        />,
        // MARK: Slide 10
        <TextQuestionImage
            header={{ title: "Dyskusja społeczna", subTitle: "Kontrowersje, wyzwania i różnorodne perspektywy w debacie publicznej" }}
            image={{ url: Image7, alt: "Leżąca kobieta z kokardą na ciężarnym brzuchu." }}
            texts={[
                'Dyskusja społeczna na temat aborcji budzi wiele emocji i kontrowersji.',
                'Koncentruje się na prawie kobiety do decydowania o swoim ciele, prawach płodu oraz konsekwencjach medycznych, emocjonalnych i społecznych tego zjawiska.'
            ]}
            // MARK: Q-True/False-3|1
            QuestionComponent={<TrueFalseQuestion
            question="Decyzja o aborcji nie ma długoterminowego wpływu na zdrowie psychiczne kobiety."
            answers={["Prawda", "Fałsz"]}
            correctAnswer={1}
            onAnswer={handleAnswer}
            texts={[
                "To fałsz. Decyzja o aborcji może mieć długoterminowy wpływ na zdrowie psychiczne.",
                "To fałsz. W rzeczywistości, decyzja o aborcji może mieć długoterminowy wpływ na zdrowie psychiczne."
            ]}
            />}
        />,
        // MARK: Slide 11
        <InfoCardLayout
            header={{ title: "Konsekwencje wykonania aborcji", subTitle: "Decyzja, która niesie za sobą dużo konsekwencji dla kobiety" }}
            cards={[
                { image: { url: TreadmillIcon }, title: "Fizyczne", text: "Aborcja wiąże się z ryzykiem powikłań, takich jak zrosty, infekcje, niepłodność czy {zespół Ashermana}. Mogą one wystąpić zarówno podczas zabiegu, jak i po latach." },
                { image: { url: BrainIcon }, title: "Psychiczne", text: "{Badania} pokazują, że aborcja może prowadzić do długotrwałych konsekwencji emocjonalnych i psychicznych. Wiele kobiet doświadcza żalu i trudnych emocji, a wsparcie oraz ochrona życia mogą pomóc im uniknąć cierpienia." },
                { image: { url: FamilyIcon }, title: "Społeczne", text: "Aborcja wpływa nie tylko na kobietę, ale także na jej rodzinę i społeczność. Konsekwencje aborcji mogą być trudne do przewidzenia, dlatego ważne jest zapewnienie wsparcia i edukacji zdrowotnej." }
            ]}
            toolTips={[
                [
                    ["zespół Ashermana", <ToolTip
                        text="zespół Ashermana"
                        tip="Dowiedź się czym jest zespół Ashermana i jakie są jego objawy"
                        source="https://pl.wikipedia.org/wiki/Zespół_Ashermana"
                    />]
                ],
                [
                    ["Badania", <ToolTip
                        text="Badania"
                        tip="Dowiedź się więcej o badaniach przeprowadzonych przez Niemieckich naukowców"
                        source="https://pl.aleteia.org/2023/03/09/aborcja-a-psychika"
                    />]
                ]
            ]}
        />,
        // MARK: Slide 12
        <ListImageLayout
            header={{ title: "Gdzie szukać pomocy?", subTitle: "Wsparcie medyczne, psychologiczne i społeczne w trudnych sytuacjach" }}
            items={[
                { title: "Placówki medyczne", text: "lekarze, ginekolodzy, psycholodzy" },
                { title: "Telefony zaufania", text: "anonimowe wsparcie i porady" },
                { title: "Organizacje pomocowe", text: "fundacje wspierające kobiety w kryzysie" },
                { title: "Grupy wsparcia", text: "rozmowy z osobami w podobnej sytuacji" },
                { title: "Rodzina i bliscy", text: "wsparcie emocjonalne i praktyczne" },
                { title: "Pomoc duchowa", text: "wsparcie od wspólnot religijnych i duszpasterzy" }
            ]}
            image={
                {
                    url: Image8,
                    alt: "Zbliżenie na oko płaczącej kobiety."
                }}
            inverted
        />,
        // MARK: Summary
        <SummaryLayout
            header={{
                title: "Podsumowanie tematu",
                subTitle: "Ważne informacje i kluczowe wnioski"
            }}
            texts={[
                'Z punktu widzenia ludzi wierzących w Boga, dla których prawo Boże zapisane w Biblii w Starym i Nowym Testamencie wyznacza sposób rozumowania i postępowania – aborcja jest oczywistym złem i grzechem, który godzi w V przykazanie Boże „Nie zabijaj”. Przyznawanie sobie prawa do decydowania o życiu innego człowieka  prowadzi też do złamania I przykazania Bożego, gdyż w ten sposób człowiek stawia siebie ponad Boga.',

                'Najczęściej spotykanym  argumentem zwolenników prawa do  terminacji ciąży jest "Moje ciało moja sprawa".  Z punktu widzenia osiągnięć współczesnej nauki (embriologia, genetyka) jest to argument naukowo fałszywy. Dziecko przed narodzeniem nie jest częścią organizmu matki. Świadczą o tym choćby: odrębny kod genetyczny dziecka, osobne  tętno matki i dziecka, inne hormony, bardzo często odmienne grupy krwi. Początek nowego życia wyznacza moment zapłodnienia. To właśnie wtedy powstaje i zaczyna żyć i rozwijać się nowa istota ludzka. Z punktu widzenia nauki posiada ona w pełni kompletny organizm (choć jeszcze nie w pełni dojrzały). Warto tu przytoczyć słowa Matki Teresy z Kalkuty (z listu do Polaków):',
                {
                    type: 'quote',
                    quote: 'Życie jest darem Boga. Darem, którym tylko Bóg może obdarzać. I Bóg w swojej pokorze dał mężczyźnie i kobiecie zdolność współpracy z Nim w przekazywaniu życia. Jakikolwiek był Jego zamiar, nie wolno nam ingerować w ten piękny Boży dar ani go niszczyć.',
                    author: "Matka Teresa z Kalkuty"
                }
            ]}
            links={[
                {
                    title: "Źródła do artykułów:",
                    urls: [
                        'https://dsz.katowice.pl/?p=1312',
                        'https://www.aptelia.pl/czytelnia/a55-Aborcja__na_czym_polega_i_jakie_sa_jej_rodzaje',
                        'https://pl.wikipedia.org/wiki/Aborcja',
                        'https://diag.pl/pacjent/artykuly/poronienie-samoistne-etapy-powiklania-nastepna-ciaza/',
                        'https://www.poradnikzdrowie.pl/zdrowie/niezbednik-pacjenta/aborcja-farmakologiczna-na-czym-polega-i-jak-ja-przeprowdzic-aa-L8Sn-5DVC-DBFW.html',
                        'https://www.aborcja-czechy.pl/blog/jak-wyglada-aborcja/',
                        'https://www.aborcja-farmakologiczna.pl/powiklania/',
                        'https://stylzycia.polki.pl/choroby,aborcja-i-jej-konsekwencje,10398211,artykul.html',
                        'https://cecib.uksw.edu.pl/sites/default/files/czytelnia/2015-1.pdf',
                        'https://in.uken.krakow.pl/wp-content/uploads/sites/13/2023/01/Sylwester-Bebas-Spoleczne-i-zdrowotne-skutki-aborcji.pdf',
                        'https://www.cm-bb.pl/co-to-jest-ciaza-wysokiego-ryzyka/',
                        'https://pl.wikipedia.org/wiki/Zesp%C3%B3%C5%82_Ashermana',
                        'https://pl.aleteia.org/2023/03/09/aborcja-a-psychika',
                        'https://pl.aleteia.org/2021/01/29/jan-pawel-ii-o-aborcji-i-eutanazji-aborcja-jest-zawsze-zlem?'
                    ]
                },
                {
                    title: "Źródła do zdjęć:",
                    urls: [
                        'https://www.istockphoto.com/pl/zdjęcie/chirurg-lekarz-wykonuje-operacje-chirurgiczne-anestezjolog-lub-anestezjolog-gm1266600929-371345176?searchscope=image%2Cfilm',
                        'https://www.istockphoto.com/pl/zdjęcie/pytanie-o-eutanazję-na-tablicy-w-rękach-terapeuty-decyzji-o-życiu-lub-śmierci-gm948129320-258864939?searchscope=image%2Cfilm',
                        'https://pixabay.com/pl/illustrations/dziecko-serce-łono-macica-aborcja-5965335/',
                        'https://pixabay.com/pl/photos/w-ciąży-kobieta-brzuch-płeć-żeńska-193839/',
                        'https://pixabay.com/pl/photos/ciąża-w-ciąży-macierzyństwo-kobieta-5340153/',
                        'https://pixabay.com/pl/photos/smutek-łzy-płacz-nie-ma-radości-4578031/',
                        'https://pixabay.com/pl/photos/łza-smutny-płacz-płakać-ból-7348539/'
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

export default AbortionPresentation;
