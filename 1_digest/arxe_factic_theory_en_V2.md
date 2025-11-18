## 1. Purpose and Scope
This document formally specifies the foundations of ArXe Theory from T^0 to T^3. ArXe is a generative ontological theory that explains the emergence of structure, existence, spatiality, temporality, and objectivity from contradictory principles.
It does not claim or achieve mathematical rigor, focusing instead on understanding the system of ideas being transmitted.
ArXe compares its a priori results with physical phenomena demonstrated by science and even some speculative ones as a form of self-validation, not as competition in the field of knowledge.

### 4. Axiom
** ArXe Theory proposes a single axiom of its own
** Axiom: ¬() ≡ Tf ≡ 1Tp (Planck Time)

# 5. Recursive Fractal Ontology and Dimensional Mapping
## Recursive Exentation System
### Definition
**Entification** (conjunction):
```
Entₙ := Entₙ₋₁ ∧ ExEntₙ₋₁
```
**Exentation** (negation → disjunction):
```
ExEntₙ := ¬(Entₙ₋₁ ∧ ExEntₙ₋₁) ≡ ¬Entₙ₋₁ ∨ ¬ExEntₙ₋₁
```
**Initial condition**:
```
Ent₁ := S ∧ ¬S
ExEnt₁ := S ∨ ¬S
```
** See Appendix 1: Formal Logical Framework of the ArXe Exentation Chain
---
### 5.2 Logical Structure
Each exentation level exposes an n-ary logical structure
** Examples
- e_1 = Unary logic: contradictories, false, negative
- e_2 = Binary logic: excluded middle, non-contradictory contraries, (t) true and (f) false, (b) beginning and (e) end, pair, both, non-objective distinction, phases
- e_3 = Ternary logic: modality, included third, "observer", third to the pair, mediating, participant, objective distinction
- e_4 = Quaternary logic: pairs of contraries, opposition, polarity
- e_n = N-ary logic

** Phases
- The exentation number determines the number of phases; at its level, each phase is isomorphic
- Phenomenological totality is the superposition of levels

### 5.2 Recursive Structure
Each level n generates two complementary elements through con-junction (represented by the logical AND operator) and dis-junction (represented by the XOR operator), creating an infinite self-similar hierarchy.

---

## 5.3 Mapping Function e(n) → k

### 5.4 Definition

```
e_n = e(n) = {
  0                    if n = 1
  (-1)ⁿ · ⌊n/2⌋        if n > 1
}
```

### 5.5 Generated Sequence

| n | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| **e(n)** | **0** | **1** | **-1** | **2** | **-2** | **3** | **-3** | **4** | **-4** |

**Pattern**: {0, 1, -1, 2, -2, 3, -3, ...}

**Property**: The function maps ℕ → ℤ surjectively, alternating positive exponents (even n) and negative (odd n).

---

## 5.6 Inverse Function n(k) ← k

### 5.7 Derivation

To invert e(n) = k:

- **k = 0**: Only n = 1 satisfies e(1) = 0
- **k > 0**: Occurs when n is even, then k = n/2 → **n = 2k**
- **k < 0**: Occurs when n is odd, then k = -(n-1)/2 → **n = -2k + 1**

### 5.8 Inverse Formula

```
n(k) = {
  1           if k = 0
  2k          if k > 0
  -2k + 1     if k < 0
}
```

### 5.9 Verification

- n(0) = 1, e(1) = 0 ✓
- n(2) = 4, e(4) = 2 ✓  
- n(-2) = 5, e(5) = -2 ✓

**Theorem**: e and n establish a bijection between ℕ and ℤ.

---
### Consequences

1. Each logical transition (n → n+1) corresponds to an exponential transition
2. The recursive structure is isomorphic with an exponential structure
3. The system has a singular zero point (T⁰) and two branches (k > 0, k < 0)

---

## 6. Dimensional Assignment

### 6.1 Hypothesis

- Each exponent indicates a pair of contraries and existents, as a typical example: beginning and end
- T (Time) "finite unit (that has beginning and end), existent, tautological"
- It follows that a thing and its contrary are possible if they do not occur in the same Tf

** T^n = ArXe existent Time
- Distinguished from Tf in that T^1 equals 2*Tf
- According to PNC, if something and its contrary are not possible in 1Tf, they are possible in 2TF = T^1 = T (physical)

