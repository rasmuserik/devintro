# Udvikling af apps til web og mobiltelefoner

## Introduktion

Denne bog er en introduktion til programmering, og hvordan man kan lave programmer til web og mobiltelefoner.

Bogen består af tre dele.
Første del er en introduktion til programmering og grafik, som sætter os i stand til at tegne på skærmen.
Anden del fokuserer på brugerinteraktion, det vil sige hvordan vi håndterer at brugeren trykker på knapper og lignende.
Tredje del handler om datastrukturer og giver også flere værktøj til hvordan vi kan lave programmer.

Den bedste måde at lære at programmere på, er ved at gøre det.
Eksemplerne i bogen kan køres ved at gå ind på http://dev.solsort.dk/
og finde eller indtaste programmet, og så trykke kǿr.
Prøv at byg videre og ændre i programmerne, så de opføre sig anderledes,
eksperimentér, leg og skab. 


## Programmering og grafik

#### Kald af funktioner

At programmere er at skabe nye måde at bruge den funktionalitet der er i computeren.
Når man laver programmer, skrives de i programmeringssprog. 
Programmeringssprog adskiller sig fra mennskesprog ved at de er langt mere stringente, - computerer kan ikke tænke, så hvis der mangler et komma eller et punktum fejler programmet.
Sammen med programmeringssproget er der en samling af funktioner, som kan udføres/"kaldes".

Prøv eksempelvis at gå ind på http://dev.solsort.dk/ og indtast følgende program:

    smiley();

Dette tegner en smiley på skærmen. Paranteserne efter `smiley` betyder at det er en funktion vi kalder. Semikolonnet til sidst fortæller at kommandoen er slut, - semikolon i programmering minder om punktum i menneskesprog og bruges til at afslutte sætninger.

#### Skildpaddegrafik

Skildpaddegrafik er en enkel måde man kan programmere grafik på skærmen.

Forestil dig at du flyver og ser ned på en sandstrand hvor der kravler en skildpadde, og efter skildpadden er der et spor i sandet.
I så fald kunne du tegne en firkant i sandet ved at få skildpadden til at gå lige frem, derefter dreje 90° grader til venstre, gå frem, til venstre, frem, venstre, frem. 
Ved skildpaddegrafik kan man forestille sig man har en virtuel skildpadde, så følgende programkode vil tegne en firkant:

    turtle.forward();
    turtle.left();
    turtle.forward();
    turtle.left();
    turtle.forward();
    turtle.left();
    turtle.forward();


Herunder et lidt længere program, - prøv eventuelt om du kan se hvad det tegner ved at håndkøre det - selv udføre programmet, måske ved at tegne på et stykke ternet papir. Prøv herefter også at få computeren til at køre det.

$simplesmiley$

Lange programmer bliver let uoverskuelige, og man kan komme til at gentage sig selv.
Et vigtigt værktøj når man laver programmer er selv at definere funktioner, så ovenstående program kunne i stedet skrives således:

$simplesmiley2$

`function` er et særligt ord i programmeringssproget, der betyder at her defineres en ny funktion. De krøllede paranteser angiver starten og slutningen på det den nye funktion skal gøre. Vi kan herefter udføre al koden mellem krølleparanteserne ved blot at kalde funktionen.

Bemærk at navne på funktioner kun kan indeholde bogstaver, tal, samt `_` og `$`. Når vi skrive `turtle.forward()`, kalder vi faktisk en `forward` funktion der høre til et særligt `turtle` objekt. Mere om dette senere.

Opgave: prøv at ændre programmet så det tegner to smilies, hint: brug `turtle.jump()` til at flytte skildpadden så de to smilies ikke kommer oven i hinanden.


#### Funktioner



# Bog

- Introduktion

- Programmering og grafik
  - Emner
    - Skildpaddegrafik
    - Fraktaler
    - Bitmapgrafik
  - Programmer
    - Koch-kurven
    - Sierpinskis tæppe
    - Planter
    - Billedmanipulation
    - Mandelbrot fraktal
    - Random walk
    - Brownian motion -> map
- Brugerinteraktion
  - Callbacks
  - Programmer
    - Gæt et tal
    - Tegning
    - Whac-A-Mole
    - Tron
    - Quiz 1
- Datastrukturer
  - Emner
    - Lister
    - Objekter
  - Programmer
    - Nationalbudget
    - Huskespil

Indhold
- kald af funktioner
- definition af funktioner
- værdier
- typer
- variable (immutable)
- betingelser
- gentagelse



# Classes

- Regular mixed-level lab
- 1-2 hour intro
- 1-2 day workshop

# IDE

- Editor ie. ace

# Mobile

- Mobile app for running the applications

