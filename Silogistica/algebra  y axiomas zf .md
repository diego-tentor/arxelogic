# Conexión entre Álgebra Fundamental y Axiomas de ZF

| Concepto algebraico | Formalización en ZF | Axiomas relevantes | Comentario |
|--------------------|-------------------|-----------------|------------|
| **Elemento escalar** (número real a ∈ ℝ) | Sucesiones de Cauchy o cortes de Dedekind de racionales | Infinitud, pares, unión, reemplazo | Cada número real se construye como conjunto; la existencia depende de axiomas |
| **Tupla** (a,b,c,d ∈ ℝ) para ℍ | Tuplas ordenadas definidas como conjuntos de conjuntos | Pares, unión | Permite definir cuaterniones y octoniones como n-tuplas de reales |
| **Conjunto de álgebras** (ℂ, ℍ, 𝕆 ⊂ ℝⁿ) | Subconjuntos de ℝⁿ con operaciones definidas | Separación, potencia | Define el conjunto de todos los elementos algebraicos posibles |
| **Suma y multiplicación** | Funciones entre conjuntos: +, · : ℍ×ℍ → ℍ | Reemplazo | Operaciones definidas formalmente como relaciones entre conjuntos |
| **Identidad multiplicativa** | Elemento 1 ∈ ℍ definido como conjunto específico | Conjunto vacío, construcción de pares | Garantiza estructura de álgebra unitaria |
| **Inverso multiplicativo** | Función que asigna a x ≠ 0 su inverso x⁻¹ | Reemplazo | Todo elemento no nulo tiene inverso formal en el sistema |
| **Norma multiplicativa** N(x) | Función N: ℍ → ℝ, N(x·y) = N(x)·N(y) | Composición de funciones, reemplazo | La norma permite definir métricas y causalidad en física |
| **Jerarquía ArXe (opcional)** | Funciones y relaciones entre elementos para exentación | Reemplazo, pares, unión | Permite construir jerarquías de existencia dentro del universo formal |

---

# Axiomas de Zermelo-Fraenkel (ZF) mencionados

1. **Axioma de Extensionalidad**  
   Dos conjuntos son iguales si y solo si tienen los mismos elementos.  
   
∀A ∀B ( (∀x (x ∈ A ↔ x ∈ B)) → A = B )

Problema: Elusión de la contradicción
- No puede ser cierto que A y B sean distintos (prop 1) y que no lo sean (prop 2)

- Si A es distinto de B
- No existe caso que distinga A de B

- Falsedad: O es falso lo primero o es falso lo segundo



2. **Axioma del Conjunto Vacío**  
Existe un conjunto que no tiene elementos.  

∃∅ ∀x (x ∉ ∅)

Problema: 

- Afirmacion universal Todo X no es un caso de ∅

- Para todo X (proposicion sin predicado)
- X no es un caso de CV
- CV Existe
Falacia: No hay silogismo válido

3. **Axioma de Pares**  
Para cualquier par de conjuntos, existe un conjunto que los contiene.  

∀A ∀B ∃C ∀x (x ∈ C ↔ x = A ∨ x = B)

Problema:
- Existe un caso de C para cada caso de par
- No hay premisa universal ni se deduce de la afirmacion
- Falacia de non sequitur. 

Problema 2:
- Elude la contradicción
- el conjunto conjunta y el continente contiene y no hay razon para confundir los términos


4. **Axioma de Unión**  
Para cualquier conjunto, existe la unión de todos sus elementos.  

∀A ∃B ∀x (x ∈ B ↔ ∃C (x ∈ C ∧ C ∈ A))



5. **Axioma de Potencia**  
Para cualquier conjunto, existe el conjunto de todos sus subconjuntos.  

∀A ∃P ∀B (B ∈ P ↔ B ⊆ A)



6. **Axioma de Separación (Esquema)**  
Para cualquier propiedad definible φ(x), se puede formar un subconjunto de un conjunto existente.  

∀A ∃B ∀x (x ∈ B ↔ x ∈ A ∧ φ(x))

7. **Axioma de Reemplazo (Esquema)**  
La imagen de un conjunto bajo una función definida por una fórmula también es un conjunto.  

∀A ∃B ∀y (y ∈ B ↔ ∃x ∈ A (y = F(x)))

8. **Axioma de Infinitud**  
Existe un conjunto infinito (por ejemplo, que contiene al conjunto vacío y sucesores).  

Problema: Un conjunto infinito elude una contradicción tal
que o no es verdadero el decirse conjunto o no es verdadero el decirse infinito



∃I (∅ ∈ I ∧ ∀x (x ∈ I → x ∪ {x} ∈ I))

9. **Axioma de Regularidad (Fundación)**  
Todo conjunto no vacío tiene un elemento disjunto de él.  

∀A (A ≠ ∅ → ∃x ∈ A (x ∩ A = ∅))

