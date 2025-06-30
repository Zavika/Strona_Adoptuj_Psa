const allDogs = [
    { name: "Sonia", gender: "female", age: "4 lata", personality: "Przyjacielska, łagodna", needs: "Kontakt z ludźmi, pieszczoty", time: "9 miesięcy", breed: "Cocker Spaniel", history: "Sonia została oddana z powodu alergii w rodzinie. Jest bardzo towarzyska i uwielbia być w centrum uwagi.", img: "https://images.unsplash.com/photo-1580905767068-18809fd88640?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Sonia uwielbia gonić motyle w parku!" },
    { name: "Bruno", gender: "male", age: "2 lata", personality: "Ciekawski, energiczny", needs: "Szkolenia, aktywność", time: "4 miesiące", breed: "Bokser", history: "Bruno został znaleziony przywiązany do drzewa. Jest pełen życia i szuka domu, który zapewni mu dużo ruchu.", img: "https://images.unsplash.com/photo-1591460913899-f8aa75ec0b73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Bruno zawsze kradnie piłkę na spacerach!" },
    { name: "Nela", gender: "female", age: "5 lat", personality: "Spokojna, wierna", needs: "Cicha okolica, spacery", time: "1 rok", breed: "Bernedoodle", history: "Nela została oddana z powodu zmiany sytuacji życiowej. Jest lojalna i marzy o spokojnym domu.", img: "https://images.unsplash.com/photo-1598653710220-48db8b85b7aa?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Nela uwielbia drzemki w słońcu!" },
    { name: "Fado", gender: "male", age: "3 lata", personality: "Wesoły, towarzyski", needs: "Zabawa, ruch", time: "7 miesięcy", breed: "Australijski pies pasterski", history: "Fado został uratowany z ulicy. Jest radosny i uwielbia towarzystwo ludzi oraz innych psów.", img: "https://images.unsplash.com/photo-1678818546450-da128f70a133?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Fado zawsze przynosi patyk na spacer!" },
    { name: "Lola", gender: "female", age: "6 lat", personality: "Czuła, spokojna", needs: "Ciepłe miejsce, opieka", time: "2 lata", breed: "Shih Tzu", history: "Lola spędziła większość życia w schronisku. Szuka domu, gdzie będzie mogła cieszyć się spokojem i miłością.", img: "https://images.unsplash.com/photo-1589210043112-d4835d91b37a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Lola kocha być głaskana po brzuszku!" },
    { name: "Cezar", gender: "male", age: "4 lata", personality: "Odważny, lojalny", needs: "Duży ogród, aktywność", time: "10 miesięcy", breed: "Doberman", history: "Cezar został oddany z powodu braku czasu właścicieli. Jest oddany i potrzebuje aktywnego opiekuna.", img: "https://images.unsplash.com/photo-1588095211051-390fa9b7da86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Cezar uwielbia aportować frisbee!" },
    { name: "Maja", gender: "female", age: "2 lata", personality: "Energiczna, ciekawska", needs: "Dużo uwagi, szkolenia", time: "3 miesiące", breed: "Dalmatyńczyk", history: "Maja została porzucona na wsi. Jest pełna energii i uwielbia odkrywać nowe miejsca.", img: "https://images.unsplash.com/photo-1562771968-1e10d4eee4d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Maja kocha skakać przez kałuże!" },
    { name: "Roki", gender: "male", age: "5 lat", personality: "Spokojny, łagodny", needs: "Cicha okolica, spacery", time: "1 rok", breed: "Basset Hound", history: "Roki trafił do nas po śmierci właściciela. Jest spokojny i szuka domu, gdzie będzie mógł odpoczywać.", img: "https://images.unsplash.com/photo-1638620638419-58d7bbf09845?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Roki uwielbia wylegiwać się na kanapie!" },
    { name: "Tina", gender: "female", age: "3 lata", personality: "Wesoła, towarzyska", needs: "Zabawa, ruch", time: "6 miesięcy", breed: "Pudel", history: "Tina została oddana z powodu przeprowadzki. Jest radosna i uwielbia być w centrum uwagi.", img: "https://images.unsplash.com/photo-1705587936579-3ac083d5435f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Tina uwielbia tańczyć na dwóch łapach!" },
    { name: "Oskar", gender: "male", age: "4 lata", personality: "Aktywny, radosny", needs: "Długie spacery, zabawki", time: "8 miesięcy", breed: "Siberian Husky", history: "Oskar błąkał się po ulicach, zanim trafił do nas. Uwielbia biegać i potrzebuje aktywnego opiekuna.", img: "https://images.unsplash.com/photo-1706530593884-c50ab78f27fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Oskar kocha zimowe spacery w śniegu!" },
    { name: "Zoe", gender: "female", age: "2 lata", personality: "Ciekawska, energiczna", needs: "Szkolenia, aktywność", time: "4 miesiące", breed: "Shiba Inu", history: "Zoe została znaleziona w parku. Jest pełna energii i szuka domu, który zapewni jej dużo zabawy.", img: "https://images.unsplash.com/photo-1704895644167-4f00edca67b6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Zoe uwielbia chować swoje zabawki!" },
    { name: "Leon", gender: "male", age: "6 lat", personality: "Mądry, opanowany", needs: "Spokojny dom, dieta", time: "1,5 roku", breed: "Mastiff", history: "Leon został oddany z powodu zmiany sytuacji życiowej. Jest#mądry i szuka spokojnego domu.", img: "https://images.unsplash.com/photo-1696800037125-fa70f8524d1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Leon zawsze czeka na smakołyk po spacerze!" },
    { name: "Burek", gender: "male", age: "3 lata", personality: "Wesoły, towarzyski", needs: "Dużo ruchu, zabawki", time: "6 miesięcy", breed: "Owczarek niemiecki", history: "Burek został znaleziony na ulicy, błąkający się bez opieki. Szybko okazał się radosnym psem, który uwielbia towarzystwo ludzi.", img: "https://images.unsplash.com/photo-1678727711259-fbf2646d1175?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Burek uwielbia kopać dołki w ogrodzie!" },
    { name: "Reksio", gender: "male", age: "5 lat", personality: "Spokojny, łagodny", needs: "Cicha okolica, regularne spacery", time: "1 rok", breed: "Labrador Retriever", history: "Reksio trafił do nas po śmierci swojego właściciela. Jest spokojny i szuka domu, gdzie będzie mógł czuć się bezpiecznie.", img: "https://images.unsplash.com/photo-1616602775605-448cd33e7222?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Reksio kocha wylegiwać się przy kominku!" },
    { name: "Luna", gender: "female", age: "2 lata", personality: "Energiczna, ciekawska", needs: "Dużo uwagi, szkolenia", time: "3 miesiące", breed: "Border Collie", history: "Luna została oddana przez rodzinę, która nie radziła sobie z jej energią. Uwielbia biegać i uczyć się nowych sztuczek.", img: "https://images.unsplash.com/photo-1551097295-4c28e380cdf6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Luna uwielbia uczyć się nowych komend!" },
    { name: "Max", gender: "male", age: "4 lata", personality: "Odważny, lojalny", needs: "Duży ogród, aktywność", time: "8 miesięcy", breed: "Rottweiler", history: "Max został uratowany z trudnych warunków. Jest oddany i potrzebuje aktywnego opiekuna, który da mu dużo miłości.", img: "https://images.unsplash.com/photo-1703008192456-fe56a0fd4320?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Max zawsze strzeże swojego opiekuna!" },
    { name: "Bella", gender: "female", age: "6 lat", personality: "Czuła, spokojna", needs: "Ciepłe miejsce, delikatna opieka", time: "2 lata", breed: "Golden Retriever", history: "Bella spędziła większość życia w schronisku. Marzy o spokojnym domu, gdzie będzie mogła cieszyć się pieszczotami.", img: "https://images.unsplash.com/photo-1605231363884-792ac249f935?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Bella uwielbia długie głaskanie!" },
    { name: "Tofik", gender: "male", age: "1 rok", personality: "Zabawny, nieśmiały", needs: "Cierpliwość, socjalizacja", time: "2 miesiące", breed: "Jack Russell Terrier", history: "Tofik został porzucony jako szczeniak. Jest pełen energii, ale potrzebuje czasu, by zaufać nowym ludziom.", img: "https://images.unsplash.com/photo-1641805578907-1bf6e5f57c92?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Tofik kocha gonić własny ogon!" },
    { name: "Kora", gender: "female", age: "7 lat", personality: "Mądra, opanowana", needs: "Spokojny dom, dieta", time: "1,5 roku", breed: "Husky syberyjski", history: "Kora została oddana z powodu przeprowadzki. Jest mądra i spokojna, idealna dla kogoś, kto ceni harmonię.", img: "https://images.unsplash.com/photo-1629246999700-1e7ad7a1ba03?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Kora uwielbia obserwować ptaki!" },
    { name: "Rudi", gender: "male", age: "3 lata", personality: "Aktywny, radosny", needs: "Długie spacery, zabawki", time: "5 miesięcy", breed: "Beagle", history: "Rudi błąkał się po lesie, zanim trafił do nas. Uwielbia węszyć i biegać, idealny towarzysz na wycieczki.", img: "https://images.unsplash.com/photo-1637852421491-60a604dd4151?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", funFact: "Rudi zawsze znajdzie ukryty smakołyk!" }
];

