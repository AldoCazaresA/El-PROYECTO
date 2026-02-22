/* =========================================
   1. EFECTO DEL HEADER AL HACER SCROLL
   ========================================= */
window.onscroll = function() {
    const header = document.querySelector(".main-header");
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 5%";
        header.style.backgroundColor = isDarkMode ? "#121212" : "#1a252f";
    } else {
        header.style.padding = "1rem 5%";
        header.style.backgroundColor = isDarkMode ? "rgba(18, 18, 18, 0.95)" : "rgba(44, 62, 80, 0.95)";
    }
};

/* =========================================
   2. LÓGICA DE FORMULARIOS DE CONTACTO
   ========================================= */
function mostrarFormulario(idFormulario, botonActivo) {
    const formularios = document.querySelectorAll('.card-form');
    formularios.forEach(form => form.style.display = 'none');

    const formSeleccionado = document.getElementById(idFormulario);
    if (formSeleccionado) formSeleccionado.style.display = 'block';

    const botones = document.querySelectorAll('.filter-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    botonActivo.classList.add('active');
}

// Envío de formularios (Previene recarga)
document.querySelectorAll('form').forEach(formulario => {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("¡Mensaje enviado con éxito! 🚀\nEn breve nos pondremos en contacto contigo.");
        this.reset();
    });
});

/* =========================================
   3. MODO OSCURO
   ========================================= */
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeBtn.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

/* =========================================
   4. LÓGICA DE TRADUCCIÓN
   ========================================= */
const texts = {
    es: {
        inicio: "Inicio", historia: "Historia", servicios: "Servicios", proyectos: "Proyectos", testimonios: "Testimonios",
        hero_title: "Innovación Digital a tu Alcance", hero_desc: "Transformamos ideas complejas en realidades tecnológicas simples y elegantes.",
        contacto_btn: "Contactanos", hist_text: "Nacimos con la visión de cerrar la brecha entre la creatividad y el código...",
        anos_experiencia: "Años de Experiencia", proyectos_exitosos: "Proyectos Exitosos", clientes_satisfechos: "Clientes Satisfechos",
        serv_web_desc: "Sitios modernos, rápidos y totalmente responsivos.",
        serv_app_desc: "Desarrollo nativo para iOS y Android con la mejor UX.",
        serv_seo_desc: "Posicionamos tu marca en los primeros lugares de Google.",
        proyectos_desc: "Una muestra de nuestros trabajos más recientes y destacados.",
        test_title: "Lo que dicen nuestros clientes",
        testimonial_1: "EL PROYECTO transformó nuestra idea en una app increíble.",
        testimonial_2: "El soporte técnico es de primer nivel. Siempre disponibles.",
        testimonial_1_author: "Roberto Gómez", testimonial_2_author: "Laura Martínez",
        footer_about: "Creamos soluciones digitales innovadoras.",
        back_btn: "Volver al Inicio", contact_title: "Canales de Atención",
        send_btn: "Solicitar Cotización", ticket_btn: "Abrir Ticket", apply_btn: "Enviar Postulación", footer_rights: "Todos los derechos reservados."
    },
    en: {
        inicio: "Home", historia: "History", servicios: "Services", proyectos: "Projects", testimonios: "Testimonials",
        hero_title: "Digital Innovation at Your Fingertips", hero_desc: "We transform complex ideas into simple, elegant technological realities.",
        contacto_btn: "Contact Us", hist_text: "We were born with the vision of bridging the gap...",
        anos_experiencia: "Years of Experience", proyectos_exitosos: "Successful Projects", clientes_satisfechos: "Satisfied Clients",
        serv_web_desc: "Modern, fast, and fully responsive websites.",
        serv_app_desc: "Native development for iOS and Android with the best UX.",
        serv_seo_desc: "We position your brand in the top spots of Google search.",
        proyectos_desc: "A showcase of our most recent and outstanding works.",
        test_title: "What Our Clients Say",
        testimonial_1: "THE PROJECT transformed our idea into an amazing app.",
        testimonial_2: "The technical support is top-level.",
        testimonial_1_author: "Robert Gomez", testimonial_2_author: "Laura Martinez",
        footer_about: "We create innovative digital solutions.",
        back_btn: "Back to Home", contact_title: "Customer Service Channels",
        send_btn: "Request Quote", ticket_btn: "Open Ticket", apply_btn: "Submit Application", footer_rights: "All rights reserved."
    },
    fr: {
        inicio: "Accueil", historia: "Histoire", servicios: "Services", proyectos: "Projets", testimonios: "Témoignages",
        hero_title: "Innovation Digitale à Votre Portée", hero_desc: "Nous transformons des idées complexes en réalités technologiques.",
        contacto_btn: "Contactez-nous", hist_text: "Nous sommes nés avec la vision...",
        anos_experiencia: "Années d'Expérience", proyectos_exitosos: "Projets Réussis", clientes_satisfechos: "Clients Satisfaits",
        serv_web_desc: "Sites modernes, rapides et entièrement responsives.",
        serv_app_desc: "Développement natif pour iOS et Android.",
        serv_seo_desc: "Nous positionnons votre marque dans les meilleurs résultats.",
        proyectos_desc: "Une vitrine de nos travaux les plus récents.",
        test_title: "Ce que disent nos clients",
        testimonial_1: "LE PROJET a transformé notre idée.",
        testimonial_2: "Le support technique est de premier ordre.",
        testimonial_1_author: "Robert Gomez", testimonial_2_author: "Laura Martinez",
        footer_about: "Nous créons des solutions digitales innovantes.",
        back_btn: "Retour à l'Accueil", contact_title: "Canaux de Service Client",
        send_btn: "Demander un Devis", ticket_btn: "Ouvrir un Ticket", apply_btn: "Soumettre une Candidature", footer_rights: "Tous droits réservés."
    }
};

