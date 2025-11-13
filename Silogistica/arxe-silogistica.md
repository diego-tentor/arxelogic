# Silogística ArXe: Fundamentos Formales

## 1. Estructura del Silogismo Válido

### Definición
Silogismo válido es un silogismo aristotélico con algunas restricciones para resolver ambiguedades.
Que buscar resolver:
- Interpretaciones que derivan en formas de platonismo-
-- Realismo proposicional: la presunción de que la verdad de las proposiciones existe independientemente del juicio
-- Realismo mágico: la presunción de que el silogismo permite determinaciones ontologicas o sobre la realidad.
-- Fusión entre ser y existencia: La presunción de que son lo mismo conceptos que se distinguen entre si
-- Negación de la esencia junto con la existencia.

### Alcance
El silogismo no define una nueva ontología ni hace determinaciones sobre la realidad de los hechos
Su alcance es determinar la coherencia interna de las proposiciones.

** Nota:
A diferencia de la lógica clásica ArXe distingue esencia de existencia
- En logica clasica lo que es necesariamente existe y viceversa
- En ArXe lo que es no necesariamente existe, ni es necesariamente verdadero, aunque lo existente necesariamente es
- En ArXe la falsedad o la contradicción tienen esencia, es decir, son.

Esto es que en ArXe, por ejemplo, ¬P niega la existencie o la verdad, pero no la esencia

Un silogismo válido en ArXe consta de exactamente:
** Definición de sujeto:
- Todo decir que pueda expresarse en un único término o palabra

**Premisa Universal:**
- Sujeto universal (positivo, no explícitamente negado)

-- Valido: Todo hombre, Ningun X
-- Inválido: Todo no hombre, Ningun ¬X
-- Válido: Todo inmortal, Ningun X
-- Válido: Todo no mortal, Ningun X

- Predicado que afirma, pudiendo negar, o niega, pudiendo afirmar, algo sobre el sujeto 
- Todo hombre [si] es calvo
- Ningun ave [no] vuela

- ¿Porque Inmortal es válido y no-mortal no lo es?
- Si en el silogismo "no mortal" e "inmortal" son intercambiables con el mismo sentido
entonces sería válido "no mortal", pero entonces ¿porque no decir  directamente "inmortal"?
Esto previene el uso indebido, por ejemplo "todo no pájaro" no es intercambiable por "inpájaro", luego "no pájaro es invalido"

**Premisa Particular:**
- Sujeto particular como caso del sujeto universal
- Predicado que afirma, pudiendo negar, o niega, pudiendo afirmar, algo sobre el sujeto 
- Forma: "x es un caso de S"

**Conclusión:**
- El particular hereda el predicado del universal
- Forma: "x es (o no es) P"

---

## 2. Forma Explícita

```
Si [tenemos por verdadero] que todo S es (pudiendo no ser) P
Y [tenemos por verdadero] que x es (pudiendo no ser) un caso de S
[Se implica que] x es (pudiendo no ser) P
```

### Ejemplo clásico:

```
Universal: Todo hombre es mortal
Particular: Sócrates es un caso de hombre
Conclusión: Sócrates es mortal
```

### Forma extendida:

```
Si [tenemos por verdadero] que todo hombre [si] es mortal
Y [tenemos por verdadero] que Sócrates [si] es un caso de hombre
[Se implica que] Sócrates [si] es mortal
```

---

## 3. Naturaleza de las Proposiciones

### Principio fundamental:

**Las proposiciones son afirmaciones tales que, si se dan por verdaderas (pueden no darse y el silogismo carecerá de valor), se implica de ellas la verdad de la conclusión.**

### Características:

1. **Condicionalidad:** La verdad es hipotética, no categórica
   - El silogismo no afirma: "Todo hombre ES mortal" (ontológico)
   - El silogismo dice: 
   "SI decimos que todo hombre es mortal 
   Y decimos que Sócrates es hombre, 
   ENTONCES decimos que Sócrates es mortal" (implicación lógica)