let dogs = [...allDogs];
let likedDogs = JSON.parse(localStorage.getItem('likedDogs')) || [];
let currentIndex = 0;
let likedCurrentIndex = 0;
let currentDogIndex = 0;
let autoSlideInterval;
let newsItems = [
    {
        title: "Nowa akcja adopcyjna!",
        date: "15 maja 2024",
        content: "Zapraszamy na naszą wiosenną akcję adopcyjną w Warszawie. Spotkaj się z naszymi podopiecznymi i znajdź swojego nowego przyjaciela!",
        link: "#"
    },
    {
        title: "Warsztaty dla nowych opiekunów",
        date: "22 maja 2024",
        content: "Organizujemy bezpłatne warsztaty dla osób, które niedawno adoptowały psa. Dowiedz się, jak budować więź z nowym członkiem rodziny.",
        link: "#"
    },
    {
        title: "Zbiórka karmy",
        date: "30 maja 2024",
        content: "Potrzebujemy Twojej pomocy! Zbieramy karmę dla psów w schroniskach partnerskich. Każda paczka się liczy!",
        link: "#"
    }
];
let currentNewsIndex = 0;

// Obiekt tłumaczeń dla wszystkich elementów z atrybutem data-translate
const translations = {
    pl: {
        site_title: 'Adopcja Psów',
        nav_adopt: 'Psy do adopcji',
        nav_liked: 'Polubione',
        nav_us: 'O nas',
        nav_mission: 'Nasza misja',
        nav_opinions: 'Opinie',
        nav_how_to_adopt: 'Jak adoptować',
        nav_temporary_home: 'Dom tymczasowy',
        nav_volunteer: 'Wolontariat',
        intro_title: 'Adopcja to najlepsza opcja!',
        intro_text: 'Adopcja psa to nie tylko decyzja, to początek pięknej przygody pełnej miłości i radości. Daj psu dom, a on podaruje Ci swoje serce.',
        intro_button: 'Poznaj nasze psy!',
        adopt_title: 'PSY DOSTĘPNE DO ADOPCJI:',
        liked_title: 'POLUBIONE',
        no_dogs: 'Brak psów do wyświetlenia.',
        no_liked_dogs: 'Brak polubionych psów.',
        us_title: 'O NAS',
        us_text_1: 'Fundacja "Adoptuj Psa" powstała z głębokiej potrzeby serca, aby każdy pies mógł zaznać miłości, ciepła i bezpieczeństwa. Nasza historia zaczęła się w 2015 roku, gdy grupa pasjonatów postanowiła połączyć siły i działać na rzecz bezdomnych zwierząt. Od tamtej pory pomogliśmy ponad 1200 psom znaleźć nowe domy, organizując adopcje, wspierając schroniska i edukując społeczeństwo.',
        us_text_2: 'Naszym celem jest nie tylko znajdowanie domów dla psów, ale także budowanie świadomości na temat odpowiedzialnej opieki nad zwierzętami. Wierzymy, że każdy pies zasługuje na szansę na szczęśliwe życie, bez względu na swoją przeszłość.',
        us_text_3: 'Działamy dzięki zaangażowaniu wolontariuszy, darczyńców i ludzi o wielkich sercach, którzy wspierają naszą misję. Organizujemy wydarzenia adopcyjne, warsztaty edukacyjne oraz kampanie, które zmieniają stereotypy na temat psów ze schronisk. Nasza fundacja to społeczność ludzi, dla których dobro zwierząt jest priorytetem.',
        us_team_title: 'Nasz zespół',
        us_team_text: 'Złożony z miłośników zwierząt, behawiorystów i wolontariuszy, nasz zespół każdego dnia pracuje, aby poprawić los psów. Poznaj nas na wydarzeniach adopcyjnych lub dołącz do naszej misji!',
        us_join_button: 'Dołącz do nas',
        mission_title: 'NASZA MISJA',
        mission_subheading_1: 'Dom dla każdego psa',
        mission_text_1: 'Zapewniamy każdemu psu kochający dom i godne życie, dając drugą szansę.',
        mission_subheading_2: 'Edukacja',
        mission_text_2: 'Promujemy adopcję i walczymy ze stereotypami, np. <span class="stereotype-crossed">"Psy ze schroniska są agresywne"</span>.',
        mission_text_3: 'Prawda jest taka, że psy ze schroniska są pełne miłości i wdzięczności!',
        mission_subheading_3: 'Współpraca',
        mission_text_4: 'Współpracujemy z 20 schroniskami, organizujemy wydarzenia i wspieramy adopcje.',
        mission_stats: '<strong>1200+</strong> psów znalazło dom!',
        mission_quote: '„Każdy pies zasługuje na szczęście.”',
        mission_adopt_button: 'Adoptuj',
        mission_support_button: 'Wesprzyj nas',
        opinions_title: 'OPINIE ADOPTUJĄCYCH',
        opinion_1: 'Adoptowaliśmy Maxa i to najlepsza decyzja w naszym życiu. Jest cudownym psem!',
        opinion_2: 'Luna wniosła radość do naszego domu. Dziękujemy za pomoc w adopcji!',
        opinion_3: 'Proces adopcji był prosty, a Reksio to prawdziwy skarb! Polecam!',
        opinion_4: 'Bella jest bardzo kochana! Fundacja świetnie nas wspierała w adopcji.',
        opinion_5: 'Dzięki Wam mamy Bruna – wspaniałego towarzysza na co dzień!',
        opinion_6: 'Sonia to nasz promyk słońca. Adopcja okazała się cudowną przygodą!',
        city_krakow: 'Kraków',
        city_warsaw: 'Warszawa',
        city_gdansk: 'Gdańsk',
        city_poznan: 'Poznań',
        city_lodz: 'Łódź',
        city_szczecin: 'Szczecin',
        adoption_title: 'JAK ADOPTOWAĆ',
        adoption_step_1_title: 'Zapoznaj się z podopiecznymi',
        adoption_step_1_text: 'Przeglądaj psy w zakładce „Psy do adopcji” i wypełnij formularz adopcyjny.',
        adoption_step_2_title: 'Rozmowa i spotkanie zapoznawcze',
        adoption_step_2_text: 'Podczas rozmowy wstępnej poznajemy Twoje oczekiwania, a następnie umawiamy się na spacer lub wizytę, byś mógł/mogła poznać psa osobiście.',
        adoption_step_3_title: 'Wizyta przedadopcyjna',
        adoption_step_3_text: 'Sprawdzamy warunki, w jakich będzie mieszkał pies, i omawiamy szczegóły adopcji.',
        adoption_step_4_title: 'Umowa adopcyjna i wsparcie po adopcji',
        adoption_step_4_text: 'Podpisujemy umowę adopcyjną, a Ty zabierasz psa do domu. Oferujemy także porady i pomoc behawiorysty po adopcji.',
        temporary_home_title: 'ZOSTAŃ DOMEM TYMCZASOWYM',
        temporary_home_subtitle: 'Daj psu tymczasowy dom',
        temporary_home_text: 'Zostań domem tymczasowym i pomóż psu w trudnej sytuacji. Zapewniasz miłość i bezpieczeństwo, a my pokrywamy koszty karmy, weterynarza i akcesoriów.',
        temporary_home_benefits_title: 'Dlaczego warto?',
        temporary_home_benefit_1: 'Ratujesz życie psa i dajesz mu szansę na adopcję.',
        temporary_home_benefit_2: 'Pomagasz nam lepiej poznać jego charakter.',
        temporary_home_benefit_3: 'Elastyczna forma pomocy – Ty decydujesz, jak długo możesz pomóc.',
        volunteer_title: 'WOLONTARIAT',
        volunteer_text: 'Dołącz do nas! Pomagaj w spacerach, zabawach z psami lub organizacji wydarzeń adopcyjnych.',
        volunteer_testimonial_1: '„Wolontariat w Adoptuj Psa to niesamowita przygoda! Poznałam cudowne psy i ludzi.”',
        volunteer_author_1: '— Marta, wolontariuszka od 2 lat',
        volunteer_testimonial_2: '„Pomaganie psom daje mi ogromną radość. To świetny sposób na spędzanie czasu!”',
        volunteer_author_2: '— Kuba, wolontariusz od 6 miesięcy',
        volunteer_benefits_title: 'Korzyści z wolontariatu:',
        volunteer_benefit_1: 'Zdobądź doświadczenie z psami.',
        volunteer_benefit_2: 'Poznaj ludzi o podobnych pasjach.',
        volunteer_benefit_3: 'Ciesz się radością pomagania.',
        volunteer_contact_email: 'Napisz do nas',
        volunteer_contact_phone: 'Zadzwoń: +48 987 654 321',
        volunteer_faq: 'Dowiedz się więcej',
        dog_breed: 'Rasa:',
        dog_age: 'Wiek:',
        dog_personality: 'Osobowość:',
        dog_needs: 'Potrzeby:',
        dog_time: 'Czas w schronisku:',
        dog_history: 'Historia:',
        dog_funfact: 'Fun Fact:',
        footer_address: '<strong>Adres:</strong> ul. Szczęśliwa 45, 00-123 Warszawa',
        footer_email: '<strong>Email:</strong> <a href="mailto:adoptujpsa@example.com">adoptujpsa@example.com</a>',
        footer_phone: '<strong>Telefon:</strong> +48 123 456 789',
        chat_open: 'Otwórz czat',
        chat_title: 'Czat z Asystentem',
        chat_close: 'Zamknij',
        chat_placeholder: 'Wpisz wiadomość...',
        chat_send: 'Wyślij',
        view_liked_button: "Zobacz polubione psy",
        search_name: 'Imię psa',
        back_to_dogs: "Wróć do wszystkich psów",
        added_to_liked: "🐶 Dodano do polubionych!",
        removed_from_liked: "❌ Usunięto z polubionych",
        select_breed: 'Wybierz rasę',
        search_button: 'Szukaj',
        clear_button: 'Wyczyść',
        match_dog: 'Dopasuj psa do siebie',
        news_title: 'AKTUALNOŚCI',
        news_1_title: 'Nowa akcja adopcyjna!',
        news_1_date: '15 maja 2024',
        news_1_content: 'Zapraszamy na naszą wiosenną akcję adopcyjną w Warszawie. Spotkaj się z naszymi podopiecznymi i znajdź swojego nowego przyjaciela!',
        news_2_title: 'Warsztaty dla nowych opiekunów',
        news_2_date: '22 maja 2024',
        news_2_content: 'Organizujemy bezpłatne warsztaty dla osób, które niedawno adoptowały psa. Dowiedz się, jak budować więź z nowym członkiem rodziny.',
        news_3_title: 'Zbiórka karmy',
        news_3_date: '30 maja 2024',
        news_3_content: 'Potrzebujemy Twojej pomocy! Zbieramy karmę dla psów w schroniskach partnerskich. Każda paczka się liczy!',
        tips_title: 'PORADY BEHAWIORYSTY',
        tips_item_1_title: 'Jak przygotować psa na adopcję?',
        tips_item_1_text: 'Adopcja to ważny krok, który wymaga przygotowania. Zacznij od stworzenia spokojnego miejsca dla psa, wyposażonego w legowisko i zabawki. Stopniowo wprowadzaj rutynę, taką jak regularne spacery i karmienie. Bądź cierpliwy – każdy pies potrzebuje czasu, by się zaaklimatyzować.',
        tips_item_2_title: 'Radzenie sobie z lękiem separacyjnym',
        tips_item_2_text: 'Lęk separacyjny jest częsty u psów adopcyjnych. Zaczynaj od krótkich nieobecności, nagradzając psa za spokojne zachowanie. Używaj zabawek interaktywnych, aby zająć jego uwagę. W razie potrzeby skonsultuj się z behawiorystą.',
        tips_item_3_title: 'Budowanie więzi z psem',
        tips_item_3_text: 'Spędzaj czas na wspólnej zabawie i spacerach, aby wzmocnić zaufanie. Unikaj kar – zamiast tego stosuj pozytywne wzmocnienie, nagradzając dobre zachowanie smakołykami lub pochwałami. Cierpliwość i konsekwencja to klucz do silnej więzi.',
        dogs: {
            sonia: {
                breed: "Cocker Spaniel",
                age: "4 lata",
                personality: "Przyjacielska, łagodna",
                needs: "Kontakt z ludźmi, pieszczoty",
                time: "9 miesięcy",
                history: "Sonia została oddana z powodu alergii w rodzinie. Jest bardzo towarzyska i uwielbia być w centrum uwagi.",
                funFact: "Sonia uwielbia gonić motyle w parku!"
            },
            bruno: {
                breed: "Bokser",
                age: "2 lata",
                personality: "Ciekawski, energiczny",
                needs: "Szkolenia, aktywność",
                time: "4 miesiące",
                history: "Bruno został znaleziony przywiązany do drzewa. Jest pełen życia i szuka domu, który zapewni mu dużo ruchu.",
                funFact: "Bruno zawsze kradnie piłkę na spacerach!"
            },
            nela: {
                breed: "Bernedoodle",
                age: "5 lat",
                personality: "Spokojna, wierna",
                needs: "Cicha okolica, spacery",
                time: "1 rok",
                history: "Nela została oddana z powodu zmiany sytuacji życiowej. Jest lojalna i marzy o spokojnym domu.",
                funFact: "Nela uwielbia drzemki w słońcu!"
            },
            fado: {
                breed: "Australijski pies pasterski",
                age: "3 lata",
                personality: "Wesoły, towarzyski",
                needs: "Zabawa, ruch",
                time: "7 miesięcy",
                history: "Fado został uratowany z ulicy. Jest radosny i uwielbia towarzystwo ludzi oraz innych psów.",
                funFact: "Fado zawsze przynosi patyk na spacer!"
            },
            lola: {
                breed: "Shih Tzu",
                age: "6 lat",
                personality: "Czuła, spokojna",
                needs: "Ciepłe miejsce, opieka",
                time: "2 lata",
                history: "Lola spędziła większość życia w schronisku. Szuka domu, gdzie będzie mogła cieszyć się spokojem i miłością.",
                funFact: "Lola kocha być głaskana po brzuszku!"
            },
            cezar: {
                breed: "Doberman",
                age: "4 lata",
                personality: "Odważny, lojalny",
                needs: "Duży ogród, aktywność",
                time: "10 miesięcy",
                history: "Cezar został oddany z powodu braku czasu właścicieli. Jest oddany i potrzebuje aktywnego opiekuna.",
                funFact: "Cezar uwielbia aportować frisbee!"
            },
            maja: {
                breed: "Dalmatyńczyk",
                age: "2 lata",
                personality: "Energiczna, ciekawska",
                needs: "Dużo uwagi, szkolenia",
                time: "3 miesiące",
                history: "Maja została porzucona na wsi. Jest pełna energii i uwielbia odkrywać nowe miejsca.",
                funFact: "Maja kocha skakać przez kałuże!"
            },
            roki: {
                breed: "Basset Hound",
                age: "5 lat",
                personality: "Spokojny, łagodny",
                needs: "Cicha okolica, spacery",
                time: "1 rok",
                history: "Roki trafił do nas po śmierci właściciela. Jest spokojny i szuka domu, gdzie będzie mógł odpoczywać.",
                funFact: "Roki uwielbia wylegiwać się na kanapie!"
            },
            tina: {
                breed: "Pudel",
                age: "3 lata",
                personality: "Wesoła, towarzyska",
                needs: "Zabawa, ruch",
                time: "6 miesięcy",
                history: "Tina została oddana z powodu przeprowadzki. Jest radosna i uwielbia być w centrum uwagi.",
                funFact: "Tina uwielbia tańczyć na dwóch łapach!"
            },
            oskar: {
                breed: "Husky syberyjski",
                age: "4 lata",
                personality: "Aktywny, radosny",
                needs: "Długie spacery, zabawki",
                time: "8 miesięcy",
                history: "Oskar błąkał się po ulicach, zanim trafił do nas. Uwielbia biegać i potrzebuje aktywnego opiekuna.",
                funFact: "Oskar kocha zimowe spacery w śniegu!"
            },
            zoe: {
                breed: "Shiba Inu",
                age: "2 lata",
                personality: "Ciekawska, energiczna",
                needs: "Szkolenia, aktywność",
                time: "4 miesiące",
                history: "Zoe została znaleziona w parku. Jest pełna energii i szuka domu, który zapewni jej dużo zabawy.",
                funFact: "Zoe uwielbia chować swoje zabawki!"
            },
            leon: {
                breed: "Mastiff",
                age: "6 lat",
                personality: "Mądry, opanowany",
                needs: "Spokojny dom, dieta",
                time: "1,5 roku",
                history: "Leon został oddany z powodu zmiany sytuacji życiowej. Jest mądry i szuka spokojnego domu.",
                funFact: "Leon zawsze czeka na smakołyk po spacerze!"
            },
            burek: {
                breed: "Owczarek niemiecki",
                age: "3 lata",
                personality: "Wesoły, towarzyski",
                needs: "Dużo ruchu, zabawki",
                time: "6 miesięcy",
                history: "Burek został znaleziony na ulicy, błąkający się bez opieki. Szybko okazał się radosnym psem, który uwielbia towarzystwo ludzi.",
                funFact: "Burek uwielbia kopać dołki w ogrodzie!"
            },
            reksio: {
                breed: "Labrador Retriever",
                age: "5 lat",
                personality: "Spokojny, łagodny",
                needs: "Cicha okolica, regularne spacery",
                time: "1 rok",
                history: "Reksio trafił do nas po śmierci swojego właściciela. Jest spokojny i szuka domu, gdzie będzie mógł czuć się bezpiecznie.",
                funFact: "Reksio kocha wylegiwać się przy kominku!"
            },
            luna: {
                breed: "Border Collie",
                age: "2 lata",
                personality: "Energiczna, ciekawska",
                needs: "Dużo uwagi, szkolenia",
                time: "3 miesiące",
                history: "Luna została oddana przez rodzinę, która nie radziła sobie z jej energią. Uwielbia biegać i uczyć się nowych sztuczek.",
                funFact: "Luna uwielbia uczyć się nowych komend!"
            },
            max: {
                breed: "Rottweiler",
                age: "4 lata",
                personality: "Odważny, lojalny",
                needs: "Duży ogród, aktywność",
                time: "8 miesięcy",
                history: "Max został uratowany z trudnych warunków. Jest oddany i potrzebuje aktywnego opiekuna, który da mu dużo miłości.",
                funFact: "Max zawsze strzeże swojego opiekuna!"
            },
            bella: {
                breed: "Golden Retriever",
                age: "6 lat",
                personality: "Czuła, spokojna",
                needs: "Ciepłe miejsce, delikatna opieka",
                time: "2 lata",
                history: "Bella spędziła większość życia w schronisku. Marzy o spokojnym domu, gdzie będzie mogła cieszyć się pieszczotami.",
                funFact: "Bella uwielbia długie głaskanie!"
            },
            tofik: {
                breed: "Jack Russell Terrier",
                age: "1 rok",
                personality: "Zabawny, nieśmiały",
                needs: "Cierpliwość, socjalizacja",
                time: "2 miesiące",
                history: "Tofik został porzucony jako szczeniak. Jest pełen energii, ale potrzebuje czasu, by zaufać nowym ludziom.",
                funFact: "Tofik kocha gonić własny ogon!"
            },
            kora: {
                breed: "Husky syberyjski",
                age: "7 lat",
                personality: "Mądra, opanowana",
                needs: "Spokojny dom, dieta",
                time: "1,5 roku",
                history: "Kora została oddana z powodu przeprowadzki. Jest mądra i spokojna, idealna dla kogoś, kto ceni harmonię.",
                funFact: "Kora uwielbia obserwować ptaki!"
            },
            rudi: {
                breed: "Beagle",
                age: "3 lata",
                personality: "Aktywny, radosny",
                needs: "Długie spacery, zabawki",
                time: "5 miesięcy",
                history: "Rudi błąkał się po lesie, zanim trafił do nas. Uwielbia węszyć i biegać, idealny towarzysz na wycieczki.",
                funFact: "Rudi zawsze znajdzie ukryty smakołyk!"
            }
        }
    },

    en: {
        site_title: 'Dog Adoption',
        nav_adopt: 'Dogs for Adoption',
        nav_liked: 'Liked',
        nav_us: 'About Us',
        nav_mission: 'Our Mission',
        nav_opinions: 'Reviews',
        nav_how_to_adopt: 'How to Adopt',
        nav_temporary_home: 'Temporary Home',
        nav_volunteer: 'Volunteer',
        intro_title: 'Adoption is the Best Option!',
        intro_text: 'Adopting a dog is not just a decision, it’s the start of a beautiful journey full of love and joy. Give a dog a home, and it will give you its heart.',
        intro_button: 'Meet Our Dogs!',
        adopt_title: 'DOGS AVAILABLE FOR ADOPTION:',
        liked_title: 'LIKED',
        no_dogs: 'No dogs to display.',
        no_liked_dogs: 'No liked dogs.',
        us_title: 'ABOUT US',
        us_text_1: 'The "Adopt a Dog" Foundation was born from a deep desire to ensure every dog experiences love, warmth, and safety. Our story began in 2015 when a group of enthusiasts joined forces to help homeless animals. Since then, we’ve helped over 1200 dogs find new homes by organizing adoptions, supporting shelters, and educating the public.',
        us_text_2: 'Our goal is not only to find homes for dogs but also to raise awareness about responsible pet care. We believe every dog deserves a chance at a happy life, regardless of its past.',
        us_text_3: 'We operate thanks to the commitment of volunteers, donors, and big-hearted people who support our mission. We organize adoption events, educational workshops, and campaigns that change stereotypes about shelter dogs. Our foundation is a community of people for whom animal welfare is a priority.',
        us_team_title: 'Our Team',
        us_team_text: 'Composed of animal lovers, behaviorists, and volunteers, our team works every day to improve the lives of dogs. Meet us at adoption events or join our mission!',
        us_join_button: 'Join Us',
        mission_title: 'OUR MISSION',
        mission_subheading_1: 'A Home for Every Dog',
        mission_text_1: 'We provide every dog with a loving home and a dignified life, giving them a second chance.',
        mission_subheading_2: 'Education',
        mission_text_2: 'We promote adoption and fight stereotypes, e.g. <span class="stereotype-crossed">"Shelter dogs are aggressive"</span>.',
        mission_text_3: 'The truth is, shelter dogs are full of love and gratitude!',
        mission_subheading_3: 'Collaboration',
        mission_text_4: 'We collaborate with 20 shelters, organize events, and support adoptions.',
        mission_stats: '<strong>1200+</strong> dogs have found homes!',
        mission_quote: '“Every dog deserves happiness.”',
        mission_adopt_button: 'Adopt',
        mission_support_button: 'Support Us',
        opinions_title: 'ADOPTERS’ REVIEWS',
        opinion_1: 'We adopted Max, and it’s the best decision of our lives. He’s a wonderful dog!',
        opinion_2: 'Luna brought joy to our home. Thank you for helping with the adoption!',
        opinion_3: 'The adoption process was simple, and Reksio is a true treasure! I recommend it!',
        opinion_4: 'Bella is so loving! The foundation supported us wonderfully during the adoption.',
        opinion_5: 'Thanks to you, we have Bruno – a fantastic daily companion!',
        opinion_6: 'Sonia is our ray of sunshine. Adoption was a wonderful adventure!',
        city_krakow: 'Krakow',
        city_warsaw: 'Warsaw',
        city_gdansk: 'Gdansk',
        city_poznan: 'Poznan',
        city_lodz: 'Lodz',
        city_szczecin: 'Szczecin',
        adoption_title: 'HOW TO ADOPT',
        adoption_step_1_title: 'Get to Know Our Dogs',
        adoption_step_1_text: 'Browse dogs in the “Dogs for Adoption” section and fill out the adoption form.',
        adoption_step_2_title: 'Conversation and Introductory Meeting',
        adoption_step_2_text: 'During the initial conversation, we learn about your expectations, then arrange a walk or visit so you can meet the dog in person.',
        adoption_step_3_title: 'Pre-Adoption Visit',
        adoption_step_3_text: 'We check the conditions in which the dog will live and discuss adoption details.',
        adoption_step_4_title: 'Adoption Agreement and Post-Adoption Support',
        adoption_step_4_text: 'We sign the adoption agreement, and you take the dog home. We also offer advice and behaviorist support after adoption.',
        temporary_home_title: 'BECOME A TEMPORARY HOME',
        temporary_home_subtitle: 'Give a Dog a Temporary Home',
        temporary_home_text: 'Become a temporary home and help a dog in need. You provide love and safety, and we cover the costs of food, vet care, and supplies.',
        temporary_home_benefits_title: 'Why It’s Worth It?',
        temporary_home_benefit_1: 'You save a dog’s life and give it a chance for adoption.',
        temporary_home_benefit_2: 'You help us better understand its personality.',
        temporary_home_benefit_3: 'Flexible form of help – you decide how long you can assist.',
        volunteer_title: 'VOLUNTEER',
        volunteer_text: 'Join us! Help with walks, playing with dogs, or organizing adoption events.',
        volunteer_testimonial_1: '“Volunteering at Adopt a Dog is an amazing adventure! I’ve met wonderful dogs and people.”',
        volunteer_author_1: '— Marta, volunteer for 2 years',
        volunteer_testimonial_2: '“Helping dogs brings me immense joy. It’s a great way to spend time!”',
        volunteer_author_2: '— Kuba, volunteer for 6 months',
        volunteer_benefits_title: 'Benefits of Volunteering:',
        volunteer_benefit_1: 'Gain experience with dogs.',
        volunteer_benefit_2: 'Meet people with similar passions.',
        volunteer_benefit_3: 'Enjoy the joy of helping.',
        volunteer_contact_email: 'Write to Us',
        volunteer_contact_phone: 'Call: +48 987 654 321',
        volunteer_faq: 'Learn More',
        dog_breed: 'Breed:',
        dog_age: 'Age:',
        dog_personality: 'Personality:',
        dog_needs: 'Needs:',
        dog_time: 'Time in Shelter:',
        dog_history: 'History:',
        dog_funfact: 'Fun Fact:',
        footer_address: '<strong>Address:</strong> Szczęśliwa St. 45, 00-123 Warsaw',
        footer_email: '<strong>Email:</strong> <a href="mailto:adoptujpsa@example.com">adoptujpsa@example.com</a>',
        footer_phone: '<strong>Phone:</strong> +48 123 456 789',
        chat_open: 'Open Chat',
        chat_title: 'Chat with Assistant',
        chat_close: 'Close',
        chat_placeholder: 'Type a message...',
        chat_send: 'Send',
        view_liked_button: "View liked dogs",
        back_to_dogs: "Back to all dogs",
        added_to_liked: "🐶 Added to favorites!",
        removed_from_liked: "❌ Removed from favorites",
        search_name: 'Dogs name',
        select_breed: 'Choose a breed...',
        search_button: 'Search',
        clear_button: 'Clear',
        match_dog: 'Find the perfect dog for you',
         news_title: 'NEWS',
        news_1_title: 'New adoption campaign!',
        news_1_date: 'May 15, 2024',
        news_1_content: 'Join our spring adoption campaign in Warsaw. Meet our dogs and find your new friend!',
        news_2_title: 'Workshops for new pet owners',
        news_2_date: 'May 22, 2024',
        news_2_content: 'We’re organizing free workshops for people who recently adopted a dog. Learn how to build a bond with your new family member.',
        news_3_title: 'Pet food collection',
        news_3_date: 'May 30, 2024',
        news_3_content: 'We need your help! We’re collecting food for dogs in partner shelters. Every package counts!',
        tips_title: 'BEHAVIORAL ADVICE',
        tips_item_1_title: 'How to prepare a dog for adoption?',
        tips_item_1_text: 'Adoption is an important step that requires preparation. Start by creating a calm space for the dog, equipped with a bed and toys. Gradually introduce a routine, such as regular walks and feeding. Be patient – every dog needs time to adjust.',
        tips_item_2_title: 'Dealing with separation anxiety',
        tips_item_2_text: 'Separation anxiety is common in adopted dogs. Start with short absences, rewarding the dog for calm behavior. Use interactive toys to keep them occupied. Consult a behaviorist if needed.',
        tips_item_3_title: 'Building a bond with your dog',
        tips_item_3_text: 'Spend time playing and walking together to build trust. Avoid punishment – instead, use positive reinforcement, rewarding good behavior with treats or praise. Patience and consistency are key to a strong bond.',
                dogs: {
            sonia: {
                breed: "Cocker Spaniel",
                age: "4 years",
                personality: "Friendly, gentle",
                needs: "Human interaction, affection",
                time: "9 months",
                history: "Sonia was surrendered due to allergies in the family. She is very sociable and loves being the center of attention.",
                funFact: "Sonia loves chasing butterflies in the park!"
            },
            bruno: {
                breed: "Boxer",
                age: "2 years",
                personality: "Curious, energetic",
                needs: "Training, activity",
                time: "4 months",
                history: "Bruno was found tied to a tree. He is full of life and looking for a home that provides lots of exercise.",
                funFact: "Bruno always steals the ball on walks!"
            },
            nela: {
                breed: "Bernedoodle",
                age: "5 years",
                personality: "Calm, loyal",
                needs: "Quiet environment, walks",
                time: "1 year",
                history: "Nela was surrendered due to a change in life circumstances. She is loyal and dreams of a peaceful home.",
                funFact: "Nela loves napping in the sun!"
            },
            fado: {
                breed: "Australian Cattle Dog",
                age: "3 years",
                personality: "Cheerful, sociable",
                needs: "Play, exercise",
                time: "7 months",
                history: "Fado was rescued from the street. He is joyful and loves the company of people and other dogs.",
                funFact: "Fado always brings a stick on walks!"
            },
            lola: {
                breed: "Shih Tzu",
                age: "6 years",
                personality: "Affectionate, calm",
                needs: "Warm place, care",
                time: "2 years",
                history: "Lola has spent most of her life in a shelter. She is looking for a home where she can enjoy peace and love.",
                funFact: "Lola loves belly rubs!"
            },
            cezar: {
                breed: "Doberman",
                age: "4 years",
                personality: "Brave, loyal",
                needs: "Large garden, activity",
                time: "10 months",
                history: "Cezar was surrendered due to the owners' lack of time. He is devoted and needs an active caregiver.",
                funFact: "Cezar loves fetching a frisbee!"
            },
            maja: {
                breed: "Dalmatian",
                age: "2 years",
                personality: "Energetic, curious",
                needs: "Lots of attention, training",
                time: "3 months",
                history: "Maja was abandoned in the countryside. She is full of energy and loves exploring new places.",
                funFact: "Maja loves jumping through puddles!"
            },
            roki: {
                breed: "Basset Hound",
                age: "5 years",
                personality: "Calm, gentle",
                needs: "Quiet environment, walks",
                time: "1 year",
                history: "Roki came to us after his owner's death. He is calm and looking for a home where he can rest.",
                funFact: "Roki loves lounging on the couch!"
            },
            tina: {
                breed: "Poodle",
                age: "3 years",
                personality: "Cheerful, sociable",
                needs: "Play, exercise",
                time: "6 months",
                history: "Tina was surrendered due to a move. She is joyful and loves being the center of attention.",
                funFact: "Tina loves dancing on two paws!"
            },
            oskar: {
                breed: "Siberian Husky",
                age: "4 years",
                personality: "Active, joyful",
                needs: "Long walks, toys",
                time: "8 months",
                history: "Oskar was wandering the streets before he came to us. He loves to run and needs an active caregiver.",
                funFact: "Oskar loves winter walks in the snow!"
            },
            zoe: {
                breed: "Shiba Inu",
                age: "2 years",
                personality: "Curious, energetic",
                needs: "Training, activity",
                time: "4 months",
                history: "Zoe was found in a park. She is full of energy and looking for a home that provides lots of fun.",
                funFact: "Zoe loves hiding her toys!"
            },
            leon: {
                breed: "Mastiff",
                age: "6 years",
                personality: "Wise, composed",
                needs: "Quiet home, diet",
                time: "1.5 years",
                history: "Leon was surrendered due to a change in life circumstances. He is wise and looking for a calm home.",
                funFact: "Leon always waits for a treat after a walk!"
            },
            burek: {
                breed: "German Shepherd",
                age: "3 years",
                personality: "Cheerful, sociable",
                needs: "Lots of exercise, toys",
                time: "6 months",
                history: "Burek was found on the street, wandering without care. He quickly proved to be a joyful dog who loves human company.",
                funFact: "Burek loves digging holes in the garden!"
            },
            reksio: {
                breed: "Labrador Retriever",
                age: "5 years",
                personality: "Calm, gentle",
                needs: "Quiet environment, regular walks",
                time: "1 year",
                history: "Reksio came to us after his owner's death. He is calm and looking for a home where he can feel safe.",
                funFact: "Reksio loves lounging by the fireplace!"
            },
            luna: {
                breed: "Border Collie",
                age: "2 years",
                personality: "Energetic, curious",
                needs: "Lots of attention, training",
                time: "3 months",
                history: "Luna was surrendered by a family that couldn't handle her energy. She loves running and learning new tricks.",
                funFact: "Luna loves learning new commands!"
            },
            max: {
                breed: "Rottweiler",
                age: "4 years",
                personality: "Brave, loyal",
                needs: "Large garden, activity",
                time: "8 months",
                history: "Max was rescued from tough conditions. He is devoted and needs an active caregiver who will give him lots of love.",
                funFact: "Max always guards his caregiver!"
            },
            bella: {
                breed: "Golden Retriever",
                age: "6 years",
                personality: "Affectionate, calm",
                needs: "Warm place, gentle care",
                time: "2 years",
                history: "Bella has spent most of her life in a shelter. She dreams of a peaceful home where she can enjoy affection.",
                funFact: "Bella loves long petting sessions!"
            },
            tofik: {
                breed: "Jack Russell Terrier",
                age: "1 year",
                personality: "Playful, shy",
                needs: "Patience, socialization",
                time: "2 months",
                history: "Tofik was abandoned as a puppy. He is full of energy but needs time to trust new people.",
                funFact: "Tofik loves chasing his own tail!"
            },
            kora: {
                breed: "Siberian Husky",
                age: "7 years",
                personality: "Wise, composed",
                needs: "Quiet home, diet",
                time: "1.5 years",
                history: "Kora was surrendered due to a move. She is wise and calm, perfect for someone who values harmony.",
                funFact: "Kora loves watching birds!"
            },
            rudi: {
                breed: "Beagle",
                age: "3 years",
                personality: "Active, joyful",
                needs: "Long walks, toys",
                time: "5 months",
                history: "Rudi was wandering in the forest before he came to us. He loves sniffing and running, an ideal companion for trips.",
                funFact: "Rudi always finds hidden treats!"
            }
        }
    }
};

