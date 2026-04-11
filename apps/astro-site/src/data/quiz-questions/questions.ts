// Quiz Questions Database for Certification Practice

export interface Question {
    id: string;
    category: 'javascript' | 'python' | 'sql' | 'java' | 'aws' | 'docker' | 'snowflake' | 'databricks' | 'linux' | 'hardware' | 'architecture' | 'devops' | 'testing' | 'security';
    certification: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    question: string;
    code?: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export const questions: Question[] = [
    // JavaScript Questions
    {
        id: 'js-001',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'beginner',
        question: '¿Cuál es el resultado de typeof null?',
        code: 'console.log(typeof null);',
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        correctAnswer: 2,
        explanation: 'En JavaScript, typeof null retorna "object". Esto es un bug histórico que se mantiene por compatibilidad.'
    },
    {
        id: 'js-002',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'beginner',
        question: '¿Qué método se usa para agregar un elemento al final de un array?',
        options: ['unshift()', 'push()', 'pop()', 'shift()'],
        correctAnswer: 1,
        explanation: 'push() agrega elementos al final del array. unshift() los agrega al inicio, pop() remueve del final, y shift() del inicio.'
    },
    {
        id: 'js-003',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Cuál es el output de este código?',
        code: 'console.log(0.1 + 0.2 === 0.3);',
        options: ['true', 'false', 'undefined', 'Error'],
        correctAnswer: 1,
        explanation: 'Debido a la representación de punto flotante en JavaScript, 0.1 + 0.2 da 0.30000000000000004, no exactamente 0.3.'
    },
    {
        id: 'js-004',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Qué es una closure en JavaScript?',
        options: [
            'Una función que se ejecuta inmediatamente',
            'Una función que tiene acceso al scope de su función padre',
            'Un método para cerrar conexiones',
            'Un tipo de loop'
        ],
        correctAnswer: 1,
        explanation: 'Una closure es una función que recuerda y tiene acceso a las variables del scope en el que fue creada, incluso después de que ese scope haya terminado de ejecutarse.'
    },
    {
        id: 'js-005',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'beginner',
        question: '¿Cuál es la diferencia entre let y var?',
        options: [
            'No hay diferencia',
            'let tiene block scope, var tiene function scope',
            'var es más moderno que let',
            'let no puede ser reasignado'
        ],
        correctAnswer: 1,
        explanation: 'let tiene alcance de bloque (block scope), mientras que var tiene alcance de función (function scope). Además, let no sufre de hoisting de la misma manera que var.'
    },
    {
        id: 'js-006',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Qué método convierte un JSON string a objeto JavaScript?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.toObject()'],
        correctAnswer: 0,
        explanation: 'JSON.parse() convierte un string JSON a un objeto JavaScript. JSON.stringify() hace lo contrario, convierte un objeto a string JSON.'
    },
    {
        id: 'js-007',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Qué output produce este código?',
        code: `const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a);`,
        options: ['1', '2', 'undefined', 'Error'],
        correctAnswer: 0,
        explanation: 'Object.freeze() hace que un objeto sea inmutable. Intentar modificar una propiedad de un objeto congelado falla silenciosamente (o lanza error en strict mode).'
    },
    {
        id: 'js-008',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Qué es el Event Loop en JavaScript?',
        options: [
            'Un tipo de loop for...of',
            'El mecanismo que maneja la ejecución asíncrona',
            'Un evento del DOM',
            'Una función para iterar eventos'
        ],
        correctAnswer: 1,
        explanation: 'El Event Loop es el mecanismo que permite a JavaScript ejecutar código asíncrono, manejando el call stack y las callback queues.'
    },
    {
        id: 'js-009',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'beginner',
        question: '¿Cómo se declara una constante en JavaScript?',
        options: ['var x = 5', 'let x = 5', 'const x = 5', 'constant x = 5'],
        correctAnswer: 2,
        explanation: 'const se usa para declarar constantes. Una vez asignado, el valor no puede ser reasignado (aunque objetos y arrays pueden ser mutados).'
    },
    {
        id: 'js-010',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Cuál es el output?',
        code: `async function test() {
    return 1;
}
console.log(test());`,
        options: ['1', 'Promise { 1 }', 'undefined', 'Error'],
        correctAnswer: 1,
        explanation: 'Las funciones async siempre retornan una Promise. Aunque retornamos 1, el resultado es una Promise que resuelve a 1.'
    },
    {
        id: 'js-011',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿En qué orden se ejecutan estos console.log?',
        code: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');`,
        options: ['1, 2, 3, 4', '1, 4, 2, 3', '1, 4, 3, 2', '1, 3, 4, 2'],
        correctAnswer: 2,
        explanation: 'El Event Loop ejecuta: 1) código síncrono (1, 4), 2) microtasks/promises (3), 3) macrotasks/setTimeout (2). Las Promises tienen prioridad sobre setTimeout.'
    },
    {
        id: 'js-012',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Cuál es el resultado del spread operator en este caso?',
        code: `const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
arr1.push(5);
console.log(arr2);`,
        options: ['[1, 2, 3, 4]', '[1, 2, 3, 4, 5]', '[1, 2, 5, 3, 4]', 'Error'],
        correctAnswer: 0,
        explanation: 'El spread operator crea una copia superficial de los elementos. Los cambios posteriores a arr1 no afectan a arr2.'
    },
    {
        id: 'js-013',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Qué método de array NO muta el array original?',
        options: ['push()', 'splice()', 'sort()', 'map()'],
        correctAnswer: 3,
        explanation: 'map() retorna un nuevo array sin modificar el original. push(), splice() y sort() mutan el array original.'
    },
    {
        id: 'js-014',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Cuál es el output de esta destructuración?',
        code: `const { a, b = 10, ...rest } = { a: 1, c: 3, d: 4 };
console.log(a, b, rest);`,
        options: ['1 undefined {c: 3, d: 4}', '1 10 {c: 3, d: 4}', 'Error', '1 10 {a: 1, c: 3, d: 4}'],
        correctAnswer: 1,
        explanation: 'La destructuración asigna a=1, b usa el valor por defecto 10 (porque no existe b en el objeto), y rest captura las propiedades restantes.'
    },
    {
        id: 'js-015',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Qué es el "this" dentro de una arrow function?',
        code: `const obj = {
    name: 'Test',
    regular: function() { return this.name; },
    arrow: () => this.name
};`,
        options: [
            'Siempre undefined',
            'El objeto window/global',
            'El this del contexto léxico donde se definió',
            'El objeto obj'
        ],
        correctAnswer: 2,
        explanation: 'Las arrow functions no tienen su propio "this". Usan el "this" del scope léxico donde fueron definidas, no donde se ejecutan.'
    },
    {
        id: 'js-016',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre == y ===?',
        code: `console.log(1 == '1');
console.log(1 === '1');`,
        options: ['true, true', 'false, false', 'true, false', 'false, true'],
        correctAnswer: 2,
        explanation: '== realiza coerción de tipos (1 == "1" es true), mientras que === compara valor Y tipo sin coerción (1 === "1" es false).'
    },
    {
        id: 'js-017',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Cómo funciona Promise.all() cuando una promesa falla?',
        options: [
            'Retorna los resultados exitosos e ignora los errores',
            'Rechaza inmediatamente con el primer error',
            'Espera a que todas terminen y luego reporta errores',
            'Convierte errores en null'
        ],
        correctAnswer: 1,
        explanation: 'Promise.all() tiene comportamiento "fail-fast": si cualquier promesa rechaza, todo el Promise.all() rechaza inmediatamente con ese error.'
    },
    {
        id: 'js-018',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Qué es el "nullish coalescing operator" (??)?',
        code: `const a = null ?? 'default';
const b = 0 ?? 'default';
console.log(a, b);`,
        options: ['"default", "default"', '"default", 0', 'null, 0', 'null, "default"'],
        correctAnswer: 1,
        explanation: '?? solo usa el valor por defecto si el lado izquierdo es null o undefined. A diferencia de ||, no trata 0, "" o false como falsy.'
    },
    {
        id: 'js-019',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Cuál es el propósito de Symbol en JavaScript?',
        options: [
            'Crear strings únicos para debugging',
            'Crear identificadores únicos e inmutables para propiedades',
            'Encriptar valores sensibles',
            'Optimizar el rendimiento de objetos'
        ],
        correctAnswer: 1,
        explanation: 'Symbol crea valores primitivos únicos, usados principalmente como claves de propiedades que no colisionan con otras propiedades del objeto.'
    },
    {
        id: 'js-020',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Qué output produce este código con WeakMap?',
        code: `let obj = { key: 'value' };
const weakMap = new WeakMap();
weakMap.set(obj, 'data');
obj = null;
// Después del garbage collection...`,
        options: [
            'weakMap mantiene el objeto indefinidamente',
            'El entry se elimina automáticamente (garbage collected)',
            'Error: WeakMap no acepta objetos',
            'weakMap.get(obj) retorna "data"'
        ],
        correctAnswer: 1,
        explanation: 'WeakMap tiene referencias débiles a sus claves. Si no hay otra referencia al objeto, puede ser garbage collected junto con su entry en el WeakMap.'
    },

    // Python Questions
    {
        id: 'py-001',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'beginner',
        question: '¿Cuál es el output de este código?',
        code: 'print(type([]))',
        options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'set'>"],
        correctAnswer: 1,
        explanation: 'En Python, [] crea una lista (list), no un array. Los arrays son parte del módulo array.'
    },
    {
        id: 'py-002',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'beginner',
        question: '¿Qué método se usa para agregar un elemento a una lista?',
        options: ['add()', 'push()', 'append()', 'insert()'],
        correctAnswer: 2,
        explanation: 'append() agrega un elemento al final de la lista. insert() permite especificar la posición.'
    },
    {
        id: 'py-003',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'intermediate',
        question: '¿Cuál es el output?',
        code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
        options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4, 1, 2, 3]', 'Error'],
        correctAnswer: 1,
        explanation: 'En Python, las listas son mutables y se pasan por referencia. y = x crea una referencia al mismo objeto, no una copia.'
    },
    {
        id: 'py-004',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'beginner',
        question: '¿Qué es una list comprehension?',
        code: '[x**2 for x in range(5)]',
        options: [
            'Un error de sintaxis',
            'Una forma concisa de crear listas',
            'Un tipo de loop',
            'Una función built-in'
        ],
        correctAnswer: 1,
        explanation: 'List comprehension es una forma elegante y concisa de crear listas en Python. El ejemplo crea [0, 1, 4, 9, 16].'
    },
    {
        id: 'py-005',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre == y is?',
        options: [
            'No hay diferencia',
            '== compara valores, is compara identidad',
            'is es más rápido que ==',
            '== solo funciona con números'
        ],
        correctAnswer: 1,
        explanation: '== compara si dos objetos tienen el mismo valor, mientras que is compara si son el mismo objeto en memoria.'
    },
    {
        id: 'py-006',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'intermediate',
        question: '¿Qué hace el decorador @staticmethod?',
        options: [
            'Hace el método más rápido',
            'Define un método que no requiere self ni cls',
            'Hace el método privado',
            'Convierte el método en generador'
        ],
        correctAnswer: 1,
        explanation: '@staticmethod define un método que no recibe self (instancia) ni cls (clase), funcionando como una función regular dentro de la clase.'
    },
    {
        id: 'py-007',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'advanced',
        question: '¿Cuál es el output?',
        code: `def func(a, b=[]):
    b.append(a)
    return b

print(func(1))
print(func(2))`,
        options: ['[1] y [2]', '[1] y [1, 2]', '[1, 2] y [1, 2]', 'Error'],
        correctAnswer: 1,
        explanation: 'Los argumentos por defecto mutables (como listas) se evalúan una sola vez. La misma lista se reutiliza en cada llamada.'
    },
    {
        id: 'py-008',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'beginner',
        question: '¿Cómo se define un diccionario vacío?',
        options: ['[]', '{}', '()', 'dict[]'],
        correctAnswer: 1,
        explanation: '{} crea un diccionario vacío. [] crea una lista, () una tupla.'
    },
    {
        id: 'py-009',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'intermediate',
        question: '¿Qué es un generator en Python?',
        options: [
            'Una función que genera números aleatorios',
            'Una función que usa yield para retornar valores de forma lazy',
            'Un tipo de clase',
            'Una forma de crear listas'
        ],
        correctAnswer: 1,
        explanation: 'Un generator es una función que usa yield para retornar valores uno a la vez, manteniendo su estado entre llamadas.'
    },
    {
        id: 'py-010',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'advanced',
        question: '¿Qué es el GIL (Global Interpreter Lock)?',
        options: [
            'Un mecanismo de seguridad',
            'Un lock que permite solo un thread ejecutar Python a la vez',
            'Una herramienta de debugging',
            'Un tipo de variable global'
        ],
        correctAnswer: 1,
        explanation: 'El GIL es un mutex que protege el acceso a objetos Python, permitiendo solo un thread ejecutar bytecode a la vez, limitando el paralelismo real.'
    },

