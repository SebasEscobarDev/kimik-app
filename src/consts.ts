export const urlLocal = 'http://localhost:8000'
export const urlServer = 'https://api-kimik.sebasescobar.com'
//actualizar urlGeneral = [urlServer or urlLocal] para hacer build
export const urlGeneral = urlLocal
export const urlApi = urlGeneral

export const SITE_TITLE = 'Kimik';
export const SITE_DESCRIPTION = 'Welcome to Kimik!';

export const CLASSES = {
    h3: "text-1xl md:text-2xl pop-semi",
    h5: "text-[16px] md:text-1xl pop-ligth",
    h6: "text-[10px] md:text-sm pop-ligth",
    label: "text-black pop-semi",
    secondaryLabel: "text-black pop-light",
    input: "bg-[#ECECEC] text-center text-black placeholder-slate-500 w-full min-h-[50px] mb-1 rounded-full border px-2 py-1 md:py-2",
    inputTwo: "bg-[#ECECEC] text-center md:text-left text-black placeholder-slate-500 w-full min-h-[50px] mb-1 rounded-xl border border-black px-4 md:px-8 py-2 md:py-4",
    borderPrimary: "border-[#FFCC00]",
    bgPrimary: "bg-[#FFCC00]",
    bgSecondary: "bg-[#7c69ba]",
    textPrimary: "text-[#FFCC00]",
    btnOptions: "bg-[#ECECEC] hover:bg-[#FFCC00] text-black placeholder-slate-500 text-center w-full min-h-[58px] mb-1 px-2 py-4 rounded-xl border border-black min-w-[80px] md:min-w-[150px] transition-all",
    btnSpin: "flex items-center btn-special cursor-pointer border-[1.5px] rounded-full pl-5 pr-[6px] py-[6px]",
    btnPrimary: "bg-[#FFCC00] text-black hover:bg-white hover:text-black pop-semi rounded-full transition-all text-xl md:text-3xl px-3 py-[10px] md:px-4 md:py-[15px] w-[200px] md:w-[280px]",
    btnPrimaryTwo: "bg-[#7c69ba] text-white hover:bg-white hover:text-black pop-semi rounded-full transition-all text-xl md:text-3xl px-3 py-[10px] md:px-4 md:py-[15px] w-[200px] md:w-[280px]",
    btnPrimaryThree: "bg-transparent text-white hover:bg-white hover:text-black border border-white pop-semi px-4 py-[6px] rounded-full text-2xl w-[220px] transition-all",
    btnSecondary: "bg-[#FFCC00] hover:bg-white hover:text-black border border-[#FFCC00] hover:border-white pop-semi rounded-full transition-all text-xl md:text-2xl px-2 py-1 md:px-6 md:py-2 w-[160px] md:w-[220px]",
    btnSecondaryTwo: "bg-transparent hover:bg-white hover:text-black pop-semi rounded-full transition-all text-xl md:text-2xl px-2 py-1 md:px-6 md:py-2 w-[160px] md:w-[220px]"
}

export const idiomas = [
    {
        id: 1,
        nombre: "Español",
        codigo: "es"
    },
    {
        id: 2,
        nombre: "Inglés",
        codigo: "en"
    },
    {
        id: 3,
        nombre: "Portugués",
        codigo: "pt"
    }
]

