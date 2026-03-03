/* =========================================
   1. VARIABLES GLOBALES Y TRADUCCIONES
   ========================================= */
const texts = {
    es: {
        // Navegación y Botones Comunes
        inicio: "Inicio",
        historia: "Historia",
        servicios: "Servicios",
        proyectos: "Proyectos",
        testimonios: "Testimonios",
        privacidad: "Privacidad",
        contacto_btn: "Contáctanos",
        back_btn: "Volver al Inicio",

        // Sección Hero
        hero_title: "Innovación Digital a tu Alcance",
        hero_desc: "Transformamos ideas complejas en realidades tecnológicas simples y elegantes.",

        // Sección Historia & Stats
        hist_text: "Nacimos con la visión de cerrar la brecha entre la creatividad y el código...",
        anos_experiencia: "Años de Experiencia",
        proyectos_exitosos: "Proyectos Exitosos",
        clientes_satisfechos: "Clientes Satisfechos",

        // Sección Servicios
        serv_web_desc: "Sitios modernos, rápidos y totalmente responsivos.",
        serv_app_desc: "Desarrollo nativo para iOS y Android con la mejor UX.",
        serv_seo_desc: "Posicionamos tu marca en los primeros lugares de Google.",

        // Sección Proyectos
        proyectos_desc: "Una muestra de nuestros trabajos más recientes y destacados.",
        project_1_desc: "Plataforma de ventas online.",
        project_2_desc: "Monitoreo de salud en tiempo real.",
        project_3_desc: "Panel de control corporativo.",

        // Sección Testimonios
        test_title: "Lo que dicen nuestros clientes",
        testimonial_1: "EL PROYECTO transformó nuestra idea en una app increíble. Muy profesionales.",
        testimonial_2: "El soporte técnico es de primer nivel. Siempre disponibles.",

        // Sección Contacto
        contact_title: "Canales de Atención",
        contact_subtitle: "Selecciona el área con la que deseas comunicarte:",
        tab_sales: "Ventas",
        tab_support: "Soporte Técnico",
        tab_jobs: "Vacantes",
        sales_title: "Ventas",
        sales_desc: "Cotiza tu proyecto con nosotros.",
        empresa_input: "Nombre de la empresa",
        email_input: "Correo corporativo",
        support_title: "Soporte Técnico",
        support_desc: "¿Tienes problemas con tu servicio?",
        id_input: "ID de Cliente",
        falla_input: "Describe tu falla técnica...",
        jobs_title: "Únete al Equipo",
        jobs_desc: "Trabaja con nosotros.",
        nombre_input: "Nombre completo",
        cv_label: "Adjuntar CV (PDF)",
        send_btn: "Solicitar Cotización",
        ticket_btn: "Abrir Ticket",
        apply_btn: "Enviar Postulación",

        // Página de Privacidad
        privacy_title: "Política de Privacidad",
        privacy_subtitle: "Tu confianza y seguridad son nuestra prioridad.",
        privacy_intro_h: "1. Introducción",
        privacy_intro_p: "En EL PROYECTO nos tomamos muy en serio la protección de sus datos personales. Esta política detalla cómo recopilamos, usamos y protegemos la información que nos proporciona a través de nuestro sitio web y servicios.",
        privacy_data_h: "2. Información que recopilamos",
        privacy_data_p: "Podemos recopilar información personal como su nombre, correo electrónico y número de teléfono cuando se pone en contacto con nosotros a través de nuestro formulario o el botón de WhatsApp.",
        privacy_use_h: "3. Uso de la información",
        privacy_use_1: "Para responder a sus consultas y proporcionar soporte técnico.",
        privacy_use_2: "Para mejorar la experiencia de usuario en nuestra plataforma.",
        privacy_use_3: "Para enviar actualizaciones relevantes sobre nuestros servicios (previa autorización).",
        privacy_security_h: "4. Seguridad",
        privacy_security_p: "Implementamos medidas de seguridad digitales para evitar el acceso no autorizado o la divulgación de sus datos. Sus conversaciones con nuestro chatbot y formularios están protegidos bajo protocolos estándar de la industria.",
        privacy_cookies_h: "5. Cookies",
        privacy_cookies_p: "Utilizamos cookies para analizar el tráfico del sitio y recordar sus preferencias de idioma y tema (claro/oscuro).",

        // Footer
        footer_about: "Creamos soluciones digitales innovadoras para proyectos modernos.",
        footer_social: "Síguenos",
        footer_rights: "Todos los derechos reservados."
    },

   en: {
        // Navigation and Common Buttons
        inicio: "Home",
        historia: "History",
        servicios: "Services",
        proyectos: "Projects",
        testimonios: "Testimonials",
        privacidad: "Privacy",
        contacto_btn: "Contact Us",
        back_btn: "Back to Home",

        // Hero Section
        hero_title: "Digital Innovation at Your Fingertips",
        hero_desc: "We transform complex ideas into simple, elegant technological realities.",

        // History & Stats
        hist_text: "We were born with the vision of bridging the gap between creativity and code...",
        anos_experiencia: "Years of Experience",
        proyectos_exitosos: "Successful Projects",
        clientes_satisfechos: "Satisfied Clients",

        // Services Section
        serv_web_desc: "Modern, fast, and fully responsive websites.",
        serv_app_desc: "Native development for iOS and Android with the best UX.",
        serv_seo_desc: "We position your brand in Google's top spots.",

        // Projects Section
        proyectos_desc: "A sample of our most recent and outstanding work.",
        project_1_desc: "Online sales platform.",
        project_2_desc: "Real-time health monitoring.",
        project_3_desc: "Corporate control panel.",

        // Testimonials Section
        test_title: "What our clients say",
        testimonial_1: "EL PROYECTO transformed our idea into an incredible app. Very professional.",
        testimonial_2: "Technical support is top-notch. Always available.",

        // Contact Section
        contact_title: "Customer Service Channels",
        contact_subtitle: "Select the department you wish to contact:",
        tab_sales: "Sales",
        tab_support: "Technical Support",
        tab_jobs: "Careers",
        sales_title: "Sales",
        sales_desc: "Get a quote for your project with us.",
        empresa_input: "Company name",
        email_input: "Corporate email",
        support_title: "Technical Support",
        support_desc: "Having issues with your service?",
        id_input: "Customer ID",
        falla_input: "Describe the technical issue...",
        jobs_title: "Join the Team",
        jobs_desc: "Work with us.",
        nombre_input: "Full name",
        cv_label: "Attach CV (PDF)",
        send_btn: "Request a Quote",
        ticket_btn: "Open Ticket",
        apply_btn: "Submit Application",

        // Privacy Page
        privacy_title: "Privacy Policy",
        privacy_subtitle: "Your trust and security are our priority.",
        privacy_intro_h: "1. Introduction",
        privacy_intro_p: "At EL PROYECTO we take the protection of your personal data very seriously. This policy details how we collect, use, and protect the information you provide through our website and services.",
        privacy_data_h: "2. Information We Collect",
        privacy_data_p: "We may collect personal information such as your name, email, and phone number when you contact us via our form or WhatsApp button.",
        privacy_use_h: "3. Use of Information",
        privacy_use_1: "To respond to your inquiries and provide technical support.",
        privacy_use_2: "To improve the user experience on our platform.",
        privacy_use_3: "To send relevant updates about our services (with prior authorization).",
        privacy_security_h: "4. Security",
        privacy_security_p: "We implement digital security measures to prevent unauthorized access or disclosure of your data. Your conversations with our chatbot and forms are protected under industry-standard protocols.",
        privacy_cookies_h: "5. Cookies",
        privacy_cookies_p: "We use cookies to analyze site traffic and remember your language and theme (light/dark) preferences.",

        // Footer
        footer_about: "We create innovative digital solutions for modern projects.",
        footer_social: "Follow us",
        footer_rights: "All rights reserved."
    },

    fr: {
        // Navigation et Boutons Communs
        inicio: "Accueil",
        historia: "Histoire",
        servicios: "Services",
        proyectos: "Projets",
        testimonios: "Témoignages",
        privacidad: "Confidentialité",
        contacto_btn: "Contactez-nous",
        back_btn: "Retour à l'accueil",

        // Section Hero
        hero_title: "L'innovation digitale à votre portée",
        hero_desc: "Nous transformons des idées complexes en réalités technologiques simples et élégantes.",

        // Histoire & Stats
        hist_text: "Nous sommes nés avec la vision de combler le fossé entre la créativité et le code...",
        anos_experiencia: "Années d'Expérience",
        proyectos_exitosos: "Projets Réussis",
        clientes_satisfechos: "Clients Satisfaits",

        // Section Services
        serv_web_desc: "Sites web modernes, rapides et entièrement responsifs.",
        serv_app_desc: "Développement natif pour iOS et Android avec la meilleure UX.",
        serv_seo_desc: "Nous positionnons votre marque dans les premiers rangs de Google.",

        // Section Projets
        proyectos_desc: "Un aperçu de nos travaux les plus récents et les plus remarquables.",
        project_1_desc: "Plateforme de vente en ligne.",
        project_2_desc: "Suivi de santé en temps réel.",
        project_3_desc: "Tableau de bord corporatif.",

        // Section Témoignages
        test_title: "Ce que disent nos clients",
        testimonial_1: "EL PROYECTO a transformé notre idée en une application incroyable. Très professionnel.",
        testimonial_2: "Le support technique est de premier ordre. Toujours disponible.",

        // Section Contact
        contact_title: "Canaux de Service Client",
        contact_subtitle: "Sélectionnez le département que vous souhaitez contacter :",
        tab_sales: "Ventes",
        tab_support: "Support Technique",
        tab_jobs: "Recrutement",
        sales_title: "Ventes",
        sales_desc: "Demandez un devis pour votre projet.",
        empresa_input: "Nom de l'entreprise",
        email_input: "E-mail professionnel",
        support_title: "Support Technique",
        support_desc: "Vous avez un problème avec votre service ?",
        id_input: "ID Client",
        falla_input: "Décrivez le problème technique...",
        jobs_title: "Rejoignez l'Équipe",
        jobs_desc: "Travaillez avec nous.",
        nombre_input: "Nom complet",
        cv_label: "Joindre CV (PDF)",
        send_btn: "Demander un Devis",
        ticket_btn: "Ouvrir un Ticket",
        apply_btn: "Envoyer la Candidature",

        // Page de Confidentialité
        privacy_title: "Politique de Confidentialité",
        privacy_subtitle: "Votre confiance et votre sécurité sont notre priorité.",
        privacy_intro_h: "1. Introduction",
        privacy_intro_p: "Chez EL PROYECTO, nous prenons très au sérieux la protection de vos données personnelles. Cette politique détaille comment nous collectons, utilisons et protégeons les informations que vous nous fournissez via notre site web et nos services.",
        privacy_data_h: "2. Informations collectées",
        privacy_data_p: "Nous pouvons collecter des informations personnelles telles que votre nom, votre adresse e-mail et votre numéro de téléphone lorsque vous nous contactez via notre formulaire ou le bouton WhatsApp.",
        privacy_use_h: "3. Utilisation des informations",
        privacy_use_1: "Pour répondre à vos demandes et fournir un support technique.",
        privacy_use_2: "Pour améliorer l'expérience utilisateur sur notre plateforme.",
        privacy_use_3: "Pour envoyer des mises à jour pertinentes sur nos services (avec autorisation préalable).",
        privacy_security_h: "4. Sécurité",
        privacy_security_p: "Nous mettons en œuvre des mesures de sécurité numériques pour empêcher l'accès non autorisé ou la divulgation de vos données. Vos conversations avec notre chatbot et nos formulaires sont protégés selon les protocoles standards de l'industrie.",
        privacy_cookies_h: "5. Cookies",
        privacy_cookies_p: "Nous utilisons des cookies pour analyser le trafic du site et mémoriser vos préférences de langue et de thème (clair/sombre).",

        // Footer
        footer_about: "Nous créons des solutions numériques innovantes pour des projets modernes.",
        footer_social: "Suivez-nous",
        footer_rights: "Tous droits réservés."
    }
};