    // SQL Questions
    {
        id: 'sql-001',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'beginner',
        question: '¿Cuál es la diferencia entre WHERE y HAVING?',
        options: [
            'No hay diferencia',
            'WHERE filtra filas, HAVING filtra grupos',
            'HAVING es más rápido',
            'WHERE solo funciona con números'
        ],
        correctAnswer: 1,
        explanation: 'WHERE filtra filas antes del agrupamiento, HAVING filtra después del GROUP BY sobre los grupos resultantes.'
    },
    {
        id: 'sql-002',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'beginner',
        question: '¿Qué hace DISTINCT?',
        options: [
            'Ordena los resultados',
            'Elimina filas duplicadas',
            'Cuenta filas',
            'Une tablas'
        ],
        correctAnswer: 1,
        explanation: 'DISTINCT elimina filas duplicadas del resultado de una query.'
    },
    {
        id: 'sql-003',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre INNER JOIN y LEFT JOIN?',
        options: [
            'No hay diferencia',
            'INNER retorna solo coincidencias, LEFT retorna todas las filas de la tabla izquierda',
            'LEFT JOIN es más rápido',
            'INNER JOIN une más de 2 tablas'
        ],
        correctAnswer: 1,
        explanation: 'INNER JOIN retorna solo filas que coinciden en ambas tablas. LEFT JOIN retorna todas las filas de la tabla izquierda y las coincidencias de la derecha.'
    },
    {
        id: 'sql-004',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'beginner',
        question: '¿Qué función cuenta filas incluyendo NULL?',
        options: ['COUNT(*)', 'COUNT(column)', 'SUM()', 'TOTAL()'],
        correctAnswer: 0,
        explanation: 'COUNT(*) cuenta todas las filas incluyendo NULLs. COUNT(column) solo cuenta valores no NULL de esa columna.'
    },
    {
        id: 'sql-005',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'intermediate',
        question: '¿Qué es una subquery correlacionada?',
        options: [
            'Una query anidada que no depende de la query externa',
            'Una query anidada que referencia columnas de la query externa',
            'Una query con JOIN',
            'Una query con UNION'
        ],
        correctAnswer: 1,
        explanation: 'Una subquery correlacionada hace referencia a columnas de la query externa, ejecutándose una vez por cada fila de la query principal.'
    },
    {
        id: 'sql-006',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'advanced',
        question: '¿Qué es un índice clustered?',
        options: [
            'Un índice secundario',
            'Un índice que determina el orden físico de los datos en la tabla',
            'Un índice para queries paralelas',
            'Un índice temporal'
        ],
        correctAnswer: 1,
        explanation: 'Un índice clustered determina el orden físico de almacenamiento de las filas. Solo puede haber uno por tabla.'
    },
    {
        id: 'sql-007',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'beginner',
        question: '¿Cuál es el orden correcto de las cláusulas SQL?',
        options: [
            'SELECT, WHERE, FROM, GROUP BY',
            'SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY',
            'FROM, SELECT, WHERE, ORDER BY',
            'SELECT, FROM, ORDER BY, WHERE'
        ],
        correctAnswer: 1,
        explanation: 'El orden correcto es: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.'
    },
    {
        id: 'sql-008',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'intermediate',
        question: '¿Qué es normalización en bases de datos?',
        options: [
            'Proceso de optimizar queries',
            'Proceso de organizar datos para reducir redundancia',
            'Proceso de hacer backup',
            'Proceso de crear índices'
        ],
        correctAnswer: 1,
        explanation: 'La normalización organiza las tablas y relaciones para minimizar la redundancia de datos y mejorar la integridad.'
    },
    {
        id: 'sql-009',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'advanced',
        question: '¿Qué es ACID en bases de datos?',
        options: [
            'Un tipo de query',
            'Atomicity, Consistency, Isolation, Durability',
            'Un motor de base de datos',
            'Un lenguaje de programación'
        ],
        correctAnswer: 1,
        explanation: 'ACID son las propiedades que garantizan transacciones confiables: Atomicidad, Consistencia, Aislamiento y Durabilidad.'
    },
    {
        id: 'sql-010',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'intermediate',
        question: '¿Qué hace COALESCE?',
        options: [
            'Une strings',
            'Retorna el primer valor no NULL de una lista',
            'Convierte tipos de datos',
            'Agrupa resultados'
        ],
        correctAnswer: 1,
        explanation: 'COALESCE retorna el primer valor no NULL de la lista de argumentos. Es útil para manejar NULLs.'
    },

    // SQL Questions - Alineadas con MDY1101/MDY3131 DuocUC
    {
        id: 'sql-011',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY1101',
        difficulty: 'beginner',
        question: '¿Qué comando SQL se usa para crear una nueva tabla?',
        code: 'CREATE TABLE productos (id INT PRIMARY KEY, nombre VARCHAR(100));',
        options: ['INSERT TABLE', 'NEW TABLE', 'CREATE TABLE', 'MAKE TABLE'],
        correctAnswer: 2,
        explanation: 'CREATE TABLE es el comando DDL para crear tablas. Se especifica el nombre y las columnas con sus tipos de datos.'
    },
    {
        id: 'sql-012',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY1101',
        difficulty: 'beginner',
        question: '¿Qué es una clave primaria (PRIMARY KEY)?',
        options: [
            'Una columna que puede tener valores duplicados',
            'Un identificador único para cada fila que no acepta NULL ni duplicados',
            'Una columna opcional',
            'Una contraseña de la base de datos'
        ],
        correctAnswer: 1,
        explanation: 'La PRIMARY KEY identifica de forma única cada registro de una tabla. No permite valores NULL ni duplicados.'
    },
    {
        id: 'sql-013',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY1101',
        difficulty: 'intermediate',
        question: '¿Qué es una clave foránea (FOREIGN KEY)?',
        code: 'FOREIGN KEY (cliente_id) REFERENCES clientes(id)',
        options: [
            'Una clave de otro país',
            'Una columna que referencia la clave primaria de otra tabla',
            'Una clave encriptada',
            'Una clave temporal'
        ],
        correctAnswer: 1,
        explanation: 'La FOREIGN KEY crea una relación entre tablas, referenciando la PRIMARY KEY de otra tabla para mantener integridad referencial.'
    },
    {
        id: 'sql-014',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY1101',
        difficulty: 'beginner',
        question: '¿Cuál es la diferencia entre DELETE y TRUNCATE?',
        options: [
            'No hay diferencia',
            'DELETE puede filtrar con WHERE, TRUNCATE elimina todos los registros',
            'TRUNCATE es más lento',
            'DELETE no puede deshacerse'
        ],
        correctAnswer: 1,
        explanation: 'DELETE permite WHERE para eliminar registros específicos y se puede revertir con ROLLBACK. TRUNCATE elimina todo sin log de transacción.'
    },
    {
        id: 'sql-015',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY3131',
        difficulty: 'intermediate',
        question: '¿Qué es la Primera Forma Normal (1FN)?',
        options: [
            'Tener una clave primaria',
            'Eliminar grupos repetitivos y asegurar que cada celda tenga un valor atómico',
            'No tener claves foráneas',
            'Tener al menos 3 columnas'
        ],
        correctAnswer: 1,
        explanation: '1FN requiere que cada celda contenga un solo valor (atómico), eliminando grupos repetitivos y atributos multivaluados.'
    },
    {
        id: 'sql-016',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY3131',
        difficulty: 'intermediate',
        question: '¿Qué tipo de relación representa un diagrama donde un Cliente puede tener muchos Pedidos?',
        options: [
            'Uno a Uno (1:1)',
            'Uno a Muchos (1:N)',
            'Muchos a Muchos (N:M)',
            'Ninguna relación'
        ],
        correctAnswer: 1,
        explanation: 'Una relación 1:N (Uno a Muchos) significa que un registro de una tabla se relaciona con múltiples registros de otra. Un Cliente tiene muchos Pedidos.'
    },
    {
        id: 'sql-017',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY1101',
        difficulty: 'beginner',
        question: '¿Qué comando SQL modifica registros existentes?',
        code: 'UPDATE productos SET precio = 1500 WHERE id = 1;',
        options: ['MODIFY', 'CHANGE', 'UPDATE', 'ALTER'],
        correctAnswer: 2,
        explanation: 'UPDATE modifica datos existentes en una tabla. ALTER modifica la estructura de la tabla, no los datos.'
    },
    {
        id: 'sql-018',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY3131',
        difficulty: 'advanced',
        question: '¿Qué es un procedimiento almacenado (Stored Procedure)?',
        options: [
            'Un backup de la base de datos',
            'Un conjunto de instrucciones SQL guardadas que se pueden ejecutar como unidad',
            'Una tabla temporal',
            'Un tipo de índice'
        ],
        correctAnswer: 1,
        explanation: 'Un Stored Procedure es código SQL compilado y guardado en el servidor que se puede llamar por nombre, acepta parámetros y mejora rendimiento.'
    },
    {
        id: 'sql-019',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY3131',
        difficulty: 'intermediate',
        question: '¿Qué es una transacción en SQL?',
        code: `BEGIN TRANSACTION;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;`,
        options: [
            'Una consulta SELECT',
            'Una unidad de trabajo que se ejecuta completamente o no se ejecuta',
            'Un tipo de JOIN',
            'Una copia de seguridad'
        ],
        correctAnswer: 1,
        explanation: 'Una transacción agrupa operaciones que deben ejecutarse todas (COMMIT) o ninguna (ROLLBACK), garantizando integridad de datos.'
    },
    {
        id: 'sql-020',
        category: 'sql',
        certification: 'SQL Fundamentals / MDY3131',
        difficulty: 'advanced',
        question: '¿Qué es un trigger en bases de datos?',
        options: [
            'Un botón de la interfaz',
            'Código que se ejecuta automáticamente ante eventos INSERT/UPDATE/DELETE',
            'Un tipo de índice',
            'Una consulta programada'
        ],
        correctAnswer: 1,
        explanation: 'Un Trigger es código que se dispara automáticamente cuando ocurren eventos específicos (INSERT, UPDATE, DELETE) en una tabla.'
    },