function renderCarousel() {
    const carousel = document.getElementById('carousel');
    const leftArrow = document.querySelector('#main-content .left-arrow');
    const rightArrow = document.querySelector('#main-content .right-arrow');
    if (!carousel || !leftArrow || !rightArrow) {
        console.error("Carousel elements not found");
        return;
    }

    carousel.innerHTML = '';

    const lang = document.querySelector('.language-btn.active')?.dataset.lang || 'pl';
    const t = translations[lang];

    if (dogs.length === 0) {
        const message = document.createElement('p');
        message.textContent = t.no_dogs;
        message.className = 'no-liked';
        carousel.appendChild(message);
        leftArrow.classList.add('hidden');
        rightArrow.classList.add('hidden');
    } else if (dogs.length === 1) {
        const dog = dogs[0];
        const globalIndex = allDogs.findIndex(d => d.name === dog.name);
        const dogKey = dog.name.toLowerCase();
        const translatedAge = t.dogs && t.dogs[dogKey] ? t.dogs[dogKey].age : dog.age;
       
        const card = document.createElement('div');
        card.className = 'dog-card single active';
        card.innerHTML = `
            <img src="${dog.img}" alt="${dog.name}" onclick="showDetails(${globalIndex})">
            <h3>${dog.name}</h3>
            <p>🐾 ${translatedAge}</p>
            <i class="${likedDogs.includes(globalIndex) ? 'fas' : 'far'} fa-heart heart-icon ${likedDogs.includes(globalIndex) ? 'liked' : ''}" onclick="toggleLike(this, ${globalIndex})"></i>
        `;
        carousel.appendChild(card);
        leftArrow.classList.add('hidden');
        rightArrow.classList.add('hidden');
    } else {
        const totalDogs = dogs.length;
        const leftIndex = (currentIndex - 1 + totalDogs) % totalDogs;
        const centerIndex = currentIndex;
        const rightIndex = (currentIndex + 1) % totalDogs;

        [leftIndex, centerIndex, rightIndex].forEach((index, i) => {
            const dog = dogs[index];
            const globalIndex = allDogs.findIndex(d => d.name === dog.name);
            const dogKey = dog.name.toLowerCase();
            const translatedAge = t.dogs && t.dogs[dogKey] ? t.dogs[dogKey].age : dog.age;
           
            const card = document.createElement('div');
            card.className = 'dog-card' + (i === 1 ? ' active' : '');
            card.innerHTML = `
                <img src="${dog.img}" alt="${dog.name}" onclick="showDetails(${globalIndex})">
                <h3>${dog.name}</h3>
                <p>🐾 ${translatedAge}</p>
                <i class="${likedDogs.includes(globalIndex) ? 'fas' : 'far'} fa-heart heart-icon ${likedDogs.includes(globalIndex) ? 'liked' : ''}" onclick="toggleLike(this, ${globalIndex})"></i>
            `;
            carousel.appendChild(card);
        });
        leftArrow.classList.remove('hidden');
        rightArrow.classList.remove('hidden');
    }
}

