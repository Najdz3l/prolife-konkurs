import { useState } from "react";
import { motion } from "framer-motion";

// Components
import ProgressBar from "../components/ProgressBar";
import SlidesContainer from "../components/SlidesContainer";

// Slides Components
import ListImageLayout from "../components/SlidesTemplates/layouts/TitleListImageLayout";
import TextListLayout from "../components/SlidesTemplates/layouts/TextTitleListLayout";
import HorizontalImageComponent from "../components/SlidesTemplates/layouts/HorizontalImage";
import Quote from "../components/Quote";
import SummaryLayout from "../components/SlidesTemplates/layouts/SummaryLayout";
import InfoCardLayout from "../components/SlidesTemplates/layouts/InfoCardLayout";
import TextQuestionWithImageLayout from "../components/SlidesTemplates/layouts/TextQuestionImageLayout";
import QuizComponent from "../components/SlidesTemplates/components/MultipleChoiceQuiz";
import TwoTitleListsLayout from "../components/SlidesTemplates/layouts/TwoTitleListsLayout";
import TextImageLayout from "../components/SlidesTemplates/layouts/TextImageLayout";
import MoralQuestion from "../components/SlidesTemplates/components/MoralQuestion";

// Images
import HorizontalImage from "../assets/images/presentation-images/Euthanasia/ImageHorizontal.png"; // Horizontal Image
import Image1 from "../assets/images/presentation-images/Euthanasia/image1.jpg"
import Image2 from "../assets/images/presentation-images/Euthanasia/image2.jpg"
import Image3 from "../assets/images/presentation-images/Euthanasia/image3.jpg"
import Image4 from "../assets/images/presentation-images/Euthanasia/image4.jpg"
import Image5 from "../assets/images/presentation-images/Euthanasia/image5.jpg"


// Icons
    // Religions Icons
    import ChristianityIcon from "../assets/icons/Christianity.svg";
    import MuslimIcon from "../assets/icons/Muslim.svg";
    import JudaizmIcon from "../assets/icons/Judaizm.svg";
    import BuddhismIcon from "../assets/icons/Buddhism.svg";
    import HinduismIcon from "../assets/icons/Hinduism.svg";
    // Flags Icons
    import NetherlandsIcon from "../assets/icons/Netherlands.svg";
    import BelgiumIcon from "../assets/icons/Belgium.svg";
    import CanadaIcon from "../assets/icons/Canada.svg";
    import LuxembourgIcon from "../assets/icons/Luxembourg.svg";
    import Switzerland from "../assets/icons/Switzerland.svg";
    // Palliative Care Icons
    import PillsIcon from "../assets/icons/Pills.svg";
    import SpeechBubbleIcon from "../assets/icons/SpeechBubble.svg";
    import HandshakeIcon from "../assets/icons/Handshake.svg";

interface Props {
    animation?: { [key: string]: any };
}