    // AWS Questions
    {
        id: 'aws-001',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué servicio de AWS se usa para almacenamiento de objetos?',
        options: ['EC2', 'S3', 'RDS', 'Lambda'],
        correctAnswer: 1,
        explanation: 'Amazon S3 (Simple Storage Service) es el servicio de almacenamiento de objetos de AWS, ideal para archivos, backups, y contenido estático.'
    },
    {
        id: 'aws-002',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué es EC2?',
        options: [
            'Base de datos relacional',
            'Servicio de computación en la nube (máquinas virtuales)',
            'Servicio de storage',
            'Servicio de red'
        ],
        correctAnswer: 1,
        explanation: 'Amazon EC2 (Elastic Compute Cloud) proporciona capacidad de computación escalable en la nube, permitiendo lanzar servidores virtuales.'
    },
    {
        id: 'aws-003',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'intermediate',
        question: '¿Cuál es el modelo de responsabilidad compartida de AWS?',
        options: [
            'AWS es responsable de todo',
            'El cliente es responsable de todo',
            'AWS de la infraestructura, el cliente de sus datos y aplicaciones',
            'Solo aplica a empresas grandes'
        ],
        correctAnswer: 2,
        explanation: 'En el modelo de responsabilidad compartida, AWS gestiona la seguridad DE la nube (infraestructura), y el cliente gestiona la seguridad EN la nube (datos, apps, configuración).'
    },
    {
        id: 'aws-004',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué servicio de AWS es serverless para ejecutar código?',
        options: ['EC2', 'ECS', 'Lambda', 'Lightsail'],
        correctAnswer: 2,
        explanation: 'AWS Lambda permite ejecutar código sin aprovisionar servidores. Solo pagas por el tiempo de ejecución.'
    },
    {
        id: 'aws-005',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'intermediate',
        question: '¿Qué es una VPC en AWS?',
        options: [
            'Virtual Private Cloud - red virtual aislada',
            'Virtual Processing Center',
            'Very Private Connection',
            'Virtual Public Cloud'
        ],
        correctAnswer: 0,
        explanation: 'VPC (Virtual Private Cloud) es una red virtual aislada lógicamente en AWS donde puedes lanzar recursos.'
    },
    {
        id: 'aws-006',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre RDS y DynamoDB?',
        options: [
            'RDS es NoSQL, DynamoDB es SQL',
            'RDS es SQL relacional, DynamoDB es NoSQL',
            'No hay diferencia',
            'DynamoDB es más caro siempre'
        ],
        correctAnswer: 1,
        explanation: 'RDS es un servicio de base de datos relacional (MySQL, PostgreSQL, etc.), mientras DynamoDB es NoSQL key-value.'
    },
    {
        id: 'aws-007',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué servicio de AWS se usa para CDN (distribución de contenido)?',
        options: ['S3', 'CloudFront', 'Route 53', 'ELB'],
        correctAnswer: 1,
        explanation: 'Amazon CloudFront es el servicio de CDN que distribuye contenido globalmente con baja latencia.'
    },
    {
        id: 'aws-008',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'advanced',
        question: '¿Qué es AWS IAM?',
        options: [
            'Internet Access Manager',
            'Identity and Access Management',
            'Integrated Application Monitor',
            'Instance Administration Module'
        ],
        correctAnswer: 1,
        explanation: 'IAM (Identity and Access Management) permite gestionar usuarios, grupos, roles y permisos de acceso a recursos AWS.'
    },
    {
        id: 'aws-009',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'intermediate',
        question: '¿Qué clases de almacenamiento S3 son las más económicas para datos raramente accedidos?',
        options: [
            'S3 Standard',
            'S3 Glacier / Glacier Deep Archive',
            'S3 One Zone-IA',
            'S3 Intelligent-Tiering'
        ],
        correctAnswer: 1,
        explanation: 'S3 Glacier y Glacier Deep Archive son las opciones más económicas para archivado de largo plazo con acceso poco frecuente.'
    },
    {
        id: 'aws-010',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué es Route 53?',
        options: [
            'Servicio de routing de red',
            'Servicio de DNS',
            'Balanceador de carga',
            'Firewall'
        ],
        correctAnswer: 1,
        explanation: 'Amazon Route 53 es el servicio de DNS de AWS, que también ofrece health checks y routing policies.'
    },

    // Docker Questions
    {
        id: 'docker-001',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'beginner',
        question: '¿Cuál es la diferencia entre una imagen y un contenedor Docker?',
        options: [
            'No hay diferencia',
            'La imagen es el template, el contenedor es la instancia en ejecución',
            'El contenedor es el template',
            'La imagen solo existe en la nube'
        ],
        correctAnswer: 1,
        explanation: 'Una imagen Docker es un template inmutable. Un contenedor es una instancia en ejecución de esa imagen.'
    },
    {
        id: 'docker-002',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'beginner',
        question: '¿Qué comando lista los contenedores en ejecución?',
        options: ['docker images', 'docker ps', 'docker list', 'docker containers'],
        correctAnswer: 1,
        explanation: 'docker ps lista los contenedores en ejecución. docker ps -a lista todos, incluyendo los detenidos.'
    },
    {
        id: 'docker-003',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'intermediate',
        question: '¿Qué instrucción de Dockerfile se usa para ejecutar comandos durante el build?',
        options: ['CMD', 'RUN', 'EXEC', 'BUILD'],
        correctAnswer: 1,
        explanation: 'RUN ejecuta comandos durante el build de la imagen. CMD define el comando por defecto cuando el contenedor inicia.'
    },
    {
        id: 'docker-004',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre CMD y ENTRYPOINT?',
        options: [
            'No hay diferencia',
            'CMD puede ser sobrescrito al ejecutar, ENTRYPOINT define el ejecutable principal',
            'ENTRYPOINT es más antiguo',
            'CMD es solo para scripts'
        ],
        correctAnswer: 1,
        explanation: 'ENTRYPOINT configura el contenedor como un ejecutable. CMD proporciona argumentos por defecto que pueden ser sobrescritos.'
    },
    {
        id: 'docker-005',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'beginner',
        question: '¿Cómo se expone un puerto en un contenedor Docker?',
        options: [
            'docker run -p 80:80 image',
            'docker run --port 80 image',
            'docker run -open 80 image',
            'docker expose 80 image'
        ],
        correctAnswer: 0,
        explanation: 'La flag -p (publish) mapea puertos. -p host:container, por ejemplo -p 8080:80 mapea el puerto 80 del contenedor al 8080 del host.'
    },
    {
        id: 'docker-006',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'intermediate',
        question: '¿Qué es un Docker volume?',
        options: [
            'Un tipo de red',
            'Un mecanismo para persistir datos fuera del contenedor',
            'Un contenedor especial',
            'Una imagen comprimida'
        ],
        correctAnswer: 1,
        explanation: 'Los volumes permiten persistir datos generados por contenedores, almacenándolos fuera del sistema de archivos del contenedor.'
    },
    {
        id: 'docker-007',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'advanced',
        question: '¿Qué es Docker Compose?',
        options: [
            'Un editor de Dockerfiles',
            'Una herramienta para definir y ejecutar aplicaciones multi-contenedor',
            'Un sistema de monitoreo',
            'Un registro de imágenes'
        ],
        correctAnswer: 1,
        explanation: 'Docker Compose permite definir y ejecutar aplicaciones multi-contenedor usando un archivo YAML (docker-compose.yml).'
    },
    {
        id: 'docker-008',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'intermediate',
        question: '¿Qué hace la instrucción COPY en un Dockerfile?',
        options: [
            'Copia archivos del contenedor al host',
            'Copia archivos del contexto de build a la imagen',
            'Clona un repositorio git',
            'Duplica una capa de la imagen'
        ],
        correctAnswer: 1,
        explanation: 'COPY copia archivos o directorios del contexto de build (host) a la imagen Docker.'
    },
    {
        id: 'docker-009',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'advanced',
        question: '¿Qué es un multi-stage build?',
        options: [
            'Construir múltiples imágenes a la vez',
            'Usar múltiples FROM en un Dockerfile para reducir el tamaño final',
            'Ejecutar múltiples CMD',
            'Usar varios registros'
        ],
        correctAnswer: 1,
        explanation: 'Multi-stage builds permiten usar múltiples FROM en un Dockerfile, copiando solo los artefactos necesarios a la imagen final, reduciendo su tamaño.'
    },
    {
        id: 'docker-010',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'beginner',
        question: '¿Dónde se almacenan las imágenes Docker por defecto?',
        options: [
            'En la nube',
            'En Docker Hub',
            'En el sistema de archivos local del Docker daemon',
            'En el contenedor'
        ],
        correctAnswer: 2,
        explanation: 'Las imágenes se almacenan localmente en el sistema de archivos del Docker daemon. Docker Hub es un registro remoto opcional.'
    },

