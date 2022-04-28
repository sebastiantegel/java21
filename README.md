# Demon - react

## För Java 21

Varje projekt kommer att gå igenom ett nytt koncept för react. Du kan klona ner hela repot eller bara det projekt du är intresserad av.
För att klona ner repot, skapa en ny mapp på din dator. Ställ dig i den nya mappen med hjälp av en terminal, t.ex. git bash. Kör sedan kommandot:

```sh
git clone https://github.com/sebastiantegel/java21.git
```

För att installera alla beroenden behöver ni sedan gå in i det projekt ni vill köra och däri köra kommandot:

```sh
npm i
```

### React - Introduktion

Detta projekt visar hur ett projekt ser ut och hur det går att skapa komponenter samt grunderna till state och props.
För att läsa med om koncepten går det bra att läsa här:

- [Create a new react app](https://reactjs.org/docs/create-a-new-react-app.html)
- [JSX or TSX - What is it?](https://reactjs.org/docs/introducing-jsx.html)
- [Rendering stuff](https://reactjs.org/docs/rendering-elements.html)
- [Props and state](https://reactjs.org/docs/components-and-props.html)

### React - Events_lists_rendering

I detta projekt går vi igenom händelser, t.ex. onClick och onChange. Vi använder lite knep för att kunna hålla flera textrutor synkade med vårt state i komponenten Register.
Sedan visar jag villkordstyrd rendering genom en Loader. Detta följs upp av en lista i komponenten ListOfNumbers.

Mer information finns att läsa på följande länkar:

- [Handling events](https://reactjs.org/docs/handling-events.html)
- [Conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
- [Lists](https://reactjs.org/docs/lists-and-keys.html)

### React - Forms

I detta projekt hanterar vi formulär och tittar på lite olika tekniker för att hantera input-fält. Även onSubmit gås igenom och ni kommer att lära er att fortsätta använda state.

- [Forms](https://reactjs.org/docs/forms.html)

### React - effect_axios

Nu har vi börjat kommunicera med api:er och för detta ändamål använder vi axios. Konceptet med axios gås igenom tillsammans med när det är en bra idé att anropa axios. T.ex. från en useEffect.

- [UseEffect Hook](https://reactjs.org/docs/hooks-effect.html)
- [Axios documentation](https://axios-http.com/docs/intro)

### React - router

Vi går igenom koncept med router och visar hur vi kan skapa layout-komponenter. Hur vi kan skicka information till en route och hur vi väl där tar emot informationen. Vi går även igenom hur vi kan skapa en enklare navigering som använder routern för att uppdatera vår sida.

- [React router](https://reactrouterdotcom.fly.dev/docs/en/v6)

### React - Styled app

Detta projekt visar hur ni kan använda styled components för att styla er applikation. Vi kommer att visa grundläggande styled components men även gå igenom hur vi kan använda props för att göra våra styled components lite mer dynamiska. 