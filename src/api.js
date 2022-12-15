const heroes = [
{
    "id": 1,
    "name" : 'Spider man',
    "species": "Human",
    'image': 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Foto-Homem-Aranha-PNG-1016x1024.png',
    "description":`Sobre o personagem: Peter Parker era um adolescente órfão, tímido e franzino, dedicado aos estudos e com poucos amigos além de seus tios que o criaram, o casal Ben e May Parker. Mas a vida de Peter mudou quando visitou uma exposição de ciências e foi picado por uma aranha radioativa, fruto de um experimento realizado ali. Logo, Peter descobriu que adquiriu os poderes da aranha: a capacidade de se fixar a paredes e grande força física, além de um “sentido de aranha” que o avisa sobre situações perigosas. A princípio, Peter tentou ganhar dinheiro com seus poderes, ao participar de eventos de luta e aparecendo na televisão com um uniforme que criou. Porém, uma noite Peter não prendeu um ladrão após vê-lo cometer um crime, pois não considerava aquilo sua responsabilidade. Pouco tempo depois, o mesmo ladrão matou o tio de Peter e, após prendê-lo, o rapaz jurou combater o crime e defender os inocentes como o espetacular Homem-Aranha ao perceber que “grandes poderes trazem grandes responsablidades”.
    Poderes e habilidades: O Homem-Aranha tem força sobre-humana, proporcional à de uma aranha, pode fixar-se a paredes e tetos, incrível agilidade e possui um “sentido de aranha” que o avisa sobre o perigo. Um químico fantástico, criou uma teia de aranha artificial, que pode usar para balançar-se entre prédios e prender vilões.
    Aliados e coadjuvantes: May Parker, sua tia; J. Jonah Jameson, editor do jornal Clarim Diário; Flash Thompson, um rival nos tempos de escola e hoje grande amigo de Peter; Mary Jane Watson, ex-mulher e namorada ocasional; Matt Murdock, advogado cego que é a identidade secreta do herói Demolidor
    Inimigos principais: Norman Osborn, industrial que já usou a identidade do vilão Duende Verde; o Rino, que usa uma armadura de rinoceronte que amplia sua força; Mysterio, um criminoso que usa truques de mágica; Doutor Octopus, o cientista Otto Octavius, que usa braços artificiais para cometer seus crimes; Lagarto, o cientista Curt Conners, que se transforma num réptil gigante
    Principais roteiristas: Stan Lee, Steve Ditko, Peter David, Len Wein, Brian Michael Bendis, Roger Stern
    Principais desenhistas: Steve Ditko, Mike Wieringo, Ron Frenz, Gil Kane, Todd McFarlane, John Byrne, Sal Buscema, Ross Andru, Mark Bagley, John Romita.`,
    "trailer": "https://rr3---sn-bg0eznsk.googlevideo.com/videoplayback?expire=1671154806&ei=FnibY-mMIYzRkgaL6Z_YAw&ip=35.86.17.199&id=o-AB0yM-aL8ptNK4mYdKiiqzim5BbKOqXuAhT7VpTkpyHD&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=0jcaMNf9RXXqDE7k2q8QwhYK&gir=yes&clen=6714436&dur=173.166&lmt=1640460713676173&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5535434&n=4OZ_weSVYFj1oEzM&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKbkilCD0RdJkwruIOqYitRPY0yEqzFGdVPdqFK3BvwsAiEAgOW6utwfidbLamet_kW49388aNHOWt861Srz9kCXxvs%3D&redirect_counter=1&cm2rm=sn-nx5z77z&req_id=f3ff44ce52c2a3ee&cms_redirect=yes&mh=2H&mip=2804:d55:588e:e700:dfca:f119:51e7:f7f8&mm=34&mn=sn-bg0eznsk&ms=ltu&mt=1671133023&mv=m&mvi=3&pl=40&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgNfqhUs02onwRIb61eUYIPA2wv9D0bQcZVLjHhegJr9ECIQCqy7LeaDo9IpQ4xUgu6MIyfxweNgoxC-1vRYB1fsYAGg%3D%3D"

},
{
    "id": 2,
    "name" : 'Venon',
    "species": "Alien",
    'image': 'https://www.seekpng.com/png/full/16-169414_venom-venom-marvel.png',
    "description":`Venom é um personagem ficcional das histórias em quadrinhos na série do Homem-Aranha do Universo Marvel, publicadas pela Marvel Comics. Apesar de já ter tido minisséries próprias, a maioria de suas aparições é como inimigo do personagem Homem-Aranha. Apesar de ter seu lado como vilão, Venom também é um anti-herói. Seu hospedeiro é Eddie Brock. Venom é um simbionte alienígena formado a partir de um líquido, material orgânico de espessura. A característica marcante de Venom, além do uniforme negro, é a desproporcional e assustadora mandíbula, desenhada no traço de Todd MacFarlane. Antes de fundir-se ao simbionte e tornar-se Venom, Eddie Brock era repórter do jornal O Clarim Diário, e foi demitido por Homem-Aranha.`,
    "trailer": "https://rr3---sn-bg0eznze.googlevideo.com/videoplayback?expire=1671155870&ei=PnybY5HwENSbkwa5spvYCg&ip=34.218.45.199&id=o-ADMJ0-XvUjdVuZqkiMHpHKxqXrltlBO50SZ6a8lkm15b&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=zIJlkW9X0Cy8nEXelCW1_tsK&gir=yes&clen=4577803&dur=174.499&lmt=1670058149519011&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5535434&n=a8gYwZKZCafCiFLg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAN-HtedfSruQQjTjfgxQOkJgAaBnjaMfi9mcFF5l7vLbAiAU-ZcysW3_TJfs-Weg_eDGArdxdljUYPqUivJmVzj7TQ==&redirect_counter=1&cm2rm=sn-nx5sr7e&req_id=c4452fd71441a3ee&cms_redirect=yes&mh=vh&mip=2804:d55:588e:e700:dfca:f119:51e7:f7f8&mm=34&mn=sn-bg0eznze&ms=ltu&mt=1671133978&mv=m&mvi=3&pl=40&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAK24p2pMR1wtOoOdhERIJK9pZwzrTEQJNubp6cGcevu5AiEA6XczRfaFmdNMccf8RuO-ihy3xacvO4VBGmsRTToHr0w%3D"

},
{
    "id": 3,
    "name" : 'Thanos',
    "species": "Alien",
    'image': 'https://www.seekpng.com/png/full/180-1802643_thanos-freetoedit-thanos-png.png',
    "description": "Ele é um gênio que consegue criar esquemas que causam grandes problemas para seus inimigos. E, fisicamente, ele possui também força sobre-humana, durabilidade extrema e reflexos mais rápidos do que o normal. Para além disso, Thanos possui telepatia, teletransporte e transmutação.",

},

{ 
    
    "id": 4,
    "name" : 'Magneto',
    "species": "Mutant",
    'image': 'https://www.nicepng.com/png/full/37-370004_magneto-vs-battles-wiki-fandom-powered-magneto-png.png',
    "description":"Magneto é um mutante com enormes poderes de manipulação de campos magnéticos, além de controlar qualquer tipo de metal, incluindo o Adamantium. "
},
{ 
    "id": 5,
    "name" : 'Hulk ',
    "species": "Mutant",
    'image': 'https://www.nicepng.com/png/full/3-32926_speed-drawing-hulk-grey-hulk-png.png',
    "description": " Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar de uma bomba por ele desenvolvida."
},
{ 
    "id": 6,
    "name" : 'Wolverine',
    "species": "Mutant",
    'image': 'https://www.nicepng.com/png/full/4-41633_wolverine-free-png-image-wolverine-clipart.png',
    "description": "Ele é um mutante que possui sentidos afiados, capacidades físicas aprimoradas, habilidade regenerativa poderosa conhecida como fator de cura e três garras retratáveis ​​de osso em cada mão. Wolverine foi retratado de forma variada como membro do X-Men, Tropa Alfa e Vingadores."
},
{   "id": 7,
    "name" : 'Capitão America',
    "species": "Human",
    'image': 'https://www.nicepng.com/png/full/4-44494_52-images-of-captain-america-clipart-captain-america.png',
    "description": "O Capitão América é a identidade heroica de Steve Rogers. Além disso, é considerado como o primeiro Vingador. Em suma, o personagem nasceu em 1941, na revista Captain America Comics #1. Ademais, o super herói foi criado por Joe Simon e Jack Kirby, dos estúdios da Marvel Comics."
},
{ 
    "id": 8,
    "name" : 'Gamora',
    "species": "Alien",
    'image': 'https://www.nicepng.com/png/full/127-1278421_guardians-of-the-galaxy-clipart-gamora-marvel-contest.png',
    "description": "Gamora tem uma personalidade bem fria, uma consequência de tudo o que já viveu, no caso, quando sua família foi morta na sua frente e o rígido treinamento que recebeu para tornar-se uma assassina muito experiente, o que resultou na sua atual titulação."
},
{   "id": 9,
    "name" : 'Batman',
    "species": "Human",
    'image': 'https://www.nicepng.com/png/full/2-24460_possible-justice-buster-e-15-batman-vs-superman.png',
    "description": "A identidade secreta do Batman é Bruce Wayne, um bilionário americano, playboy, magnata de negócios, filantropo e dono da corporação Wayne Enterprises. Depois de testemunhar o assassinato dos seus pais enquanto criança, Wayne jurou vingança contra os criminosos — um juramento moderado por um ideal justiça."
}
]
export default heroes;