const langSelect = document.getElementById('lang-select');
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.querySelectorAll('[data-key]').forEach(elemento => {
            const key = elemento.getAttribute('data-key');
            if (texts[lang][key]) {
                // CORRECCIÓN: Usamos innerHTML dentro del bucle para permitir negritas
                elemento.innerHTML = texts[lang][key];
            }
        });
    });
}

/* =========================================
   5. LÓGICA DEL CHATBOT
   ========================================= */
/* =========================================
   DICCIONARIO DEL CHATBOT TRILINGÜE
   ========================================= */

/* =========================================
   5. LÓGICA DEL CHATBOT MULTILINGÜE
   ========================================= */

const botResponses = {
    es: {
        "hola": "¡Hola! Soy el asistente de EL PROYECTO. ¿En qué puedo ayudarte?",
        "servicios": "Ofrecemos Diseño Web, Apps Móviles y SEO. ¿Te interesa alguno en específico?",
        "precio": "Los precios dependen de cada proyecto. Puedes solicitar una cotización en la sección de Contacto.",
        "web": "Nuestros sitios web son responsivos y optimizados para Google.",
        "contacto": "Puedes escribirnos por WhatsApp o llenar el formulario en nuestra página de Contacto.",
        "gracias": "¡De nada! Estoy aquí para ayudar.",
        "proyectos": "Contamos con una amplia gama de proyectos exitosos. ¡Revisa nuestra sección de Proyectos!",
        "ubicacion": "Nuestra oficina central está en Monterrey, Nuevo León, pero trabajamos con clientes de todo el mundo.",
        "horario": "Nuestro equipo está disponible de lunes a viernes, de 9:00 AM a 6:00 PM.",
        "cotizacion": "Para darte un presupuesto exacto, por favor llena el formulario en la sección de 'Contacto' o envíanos un WhatsApp.",
        "tiempo": "El tiempo de entrega depende de la complejidad. Una landing page suele tardar 1 semana, mientras que una App completa de 4 a 8 semanas.",
        "equipo": "Somos un grupo de desarrolladores, diseñadores y expertos en marketing apasionados por la tecnología.",
        "mantenimiento": "Sí, ofrecemos planes de mantenimiento mensual para asegurar que tu sitio siempre esté actualizado y seguro.",
        "vacantes": "¡Siempre buscamos talento! Puedes enviar tu CV en la página de Contacto seleccionando 'Vacantes'.",
        "quien eres": "Soy el Asistente Virtual de EL PROYECTO, aquí para resolver tus dudas técnicas y comerciales.",
        "adios": "¡Fue un gusto ayudarte! Espero hablar contigo pronto. ¡Ten un excelente día!",
        "ayuda": "Puedo informarte sobre nuestros servicios, precios, ubicación o contacto.",
        "ia": "Utilizo una lógica de palabras clave para entender tus necesidades de forma rápida.",
        "default": "No estoy seguro de entenderte, pero intenta preguntando por 'servicios' o 'contacto'."
    },
    en: {
        "hello": "Hello! I'm THE PROJECT's assistant. How can I help you?",
        "hi": "Hi there! How can I help you?",
        "services": "We offer Web Design, Mobile Apps, and SEO. Are you interested in any of these?",
        "price": "Prices depend on each project. You can request a quote in the Contact section.",
        "web": "Our websites are responsive and Google-optimized.",
        "contact": "You can reach us via WhatsApp or by filling out the form on our Contact page.",
        "thanks": "You're welcome! I'm here to help.",
        "projects": "We have a wide range of successful projects. Check out our Projects section!",
        "location": "Our main office is in Monterrey, Nuevo Leon, but we work with clients worldwide.",
        "schedule": "Our team is available Monday to Friday, from 9:00 AM to 6:00 PM.",
        "quote": "For an accurate quote, please fill out the 'Contact' form or send us a WhatsApp message.",
        "time": "Delivery time depends on complexity. A landing page takes 1 week, while an App takes 4-8 weeks.",
        "team": "We are a group of developers and designers passionate about technology.",
        "maintenance": "Yes, we offer monthly maintenance to keep your site updated and secure.",
        "jobs": "We're always looking for talent! Send your CV via the Contact page under 'Jobs'.",
        "who are you": "I'm THE PROJECT's Virtual Assistant, here to solve your technical and commercial doubts.",
        "bye": "It was a pleasure helping you! Hope to talk soon. Have a great day!",
        "help": "I can tell you about our services, prices, location, or contact info.",
        "ia": "I use keyword logic to understand your needs quickly.",
        "default": "I'm not sure I understand, but try asking about 'services' or 'contact'."
    },
    fr: {
        "bonjour": "Bonjour ! Je suis l'assistant de LE PROJET. Comment puis-je vous aider ?",
        "salut": "Salut ! Comment puis-je vous aider ?",
        "services": "Nous proposons du Design Web, des Apps Mobiles et du SEO. Êtes-vous intéressé ?",
        "prix": "Les prix dépendent de chaque projet. Demandez un devis dans la section Contact.",
        "web": "Nos sites web sont responsifs et optimisés pour Google.",
        "contact": "Contactez-nous via WhatsApp ou remplissez le formulaire sur notre page Contact.",
        "merci": "De rien ! Je suis là pour vous aider.",
        "projets": "Nous avons de nombreux projets réussis. Consultez notre section Projets !",
        "emplacement": "Notre bureau est à Monterrey, Mexique, mais nous travaillons dans le monde entier.",
        "horaire": "Notre équipe est disponible du lundi au vendredi, de 9h00 à 18h00.",
        "devis": "Pour un devis précis, remplissez le formulaire de 'Contact' ou envoyez un WhatsApp.",
        "temps": "Le délai dépend de la complexité. 1 semaine pour une landing page, 4-8 semaines pour une App.",
        "equipe": "Nous sommes un groupe de développeurs et designers passionnés par la technologie.",
        "maintenance": "Oui, nous offrons une maintenance mensuelle pour garder votre site sécurisé.",
        "emplois": "Nous cherchons toujours du talent ! Envoyez votre CV via la page Contact (Jobs).",
        "qui es-tu": "Je suis l'Assistant Virtuel de LE PROJET, ici pour vos questions techniques et commerciales.",
        "au revoir": "C'était un plaisir de vous aider ! À bientôt. Bonne journée !",
        "aide": "Je peux vous renseigner sur nos services, prix, emplacement ou contact.",
        "ia": "J'utilise une logique de mots-clés pour comprendre vos besoins rapidement.",
        "default": "Je ne comprends pas bien, essayez de demander 'services' ou 'contact'."
    }
};