2. **Aceptación:** Las premisas pueden "tenerse por verdaderas" o no
   - Si se aceptan: la conclusión se sigue necesariamente
   - Si no se aceptan: el silogismo carece de valor
   - Pero la **estructura** sigue siendo válida independientemente

3. **Coherencia, no realidad:** El silogismo versa sobre la **consistencia de la proposición**, no sobre la **realidad de los hechos**

---

## 4. Significado de "Ser Caso De"

### Definición:

**"x es un caso de S"** significa:

> "afirmamos que x es un caso de aquello que hemos afirmado que en todos los casos es S"

### Aclaración:

- **NO** es pertenencia a conjunto: x ∈ {S}
- **NO** es instanciación de esencia platónica
- **ES** una relación proposicional: x cumple la condición que define a S en la proposición universal

### Ejemplo:

"Sócrates es un caso de hombre" = "Sócrates es un caso de aquello que en todos los casos es hombre"

Esto significa que Sócrates **satisface la condición del universal** en la proposición.

---

## 5. La Verdad Contenida en las Proposiciones

### Principio de contención:

**La verdad de la conclusión está contenida en las proposiciones.**

Esto implica:

1. **El silogismo no genera nueva verdad** — solo hace explícita la verdad ya contenida
2. **El silogismo es extracción**, no construcción
3. **La conclusión ya estaba implícita** en la combinación de premisas

### Analogía:

Como abrir una caja: la conclusión ya estaba dentro de las premisas.

---

## 6. Por Qué NO Hay Silogismo Inverso

### Forma inválida:

```
❌ INVÁLIDO:
Particular: Sócrates es mortal
Universal: [???]
Conclusión: Todo hombre es mortal
```

### Razón:

**La verdad del universal NO puede derivarse del particular** porque:

- Lo particular es a lo universal lo que la parte es al todo
- Solo lo universal contiene lo particular, no al revés
- La dirección es unidireccional: universal → particular → conclusión


---

## 6. Por Qué Solo Dos Proposiciones

### Forma aparentemente válida (INVÁLIDA):

```
❌ INVÁLIDO como silogismo único:
Universal 1: Todo hombre es mortal
Universal 2: Todo mortal es corpóreo
Particular: Sócrates es hombre
Conclusión: Sócrates es corpóreo
```

### Razón:

Esto no es **un** silogismo — son **dos** silogismos encadenados:

**Silogismo 1:**
```
Universal: Todo hombre es mortal
Particular: Sócrates es hombre
Conclusión: Sócrates es mortal
```

**Silogismo 2:**
```
Universal: Todo mortal es corpóreo
Particular: Sócrates es mortal [conclusión del anterior]
Conclusión: Sócrates es corpóreo
```

### Principio:

**La verdad está contenida en cada par de proposiciones**, no en conjuntos de tres o más.

Un silogismo tiene exactamente:
- Una universal (contiene la verdad general)
- Una particular (identifica el caso)
- Una conclusión (extrae la verdad contenida)

### Estructura necesaria:

**No puede haber:**
- Una sola proposición (no hay inferencia)
- Tres o más proposiciones simultáneas (son silogismos encadenados, no un silogismo único)

---

## 7. Separación Ontología-Silogismo

### Dentro del silogismo:

- Solo hay **implicaciones condicionales**: Si P₁ y P₂, entonces C
- Se preserva **coherencia proposicional**
- No se afirma **existencia** ni **realidad factual**

### Fuera del silogismo:

- ArXe puede hacer **afirmaciones ontológicas primitivas**
- Ejemplo: "T⁰ es acto contradictorio" (no derivado silogísticamente)
- Estas afirmaciones no se fundamentan en silogismo

### Principio de separación:

**El silogismo nunca fundamenta la ontología — solo preserva coherencia entre proposiciones aceptadas.**

---

## 8. Contraste con Otros Sistemas

### ArXe vs. ZF (Zermelo-Fraenkel)