function moveNewsCarousel(direction) {
    const totalNews = newsItems.length;
    if (totalNews > 1) {
        currentNewsIndex = (currentNewsIndex + direction + totalNews) % totalNews;
        renderNewsCarousel();
    }
}

function renderNewsCarousel() {
    const carousel = document.getElementById('newsCarousel');
    if (!carousel) return;

    carousel.innerHTML = '';

    if (newsItems.length === 0) {
        const message = document.createElement('p');
        message.textContent = translations[document.querySelector('.language-btn.active')?.dataset.lang || 'pl'].no_news;
        message.className = 'no-liked';
        carousel.appendChild(message);
    } else {
        const newsItem = newsItems[currentNewsIndex];
        const card = document.createElement('div');
        card.className = 'news-card active';
        card.innerHTML = `
            <h3>${newsItem.title}</h3>
            <p class="news-date">${newsItem.date}</p>
            <p>${newsItem.content}</p>
        `;
        carousel.appendChild(card);
    }
}
 
function renderLikedGrid() {
    const grid = document.getElementById('likedGrid');
    const leftArrow = document.querySelector('#liked-content .left-arrow');
    const rightArrow = document.querySelector('#liked-content .right-arrow');
    if (!grid || !leftArrow || !rightArrow) {
        console.error("Liked grid elements not found");
        return;
    }

    grid.innerHTML = '';

    const lang = document.querySelector('.language-btn.active')?.dataset.lang || 'pl';
    const t = translations[lang];

    if (likedDogs.length === 0) {
        const message = document.createElement('p');
        message.textContent = t.no_liked_dogs;
        message.className = 'no-liked';
        grid.appendChild(message);
        leftArrow.classList.add('hidden');
        rightArrow.classList.add('hidden');
        grid.classList.remove('two-dogs');
    } else if (likedDogs.length === 1) {
        const globalIndex = likedDogs[0];
        const dog = allDogs[globalIndex];
        const dogKey = dog.name.toLowerCase();
        const translatedAge = t.dogs && t.dogs[dogKey] ? t.dogs[dogKey].age : dog.age;
       
        const card = document.createElement('div');
        card.className = 'dog-card single active';
        card.innerHTML = `
            <img src="${dog.img}" alt="${dog.name}" onclick="showDetails(${globalIndex}, true)">
            <h3>${dog.name}</h3>
            <p>🐾 ${translatedAge}</p>
            <i class="fas fa-heart heart-icon liked" onclick="toggleLike(this, ${globalIndex})"></i>
        `;
        grid.appendChild(card);
        leftArrow.classList.add('hidden');
        rightArrow.classList.add('hidden');
        grid.classList.remove('two-dogs');
    } else if (likedDogs.length === 2) {
        grid.classList.add('two-dogs');
        likedDogs.forEach(globalIndex => {
            const dog = allDogs[globalIndex];
            const dogKey = dog.name.toLowerCase();
            const translatedAge = t.dogs && t.dogs[dogKey] ? t.dogs[dogKey].age : dog.age;
           
            const card = document.createElement('div');
            card.className = 'dog-card';
            card.innerHTML = `
                <img src="${dog.img}" alt="${dog.name}" onclick="showDetails(${globalIndex}, true)">
                <h3>${dog.name}</h3>
                <p>🐾 ${translatedAge}</p>
                <i class="fas fa-heart heart-icon liked" onclick="toggleLike(this, ${globalIndex})"></i>
            `;
            grid.appendChild(card);
        });
        leftArrow.classList.add('hidden');
        rightArrow.classList.add('hidden');
    } else {
        grid.classList.remove('two-dogs');
        const totalDogs = likedDogs.length;
        const leftIndex = (likedCurrentIndex - 1 + totalDogs) % totalDogs;
        const centerIndex = likedCurrentIndex;
        const rightIndex = (likedCurrentIndex + 1) % totalDogs;

        [leftIndex, centerIndex, rightIndex].forEach((index, i) => {
            const globalIndex = likedDogs[index];
            const dog = allDogs[globalIndex];
            const dogKey = dog.name.toLowerCase();
            const translatedAge = t.dogs && t.dogs[dogKey] ? t.dogs[dogKey].age : dog.age;
           
            const card = document.createElement('div');
            card.className = 'dog-card' + (i === 1 ? ' active' : '');
            card.innerHTML = `
                <img src="${dog.img}" alt="${dog.name}" onclick="showDetails(${globalIndex}, true)">
                <h3>${dog.name}</h3>
                <p>🐾 ${translatedAge}</p>
                <i class="fas fa-heart heart-icon liked" onclick="toggleLike(this, ${globalIndex})"></i>
            `;
            grid.appendChild(card);
        });
        leftArrow.classList.remove('hidden');
        rightArrow.classList.remove('hidden');
    }
}