const langSelect = document.getElementById('lang-select');
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.querySelectorAll('[data-key]').forEach(elemento => {
            const key = elemento.getAttribute('data-key');
            if (texts[lang][key]) {
                elemento.innerHTML = texts[lang][key];
            }
        });
    });
}

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
        "default": "No estoy seguro de entenderte, pero intenta preguntando por 'servicios' o 'contacto'.",
        "pagos": "Aceptamos transferencias, tarjeta de crédito/débito y pagos por PayPal.",
        "metodos de pago": "Aceptamos transferencia bancaria, tarjeta y PayPal.",
        "soporte": "Ofrecemos soporte técnico posterior a la entrega del proyecto.",
        "hosting": "Podemos ayudarte con la contratación y configuración de hosting y dominio.",
        "dominio": "Te asesoramos para elegir y registrar el dominio ideal para tu marca.",
        "redes sociales": "También gestionamos estrategias digitales y optimización de redes sociales.",
        "branding": "Desarrollamos identidad de marca, logotipo y manual de identidad corporativa.",
        "ecommerce": "Creamos tiendas en línea con pasarelas de pago integradas y panel administrativo.",
        "seguridad": "Implementamos certificados SSL y buenas prácticas de seguridad web.",
        "portafolio": "Puedes revisar nuestro portafolio en la sección de Proyectos.",
        "reunion": "Podemos agendar una reunión virtual para conocer mejor tu proyecto.",
        "garantia": "Todos nuestros proyectos incluyen garantía técnica post-entrega.",
        "urgente": "Si tu proyecto es urgente, podemos evaluar un plan de entrega acelerado.",
        "marketing": "Ofrecemos estrategias de marketing digital para aumentar tu presencia online.",
        "automatizacion": "Desarrollamos sistemas personalizados para automatizar procesos de tu negocio."
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
        "default": "I'm not sure I understand, but try asking about 'services' or 'contact'.",
        "payment": "We accept bank transfers, credit/debit cards, and PayPal.",
        "payments": "We accept bank transfer, card payments, and PayPal.",
        "support": "We provide technical support after project delivery.",
        "hosting": "We can help you set up hosting and domain registration.",
        "domain": "We assist you in choosing and registering the perfect domain name.",
        "social media": "We also provide digital strategy and social media optimization.",
        "branding": "We develop brand identity, logos, and brand guidelines.",
        "ecommerce": "We build online stores with integrated payment gateways.",
        "security": "We implement SSL certificates and web security best practices.",
        "portfolio": "You can explore our portfolio in the Projects section.",
        "meeting": "We can schedule a virtual meeting to discuss your project.",
        "warranty": "All our projects include post-delivery technical warranty.",
        "urgent": "If your project is urgent, we can evaluate an accelerated delivery plan.",
        "marketing": "We offer digital marketing strategies to grow your online presence.",
        "automation": "We develop custom systems to automate your business processes."

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
        "default": "Je ne comprends pas bien, essayez de demander 'services' ou 'contact'.",
        "paiement": "Nous acceptons les virements bancaires, cartes de crédit/débit et PayPal.",
        "support": "Nous offrons un support technique après la livraison du projet.",
        "hebergement": "Nous pouvons vous aider avec l'hébergement et l'enregistrement de domaine.",
        "domaine": "Nous vous aidons à choisir et enregistrer le meilleur nom de domaine.",
        "reseaux sociaux": "Nous proposons aussi des stratégies digitales et optimisation des réseaux sociaux.",
        "branding": "Nous développons l'identité visuelle, logo et charte graphique.",
        "ecommerce": "Nous créons des boutiques en ligne avec passerelles de paiement intégrées.",
        "securite": "Nous installons des certificats SSL et appliquons les meilleures pratiques de sécurité.",
        "portfolio": "Consultez notre portfolio dans la section Projets.",
        "reunion": "Nous pouvons organiser une réunion virtuelle pour discuter de votre projet.",
        "garantie": "Tous nos projets incluent une garantie technique après livraison.",
        "urgent": "Si votre projet est urgent, nous pouvons proposer un plan accéléré.",
        "marketing": "Nous proposons des stratégies de marketing digital.",
        "automatisation": "Nous développons des systèmes personnalisés pour automatiser votre entreprise."
    }
};

