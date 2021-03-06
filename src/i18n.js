import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: {
      "Kim jesteśmy?": "Kim jesteśmy?",
      Oferta: "Oferta",
      Realizacje: "Realizacje",
      Kontakt: "Kontakt",
      "Identyfikacja wizualna": "Identyfikacja wizualna",
      "Projektowanie stron www": "Projektowanie stron www",
      "Projekty graficzne": "Projekty graficzne",
      Drukarnia: "Drukarnia",
      Sceneografia: "Sceneografia",
      "Materiały reklamowe": "Materiały reklamowe",
      "Gadżety reklamowe": "Gadżety reklamowe",
      "Reklama zewnętrzna": "Reklama zewnętrzna",
      onas1:
        "Naszą firmę tworzą ludzie kreatywni, zainteresowani otaczającym  nas światem marketingu. Myślimy nieszablonowo i staramy się, żeby nasze projekty również takie pozostały. Projektujemy strony www, które są intuicyjne, proste w obsłudze oraz interaktywne. Tworzenie stron internetowych odbywa się u nas na podstawie gotowych oraz sprawdzonych modeli w przypadku większych serwisów lub na podstawie indywidualnych wytycznych otrzymanych od klienta. Każdy projekt jest inny i do każdego podchodzimy indywidualnie.",
      onas2:
        "Grafika, reklama zewnętrzna oraz szeroko pojęta poligrafia to kolejna gałąź naszej działalności, w której chętnie podejmiemy się współpracy z Państwem. Zajmujemy się przygotowywaniem projektów materiałów reklamowych, które pozostają spójne z wizerunkiem Państwa firmy, dzięki czemu pasują one do marki która jest kreowana oraz budzą pozytywne skojarzenia. Ulotki, broszury, wizytówki... aż do druku na drewnie - oferujemy Państwu produkty nieszablonowe, które będą nieodzownym elementem Państwa wizerunku. Nie mają Państwo pomysłu, ale wiadomy jest cel? <b>Zapraszamy do kontaktu!</b> Nie możemy doczekać się wspólnego projektu z przemyślanym, zaplanowanym i konkurencyjnym elementem strategii biznesowej",
    },
    "Działamy kreatywnie z pasją": "Działamy kreatywnie z pasją",
    "Kompleksowa obsługa: projekt – wykonanie – wydruk":
      "Kompleksowa obsługa: projekt – wykonanie – wydruk",
    "Indywidualne podejście do klienta": "Indywidualne podejście do klienta",
    "Doświadczenie w branży sceneograficznej":
      "Doświadczenie w branży sceneograficznej",
    "Wiedza, profesjonalizm, konsekwencja":
      "Wiedza, profesjonalizm, konsekwencja",
    "Szybkość realizowanych projektów": "Szybkość realizowanych projektów",
    "Bezproblemowa i szybka komunikacja": "Bezproblemowa i szybka komunikacja",
    "10 lat doświadczenia w poligrafii": "10 lat doświadczenia w poligrafii",
    "Silnik naszego zespołu. Dokładniej twórca silników. Odpowiedzialny za to, żeby klient mógł łatwo zarządzać swoją stroną. Pasjonat Jury Krakowsko-Częstochowskiej, gdzie spędza większość weekendów.":
      "Silnik naszego zespołu. Dokładniej twórca silników. Odpowiedzialny za to, żeby klient mógł łatwo zarządzać swoją stroną. Pasjonat Jury Krakowsko-Częstochowskiej, gdzie spędza większość weekendów.",
      'Wyznawca powiedzenia Carpe Diem - "Żyj chwilą" i tak właśnie stara się żyć zarówno przy realizacji nowych projektów jak i w życiu osobistym. Pełen pasji i pomysłów. Zimą wielbiciel narciastwa. Wiosną lubi pieszewędrówki po górach i współne rodzinne wycieczki rowerowe. Kreatywna i pozytywna osoba w naszym zespole.':
      'Wyznawca powiedzenia Carpe Diem - "Żyj chwilą" i tak właśnie stara się żyć zarówno przy realizacji nowych projektów jak i w życiu osobistym. Pełen pasji i pomysłów. Zimą wielbiciel narciastwa. Wiosną lubi pieszewędrówki po górach i współne rodzinne wycieczki rowerowe. Kreatywna i pozytywna osoba w naszym zespole.',
      'Odpowiedzialny za to, żeby strona nie była "kolejnym nudnym Wordpressem". W naszym zespole dba o aspekt wiuzalny projektów, a do każdego pochodzi indywidualnie. Wolny czas spędza uprawiająć kolarsto górskie któremu poświęca się od ponad 15 lat, oraz przy grach planszowych i karciankach.':
      'Odpowiedzialny za to, żeby strona nie była "kolejnym nudnym Wordpressem". W naszym zespole dba o aspekt wiuzalny projektów, a do każdego pochodzi indywidualnie. Wolny czas spędza uprawiająć kolarsto górskie któremu poświęca się od ponad 15 lat, oraz przy grach planszowych i karciankach.',
    "Masz pytania?": "Masz pytania?",
    "Skontaktuj sie z nami": "Skontaktuj sie z nami",
    "Musisz wypełnić imię": "Musisz wypełnić imię",
    "Musisz wypełnić email": "Musisz wypełnić email",
    "Musisz wypełnić treść wiadomości": "Musisz wypełnić treść wiadomości",
    Imię: "Imię",
    Email: "Email",
    Wiadomość: "Wiadomość",
    "Musisz zaakceptować politykę prywatności": "",
    Wyślij: "Wyślij",
    "Wszelkie Prawa Zastrzeżone": "Wszelkie Prawa Zastrzeżone",
    "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych oraz ogólnym rozporządzeniem o ochronie danych osobowych w związku z realizacją zgłoszenia. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem/am poinformowany/a, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Evastigo.":"Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych oraz ogólnym rozporządzeniem o ochronie danych osobowych w związku z realizacją zgłoszenia. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem/am poinformowany/a, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Evastigo."
  },
  bu: {
    translation: {
      "Kim jesteśmy?": "bu",
      Oferta: "bu",
      Realizacje: "bu",
      Kontakt: "bu",
      "Identyfikacja wizualna": "bu",
      "Projektowanie stron www": "bu",
      "Projekty graficzne": "bu",
      Drukarnia: "bu",
      Sceneografia: "bu",
      "Materiały reklamowe": "bu",
      "Gadżety reklamowe": "bu",
      "Reklama zewnętrzna": "bu",
      onas1: "bu",
      onas2: "bu",
      "Działamy kreatywnie z pasją": "bu",
      "Kompleksowa obsługa: projekt – wykonanie – wydruk": "bu",
      "Indywidualne podejście do klienta": "bu",
      "Doświadczenie w branży sceneograficznej": "bu",
      "Wiedza, profesjonalizm, konsekwencja": "bu",
      "Szybkość realizowanych projektów": "bu",
      "Bezproblemowa i szybka komunikacja": "bu",
      "10 lat doświadczenia w poligrafii": "bu",
      "Silnik naszego zespołu. Dokładniej twórca silników. Odpowiedzialny za to, żeby klient mógł łatwo zarządzać swoją stroną. Pasjonat Jury Krakowsko-Częstochowskiej, gdzie spędza większość weekendów.":
        "bu123",
        'Wyznawca powiedzenia Carpe Diem - "Żyj chwilą" i tak właśnie stara się żyć zarówno przy realizacji nowych projektów jak i w życiu osobistym. Pełen pasji i pomysłów. Zimą wielbiciel narciastwa. Wiosną lubi pieszewędrówki po górach i współne rodzinne wycieczki rowerowe. Kreatywna i pozytywna osoba w naszym zespole.': "bu",
        'Odpowiedzialny za to, żeby strona nie była "kolejnym nudnym Wordpressem". W naszym zespole dba o aspekt wiuzalny projektów, a do każdego pochodzi indywidualnie. Wolny czas spędza uprawiająć kolarsto górskie któremu poświęca się od ponad 15 lat, oraz przy grach planszowych i karciankach.':
        "bu",
      "Masz pytania?": "bu",
      "Skontaktuj sie z nami": "bu",
      "Musisz wypełnić imię": "bu",
      "Musisz wypełnić email": "bu",
      "Musisz wypełnić treść wiadomości": "bu",
      Imię: "bu",
      Email: "bu",
      Wiadomość: "bu",
      "Musisz zaakceptować politykę prywatności": "bu",
      Wyślij: "bu",
      "Wszelkie Prawa Zastrzeżone":"bu",
      "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych oraz ogólnym rozporządzeniem o ochronie danych osobowych w związku z realizacją zgłoszenia. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem/am poinformowany/a, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Evastigo.":"bu"
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pl",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
