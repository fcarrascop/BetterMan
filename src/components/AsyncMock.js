import rascadorLenguaImg from "../img/tongueScraper.jpg";
import riñoneraImg from "../img/banano.png";
import kitUnasImg from "../img/herramientasUnas.png";
import kitPinzasImg from "../img/juegodePinzas.png";
import kitOidosImg from "../img/limpiadorOreja.png";
import maquinaAfeitarImg from "../img/maquinaAfeitar.png";
import rasuradoraFacialImg from "../img/rasuradora.png";
import relojImg from "../img/reloj.png";


const ListaItems = [
    {
        "nombre": "Rascador de lengua",
        "id": 1,
        "precio": 4990,
        "img": `${rascadorLenguaImg}`,
        "comentario": "Descubre un antiguo ritual de higiene presente en diversas culturas, especialmente en Asia: el raspador de lengua. Este simple pero efectivo instrumento te permite limpiar tu lengua y boca de restos de comida, bacterias y potenciales virus que pueden residir en su superficie. Añade este hábito saludable a tu rutina diaria y disfruta de una boca más fresca y limpia.",
        "categoria": "higiene"

    },
    {
        "nombre": "Riñonera",
        "id": 2,
        "precio": 16990,
        "img": `${riñoneraImg}`,
        "comentario": "Completa tu estilo con nuestra riñonera negra elegante, el complemento perfecto para tus aventuras urbanas. Fabricada con materiales de alta calidad y acabados impecables, esta riñonera combina funcionalidad y estilo a la perfección. Con múltiples compartimentos, es ideal para llevar tus objetos esenciales de forma segura y organizada mientras mantienes un aspecto moderno y sofisticado. Ya sea para tus salidas diarias o para viajes ligeros, esta riñonera te ofrece comodidad y elegancia en cada paso.",
        "categoria": "moda"
    },
    {
        "nombre": "Herramientas de pedicura",
        "id": 3,
        "precio": 9990,
        "img": `${kitUnasImg}`,
        "comentario": "¡Descubre la excelencia en cuidado de uñas con nuestro conjunto de cortauñas de acero inoxidable! Fabricado con acero inoxidable de primera calidad, este conjunto ofrece durabilidad y resistencia al desgaste para un rendimiento duradero. Empaquetado como un conjunto completo, este paquete ofrece gran valor y satisfacción al cliente. Además, estas herramientas de pedicura importadas de Alemania son conocidas por su alta calidad y eficacia en el cuidado de las uñas. ¡Haz que el cuidado de tus uñas sea una experiencia de lujo con nuestro conjunto de cortauñas de acero inoxidable!",
        "categoria": "higiene"
    },
    {
        "nombre": "Juego de pinzas para cejas",
        "id": 4,
        "precio": 6990,
        "img": `${kitPinzasImg}`,
        "comentario": `Descubre la perfección en el cuidado de tus cejas con nuestro conjunto de pinzas de precisión multifuncionales. Diseñadas para ofrecer versatilidad y eficacia, estas pinzas son la elección perfecta para el cuidado del vello facial, la eliminación de astillas y el tratamiento de vellos encarnados.
        Con una cabeza plana, inclinada y puntiaguda, estas pinzas te brindan la herramienta adecuada para cada tarea. Su diseño de cabeza al ras y afilada sin huecos garantiza una extracción precisa y sin esfuerzo, sin dañar tu piel sensible.
        Fabricadas con acero inoxidable de primera calidad y con una funda de cuero para mayor durabilidad, estas pinzas son una inversión en calidad y comodidad. Además, cada par de pinzas viene con un manguito protector para cubrir las puntas y garantizar su seguridad y prolongada vida útil.,
        `,
        "categoria": "higiene"
    },
    {
        "nombre": "Limpiador de oídos",
        "id": 5,
        "precio": 4999,
        "img": `${kitOidosImg}`,
        "comentario": `Sumérgete en una experiencia de limpieza de oídos completa y sin preocupaciones con nuestro kit de acero inoxidable para la eliminación de cera de oído. Con características diseñadas para brindar comodidad y eficacia, este conjunto es tu solución definitiva para el cuidado de tus oídos.
        `,
        "categoria": "higiene"
    },
    {
        "nombre": "Máquina rasuradora corporal",
        "id": 6,
        "precio": 24990,
        "img": `${maquinaAfeitarImg}`,
        "comentario": `Descubre la máxima comodidad y precisión en el afeitado corporal con nuestra innovadora máquina rasuradora corporal. Equipada con tecnología avanzada de cuchillas de acero inoxidable y cerámica suave, esta máquina garantiza una nitidez excepcional y reduce el riesgo de irritación durante el afeitado. Disfruta de un afeitado sin tirones, recortando todo el vello corporal de manera eficiente y confortable.`,
        "categoria": "higiene"
    },
    {
        "nombre": "Máquina de afeitar",
        "id": 7,
        "precio": 49990,
        "img": `${rasuradoraFacialImg}`,
        "comentario": "Esta maquinilla de afeitar, hecha de acero inoxidable de alta calidad, garantiza durabilidad y resistencia. Tiene un diseño elegante en negro y ergonómico, el cual permite un manejo cómodo y seguro.",
        "categoria": "higiene"
    },
    {
        "nombre": "Reloj Casio Elegante",
        "id": 8,
        "precio": 49990,
        "img": `${relojImg}`,
        "comentario": "El reloj análogo Casio MTP-1183A-1A es sencillamente elegante. Tiene un diseño minimalista que te permite enfocarte en lo realmente importante y aprovechar de la mejor forma tu día. Porque sabemos que la puntualidad es a ratos difícil de conseguir, pero implacablemente importante...Simpleza e intención. ¿Se necesita algo más para llegar a la hora?",
        "categoria": "moda"
    }
];

export const getProducts =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(ListaItems)
        }, 500)
    })
};

export const getProductsById = (productoId)=>{
    return new Promise((resolve)=>{
        resolve(ListaItems.find((prod)=> productoId == prod.id))
    }, 500)
};

export const getProductsByCategory = (productoCat)=>{
    return new Promise((resolve)=>{
        resolve(ListaItems.filter((prod)=> productoCat === prod.categoria))
    }, 500)
};

