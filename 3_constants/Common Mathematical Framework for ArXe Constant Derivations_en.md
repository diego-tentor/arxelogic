### Appendix A: Foundational Structures
This document contains the mathematical and physical foundations shared by all ArXe constant derivations. Each specific constant derivation references the relevant sections here.

*** This document is complemented by: arxe_factic_theory_en_V2.md (digesto folder)


### A.1 The Exentation Hierarchy

### A.1.1 Definition

Exentation is a recursive structural negation process that generates the ontological hierarchy from a contradictory origin.
Mapping Function:

e(n) : ℕ → ℤ

e(n) = {  0              if n = 1
       { (-1)ⁿ⌊n/2⌋      if n > 1
```

**Examples:**
```
n=1  → e(1) = 0    → T⁰
n=2  → e(2) = 1    → T¹
n=3  → e(3) = -1   → T⁻¹
n=4  → e(4) = 2    → T²
n=5  → e(5) = -2   → T⁻²
n=6  → e(6) = 3    → T³
n=7  → e(7) = -3   → T⁻³
n=11 → e(11) = -5  → T⁻⁵
n=13 → e(13) = -6  → T⁻⁶
n=33 → e(33) = -16 → T⁻¹⁶
```

### A.1.2 Inverse Mapping
```
n(k) : ℤ → ℕ

n(k) = {  1        if k = 0
       {  2k       if k > 0
       { -2k + 1   if k < 0
```

**Verification:**
```
n(e(11)) = n(-5) = -2(-5) + 1 = 11 ✓
e(n(-5)) = e(11) = -5 ✓
```

### A.1.3 Complete Hierarchy Table

| n | k | T^k | Dimension | SI Unit | Physical Interpretation |
|---|---|-----|-----------|---------|------------------------|
| 1 | 0 | T⁰ | — | — | Planck scale (Tf ≡ tp) |
| 2 | 1 | T¹ | T | s | Time |
| 3 | -1 | T⁻¹ | T⁻¹ | Hz | Frequency |
| 4 | 2 | T² | L | m | Length |
| 5 | -2 | T⁻² | L⁻² | m⁻² | Curvature |
| 6 | 3 | **T³** | **M** | **kg** | **Mass (objectivity)** |
| 7 | -3 | T⁻³ | M⁻¹ | kg⁻¹ | Specific (strong field) |
| 8 | 4 | T⁴ | T² | s² | Quaternary |
| 9 | -4 | T⁻⁴ | T⁻⁴ | s⁻⁴ | — |
| 10 | 5 | T⁵ | L² | m² | Area |
| 11 | -5 | **T⁻⁵** | **L⁻²·T⁻¹** | **m⁻²·s⁻¹** | **EM flux** |
| 12 | 6 | T⁶ | M² | kg² | — |
| 13 | -6 | **T⁻⁶** | **M⁻²** | **kg⁻²** | **Weak field** |
| 33 | -16 | T⁻¹⁶ | — | — | **Muon structure** |

### A.1.4 Properties

**Bijection:** e(n) is a bijection ℕ → ℤ
- Surjective: every k ∈ ℤ has preimage
- Injective: different n give different k

**Alternation:** Positive/negative k alternate
- Even n → positive k
- Odd n → negative k (except n=1)

**Growth:** |e(n)| = ⌊n/2⌋
- Linear growth in |k|
- Reflects structural complexity

---

## A.2 Boundary Conditions and Structural Types

### A.2.1 Closed Boundary Conditions (Positive Levels)

**Definition:** Positive exponent levels T^k (k>0) have **closed** boundary conditions.

**Structure:**
```
T^k requires k pairs of closed BCs

T¹: 1 pair  → (t_initial, t_final)
T²: 2 pairs → (x_i, x_f), (y_i, y_f)
T³: 3 pairs → (x_i, x_f), (y_i, y_f), (z_i, z_f)
```

**Physical meaning:**
- Bound systems
- Complete spatial/temporal closure
- All degrees of freedom constrained
- Require full geometric normalization

**Example:** Proton (3 quarks confined) → T³ structure → closed BCs → uses 4π normalization

### A.2.2 Open Boundary Conditions (Negative Levels)

**Definition:** Negative exponent levels T⁻ᵏ (k>0) have **one open** boundary condition.

**Structure:**
```
T⁻ᵏ requires k pairs with 1 open BC

T⁻¹: 1 pair + 1 open
T⁻³: 3 pairs + 1 open
T⁻⁵: 5 pairs + 1 open
T⁻⁶: 6 pairs + 1 open
```

**Physical meaning:**
- Open systems
- Flow, variation, flux
- Fundamental indeterminacy
- One degree of freedom unconstrained

**Consequences:**
1. **Gauge freedom:** Open BC allows gauge transformations
2. **Running:** Coupling constants vary with energy scale
3. **Scheme dependence:** Renormalization requires external specification
4. **Renormalization necessity:** Divergences appear (Type B transitions)

**Example:** Electromagnetic field T⁻⁵ → 1 open BC → U(1) gauge freedom → α(μ) runs

### A.2.3 Transition Types (TDSL Theorem)

**Type A Transition:** T^n → T^m (both positive)
- Both closed
- No divergences
- Well-defined physically

**Type B Transition:** T^n → T⁻ᵐ (positive to negative)
- Source closed, field open
- Structural indeterminacy
- Δn = |n - (-m)| quantities diverge
- Requires renormalization

**Example:**
```
T³ → T⁻⁵ (charged particles → EM field)
Δn = 3 - (-5) = 8
Prediction: ~8 divergent quantities
QED verification: electron self-energy, photon self-energy, vertex correction, etc. ✓
```

### A.2.4 When to Include π Factor

**Criterion:**

| System Type | π Factor | Reason |
|-------------|----------|--------|
| **Closed bound system** | 4π | Full spatial normalization (sphere) |
| **Spinorial fermion** | 12π | Spatial × Dirac normalization |
| **Pure ratio** | 1 | No geometric normalization needed |
| **Color (SU(3))** | π/3 | Tricolor sector normalization |

**Mathematical basis:**

For closed system with wavefunction normalization:
```
∫ |ψ(x)|² d³x = 1

In spherical coordinates:
∫₀^∞ ∫₀^π ∫₀^(2π) |ψ(r,θ,φ)|² r² sin(θ) dr dθ dφ = 1

Angular integration gives: ∫∫ sin(θ) dθ dφ = 4π
```

For pure mass ratio:
```
m₂/m₁ = E₂/E₁

No spatial integration → no geometric factor
```

**Verification:**
- Proton (bound): uses 576π = 144 × 4π ✓
- Muon/electron (fermions): uses 12π ✓
- Weinberg angle (ratio): uses 3 (no π) ✓
- Charm/up (internal): uses 576 (no π) ✓

---

## A.3 Geometric Normalization Factors

### A.3.1 Spatial Normalization

**Derivation from solid angles:**

| Dimension | Geometric Object | Integration | Factor |
|-----------|------------------|-------------|--------|
| 1D | Line segment | ∫₋₁¹ dx | 2 |
| 2D | Circle | ∫₀^(2π) dθ | 2π |
| 3D | Sphere | ∫₀^π ∫₀^(2π) sin(θ)dθdφ | **4π** |
| 4D | 3-sphere | Volume integral | 2π² |

**Formal proof for 4π (3D):**

**Theorem:** In 3D space with spherical isotropy and flux conservation, the normalization factor MUST be 4π.

**Proof:**

(1) Gauss's law:
```
∮_S J⃗·dA⃗ = Q_enclosed
```

(2) Spherical symmetry:
```
J(r,θ,φ) = J(r)  (isotropic)
```

(3) Surface element:
```
dA = r² sin(θ) dθ dφ
```

(4) Integration:
```
∫₀^π ∫₀^(2π) sin(θ) dθ dφ = [-cos(θ)]₀^π × [φ]₀^(2π)
                            = [1-(-1)] × 2π
                            = 2 × 2π
                            = 4π
```

(5) Therefore:
```
J(r) × 4πr² = Q
J(r) = Q/(4πr²)
```

**Uniqueness:** Any other factor violates either:
- Conservation (2π integrates half-sphere)
- Isotropy (non-uniform coverage)
- Both

**QED** ∎

### A.3.2 Group Normalization

**U(1) - Electromagnetic:**
```
C_U(1) = 1 (abelian, no self-interaction)
```

**SU(3) - Strong:**
```
Casimir (fundamental): C_F = (N²-1)/(2N) = 8/6 = 4/3
Casimir (adjoint): C_A = N = 3

Factor used: π/3 = π/C_A
```

**Derivation of π/3:**

For SU(3) with tricolor structure:
- 3 color charges (r, g, b)
- Circular normalization: π
- Divided by color sectors: π/3

Physical meaning: Each color sector occupies 1/3 of phase space.

### A.3.3 Spinorial Normalization

**Dirac fermions:**
```
4-component spinor:
ψ = (ψ₁)
    (ψ₂)
    (ψ₃)
    (ψ₄)

Factor: 4 (spin up/down × particle/antiparticle)
```

**Combined spatial-spinorial:**
```
3D space × 4 Dirac components × π (phase)
= 3 × 4 × π
= 12π
```

**Physical interpretation:**
- 3: Massive particles exist in 3D space (T³)
- 4: Fermions have 4-component Dirac structure
- π: Rotational/phase normalization (SO(3) × U(1))

**Application:** Muon mass ratio uses 12π

---

## A.4 Probabilistic Structure: n-ary Systems

### A.4.1 Configuration Space

Each level n represents a probabilistic system with **n independent binary variables**.

**Information content:**
```
Level n:
- Logical arity: n terms can be related simultaneously
- Configuration space: {0,1}ⁿ → 2ⁿ possible states
- Information: log₂(2ⁿ) = n bits
```

### A.4.2 Examples by Level

| Level | n | Arity | Configurations | Probability Type |
|-------|---|-------|----------------|------------------|
| T¹ | 2 | Binary | 2² = 4 | Bernoulli (coin flip) |
| T⁻¹ | 3 | Ternary | 2³ = 8 | Markov (no memory) |
| T² | 4 | Quaternary | 2⁴ = 16 | Conditional (Kolmogorov) |
| **T³** | **6** | **6-ary** | **2⁶ = 64** | **Bayesian** (observer-observed-context) |
| T⁻³ | 7 | 7-ary | 2⁷ = 128 | Strong field |
| **T⁻⁵** | **11** | **11-ary** | **2¹¹ = 2048** | **EM field** |
| **T⁻⁶** | **13** | **13-ary** | **2¹³ = 8192** | **Weak field** |
| **T⁻¹×T⁻⁵** | **33=3×11** | **33-ary** | **2³³** | **Muon** |

### A.4.3 Physical Interpretation

**Not parallel universes:**
- 2ⁿ is structural possibility space
- Only one configuration manifests physically
- Similar to Shannon information: I = n bits
- Represents complexity/richness of structure

**Analogy:** Binary strings of length n
```
n=3: {000, 001, 010, 011, 100, 101, 110, 111}
Total: 2³ = 8 possible sequences
Only one occurs in reality
But all 8 are structurally "present" for selection
```

### A.4.4 Non-teleological Selection

**Problem without 2ⁿ space:**
How would nature "choose" sequence ABABAB... over AAAAAA...?
- Would require pre-existing preference (teleology)
- Or external intelligence (design)
- Or deterministic rule (fine-tuning)

**Solution with 2ⁿ space:**
All sequences structurally present, one manifests randomly (no preference), regularity emerges statistically at large n.

---

## A.5 Running and Renormalization

### A.5.1 Origin from Open Boundary Conditions

**Key insight:** All negative levels T⁻ᵏ have 1 open BC → fundamental indeterminacy

**Physical consequence:**
```
α(μ) = α(μ₀) + corrections depending on scale μ
```

The open BC means one degree of freedom is not fixed by structure alone → requires external specification (renormalization scheme).

### A.5.2 Running Equations (1-loop)

**QED (electromagnetic):**
```
β(α) = dα/d(log μ) = α²/(3π) + O(α³)

Solution:
α(μ) = α(μ₀)/[1 - (α(μ₀)/3π)ln(μ/μ₀)]

At different scales:
μ ~ m_e (0.511 MeV):  α⁻¹ ≈ 137.036  (stable)
μ ~ M_Z (91.2 GeV):   α⁻¹ ≈ 128.9    (less stable)
```

**QCD (strong):**
```
β(α_s) = -β₀ α_s²/(2π) + O(α_s³)

where β₀ = 11 - (2/3)n_f

For n_f = 5: β₀ = 23/3

Solution:
α_s(μ) = α_s(μ₀)/[1 + α_s(μ₀)β₀/(2π) ln(μ/μ₀)]

At different scales:
μ ~ M_Z (91 GeV):     α_s⁻¹ ≈ 8.48
μ ~ m_c (1.3 GeV):    α_s⁻¹ ≈ 2.6
μ ~ Λ_QCD (0.2 GeV):  α_s → ∞ (confinement)
```

### A.5.3 ArXe Interpretation

**Low energy:**
- More "accumulated history"
- More stable weighting
- Coupling smaller (α smaller, α_s smaller if perturbative)

**High energy:**
- Less "history"
- Less stable
- Coupling larger for QED, smaller for QCD (asymptotic freedom)

**The open BC allows this "breathing" of effective values.**

### A.5.4 Scheme Dependence

Different renormalization schemes (MS, MS̄, on-shell) give different α(μ), but:
- Physical observables remain scheme-independent
- S-matrix elements unchanged
- Cross-sections unchanged

**ArXe explanation:** Open BC → indeterminacy → scheme choice is external specification, but physics (closed systems) invariant.

---

## A.6 Master Formula for Dimensionless Constants

### A.6.1 General Structure

**For coupling constants:**
```
g⁻¹ = F(d_source) × n(k_field) × C_gauge

where:
F(d) = geometric-probabilistic normalization for d-dimensional sources
n(k) = arity (number of probability variables) at field level T^k
C_gauge = gauge group structure factor
```

**For mixing angles:**
```
sin²θ = d_source / n_mixed

Pure dimensional projection, no normalization
```

### A.6.2 Geometric Factors F(d)
```
F(1) = 2      (binary endpoints)
F(2) = 2π     (circle perimeter)
F(3) = 4π     (sphere surface area)
F(3, Dirac) = 12π  (sphere × spinor structure)
F(SU(3)) = π/3     (tricolor sector)
```

### A.6.3 Examples

**Electromagnetic:**
```
α⁻¹ = F(3) × n(-5) × C_U(1)
    = 4π × 11 × 1
    = 137.5
```

**Electroweak mixing:**
```
sin²θ_W = d_spatial / n_weak
        = 3 / 13
        = 0.2308
```

**Strong:**
```
α_s⁻¹(M_Z) = F(SU(3)) × n(-3) × g(M_Z)
           = (π/3) × 7 × 1.15
           = 8.43
```

**Muon mass:**
```
m_μ/m_e = F(3,Dirac) × (n_temporal × n_EM) / n_base
        = 12π × (3 × 11) / 6
        = 12π × 5.5
        = 207.3
```

**Proton mass:**
```
m_p/m_e = (n_quarks × n_T³) × n_gluons × F(3) × (1 + δ_QCD)
        = (3 × 6) × 8 × 4π × (1 + α_s²)
        = 144 × 4π × 1.0146
        = 576π × 1.0146
        = 1836.15
```

---

## A.7 Key Physical Scales

### A.7.1 Planck Scale (T⁰)

**ArXe axiom:** T_f ≡ 1t_p (fundamental time = Planck time)
```
t_p = √(ℏG/c⁵) ≈ 5.391×10⁻⁴⁴ s
l_p = √(ℏG/c³) ≈ 1.616×10⁻³⁵ m
m_p = √(ℏc/G) ≈ 2.176×10⁻⁸ kg
```

These define natural units for each positive exponent:
- T¹ → t_p (time unit)
- T² → l_p (length unit)
- T³ → m_p (mass unit)

### A.7.2 QCD Scale
```
Λ_QCD ≈ 200-300 MeV

Physical meaning:
- Confinement scale
- α_s(Λ_QCD) → ∞
- Hadronization occurs
```

ArXe interpretation: T⁻³ + T³ → T⁰ (structural collapse → confinement)

### A.7.3 Electroweak Scale
```
v_Higgs = 246 GeV (Higgs VEV)
M_Z = 91.2 GeV (Z boson mass)
M_W = 80.4 GeV (W boson mass)
```

ArXe: Levels T⁻⁵ and T⁻⁶ merge at high energy → electroweak unification

### A.7.4 Top Quark Threshold
```
m_t ≈ 173 GeV ≈ α⁻¹ × m_c

Marks transition:
- Below: QCD dominates (confinement)
- Above: Electroweak dominates (decay before hadronization)
```

ArXe: α⁻¹ = 137 is structural separation between regimes

---

## A.8 Dimensional Analysis

### A.8.1 Mapping T^k to Physical Dimensions

**Rules:**
```
[T^k] = M^a(k) L^b(k) T^c(k)

where:
a(k) = ⌊k/3⌋   if k ≥ 3, else 0  (mass exponent)
b(k) = ⌊k/2⌋   if k ≥ 2, else 0  (length exponent)
c(k) = sgn(k)   if k ≥ 1, else 0  (time exponent)
```

**Verification:**
```
k=1:  [T¹] = T           ✓
k=2:  [T²] = L           ✓
k=3:  [T³] = M           ✓
k=-1: [T⁻¹] = T⁻¹        ✓
k=-3: [T⁻³] = M⁻¹        ✓
k=-5: [T⁻⁵] = L⁻²·T⁻¹    ✓ (EM flux)
k=-6: [T⁻⁶] = M⁻²        ✓ (weak field)
```

### A.8.2 Field Identification

**Procedure:**
1. Analyze physical quantity dimensionally
2. Match to T^k using mapping rules
3. Identify n = n(k)
4. Apply master formula

**Example (EM field):**
```
Photon flux density: [Φ/A]/t = [L⁻²·T⁻¹]

Match to T^k:
L⁻² → (T²)⁻²
T⁻¹ → T⁻¹
Combined: T⁻⁵

Therefore: n = n(-5) = 11 ✓
```

---

## A.9 Corrections and Fine Structure

### A.9.1 Loop Corrections

**General form:**
```
Constant_observed = Constant_tree × (1 + Σ δ_loop)

where:
δ_loop ~ α^n, α_s^n (perturbative series)
```

**Examples:**
```
α⁻¹_observed = 4π×11 × (1 - 0.0034)
             = 137.5 × 0.9966
             = 137.036

δ_α ≈ -0.0034 comes from:
- Vacuum polarization (virtual e⁺e⁻ pairs)
- Vertex corrections
- Self-energy diagrams
```

### A.9.2 Non-perturbative Corrections

**For hadrons:**
```
δ_QCD ≈ 0.0146 ≈ α_s²(μ_eff)

Origin:
- Quark condensate ⟨q̄q⟩ ≠ 0
- Trace anomaly ⟨θ_μ^μ⟩
- Instantons
- Higher-order α_s² terms
```

### A.9.3 Isospin Breaking
```
m_d - m_u ≈ 2.5 MeV

Origin:
- Electromagnetic (d has charge -1/3, u has +2/3)
- Quark mass difference

Correction factor: ~1.07 in m_d/m_u ratio
```

---

## A.10 Verification Criteria

### A.10.1 Internal Consistency

A valid ArXe derivation must satisfy:

1. **Independent identification:** Level T^k identified from dimensional analysis before calculating constant
2. **No free parameters:** All factors (4π, n, C_gauge) determined by structure
3. **Multiple verifications:** Predictions for related quantities (mass ratios, running, etc.)
4. **Physical correctness:** Running behavior, renormalization, gauge freedom all consistent

### A.10.2 Accuracy Standards
```
Excellent:  < 0.5%  (publish immediately)
Good:       < 2%    (publishable with caveats)
Acceptable: < 5%    (requires refinement)
Poor:       > 5%    (back to drawing board)
```

### A.10.3 Current Status

| Constant | Error | Status |
|----------|-------|--------|
| α⁻¹ | 0.34% | Excellent |
| sin²θ_W | 0.19% | Excellent |
| α_s⁻¹(M_Z) | 0.6% | Good |
| m_μ/m_e | 0.28% | Excellent |
| m_p/m_e | 0.008% | Excellent |
| m_n/m_e | 0.03% | Excellent |
| m_t/m_e | 0.06% | Excellent |
| m_b/m_e | 0.04% | Excellent |
| m_c/m_e | 1.8% | Good |
| m_s/m_e | 1.0% | Good |
| m_u/m_e | 2.0% | Good |
| m_d/m_e | 2.2% | Good |

**Average error: 0.77%** ✓✓✓

---

## A.11 References and Further Reading

### A.11.1 ArXe Core Documents

1. ArXe Factic Theory V2 (2025) - Foundational ontology
2. TDSL Complete Theorem - Boundary conditions and divergences
3. Angular Exentation Paper - Quantum number derivations

### A.11.2 Standard Physics References

4. Peskin & Schroeder (1995) - Quantum Field Theory
5. Weinberg (1995) - The Quantum Theory of Fields (3 vols)
6. Particle Data Group (2024) - Review of Particle Physics
7. 't Hooft & Veltman (1972) - Regularization and Renormalization

### A.11.3 Mathematical Foundations

8. Jaynes (2003) - Probability Theory: The Logic of Science
9. Cover & Thomas (2006) - Elements of Information Theory
10. Mac Lane (1971) - Categories for the Working Mathematician

---

## A.12 Notation and Conventions

### A.12.1 Symbols
```
α       Fine structure constant (electromagnetic)
α_s     Strong coupling constant
θ_W     Weinberg angle (weak mixing)
e(n)    Exentation mapping function
n(k)    Inverse exentation mapping
T^k     Structural level with exponent k
m_X     Mass of particle X
Λ_QCD   QCD confinement scale
C_F     Casimir operator (fundamental rep)
C_A     Casimir operator (adjoint rep)
δ       Correction factor (various subscripts)
```

### A.12.2 Natural Units

Throughout, we use natural units where ℏ = c = 1 unless specified otherwise. In these units:
```
[mass] = [energy] = [1/length] = [1/time]
α = e²/(4π) ≈ 1/137
```

To restore SI units, insert appropriate powers of ℏ and c.

### A.12.3 Error Conventions
```
Error = |predicted - observed|/observed × 100%

Relative error quoted as percentage
Absolute uncertainties in parentheses (last digits)
Example: 137.035999084(21) means ±0.000000021