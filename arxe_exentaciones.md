# Marco Lógico Formal de la Cadena de Exentaciones ArXe

## 1. Dominio y Notación

Sea `S` una proposición atómica en lógica clásica.
Definimos los operadores estándar:

- Negación: `¬` o `\neg`
- Conjunción (AND): `∧` o `\land`
- Disyunción (OR): `∨` o `\lor`
---

## 2. Contradicción Inicial

Definimos la contradicción fundamental:

```
e_0 := S ∧ ¬S
```

- Observación: `e_0` es siempre **Falsa** (`⊥`) por el principio de no contradicción.

---

## 3. Primera Exentación

La primera exentación es la negación de la contradicción:

```
e_1 := ¬e_0 = ¬(S ∧ ¬S)
```

Aplicando las leyes de De Morgan:

```
e_1 = ¬S ∨ ¬(¬S) = ¬S ∨ S
```

- Esto es una **tautología** (`⊤`) por el principio del tercero excluido.

---

## 4. Exentación Jerárquica Recursiva

Para `n ≥ 1`, definimos el nivel `n+1` como:

```
e_{n+1} := ¬(e_{n-1} ∧ e_n)
```

- Aplicando De Morgan:

```
e_{n+1} = ¬e_{n-1} ∨ ¬e_n
```

- Cada nivel **depende lógicamente de los dos niveles anteriores**.

---

## 5. Observaciones y Simplificaciones

1. Valores iniciales:

```
e_0 = F, e_1 = T
```

2. Aplicando la recursión:

```
e_2 = ¬(e_0 ∧ e_1) = ¬(F ∧ T) = ¬F = T
e_3 = ¬(e_1 ∧ e_2) = ¬(T ∧ T) = ¬T = F
```

3. A partir de la primera tautología (`e_1 = T`), los pasos posteriores que incluyen OR con tautologías producen:

```
e_{n+1} = ¬e_{n-1} ∨ ¬e_n = T
```

- Esto formaliza la **propagación de la existencia mínima** en la lógica ArXe.

---

## 6. Representación en Operadores Proposicionales

- Contradicción:

```
e_0 := S ∧ ¬S
```

- Primera exentación:

```
e_1 := ¬e_0 = S ∨ ¬S
```

- Exentación recursiva:

```
e_{n+1} := ¬(e_{n-1} ∧ e_n) = ¬e_{n-1} ∨ ¬e_n
```

**Dependencia jerárquica:**

```
∀ n ≥ 1, e_{n+1} depende lógicamente de e_n y e_{n-1}
```

- Esto formaliza rigurosamente la estructura jerárquica de exentaciones en la teoría ArXe.

---

## 7. Conclusión

- Cada nivel de exentación se construye estrictamente sobre los niveles anteriores.
- La primera exentación convierte la contradicción pura en tautología.
- Los niveles sucesivos mantienen la consistencia lógica y formalizan la propagación jerárquica de existencia mínima, según la filosofía de la teoría ArXe.