function toggleChat() {
    const chatContainer = document.getElementById('chatbot');
    if (chatContainer) {
        const isFlex = window.getComputedStyle(chatContainer).display === 'flex';
        chatContainer.style.display = isFlex ? 'none' : 'flex';
    }
}

// Función para actualizar los botones de respuesta rápida según el idioma
function updateQuickReplies(lang) {
    const btnServicios = document.querySelector(".quick-replies button:nth-child(1)");
    const btnContacto = document.querySelector(".quick-replies button:nth-child(2)");

    const labels = {
        es: { serv: "Servicios", cont: "Contacto" },
        en: { serv: "Services", cont: "Contact" },
        fr: { serv: "Services", cont: "Contact" }
    };

    if (btnServicios && btnContacto) {
        btnServicios.textContent = labels[lang].serv;
        btnServicios.setAttribute("onclick", `quickReply('${labels[lang].serv.toLowerCase()}')`);
        
        btnContacto.textContent = labels[lang].cont;
        btnContacto.setAttribute("onclick", `quickReply('${labels[lang].cont.toLowerCase()}')`);
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const container = document.getElementById('chat-messages');
    const langSelect = document.getElementById('lang-select');
    let currentLang = langSelect?.value || 'es'; 
    
    if (!input || !container || input.value.trim() === "") return;

    const userText = input.value.toLowerCase().trim();
    container.innerHTML += `<div class="user-msg-container"><p class="user-msg">${input.value}</p></div>`;
    input.value = ""; 
    container.scrollTop = container.scrollHeight;

    const typingId = "typing-" + Date.now();
    container.innerHTML += `<p class="bot-msg" id="${typingId}">...</p>`;

    setTimeout(() => {
        document.getElementById(typingId)?.remove();
        let response = null;
        let detectedLang = currentLang;

        // 1. BUSCAR EN TODOS LOS IDIOMAS
        for (let langKey in botResponses) {
            for (let wordKey in botResponses[langKey]) {
                if (userText.includes(wordKey)) {
                    response = botResponses[langKey][wordKey];
                    detectedLang = langKey; // Detectamos el idioma de la palabra
                    break;
                }
            }
            if (response) break;
        }

        // 2. SI DETECTA OTRO IDIOMA, ACTUALIZA LA PÁGINA Y LOS BOTONES
        if (detectedLang !== currentLang) {
            if (langSelect) {
                langSelect.value = detectedLang;
                langSelect.dispatchEvent(new Event('change')); // Dispara el traductor de la página
            }
            updateQuickReplies(detectedLang); // Traduce los botones del chat
        }

        if (!response) response = botResponses[detectedLang]["default"];

        container.innerHTML += `<p class="bot-msg">${response}</p>`;
        container.scrollTop = container.scrollHeight;
    }, 800);
}

function quickReply(text) {
    const input = document.getElementById('user-input');
    if (input) {
        input.value = text;
        sendMessage();
    }
}

function toggleChat() {
    const chat = document.getElementById('chatbot');
    if (chat) {
        const isVisible = window.getComputedStyle(chat).display === 'flex';
        chat.style.display = isVisible ? 'none' : 'flex';
    }
}