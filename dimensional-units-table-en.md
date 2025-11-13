# Physical Units System by Exentation Exponent

## Fundamental Assignment

**System basis:**
- **T¹ = T** (Time)
- **T² = L** (Length)  
- **T³ = M** (Mass)

---

## 1. Fundamental Exponents

### Positive Exponents (Direct Dimensions)

| k | n | Tᵏ | Dimension | SI Unit | Physical Meaning |
|---|---|-------|-----------|---------|------------------|
| 0 | 1 | T⁰ | 1 | — | Dimensionless (pure numbers, radians) |
| 1 | 2 | T¹ | T | s | Time, duration, period |
| 2 | 4 | T² | L | m | Length, distance, displacement |
| 3 | 6 | T³ | M | kg | Mass, amount of matter |
| 4 | 8 | T⁴ | T² | s² | Time squared |
| 5 | 10 | T⁵ | L² | m² | Area, surface |
| 6 | 12 | T⁶ | M² | kg² | Mass squared |
| 7 | 14 | T⁷ | T³ | s³ | Time cubed |
| 8 | 16 | T⁸ | L³ | m³ | Volume |

### Negative Exponents (Inverse Dimensions)

| k | n | Tᵏ | Dimension | SI Unit | Physical Meaning |
|---|---|-------|-----------|---------|------------------|
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

| Quantity | SI Unit | Symbol | Applications |
|----------|---------|--------|--------------|
| **Frequency** | hertz | Hz = s⁻¹ | Waves, oscillations, radiation |
| **Angular velocity** | radian/second | rad/s | Rotations, circular motion |
| **Event rate** | events/second | s⁻¹ | Stochastic processes |
| **Decay constant** | inverse second | s⁻¹ | Radioactive decay, half-life |
| **Radioactive activity** | becquerel | Bq = s⁻¹ | Disintegrations per second |
| **Refresh rate** | hertz | Hz | Displays, processors |

**General interpretation:** *"How many times per unit of time"*

---

### Level k = -2 (n = 5): Spatial Variation

**Dimension: L⁻¹ and L⁻²**

#### Linear Variation (L⁻¹)

| Quantity | SI Unit | Symbol | Applications |
|----------|---------|--------|--------------|
| **Wave number** | inverse meter | m⁻¹ | Optics (k = 2π/λ) |
| **Diopters** | inverse meter | m⁻¹ | Lens power |
| **Linear gradient** | per meter | m⁻¹ | Spatial variations |
| **Linear concentration** | particles/meter | m⁻¹ | One-dimensional density |

#### Surface Variation (L⁻²)

| Quantity | SI Unit | Symbol | Applications |
|----------|---------|--------|--------------|
| **Gaussian curvature** | inverse square meter | m⁻² | Surface geometry |
| **Surface mass density** | kilogram/m² | kg/m² | Mass per unit area |
| **Surface charge density** | coulomb/m² | C/m² | Electrostatics |
| **Irradiance** | watt/m² | W/m² | Energy flux per area |
| **Illuminance** | lux | lx = lm/m² | Light per unit surface |
| **Pressure** | pascal | Pa = N/m² | Force per unit area |
| **Surface tension** | newton/meter | N/m | Liquid interfaces |

**General interpretation:** *"How much per unit of space (linear or surface)"*

---

### Level k = -3 (n = 7): Mass Variation

**Dimension: M⁻¹**

| Quantity | SI Unit | Symbol | Applications |
|----------|---------|--------|--------------|
| **Inverse specific mass** | inverse kg | kg⁻¹ | Relations per unit mass |
| **Charge-to-mass ratio** | coulomb/kg | C/kg | Particle physics (e/m) |
| **Specific heat capacity** | joule/(kg·K) | J/(kg·K) | Thermodynamics |

**General interpretation:** *"How much per unit of mass"*

---

### Level k = -5 (n = 11): Volumetric Variation

**Dimension: L⁻³**

| Quantity | SI Unit | Symbol | Applications |
|----------|---------|--------|--------------|
| **Volume mass density** | kilogram/m³ | kg/m³ | Material density |
| **Volume charge density** | coulomb/m³ | C/m³ | Electrostatics |
| **Number concentration** | particles/m³ | m⁻³ | Particle density |
| **Energy density** | joule/m³ | J/m³ | Energy per unit volume |

**General interpretation:** *"How much per unit of volume"*

---

## 3. Composite Units (Combinations)

### Kinematics

| Quantity | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|---------|------------|
| **Velocity** | L/T | T²·T⁻¹ | m/s | L·T⁻¹ |
| **Acceleration** | L/T² | T²·T⁻¹·T⁻¹ | m/s² | L·T⁻² |
| **Angular velocity** | 1/T | T⁻¹ | rad/s | T⁻¹ |
| **Angular acceleration** | 1/T² | T⁻¹·T⁻¹ | rad/s² | T⁻² |
| **Jerk** | L/T³ | T²·T⁻¹·T⁻¹·T⁻¹ | m/s³ | L·T⁻³ |

### Dynamics

| Quantity | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|---------|------------|
| **Linear momentum** | M·L/T | T³·T²·T⁻¹ | kg·m/s | M·L·T⁻¹ |
| **Force** | M·L/T² | T³·T²·T⁻¹·T⁻¹ | N (Newton) | M·L·T⁻² |
| **Angular momentum** | M·L²/T | T³·T²·T²·T⁻¹ | kg·m²/s | M·L²·T⁻¹ |
| **Impulse** | M·L/T | T³·T²·T⁻¹ | N·s | M·L·T⁻¹ |
| **Torque** | M·L²/T² | T³·T²·T²·T⁻¹·T⁻¹ | N·m | M·L²·T⁻² |

### Energy and Work