```
T¹ ≡ T    (analog of physical Time)
T² ≡ L    (analog of physical Length)
T³ ≡ M    (analog of physical Mass)
```
- T^1 can be interpreted as an analog of Time or one-dimensional physical space insofar as possible, real, existent and true units.
- T^2 can be interpreted:
		- as an analog of Length or two-dimensional space, insofar as it extends from one T^1 point to another T^1, or an initial moment and a final moment
		- as a double temporal direction, one and an inverse
		- as double finitude: existent starting point and existent ending point
- T^3 can be interpreted 
		- as an analog of three-dimensional space following the previous reasoning
		- as unification of space and time

** See Appendix 2: Dimensional Correspondence between the Physical System and the ArXe Temporal Hierarchy

### 6.2 Ontological Isomorphism Table
* Following the previous analogies and inferring new ones

| n | k | Tᵏ | Dimension | Interpretation |
|---|---|-------|-----------|----------------|
| 1 | 0 | T⁰ | 1 | Dimensionless |
| 2 | 1 | T¹ | **T** | Time |
| 3 | -1 | T⁻¹ | 1/T | Frequency |
| 4 | 2 | T² | **L** | Length |
| 5 | -2 | T⁻² | 1/L² | Curvature |
| 6 | 3 | T³ | **M** | Mass |
| 7 | -3 | T⁻³ | 1/M³ | Inverse density |

### 6.3 Observations

- **Positive exponents**: Direct dimensions (T, L, M)
- **Negative exponents**: Inverse dimensions (1/T, 1/L², 1/M³)
- Compatible with standard dimensional analysis

---

## 6.4 Algebraic Structure

### 6.5 Exponent Group

The exponents {Tᵏ : k ∈ ℤ} form an abelian group:

```
Tᵏ · Tᵐ = Tᵏ⁺ᵐ
(Tᵏ)⁻¹ = T⁻ᵏ
T⁰ = identity
```

Isomorphic to (ℤ, +).

### 6.6 Duality

The system exhibits multiple dualities:
- **Logical**: Conjunction (∧) ↔ Disjunction (∨)
- **Exponential**: k ↔ -k
- **Dimensional**: Direct ↔ Inverse
- **Parity**: Even (k > 0) ↔ Odd (k < 0)

---

### The Structure of Exentations

From the original contradictory act arise successive **exentations** that construct a hierarchical logical-temporal structure. Each level preserves the logical capacities of previous ones while developing new dimensions of complexity:

#### **T0 - Absolute Non-existence**
*Logic: Unary*

Absolutely negative time lacks existence and physical expression. It represents pure logical non-existence, prior to any determination. It has no physical meaning and cannot be experienced, constituting the "zero degree" from which all subsequent determination emerges.

#### **T1 - Homogeneous Positive Time** 
*Logic: Unary*

Time that occurs positively with a single direction, but still lacks measurable physical expression. It is a homogeneous temporal field where nothing can be distinguished. It represents pure temporality prior to any variation or differentiation. At this level, temporal experience as we know it does not exist, only **flow** as such.

**Physical similarities**: This level could correspond to the pre-inflationary state of the universe, where temporality exists but without differentiable structure. Quantum vacuum fluctuations would be echoes of the transition from this homogeneous state.

#### **T-1 - Temporal Alterity**
*Logic: Binary, Unary*

Time variation arises: experienceable, empirical time as we know it. Temporal phase changes occur, not necessarily regular. Here emerges **alterity** as a principle: the other, the different, variation.

**Physical similarities**: 
- The **arrow of time** and thermodynamic irreversibility
- **Irregular variations** in quantum processes
- **Decoherence** as transition from homogeneity (T1) toward variability
- Natural **rhythms** and the emergence of periodicities

#### **T2 - Spatial Anteriority**
*Logic: Binary, Unary*

**Anteriority** emerges (what is before, in front, without implying before/after temporality): spatial simultaneity. Minkowski space is constituted as a great empty and homogeneous field whose evolution is not temporal. Space appears as **contrary** to time: a spatial evolution is not temporal, it is not possible to trace a temporal evolution of empty space.

**Physical similarities**:
- The **constancy of c** as a consequence of space-time opposition
- **Special relativity** and the structure of flat spacetime
- The emergence of **extension** and **length** as physical concepts
- **Fields** as homogeneous spatial structures