    // Java Questions
    {
        id: 'java-001',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'beginner',
        question: '¿Cuál es la diferencia entre == y .equals() en Java?',
        options: [
            'No hay diferencia',
            '== compara referencias, .equals() compara contenido',
            '.equals() es más rápido',
            '== solo funciona con primitivos'
        ],
        correctAnswer: 1,
        explanation: '== compara referencias de objetos (si apuntan al mismo objeto en memoria), mientras que .equals() compara el contenido de los objetos.'
    },
    {
        id: 'java-002',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'beginner',
        question: '¿Qué es el JVM?',
        options: [
            'Java Virtual Machine - ejecuta bytecode Java',
            'Java Version Manager',
            'Java Visual Monitor',
            'Java Variable Memory'
        ],
        correctAnswer: 0,
        explanation: 'JVM (Java Virtual Machine) es la máquina virtual que ejecuta bytecode Java, permitiendo la portabilidad "Write Once, Run Anywhere".'
    },
    {
        id: 'java-003',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre ArrayList y LinkedList?',
        options: [
            'No hay diferencia',
            'ArrayList usa array dinámico, LinkedList usa nodos enlazados',
            'LinkedList es más rápido para todo',
            'ArrayList no permite duplicados'
        ],
        correctAnswer: 1,
        explanation: 'ArrayList usa un array redimensionable (rápido para acceso por índice), LinkedList usa nodos doblemente enlazados (rápido para inserciones/eliminaciones).'
    },
    {
        id: 'java-004',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'intermediate',
        question: '¿Qué es un Stream en Java 8+?',
        options: [
            'Un tipo de archivo',
            'Una secuencia de elementos que soporta operaciones funcionales',
            'Una conexión de red',
            'Un tipo de thread'
        ],
        correctAnswer: 1,
        explanation: 'Los Streams permiten procesar colecciones de forma declarativa con operaciones como filter, map, reduce.'
    },
    {
        id: 'java-005',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'beginner',
        question: '¿Qué modificador hace que una variable no pueda ser modificada?',
        options: ['static', 'final', 'const', 'immutable'],
        correctAnswer: 1,
        explanation: 'final hace que una variable no pueda ser reasignada. Para objetos, la referencia es final pero el objeto puede ser mutado.'
    },
    {
        id: 'java-006',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'intermediate',
        question: '¿Qué es la herencia en Java?',
        options: [
            'Crear copias de objetos',
            'Mecanismo donde una clase adquiere propiedades de otra',
            'Compartir variables entre métodos',
            'Un tipo de polimorfismo'
        ],
        correctAnswer: 1,
        explanation: 'La herencia permite que una clase (subclase) herede atributos y métodos de otra (superclase) usando extends.'
    },
    {
        id: 'java-007',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'advanced',
        question: '¿Qué es el Garbage Collector?',
        options: [
            'Un depurador de código',
            'El mecanismo que libera memoria de objetos no referenciados',
            'Un optimizador de código',
            'Un gestor de dependencias'
        ],
        correctAnswer: 1,
        explanation: 'El Garbage Collector libera automáticamente la memoria ocupada por objetos que ya no tienen referencias, evitando memory leaks.'
    },
    {
        id: 'java-008',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'intermediate',
        question: '¿Qué es una interfaz en Java?',
        options: [
            'Un tipo de clase',
            'Un contrato que define métodos que una clase debe implementar',
            'Una clase con solo atributos',
            'Un tipo de herencia múltiple'
        ],
        correctAnswer: 1,
        explanation: 'Una interfaz define un contrato de métodos (y desde Java 8, puede tener default methods). Las clases implementan interfaces con implements.'
    },
    {
        id: 'java-009',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'advanced',
        question: '¿Qué es synchronized en Java?',
        options: [
            'Un tipo de variable',
            'Mecanismo para controlar acceso concurrente a recursos',
            'Una forma de ordenar colecciones',
            'Un modificador de clase'
        ],
        correctAnswer: 1,
        explanation: 'synchronized asegura que solo un thread a la vez pueda acceder a un bloque o método, previniendo condiciones de carrera.'
    },
    {
        id: 'java-010',
        category: 'java',
        certification: 'Oracle Java SE',
        difficulty: 'beginner',
        question: '¿Cuál es el punto de entrada de una aplicación Java?',
        code: 'public static void main(String[] args)',
        options: [
            'El constructor de la clase',
            'El método main con la firma correcta',
            'Cualquier método público',
            'El método start()'
        ],
        correctAnswer: 1,
        explanation: 'El método main(String[] args) es el punto de entrada. Debe ser public, static, void y recibir un array de String.'
    },

    // Java POO Questions - Alineadas con PRY2202 DuocUC
    {
        id: 'java-011',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'beginner',
        question: '¿Cuáles son los 4 pilares de la Programación Orientada a Objetos?',
        options: [
            'Clase, Objeto, Método, Atributo',
            'Encapsulamiento, Herencia, Polimorfismo, Abstracción',
            'Public, Private, Protected, Default',
            'Interface, Abstract, Final, Static'
        ],
        correctAnswer: 1,
        explanation: 'Los 4 pilares de POO son: Encapsulamiento (ocultar datos), Herencia (reutilizar código), Polimorfismo (múltiples formas) y Abstracción (ocultar complejidad).'
    },
    {
        id: 'java-012',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'beginner',
        question: '¿Qué es el Encapsulamiento en POO?',
        options: [
            'Crear múltiples constructores',
            'Ocultar los datos internos y controlar su acceso mediante getters/setters',
            'Heredar de una clase padre',
            'Implementar múltiples interfaces'
        ],
        correctAnswer: 1,
        explanation: 'El Encapsulamiento protege los datos internos de una clase haciendo los atributos private y proporcionando métodos public (getters/setters) para accederlos.'
    },
    {
        id: 'java-013',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'intermediate',
        question: '¿Qué palabra clave se usa para heredar de una clase en Java?',
        code: 'class Empleado extends Persona { }',
        options: ['implements', 'inherits', 'extends', 'super'],
        correctAnswer: 2,
        explanation: 'extends se usa para herencia de clases. implements es para interfaces. super se usa para llamar al constructor o método de la clase padre.'
    },
    {
        id: 'java-014',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'intermediate',
        question: '¿Qué es el Polimorfismo en Java?',
        code: `Animal animal = new Perro();
animal.hacerSonido(); // "Guau"`,
        options: [
            'Crear múltiples clases con el mismo nombre',
            'La capacidad de un objeto de tomar múltiples formas',
            'Ocultar la implementación de métodos',
            'Definir variables estáticas'
        ],
        correctAnswer: 1,
        explanation: 'El Polimorfismo permite que una referencia de tipo padre apunte a objetos de clases hijas, y el método ejecutado depende del tipo real del objeto.'
    },
    {
        id: 'java-015',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre una clase abstracta y una interfaz?',
        options: [
            'No hay diferencia en Java 8+',
            'Abstract puede tener métodos implementados y atributos; interface solo métodos abstractos (antes de Java 8)',
            'Interface puede tener constructores',
            'Abstract class puede implementar múltiples clases'
        ],
        correctAnswer: 1,
        explanation: 'Una clase abstracta puede tener métodos concretos, atributos y constructor. Una interfaz (pre-Java 8) solo tenía métodos abstractos. Desde Java 8, interfaces pueden tener default methods.'
    },
    {
        id: 'java-016',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'beginner',
        question: '¿Qué modificador de acceso permite acceso solo dentro de la misma clase?',
        options: ['public', 'protected', 'default (package)', 'private'],
        correctAnswer: 3,
        explanation: 'private: solo la misma clase. default: mismo paquete. protected: mismo paquete + subclases. public: acceso desde cualquier lugar.'
    },
    {
        id: 'java-017',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'intermediate',
        question: '¿Qué es un constructor en Java?',
        code: `public class Producto {
    private String nombre;
    public Producto(String nombre) {
        this.nombre = nombre;
    }
}`,
        options: [
            'Un método que retorna void',
            'Un método especial que inicializa objetos al crearlos',
            'Un método estático',
            'Un método abstracto'
        ],
        correctAnswer: 1,
        explanation: 'Un constructor es un método especial sin tipo de retorno que tiene el mismo nombre de la clase y se ejecuta al crear un objeto con new.'
    },
    {
        id: 'java-018',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'advanced',
        question: '¿Qué principio SOLID representa la "S"?',
        options: [
            'Single Responsibility - Una clase debe tener una sola razón para cambiar',
            'Strict Typing - Tipos estrictos',
            'Static Methods - Usar métodos estáticos',
            'Secure Access - Acceso seguro'
        ],
        correctAnswer: 0,
        explanation: 'Single Responsibility Principle (SRP): Una clase debe tener una única responsabilidad o razón para cambiar. Mejora mantenibilidad y cohesión.'
    },
    {
        id: 'java-019',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'advanced',
        question: '¿Qué es la sobrecarga (overloading) de métodos?',
        code: `public int sumar(int a, int b) { ... }
public double sumar(double a, double b) { ... }`,
        options: [
            'Redefinir un método heredado',
            'Definir múltiples métodos con el mismo nombre pero diferentes parámetros',
            'Ejecutar múltiples métodos a la vez',
            'Cargar métodos de otra clase'
        ],
        correctAnswer: 1,
        explanation: 'Overloading es tener múltiples métodos con el mismo nombre pero diferente firma (número o tipo de parámetros). Se resuelve en tiempo de compilación.'
    },
    {
        id: 'java-020',
        category: 'java',
        certification: 'Oracle Java SE / PRY2202',
        difficulty: 'advanced',
        question: '¿Qué es la sobrescritura (overriding) de métodos?',
        code: `class Animal {
    void hacerSonido() { System.out.println("..."); }
}
class Perro extends Animal {
    @Override
    void hacerSonido() { System.out.println("Guau"); }
}`,
        options: [
            'Crear métodos con el mismo nombre y diferentes parámetros',
            'Redefinir en la subclase un método heredado de la superclase',
            'Llamar al método de la clase padre',
            'Convertir un método a estático'
        ],
        correctAnswer: 1,
        explanation: 'Overriding es redefinir un método de la clase padre en la subclase con la misma firma. Permite polimorfismo en tiempo de ejecución.'
    },