function moveCarousel(direction) {
    const totalDogs = dogs.length;
    if (totalDogs > 1) {
        currentIndex = (currentIndex + direction + totalDogs) % totalDogs;
        renderCarousel();
    }
}

function moveLikedCarousel(direction) {
    const totalDogs = likedDogs.length;
    if (totalDogs > 2) {
        likedCurrentIndex = (likedCurrentIndex + direction + totalDogs) % totalDogs;
        renderLikedGrid();
    }
}

function toggleLike(element, index) {
    const dog = allDogs[index];
    const lang = document.querySelector('.language-btn.active')?.dataset.lang || 'pl';
    const isLiked = likedDogs.includes(index);
   
    if (isLiked) {
        likedDogs = likedDogs.filter(i => i !== index);
    } else {
        likedDogs.push(index);
    }
    localStorage.setItem('likedDogs', JSON.stringify(likedDogs));

    // Create toast notification message
    let message;
    if (lang === 'pl') {
        const verb = dog.gender === 'female' ? 'została' : 'został';
        message = isLiked
            ? `${dog.name} ${verb} usunięty/a z polubionych ❌`
            : `${dog.name} ${verb} dodany/a do polubionych! 🐶`;
    } else {
        message = isLiked
            ? `${dog.name} has been removed from favorites ❌`
            : `${dog.name} has been added to favorites! 🐶`;
    }

    // Show toast notification
    showToast(message);


    // Update main carousel
    const mainCards = document.querySelectorAll('#carousel .dog-card');
    mainCards.forEach(card => {
        const heart = card.querySelector('.heart-icon');
        const cardIndex = parseInt(card.querySelector('img').getAttribute('onclick').match(/\d+/)[0]);
        if (cardIndex === index) {
            heart.classList.toggle('fas', !isLiked);
            heart.classList.toggle('far', isLiked);
            heart.classList.toggle('liked', !isLiked);
        }
    });

    // Update liked grid
    const likedCards = document.querySelectorAll('#likedGrid .dog-card');
    likedCards.forEach(card => {
        const heart = card.querySelector('.heart-icon');
        const cardIndex = parseInt(card.querySelector('img').getAttribute('onclick').match(/\d+/)[0]);
        if (cardIndex === index) {
            heart.classList.toggle('fas', !isLiked);
            heart.classList.toggle('far', isLiked);
            heart.classList.toggle('liked', !isLiked);
        }
    });

    const detailHeart = document.getElementById('detailHeart');
    if (detailHeart && parseInt(detailHeart.getAttribute('onclick').match(/\d+/)[0]) === index) {
        detailHeart.classList.toggle('fas', !isLiked);
        detailHeart.classList.toggle('far', isLiked);
        detailHeart.classList.toggle('liked', !isLiked);
    }
    renderLikedGrid();
}

