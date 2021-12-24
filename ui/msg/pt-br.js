var MSG = {
  title: "BIPES Beta",
  blocks: "Blocos",
  files: "Arquivos",
  shared: "Compartilhado",
  device: "Dispositivo",
  linkTooltip: "Salvar e ligar aos blocos.",
  runTooltip: "Execute o programa definido pelos blocos na área de trabalho.",
  badCode: "Erro no programa:\n%1",
  timeout: "Máximo de iterações de execução excedido.",
  trashTooltip: "Descartar todos os blocos.",
  catLogic: "Lógica",
  catLoops: "Laços",
  catMath: "Matemática",
  catText: "Texto",
  catLists: "Listas",
  catColour: "Cor",
  catVariables: "Variáveis",
  catFunctions: "Funções",
  listVariable: "lista",
  textVariable: "texto",
  httpRequestError: "Houve um problema com a requisição.",
  linkAlert: "Compartilhe seus blocos com este link:\n\n%1",
  hashError: "Desculpe, '%1' não corresponde a um programa salvo.",
  xmlError: "Não foi possível carregar seu arquivo salvo. Talvez ele tenha sido criado com uma versão diferente do Blockly?",
  badXml: "Erro de análise XML:\n%1\n\nSelecione 'OK' para abandonar suas mudanças ou 'Cancelar' para editar o XML.",
  saveTooltip: "Salvar blocos para arquivo.",
  loadTooltip: "Carregar blocos de arquivo.",
  notificationTooltip: "Painel de notificações.",
  ErrorGET: "O arquivo solicitado não carregou.",
  invalidDevice: "Aparelho inválido.",
  languageTooltip: "Mudar idioma.",
  noToolbox: "O aparelho não possui toolbox definida.",
  networkTooltip: "Conectar via rede (WebREPL, http).",
  serialTooltip: "Conectar via serial/USB ou Bluetooth (Web Serial API, https).",
  toolbarTooltip: "Mostrar barra de ferramentas",
  wrongDevicePin: "Verifique os pinos, o aparelho alvo mudou!",
  notDefined: "não definido",
  editAsFileValue: "Editar como arquivo",
  editAsFileTooltip: "Editar código python e salvar para a memória do aparelho.",
  forumTooltip: "Fórum de ajuda.",
  accountTooltip: "Tus proyectos y escenarios.",
  blocksLoadedFromFile: "Blocos carregados do arquivo '%1'.",
  deviceUnavailable: "Aparelho '%1' indisponível.",
  notAvailableFlag: "$1 não está disponível nesse navegador.\r\nVerifique se a 'flag' $1 está ativa",

//Blocos
  block_delay: "esperar",
  seconds: "segundos",
  milliseconds: "milisegundos",
  microseconds: "microsegundos",
  to: "para",
  setpin: "ajustar pino de saida",
  pin: "pino",
  read_digital_pin: "ler entrada digital",
  read_analog_pin: "ler entrada analógica",
  show_iot: "mostrar na aba IoT ",
  data: "valor",
  set_rtc: "ajustar data e hora",
  get_rtc: "obter data e hora",
  year: "ano",
  month: "mês",
  day: "dia",
  hour: "hora",
  minute: "minuto",
  second: "segundo",
  wifi_scan: "listar redes wifi",
  wifi_connect: "conectar na rede wifi",
  wifi_name: "nome da rede",
  wifi_key: "senha/chave",
  easymqtt_start: "iniciar EasyMQTT",
  easymqtt_publish: "publicar dado com EasyMQTT",
  topic: "tópico",
  session_id: "Sessão:",
  file_open: "abrir arquivo",
  file_name: "nome do arquivo",
  file_mode: "modo",
  file_binary: "modo binário",
  file_close: "fechar arquivo",
  file_write_line: "escrever linha no arquivo",
  file_line: "linha",
  try1: "tente",
  exp1: "no erro",
  ntp_sync: "sincronizar data e hora com NTP",
  timezone: "fuso horário",
  project_info: "Dados do projeto",
  project_info_author: "Autor",
  project_info_desc: "Descrição",
  easymqtt_subscribe: "incrição no tópico EasyMQTT",
  easymqtt_receive: "receber dados EasyMQTT",
  when: "quando",
  data_received: "for recebido",
  relay: "rele",
  on: "ligar",
  off: "desligar",
  relay_on: "rele no pino",
  yes: "sim",
  no: "não",
  wait_for_data: "esperar por dados",
  dht_start: "Iniciar sensor DHT11/22",
  dht_measure: "atualizar leitura do sensor DHT11/22",
  dht_temp: "temperatura do DHT11/22",
  dht_humi: "umidade do DHT11/22",
  type: "modelo",

//Splash screen
  splash_welcome: "Bem vindo ao BIPES!",
  splash_footer: "Não mostrar esta tela novamente",
  splash_close: "Fechar",
  splash_message: "<p><b>BIPES: Block based Integrated Platform for Embedded Systems</B> allows text and block based programming for several types of embedded systems and Internet of Things modules using MicroPython, CircuitPython, Python or Snek. You can connect, program, debug and monitor several types of boards using network, USB or Bluetooth. Please check a list of <a href=https://bipes.net.br/wp/boards/>compatible boards here</a>. Compatible boards include STM32, ESP32, ESP8266, Raspberry Pi Pico and even Arduino.  <p><b>BIPES</b> is fully <a href=https://bipes.net.br/wp/development/>open source</a> and based on HTML and JavaScript, so no software install or configuration is needed and you can use it offline! We hope BIPES is useful for you and that you can enjoy using BIPES. If you need help, we now have a <a href=https://github.com/BIPES/BIPES/discussions>discussion forum</a>, where we also post <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>new features and announcements about BIPES</a>. Feel free to use it! Also, we invite you to use the forum to leave feedbacks and suggestions for BIPES!</p><p>Now you can easily load MicroPython on your ESP32 or ESP8226 to use with BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p> <p>A equipe do projeto BIPES agradece o seu interesse!</p>"

  




};

//Categorias da caixa de ferramentas
Blockly.Msg['CAT_TIMING'] = "Temporização";
Blockly.Msg['CAT_MACHINE'] = "Máquina";
Blockly.Msg['CAT_DISPLAYS'] = "Displays";
Blockly.Msg['CAT_SENSORS'] = "Sensores";
Blockly.Msg['CAT_OUTPUTS'] = "Saidas e atuadores";
Blockly.Msg['CAT_COMM'] = "Comunicação";
Blockly.Msg['CAT_FILES'] = "Arquivos";
Blockly.Msg['CAT_NET'] = "Rede e Internet";
Blockly.Msg['CAT_CONTROL'] = "Controle";