    // Snowflake Questions
    {
        id: 'snow-001',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'beginner',
        question: '¿Qué tipo de arquitectura usa Snowflake?',
        options: [
            'Shared-disk',
            'Shared-nothing',
            'Multi-cluster shared data',
            'Monolítica'
        ],
        correctAnswer: 2,
        explanation: 'Snowflake usa una arquitectura única de "multi-cluster shared data" que separa storage, compute y servicios en capas independientes.'
    },
    {
        id: 'snow-002',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'beginner',
        question: '¿Qué es un Virtual Warehouse en Snowflake?',
        options: [
            'Un tipo de base de datos',
            'Un clúster de recursos de cómputo para queries',
            'Un almacén de datos físico',
            'Una conexión de red'
        ],
        correctAnswer: 1,
        explanation: 'Un Virtual Warehouse es un clúster de recursos de cómputo (CPU, memoria, SSD) que ejecuta queries. Se puede escalar independientemente.'
    },
    {
        id: 'snow-003',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'intermediate',
        question: '¿Qué es Time Travel en Snowflake?',
        options: [
            'Una función de fecha',
            'Capacidad de acceder a datos históricos hasta 90 días',
            'Un tipo de backup',
            'Un método de replicación'
        ],
        correctAnswer: 1,
        explanation: 'Time Travel permite acceder a datos históricos (antes de cambios/eliminaciones) hasta 90 días en Enterprise Edition.'
    },
    {
        id: 'snow-004',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'intermediate',
        question: '¿Qué es Zero-Copy Cloning?',
        options: [
            'Eliminar duplicados',
            'Crear copias de tablas/schemas sin duplicar datos físicos',
            'Un tipo de compresión',
            'Una técnica de ETL'
        ],
        correctAnswer: 1,
        explanation: 'Zero-Copy Cloning crea copias lógicas instantáneas sin duplicar storage. Los datos se comparten hasta que se modifican.'
    },
    {
        id: 'snow-005',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'beginner',
        question: '¿En qué nube(s) está disponible Snowflake?',
        options: [
            'Solo AWS',
            'AWS y Azure',
            'AWS, Azure y GCP',
            'Solo nube privada'
        ],
        correctAnswer: 2,
        explanation: 'Snowflake está disponible en AWS, Microsoft Azure y Google Cloud Platform, permitiendo multi-cloud.'
    },
    {
        id: 'snow-006',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'intermediate',
        question: '¿Qué es un Stage en Snowflake?',
        options: [
            'Un paso en un pipeline',
            'Una ubicación para staging de archivos antes de cargar',
            'Un tipo de warehouse',
            'Una fase de procesamiento'
        ],
        correctAnswer: 1,
        explanation: 'Un Stage es una ubicación (interna o externa) donde se almacenan archivos para cargarlos en tablas usando COPY INTO.'
    },
    {
        id: 'snow-007',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'advanced',
        question: '¿Qué es Snowpipe?',
        options: [
            'Una conexión de red',
            'Servicio de carga continua de datos en near-real-time',
            'Un tipo de warehouse',
            'Una herramienta de BI'
        ],
        correctAnswer: 1,
        explanation: 'Snowpipe carga datos automáticamente cuando nuevos archivos llegan al stage, usando un modelo serverless.'
    },
    {
        id: 'snow-008',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'intermediate',
        question: '¿Cómo se mide el cómputo en Snowflake?',
        options: [
            'Por GB almacenado',
            'Por créditos consumidos por segundo',
            'Por número de queries',
            'Tarifa fija mensual'
        ],
        correctAnswer: 1,
        explanation: 'Snowflake cobra por créditos basados en el tamaño del warehouse y tiempo de ejecución (por segundo, mínimo 60s).'
    },
    {
        id: 'snow-009',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'advanced',
        question: '¿Qué es Fail-safe en Snowflake?',
        options: [
            'Un backup manual',
            'Período de 7 días de recuperación de desastres después de Time Travel',
            'Un tipo de replicación',
            'Una configuración de seguridad'
        ],
        correctAnswer: 1,
        explanation: 'Fail-safe proporciona 7 días adicionales de protección de datos después de Time Travel, solo accesible por soporte de Snowflake.'
    },
    {
        id: 'snow-010',
        category: 'snowflake',
        certification: 'SnowPro Core',
        difficulty: 'beginner',
        question: '¿Qué lenguaje SQL usa Snowflake?',
        options: [
            'MySQL',
            'T-SQL',
            'ANSI SQL con extensiones propias',
            'PL/SQL'
        ],
        correctAnswer: 2,
        explanation: 'Snowflake soporta ANSI SQL estándar con extensiones propias para funcionalidades específicas de la plataforma.'
    },

    // Databricks Questions
    {
        id: 'dbx-001',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'beginner',
        question: '¿Qué es Apache Spark?',
        options: [
            'Una base de datos',
            'Un motor de procesamiento distribuido de datos',
            'Un lenguaje de programación',
            'Un servicio de cloud'
        ],
        correctAnswer: 1,
        explanation: 'Apache Spark es un motor de procesamiento distribuido para Big Data, soportando batch, streaming, ML y SQL.'
    },
    {
        id: 'dbx-002',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'beginner',
        question: '¿Qué es un DataFrame en Spark?',
        options: [
            'Un archivo CSV',
            'Una colección distribuida de datos organizados en columnas',
            'Un tipo de gráfico',
            'Una base de datos'
        ],
        correctAnswer: 1,
        explanation: 'Un DataFrame es una colección distribuida de datos organizada en columnas con nombre, similar a una tabla SQL o pandas DataFrame.'
    },
    {
        id: 'dbx-003',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'intermediate',
        question: '¿Qué es Delta Lake?',
        options: [
            'Un lago físico',
            'Capa de almacenamiento que añade ACID transactions a data lakes',
            'Un tipo de database',
            'Un servicio de AWS'
        ],
        correctAnswer: 1,
        explanation: 'Delta Lake es una capa open-source sobre data lakes que proporciona transacciones ACID, time travel y schema enforcement.'
    },
    {
        id: 'dbx-004',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre transformations y actions en Spark?',
        options: [
            'No hay diferencia',
            'Transformations son lazy, actions ejecutan el DAG',
            'Actions son más rápidas',
            'Transformations modifican datos permanentemente'
        ],
        correctAnswer: 1,
        explanation: 'Las transformations son lazy (no ejecutan hasta que se necesitan). Las actions (collect, count, write) disparan la ejecución del plan.'
    },
    {
        id: 'dbx-005',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'beginner',
        question: '¿Qué es un Notebook en Databricks?',
        options: [
            'Una laptop',
            'Un documento interactivo para código, visualizaciones y texto',
            'Un tipo de cluster',
            'Un archivo de configuración'
        ],
        correctAnswer: 1,
        explanation: 'Los Notebooks son documentos interactivos que combinan código (Python, Scala, SQL, R), visualizaciones y markdown.'
    },
    {
        id: 'dbx-006',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'intermediate',
        question: '¿Qué es un Cluster en Databricks?',
        options: [
            'Un grupo de bases de datos',
            'Un conjunto de recursos de cómputo para ejecutar workloads',
            'Una colección de notebooks',
            'Un tipo de archivo'
        ],
        correctAnswer: 1,
        explanation: 'Un Cluster es un conjunto de VMs que ejecutan Spark. Puede ser all-purpose (interactivo) o job cluster (para trabajos).'
    },
    {
        id: 'dbx-007',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'advanced',
        question: '¿Qué es Unity Catalog?',
        options: [
            'Un catálogo de productos',
            'Solución de gobernanza unificada para datos y AI',
            'Un tipo de storage',
            'Una herramienta de BI'
        ],
        correctAnswer: 1,
        explanation: 'Unity Catalog proporciona gobernanza centralizada, lineage, control de acceso y descubrimiento de datos en toda la plataforma.'
    },
    {
        id: 'dbx-008',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'intermediate',
        question: '¿Qué arquitectura promueve Databricks?',
        options: [
            'Data Warehouse tradicional',
            'Lakehouse - combina data lake y data warehouse',
            'Data Mart',
            'OLTP'
        ],
        correctAnswer: 1,
        explanation: 'La arquitectura Lakehouse combina la flexibilidad de data lakes con las capacidades ACID y rendimiento de data warehouses.'
    },
    {
        id: 'dbx-009',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'advanced',
        question: '¿Qué es MLflow?',
        options: [
            'Un lenguaje de ML',
            'Plataforma open-source para gestionar el ciclo de vida de ML',
            'Un tipo de modelo',
            'Una base de datos'
        ],
        correctAnswer: 1,
        explanation: 'MLflow gestiona experimentos, empaquetado de modelos, deploy y registro de modelos a lo largo del ciclo de vida ML.'
    },
    {
        id: 'dbx-010',
        category: 'databricks',
        certification: 'Databricks Certified',
        difficulty: 'intermediate',
        question: '¿Qué es Photon?',
        options: [
            'Un tipo de luz',
            'Motor de ejecución nativo vectorizado para acelerar queries',
            'Una herramienta de visualización',
            'Un tipo de cluster'
        ],
        correctAnswer: 1,
        explanation: 'Photon es el motor de ejecución C++ de Databricks que acelera queries SQL y DataFrame hasta 12x sobre Spark estándar.'
    },