#### **T-2 - Spatial Variation**
*Logic: Binary, Unary*  

**Geodesics** and space variations become possible. Regions of different temporal densities emerge and the first relational 'virtual' **particles**. Here spacetime curvature begins.

**Physical similarities**:
- **General relativity** and spacetime curvature
- **Virtual particles** as relational effects between different temporal densities
- **Gravitational fields** as variations of the spatial metric
- **Gravitational waves** as propagation of spatial variations
- **Prediction**: There should be measurable correlation between spatial metric variations and local temporal fluctuations

### Emergence of the Massive Dimension

#### **T3 - Mass as Space-Time**
*Logic: Ternary, Binary, Unary*

Mass arises as **T2 + T1**: it combines spatiality with positive temporality, corresponding to relativistic spacetime. The temporal distinction between **past-present-future** becomes possible. Physics becomes **'Bayesian'** in the sense that probabilistic structure emerges.

**Physical similarities**:
- The **Higgs mechanism** as manifestation of the fundamental massive field
- The **distinction** past-present-future emerges only with mass (explaining why massless quantum mechanics is "atemporal")
- **Quantum probability** as an emergent property of this level
- Appearance of **physical particles** as we know them
- The **Higgs Boson** and the universal massive field

**Prediction**: Masses of fundamental particles should follow patterns derivable from the underlying ternary logical structure.

#### **T-3 - Massive Variation**  
*Logic: Ternary, Binary, Unary*

**Massive bodies** and Newtonian physics as a limiting case become possible. Here operate the classical laws of motion and mechanics of extended bodies.

**Physical similarities**:
- **Newtonian mechanics** as limiting regime of stabilized mass variations
- **Astronomical bodies** and orbital dynamics
- **Inertia** as resistance to massive variation
- **Planetary systems** and large-scale structure

### 4.3 T^-1: Alternation (Exentation of T^1)

**Generative process:**
- T^1 (static alterity) exents from itself
- Produces alternation: the universe acts as one or the other
- There is no record of what came before

**Logical structure:**
```
S → ¬S → S → ¬S → ...
(alternation without memory)
```

**Properties:**
- **Irreversible temporal:** Advancing without return
- **Without milestones:** When B is reached, A no longer exists
- **Absolute irregularity:** The universe "chooses" without reason when to alternate
- **Emergent regularity:** For an external observer, irregularity is perceived as regular
- **Probabilistic:** Each transition is (S or ¬S) with P = 1/2

**Fundamental characteristic:**
```
From A to B: when B is reached, A has ceased to exist
(essence of time: irreversibility)
```

**Ontological state:** Exists as succession

**Temporality:** Pure time (without spatiality)

---

### 4.4 T^2: Anteriority (Exentation of T^-1)

**Generative process:**
- T^-1 (temporal alternation) exents
- Produces contrary variations = contrary directions
- Spatiality and causality emerge

**Logical structure:**
```
Contrary variations = Reversible directions

A <──────> B

From A to B: when B is reached, A CONTINUES TO EXIST
(essence of space: reversibility, persistence)
```

**Properties:**
- **Spatiality:** 2D (plane, anteriority = "what is before me")
- **Reversibility:** I can go from A to B and return to A
- **Ontological persistence:** Points do not disappear when abandoned
- **Symmetric causality:** Between two isolated bodies, there are no absolute ponderable truths
  - Does A push B, or does B push A? → Indistinguishable
  - Does A enlarge, or does B shrink? → Indistinguishable
- **Ternary logic (included third):** Requires a third to determine relations
- **Causal memory:** There is cause-effect, but without distinguishable present

**Probability:**
- Chained probabilities (Kolmogorov type)
- P(B|A): causal conditionality
- Without Bayesian updating (there is no present that observes and revises)

**Ontological state:** Exists as spatial-causal relation

**Dimensionality:** 2D spatial + irreversible time

**Without objectivity:** There are no ponderable facts with only two bodies

---

### 4.5 T^3: Depth and Objectivity (Exentation of T^2)

**Generative process:**
- T^2 (two-dimensional anteriority) exents
- Introduces the "structural third" that breaks symmetry
- Emerge simultaneously: 3D spatial + distinguishable present + objectivity

**Logical structure:**
```
Triadic structure:
- Two terms in relation
- A third that fixes/determines that relation

Result: Objective facts, ponderable truths
```