/* =========================================
   2. FUNCIONALIDAD CORE (TRADUCCIÓN Y MODO OSCURO)
   ========================================= */
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        const translation = texts[lang][key];

        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else if (el.querySelector('i')) {
                const icon = el.querySelector('i').outerHTML;
                el.innerHTML = `${icon} ${translation}`;
            } else {
                el.innerHTML = translation;
            }
        }
    });
    document.documentElement.lang = lang;
    updateQuickReplies(lang);
}

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

/* =========================================
   3. UI Y NAVEGACIÓN
   ========================================= */
window.onscroll = function() {
    const header = document.querySelector(".main-header");
    if (!header) return;
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 5%";
        header.style.backgroundColor = isDarkMode ? "#121212" : "#1a252f";
    } else {
        header.style.padding = "1rem 5%";
        header.style.backgroundColor = isDarkMode ? "rgba(18, 18, 18, 0.95)" : "rgba(44, 62, 80, 0.95)";
    }
};

function mostrarFormulario(idFormulario, botonActivo) {
    document.querySelectorAll('.card-form').forEach(form => form.style.display = 'none');
    const formSeleccionado = document.getElementById(idFormulario);
    if (formSeleccionado) formSeleccionado.style.display = 'block';

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    botonActivo.classList.add('active');
}