| Quantity | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|---------|------------|
| **Energy/Work** | M·L²/T² | T³·T²·T²·T⁻¹·T⁻¹ | J (Joule) | M·L²·T⁻² |
| **Power** | M·L²/T³ | T³·T²·T²·T⁻¹·T⁻¹·T⁻¹ | W (Watt) | M·L²·T⁻³ |
| **Action** | M·L²/T | T³·T²·T²·T⁻¹ | J·s | M·L²·T⁻¹ |
| **Energy density** | M/(L·T²) | T³·T⁻²·T⁻¹·T⁻¹ | J/m³ | M·L⁻¹·T⁻² |

### Fluid Mechanics and Thermodynamics

| Quantity | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|---------|------------|
| **Pressure** | M/(L·T²) | T³·T⁻²·T⁻¹·T⁻¹ | Pa (Pascal) | M·L⁻¹·T⁻² |
| **Density** | M/L³ | T³·T⁻²·T⁻²·T⁻² | kg/m³ | M·L⁻³ |
| **Dynamic viscosity** | M/(L·T) | T³·T⁻²·T⁻¹ | Pa·s | M·L⁻¹·T⁻¹ |
| **Kinematic viscosity** | L²/T | T²·T²·T⁻¹ | m²/s | L²·T⁻¹ |
| **Surface tension** | M/T² | T³·T⁻¹·T⁻¹ | N/m | M·T⁻² |
| **Volumetric flow rate** | L³/T | T²·T²·T²·T⁻¹ | m³/s | L³·T⁻¹ |
| **Mass flow rate** | M/T | T³·T⁻¹ | kg/s | M·T⁻¹ |

### Waves and Oscillations

| Quantity | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|---------|------------|
| **Frequency** | 1/T | T⁻¹ | Hz | T⁻¹ |
| **Wave number** | 1/L | T⁻² | m⁻¹ | L⁻¹ |
| **Wave velocity** | L/T | T²·T⁻¹ | m/s | L·T⁻¹ |
| **Acoustic impedance** | M/(L²·T) | T³·T⁻²·T⁻²·T⁻¹ | Pa·s/m | M·L⁻²·T⁻¹ |
| **Acoustic intensity** | M/T³ | T³·T⁻¹·T⁻¹·T⁻¹ | W/m² | M·T⁻³ |

### Gravitation

| Quantity | Dimension | Tᵏ Combination | SI Unit | Expression |
|----------|-----------|----------------|---------|------------|
| **Gravitational constant G** | L³/(M·T²) | T²·T²·T²·T⁻³·T⁻¹·T⁻¹ | m³/(kg·s²) | L³·M⁻¹·T⁻² |
| **Gravitational field** | L/T² | T²·T⁻¹·T⁻¹ | m/s² | L·T⁻² |
| **Gravitational potential** | L²/T² | T²·T²·T⁻¹·T⁻¹ | m²/s² | L²·T⁻² |

---

## 4. Summary by Variation Type

### Synthetic Table of Interpretations

| Exponent k | Level n | Dimension | Variation Type | Typical Quantities |
|------------|---------|-----------|----------------|-------------------|
| **0** | 1 | 1 | None | Dimensionless constants, angles |
| **1** | 2 | T | Direct temporal | Duration, period |
| **2** | 4 | L | Direct spatial | Distance, length |
| **3** | 6 | M | Direct mass | Mass, quantity |
| **-1** | 3 | T⁻¹ | **Inverse temporal** | Frequency, rate, rhythm |
| **-2** | 5 | L⁻¹, L⁻² | **Inverse spatial** | Curvature, surface density |
| **-3** | 7 | M⁻¹ | **Inverse mass** | Ratio per unit mass |
| **-4** | 9 | T⁻² | **Temporal acceleration** | Frequency change rate |
| **-5** | 11 | L⁻³ | **Volumetric** | Density, concentration |

---

## 5. Key Observations

### Coherence with MLT System

The system **T¹=T, T²=L, T³=M** exactly reproduces the **MLT system** (Mass-Length-Time) of classical dimensional analysis:

✅ All mechanical quantities are expressible  
✅ Negative exponents generate rates, densities and variations  
✅ The structure is consistent with standard dimensional physics  
✅ Combinations produce all derived SI units  

### Pattern of Negative Exponents

- **k = -1**: Temporal variation (how many times per second?)
- **k = -2**: Linear/surface spatial variation (how much per meter/meter²?)
- **k = -3**: Mass variation (how much per kilogram?)
- **k = -5**: Volumetric spatial variation (how much per meter³?)

### Fundamental Duality

Each positive exponent has its negative "dual":
- **T¹ (time) ↔ T⁻¹ (frequency)**
- **T² (length) ↔ T⁻² (curvature)**
- **T³ (mass) ↔ T⁻³ (per unit mass)**

---

## 6. Complete Physical Quantities by Category

### Classical Mechanics
- Position: L
- Velocity: L·T⁻¹
- Acceleration: L·T⁻²
- Force: M·L·T⁻²
- Energy: M·L²·T⁻²
- Power: M·L²·T⁻³
- Momentum: M·L·T⁻¹
- Pressure: M·L⁻¹·T⁻²

### Thermodynamics
- Temperature: (requires system extension)
- Entropy: M·L²·T⁻²·K⁻¹ (with temperature)
- Heat: M·L²·T⁻²
- Heat capacity: M·L²·T⁻²·K⁻¹

### Electromagnetism
(Would require adding electric charge dimension Q as T⁴ or equivalent)

### Optics and Waves
- Frequency: T⁻¹
- Wavelength: L
- Phase velocity: L·T⁻¹
- Wave number: L⁻¹
- Intensity: M·T⁻³

---

**ArXe System** — Recursive Exentational Architecture  
Complete dimensional mapping from fractal logical structure