**Properties:**
- **Spatiality:** 3D (volume, depth)
- **Distinguishable present:** Now ≠ before ≠ after
- **Historical memory:** Objective past, present, future
- **Emergent objectivity:** With three bodies (or triadic structure), there are ponderable truths
  - Now we CAN say: "A pushed B" (C saw it)
  - Now we CAN say: "A enlarged" (B and C remained constant)
- **Facts:** What really happened exists as objective record
- **Operative ternary logic:** The third allows verification

**Probability:**
- Bayesian probabilities (ternary)
- Structure: Prior (expectation) → Evidence (experience) → Posterior (valuation)
- Requires T^3 because it needs:
  - Distinguishable present (moment to observe evidence)
  - Objectivity (facts that count as evidence)
  - Historical memory (remember prior to update)

**Ontological state:** Exists as objective fact

**Dimensionality:** 3D spatial + historical time (past/present/future)

**Simultaneous emergence:**
- The third spatial dimension and historical time emerge together
- Both require the same triadic structure
- The present is the "structural third" that fixes past and future as objective

---

## 6. Structural Progression Table

| Level | Structure | Logic | Spatial | Temporal | Probability | Objectivity |
|-------|-----------|--------|----------|----------|--------------|-------------|
| **T^0** | (S and ¬S) | Contradictory | 0D (point) | Tf (unverifiable) | Not applicable | Circular |
| **T^1** | (S or ¬S) | Binary (excluded middle) | 1D (contraries) | — | 1/2 (equiprobable) | No record |
| **T^-1** | Alternation | Binary | — | Irreversible, no memory | 1/2 per transition | No record |
| **T^2** | Contrary variations | Ternary (included third) | 2D (plane) | Symmetric causality | Kolmogorov (conditional) | Not ponderable (2 bodies) |
| **T^3** | Triadic depth | Operative ternary | 3D (volume) | Past/present/future | Bayesian (updating) | Ponderable facts |

---

## 7. Similarities with Physical and Philosophical Concepts

### 7.1 Fundamental Time (Tf) and Physics

**Relation to measurement:**
- Tf is structurally prior to any temporal measurement
- Measurable physical time emerges from the accumulation of Tf in T^2 and T^3
- Analogy: Tf is to physical time what instant is to duration

**Relation to Planck:**
- Tf could relate to Planck scale (speculative, not formally derived)
- Both represent limits of empirical verifiability

### 7.2 Ontological Probability and Quantum Mechanics

**Structural parallelism:**
- Quantum superposition ↔ Istence (S and ¬S)
- Wave function collapse ↔ Ex-Istence (S or ¬S)
- Quantum indeterminacy ↔ Ontological probability (not epistemic)

**Difference:**
- ArXe does not derive quantum mechanics equations
- Offers a conceptual framework where indeterminacy is fundamental, not problematic

### 7.3 Space-Time and Relativity

**Unified emergence:**
- Space (T^2, T^3) and time (T^-1) are not independent
- Emerge from successive exentations of the same contradictory structure
- This resonates with relativity (unified spacetime), but does not derive its equations

### 7.4 Causality and Symmetry

**T^2 (two bodies):**
- Symmetric causality, pure relational
- Without privileged reference frame
- Analogous to Galilean relativity (pure relative motion)

**T^3 (three bodies / triadic structure):**
- Objective causality
- Reference frame fixed by the third
- Analogous to the necessity of observers in modern physics

---

## 8. Glossary of Technical Terms

**Act:** What is in the moment of being, without requiring external verification
**Alterity:** Property of being absolute Other, radically alien
**Anteriority:** Two-dimensional spatiality, "what is before me"
**Circular (structure):** Self-referential, requiring presupposition of what it attempts to verify
**Essential dimensions:** Structures that are or occur without yet existing as determinations
**Ex-Istence:** Exented form of existence, tautological structure (S or ¬S)
**Exentation:** Mechanism by which a structure alienates itself to generate alterity, disambiguation mechanism
**Istence:** Contradictory form of pure act (S and ¬S), which is but does not exist, terminological wink of "This", "Being" to conclude that "Ex-Istence" is what "was this" or what "ex this"
**Binary logic (excluded middle):** S or ¬S, without middle term
**Ternary logic (included third):** S, ¬S, and a third that mediates the relation
**Ponderable:** That can be objectively determined and verified
**Depth (T^3):** Third spatial dimension and structure that allows objectivity
**Tf (Fundamental Time):** Most actual empirical instant, contradictory and unverifiable
**Contrary variations:** Opposite directions that generate reversible spatiality