function updateFileName(input) {
    const label = document.querySelector('[data-key="cv_label"]');
    if (input.files && input.files.length > 0) {
        label.innerHTML = `<i class="fas fa-check"></i> ${input.files[0].name}`;
        label.style.color = "#27ae60";
    }
}

/* =========================================
   4. LÓGICA DEL CHATBOT
   ========================================= */
function toggleChat() {
    const chat = document.getElementById('chatbot');
    if (chat) {
        const isVisible = window.getComputedStyle(chat).display === 'flex';
        chat.style.display = isVisible ? 'none' : 'flex';
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

        // Buscar en todos los idiomas (Detección automática)
        for (let langKey in botResponses) {
            for (let wordKey in botResponses[langKey]) {
                if (userText.includes(wordKey)) {
                    response = botResponses[langKey][wordKey];
                    detectedLang = langKey;
                    break;
                }
            }
            if (response) break;
        }

        // Si cambia el idioma por el chat, actualizar UI
        if (detectedLang !== currentLang && langSelect) {
            langSelect.value = detectedLang;
            changeLanguage(detectedLang);
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

/* =========================================
   5. INICIALIZACIÓN (DOM CONTENT LOADED)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Idioma
    const langSelect = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    if (langSelect) {
        langSelect.value = savedLang;
        changeLanguage(savedLang);
        langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
    }

    // Inicializar Modo Oscuro
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        if (localStorage.getItem('dark-mode') === 'enabled') document.body.classList.add('dark-mode');
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeBtn.querySelector('i');
            const isDark = document.body.classList.contains('dark-mode');
            icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
            localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
        });
    }

    // Listener para Enter en Chat
    const userInput = document.getElementById('user-input');
    if (userInput) {
        userInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
            }
        });
    }
});

function guardarMensaje(event, tipo) {
    event.preventDefault();
    
    let nombreVal, contactoVal, detalleVal;

    if (tipo === 'Ventas') {
        nombreVal = document.getElementById('venta-empresa').value;
        contactoVal = document.getElementById('venta-email').value;
        detalleVal = "Interés en cotización comercial";
    } else if (tipo === 'Soporte') {
        nombreVal = "Cliente ID: " + document.getElementById('soporte-id').value;
        contactoVal = "Soporte Técnico";
        detalleVal = document.getElementById('soporte-falla').value;
    } else if (tipo === 'Vacantes') {
        nombreVal = document.getElementById('vacante-nombre').value;
        
        // --- CAMBIO AQUÍ PARA EL ARCHIVO ---
        const inputArchivo = document.getElementById('cv-file');
        const nombreArchivo = inputArchivo.files.length > 0 ? inputArchivo.files[0].name : "Sin archivo";
        
        contactoVal = "Archivo: " + nombreArchivo; // Ahora guarda el nombre real
        detalleVal = "Postulación para vacante activa";
    }

    let nuevoMensaje = {
        id: Date.now(),
        fecha: new Date().toLocaleString(),
        tipo: tipo,
        nombre: nombreVal,
        contacto: contactoVal,
        detalle: detalleVal
    };

    // Guardar en LocalStorage
    let historial = JSON.parse(localStorage.getItem('mensajes_proyecto')) || [];
    historial.push(nuevoMensaje);
    localStorage.setItem('mensajes_proyecto', JSON.stringify(historial));
    
    alert(`¡Solicitud de ${tipo} registrada! Revisa el admin.html`);
    event.target.reset(); 
    
    // Resetear el label del CV (el que cambia de color y texto)
    const labelCv = document.querySelector('[data-key="cv_label"]');
    if(labelCv) {
        labelCv.innerHTML = `<i class="fas fa-file-pdf"></i> Adjuntar CV (PDF)`;
        labelCv.style.color = "";
    }
}