    // Linux/CLI Questions
    {
        id: 'linux-001',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'beginner',
        question: '¿Qué comando lista archivos y directorios?',
        options: ['dir', 'ls', 'list', 'show'],
        correctAnswer: 1,
        explanation: 'ls (list) muestra archivos y directorios. Opciones comunes: ls -la (todos los archivos con detalles), ls -lh (tamaños legibles).'
    },
    {
        id: 'linux-002',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'beginner',
        question: '¿Qué hace el comando chmod 755 archivo?',
        options: [
            'Elimina el archivo',
            'Da permisos rwx al owner, rx a group y others',
            'Comprime el archivo',
            'Lo hace ejecutable solo para root'
        ],
        correctAnswer: 1,
        explanation: '755 significa: owner (7=rwx), group (5=r-x), others (5=r-x). Común para scripts ejecutables.'
    },
    {
        id: 'linux-003',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'intermediate',
        question: '¿Qué hace el operador | (pipe)?',
        options: [
            'Concatena archivos',
            'Redirige la salida de un comando como entrada de otro',
            'Crea un archivo',
            'Ejecuta comandos en paralelo'
        ],
        correctAnswer: 1,
        explanation: 'El pipe conecta stdout de un comando con stdin del siguiente, permitiendo encadenar comandos: ls | grep txt'
    },
    {
        id: 'linux-004',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'beginner',
        question: '¿Qué comando muestra el directorio actual?',
        options: ['cd', 'pwd', 'dir', 'where'],
        correctAnswer: 1,
        explanation: 'pwd (print working directory) muestra la ruta completa del directorio actual.'
    },
    {
        id: 'linux-005',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'intermediate',
        question: '¿Qué hace grep?',
        options: [
            'Comprime archivos',
            'Busca patrones de texto en archivos',
            'Lista procesos',
            'Copia archivos'
        ],
        correctAnswer: 1,
        explanation: 'grep busca líneas que coincidan con un patrón. Ejemplo: grep "error" log.txt | grep -i (case insensitive).'
    },
    {
        id: 'linux-006',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'intermediate',
        question: '¿Qué hace el comando sudo?',
        options: [
            'Cambia de usuario',
            'Ejecuta comandos con privilegios de superusuario',
            'Apaga el sistema',
            'Lista usuarios'
        ],
        correctAnswer: 1,
        explanation: 'sudo (superuser do) ejecuta comandos como root u otro usuario con privilegios elevados.'
    },
    {
        id: 'linux-007',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'advanced',
        question: '¿Qué es un proceso zombie?',
        options: [
            'Un virus',
            'Un proceso terminado que aún tiene entrada en la tabla de procesos',
            'Un proceso que consume mucha CPU',
            'Un proceso en background'
        ],
        correctAnswer: 1,
        explanation: 'Un proceso zombie ha terminado pero su padre no ha recogido su exit status con wait(). Aparece como Z en ps.'
    },
    {
        id: 'linux-008',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'intermediate',
        question: '¿Qué hace crontab?',
        options: [
            'Lista archivos',
            'Programa tareas para ejecutar en horarios específicos',
            'Muestra el calendario',
            'Gestiona usuarios'
        ],
        correctAnswer: 1,
        explanation: 'crontab permite programar tareas (cron jobs) para ejecutarse automáticamente en horarios definidos.'
    },
    {
        id: 'linux-009',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'beginner',
        question: '¿Qué comando crea un directorio?',
        options: ['md', 'mkdir', 'create', 'newdir'],
        correctAnswer: 1,
        explanation: 'mkdir (make directory) crea directorios. mkdir -p crea directorios anidados.'
    },
    {
        id: 'linux-010',
        category: 'linux',
        certification: 'Linux+/LPIC',
        difficulty: 'advanced',
        question: '¿Qué es un inode?',
        options: [
            'Un tipo de archivo',
            'Estructura de datos que almacena metadatos de un archivo',
            'Una partición',
            'Un tipo de permiso'
        ],
        correctAnswer: 1,
        explanation: 'Un inode contiene metadatos del archivo (permisos, propietario, timestamps, ubicación de bloques) excepto el nombre.'
    },

    // Hardware Questions
    {
        id: 'hw-001',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'beginner',
        question: '¿Qué es la RAM?',
        options: [
            'Almacenamiento permanente',
            'Memoria volátil de acceso rápido para datos en uso',
            'El procesador',
            'La tarjeta gráfica'
        ],
        correctAnswer: 1,
        explanation: 'RAM (Random Access Memory) es memoria volátil que almacena datos e instrucciones que el CPU necesita acceder rápidamente.'
    },
    {
        id: 'hw-002',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'beginner',
        question: '¿Qué hace la CPU?',
        options: [
            'Almacena datos',
            'Ejecuta instrucciones y procesa datos',
            'Muestra gráficos',
            'Conecta a internet'
        ],
        correctAnswer: 1,
        explanation: 'La CPU (Central Processing Unit) es el cerebro del computador, ejecutando instrucciones y realizando cálculos.'
    },
    {
        id: 'hw-003',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre SSD y HDD?',
        options: [
            'SSD usa memoria flash, HDD usa discos magnéticos',
            'HDD es más rápido',
            'SSD tiene más capacidad',
            'No hay diferencia significativa'
        ],
        correctAnswer: 0,
        explanation: 'SSD usa chips de memoria flash (más rápido, sin partes móviles). HDD usa platos magnéticos giratorios (más capacidad por $).'
    },
    {
        id: 'hw-004',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'beginner',
        question: '¿Qué es la motherboard?',
        options: [
            'Un tipo de memoria',
            'La placa principal que conecta todos los componentes',
            'El sistema operativo',
            'Un tipo de procesador'
        ],
        correctAnswer: 1,
        explanation: 'La motherboard (placa base) es el PCB principal que interconecta CPU, RAM, storage, GPU y demás componentes.'
    },
    {
        id: 'hw-005',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'intermediate',
        question: '¿Qué es la GPU?',
        options: [
            'General Processing Unit',
            'Graphics Processing Unit - procesador especializado en gráficos',
            'Global Power Unit',
            'Un tipo de memoria'
        ],
        correctAnswer: 1,
        explanation: 'La GPU procesa gráficos y cálculos paralelos. Usado para gaming, rendering, ML y procesamiento de video.'
    },
    {
        id: 'hw-006',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'intermediate',
        question: '¿Qué es PCIe?',
        options: [
            'Un tipo de procesador',
            'Bus de alta velocidad para conectar componentes como GPU y NVMe',
            'Un tipo de cable',
            'Un sistema operativo'
        ],
        correctAnswer: 1,
        explanation: 'PCIe (Peripheral Component Interconnect Express) es el bus estándar para conectar GPUs, SSDs NVMe, tarjetas de red, etc.'
    },
    {
        id: 'hw-007',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'advanced',
        question: '¿Qué es ECC RAM?',
        options: [
            'RAM más rápida',
            'RAM con corrección de errores para servidores',
            'RAM para gaming',
            'RAM de bajo consumo'
        ],
        correctAnswer: 1,
        explanation: 'ECC (Error-Correcting Code) RAM detecta y corrige errores de memoria, esencial en servidores y workstations.'
    },
    {
        id: 'hw-008',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'beginner',
        question: '¿Qué es la BIOS/UEFI?',
        options: [
            'Un tipo de memoria',
            'Firmware que inicializa hardware antes de cargar el SO',
            'El sistema operativo',
            'Un programa de antivirus'
        ],
        correctAnswer: 1,
        explanation: 'BIOS/UEFI es firmware en la motherboard que inicializa hardware, ejecuta POST y carga el bootloader del SO.'
    },
    {
        id: 'hw-009',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'intermediate',
        question: '¿Cuántos pines tiene DDR4 DIMM?',
        options: ['184', '240', '288', '260'],
        correctAnswer: 2,
        explanation: 'DDR4 DIMM (desktop) tiene 288 pines. DDR4 SO-DIMM (laptop) tiene 260 pines.'
    },
    {
        id: 'hw-010',
        category: 'hardware',
        certification: 'CompTIA A+',
        difficulty: 'advanced',
        question: '¿Qué es RAID 5?',
        options: [
            'Mirroring de discos',
            'Striping con paridad distribuida para tolerancia a fallos',
            'Solo striping sin redundancia',
            'Backup automático'
        ],
        correctAnswer: 1,
        explanation: 'RAID 5 distribuye datos y paridad entre 3+ discos. Tolera el fallo de 1 disco manteniendo rendimiento y capacidad.'
    },

    // ============== IDS: ARCHITECTURE QUESTIONS ==============
    {
        id: 'arch-001',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'intermediate',
        question: '¿Cuáles son las capas principales de Clean Architecture?',
        options: [
            'Frontend, Backend, Database',
            'Entities, Use Cases, Interface Adapters, Frameworks & Drivers',
            'Model, View, Controller',
            'Client, Server, API'
        ],
        correctAnswer: 1,
        explanation: 'Clean Architecture tiene 4 capas concéntricas: Entities (reglas de negocio), Use Cases (aplicación), Interface Adapters (presentación), Frameworks & Drivers (infraestructura).'
    },
    {
        id: 'arch-002',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'advanced',
        question: '¿Qué es la Dependency Rule en Clean Architecture?',
        options: [
            'Las dependencias deben ir de externo a interno',
            'Las dependencias deben apuntar hacia adentro, hacia las políticas de alto nivel',
            'Todas las capas pueden depender entre sí',
            'Solo la capa externa puede tener dependencias'
        ],
        correctAnswer: 1,
        explanation: 'La Dependency Rule establece que las dependencias de código fuente solo pueden apuntar hacia adentro. Las capas internas no conocen nada de las externas.'
    },
    {
        id: 'arch-003',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'advanced',
        question: '¿Qué es un Bounded Context en Domain-Driven Design?',
        options: [
            'Un límite geográfico del servidor',
            'Un límite explícito donde un modelo de dominio particular es definido y aplicable',
            'Una restricción de seguridad',
            'Un tipo de base de datos'
        ],
        correctAnswer: 1,
        explanation: 'Un Bounded Context es un límite donde un modelo de dominio es válido. Cada contexto tiene su propio Ubiquitous Language y puede tener diferentes representaciones de conceptos.'
    },
    {
        id: 'arch-004',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'advanced',
        question: '¿Qué es un Aggregate en DDD?',
        options: [
            'Una función de base de datos',
            'Un cluster de objetos de dominio tratados como una unidad con una raíz',
            'Un tipo de join SQL',
            'Una colección de microservicios'
        ],
        correctAnswer: 1,
        explanation: 'Un Aggregate es un grupo de entidades y value objects tratados como unidad. Tiene un Aggregate Root que es el único punto de acceso para modificaciones.'
    },
    {
        id: 'arch-005',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'advanced',
        question: '¿Qué es Event Sourcing?',
        options: [
            'Enviar eventos a un servidor',
            'Almacenar el estado como secuencia de eventos en lugar del estado actual',
            'Un sistema de logging',
            'Un patrón de mensajería'
        ],
        correctAnswer: 1,
        explanation: 'Event Sourcing guarda todos los cambios de estado como eventos inmutables. El estado actual se reconstruye reproduciendo la secuencia de eventos.'
    },
    {
        id: 'arch-006',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'advanced',
        question: '¿Qué es CQRS (Command Query Responsibility Segregation)?',
        options: [
            'Un tipo de base de datos',
            'Separar los modelos de lectura (Query) y escritura (Command)',
            'Un patrón de seguridad',
            'Un framework de testing'
        ],
        correctAnswer: 1,
        explanation: 'CQRS separa las operaciones de lectura y escritura en modelos diferentes. Permite optimizar cada uno independientemente y escalar de forma diferenciada.'
    },
    {
        id: 'arch-007',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es Hexagonal Architecture (Ports & Adapters)?',
        options: [
            'Una arquitectura con 6 capas',
            'Arquitectura donde el dominio está en el centro, aislado por puertos e implementado con adaptadores',
            'Un tipo de red de computadores',
            'Una arquitectura para bases de datos'
        ],
        correctAnswer: 1,
        explanation: 'Hexagonal Architecture coloca la lógica de negocio en el centro. Los Ports definen interfaces y los Adapters implementan la comunicación con el exterior.'
    },
    {
        id: 'arch-008',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'intermediate',
        question: '¿Cuál es el beneficio principal de los microservicios sobre un monolito?',
        options: [
            'Son siempre más rápidos',
            'Permiten desplegar, escalar y desarrollar servicios de forma independiente',
            'Usan menos memoria',
            'Son más fáciles de debuggear'
        ],
        correctAnswer: 1,
        explanation: 'Los microservicios permiten equipos autónomos, deploy independiente, escalado granular y uso de tecnologías específicas por servicio.'
    },
    {
        id: 'arch-009',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'advanced',
        question: '¿Qué patrón se usa para manejar transacciones distribuidas en microservicios?',
        options: [
            'Two-Phase Commit siempre',
            'Saga Pattern con compensaciones',
            'Transacciones XA',
            'Bloqueos distribuidos'
        ],
        correctAnswer: 1,
        explanation: 'El Saga Pattern coordina transacciones distribuidas como secuencia de transacciones locales con acciones de compensación si algo falla.'
    },
    {
        id: 'arch-010',
        category: 'architecture',
        certification: 'Software Architecture / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es un API Gateway en arquitectura de microservicios?',
        options: [
            'Una base de datos compartida',
            'Un punto de entrada único que enruta requests a los microservicios',
            'Un servidor de archivos',
            'Una herramienta de monitoreo'
        ],
        correctAnswer: 1,
        explanation: 'El API Gateway es el punto de entrada único que maneja routing, autenticación, rate limiting, y agregación de respuestas.'
    },