function showDetails(index, fromLiked = false) {
  const dog = allDogs[index];
  if (!dog) return;
 
  currentDogIndex = fromLiked ? likedDogs.indexOf(index) : index;
  const lang = document.querySelector('.language-btn.active')?.dataset.lang || 'pl';
  const t = translations[lang];
  const dogKey = dog.name.toLowerCase();

  // Get translated dog data if available
  const translatedDog = t.dogs && t.dogs[dogKey] ? t.dogs[dogKey] : {};

  // Update the display - only show each field once
  document.getElementById('detailImg').src = dog.img;
  document.getElementById('detailImg').alt = dog.name;
  document.getElementById('detailName').textContent = dog.name;
 
  // For each field, use either the translated version or fall back to original
  document.getElementById('detailBreed').innerHTML = `<strong>${t.dog_breed}</strong> ${translatedDog.breed || dog.breed}`;
  document.getElementById('detailAge').innerHTML = `<strong>${t.dog_age}</strong> ${translatedDog.age || dog.age}`;
  document.getElementById('detailPersonality').innerHTML = `<strong>${t.dog_personality}</strong> ${translatedDog.personality || dog.personality}`;
  document.getElementById('detailNeeds').innerHTML = `<strong>${t.dog_needs}</strong> ${translatedDog.needs || dog.needs}`;
  document.getElementById('detailTime').innerHTML = `<strong>${t.dog_time}</strong> ${translatedDog.time || dog.time}`;
  document.getElementById('detailHistory').innerHTML = `<strong>${t.dog_history}</strong> ${translatedDog.history || dog.history}`;
  document.getElementById('detailFunFact').innerHTML = `<strong>${t.dog_funfact}</strong> ${translatedDog.funFact || dog.funFact}`;

  // Update heart icon
  const detailHeart = document.getElementById('detailHeart');
  if (detailHeart) {
    detailHeart.className = likedDogs.includes(index)
      ? 'fas fa-heart heart-icon liked'
      : 'far fa-heart heart-icon';
    detailHeart.onclick = () => toggleLike(detailHeart, index);
  }
 
  document.getElementById('dogDetails').classList.add('show');
  document.getElementById('overlay').classList.add('show');
  updateDogNavigation(fromLiked);
}


