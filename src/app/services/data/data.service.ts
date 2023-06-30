import { Injectable } from '@angular/core';
import { Servizio, img, siOcuppa } from 'src/app/models/shared/model';
import { Observable, of, throwError } from 'rxjs';
import { NavigationEnd, Route, Router } from '@angular/router';
import { Contact } from 'src/app/models/shared/model';
import { Socio } from 'src/app/models/shared/model';
@Injectable({
  providedIn: 'root',
})
export class DataService {



  constructor(private router: Router) { }


  //all the services of the interprice, i decided to set an array of imgs to make the code more esay and in that way model 
  //the ngFor without the necesity of take an specific img, example <img [src]="item.img[0].url" alt="" class="md:h-88 h-screen w-full object-none opacity-80">
  //here the img 0 is the img of home, the img of serviziDetail will be the the [1] in that way is esaier to create and understand the html
  //the same dilema with description and siOCuppa   !!
  
  private servizioList: Servizio[] = [
    {
      id: 0,
      name: 'Impianti Termoidraulici',
      homeDescription: '',
      homeTitle: 'Termoidraulici',
      description: 
      [
        {id: 1, text: "L’attività di progettazione, viene svolta nell’ambito di impianti termoidraulici per il settore civile e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori....",},
        {id: 2, text: "Progettazione impianti termoidraulici e reti trasporto gas e liquidi"},
        {id: 3, text: "L’attività di progettazione, viene svolta nell’ambito di impianti termoidraulici per il settore civile e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori."}
      ],
    
        img: [{ id: 1, url: '/assets/img/home/img33.jpg' },
      {id:2, url: '/assets/img/home/img18.jpg' }],
        siOcuppa:[
          { id: 1, info: "impianti di climatizzazione nel settore civile, industriale, ospedaliero eccs" },
  { id: 2, info: "reti energetiche per teleriscaldamento abbinati a sistemi di generazione" },
  { id: 3, info: "reti acquedottistiche urbane e extraurbane" },
  { id: 4, info: "reti fognarie" },
  { id: 5, info: "centrali di produzione aria propanata e centrali di stoccaggio gas" },
  { id: 6, info: "impianti gas medicali in ambienti ad uso medico" },
  { id: 7, info: "impianti di rilevazione incendio e/o spegnimento" },
  { id: 8, info: "reti cittadine di distribuzione gas metano ad uso civile ed industriale in BP" },
  { id: 9, info: "reti di distribuzione gas naturale, metano, GPL, aria propanata, aria compressa, ecc." },
  { id: 10, info: "impianti a biomassa o biogas" },
  { id: 11, info: "impianti solari o di solar cooling" },
  { id: 12, info: "analisi e simulazioni energetiche" }
  
        ]
    },

    {
      id: 1,
      name: 'Impianti Elettrici',
      homeDescription: '',
      homeTitle: 'Impianti Elettrici',
      description:
       [
        {id: 1, text: "L’attività di progettazione elettrica viene svolta per impianti elettrici MT e BT nel settore civile, industriale e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori....",},
        {id: 2, text: "L’attività di progettazione elettrica viene svolta per impianti elettrici MT e BT nel settore civile, industriale e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori."},
   
      ],
      img: [{ id: 1, url: '/assets/img/home/img13.jpg' },
      { id: 1, url: '/assets/img/home/img19.jpg' }],
      
      siOcuppa:[
        {id: 0, info: "Impianti in luoghi particolari ad alto rischio di incendio, locali di pubblico spettacolo, ambienti con pericolo di esplosione, ad uso medico e di sicurezza."},
        {id: 1, info: "Reti cablate."},
        {id: 2, info: "Impianti di rivelazione incendio e antintrusione."},
        {id: 3, info: "Progettazione di impianti parafulmine."},
        {id: 4, info: "Impianti di illuminazione pubblica con valutazione economica attualizzata delle diverse tipologie in uso."},
        {id: 5, info: "Impianti fotovoltaici."},
        {id: 6, info: "Analisi dei carichi, delle contemporaneità e dei consumi di energia."}

      ]
    },
    
    {
      id: 2,
      name: 'Riqualificazione Energetica',
      homeDescription: '',
      homeTitle: 'Riqualificazione Energetica',
      description: [
        {id: 1, text: "L’attività di progettazione architettonica è volta alla realizzazione di opere pubbliche e di opere private, con particolare attenzione ai canoni di risparmio energetico e di consulenza alla progettazione “efficiente”, con studio dei particolari esecutivi e dell’eliminazione di ponti termici ed acustici....",},
        {id: 2, text: "Progettazione architettonica e strutturale"},
        {id: 3, text: "L’attività di progettazione architettonica è volta alla realizzazione di opere pubbliche e di opere private, con particolare attenzione ai canoni di risparmio energetico e di consulenza alla progettazione “efficiente”, con studio dei particolari esecutivi e dell’eliminazione di ponti termici ed acustici."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img29.jpg' },
      { id: 2, url: '/assets/img/home/img20.jpg' }],
      
      siOcuppa:[
        {id:1, info: "edifici residenziali a basso impatto ambientale e a basso consumo"},
        {id:2, info: "edifici di importanza pubblica"},
        {id:3, info: "edifici tutelati dai beni culturali"},
        {id:4, info: "responsabili di progetto e coordinamento progettazione"},
        {id:5, info: "strutture architettoniche speciali quali serre fotovoltaiche o coperture in legno di grandi dimensioni"},
        {id:6, info: "interventi di riqualificazione energetica di edifici esistenti"},
     
        
      ]
    },
    {
      id: 3,
      name: 'Illuminazione Pubblica',
      homeDescription: '',
      homeTitle: 'Illuminazione Pubblica',
      description: [
        {id: 1, text: "Redazione e sviluppo piani regolatori di illuminazione comunale.....", },
        {id: 2, text: "Redazione e sviluppo Piani Regolatori di Illuminazione Comunale", },
        {id: 3, text: "L’attività di sviluppo dei piani regolatori di illuminazione pubblica richiesti dalla Legge Provinciale n.16/2007 viene svolta in stretto contatto con l’amministrazione."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img17.jpg' },
      { id: 2, url: '/assets/img/home/img21.png' }],
      
      siOcuppa:[
        {id: 0, info: "Identificazione degli obiettivi del Piano."},
{id: 1, info: "Rilievo dello stato attuale."},
{id: 2, info: "Formulazione di una soluzione integrata per l'illuminazione."},
{id: 3, info: "Definizione della distribuzione dei punti luce."},
{id: 4, info: "Specifica delle prestazioni richieste per le singole zone."},
{id: 5, info: "Selezione delle tipologie di riferimento costruttive e impiantistiche."},
{id: 6, info: "Considerazione dell'inserimento ambientale."},
{id: 7, info: "Classificazione delle strade secondo la normativa UNI e il codice della strada."},
{id: 8, info: "Elaborazione della prima bozza da condividere con l'amministrazione comunale."},
{id: 9, info: "Fase propedeutica per la stesura finale del piano."},
{id: 10, info: "Consegna del Piano alla Committenza per l'approvazione."},
{id: 11, info: "Inserimento del Piano nel Regolamento Edilizio Comunale."},
     
      ]
    },
    {
      id: 4,
      name: 'Certificazioni e Analisi Energetiche',
      homeDescription: '',
      homeTitle: 'Certificazioni Energetiche',
      description: [
       
      ],
      img: [{ id: 1, url: '/assets/img/home/img10.jpg' },
    {id:2, url: '/assets/img/home/img25.png'}],
      
      siOcuppa:[
       
   
      ]
    },
    {
      id: 5,
      name: 'Risparmio Energetico',
      homeDescription: '',
      homeTitle: 'Risparmio Energetico',
      description: [
        {id: 1, text: "Stea Progetto affronta l’argomento delle analisi energetiche ponendo l’attenzione a tutti gli aspetti in cui la problematica si articola......",},
        {id: 2, text: 'studio per analizzare il fabbisogno di energia elettrica. Partendo dai dati di consumo di prodotti petroliferi per il riscaldamento e dalla richiesta misurata dalla rete elettrica, lo studio illustra le attuali esigenze dell’utenza. Considerazioni sulla destinazione d’uso e sul tipo di attività consentono di dividere i consumi per comparti.'},
        {id: 3, text: 'analisi le fonti di approvvigionamento. Una volta calcolati i fabbisogni si analizzano le fonti di approvvigionamento, cioè le disponibilità di materie prime in termini di combustibili, e gli impianti di produzione, di calore ed elettricità. Il bilancio energetico valuta così le diverse modalità di produzione con particolare focus alle energie rinnovabili ed assimilate.'},


      ],
      img: [{ id: 1, url: '/assets/img/home/img32.jpg' }],
      
      siOcuppa:[
        {id:1, info: 'Approntamento del bilancio energetico complessivo vanno definendo alcuni obiettivi nel medio e lungo periodo operando attraverso interventi su più livelli:'},
        {id:2, info: 'interventi per la riduzione dei consumi;'},
        {id: 3, info: 'aumento della produzione da energie rinnovabili; '}, 
        {id:4 , info: 'promozione di un utilizzo efficiente dell’energia.'},
        {id:5, info: 'Gli obiettivi non possono prescindere per un verso dallo sviluppo previsto, per l’altro dai vincoli imposti dagli strumenti di pianificazione urbanistica, ovvero i PRG vigenti. Per il raggiungimento degli obiettivi vendono indicate le modalità di utilizzo degli incentivi presenti sia a livello nazionale sia a livello locale ed i possibili assetti societari rivolti alla gestione delle iniziative nel ramo energetico.'}
      ]
    },
    {
      id: 6,
      name: 'Sicurezza Cantieri',
      homeDescription: '',
      homeTitle: 'Sicurezza Cantieri',
      description: [
        {id: 1, text: "La nostra struttura svolge attività di coordinamento della sicurezza mediante predisposizione di Piani di Sicurezza e Coordinamento in fase progettuale e attività diretta di prevenzione e controllo presso i cantieri durante la fase esecutiva dell’opera......",},
        {id: 2, text: "Tra le attività svolte nei cantieri la Sicurezza è divenuta, con il passare degli anni, un argomento sempre di maggiore importanza. La nostra struttura ottempera alle disposizioni normative e legislative in ai sensi del Decreto Legislativo 81/2008 e ss. mm. e ii. svolgendo attività di coordinamento della sicurezza sia mediante la predisposizione di Piani di Sicurezza e Coordinamento in fase progettuale, sia mediante attività diretta di prevenzione e controllo presso i cantieri durante la fase esecutiva dell’opera. Nel corso degli anni si è avuta la possibilità di acquisire ed incrementare l’esperienza e di conseguire maggiore competenza grazie allo svolgimento di corsi specifici di aggiornamento."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img31.webP' },
      { id: 2, url: '/assets/img/home/img26.jpg' }],
      
      siOcuppa:[ 
      {id: 0, info: "Cantieri per la realizzazione di infrastrutture di interesse comunale"},
      {id: 1, info: "Cantieri per la nuova installazione elementi tecnologici"},
      {id: 2, info: "Cantieri per la costruzione edile e la realizzazione impiantistica di attività abitative residenziali, terziarie e industriali"},
      {id: 3, info: "Cantieri per la costruzione edile e la realizzazione impiantistica di attività tecnologiche"},
      {id: 4, info: "Cantieri di ristrutturazione impiantistica"},
      {id: 5, info: "Cantieri per la realizzazione di infrastrutture di interesse comunale"}]
    },
  ];

socioList: Socio[] = [
{id:1, name: 'ing. Giulia Benatti', description: [
  {id:0 , text: 'Iscritta al n. 2248 dell’Albo degli Ingegneri della Provincia di Trento  '},
  { id: 1, text: "Laurea in ingegneria civile – ind. Idraulica, conseguita presso l’Università degli Studi di Ferrara in data 09/02/2001 con voto 110/110, con tesi di laurea dal titolo “Modello di evoluzione altimetrica del fiume Po: analisi e previsioni di abbassamenti futuri”" },
{ id: 2, text: "Abilitazione all’esercizio della libera professione nell’agosto 2001, numero di iscrizione all’Albo degli Ingegneri n° 2248." },
{ id: 3, text: "Certificatrice energetica presso Odatech Trento n. AA00135" },
{ id: 4, text: "Certificatrice energetica presso Cened Lombardia n. 6267" },
{ id: 5, text: "Certificatrice energetica Emilia Romagna n.06536" },
{ id: 6, text: "Iscritta al n. TN02248I00672 dell’elenco dei tecnici abilitati per le certificazioni antincendio di cui al DM 05/08/2011" },
{ id: 7, text: "Esperta in Gestione dell’Energia in conformità alla norma UNI CEI 11339:2009 – settore Civile e Industriale – certificato n. 16-03261" },
{ id: 8, text: "Membro del Consiglio di Amministrazione Distretto Tecnologico Trentino Società consortile a r. l. – dal giugno 2016" },
{ id: 9, text: "Corso base per progettisti presso l’Agenzia CasaClima di Bolzano della durata di 20 ore formative" },
{ id: 10, text: "Corso avanzato per progettisti presso l’Agenzia CasaClima di Bolzano della durata di 40 ore formative" },
{ id: 11, text: "“Corsi di formazione in materia di Lavori Pubblici” presso il Collegio dei Periti industriali di Trento" },
{ id: 12, text: "Corso di formazione presso la sede della Società Aermec a Bevilacqua (VR) dal titolo “Corso su esempi di progettazione per termotecnici”" },
{ id: 13, text: "Corso di formazione presso la sede della Società Aermec a Bevilacqua (VR) dal titolo “Corso per progettisti”" },
{ id: 14, text: "Corso di formazione sulla termoregolazione e contabilizzazione presso l’Ordine degli Ingegneri di Trento in collaborazione con la Ditta Coster" },
{ id: 15, text: "Capacità servizi energetici:\n\n– capacità/esperienza nel campo amministrativo, finanziario, legale e contrattuale attinenti i contratti a garanzia del risultato\n\n– competenza nella gestione dell’energia e conoscenza dei mercati energetici\n\n– competenza per la progettazione nelle aree di intervento\n\n– capacità di realizzare l’intervento di miglioramento dell’efficienza energetica, compreso l’acquisto di beni e servizi necessari, la messa in servizio e il collaudo." },
{ id: 16, text: "Attività didattica\n\n2018 Progetto LifePrepair: docenza modulo base ed avanzato – Unità didattiche Area Tecnologica.\n\nCorso “Riqualificazione green dell’edilizia privata: ripartire dai condomini”\n\norganizzato da APRIE, fra gennaio ed aprile 2018, con 50 corsisti appartenenti a diverse categorie professionali: liberi professionisti, imprenditori artigiani, amministratori di condominio, rappresentanti del Tavolo Condomini.\n\nDocenza sul tema “Impiantistica condominiale e risparmio energetico negli edifici, interventi edilizi e di efficienza energetica sul fabbricato, fase di pianificazione e fase di esecuzione”." },
{ id: 17, text: "2016 Relatrice sul tema “Energia e spazio costruito. Docenza modulo “Riqualificazione energetica degli edifici pubblici.” per conto di Trentino School of Management di Trento." },
{ id: 18, text: "2016 Relatrice per conto della Provincia Autonoma di Trento e del Consorzio dei Comuni Trentini. Incontri territoriali sul tema dell’efficientamento e risparmio energetico." },
{ id: 19, text: "2015 Relatrice sul tema “Illuminazione pubblica e titoli di efficienza energetica” per il Collegio dei Periti di Varese." },
{ id: 20, text: "2013 Relatrice sul tema “Trasformare il costruito. Docenza modulo “Piani di fattibilità ed intervento di efficientamento energetico sul tema: E.S.Co.” per conto del CNA/SHV di Bolzano." },
{ id: 21, text: "2013 Relatrice sul tema “Modelli finanziari legati al risparmio energetico” relativa all’Innovatione School-Progetto AlpBC del’Area Tecnologie Alpine-Cluster Bau." },
{ id: 22, text: "2012 Relatrice sul tema “I nuovi Titoli di efficienza energetica (TEE) o certificati bianchi all’interno del modulo “Gestione dell’efficienza energetica” nell’ambito del “Corso per l’Esperto della frigoconservazione delle mele e dei piccoli frutti” istituito presso il Centro Istruzione e Formazione della Fondazione Edmund Mach." },
{ id: 23, text: "2005 Relatrice per il corso “Sempre più donne in una professione che costruisce il futuro – Energy Manager”, finanziato dalla Provincia Autonoma di Trento, Dipartimento Politiche Sociali e del Lavoro, Ufficio Fondo Sociale ed Europeo, e SATEF s.r.l." },
{ id: 24, text: "2004 Collaboratrice dell’Energy Service s.r.l. come relatore per il corso di formazione aziendale dal titolo “Riscaldamento e condizionamento”." },
{ id: 25, text: "Incarichi particolari\n\n2001 Collaborazione con l’Università di Ferrara e con l’Università di Bologna, dipartimento DSTART, nell’ambito di uno studio finanziato dalla Regione Lombardia, sull’abbassamento dell’alveo del fiume Po dal ponte della Becca a Pontelagoscuro, al fine di valutare la navigabilità del tratto e la quota da imporre all’avanconca del porto di Cremona per permettere l’ingresso delle navi commerciali." },
{ id: 26, text: "2001 Collaborazione con l’Università di Bologna, dipartimento DSTART, e il G.P.I.A. di Bologna, nell’ambito di uno studio finanziato dalla CMC da presentare al Ministero delle Opere Pubbliche, sugli effetti dell’attività antropica (estrazione di inerti) sull’abbassamento dell’alveo del fiume Po dal ponte della Becca a Pontelagoscuro." },
{ id: 27, text: "2004-5 Responsabile del settore impiantistico presso la Società Civil Engineering di Arco (TN), società di ingegneria operante in tutti i campi della progettazione architettonica e ingegneristica." },
{ id: 28, text: "2006 Progetto per l’allestimento della mostra “Presepi dal Trentino a Roma. Dolce Bambin Gesù” presso l’aula Paolo VI della Citta del Vaticano, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 29, text: "2007-11 Progetto per l’utilizzo dell’energia solare in connessione al vettore idrogeno per produrre energia elettrica presso il Rifugio “Ai Caduti dell’Adamello”, in collaborazione con il Dipartimento di Fisica dell’Università di Trento" },
{ id: 30, text: "2007 Progetto per l’allestimento della mostra “I presepi del Trentino fra arte, tradizione e solidarietà” presso il Braccio Carlo Magno della Città del Vaticano, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 31, text: "2008 Progetto per l’allestimento della mostra “I presepi Trentini a Costantinopoli” presso la Chiesa di S. Antonio ad Istanbul, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 32, text: "2010 Governatorato Città del Vaticano: progetto illuminotecnico per la nuova Fontana di San Giuseppe da posizionarsi all’interno dei Giardini Vaticani." },
{ id: 33, text: "2011 Collaborazione all’allestimento del Presepe presso la Basilica della Natività a Betlemme – Palestina, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 34, text: "2012 Progetto illuminotecnico per il Castello del Buonconsiglio a Trento. Coordinatore del gruppo di lavoro per la progettazione e la realizzazione degli impianti di illuminazione interni ed esterni." },
{ id: 35, text: "2012 Progetto per l’allestimento della mostra “Un Presepe e tanta arte popolare. L’omaggio di Tesero ai Maestri dei Presepi” presso la Città del Vaticano, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 36, text: "2013 Progetto per l’allestimento della mostra “Il presepe della regina”. Mostra allestita a Buckingham Palace presso l’invito del principe Carlo d’Inghilterra, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 37, text: "2013 Progetto per l’allestimento della mostra “I presepi del Trentino a Rio de Janeiro”, presso l’Istituto Italiano di Cultura di Rio de Janeiro, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 38, text: "2013 Progetto per l’allestimento della mostra “Il presepe di Niccolò e Giò Musella”. Mostra allestita presso la Casa del Mantegna di Mantova, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 39, text: "2013 Progetto per l’allestimento della mostra “I presepi del Trentino a Budapest”, presso l’Istituto Italiano di Cultura di Budapest, in collaborazione con l’Associazione Amici del Presepe di Tesero" },
{ id: 40, text: "2014 Progetto per l’allestimento della mostra “I presepi del Trentino a Varsavia”, presso l’Istituto Italiano di Cultura di Varsavia, in collaborazione con l’Associazione Amici del Presepe di Tesero" }
], img:[{id:1, url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}]},
{id:1, name:'per. ind. Paolo Carlini', description:[{id:1, text:'Diploma di perito industriale con specializzazione elettrotecnica, conseguito presso l’I.T.I.S. “M. Buonarroti” di Trento in data luglio 1992'},
{id:2, text:'Abilitazione all’esercizio della libera professione nell’ottobre 1997, numero di iscrizione all’Albo dei Periti Industriali n° 1834.'},
{id:3, text:'Socio dal 1990 al 1998 in primaria azienda specializzata del settore elettrico, ha svolto mansioni di responsabile ufficio tecnico e direttore tecnico di cantiere per opere da elettricista.'},
{id:4, text:'Socio dal 1998 al 2008 dello Studio Associato ST.A.IN. e ST.A.IN. Engineering Srl – Trento'},
{id:5,text:'Abilitato ai sensi della D.L. 22/01/2008 n°37 (ex L.46/90) art.1 comma a), b), g)'},
{id:6, text:'Abilitato ai sensi del D.Lgs. 09/04/2008 n°81 (ex D.Lgs. 494/96) a seguito del corso di 120 ore ed in possesso dei requisiti richiesti dalla Legge per lo svolgimento di coordinatore in fase di progettazione ed esecuzione di opere.'},
{id:7,text:'Corsi di formazione in materia di Lavori Pubblici” presso il Consorzio dei Comuni Trentini di Trento 2004'},
{id:8, text: 'Corso di formazione su impianti fotovoltaici presso il CESI a Milano 2008'},
{id:0, text:'1999-2003 Docente per diverse ditte impiantistiche di corsi FSE di aggiornamento per gli impianti elettrici.'}], img:[{id:1, url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}]},



{id:2, name:'Alto Garda Servizi Spa', description:[], img:[{id:1, url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}]}
]


  //get all the services; check the models to understand the array
  getServizioList(): Servizio[] {
    return this.servizioList;
  }


  getSocio(): Socio[]{
    return this.socioList;
  }
  //dinamic routing...
  getServiizioDetailById(id: number): Servizio | undefined {
    const servizio =  this.servizioList.find(servizio => servizio.id === id);
    if(!servizio){
      this.router.navigate(['/404']);
    }
    return servizio;1
  }


  getSocioById(id: number): Socio | undefined {
    const socio = this.socioList.find(socio => socio.id === id);
    if (!socio) {
      this.router.navigate(['/404']); // Reemplaza '/404' con la ruta real de tu página 404
    }
    return socio;
  }
//end of the home and service info
//<--------------------------------------------------------------------------------------------------------------------------------------->





//contact info
  private contact: Contact[] = [
    {id:1, title: "Telefono:", info: '0464 512776'},
    { id:2,title: "Email:", info: 'info@steaprogetto.com'},
    { id:3,title: "Indirizzo:", info: 'Via Santa Caterina, 60 - 38062 Arco TN'},
  ]



getContact(): Contact[]{
  return this.contact
}
//get the contact info
//end of contact section

}
