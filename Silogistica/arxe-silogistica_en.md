# ArXe Syllogistics: Formal Foundations

## 1. Structure of Valid Syllogism

### Definition
A valid syllogism is an Aristotelian syllogism with certain restrictions to resolve ambiguities.
What it seeks to resolve:
- Interpretations that lead to forms of Platonism:
-- Propositional realism: the presumption that the truth of propositions exists independently of judgment
-- Magical realism: the presumption that syllogism allows ontological determinations or determinations about reality
-- Fusion between being and existence: The presumption that these are the same concepts that actually distinguish themselves from each other
-- Negation of essence along with existence

### Scope
The syllogism does not define a new ontology nor does it make determinations about the reality of facts.
Its scope is to determine the internal coherence of propositions.

** Note:
Unlike classical logic, ArXe distinguishes essence from existence
- In classical logic, what is necessarily exists and vice versa
- In ArXe, what is does not necessarily exist, nor is it necessarily true, although what exists necessarily is
- In ArXe, falsity or contradiction have essence, that is, they are.

This means that in ArXe, for example, ¬P negates existence or truth, but not essence

A valid syllogism in ArXe consists of exactly:
** Definition of subject:
- Everything sayable that can be expressed in a single term or word

**Universal Premise:**
- Universal subject (positive, not explicitly negated)

-- Valid: All men, No X
-- Invalid: All non-men, No ¬X
-- Valid: All immortal, No X
-- Valid: All non-mortal, No X

- Predicate that affirms, possibly negating, or negates, possibly affirming, something about the subject
- All men [if] are bald
- No bird [does not] fly

- Why is "immortal" valid and "non-mortal" is not?
- If in the syllogism "non-mortal" and "immortal" are interchangeable with the same meaning
then "non-mortal" would be valid, but then why not say "immortal" directly?
This prevents improper use, for example "all non-bird" is not interchangeable with "unbird", therefore "non-bird" is invalid

**Particular Premise:**
- Particular subject as a case of the universal subject
- Predicate that affirms, possibly negating, or negates, possibly affirming, something about the subject
- Form: "x is a case of S"

**Conclusion:**
- The particular inherits the predicate of the universal
- Form: "x is (or is not) P"

---

## 2. Explicit Form

```
If [we hold as true] that all S is (possibly not being) P
And [we hold as true] that x is (possibly not being) a case of S
[It is implied that] x is (possibly not being) P
```

### Classic example:

```
Universal: All men are mortal
Particular: Socrates is a case of man
Conclusion: Socrates is mortal
```

### Extended form:

```
If [we hold as true] that all men [if] are mortal
And [we hold as true] that Socrates [if] is a case of man
[It is implied that] Socrates [if] is mortal
```

---

## 3. Nature of Propositions

### Fundamental principle:

**Propositions are assertions such that, if they are held as true (they may not be held as such and the syllogism would lack value), the truth of the conclusion is implied from them.**

### Characteristics:

1. **Conditionality:** Truth is hypothetical, not categorical
   - The syllogism does not assert: "All men ARE mortal" (ontological)
   - The syllogism says:
   "IF we say that all men are mortal
   AND we say that Socrates is a man,
   THEN we say that Socrates is mortal" (logical implication)

2. **Acceptance:** The premises can be "held as true" or not
   - If they are accepted: the conclusion follows necessarily
   - If they are not accepted: the syllogism lacks value
   - But the **structure** remains valid regardless

3. **Coherence, not reality:** The syllogism concerns the **consistency of the proposition**, not the **reality of facts**

---

## 4. Meaning of "Being a Case Of"

### Definition:

**"x is a case of S"** means:

> "we affirm that x is a case of that which we have affirmed that in all cases is S"

### Clarification:

- It is **NOT** set membership: x ∈ {S}
- It is **NOT** instantiation of Platonic essence
- It **IS** a propositional relation: x satisfies the condition that defines S in the universal proposition

### Example:

"Socrates is a case of man" = "Socrates is a case of that which in all cases is man"

This means that Socrates **satisfies the condition of the universal** in the proposition.

---

## 5. The Truth Contained in Propositions

### Principle of containment:

**The truth of the conclusion is contained in the propositions.**

This implies:

1. **The syllogism does not generate new truth** — it only makes explicit the truth already contained
2. **The syllogism is extraction**, not construction
3. **The conclusion was already implicit** in the combination of premises

### Analogy:

Like opening a box: the conclusion was already inside the premises.

---

## 6. Why There Is NO Inverse Syllogism

### Invalid form:

```
✗ INVALID:
Particular: Socrates is mortal
Universal: [???]
Conclusion: All men are mortal
```

### Reason:

**The truth of the universal CANNOT be derived from the particular** because:

- The particular is to the universal what the part is to the whole
- Only the universal contains the particular, not the reverse
- The direction is unidirectional: universal → particular → conclusion

---

## 7. Why Only Two Propositions

### Apparently valid form (INVALID):

```
✗ INVALID as a single syllogism:
Universal 1: All men are mortal
Universal 2: All mortals are corporeal
Particular: Socrates is a man
Conclusion: Socrates is corporeal
```