| Aspecto | ZF | ArXe |
|---------|-----|------|
| **Estructura** | Postula existencias axiomáticamente | Deriva por silogismo desde universales |
| **Justificación** | Sin universal que las contenga | Toda conclusión contenida en universal |
| **Proposiciones** | Cuantificadores sin silogística clara | Exactamente dos proposiciones |
| **Ontología** | Confunde coherencia con existencia | Separa silogismo de ontología |

### ArXe vs. Aristóteles

| Aspecto | Aristóteles | ArXe |
|---------|-------------|------|
| **"Caso de"** | Ambiguo (¿pertenencia? ¿instanciación?) | Definido: satisfacer condición del universal |
| **Verdad** | Ambigua (¿formal? ¿ontológica?) | Explícita: condicional proposicional |
| **Universal** | Ambiguo (¿existe? ¿es mental?) | Proposicional, no ontológico |

---

## 9. Síntesis

### Principios fundamentales de la silogística ArXe:

1. ✅ **La verdad está contenida en las proposiciones** (no se genera nueva verdad)
2. ✅ **No hay silogismo inverso válido** (particular no contiene universal)
3. ✅ **Solo dos proposiciones por silogismo** (más de dos = silogismos encadenados)
4. ✅ **El silogismo preserva coherencia proposicional**, no afirma realidad
5. ✅ **"Ser caso de" es satisfacer la condición del universal** en la proposición
6. ✅ **La verdad es condicional**, no categórica
7. ✅ **El silogismo no fundamenta la ontología** — son dominios separados

### Validez del silogismo:

Un silogismo es **válido** si y solo si:
- Tiene exactamente una premisa universal
- Tiene exactamente una premisa particular que es caso del universal
- La conclusión atribuye al particular el predicado del universal
- La estructura es: Si P₁ y P₂, entonces C

### Naturaleza del silogismo:

El silogismo es **extracción** de verdad ya contenida, no **construcción** de nueva verdad.

La conclusión **ya estaba implícita** en las premisas — el silogismo solo la hace **explícita**.

---

## 10. Consecuencias Metodológicas

### Para ArXe como teoría:

1. **Toda afirmación derivada** debe poder expresarse como silogismo válido
2. **Toda afirmación primitiva** (no derivada) debe declararse como ontológica
3. **No se confunde** coherencia lógica con verdad ontológica
4. **No se postula** nada que no sea caso de un universal previo o primitivo ontológico

### Criterio de validez teórica:

Una teoría es **silogísticamente válida** si:
- Sus derivaciones respetan la forma del silogismo (2 proposiciones, 1 conclusión)
- No invierte la dirección (particular → universal)
- No confunde coherencia proposicional con afirmación de existencia
- Declara explícitamente sus primitivos ontológicos

---

## Conclusión

La silogística ArXe establece un marco riguroso para el razonamiento donde:

- **La estructura formal es impecable** (dos proposiciones, dirección universal→particular)
- **La separación ontología-lógica es clara** (el silogismo no crea existencia)
- **La verdad es condicional y contenida** (no se genera, se extrae)
- ** Se busca evitar el realismo proposicional  (las validez de las proposiciones son independientes del juicio)
- ** Se busca evitar el platonismo (existe una realidad para las proposiciones distinta a la realidad de quien las formula)
- ** Las verdad de las proposiciones existen independientemente del mundo sensible

Esto evita:
- Los problemas de ZF (postulación sin justificación)
- Las ambigüedades de Aristóteles (naturaleza del universal, del "caso de")
- La confusión platonista (coherencia formal ≠ existencia ontológica)

Y proporciona:
- Base sólida para derivaciones teóricas
- Criterio claro de validez inferencial
- Separación explícita entre lo derivado y lo primitivo

## 11. Contraste Dialéctico con los Sistemas Clásicos de Lógica”.
- Sobre el Principio de bivalencia
	El silogismo en ArXe no produce verdad ontológica, sino preserva coherencia inferencial dentro de un marco condicional.
	De este modo:
	No afirma qué es verdadero del mundo,
	Sino qué sería coherente si se asume cierto conjunto de proposiciones.
	