export const cadena = {
    optionsGender: {
        es: [
            "Hombre",
            "Mujer",
            "Hombre Transgénero",
            "Mujer Transgénero",
            "Travesti",
            "No-Binario",
            "Andrógino",
            "Género Neutro",
            "Queer",
            "No Conforme",
            "Género Variante",
            "Agénero",
            "Género Cuestionado",
            "Biogénero",
            "Género Fluido",
            "Pangénero",
            "Otros",
        ],
        en: [
            "Man",
            "Woman",
            "Man transgender",
            "Woman transgender",
            "Travesti",
            "Non-Binary",
            "Androgynous",
            "Neutral Gender",
            "Queer",
            "Non-Conforming",
            "Gener Variant",
            "Agender",
            "Questioned",
            "Biogender",
            "Fluid Gender",
            "Pangender",
            "Others",
        ],
        pt: [
            "Homem",
            "Mulher",
            "Homem Transgênero",
            "Mulher Transgênero",
            "Travesti",
            "Não Binário",
            "Andrógino",
            "Gênero Neutro",
            "Queer",
            "Não Conforme",
            "Variante de Gênero",
            "Agênero",
            "Questionado",
            "Biogênero",
            "Gênero Fluido",
            "Pangênero",
            "Outros",
        ]
    },
    txtSigin1: {
        es: "Tu eliges como conectar.",
        en: "You choose how to connect.",
        pt: "Você escolhe como se conectar."
    },
    txtSigin2: {
        es: "Tienes 3 opciones ¿Cuál vas a elegir?",
        en: "You have 3 options, which one are you going to choose?",
        pt: "Você tem 3 opções, qual você vai escolher?"
    },
    txtCopyrigth: {
        es: "Todos los derechos reservados.",
        en: "All rights reserved.",
        pt: "Todos os direitos reservados."
    },
    txtBtn1: {
        es: "Regístrate",
        en: "Sign up",
        pt: "Inscrever-se"
    },
    txtBtn2: {
        es: "Ingresar",
        en: "Sign in",
        pt: "Entrar"
    },
    txtBtnSettings: {
        es: "Ajustes",
        en: "Settings",
        pt: "Configurações"
    },
    txtSettings: {
        es: "Selecciona tu idioma",
        en: "Select your language",
        pt: "Selecione seu idioma"
    },
    txtSettings2: {
        es: "Modo",
        en: "Mode",
        pt: "Modo"
    },
    txtSettings3: {
        es: "Claro",
        en: "Light",
        pt: "Claro"
    },
    txtSettings4: {
        es: "Oscuro",
        en: "Dark",
        pt: "Escuro"
    },
    txtSettings5: {
        es: "Elige una opción",
        en: "Choose an option",
        pt: "Escolha uma opção"
    },
    aplicaciones: {
        es: [
            {
                title: "Amistad",
                description: "Aquí puedes chatear y conocer personas. Una cena, un helado, una peli ... todo comienza con un 'Hola'"
            },
            {
                title: "Citas",
                description: "Aquí puedes chatear y conocer personas. Una cena, un helado, una peli ... todo comienza con un 'Hola'"
            },
            {
                title: "Pareja",
                description: "Aquí puedes chatear y conocer personas. Una cena, un helado, una peli ... todo comienza con un 'Hola'"
            }
        ],
        en: [
            {
                title: "Friendship",
                description: "Here you can chat and meet people. A dinner, an ice cream, a movie ... everything starts with a 'Hello'"
            },
            {
                title: "Dating",
                description: "Here you can chat and meet people. A dinner, an ice cream, a movie ... everything starts with a 'Hello'"
            },
            {
                title: "Couple",
                description: "Here you can chat and meet people. A dinner, an ice cream, a movie ... everything starts with a 'Hello'"
            }
        ],
        pt: [
            {
                title: "Amizade",
                description: "Aqui você pode conversar e conhecer pessoas. Um jantar, um sorvete, um filme ... tudo começa com um 'Olá'"
            },
            {
                title: "Encontros",
                description: "Aqui você pode conversar e conhecer pessoas. Um jantar, um sorvete, um filme ... tudo começa com um 'Olá'"
            },
            {
                title: "Casal",
                description: "Aqui você pode conversar e conhecer pessoas. Um jantar, um sorvete, um filme ... tudo começa com um 'Olá'"
            }
        ]
    },
    txtFormUno1: {
        es: "Ingresar",
        en: "Sign in",
        pt: "Entrar"
    },
    txtFormUno2: {
        es: "Al hacer clic en Iniciar sesión, acepta nuestros términos. Conozca cómo procesamos sus datos en nuestra",
        en: "By clicking Sign in, you agree to our terms. Learn how we process your data in our",
        pt: "Ao clicar em Entrar, você concorda com nossos termos. Saiba como processamos seus dados em nosso"
    },
    txtFormUno3: {
        es: "Política de Datos y Privacidad.",
        en: "Data and Privacy Policy.",
        pt: "Política de Dados e Privacidade."
    },
    txtFormUno4: {
        es: "Correo electronico",
        en: "Email",
        pt: "E-mail"
    },
    txtFormUno5: {
        es: "Contraseña",
        en: "Password",
        pt: "Senha"
    },
    txtFormUno6: {
        es: "Confirmar Contraseña",
        en: "Confirm Password",
        pt: "Confirmar Senha"
    },
    txtFormUno7: {
        es: "¿Olvidaste tu Contraseña?",
        en: "Forgot your password?",
        pt: "Esqueceu sua senha?"
    },
    txtFormUno8: {
        es: "¿Tienes problema <br /> para acceder?",
        en: "Having trouble <br /> accessing?",
        pt: "Com problemas <br /> de acesso?"
    },
    txtFormUno9: {
        es: "Introduce tu correo electrónico asosiado y te enviaremos un enlace para restablecer el acceso a tu cuenta.",
        en: "Enter your associated email and we will send you a link to reset access to your account.",
        pt: "Digite seu e-mail associado e enviaremos um link para redefinir o acesso à sua conta."
    },
    txtFormUno10: {
        es: "Enviar",
        en: "Send",
        pt: "Enviar"
    },
    txtFormDos1: {
        es: "Registro",
        en: "Register",
        pt: "Registro"
    },
    txtFormDos2: {
        es: "Nombre completo",
        en: "Full name",
        pt: "Nome completo"
    },
    txtFormDos3: {
        es: "Ingresa tu nombre Completo",
        en: "Enter your Full name",
        pt: "Digite seu nome completo"
    },
    txtFormDos4: {
        es: "Fecha de nacimiento",
        en: "Date of birth",
        pt: "Data de nascimento"
    },
    txtFormDos5: {
        es: "Día",
        en: "Day",
        pt: "Dia"
    },
    txtFormDos6: {
        es: "Mes",
        en: "Month",
        pt: "Mês"
    },
    txtFormDos7: {
        es: "Año",
        en: "Year",
        pt: "Ano"
    },
    txtFormDos8: {
        es: "Ciudad de nacimiento",
        en: "City of birth",
        pt: "Cidade de nascimento"
    },
    txtFormDos9: {
        es: "Ingresa tu ciudad de nacimiento",
        en: "Enter your city of birth",
        pt: "Digite sua cidade de nascimento"
    },
    txtFormDos10: {
        es: "Mostrar el género en mi perfil",
        en: "Show gender in the profile",
        pt: "Mostrar gênero no perfil"
    },
    txtFormDos11: {
        es: "Debes ser mayor de 18 años para continuar.",
        en: "You must be over 18 years old to continue.",
        pt: "Você deve ter mais de 18 anos para continuar."
    },
    txtFormDos12: {
        es: "Debe ingresar todos los campos para continuar",
        en: "You must enter all fields to continue",
        pt: "Você deve preencher todos os campos para continuar"
    },
    txtBtnNext: {
        es: "Siguiente",
        en: "Next",
        pt: "Próximo"
    },
    txtFormTres1: {
        es: "Te identificas como",
        en: "You identify as",
        pt: "Você se identifica como"
    },
    txtBtnRegistrar: {
        es: "Registrar",
        en: "Register",
        pt: "Registro"
    },
    txtFormTres2: {
        es: "Te interesan",
        en: "You are interested in",
        pt: "Você está interessado em"
    },
    txtFormTres3: {
        es: "Rango de edad",
        en: "Age range",
        pt: "Faixa etária"
    },
    txtBtnBack: {
        es: "Atrás",
        en: "Back",
        pt: "Voltar"
    },
    txtFormTres5: {
        es: "¡Tú decides quién te interesa!",
        en: "You decide who interests you!",
        pt: "Você decide quem te interessa!"
    },
    txtFormCuatro1: {
        es: "Foto de los ojos",
        en: "Photo of the eyes",
        pt: "Foto dos olhos"
    },
    txtFormCuatro2: {
        es: "Subir Foto",
        en: "Upload Photo",
        pt: "Carregar Foto"
    },
    txtFormCuatro3: {
        es: "Tomese la foto de ambos ojos a una distancia minima de 10 cm y máxima de 20 cm",
        en: "Take a picture of both eyes at a minimum distance of 10 cm and a maximum of 20 cm",
        pt: "Tire uma foto de ambos os olhos a uma distância mínima de 10 cm e máxima de 20 cm"
    },
    txtFormCuatro4: {
        es: "Si usa lentes quíteselos.",
        en: "If you wear glasses, take them off.",
        pt: "Se você usa óculos, tire-os."
    },
    txtFormCuatro5: {
        es: "Evite usar flash frontal, solo luz natural.",
        en: "Avoid using front flash, only natural light.",
        pt: "Evite usar flash frontal, apenas luz natural."
    },
    txtFormCuatro6: {
        es: "Cambiar",
        en: "Change",
        pt: "Mudar"
    },
    txtFormCuatro7: {
        es: "Cargar",
        en: "Upload",
        pt: "Carregar"
    },
    txtFormCuatro8: {
        es: "Foto",
        en: "Photo",
        pt: "Foto"
    },
    txtFormSeis1: {
        es: "Cúentanos como quieres usar Kimik",
        en: "Tell us how you want to use Kimik",
        pt: "Conte-nos como você quer usar Kimik"
    },
    txtFormSeis2: {
        es: "Citas",
        en: "Dates",
        pt: "Encontros"
    },
    txtFormSeis3: {
        es: "Pareja",
        en: "Couple",
        pt: "Casal"
    },
    txtFormSeis4: {
        es: "Amistad",
        en: "Friendship",
        pt: "Amizade"
    },
    txtFormSeis5: {
        es: "Selecciona una opcion, Pareja y Amistad estaran disponibles próximamente.",
        en: "Select an option, Couple and Friendship will be available soon.",
        pt: "Selecione uma opção, Casal e Amizade estarão disponíveis em breve."
    },
    txtFormSiete1: {
        es: "Ha ocurrido un error inesperado!",
        en: "An unexpected error has occurred!",
        pt: "Ocorreu um erro inesperado!"
    },
    txtFormSiete2: {
        es: "Autorizo el tratamiento de mis datos personales a la aplicación para su política de tratamiento de la información",
        en: "I authorize the treatment of my personal data to the application for its information processing policy",
        pt: "Autorizo o tratamento de meus dados pessoais para o aplicativo por sua política de processamento de informações"
    },
    txtFormSiete3: {
        es: "Acepto términos y condiciones",
        en: "I accept terms and conditions",
        pt: "Aceito os termos e condições"
    },
    txtBtnEnd: {
        es: "Finalizar",
        en: "Finish",
        pt: "Finalizar"
    },
    txtChatMenLeft: {
        es: "Buscar Personas...",
        en: "Search People...",
        pt: "Procurar Pessoas..."
    },
    txtChatKimik: {
        es: "Soy Kimik tu asistente de IA !",
        en: "I'm Kimik your AI assistant!",
        pt: "Eu sou Kimik seu assistente de IA!"
    },
    txtChatKimik2: {
        es: "¡Hola",
        en: "Hello",
        pt: "Olá"
    },
    txtChatKimik3: {
        es: "¿En qué puedo ayudarte hoy?",
        en: "How can I help you today?",
        pt: "Como posso te ajudar hoje?"
    },
    txtNock: {
        es: "¡Tienes un nuevo Nock!",
        en: "You have a new Nock!",
        pt: "Você tem um novo Nock!"
    },
    txtProfile: {
        es: "¿Quieres conectar con",
        en: "Do you want to connect with",
        pt: "Você quer se conectar com"
    },
    txtChatMessage: {
        es: "Enviado",
        en: "Sent",
        pt: "Enviado"
    },
    txtNotify: {
        es: "No tienes notificaciones por el momento...",
        en: "You don't have notifications at the moment...",
        pt: "Você não tem notificações no momento..."
    },
    txtLogout: {
        es: "Cerrar Sesión",
        en: "Log Out",
        pt: "Sair"
    },
    txtInicio: {
        es: "Inicio",
        en: "Home",
        pt: "Início"
    },
    txtNosotros: {
        es: "Nosotros",
        en: "Us",
        pt: "Nós"
    },
    txtComencemos: {
        es: "¡Comencemos!",
        en: "Let's start!",
        pt: "Vamos começar!"
    },
    txtDescarga: {
        es: "Descarga",
        en: "Download",
        pt: "Baixar"
    },
    txtKimik: {
        es: "Conoce más de kimik!",
        en: "Know more about kimik!",
        pt: "Saiba mais sobre kimik!"
    },
    txtSigin: {
        es: "Iniciar Sesión",
        en: "Sign in",
        pt: "Entrar"
    },
    txtUnirte: {
        es: "Unirte",
        en: "Join",
        pt: "Entrar"
    },
    txtPassMatch: {
        es: "Las contraseñas deben coincidir!",
        en: "Passwords must match!",
        pt: "As senhas devem corresponder!"
    },
    txtFailLogin: {
        es: "Usuario o contraseña incorrecta!",
        en: "Incorrect username or password!",
        pt: "Nome de usuário ou senha incorretos!"
    },
    txtEmailExist: {
        es: "El correo ya se encuentra registrado, intente con otro correo o inicie sesión!",
        en: "The email is already registered, try another email or log in!",
        pt: "O e-mail já está registrado, tente outro e-mail ou faça login!"
    },
    txtSignUpFail: {
        es: "No ha sido posible registrarse, intente de nuevo!",
        en: "It was not possible to register, try again!",
        pt: "Não foi possível se registrar, tente novamente!"
    },
    txtApiFail: {
        es: "Ha ocurrido un error al intentar conectarse a la API",
        en: "An error occurred while trying to connect to the API",
        pt: "Ocorreu um erro ao tentar se conectar à API"
    },
    txtChatKimikFail: {
        es: "Error: No hay conexion con el LLM.",
        en: "Error: No connection to the LLM.",
        pt: "Erro: Sem conexão com o LLM."
    },
    txtSendMessage: {
        es: "Enviar Mensaje...",
        en: "Send Message...",
        pt: "Enviar Mensagem..."
    },
    txtCouples1: {
        es: "Pareja registrada correctamente!",
        en: "Couple registered correctly!",
        pt: "Casal registrado corretamente!"
    },
    txtCouples2: {
        es: "Añadir datos de pareja",
        en: "Add couple data",
        pt: "Adicionar dados de casal"
    },
    txtNameFull: {
        es: "Nombre completo",
        en: "Full name",
        pt: "Nome completo"
    },
    txtNamePlace: {
        es: "Ingresa tu nombre Completo",
        en: "Enter your Full name",
        pt: "Digite seu nome completo"
    },
    txtGenero: {
        es: "Género",
        en: "Gender",
        pt: "Gênero"
    },
    txtBtnCancel: {
        es: "Cancelar",
        en: "Cancel",
        pt: "Cancelar"
    },
    txtBtnAccept: {
        es: "Aceptar",
        en: "Accept",
        pt: "Aceitar"
    },
    txtWelcome: {
        es: "¡Te damos<br /> la bienvenida!",
        en: "We welcome you!",
        pt: "Nós te damos as boas-vindas!"
    },
    txtKimikWelcome: {
        es: "Hola, soy Kimik, tu asistente virtual. ¿En qué puedo ayudarte hoy?",
        en: "Hello, I'm Kimik, your virtual assistant. How can I help you today?",
        pt: "Olá, eu sou Kimik, seu assistente virtual. Como posso te ajudar hoje?"
    },
    txtWebCuatro1: {
        es: "Una nueva forma de conectar",
        en: "A new way to connect",
        pt: "Uma nova maneira de se conectar"
    },
    txtWebCuatro2: {
        es: "Tienes 3 opciones ¿Cuál vas a elegir?",
        en: "You have 3 options, which one are you going to choose?",
        pt: "Você tem 3 opções, qual você vai escolher?"
    },
    txtWebCuatro3: {
        es: "Descarga la app",
        en: "Download the app",
        pt: "Baixe o aplicativo"
    },
    txtWebDos1: {
        es: "¿Amistad?",
        en: "Friendship?",
        pt: "Amizade?"
    },
    txtWebDos2: {
        es: "¿Citas?",
        en: "Dates?",
        pt: "Encontros?"
    },
    txtWebDos3: {
        es: "¿Pareja?",
        en: "Couple?",
        pt: "Casal?"
    },
    txtWebDos4: {
        es: "Tu eliges",
        en: "You choose",
        pt: "Você escolhe"
    },
    txtWebDos5: {
        es: "Kimik te ofrece la oportunidad de encontrar pareja, mejora relaciones existentes y crear conexiones de amistad, todo basado en inteligencia artificial y algoritmos de personalidad.",
        en: "Kimik offers you the opportunity to find a partner, improve existing relationships and create friendship connections, all based on artificial intelligence and personality algorithms.",
        pt: "Kimik oferece a você a oportunidade de encontrar um parceiro, melhorar relacionamentos existentes e criar conexões de amizade, tudo baseado em inteligência artificial e algoritmos de personalidade."
    },
    txtWebDos6: {
        es: "¿Qué tal una última primer cita?",
        en: "How about one last first date?",
        pt: "Que tal um último primeiro encontro?"
    },
    txtWebUno1: {
        es: "Una nueva forma de conectar.",
        en: "A new way to connect.",
        pt: "Uma nova maneira de se conectar."
    },
    txtWebUno2: {
        es: "¡Kimik está aquí!",
        en: "Kimik is here!",
        pt: "Kimik está aqui!"
    },
    txtWebTres1: {
        es: "¡Hola!",
        en: "Hello!",
        pt: "Olá!"
    },
    txtWebTres2: {
        es: "Soy kimik",
        en: "I'm kimik",
        pt: "Eu sou kimik"
    },
    txtWebTres3: {
        es: "¿Chateamos?",
        en: "Do we chat?",
        pt: "Conversamos?"
    },
    txtWebTres4: {
        es: "¡Puedo ayudarte!",
        en: "I can help you!",
        pt: "Posso te ajudar!"
    },
    txtWebTres5: {
        es: "¡Comencemos!",
        en: "Let's start!",
        pt: "Vamos começar!"
    },
}