function searchDogs() {
    const name = document.getElementById('searchName').value.toLowerCase().trim();
    const breed = document.getElementById('searchBreed').value;

    dogs = allDogs.filter(dog => {
        const matchesName = name ? dog.name.toLowerCase().includes(name) : true;
        const matchesBreed = breed ? dog.breed === breed : true;
        return matchesName && matchesBreed;
    });

    currentIndex = 0;
    renderCarousel();
}

function clearSearch() {
    document.getElementById('searchName').value = '';
    document.getElementById('searchBreed').value = '';
    dogs = [...allDogs];
    currentIndex = 0;
    renderCarousel();
}

function navigateDog(direction) {
    const isLikedSection = document.getElementById('liked-content').classList.contains('show');
    const source = isLikedSection ? likedDogs : allDogs.map((_, i) => i);
    const totalDogs = source.length;

    if (totalDogs > 1) {
        currentDogIndex = (currentDogIndex + direction + totalDogs) % totalDogs;
        const globalIndex = source[currentDogIndex];
        showDetails(globalIndex, isLikedSection);
    }
}

function updateDogNavigation(fromLiked = false) {
    const prevArrow = document.getElementById('prevDog');
    const nextArrow = document.getElementById('nextDog');
    const totalDogs = fromLiked ? likedDogs.length : allDogs.length;
    if (totalDogs <= 1) {
        prevArrow.classList.add('hidden');
        nextArrow.classList.add('hidden');
    } else {
        prevArrow.classList.remove('hidden');
        nextArrow.classList.remove('hidden');
    }
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (!element) return;
    const overlay = document.getElementById('overlay');
    const dogDetails = document.getElementById('dogDetails');
    overlay.classList.remove('show');
    dogDetails.classList.remove('show');
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
   
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
   
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

function showMainContent() {
    // Show all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'flex'; // or 'block' depending on your layout
    });
   
    // Hide liked section
    const likedContent = document.getElementById('liked-content');
    likedContent.style.display = 'none';
    likedContent.classList.remove('show');
   
    // Render main carousel
    renderCarousel();
    startAutoSlide();
   
    // Scroll to main content
    scrollToSection('main-content');
}

function showLiked() {
    // Hide all main sections
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
   
    // Show liked section
    const likedContent = document.getElementById('liked-content');
    likedContent.style.display = 'flex';
    likedContent.classList.add('show');
   
    // Render the liked grid
    renderLikedGrid();
   
    // Scroll to the liked section
    scrollToSection('liked-content');
}