    // ============== IDS: DEVOPS QUESTIONS ==============
    {
        id: 'devops-001',
        category: 'devops',
        certification: 'CKA/CKAD / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es un Pod en Kubernetes?',
        options: [
            'Un servidor físico',
            'La unidad más pequeña desplegable, uno o más contenedores compartiendo red y storage',
            'Un tipo de servicio',
            'Una máquina virtual'
        ],
        correctAnswer: 1,
        explanation: 'Un Pod es la unidad mínima en K8s. Contiene uno o más contenedores que comparten namespace de red, IP y volúmenes.'
    },
    {
        id: 'devops-002',
        category: 'devops',
        certification: 'CKA/CKAD / IDS',
        difficulty: 'intermediate',
        question: '¿Qué hace un Deployment en Kubernetes?',
        options: [
            'Solo crea pods una vez',
            'Gestiona ReplicaSets para mantener el estado deseado de pods',
            'Expone servicios externamente',
            'Almacena configuraciones'
        ],
        correctAnswer: 1,
        explanation: 'Un Deployment declara el estado deseado de pods, gestiona ReplicaSets, y permite rolling updates y rollbacks.'
    },
    {
        id: 'devops-003',
        category: 'devops',
        certification: 'CKA/CKAD / IDS',
        difficulty: 'advanced',
        question: '¿Qué es un Service en Kubernetes?',
        options: [
            'Un contenedor',
            'Una abstracción que define acceso de red estable a un conjunto de pods',
            'Un archivo de configuración',
            'Un tipo de storage'
        ],
        correctAnswer: 1,
        explanation: 'Un Service proporciona una IP estable y DNS para acceder a pods. Tipos: ClusterIP, NodePort, LoadBalancer, ExternalName.'
    },
    {
        id: 'devops-004',
        category: 'devops',
        certification: 'Terraform Associate / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es Infrastructure as Code (IaC)?',
        options: [
            'Código que se ejecuta en servidores',
            'Gestionar infraestructura mediante archivos de configuración versionables',
            'Un lenguaje de programación',
            'Un tipo de base de datos'
        ],
        correctAnswer: 1,
        explanation: 'IaC permite definir infraestructura en código, habilitando versionado, revisión, automatización y reproducibilidad.'
    },
    {
        id: 'devops-005',
        category: 'devops',
        certification: 'Terraform Associate / IDS',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre terraform plan y terraform apply?',
        options: [
            'No hay diferencia',
            'plan muestra cambios propuestos, apply ejecuta los cambios',
            'apply es más rápido',
            'plan solo funciona con AWS'
        ],
        correctAnswer: 1,
        explanation: 'terraform plan genera un plan de ejecución mostrando qué se creará/modificará/destruirá. terraform apply ejecuta esos cambios.'
    },
    {
        id: 'devops-006',
        category: 'devops',
        certification: 'GitOps / IDS',
        difficulty: 'advanced',
        question: '¿Qué es GitOps?',
        options: [
            'Usar Git para código',
            'Usar Git como fuente de verdad para infraestructura y deployments declarativos',
            'Un hosting de Git',
            'Una herramienta de CI'
        ],
        correctAnswer: 1,
        explanation: 'GitOps usa Git como fuente de verdad. Los cambios en Git disparan reconciliación automática del estado deseado vs actual.'
    },
    {
        id: 'devops-007',
        category: 'devops',
        certification: 'ArgoCD / IDS',
        difficulty: 'advanced',
        question: '¿Qué es ArgoCD?',
        options: [
            'Un lenguaje de programación',
            'Herramienta declarativa de CD GitOps para Kubernetes',
            'Un servicio de AWS',
            'Un tipo de contenedor'
        ],
        correctAnswer: 1,
        explanation: 'ArgoCD es una herramienta GitOps que sincroniza continuamente el estado de Kubernetes con configuraciones en Git.'
    },
    {
        id: 'devops-008',
        category: 'devops',
        certification: 'CKA/CKAD / IDS',
        difficulty: 'advanced',
        question: '¿Qué es un Helm Chart?',
        options: [
            'Un gráfico de monitoreo',
            'Paquete de recursos Kubernetes con templates y valores configurables',
            'Una herramienta de logging',
            'Un tipo de pod'
        ],
        correctAnswer: 1,
        explanation: 'Helm es el package manager de K8s. Los Charts son paquetes con templates YAML y values.yaml para configuración.'
    },
    {
        id: 'devops-009',
        category: 'devops',
        certification: 'CKA/CKAD / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es un ConfigMap en Kubernetes?',
        options: [
            'Un mapa geográfico',
            'Objeto para almacenar configuración no confidencial como key-value',
            'Un tipo de servicio',
            'Una configuración de red'
        ],
        correctAnswer: 1,
        explanation: 'ConfigMap almacena datos de configuración no sensibles. Se pueden montar como volumen o exponer como variables de entorno.'
    },
    {
        id: 'devops-010',
        category: 'devops',
        certification: 'CKA/CKAD / IDS',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre ConfigMap y Secret?',
        options: [
            'No hay diferencia',
            'Secret almacena datos sensibles codificados en base64',
            'ConfigMap es más rápido',
            'Secret solo funciona con passwords'
        ],
        correctAnswer: 1,
        explanation: 'Secret es similar a ConfigMap pero para datos sensibles. Los valores se almacenan en base64 y tienen restricciones de acceso adicionales.'
    },

    // ============== IDS: TESTING QUESTIONS ==============
    {
        id: 'test-001',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es TDD (Test-Driven Development)?',
        options: [
            'Testing al final del desarrollo',
            'Escribir tests antes del código, siguiendo Red-Green-Refactor',
            'Testing solo de UI',
            'Testing automático de seguridad'
        ],
        correctAnswer: 1,
        explanation: 'TDD sigue el ciclo: Red (escribir test que falla), Green (escribir código mínimo para pasar), Refactor (mejorar código manteniendo tests verdes).'
    },
    {
        id: 'test-002',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es BDD (Behavior-Driven Development)?',
        options: [
            'Testing de base de datos',
            'Desarrollo guiado por comportamiento usando Given-When-Then',
            'Bug Detection Development',
            'Un tipo de debugging'
        ],
        correctAnswer: 1,
        explanation: 'BDD describe comportamientos en lenguaje natural: Given (contexto), When (acción), Then (resultado esperado). Herramientas: Cucumber, SpecFlow.'
    },
    {
        id: 'test-003',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'advanced',
        question: '¿Qué es Contract Testing?',
        options: [
            'Testing de contratos legales',
            'Verificar que servicios cumplen contratos de API acordados entre consumer y provider',
            'Testing de UI',
            'Testing de base de datos'
        ],
        correctAnswer: 1,
        explanation: 'Contract Testing verifica que consumidores y proveedores de APIs cumplen un contrato acordado. Herramientas: Pact, Spring Cloud Contract.'
    },
    {
        id: 'test-004',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'advanced',
        question: '¿Qué es Mutation Testing?',
        options: [
            'Testing de código genético',
            'Introducir cambios (mutantes) en el código para verificar que los tests los detectan',
            'Testing de cambios en Git',
            'Testing de performance'
        ],
        correctAnswer: 1,
        explanation: 'Mutation Testing evalúa la calidad de los tests introduciendo mutaciones en el código. Un buen test suite debe "matar" los mutantes.'
    },
    {
        id: 'test-005',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'intermediate',
        question: '¿Qué porcentaje de tests debería ser unitario según la pirámide de testing?',
        options: [
            '10%',
            '20%',
            '70%',
            '50%'
        ],
        correctAnswer: 2,
        explanation: 'La pirámide de testing sugiere: 70% Unit Tests (base), 20% Integration Tests (medio), 10% E2E Tests (cima).'
    },
    {
        id: 'test-006',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es un Mock en testing?',
        options: [
            'Un test que siempre pasa',
            'Un objeto simulado que reemplaza dependencias reales',
            'Un tipo de assertion',
            'Un framework de testing'
        ],
        correctAnswer: 1,
        explanation: 'Un Mock es un objeto que simula el comportamiento de dependencias reales, permitiendo tests aislados y controlados.'
    },
    {
        id: 'test-007',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'advanced',
        question: '¿Cuál es la diferencia entre Mock y Stub?',
        options: [
            'No hay diferencia',
            'Mock verifica interacciones, Stub solo provee respuestas predefinidas',
            'Stub es más moderno',
            'Mock solo funciona con Java'
        ],
        correctAnswer: 1,
        explanation: 'Un Stub provee respuestas fijas sin verificar cómo fue llamado. Un Mock permite verificar que métodos fueron llamados correctamente.'
    },
    {
        id: 'test-008',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es un Integration Test?',
        options: [
            'Test de la UI completa',
            'Test que verifica la interacción entre múltiples componentes o sistemas',
            'Test de un solo método',
            'Test de performance'
        ],
        correctAnswer: 1,
        explanation: 'Los Integration Tests verifican que múltiples componentes funcionan correctamente juntos (ej: servicio + base de datos).'
    },
    {
        id: 'test-009',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'advanced',
        question: '¿Qué herramienta se usa para E2E testing en web?',
        options: [
            'JUnit',
            'Playwright, Cypress, o Selenium',
            'Mockito',
            'Maven'
        ],
        correctAnswer: 1,
        explanation: 'Playwright, Cypress y Selenium son frameworks para E2E testing que automatizan interacciones de navegador como un usuario real.'
    },
    {
        id: 'test-010',
        category: 'testing',
        certification: 'Testing Professional / IDS',
        difficulty: 'advanced',
        question: '¿Qué es Property-Based Testing?',
        options: [
            'Testing de propiedades CSS',
            'Generar casos de prueba automáticamente basados en propiedades que el código debe cumplir',
            'Testing de configuración',
            'Testing de variables de entorno'
        ],
        correctAnswer: 1,
        explanation: 'Property-Based Testing genera inputs automáticamente verificando que propiedades invariantes se cumplan. Herramientas: QuickCheck, jqwik.'
    },

