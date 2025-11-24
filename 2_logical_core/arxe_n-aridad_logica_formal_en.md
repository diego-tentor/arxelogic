# n-ary Logics: Complete Formalization
## ArXe's Fundamental Logical System

**Document:** Rigorous axiomatization of logics according to exemption level n

---

## 0. Notation and Conventions

### 0.1 Basic Symbols
n := Arity (number of temporal phases Tf)
Ln := n-ary Logic (logical system for level n)
⊤n := Top/Truth in Ln (when applicable)
⊥n := Bottom/False in Ln (when applicable)
⊗n := Undecidable/Not-applicable in Ln
∼n := Negation in Ln
∧n := Conjunction in Ln
∨n := Disjunction in Ln
→n := Implication in Ln
↔n := Co-constitution in Ln (for n=2)
⊕n := Exclusion in Ln
≡n := Identity in Ln (when applicable)

text

### 0.2 Propositional Variables
For each n, variables: p, q, r, s, ...
Each variable can take values in Vn (set of truth values)

text

### 0.3 Meta-language
⊢n φ := φ is a theorem in Ln
Ln ⊨ φ := φ is semantically valid in Ln
φ ⊨n ψ := φ semantically implies ψ in Ln

text

---

## 1. L₀: Contradictory Logic (n=0)

### 1.1 Structure

**Ontological level:**
T⁰ (k=0, n=0)
Pure contradiction
A "phase" that IS and IS-NOT simultaneously

text

**Truth values:**
V₀ = {⊤⊥}
A single "value": simultaneously true AND false

text

### 1.2 Axioms of L₀

**Axiom 0.1 (Fundamental Contradiction):**
⊢₀ p ∧₀ ∼₀p

text
For every proposition p, p and not-p are simultaneously true.

**Axiom 0.2 (Triviality):**
If ⊢₀ p ∧₀ ∼₀p, then ⊢₀ q for every q

text
From contradiction, everything follows (principle of explosion).

**Axiom 0.3 (Uniqueness):**
⊤⊥ = unique value

text
There is no distinction between truth and falsehood.

### 1.3 Truth Tables (Degenerate)

**Negation:**
p	∼₀p
⊤⊥	⊤⊥
text
Negation does not distinguish.

**Conjunction:**
p q	p∧₀q
⊤⊥ ⊤⊥	⊤⊥
text

**Disjunction:**
p q	p∨₀q
⊤⊥ ⊤⊥	⊤⊥
text

All operations collapse to ⊤⊥.

### 1.4 Theorems of L₀

**Theorem 0.1:**
⊢₀ p ↔₀ ∼₀p

text
*Proof:* Direct from Axiom 0.1. □

**Theorem 0.2:**
⊢₀ (p → q) ∧ (∼p → q)

text
*Proof:* Everything implies everything. □

**Theorem 0.3 (Indistinguishability):**
For every p, q: ⊢₀ p ≡₀ q

text
*Proof:* There is only one value. □

### 1.5 Properties of L₀

**Does NOT have:**
- Truth/falsehood distinction
- Effective negation
- Identity (everything is the same)

**DOES have:**
- Contradiction as structure
- Triviality (everything is provable)
- Total collapse

**Physical interpretation:**
Singularities (Big Bang, black holes)
Planck scale
Contradictory origin

text

---

## 2. L₁: Logic of Possibility (n=1)

### 2.1 Structure

**Ontological level:**
T¹ (k=1, n=2)
Two phases: (Tf₁, Tf₂)
First distinction without difference

text