const EuthanasiaPresentation = ({ animation }: Props) => {
    const [results, setResults] = useState<boolean[]>([]);

    const handleAnswer = (answer: boolean) => {
        setResults((prevResults) => [...prevResults, answer]);
    };

    // Array of slides to display
    const slides: JSX.Element[] = [
        // MARK: Opening
        <ListImageLayout
            header={{ title: "Eutanazja", subTitle: "Czyli wspomagane samobójstwo" }}
            items={[
                { title: "Definicja i rodzaje", text: "Czym jest eutanazja? Podział na rodzaje eutanazji." },
                { title: "Argumenty za i przeciw", text: "Przedstawienie perspektyw etycznych, religijnych, medycznych i prawnych." },
                { title: "Eutanazja na świecie", text: "Przykłady krajów gdzie jest legalna i analiza jak wpływa na społeczeństwo." },
                { title: "Alternatywy", text: "Opieka paliatywna, hospicyjna, wsparcie psychologiczne dla chorych i ich rodzin." },
            ]}
            image={
                {
                    url: Image1,
                    alt: "Lekarz trzymający kobietę w podeszłym wieku za ręce."
                }
            }
        />,
        // MARK: Slide 1 Topic 1
        <TextListLayout
            header={{ title: "Definicja i rodzaje Eutanazji", subTitle: "Każde życie ma wartość – poznaj, czym jest eutanazja.", classes: ["text-center"] }}
            texts={[
                "Eutanazja to celowe pozbawienie życia osoby chorej pod pretekstem ulżenia jej cierpieniu. Zamiast opieki i wsparcia, proponuje się śmierć jako rozwiązanie.",
                "W niektórych przypadkach decyzja o eutanazji jest podejmowana przez inne osoby, gdy pacjent nie jest w stanie wyrazić swojej woli, co rodzi poważne zagrożenie dla osób najsłabszych.",
                "Życie każdego człowieka, niezależnie od stanu zdrowia, ma niepowtarzalną wartość i zasługuje na troskę oraz godną opiekę, a nie przedwczesne zakończenie."
            ]}
            items={[
                { title: "Eutanazja Dobrowolna", text: "Pacjent pod presją otoczenia lub cierpienia wyraża zgodę na odebranie mu życia." },
                { title: "Eutanazja Niedobrowolna", text: "Decyzję o zakończeniu życia podejmują inni, gdy pacjent nie jest w stanie się sprzeciwić." },
                { title: "Eutanazja Czynna", text: "Bezpośrednie działanie, które prowadzi do śmierci pacjenta, np. podanie śmiertelnej substancji." },
                { title: "Eutanazja Bierna", text: "Odmowa podstawowej opieki medycznej, co prowadzi do śmierci pacjenta." }
            ]}
            quote={{
                type: 'quote',
                quote: "Celem medycyny jest łagodzenie cierpienia, ale nie za wszelką cenę – zwłaszcza nie kosztem życia.",
                author: "Według przeciwników eutanazji"
            }}
        />,
        // MARK: H-Image-1
        <HorizontalImageComponent
            image={{
                url: HorizontalImage,
                alt: "Napis \"Eutanazja?\" napisany kredą na tablicy."
            }}
        />,
        // MARK: Slide 2 Topic 1
        <TextQuestionWithImageLayout
            header={{
                title: "Eutanazja - życie ponad cierpieniem",
                classes: ["text-right"]
            }}
            image={{
                url: Image2,
                alt: "Kobieca dłoń z różą przyciętą plastrem do nadgarstka."
            }}
            texts={[
                'Eutanazja to kontrowersyjny temat, który budzi wiele emocji i kontrowersji.',
                'Zwolennicy eutanazji argumentują, że pozwala ona na skrócenie cierpienia pacjenta w przypadku nieuleczalnej choroby, a także daje pacjentowi prawo do decydowania o swoim życiu.',
                'Z drugiej strony, przeciwnicy eutanazji twierdzą, że jest ona niezgodna z prawem i etyką, może prowadzić do nadużyć oraz istnieją inne sposoby leczenia bólu i cierpienia pacjenta.'
            ]}
            // MARK: Q-Quiz-1|4
            QuestionComponent={
            <QuizComponent
                questions={[
                    "Czy życie człowieka ma wartość mimo choroby i cierpienia?",
                    "Czy prawdziwe miłosierdzie to opieka czy eutanazja",
                    "Jak okazać szacunek osobom nieuleczalnie chorym i cierpiącym?",
                    "Kto powinien decydować o życiu - człowiek czy Bóg?"
                ]}
                answers={[
                    [
                        "Bo tylko zdrowi mają wartość.",
                        "Tylko zdrowy człowiek jest wartościowy jako jednostka społeczna.",
                        "Bo godność człowieka nie zależy od stanu zdrowia.",
                        "Bo społeczeństwo decyduje o przydatności danego człowieka."
                    ],
                    [
                        "Eutanazja, bo kończy ból",
                        "Opieka, ale tylko u młodych",
                        "Opieka, prawdziwe miłosierdzie to troska i obecność",
                        "Eutanazja, bo każdy ma prawo decydować o zakończeniu swojego życia."
                    ],
                    [
                        "Przez opiekę, wsparcie i towarzyszenie w cierpieniu.",
                        "Zachęcając do eutanazji.",
                        "Ignorując ich cierpienie.",
                        "Ograniczając leczenie."
                    ],
                    [
                        "Lekarz, bo ma wiedzę.",
                        "Człowiek, bo to jego wybór.",
                        "Społeczeństwo, bo tworzy prawo.",
                        "Bóg, bo jest dawcą życia i jedynym, który ma nad nim władzę."
                    ]
                ]}
                correctAnswers={[2, 1, 0, 3]}
                onAnswer={handleAnswer}
                classes={["quiz-2x2-js"]}
            />}
            inverted
        />,
        // MARK: Slide 3 Topic 2
        <TwoTitleListsLayout
            header={{ title: "Argumenty za i przeciw", subTitle: "Co mówią zwolennicy i przeciwnicy eutanazji", classes: ["text-center"] }}
            aboveListHeader={[
                { title: "Argumenty zwolenników eutanazji" },
                { title: "Argumenty przeciwników eutanazji" },
            ]}
            lists={[
                [
                    {
                        title: "Eutanazja to zakończenie cierpienia",
                        text: "Choć eutanazja może wydawać się sposobem na zakończenie cierpienia, warto pamiętać, że prawdziwa pomoc polega na zapewnieniu pacjentowi godnej opieki paliatywnej, która łagodzi ból bez odbierania życia."
                    },
                    {
                        title: "Prawo do decyzji pacjenta",
                        text: "Pacjent ma prawo o zakończeniu swojego życia. Warto przypomnieć, że życie nie należy tylko do jednostki, ale ma również wymiar społeczny. Ochrona życia, nawet w trudnych chwilach, jest wspólną odpowiedzialnością społeczeństwa, a nie tylko decyzją jednej osoby."
                    },
                    {
                        title: "Eutanazja zmniejsza koszty leczenia",
                        text: "Chociaż koszty leczenia są istotnym zagadnieniem, warto inwestować w opiekę, która nie kończy życia, ale wspiera pacjenta w jego trudnej sytuacji, promując solidarność i wsparcie dla rodzin."
                    },
                ],
                [
                    {
                        title: "Poszanowanie prawa i etyki",
                        text: "Eutanazja łamie fundamentalne zasady prawa do życia, które są podstawą każdej cywilizowanej społeczności. Zamiast odbierać życie, powinniśmy dążyć do jego ochrony i wsparcia, nawet w obliczu cierpienia."
                    },
                    {
                        title: "Ochrona przed nadużyciami",
                        text: "Wprowadzenie eutanazji może otworzyć drogę do nadużyć, gdzie osoby w trudnej sytuacji mogą zostać zmuszone do zakończenia swojego życia. Zamiast tego należy promować systemy ochrony, które zagwarantują odpowiednią opiekę i wsparcie dla pacjentów."
                    },
                    {
                        title: "Inne metody leczenia cierpienia",
                        text: "Zamiast sięgać po ostateczność, jaką jest eutanazja, istnieją skuteczne alternatywy, takie jak opieka paliatywna, która pomaga złagodzić ból i cierpienie pacjentów, dając im szansę na godne zakończenie życia."
                    }
                ],
            ]}
        />,
        // MARK: Slide 4 Topic 2
        <InfoCardLayout
            header={{ title: "Religie a eutanazja", subTitle: "Jakie stanowisko wobec eutanazji zajmują różne religie?", classes: ["text-center"] }}
            cards={[
                {
                    image: { url: ChristianityIcon},
                    title: "Chrześcijaństwo",
                    text: "W większości tradycji chrześcijańskich eutanazja jest potępiana, ponieważ życie jest uważane za dar od Boga. Kościół katolicki i inne religie chrześcijańskie nauczają, że tylko Bóg ma prawo decydować o życiu i śmierci."
                },
                {
                    image: { url: MuslimIcon },
                    title: "Islam",
                    text: "W islamie życie jest uważane za dar od Boga, a eutanazja jest zabroniona. Istnieje jednak uznanie dla ulżenia w cierpieniu, ale zawsze w granicach, które nie prowadzą do skrócenia życia."
                },
                {
                    image: { url: JudaizmIcon },
                    title: "Judaizm",
                    text: "W judaizmie życie jest bardzo cenione, a eutanazja jest zasadniczo zakazana. W przypadku cierpienia, judaizm popiera łagodzenie bólu, ale nie dopuszcza aktywnego zakończenia życia."
                },
                {
                    image: { url: BuddhismIcon },
                    title: "Buddyzm",
                    text: 'Buddyzm kładzie duży nacisk na współczucie i ulgę w cierpieniu. Eutanazja może być dozwolona, jeśli prowadzi do zmniejszenia cierpienia, ale decyzja ta musi być podjęta z wielką ostrożnością i w zgodzie z zasadą "nie krzywdzenia".'
                },
                {
                    image: { url: HinduismIcon },
                    title: "Hinduizm",
                    text: "W hinduizmie życie jest uznawane za część cyklu reinkarnacji, a eutanazja jest ogólnie zakazana. Istnieje jednak akceptacja dla wygaszenia cierpienia, pod warunkiem, że nie prowadzi to do celowego zakończenia życia."
                },
            ]}
        />,
        // MARK: Slide 5 Topic 2
        <TextImageLayout
            header={{
                title: "Skutki psychiczne eutanazji",
                subTitle: "Czy pacjent jest jedyną ofiarą?",
                classes: ["text-right"]
            }}
            texts={
                [
                    'Eutanazja nie dotyczy tylko samego pacjenta, ale ma głęboki wpływ na jego najbliższych, którzy muszą zmierzyć się z emocjonalnymi konsekwencjami tej decyzji.',
                    'Rodzina, przyjaciele i opiekunowie mogą odczuwać poczucie winy, żal i emocjonalną traumę w związku z decyzją o eutanazji.',
                    'Towarzyszenie bliskiej osobie w jej ostatnich chwilach może prowadzić do trwałych zmian w relacjach międzyludzkich.',
                    'Długotrwałe skutki emocjonalne eutanazji mogą wpływać na jakość życia osób, które pozostają po śmierci bliskiej osoby.'
                ]
            }
            image={{
                url: Image3,
                alt: "Smutny mężczyzna w podeszłym wieku patrzący w okno."
            }}
            inverted
        />,
        // MARK: Q-Moral-1
        <MoralQuestion
            question="Czy życie powinno być chronione bez względu na cierpienie?"
            options={[
                "Tak, każde życie ma wartość",
                "Nie, cierpienie może uzasadniać zakończenie życia"
            ]}
            answers={[
                "Każde życie, niezależnie od okoliczności, ma niezatarte znaczenie i wartość. Warto wierzyć, że istnieją inne sposoby łagodzenia cierpienia, takie jak opieka paliatywna, które pozwalają zachować godność życia bez potrzeby uciekania się do eutanazji.",

                "Choć uznajesz, że w skrajnych przypadkach pacjent może pragnąć zakończenia cierpienia, warto zwrócić uwagę na etyczne dylematy, które wiążą się z takim wyborem. Może to prowadzić do obniżenia wartości życia i stawiać pytanie, czy nie powinniśmy raczej stawiać na wsparcie dla osób cierpiących."
            ]}
        />,
        // MARK: Slide 6 Topic 2
        <ListImageLayout
            header={{
                title: "Eutanazja a cierpienie bliskich",
                subTitle: "Jak eutanazja wpływa na najbliższe osoby pacjenta?"
            }}
            items={[
                { title: "Poczucie winy", text: "Bliscy mogą zmagać się z myślą, czy podjęta decyzja była słuszna." },
                { title: "Żal i smutek", text: "Strata bliskiej osoby w takiej sytuacji może być jeszcze bardziej bolesna." },
                { title: "Trauma emocjonalna", text: "Decyzja o eutanazji może prowadzić do długotrwałych problemów psychicznych." },
                { title: "Zmiana relacji", text: "Rodzina i przyjaciele mogą inaczej postrzegać siebie nawzajem po takiej decyzji." },
                { title: "Skutki psychologiczne", text: "Może pojawić się depresja, lęk lub inne problemy emocjonalne." },
            ]}
            image={{ url: Image4, alt: "Dłonie kobiety w starszym wieku trzymające ramię innej kobiety." }}
        />,
        // MARK: Slide 7 Topic 3
        <InfoCardLayout
            header={{ title: "Eutanazja na świecie - cywilizacja śmierci", subTitle: "Jakie są regulacje dotyczące eutanazji w różnych krajach?", classes: ["text-center"] }}
            cards={[
                {
                    image: { url: NetherlandsIcon },
                    title: "Holandia",
                    text: "Eutanazja została zalegalizowana w 2002 roku. Lekarze mogą przeprowadzać eutanazję, jeśli pacjent świadomie wyraża zgodę i cierpi na nieuleczalną chorobę. Prawo jest ściśle regulowane."
                },
                {
                    image: { url: BelgiumIcon },
                    title: "Belgia",
                    text: "Eutanazja jest legalna od 2002 roku. Obejmuje również pacjentów cierpiących psychicznie oraz dzieci, które są w stanie wyrazić świadomą zgodę. Wymaga konsultacji z lekarzami."
                },
                {
                    image: { url: CanadaIcon },
                    title: "Kanada",
                    text: 'Od 2016 roku eutanazja jest legalna w ramach "Medical Assistance in Dying" (MAiD). Pacjent musi być pełnoletni, mieć nieuleczalną chorobę i wyrazić wolę zakończenia życia. Proces jest ściśle kontrolowany.'
                },
                {
                    image: { url: LuxembourgIcon },
                    title: "Luksemburg",
                    text: "Eutanazja została zalegalizowana w 2009 roku. Pacjent musi wyrazić świadomą zgodę, a procedura jest poprzedzona konsultacjami z lekarzami i specjalistami."
                },
                {
                    image: { url: Switzerland },
                    title: "Szwajcaria",
                    text: 'Choć eutanazja jest nielegalna, kraj dopuszcza tzw. "pomoc w samobójstwie". Pacjenci mogą uzyskać pomoc od organizacji takich jak Dignitas, pod warunkiem, że spełniają określone kryteria.'
                },
            ]}
        />,
        // MARK: Q-Quiz-2|4
        <QuizComponent
            questions={[
                "Jakie są konsekwencje wprowadzenia eutanazji w systemach opieki zdrowotnej?",
                "W jaki sposób legalizacja eutanazji wpływa na postrzeganie wartości życia w społeczeństwie?",
                "Jakie wyzwania prawne i etyczne wiążą się z wdrażaniem eutanazji w krajach, które ją zalegalizowały?",
            ]}
            answers={[
                [
                    "Wzrost wydatków na opiekę zdrowotną.",
                    "Konieczność ustanowienia nowych regulacji prawnych.",
                    "Większe inwestycje w opiekę paliatywną.",
                    "Ryzyko nadużyć i presji na osoby chore.",
                ],
                [
                    "Zwiększa szacunek dla osób starszych i chorych.",
                    "Może prowadzić do dehumanizacji osób starszych i chorych.",
                    "Zachęca do większej troski o pacjentów w terminalnych fazach choroby.",
                    "Podkreśla, że życie ma najwyższą wartość i należy je chronić.",
                ],
                [
                    "Problemy z jednoznacznym zdefiniowaniem „nieuleczalnej choroby”.",
                    "Trudności w zapewnieniu pełnej zgody pacjenta.",
                    "Zwiększenie liczby osób ubiegających się o eutanazję.",
                    "Możliwość nadużyć w decyzjach dotyczących życia pacjentów.",
                ],
            ]}
            correctAnswers={[1, 1, 3]}
            onAnswer={handleAnswer}
            classes={["quiz-2x2-js"]}
        />,
        // MARK: Slide 8 Topic 4
        <ListImageLayout
            header={{
                title: "Alternatywy dla eutanazji",
                subTitle: "Inne sposoby na ulgę w cierpieniu?",
                classes: ["text-left"]
            }}
            items={[
                {
                    title: "Opieka paliatywna",
                    text: "Skupia się na łagodzeniu bólu i objawów choroby, poprawiając jakość życia pacjenta w zaawansowanym stadium choroby. Obejmuje zarządzanie objawami, takimi jak ból czy duszność."
                },
                {
                    title: "Opieka hospicyjna",
                    text: "Skierowana do pacjentów w terminalnej fazie choroby, zapewnia wsparcie medyczne, emocjonalne i duchowe, pomagając pacjentowi i jego rodzinie w tych trudnych chwilach."
                },
                {
                    title: "Wsparcie psychologiczne",
                    text: "Pomaga pacjentom i ich rodzinom radzić sobie z emocjami, stresem i lękiem związanym z chorobą, oferując wsparcie w trudnych momentach."
                },
                {
                    title: "Pomoc duchowa",
                    text: "Daje pacjentom możliwość rozmowy z kapelanem lub doradcą duchowym, pomagając im znaleźć sens życia i ukojenie w obliczu choroby i śmierci."
                },
            ]}
            image={
                {
                    url: Image5,
                    alt: "Pielęgniarz siedzący z pacjentką na ławce bujanej."
                }
            }
        />,
        // MARK: Slide 9 Topic 4
        <InfoCardLayout
            header={{ title: "Opieka palliatywna",
                subTitle: "Jakie korzyści niesie ze sobą opieka paliatywna?"
            }}
            cards={[
                {
                    image: { url: PillsIcon },
                    title: "Cel",
                    text: "Opieka paliatywna koncentruje się na łagodzeniu objawów, takich jak ból, zmęczenie czy duszności, poprawiając komfort życia pacjenta, który zmaga się z nieuleczalną chorobą, bez leczenia samej choroby."
                },
                {
                    image: { url: SpeechBubbleIcon },
                    title: "Główne działania",
                    text: "Główne działania obejmują kontrolowanie bólu i objawów choroby, wsparcie emocjonalne pacjenta oraz poprawę jakości życia poprzez zapewnienie komfortu fizycznego i psychicznego."
                },
                {
                    image: { url: HandshakeIcon },
                    title: "Podejście holistyczne",
                    text: "Opieka paliatywna uwzględnia wszystkie aspekty życia pacjenta – fizyczne, emocjonalne i społeczne – zapewniając wsparcie w pełnym wymiarze, aby poprawić jakość życia pacjenta."
                },
            ]}
        />,
        // MARK: Quote-2
        <Quote
            quote={{
                type: 'quote-no-author',
                quote: "Celem opieki paliatywnej nie jest przedłużenie życia, lecz poprawa jego jakości.",
            }}
        />,
        // MARK: Slide 12
        <TextListLayout
            header={{
                title: "Podejście holistyczne",
                subTitle: "Czym jest i dlaczego jest ważne",
                classes: ["text-center"]
            }}
            texts={[
                'Pomoc psychologiczna wspiera pacjentów i ich bliskich w radzeniu sobie z emocjami i stresem związanym z nieuleczalną chorobą.',
                'Terapie obejmują sesje indywidualne, grupowe oraz wsparcie w czasie żałoby, pomagając w przetwarzaniu trudnych emocji i przygotowaniu się na nadchodzące zmiany.'
            ]}
            items={[
                {
                    title: "Czym jest",
                    text: "Opieka hospicyjna jest formą wsparcia dla pacjentów w terminalnym stadium choroby. Oferuje kompleksową pomoc medyczną, emocjonalną i duchową."
                },
                {
                    title: "Dlaczego jest ważne",
                    text: "Zajmuje się zapewnieniem komfortu pacjentom w ostatnich dniach życia, a także wspiera ich rodziny w procesie żałoby."
                },
                {
                    title: "Co oferuje",
                    text: "Oferuje wsparcie psychologiczne dla pacjentów oraz rodzin."
                },
            ]}
            inverted
            // MARK: Quote-3
            quote={{
                type: "quote",
                quote: "Ważniejsze jest poznanie, JAKI pacjent ma chorobę, niż JAKĄ chorobę ma pacjent",
                author: "William Osler"
            }}
            quoteUnderText
        />,

        // MARK: Summary
        <SummaryLayout
            header={{
                title: "Podsumowanie tematu",
                subTitle: "Ważne informacje i kluczowe wnioski"
            }}
            texts={[
                'Eutanazja, podobnie jak aborcja, jest buntem przeciwko prawu Bożemu zapisanemu jako I, IV  i V przykazanie Dekalogu. Eutanazja czyli wspomagane samobójstwo lub wręcz zabójstwo osób starych i chorych nie ma nic wspólnego z miłosierdziem, jest natomiast okrutnym i przewrotnym sposobem rozwiązywania problemów starości, nieuleczalnych chorób i opieki nad osobami słabymi. Jednak jak przestrzega św. Paweł w liście do Efezjan:',
                {
                    type: 'quote',
                    quote: 'Czcij Ojca twego i Matkę - jest to pierwsze przykazanie z obietnicą - aby ci było dobrze i abyś był długowieczny (EF 6, 2)',
                    author: 'Św. Paweł'
                },
                'Nakazy zawarte w Starym Testamencie także miażdżą argumenty zwolenników eutanazji:',
                {
                    type: 'quote',
                    quote: 'Kto czci Ojca, zyskuje odpuszczenie grzechów, a kto szanuje Matkę, jakby skarby gromadził.',
                    author: '(Syr 3, 3-4)'
                },
                {
                    type: 'quote',
                    quote: 'Synu, wspomagaj swego Ojca w starości, nie zasmucaj go w jego życiu. A jeśliby nawet rozum stracił, miej wyrozumiałość, nie pogardzaj nim, choć jesteś w pełni sił.',
                    author: '(Syr 3, 13-14)'
                },
                {
                    type: 'quote',
                    quote: 'Kto porzuca Ojca swego, jest jak bluźnierca, a przeklęty przez Pana, kto pobudza do gniewu Matkę swoją.',
                    author: '(Syr 3, 16)'
                }
            ]}
            links={[
                {
                    title: "Źródła do artykułów:",
                    urls: [
                        "https://www.medonet.pl/zdrowie/zdrowie-dla-kazdego,eutanazja---definicja--kontrowersje--rodzaj--sedacja--kwestie-prawne,artykul,80759595.html",
                        "https://www.infor.pl/prawo/encyklopedia-prawa/e/272998,eutanazja.html",
                        "https://oko.press/eutanazja-dobra-smierc-czy-prawo-do-godnego-zycia-obejmuje-tez-umieranie-w-godnosci",
                        "https://wylecz.to/choroby-i-objawy/eutanazja-na-czym-polega-formy-eutanazji/",
                        "https://pl.wikipedia.org/wiki/Eutanazja#Doktryny_religijne",
                        "https://zpe.gov.pl/a/eutanazja---jeden-z-glownych-problemow-wspolczesnej-etyki/Dkn4v49V",
                        "https://psychology.org.au/getmedia/c9d330e2-353b-4ed5-9d0a-af8a532feade/euthanasia-paper-updated-april-2008.pdf"
                    ]
                },
                {
                    title: "Źródła do zdjęć:",
                    urls: [
                        "https://www.freepik.com/free-photo/hands-holding-each-other-support_43686091.htm#fromView=search&page=18&position=20&uuid=922a0d3a-5b18-49ec-8437-be7dd87e141a",
                        "https://www.freepik.com/free-photo/composition-pretty-mother-s-day-elements_12977004.htm#fromView=search&page=1&position=4&uuid=29583f7e-3c6e-4996-a699-24794ae1f02b",
                        "https://www.freepik.com/free-photo/doctor-talking-patient-side-view_33752789.htm#fromView=search&page=1&position=2&uuid=a9b86f8f-f798-4ecc-8acc-f5304302155d",
                        "https://www.freepik.com/free-ai-image/close-up-person-suffering-from-depression_94953224.htm#fromView=search&page=13&position=9&uuid=c0d245f0-3190-40af-9d4b-6d7b3a2eb4eb",
                        "https://www.freepik.com/free-photo/male-nurse-swing-chair-with-senior-woman_11228574.htm#fromView=search&page=2&position=10&uuid=c682878f-a09a-45e4-babc-6226efd1fb16",
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

export default EuthanasiaPresentation;