function closeDetails() {
    document.getElementById('dogDetails').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

function closeAll() {
    const navMenu = document.getElementById('navMenu');
    const dogDetails = document.getElementById('dogDetails');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');
    const likedContent = document.getElementById('liked-content');
    const usSection = document.getElementById('us');
    const missionSection = document.getElementById('mission');
    const adoptionSection = document.getElementById('adoption');
    const temporaryHomeSection = document.getElementById('temporary-home');
    const volunteerSection = document.getElementById('volunteer');
    const scrollArrows = document.querySelector('.scroll-arrows');

    navMenu.classList.remove('show');
    dogDetails.classList.remove('show');
    overlay.classList.remove('show');
    likedContent.style.display = 'none';
    likedContent.classList.remove('show');
    mainContent.style.display = 'block';
    usSection.style.display = 'block';
    missionSection.style.display = 'block';
    adoptionSection.style.display = 'block';
    temporaryHomeSection.style.display = 'block';
    volunteerSection.style.display = 'block';
    scrollArrows.style.display = 'flex';

    renderCarousel();
    startAutoSlide();
}

function startAutoSlide() {
    stopAutoSlide();
    const isLikedSection = document.getElementById('liked-content').classList.contains('show');
    if (isLikedSection && likedDogs.length > 2) { // Only auto-slide for more than 2 liked dogs
        autoSlideInterval = setInterval(() => moveLikedCarousel(1), 5000);
    } else if (!isLikedSection && dogs.length > 1) {
        autoSlideInterval = setInterval(() => moveCarousel(1), 5000);
    }
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Language toggle functionality
function changeLanguage(lang) {
  // Update all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.dataset.translate;
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Update input placeholders
  const inputs = document.querySelectorAll('input[data-translate-placeholder]');
  inputs.forEach(input => {
    const key = input.dataset.translatePlaceholder;
    if (translations[lang][key]) {
      input.placeholder = translations[lang][key];
    }
  });

  // Update button titles
  const buttons = document.querySelectorAll('button[data-translate-title]');
  buttons.forEach(button => {
    const key = button.dataset.translateTitle;
    if (translations[lang][key]) {
      button.title = translations[lang][key];
    }
  });

  // Update active language button
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render carousels to update no-dogs messages
  renderCarousel();
  renderLikedGrid();

  // Update dog details if visible
  const dogDetails = document.getElementById('dogDetails');
  if (dogDetails.classList.contains('show')) {
    const fromLiked = document.getElementById('liked-content').classList.contains('show');
    const globalIndex = fromLiked ? likedDogs[currentDogIndex] : currentDogIndex;
    showDetails(globalIndex, fromLiked);
  }

  // Save language preference
  localStorage.setItem('lang', lang);
}

// Chatbot functionality
function initChatbot() {
    const chatbotButton = document.querySelector('.chatbot-button');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const chatbotInput = document.querySelector('.chatbot-input input');
    const chatbotSend = document.querySelector('.chatbot-input button');

    if (!chatbotButton || !chatbotWindow || !chatbotClose || !chatbotMessages || !chatbotInput || !chatbotSend) return;

    chatbotButton.addEventListener('click', () => {
        chatbotWindow.classList.toggle('show');
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('show');
    });

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const messageText = chatbotInput.value.trim();
        if (!messageText) return;

        // Add user message
        const userMessage = document.createElement('div');
        userMessage.classList.add('chatbot-message', 'user');
        userMessage.textContent = messageText;
        chatbotMessages.appendChild(userMessage);

        // Generate bot response
        const botMessage = document.createElement('div');
        botMessage.classList.add('chatbot-message', 'bot');
        botMessage.textContent = getBotResponse(messageText);
        chatbotMessages.appendChild(botMessage);

        // Clear input and scroll to bottom
        chatbotInput.value = '';
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(message) {
    // Normalize message text
    const normalizeText = (text) => {
        return text.toLowerCase()
            .trim()
            .replace(/[ąęłńóśźż]/g, match => ({
                'ą': 'a', 'ę': 'e', 'ł': 'l', 'ń': 'n',
                'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'
            })[match])
            .replace(/[^a-z0-9\s]/g, '');
    };

    const normalizedMessage = normalizeText(message);
    const lang = document.querySelector('.language-btn.active')?.dataset.lang || 'pl';
    const t = translations[lang];
   
    // Helper function to get translated dog info
    const getTranslatedDogInfo = (dog) => {
        const dogKey = dog.name.toLowerCase();
        const translatedDog = t.dogs && t.dogs[dogKey] ? t.dogs[dogKey] : {};
        return {
            breed: translatedDog.breed || dog.breed,
            age: translatedDog.age || dog.age,
            personality: translatedDog.personality || dog.personality,
            needs: translatedDog.needs || dog.needs,
            time: translatedDog.time || dog.time,
            history: translatedDog.history || dog.history,
            funFact: translatedDog.funFact || dog.funFact
        };
    };

    // Responses in both languages
    const responses = {
        pl: {
            greetings: [
                'Cześć! Jak mogę pomóc z adopcją psa? 😊',
                'Hej! Chcesz dowiedzieć się więcej o naszych psach? 🐶',
                'Witaj! Szukasz nowego przyjaciela czy informacji o adopcji?'
            ],
            adoption: [
                'Aby adoptować psa, przejdź do sekcji „Jak adoptować” na stronie. Proces obejmuje przeglądanie psów, wypełnienie formularza, rozmowę, wizytę przedadopcyjną i podpisanie umowy. Chcesz, żebym opisał każdy krok?',
                'Adopcja to prosta, ale ważna decyzja! Sprawdź zakładkę „Psy do adopcji” i wybierz swojego nowego przyjaciela. Potrzebujesz pomocy z formularzem?'
            ],
            volunteer: [
                'Chcesz zostać wolontariuszem? Super! Możesz pomagać w spacerach, zabawie z psami lub organizacji wydarzeń. Sprawdź sekcję „Wolontariat” lub napisz do nas na adoptujpsa@example.com!',
                'Wolontariat to świetny sposób na pomoc psom! Dowiedz się więcej w sekcji „Wolontariat” na stronie. 😊'
            ],
            temporary_home: [
                'Dom tymczasowy to wspaniała forma pomocy! Zapewniasz psu miłość i bezpieczeństwo, a my pokrywamy koszty. Więcej szczegółów znajdziesz w sekcji „Dom tymczasowy”.',
                'Chcesz zostać domem tymczasowym? Sprawdź sekcję „Dom tymczasowy” – to elastyczna forma wsparcia dla psów w potrzebie!'
            ],
            about_us: [
                'Jesteśmy Fundacją „Adoptuj Psa”! Od 2015 roku pomogliśmy ponad 1200 psom znaleźć domy. Dowiedz się więcej w sekcji „O nas”.',
                'Nasza misja to dawanie psom drugiego życia. Sprawdź sekcję „O nas” lub „Nasza misja”, by dowiedzieć się więcej!'
            ],
            dogs: {
                general: [
                    'Mamy wiele wspaniałych psów do adopcji! Przejdź do sekcji „Psy do adopcji”, by je poznać. 😊 Czy szukasz psa o konkretnej rasie lub charakterze?',
                    'Każdy nasz pies ma swoją historię. Sprawdź zakładkę „Psy do adopcji” i znajdź swojego nowego przyjaciela!'
                ],
                not_found: 'Nie znalazłem psa o takim imieniu. 😔 Sprawdź sekcję „Psy do adopcji”, może tam go znajdziesz! Możesz też podać inne imię.'
            },
            contact: [
                'Skontaktuj się z nami pod adresem kontakt@adoptujpsa.pl lub zadzwoń: +48 123 456 789. Możesz też sprawdzić sekcję „Wolontariat” lub „Dom tymczasowy”!',
                'Chcesz porozmawiać? Napisz na kontakt@adoptujpsa.pl lub zadzwoń: +48 123 456 789!'
            ],
            default: [
                'Hmm, nie jestem pewien, o co pytasz. 😅 Możesz zapytać o adopcję, wolontariat, domy tymczasowe lub nasze psy!',
                'Przepraszam, nie rozumiem. Spróbuj zapytać o psy, adopcję lub wolontariat, a ja postaram się pomóc! 😊'
            ]
        },
        en: {
            greetings: [
                'Hello! How can I assist with dog adoption? 😊',
                'Hi! Want to learn more about our dogs? 🐶',
                'Hey there! Looking for a new friend or adoption info?'
            ],
            adoption: [
                'To adopt a dog, visit the "How to Adopt" section. The process includes browsing dogs, filling out a form, an interview, a pre-adoption visit, and signing an agreement. Want me to explain each step?',
                'Adoption is a simple but important decision! Check the "Dogs for Adoption" tab to choose your new friend. Need help with the form?'
            ],
            volunteer: [
                'Want to volunteer? Awesome! You can help with walks, playing with dogs, or organizing events. Check the "Volunteer" section or email us at adoptujpsa@example.com!',
                'Volunteering is a great way to help dogs! Learn more in the "Volunteer" section on the site. 😊'
            ],
            temporary_home: [
                'A temporary home is a wonderful way to help! You provide love and safety, and we cover the costs. More details in the "Temporary Home" section.',
                'Want to become a temporary home? Check the "Temporary Home" section – it\'s a flexible way to support dogs in need!'
            ],
            about_us: [
                'We\'re the "Adopt a Dog" Foundation! Since 2015, we\'ve helped over 1200 dogs find homes. Learn more in the "About Us" section.',
                'Our mission is to give dogs a second chance. Check out the "About Us" or "Our Mission" sections for more!'
            ],
            dogs: {
                general: [
                    'We have many wonderful dogs for adoption! Visit the "Dogs for Adoption" section to meet them. 😊 Are you looking for a specific breed or personality?',
                    'Each of our dogs has a unique story. Check the "Dogs for Adoption" tab to find your new friend!'
                ],
                not_found: 'I couldn\'t find a dog with that name. 😔 Check the "Dogs for Adoption" section, maybe you\'ll find them there! Try another name.'
            },
            contact: [
                'Contact us at kontakt@adoptujpsa.pl or call: +48 123 456 789. You can also check the "Volunteer" or "Temporary Home" sections!',
                'Want to talk? Email kontakt@adoptujpsa.pl or call: +48 123 456 789!'
            ],
            default: [
                'Hmm, I\'m not sure what you mean. 😅 You can ask about adoption, volunteering, temporary homes, or our dogs!',
                'Sorry, I don\'t understand. Try asking about dogs, adoption, or volunteering, and I\'ll do my best to help! 😊'
            ]
        }
    };

    // Function to randomly select a response from an array
    const getRandomResponse = (responseArray) => {
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    };

    // Function to find a dog by name
    const findDogByName = (name) => {
        const normalizedName = normalizeText(name);
        return allDogs.find(dog => normalizeText(dog.name) === normalizedName);
    };

    // Extended keywords for each category
    const keywords = {
        pl: {
            greetings: ['czesc', 'witaj', 'hej', 'halo'],
            adoption: ['adoptowac', 'adopcja', 'jak adoptowac', 'chce adoptowac'],
            volunteer: ['wolontariat', 'wolontariusz', 'pomoc', 'zaangazowac'],
            temporary_home: ['dom tymczasowy', 'tymczasowy', 'opiekun tymczasowy'],
            about_us: ['o nas', 'fundacja', 'kto jestescie', 'wasza misja'],
            contact: ['kontakt', 'email', 'telefon', 'napisz', 'zadzwon'],
            dogs: ['pies', 'psy', 'podopieczni', 'jakie psy']
        },
        en: {
            greetings: ['hello', 'hi', 'hey', 'greetings'],
            adoption: ['adopt', 'adoption', 'how to adopt', 'want to adopt'],
            volunteer: ['volunteer', 'volunteering', 'help', 'get involved'],
            temporary_home: ['temporary home', 'foster', 'temporary care'],
            about_us: ['about us', 'foundation', 'who are you', 'your mission'],
            contact: ['contact', 'email', 'phone', 'write', 'call'],
            dogs: ['dog', 'dogs', 'pets', 'what dogs']
        }
    };

    // Check for keywords
    for (const category in keywords[lang]) {
        if (category === 'dogs') {
            // Check if the question is about a specific dog
            const dogNames = allDogs.map(dog => normalizeText(dog.name));
            const matchedDogName = dogNames.find(name => normalizedMessage.includes(name));
            if (matchedDogName) {
                const dog = findDogByName(matchedDogName);
                if (!dog) {
                    return responses[lang].dogs.not_found;
                }
                const translatedDog = getTranslatedDogInfo(dog);
               
                return lang === 'pl' ?
                    `${dog.name} to ${translatedDog.breed}, ma ${translatedDog.age} i jest ${translatedDog.personality.toLowerCase()}. Potrzebuje: ${translatedDog.needs}. Jest u nas od ${translatedDog.time}. ${translatedDog.history} Fun fact: ${translatedDog.funFact} Czy masz inne pytania?` :
                    `${dog.name} is a ${translatedDog.breed}, ${translatedDog.age} old, and is ${translatedDog.personality.toLowerCase()}. Needs: ${translatedDog.needs}. Has been with us for ${translatedDog.time}. ${translatedDog.history} Fun fact: ${translatedDog.funFact} Do you have other questions?`;
            }
            // General question about dogs
            if (keywords[lang].dogs.some(keyword => normalizedMessage.includes(keyword))) {
                return getRandomResponse(responses[lang].dogs.general);
            }
        } else {
            if (keywords[lang][category].some(keyword => normalizedMessage.includes(keyword))) {
                return getRandomResponse(responses[lang][category]);
            }
        }
    }

    // Default response
    return getRandomResponse(responses[lang].default);
}
}

function initLanguageToggle() {
  const languageButtons = document.querySelectorAll('.language-btn');
  languageButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      changeLanguage(lang);
    });
  });
 
  const savedLang = localStorage.getItem('lang') || 'pl';
  changeLanguage(savedLang);
}


document.addEventListener('DOMContentLoaded', () => {
    renderCarousel();
    renderLikedGrid();
    renderNewsCarousel(); // Make sure this is called
    startAutoSlide();
    initChatbot();
    initLanguageToggle(); // This will handle the initial language setting
   
    const mainCarousel = document.getElementById('carousel');
    const likedGrid = document.getElementById('likedGrid');
    if (mainCarousel) {
        mainCarousel.addEventListener('mouseenter', stopAutoSlide);
        mainCarousel.addEventListener('mouseleave', startAutoSlide);
    }
    if (likedGrid) {
        likedGrid.addEventListener('mouseenter', stopAutoSlide);
        likedGrid.addEventListener('mouseleave', startAutoSlide);
    }

    const headerTitle = document.querySelector('.header h1');
    if (headerTitle) {
        headerTitle.addEventListener('click', showMainContent);
        headerTitle.style.cursor = 'pointer';
    }

    window.addEventListener('click', (e) => {
        const navMenu = document.getElementById('navMenu');
        if (navMenu && !navMenu.contains(e.target) && !e.target.closest('.nav-icon') && !e.target.closest('.nav-menu')) {
            navMenu.classList.remove('show');
            document.getElementById('overlay').classList.remove('show');
        }
    });
});

// Handle language toggle
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.dataset.lang;

        // Update active class
        document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Save preference
        localStorage.setItem('lang', selectedLang);

        // Update translations
        applyTranslations(selectedLang);
    });
});

// Load saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'pl';
    document.querySelector(`.language-btn[data-lang="${savedLang}"]`).classList.add('active');
    applyTranslations(savedLang);
});

// Function to update translated content
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholder separately if needed
    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

//