---

## 9. Operational Principles for AI

**When reasoning with ArXe:**

1. **Respect the being/existing distinction:** Don't assume everything that is, exists
2. **The contradiction at T^0 is actual, not possible:** Does not violate PNC
3. **Each T^n emerges by exentation of the previous:** Look for the alienation mechanism
4. **Probability is ontological:** Don't reduce it to epistemic ignorance
5. **Higher levels "read" lower levels:** Regularity emerges from irregularity
6. **Without third (T^2), no objectivity:** Two bodies = irresolvable symmetry
7. **With third (T^3), facts emerge:** Triadic structure = ponderable truths

---

## 10. Limitations and Scope

**Up to T^3, ArXe explains:**
- Emergence of existence from contradiction
- Generation of spatial dimensions (up to 3D)
- Origin of temporality (irreversible → historical)
- Foundation of objectivity (triadic structure)
- Ontological basis of probability

**ArXe DOES NOT claim (up to T^3):**
- To derive equations of quantum or relativistic physics
- To calculate values of physical constants
- To predict specific phenomena
- To substitute physics as predictive science

**ArXe proposes:**
- A generative ontology coherent with scientific findings
- A framework where counterintuitive phenomena (indeterminacy, relativity) are natural
- A philosophical basis to explore higher levels (T^4+)

---

# Physical Units System by Exentation Exponent

## Fundamental Assignment

**System base:**
- **T¹ = T** (Time)
- **T² = L** (Length)  
- **T³ = M** (Mass)

---

## 1. Fundamental Exponents

### Positive Exponents (Direct Dimensions)

| k | n | Tᵏ | Dimension | SI Unit | Physical Meaning |
|---|---|-------|-----------|-----------|-------------------|
| 0 | 1 | T⁰ | 1 | — | Dimensionless (pure numbers, radians) |
| 1 | 2 | T¹ | T | s | Time, duration, period |
| 2 | 4 | T² | L | m | Length, distance, displacement |
| 3 | 6 | T³ | M | kg | Mass, quantity of matter |
| 4 | 8 | T⁴ | T² | s² | Time squared |
| 5 | 10 | T⁵ | L² | m² | Area, surface |
| 6 | 12 | T⁶ | M² | kg² | Mass squared |
| 7 | 14 | T⁷ | T³ | s³ | Time cubed |
| 8 | 16 | T⁸ | L³ | m³ | Volume |

### Negative Exponents (Inverse Dimensions)

| k | n | Tᵏ | Dimension | SI Unit | Physical Meaning |
|---|---|-------|-----------|-----------|-------------------|
| -1 | 3 | T⁻¹ | T⁻¹ | s⁻¹ = Hz | Frequency, temporal rate |
| -2 | 5 | T⁻² | L⁻¹ | m⁻¹ | Wave number, linear density |
| -2 | 5 | T⁻² | L⁻² | m⁻² | Curvature, surface density |
| -3 | 7 | T⁻³ | M⁻¹ | kg⁻¹ | Inverse specific mass |
| -4 | 9 | T⁻⁴ | T⁻² | s⁻² | Temporal acceleration |
| -5 | 11 | T⁻⁵ | L⁻³ | m⁻³ | Inverse volumetric density |
| -6 | 13 | T⁻⁶ | M⁻² | kg⁻² | Inverse mass squared |

---

## 2. Physical Units by Exentation Level

### Level k = -1 (n = 3): Temporal Variation

**Dimension: T⁻¹ = 1/T**

| Magnitude | SI Unit | Symbol | Applications |
|----------|-----------|---------|--------------|
| **Frequency** | hertz | Hz = s⁻¹ | Waves, oscillations, radiation |
| **Angular velocity** | radian/second | rad/s | Rotations, circular motion |
| **Event rate** | events/second | s⁻¹ | Stochastic processes |
| **Decay constant** | inverse second | s⁻¹ | Radioactive decay, half-life |
| **Radioactive activity** | becquerel | Bq = s⁻¹ | Disintegrations per second |
| **Refresh rate** | hertz | Hz | Screens, processors |