### Reason:

This is not **one** syllogism — it is **two** chained syllogisms:

**Syllogism 1:**
```
Universal: All men are mortal
Particular: Socrates is a man
Conclusion: Socrates is mortal
```

**Syllogism 2:**
```
Universal: All mortals are corporeal
Particular: Socrates is mortal [conclusion from previous]
Conclusion: Socrates is corporeal
```

### Principle:

**Truth is contained in each pair of propositions**, not in sets of three or more.

A syllogism has exactly:
- One universal (contains the general truth)
- One particular (identifies the case)
- One conclusion (extracts the contained truth)

### Necessary structure:

**There cannot be:**
- A single proposition (there is no inference)
- Three or more simultaneous propositions (they are chained syllogisms, not a single syllogism)

---

## 8. Ontology-Syllogism Separation

### Within the syllogism:

- There are only **conditional implications**: If P₁ and P₂, then C
- **Propositional coherence** is preserved
- **Existence** or **factual reality** is not asserted

### Outside the syllogism:

- ArXe can make **primitive ontological assertions**
- Example: "T₀ is contradictory act" (not syllogistically derived)
- These assertions are not grounded in syllogism

### Principle of separation:

**The syllogism never grounds ontology — it only preserves coherence between accepted propositions.**

---

## 9. Contrast with Other Systems

### ArXe vs. ZF (Zermelo-Fraenkel)

| Aspect | ZF | ArXe |
|---------|-----|------|
| **Structure** | Posits existences axiomatically | Derives through syllogism from universals |
| **Justification** | Without universal containing them | Every conclusion contained in universal |
| **Propositions** | Quantifiers without clear syllogistics | Exactly two propositions |
| **Ontology** | Confuses coherence with existence | Separates syllogism from ontology |

### ArXe vs. Aristotle

| Aspect | Aristotle | ArXe |
|---------|-----------|------|
| **"Case of"** | Ambiguous (membership? instantiation?) | Defined: satisfying the universal's condition |
| **Truth** | Ambiguous (formal? ontological?) | Explicit: propositional conditional |
| **Universal** | Ambiguous (does it exist? is it mental?) | Propositional, not ontological |

---

## 10. Synthesis

### Fundamental principles of ArXe syllogistics:

1. ✅ **Truth is contained in the propositions** (no new truth is generated)
2. ✅ **There is no valid inverse syllogism** (particular does not contain universal)
3. ✅ **Only two propositions per syllogism** (more than two = chained syllogisms)
4. ✅ **The syllogism preserves propositional coherence**, does not assert reality
5. ✅ **"Being a case of" is satisfying the condition of the universal** in the proposition
6. ✅ **Truth is conditional**, not categorical
7. ✅ **The syllogism does not ground ontology** — they are separate domains

### Validity of the syllogism:

A syllogism is **valid** if and only if:
- It has exactly one universal premise
- It has exactly one particular premise that is a case of the universal
- The conclusion attributes to the particular the predicate of the universal
- The structure is: If P₁ and P₂, then C

### Nature of the syllogism:

The syllogism is **extraction** of already contained truth, not **construction** of new truth.

The conclusion **was already implicit** in the premises — the syllogism only makes it **explicit**.

---

## 11. Methodological Consequences

### For ArXe as a theory:

1. **Every derived assertion** must be expressible as a valid syllogism
2. **Every primitive assertion** (not derived) must be declared as ontological
3. **Logical coherence is not confused** with ontological truth
4. **Nothing is posited** that is not a case of a prior universal or ontological primitive

### Criterion of theoretical validity:

A theory is **syllogistically valid** if:
- Its derivations respect the form of the syllogism (2 propositions, 1 conclusion)
- It does not invert the direction (particular → universal)
- It does not confuse propositional coherence with assertion of existence
- It explicitly declares its ontological primitives

---

## Conclusion

ArXe syllogistics establishes a rigorous framework for reasoning where:

- **The formal structure is impeccable** (two propositions, universal→particular direction)
- **The ontology-logic separation is clear** (the syllogism does not create existence)
- **Truth is conditional and contained** (not generated, but extracted)
- **It seeks to avoid propositional realism** (the validity of propositions is independent of judgment)
- **It seeks to avoid Platonism** (there exists a reality for propositions distinct from the reality of those who formulate them)
- **The truth of propositions exists independently of the sensible world**

This avoids:
- The problems of ZF (postulation without justification)
- The ambiguities of Aristotle (nature of the universal, of "case of")
- The Platonist confusion (formal coherence ≠ ontological existence)

And provides:
- Solid foundation for theoretical derivations
- Clear criterion of inferential validity
- Explicit separation between the derived and the primitive

## 12. Dialectical Contrast with Classical Systems of Logic

- On the Principle of Bivalence
	The syllogism in ArXe does not produce ontological truth, but preserves inferential coherence within a conditional framework.
	In this way:
	It does not affirm what is true of the world,
	But what would be coherent if a certain set of propositions is assumed.