**Truth values:**
V₁ = {a, a'}
Two mutually indistinguishable values

text

### 2.2 Axioms of L₁

**Axiom 1.1 (Symmetric Duality):**
a and a' are ontologically equivalent
But formally distinguishable

text

**Axiom 1.2 (Involution):**
∼₁a = a'
∼₁a' = a
∼₁∼₁p = p

text
Negation swaps but returns.

**Axiom 1.3 (No Third):**
There is no third value
V₁ = {a, a'} is complete

text

**Axiom 1.4 (Indistinguishability):**
There does NOT exist a function f: V₁ → {0,1} that distinguishes a from a'

text
There is no internal way to decide which is "true".

### 2.3 Truth Tables

**Negation:**
p	∼₁p
a	a'
a'	a
text
Perfect swap.

**Conjunction (non-standard):**
∧₁	a	a'
a	a	⊗₁
a'	⊗₁	a'
text
Only equal values conjunct.
Opposite values → undecidable.

**Disjunction (non-standard):**
∨₁	a	a'
a	a	⊗₁
a'	⊗₁	a'
text
Symmetric to conjunction (duality).

**Co-constitution (↔₁):**
↔₁	a	a'
a	a'	a
a'	a	a'
text
Fundamental operator of L₁.

### 2.4 Theorems of L₁

**Theorem 1.1 (No Excluded Middle):**
NOT ⊢₁ p ∨₁ ∼₁p

text
*Proof:* (a ∨₁ a') = ⊗₁ by truth table. □

**Theorem 1.2 (No Non-Contradiction):**
NOT ⊢₁ ∼(p ∧₁ ∼₁p)

text
*Proof:* (a ∧₁ a') = ⊗₁, not refutable. □

**Theorem 1.3 (Perfect Involution):**
⊢₁ ∼₁∼₁p ≡₁ p

text
*Proof:* Direct from Axiom 1.2. □

**Theorem 1.4 (Co-constitution):**
⊢₁ p ↔₁ ∼₁p

text
*Proof:* From ↔₁ truth table. □

### 2.5 Properties of L₁

**Characteristics:**
- Two internally indistinguishable values
- Negation as swap
- No excluded middle
- Perfect involution
- Co-constitution as fundamental operator

**Physical interpretation:**
Quantum vacuum fluctuations
Symmetric states without breaking
First post-Big Bang phases

text

---

## 3. L₂: Dual Logic (n=2)

### 3.1 Structure

**Ontological level:**
T^-1 or T² (depending on sign)
n=3 for T^-1, n=4 for T²
But logically we treat basic duality

text

**Clarification:** Here L₂ represents the logic of **undecidable duality** operating in quantum superpositions. Corresponds to systems at effective n=2 (before measurement).

**Truth values:**
V₂ = {⊤, ⊥, ⊗}
⊤ = True (if decided)
⊥ = False (if decided)
⊗ = Undecidable (without observer)

text

### 3.2 Axioms of L₂

**Axiom 2.1 (Superposition):**
Initial state: ⊗ (undecidable)
Only with observer (n≥3): collapses to ⊤ or ⊥

text

**Axiom 2.2 (Mutuality):**
States ⊤ and ⊥ are mutually constitutive
One does not exist without the other

text

**Axiom 2.3 (Internal Undecidability):**
From ⊗, you CANNOT decide ⊤ or ⊥
Without introducing external observer

text

**Axiom 2.4 (Excluded Middle does NOT apply):**
NOT ⊢₂ p ∨₂ ∼₂p when p = ⊗

text

### 3.3 Truth Tables

**Negation:**
p	∼₂p
⊤	⊥
⊥	⊤
⊗	⊗
text
Undecidable remains undecidable.

**Conjunction (Strong Kleene):**
∧₂	⊤	⊥	⊗
⊤	⊤	⊥	⊗
⊥	⊥	⊥	⊥
⊗	⊗	⊥	⊗
text

**Disjunction (Strong Kleene):**
∨₂	⊤	⊥	⊗
⊤	⊤	⊤	⊤
⊥	⊤	⊥	⊗
⊗	⊤	⊗	⊗
text

**Implication:**
→₂	⊤	⊥	⊗
⊤	⊤	⊥	⊗
⊥	⊤	⊤	⊤
⊗	⊤	⊗	⊗
text

**Mutuality (↔₂):**
↔₂	⊤	⊥	⊗
⊤	⊤	⊥	⊗
⊥	⊥	⊤	⊗
⊗	⊗	⊗	⊤
text
⊗↔₂⊗ = ⊤ (mutually undecidable is true).

### 3.4 Theorems of L₂

**Theorem 2.1 (Conditional Excluded Middle):**
If p ≠ ⊗, then ⊢₂ p ∨₂ ∼₂p
If p = ⊗, then NOT ⊢₂ p ∨₂ ∼₂p

text
*Proof:* From truth tables. □

**Theorem 2.2 (Conditional Non-Contradiction):**
If p ∈ {⊤,⊥}, then ⊢₂ ∼₂(p ∧₂ ∼₂p)
If p = ⊗, then p ∧₂ ∼₂p = ⊗ (undecidable)

text
*Proof:* ⊗ ∧₂ ⊗ = ⊗ by truth table. □

**Theorem 2.3 (Persistence of Undecidability):**
If p = ⊗, then f(p) = ⊗ for every propositional function f

text
*Proof:* Undecidability propagates. □

**Theorem 2.4 (Collapse by Observation):**
⊗ + observer → ⊤ or ⊥ (not provable in L₂, requires L₃)

text

### 3.5 Properties of L₂

**Characteristics:**
- Three values: decided (⊤,⊥) and undecidable (⊗)
- Excluded middle is NOT a tautology
- Non-contradiction is NOT universal
- Undecidability is a legitimate truth value
- Requires observer to collapse ⊗

**Physical interpretation:**
Quantum superposition before measurement
Wave-particle complementarity
Entangled states
Heisenberg uncertainty

text

---

## 4. L₃: Ternary Logic with Observer (n=3)

### 4.1 Structure

**Ontological level:**
T^-1 (k=-1, n=3)
Three phases: (a, a', observer)
First objectivity

text

**Truth values:**
V₃ = {⊤, ⊥}
Two decidable values (with observer)

text

### 4.2 Axioms of L₃

**Axiom 3.1 (Observer Presence):**
There exists a third position o
that can decide between a and a'

text

**Axiom 3.2 (Restored Excluded Middle):**
⊢₃ p ∨₃ ∼₃p

text
With observer, every proposition is ⊤ or ⊥.

**Axiom 3.3 (Non-Contradiction):**
⊢₃ ∼₃(p ∧₃ ∼₃p)

text
Observer excludes contradiction.

**Axiom 3.4 (Contextual Decision):**
Observer o decides, but decision depends on frame
Another observer o' may decide differently

text

### 4.3 Truth Tables (Classical)

**Negation:**
p	∼₃p
⊤	⊥
⊥	⊤
text

**Conjunction:**
∧₃	⊤	⊥
⊤	⊤	⊥
⊥	⊥	⊥
text

**Disjunction:**
∨₃	⊤	⊥
⊤	⊤	⊤
⊥	⊤	⊥
text

**Implication:**
→₃	⊤	⊥
⊤	⊤	⊥
⊥	⊤	⊤
text

**Equivalence:**
↔₃	⊤	⊥
⊤	⊤	⊥
⊥	⊥	⊤
text

### 4.4 Theorems of L₃ (Classical)

**Theorem 3.1 (Excluded Middle):**
⊢₃ p ∨₃ ∼₃p

text
*Proof:* Tautology in truth table. □

**Theorem 3.2 (Non-Contradiction):**
⊢₃ ∼₃(p ∧₃ ∼₃p)

text
*Proof:* Contradiction is always ⊥. □

**Theorem 3.3 (Modus Ponens):**
If ⊢₃ p and ⊢₃ p →₃ q, then ⊢₃ q

text
*Proof:* Standard. □

**Theorem 3.4 (Double Negation):**
⊢₃ ∼₃∼₃p ↔₃ p

text
*Proof:* By negation truth table. □

### 4.5 Properties of L₃

**Characteristics:**
- Classical bivalent logic (with observer)
- Excluded middle valid
- Non-contradiction valid
- Complete for decidable propositions
- **BUT**: Decision is contextual (depends on observer)

**Difference with standard classical logic:**
Classical: absolute truth
L₃: truth relative to observer

text

**Physical interpretation:**
Post-quantum measurement
Observer has decided
Collapsed state
Apparent classical world

text

---

## 5. L₆: Bayesian Logic (n=6)

### 5.1 Structure

**Ontological level:**
T³ (k=3, n=6)
Six phases: triadic
(observer, observed, context) with presence/absence

text

**Truth values:**
V₆ = [0,1] (continuum of probabilities)
Or discretely: V₆ = {0, 1/6, 2/6, 3/6, 4/6, 5/6, 1}

text

### 5.2 Axioms of L₆

**Axiom 6.1 (Contextual Probability):**
P(p | context) ∈ [0,1]

text
Truth is probabilistic and contextual.

**Axiom 6.2 (Bayes):**
P(H|E) = P(E|H)·P(H) / P(E)

text
Bayesian updating of beliefs.

**Axiom 6.3 (Context Modifies):**
P(p | C₁) ≠ P(p | C₂) in general

text
Context affects probability.

**Axiom 6.4 (Configurations):**
2^6 = 64 possible configurations
Only one is updated

text

### 5.3 Operators (Probabilistic)

**Negation:**
P(∼₆p) = 1 - P(p)

text

**Conjunction (independence):**
P(p ∧₆ q) = P(p) · P(q) if independent
P(p ∧₆ q) = P(p) · P(q|p) in general

text

**Disjunction:**
P(p ∨₆ q) = P(p) + P(q) - P(p ∧₆ q)

text

**Conditional:**
P(p →₆ q) = P(∼₆p ∨₆ q)

text

### 5.4 Theorems of L₆

**Theorem 6.1 (Bayes' Theorem):**
P(H|E) = P(E|H)·P(H) / P(E)

text
*Proof:* From probability axioms. □

**Theorem 6.2 (Total Probability):**
P(E) = Σᵢ P(E|Hᵢ)·P(Hᵢ)

text
*Proof:* Partition of space. □

**Theorem 6.3 (Probabilistic Excluded Middle):**
P(p ∨₆ ∼₆p) = 1 (always)
BUT p can have P(p) = 0.5 (indeterminate)

text
*Proof:* P(p) + P(∼p) = 1. □

**Theorem 6.4 (Context-Dependence):**
There exist p, C₁, C₂ such that:
P(p|C₁) ≠ P(p|C₂)

text
*Proof:* Constructive (physical examples). □

### 5.5 Properties of L₆

**Characteristics:**
- Continuous values [0,1] (not just ⊤/⊥)
- Bayesian updating
- Context modifies probabilities
- Triadic: observer-observed-context
- Complete for reasoning under uncertainty

**Physical interpretation:**
Complete quantum mechanics (Born rule)
Mass, stable objects
Quantum Bayesianism
Experimental context affects results

text

---

## 6. L₁₁: U(1) Gauge Logic (n=11)

### 6.1 Structure

**Ontological level:**
T^-5 (k=-5, n=11)
Eleven temporal phases
Electromagnetic field

text

**Truth values:**
V₁₁ = Orbits under U(1)
Equivalence class [p] under gauge transformation

text

### 6.2 Axioms of L₁₁

**Axiom 11.1 (Gauge Redundancy):**
p ≡₁₁ p' if p' = e^(iα)p
For every phase α ∈ [0, 2π)

text

**Axiom 11.2 (Physical Invariance):**
Observables O satisfy:
O(p) = O(e^(iα)p)

text

**Axiom 11.3 (Freedom of Choice):**
You can choose α arbitrarily (gauge fixing)
Without changing physics

text

**Axiom 11.4 (Configurations):**
2^11 = 2048 structural configurations
Gauge reduces to equivalence classes
2 physical polarizations

text

### 6.3 Operators (with Gauge)

**Negation (gauge-invariant):**
∼₁₁[p] = [∼p]
Well-defined on classes

text

**Conjunction:**
[p] ∧₁₁ [q] = [p ∧ q]
If gauge-compatible

text

**Gauge Transformation:**
G_α: p ↦ e^(iα)p
G_α ∘ G_β = G_{α+β}
G₀ = identity

text

### 6.4 Theorems of L₁₁

**Theorem 11.1 (Gauge as Group):**
{G_α | α ∈ [0,2π)} forms U(1) group

text
*Proof:* Verification of group axioms. □

**Theorem 11.2 (Observable Invariance):**
If O is observable, then:
O ∘ G_α = O for every α

text
*Proof:* From Axiom 11.2. □

**Theorem 11.3 (Unique Physical Class):**
[p] contains infinite representatives
But only one physical reality

text
*Proof:* Gauge fixing selects one arbitrarily. □

**Theorem 11.4 (Two Polarizations):**
After gauge fixing and Lorentz:
2 physical degrees of freedom (transverse)

text
*Proof:* 11 phases - 1 gauge - 8 Lorentz = 2. □

### 6.5 Properties of L₁₁

**Characteristics:**
- Truth defined modulo gauge transformation
- Infinite equivalent descriptions
- Freedom of choice (gauge fixing)
- Physics in equivalence classes
- 2 physical DOF from 2048 configurations

**Physical interpretation:**
Electromagnetism
Photon with 2 polarizations
U(1) gauge
Vector potential A^μ with redundancy

text

---

## 7. L₁₃: Weak Mixing Logic (n=13)

### 7.1 Structure

**Ontological level:**
T^-6 (k=-6, n=13)
Thirteen temporal phases
Weak interaction

text

**Truth values:**
V₁₃ = Flavor mixtures
States as superpositions of basis

text

### 7.2 Axioms of L₁₃

**Axiom 13.1 (Flavor Mixing):**
|ν_e⟩, |ν_μ⟩, |ν_τ⟩ (flavor basis)
|ν₁⟩, |ν₂⟩, |ν₃⟩ (mass basis)
Related by PMNS matrix

text

**Axiom 13.2 (Non-Diagonal):**
Flavor basis ≠ mass basis
Non-trivial mixing

text

**Axiom 13.3 (Oscillation):**
|ν_e(t)⟩ evolves to mixture of |ν_μ⟩, |ν_τ⟩
Probabilistically

text

**Axiom 13.4 (Configurations):**
2^13 = 8192 configurations
Gauge SU(2) reduces
3 observable flavors

text

### 7.3 Operators (Basis-Dependent)

**Change of Basis:**
U: flavor basis → mass basis
|ν_α⟩ = Σᵢ U_αi |νᵢ⟩

text

**Flavor Projection:**
P_α: projects onto flavor α
P_α|ν(t)⟩ = flavor α component

text

**Time Evolution:**
|ν(t)⟩ = Σᵢ e^(-iEᵢt)|νᵢ⟩⟨νᵢ|ν(0)⟩

text

### 7.4 Theorems of L₁₃

**Theorem 13.1 (Oscillation):**
P(ν_e → ν_μ, t) ≠ 0
Flavors change in time

text
*Proof:* From non-diagonal mixing. □

**Theorem 13.2 (Probability Conservation):**
Σ_α P(ν_β → ν_α, t) = 1

text
*Proof:* Unitary evolution. □

**Theorem 13.3 (Three Generations):**
PMNS matrix is 3×3
Three flavors, three masses

text
*Proof:* Experimental observation + structure. □

**Theorem 13.4 (CP Violation):**
Possible Dirac phase in PMNS
allows P(ν_e→ν_μ) ≠ P(ν̄_e→ν̄_μ)

text
*Proof:* Complex matrix structure. □

### 7.5 Properties of L₁₃

**Characteristics:**
- Flavor basis vs mass basis
- Non-diagonal mixing (oscillation)
- Three generations
- Possible CP violation
- Identity change in time

**Physical interpretation:**
Oscillating neutrinos
Weak interaction
Flavor change
Beta decay

text

---

## 8. Complete Hierarchy of Logics

### 8.1 Summary Table

| n | Logic | Values | Excluded Middle | Non-Contradiction | Interpretation |
|---|--------|---------|------------------|------------------|----------------|
| 0 | L₀ | {⊤⊥} | N/A | NO (is contradiction) | Singularity |
| 1 | L₁ | {a, a'} | NO | NO | Possibility |
| 2 | L₂ | {⊤,⊥,⊗} | Conditional | Conditional | Quantum Superposition |
| 3 | L₃ | {⊤,⊥} | YES | YES | Classical (with Observer) |
| 6 | L₆ | [0,1] | Probabilistic | Probabilistic | Bayesian Quantum |
| 11| L₁₁ | U(1) Orbits | Gauge-Dependent | Gauge-Dependent | Electromagnetism |
| 13| L₁₃ | Flavor Mixtures | Basis-Dependent | Basis-Dependent | Weak Interaction |