    // ============== IDS: SECURITY QUESTIONS ==============
    {
        id: 'sec-001',
        category: 'security',
        certification: 'OWASP / Security+ / IDS',
        difficulty: 'intermediate',
        question: '¿Cuál es el #1 del OWASP Top 10 2021?',
        options: [
            'Cross-Site Scripting (XSS)',
            'Broken Access Control',
            'SQL Injection',
            'Cryptographic Failures'
        ],
        correctAnswer: 1,
        explanation: 'Broken Access Control es el #1 en OWASP 2021. Ocurre cuando usuarios pueden acceder a recursos o funciones no autorizadas.'
    },
    {
        id: 'sec-002',
        category: 'security',
        certification: 'OWASP / Security+ / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es SQL Injection?',
        options: [
            'Un tipo de base de datos',
            'Ataque donde se inyecta código SQL malicioso a través de inputs',
            'Una consulta optimizada',
            'Un framework de SQL'
        ],
        correctAnswer: 1,
        explanation: 'SQL Injection permite ejecutar SQL malicioso al no sanitizar inputs. Mitigación: usar prepared statements y parameterized queries.'
    },
    {
        id: 'sec-003',
        category: 'security',
        certification: 'OWASP / Security+ / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es Cross-Site Scripting (XSS)?',
        options: [
            'Un tipo de CSS',
            'Inyección de scripts maliciosos en páginas web vistas por otros usuarios',
            'Un framework JavaScript',
            'Una técnica de optimización'
        ],
        correctAnswer: 1,
        explanation: 'XSS inyecta scripts que se ejecutan en el navegador de víctimas. Tipos: Stored, Reflected, DOM-based. Mitigación: escapar output, CSP.'
    },
    {
        id: 'sec-004',
        category: 'security',
        certification: 'OWASP / Security+ / IDS',
        difficulty: 'advanced',
        question: '¿Qué es CSRF (Cross-Site Request Forgery)?',
        options: [
            'Un tipo de encriptación',
            'Ataque que fuerza a usuarios autenticados a ejecutar acciones no deseadas',
            'Un protocolo de seguridad',
            'Una herramienta de testing'
        ],
        correctAnswer: 1,
        explanation: 'CSRF engaña al navegador para enviar requests autenticados a sitios donde el usuario tiene sesión activa. Mitigación: tokens CSRF, SameSite cookies.'
    },
    {
        id: 'sec-005',
        category: 'security',
        certification: 'Security Engineering / IDS',
        difficulty: 'advanced',
        question: '¿Qué es HashiCorp Vault?',
        options: [
            'Un tipo de base de datos',
            'Herramienta para gestión centralizada de secrets y datos sensibles',
            'Un framework web',
            'Un servicio de backup'
        ],
        correctAnswer: 1,
        explanation: 'Vault gestiona secrets, tokens, passwords, certificados y claves de encriptación de forma centralizada y segura.'
    },
    {
        id: 'sec-006',
        category: 'security',
        certification: 'Security Engineering / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es el principio de Least Privilege?',
        options: [
            'Dar acceso root a todos',
            'Otorgar solo los permisos mínimos necesarios para realizar una tarea',
            'Eliminar todos los privilegios',
            'Un tipo de encriptación'
        ],
        correctAnswer: 1,
        explanation: 'Least Privilege minimiza el riesgo otorgando solo los permisos estrictamente necesarios. Aplica a usuarios, servicios y aplicaciones.'
    },
    {
        id: 'sec-007',
        category: 'security',
        certification: 'OWASP / Security+ / IDS',
        difficulty: 'advanced',
        question: '¿Qué es SAST (Static Application Security Testing)?',
        options: [
            'Testing de performance',
            'Análisis de seguridad del código fuente sin ejecutarlo',
            'Testing de UI',
            'Testing de integración'
        ],
        correctAnswer: 1,
        explanation: 'SAST analiza código fuente en busca de vulnerabilidades sin ejecutar la aplicación. Herramientas: SonarQube, Checkmarx, Snyk.'
    },
    {
        id: 'sec-008',
        category: 'security',
        certification: 'OWASP / Security+ / IDS',
        difficulty: 'advanced',
        question: '¿Qué es DAST (Dynamic Application Security Testing)?',
        options: [
            'Análisis estático de código',
            'Testing de seguridad de aplicación en ejecución simulando ataques',
            'Testing de base de datos',
            'Testing unitario'
        ],
        correctAnswer: 1,
        explanation: 'DAST prueba aplicaciones en ejecución simulando ataques desde el exterior. Herramientas: OWASP ZAP, Burp Suite.'
    },
    {
        id: 'sec-009',
        category: 'security',
        certification: 'Security Engineering / IDS',
        difficulty: 'intermediate',
        question: '¿Qué es mTLS (mutual TLS)?',
        options: [
            'TLS solo del servidor',
            'Autenticación bidireccional donde cliente y servidor verifican certificados',
            'Un tipo de HTTP',
            'Una versión antigua de TLS'
        ],
        correctAnswer: 1,
        explanation: 'mTLS requiere que ambas partes (cliente y servidor) presenten certificados válidos, común en comunicación entre microservicios.'
    },
    {
        id: 'sec-010',
        category: 'security',
        certification: 'Security Engineering / IDS',
        difficulty: 'advanced',
        question: '¿Qué es Zero Trust Security?',
        options: [
            'No confiar en nadie y denegar todo acceso',
            'Nunca confiar implícitamente, siempre verificar, con acceso mínimo',
            'Confiar solo en usuarios internos',
            'Un tipo de firewall'
        ],
        correctAnswer: 1,
        explanation: 'Zero Trust asume que ningún usuario o sistema es confiable por defecto. Principios: verify explicitly, least privilege, assume breach.'
    }
];

export const categories = {
    javascript: {
        name: 'JavaScript',
        icon: 'fab fa-js-square',
        color: '#f7df1e',
        certifications: ['JavaScript Developer', 'Salesforce JS-Dev-I']
    },
    python: {
        name: 'Python',
        icon: 'fab fa-python',
        color: '#3776ab',
        certifications: ['PCEP', 'PCAP']
    },
    sql: {
        name: 'SQL',
        icon: 'fas fa-database',
        color: '#00758f',
        certifications: ['SQL Fundamentals', 'Oracle SQL']
    },
    java: {
        name: 'Java',
        icon: 'fab fa-java',
        color: '#007396',
        certifications: ['Oracle Java SE', 'Spring Professional']
    },
    aws: {
        name: 'AWS',
        icon: 'fab fa-aws',
        color: '#ff9900',
        certifications: ['Cloud Practitioner', 'Solutions Architect']
    },
    docker: {
        name: 'Docker',
        icon: 'fab fa-docker',
        color: '#2496ed',
        certifications: ['Docker Certified Associate']
    },
    snowflake: {
        name: 'Snowflake',
        icon: 'fas fa-snowflake',
        color: '#29b5e8',
        certifications: ['SnowPro Core', 'SnowPro Advanced']
    },
    databricks: {
        name: 'Databricks',
        icon: 'fas fa-cubes',
        color: '#ff3621',
        certifications: ['Data Engineer Associate', 'Data Engineer Professional']
    },
    linux: {
        name: 'Linux/CLI',
        icon: 'fab fa-linux',
        color: '#fcc624',
        certifications: ['CompTIA Linux+', 'LPIC-1']
    },
    hardware: {
        name: 'Hardware',
        icon: 'fas fa-microchip',
        color: '#6b7280',
        certifications: ['CompTIA A+', 'CompTIA Server+']
    },
    // IDS Categories
    architecture: {
        name: 'Arquitectura',
        icon: 'fas fa-sitemap',
        color: '#8b5cf6',
        certifications: ['Software Architecture', 'Clean Architecture / IDS']
    },
    devops: {
        name: 'DevOps & K8s',
        icon: 'fas fa-dharmachakra',
        color: '#326ce5',
        certifications: ['CKA/CKAD', 'Terraform Associate', 'GitOps / IDS']
    },
    testing: {
        name: 'Testing',
        icon: 'fas fa-vial',
        color: '#22c55e',
        certifications: ['ISTQB', 'Testing Professional / IDS']
    },
    security: {
        name: 'Seguridad',
        icon: 'fas fa-shield-alt',
        color: '#ef4444',
        certifications: ['Security+', 'OWASP / IDS']
    }
};

export function getQuestionsByCategory(category: string): Question[] {
    return questions.filter(q => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: string): Question[] {
    return questions.filter(q => q.difficulty === difficulty);
}

export function getRandomQuestions(count: number, category?: string, difficulty?: string): Question[] {
    let filtered = [...questions];

    if (category) {
        filtered = filtered.filter(q => q.category === category);
    }
    if (difficulty) {
        filtered = filtered.filter(q => q.difficulty === difficulty);
    }

    // Shuffle and take count
    return filtered
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}