**General interpretation:** *"How many times per unit of time"*

---

### Level k = -2 (n = 5): Spatial Variation

**Dimension: L⁻¹ and L⁻²**

#### Linear Variation (L⁻¹)

| Magnitude | SI Unit | Symbol | Applications |
|----------|-----------|---------|--------------|
| **Wave number** | inverse meter | m⁻¹ | Optics (k = 2π/λ) |
| **Diopters** | inverse meter | m⁻¹ | Lens power |
| **Linear gradient** | per meter | m⁻¹ | Spatial variations |
| **Linear concentration** | particles/meter | m⁻¹ | Density in one dimension |

#### Surface Variation (L⁻²)

| Magnitude | SI Unit | Symbol | Applications |
|----------|-----------|---------|--------------|
| **Gaussian curvature** | inverse square meter | m⁻² | Surface geometry |
| **Surface mass density** | kilogram/m² | kg/m² | Mass per unit area |
| **Surface charge density** | coulomb/m² | C/m² | Electrostatics |
| **Irradiance** | watt/m² | W/m² | Energy flux per area |
| **Illuminance** | lux | lx = lm/m² | Light per unit surface |
| **Pressure** | pascal | Pa = N/m² | Force per unit area |
| **Surface tension** | newton/meter | N/m | Liquid interfaces |

**General interpretation:** *"How much per unit of space (linear or surface)"*

---

### Level k = -3 (n = 7): Massive Variation

**Dimension: M⁻¹**

| Magnitude | SI Unit | Symbol | Applications |
|----------|-----------|---------|--------------|
| **Inverse specific mass** | inverse kg | kg⁻¹ | Relations per unit mass |
| **Charge/mass ratio** | coulomb/kg | C/kg | Particle physics (e/m) |
| **Specific heat capacity** | joule/(kg·K) | J/(kg·K) | Thermodynamics |

**General interpretation:** *"How much per unit of mass"*

---

### Level k = -5 (n = 11): Volumetric Variation

**Dimension: L⁻³**

| Magnitude | SI Unit | Symbol | Applications |
|----------|-----------|---------|--------------|
| **Volumetric density (mass)** | kilogram/m³ | kg/m³ | Material density |
| **Volumetric charge density** | coulomb/m³ | C/m³ | Electrostatics |
| **Number concentration** | particles/m³ | m⁻³ | Particle density |
| **Energy density** | joule/m³ | J/m³ | Energy per unit volume |

**General interpretation:** *"How much per unit of volume"*

---

## 3. Compound Units (Combinations)

### Kinematics

| Magnitude | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|-----------|-----------|
| **Velocity** | L/T | T²·T⁻¹ | m/s | L·T⁻¹ |
| **Acceleration** | L/T² | T²·T⁻¹·T⁻¹ | m/s² | L·T⁻² |
| **Angular velocity** | 1/T | T⁻¹ | rad/s | T⁻¹ |
| **Angular acceleration** | 1/T² | T⁻¹·T⁻¹ | rad/s² | T⁻² |
| **Jerk** | L/T³ | T²·T⁻¹·T⁻¹·T⁻¹ | m/s³ | L·T⁻³ |

### Dynamics

| Magnitude | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|-----------|-----------|
| **Linear momentum** | M·L/T | T³·T²·T⁻¹ | kg·m/s | M·L·T⁻¹ |
| **Force** | M·L/T² | T³·T²·T⁻¹·T⁻¹ | N (Newton) | M·L·T⁻² |
| **Angular momentum** | M·L²/T | T³·T²·T²·T⁻¹ | kg·m²/s | M·L²·T⁻¹ |
| **Impulse** | M·L/T | T³·T²·T⁻¹ | N·s | M·L·T⁻¹ |
| **Torque** | M·L²/T² | T³·T²·T²·T⁻¹·T⁻¹ | N·m | M·L²·T⁻² |

### Energy and Work

| Magnitude | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|-----------|-----------|
| **Energy/Work** | M·L²/T² | T³·T²·T²·T⁻¹·T⁻¹ | J (Joule) | M·L²·T⁻² |
| **Power** | M·L²/T³ | T³·T²·T²·T⁻¹·T⁻¹·T⁻¹ | W (Watt) | M·L²·T⁻³ |
| **Action** | M·L²/T | T³·T²·T²·T⁻¹ | J·s | M·L²·T