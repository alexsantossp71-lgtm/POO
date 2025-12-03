const quizData = [
    // BLCO 1: Fundamentos de POO & Java
    {
        category: "Fundamentos",
        questions: [
            {
                q: "O que significa a sigla POO?",
                options: ["Programação Orientada a Objetos", "Processo de Organização de Objetos", "Protocolo de Operação Otimizada", "Programação Otimizada para Operadores"],
                answer: 0
            },
            {
                q: "Qual destes NÃO é um pilar da POO?",
                options: ["Encapsulamento", "Herança", "Compilação", "Polimorfismo"],
                answer: 2
            },
            {
                q: "Java é uma linguagem:",
                options: ["Puramente funcional", "Híbrida (Compilada e Interpretada)", "Apenas interpretada", "De baixo nível"],
                answer: 1
            },
            {
                q: "Qual o ponto de entrada de uma aplicação Java padrão?",
                options: ["start()", "init()", "public static void main(String[] args)", "run()"],
                answer: 2
            },
            {
                q: "O que é a JVM?",
                options: ["Java Visual Machine", "Java Virtual Machine", "Java Version Manager", "Just Virtual Memory"],
                answer: 1
            },
            {
                q: "Qual comando é usado para compilar um arquivo Java?",
                options: ["java", "javac", "javadoc", "jar"],
                answer: 1
            },
            {
                q: "Em Java, todas as classes herdam direta ou indiretamente de:",
                options: ["Main", "Java", "Object", "Root"],
                answer: 2
            },
            {
                q: "O que é um 'Bytecode'?",
                options: ["Código fonte Java", "Código de máquina nativo", "Código intermediário executado pela JVM", "Um tipo de variável"],
                answer: 2
            },
            {
                q: "Qual destas é uma IDE popular para Java?",
                options: ["IntelliJ IDEA", "Photoshop", "Excel", "Chrome"],
                answer: 0
            },
            {
                q: "O que significa 'WORA' em Java?",
                options: ["Write Once, Run Anywhere", "Work On Real Applications", "Write Only Read Always", "Wait On Running Apps"],
                answer: 0
            }
        ]
    },
    // BLOCO 2: Classes e Objetos
    {
        category: "Classes e Objetos",
        questions: [
            {
                q: "O que é uma Classe?",
                options: ["Um objeto concreto", "Um molde ou planta para criar objetos", "Uma variável global", "Um método especial"],
                answer: 1
            },
            {
                q: "O que é um Objeto?",
                options: ["Uma classe abstrata", "Uma instância de uma classe", "Um arquivo de texto", "Um erro de compilação"],
                answer: 1
            },
            {
                q: "Qual palavra-chave é usada para criar um novo objeto?",
                options: ["create", "make", "new", "instance"],
                answer: 2
            },
            {
                q: "O que é um Construtor?",
                options: ["Um método para destruir objetos", "Um método especial chamado ao instanciar um objeto", "Uma classe que constrói strings", "Um operador lógico"],
                answer: 1
            },
            {
                q: "Onde são armazenados os objetos em Java?",
                options: ["Stack", "Heap", "Registradores", "Disco Rígido"],
                answer: 1
            },
            {
                q: "O que é 'this' em Java?",
                options: ["Uma referência ao objeto atual", "Uma referência à classe pai", "Uma variável estática", "Um loop"],
                answer: 0
            },
            {
                q: "Uma classe pode ter quantos construtores?",
                options: ["Apenas um", "No máximo dois", "Quantos quiser (sobrecarga)", "Nenhum"],
                answer: 2
            },
            {
                q: "Se não definirmos um construtor, o que acontece?",
                options: ["Erro de compilação", "O Java cria um construtor padrão sem argumentos", "O objeto não pode ser criado", "O programa trava"],
                answer: 1
            },
            {
                q: "O que são atributos de uma classe?",
                options: ["As ações que ela executa", "As características ou dados que ela armazena", "Os nomes dos arquivos", "As bibliotecas importadas"],
                answer: 1
            },
            {
                q: "O que é Garbage Collector?",
                options: ["Um método de limpeza de tela", "Um gerenciador automático de memória que remove objetos não usados", "Um vírus", "Uma classe de coleta de dados"],
                answer: 1
            }
        ]
    },
    // BLOCO 3: Encapsulamento
    {
        category: "Encapsulamento",
        questions: [
            {
                q: "Qual o objetivo do Encapsulamento?",
                options: ["Tornar tudo público", "Ocultar detalhes internos e proteger o estado do objeto", "Aumentar o tamanho do código", "Criar herança múltipla"],
                answer: 1
            },
            {
                q: "Qual modificador deixa o membro visível apenas na própria classe?",
                options: ["public", "protected", "private", "default"],
                answer: 2
            },
            {
                q: "Qual modificador deixa o membro visível para todos?",
                options: ["public", "protected", "private", "static"],
                answer: 0
            },
            {
                q: "Para que servem Getters e Setters?",
                options: ["Para criar loops", "Para acessar e modificar atributos privados de forma controlada", "Para conectar ao banco de dados", "Para tratar exceções"],
                answer: 1
            },
            {
                q: "O modificador 'protected' permite acesso a:",
                options: ["Apenas a própria classe", "Qualquer classe do projeto", "Mesmo pacote e subclasses", "Apenas subclasses"],
                answer: 2
            },
            {
                q: "Se nenhum modificador for usado (default), a visibilidade é:",
                options: ["Apenas na classe", "Apenas no pacote", "No projeto todo", "Apenas subclasses"],
                answer: 1
            },
            {
                q: "É uma boa prática declarar atributos como:",
                options: ["public", "private", "static", "final public"],
                answer: 1
            },
            {
                q: "O que é um JavaBean?",
                options: ["Um tipo de café", "Uma classe com construtor padrão, atributos privados e getters/setters", "Uma interface gráfica", "Um erro de sintaxe"],
                answer: 1
            },
            {
                q: "Encapsulamento ajuda a reduzir:",
                options: ["Acoplamento", "Coesão", "Performance", "Segurança"],
                answer: 0
            },
            {
                q: "Podemos ter lógica de validação dentro de um Setter?",
                options: ["Não, setters devem ser simples", "Sim, é o local ideal para validar dados", "Apenas se o atributo for estático", "O Java proíbe"],
                answer: 1
            }
        ]
    },
    // BLOCO 4: Herança e Polimorfismo
    {
        category: "Herança e Polimorfismo",
        questions: [
            {
                q: "Qual palavra-chave é usada para herança?",
                options: ["implements", "inherits", "extends", "super"],
                answer: 2
            },
            {
                q: "Java suporta herança múltipla de classes?",
                options: ["Sim", "Não", "Apenas para classes abstratas", "Depende da versão"],
                answer: 1
            },
            {
                q: "O que é Polimorfismo?",
                options: ["Muitas formas; tratar objetos de subclasses como se fossem da superclasse", "Criar várias classes com mesmo nome", "criptografia de dados", "Um erro de memória"],
                answer: 0
            },
            {
                q: "O que faz a anotação @Override?",
                options: ["Cria um novo método", "Indica que um método está sobrescrevendo um da superclasse", "Impede a sobrescrita", "Define o método como privado"],
                answer: 1
            },
            {
                q: "O que é 'super'?",
                options: ["Uma classe superior", "Referência à classe pai (superclasse)", "Um método mágico", "Um modificador de acesso"],
                answer: 1
            },
            {
                q: "Sobrecarga (Overloading) é:",
                options: ["Mesmo nome de método, assinaturas diferentes na mesma classe", "Mesmo nome, mesma assinatura em classes diferentes", "Erro de compilação", "Uso excessivo de memória"],
                answer: 0
            },
            {
                q: "Sobrescrita (Overriding) é:",
                options: ["Mesmo nome, assinaturas diferentes", "Redefinir um método herdado na subclasse", "Criar um método novo", "Apagar um método"],
                answer: 1
            },
            {
                q: "Uma classe 'final' pode ser herdada?",
                options: ["Sim", "Não", "Apenas se tiver métodos abstratos", "Sim, mas sem sobrescrita"],
                answer: 1
            },
            {
                q: "O que é Upcasting?",
                options: ["Converter subclasse para superclasse", "Converter superclasse para subclasse", "Aumentar a memória", "Subir o código para a nuvem"],
                answer: 0
            },
            {
                q: "O método toString() pertence a qual classe?",
                options: ["String", "System", "Object", "Main"],
                answer: 2
            }
        ]
    },
    // BLOCO 5: Abstração e Interfaces
    {
        category: "Abstração e Interfaces",
        questions: [
            {
                q: "Uma classe abstrata pode ser instanciada?",
                options: ["Sim", "Não", "Apenas se tiver construtor", "Depende do pacote"],
                answer: 1
            },
            {
                q: "Qual palavra-chave define um método sem corpo?",
                options: ["void", "null", "abstract", "empty"],
                answer: 2
            },
            {
                q: "Uma classe pode implementar quantas interfaces?",
                options: ["Apenas uma", "Duas", "Múltiplas", "Nenhuma"],
                answer: 2
            },
            {
                q: "Qual palavra-chave é usada para usar uma interface?",
                options: ["extends", "uses", "implements", "interface"],
                answer: 2
            },
            {
                q: "Métodos em interfaces são por padrão (antes do Java 8):",
                options: ["private e final", "public e abstract", "protected e static", "default"],
                answer: 1
            },
            {
                q: "O que é um método 'default' em uma interface (Java 8+)?",
                options: ["Um método que não pode ser usado", "Um método com implementação padrão na interface", "Um erro", "Um método privado"],
                answer: 1
            },
            {
                q: "Se uma classe herda de uma abstrata, ela deve:",
                options: ["Ser abstrata também ou implementar todos os métodos abstratos", "Não fazer nada", "Criar novos métodos", "Ser final"],
                answer: 0
            },
            {
                q: "Interfaces podem ter atributos?",
                options: ["Não", "Sim, mas apenas constantes (public static final)", "Sim, qualquer tipo", "Apenas privados"],
                answer: 1
            },
            {
                q: "Qual a principal diferença entre Interface e Classe Abstrata?",
                options: ["Nenhuma", "Interface permite herança múltipla de tipo, Classe Abstrata não", "Classe Abstrata é mais rápida", "Interface tem construtor"],
                answer: 1
            },
            {
                q: "Abstração foca em:",
                options: ["Como fazer", "O que fazer", "Quando fazer", "Quem fazer"],
                answer: 1
            }
        ]
    },
    // BLOCO 6: Exceções
    {
        category: "Exceções",
        questions: [
            {
                q: "Qual bloco captura uma exceção?",
                options: ["try", "catch", "finally", "throw"],
                answer: 1
            },
            {
                q: "O bloco 'finally' executa:",
                options: ["Apenas se der erro", "Apenas se não der erro", "Sempre, ocorrendo erro ou não", "Nunca"],
                answer: 2
            },
            {
                q: "Qual a diferença entre Error e Exception?",
                options: ["Nenhuma", "Error é grave e não deve ser tratado; Exception pode ser tratada", "Exception é fatal", "Error é checado"],
                answer: 1
            },
            {
                q: "O que é uma Checked Exception?",
                options: ["Erro de lógica", "Exceção que o compilador obriga a tratar", "Exceção ignorada", "Erro de hardware"],
                answer: 1
            },
            {
                q: "NullPointerException é um exemplo de:",
                options: ["Checked Exception", "Unchecked Exception (RuntimeException)", "Error", "IOError"],
                answer: 1
            },
            {
                q: "Para lançar manualmente uma exceção, usamos:",
                options: ["throws", "throw", "try", "catch"],
                answer: 1
            },
            {
                q: "Para declarar que um método pode lançar exceção, usamos:",
                options: ["throws", "throw", "exception", "danger"],
                answer: 0
            },
            {
                q: "Podemos ter múltiplos blocos catch?",
                options: ["Não", "Sim", "Apenas dois", "Depende do compilador"],
                answer: 1
            },
            {
                q: "Qual classe é a raiz da hierarquia de exceções tratáveis?",
                options: ["Throwable", "Exception", "Error", "Object"],
                answer: 0
            },
            {
                q: "É boa prática fazer 'catch (Exception e)' vazio?",
                options: ["Sim", "Não, isso engole a exceção e dificulta o debug", "Às vezes", "Sempre"],
                answer: 1
            }
        ]
    },
    // BLOCO 7: Coleções
    {
        category: "Coleções",
        questions: [
            {
                q: "Qual interface representa uma lista ordenada?",
                options: ["Set", "Map", "List", "Queue"],
                answer: 2
            },
            {
                q: "ArrayList é baseada em:",
                options: ["Lista encadeada", "Array dinâmico", "Árvore", "Hash table"],
                answer: 1
            },
            {
                q: "Qual coleção NÃO permite elementos duplicados?",
                options: ["List", "Set", "Map", "Array"],
                answer: 1
            },
            {
                q: "HashMap armazena dados em formato:",
                options: ["Índice-Valor", "Chave-Valor", "Apenas Valor", "Binário"],
                answer: 1
            },
            {
                q: "Qual método adiciona elemento em uma List?",
                options: ["put", "push", "add", "insert"],
                answer: 2
            },
            {
                q: "Como obter o tamanho de uma coleção?",
                options: ["length()", "size()", "count()", "getSize()"],
                answer: 1
            },
            {
                q: "LinkedList é melhor que ArrayList para:",
                options: ["Acesso aleatório (get)", "Inserção/Remoção frequente no meio", "Economia de memória", "Ordenação"],
                answer: 1
            },
            {
                q: "Qual classe ordena uma lista?",
                options: ["Collections.sort()", "List.order()", "Array.sort()", "Sort.list()"],
                answer: 0
            },
            {
                q: "Map herda de Collection?",
                options: ["Sim", "Não", "Parcialmente", "Depende"],
                answer: 1
            },
            {
                q: "O que é um Iterator?",
                options: ["Um loop infinito", "Um objeto para percorrer coleções", "Um erro de lista", "Um tipo de mapa"],
                answer: 1
            }
        ]
    },
    // BLOCO 8: Streams e Lambdas
    {
        category: "Streams e Lambdas",
        questions: [
            {
                q: "Em qual versão do Java surgiram Streams e Lambdas?",
                options: ["Java 5", "Java 7", "Java 8", "Java 11"],
                answer: 2
            },
            {
                q: "Uma expressão Lambda serve para:",
                options: ["Criar classes anônimas de forma concisa", "Criar variáveis globais", "Conectar ao banco", "Compilar mais rápido"],
                answer: 0
            },
            {
                q: "Qual método de Stream filtra elementos?",
                options: ["map", "filter", "reduce", "collect"],
                answer: 1
            },
            {
                q: "Qual método de Stream transforma elementos?",
                options: ["map", "filter", "forEach", "find"],
                answer: 0
            },
            {
                q: "Streams alteram a coleção original?",
                options: ["Sim", "Não", "Às vezes", "Depende do método"],
                answer: 1
            },
            {
                q: "O que é um Predicate?",
                options: ["Uma função que retorna boolean", "Uma função que retorna void", "Um tipo de lista", "Um erro"],
                answer: 0
            },
            {
                q: "O que faz o método .collect(Collectors.toList())?",
                options: ["Apaga a lista", "Transforma o Stream de volta em Lista", "Imprime a lista", "Ordena a lista"],
                answer: 1
            },
            {
                q: "Qual a sintaxe correta de uma Lambda?",
                options: ["(params) -> expression", "{params} => expression", "function(params)", "[params] -> code"],
                answer: 0
            },
            {
                q: "Streams podem ser paralelos?",
                options: ["Não", "Sim, usando .parallelStream()", "Apenas em supercomputadores", "Sim, mas é automático sempre"],
                answer: 1
            },
            {
                q: "Optional serve para:",
                options: ["Evitar NullPointerException", "Deixar o código opcional", "Criar opções de menu", "Otimizar memória"],
                answer: 0
            }
        ]
    },
    // BLOCO 9: Threads e Concorrência
    {
        category: "Threads",
        questions: [
            {
                q: "O que é uma Thread?",
                options: ["Um cabo de rede", "Uma linha de execução leve dentro de um processo", "Um processo pesado", "Um erro de CPU"],
                answer: 1
            },
            {
                q: "Qual interface deve ser implementada para criar uma Thread?",
                options: ["Runner", "Executable", "Runnable", "Threadable"],
                answer: 2
            },
            {
                q: "Qual método inicia a execução de uma Thread?",
                options: ["run()", "start()", "init()", "go()"],
                answer: 1
            },
            {
                q: "O que acontece se chamarmos run() direto?",
                options: ["A thread inicia corretamente", "O código roda na mesma thread (não cria nova)", "Dá erro", "O PC desliga"],
                answer: 1
            },
            {
                q: "O que faz Thread.sleep()?",
                options: ["Mata a thread", "Pausa a thread por um tempo", "Acorda a thread", "Reinicia a thread"],
                answer: 1
            },
            {
                q: "O que é 'synchronized'?",
                options: ["Sincroniza o relógio", "Garante que apenas uma thread acesse o bloco por vez", "Cria threads", "Deleta threads"],
                answer: 1
            },
            {
                q: "O que é Deadlock?",
                options: ["Uma banda de rock", "Situação onde threads ficam bloqueadas esperando umas pelas outras", "Fim da execução", "Erro de memória"],
                answer: 1
            },
            {
                q: "Qual estado NÃO pertence ao ciclo de vida da Thread?",
                options: ["New", "Runnable", "Blocked", "Deleted"],
                answer: 3
            },
            {
                q: "O que é Race Condition?",
                options: ["Uma corrida de carros", "Erro quando o resultado depende da ordem de execução das threads", "Condição de parada", "Teste de velocidade"],
                answer: 1
            },
            {
                q: "ExecutorService serve para:",
                options: ["Executar vírus", "Gerenciar pools de threads de forma eficiente", "Executar apenas uma thread", "Nenhuma das anteriores"],
                answer: 1
            }
        ]
    },
    // BLOCO 10: Redes e Serialização
    {
        category: "Redes e I/O",
        questions: [
            {
                q: "Qual classe é usada para criar um servidor TCP?",
                options: ["Socket", "ServerSocket", "DatagramSocket", "HttpServer"],
                answer: 1
            },
            {
                q: "Qual classe representa o cliente TCP?",
                options: ["Socket", "ClientSocket", "Connection", "Port"],
                answer: 0
            },
            {
                q: "TCP é um protocolo:",
                options: ["Não confiável", "Orientado a conexão e confiável", "Apenas para vídeos", "Sem conexão"],
                answer: 1
            },
            {
                q: "UDP é:",
                options: ["Orientado a conexão", "Mais lento que TCP", "Sem conexão e não confiável (rápido)", "Usado para emails"],
                answer: 2
            },
            {
                q: "Para serializar um objeto, ele deve implementar:",
                options: ["Serializable", "Cloneable", "Readable", "Writable"],
                answer: 0
            },
            {
                q: "O que é 'transient'?",
                options: ["Uma variável temporária", "Indica que o atributo NÃO deve ser serializado", "Uma classe abstrata", "Um método rápido"],
                answer: 1
            },
            {
                q: "Qual classe lê bytes de um arquivo?",
                options: ["FileReader", "FileInputStream", "BufferedReader", "Scanner"],
                answer: 1
            },
            {
                q: "Qual porta padrão do HTTP?",
                options: ["80", "443", "21", "22"],
                answer: 0
            },
            {
                q: "O que é localhost?",
                options: ["A internet", "O endereço da própria máquina (127.0.0.1)", "Um servidor remoto", "Um erro de rede"],
                answer: 1
            },
            {
                q: "JSON é usado para:",
                options: ["Programar em Java", "Estilizar páginas", "Intercâmbio de dados leve", "Compilar código"],
                answer: 2
            }
        ]
    }
];
