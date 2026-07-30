# DDCF Content Specification

Status: approved implementation copy  
Language: English  
Last verified: 2026-07-30

This document resolves the content dependency for the DDCF interactive hub. It defines the copy for the central
project node and the four connected research nodes. The implementation should use this text as its content source
unless a later user-approved revision supersedes it.

## Editorial Rules

- Distinguish demonstrated results from research objectives.
- Describe recurrent neural-network and automatic-differentiation results as demonstrated work.
- Describe neural operators, GPU acceleration, and broader differentiable-physics applications as active research
  directions.
- Display CHF 830,128 as the approved public grant amount.
- Preserve the official project title and grant number exactly.

## Central Node

### Compact node

**Label:** SNSF Ambizione · Grant 216341  
**Title:** DDCF  
**Full title:** Data-Driven Computational Friction  
**Tagline:** From laboratory observations to predictive friction laws for multiscale simulation.

### Detail dialog

**Summary**

DDCF develops data-driven computational tools to replace empirical friction laws with models learned from physical
and experimental evidence. The project targets history-dependent friction across scales, from laboratory interfaces
and industrial contact to fault slip, while preserving the physical constraints required for reliable simulation.

**Project description**

Friction controls phenomena ranging from machinery durability to earthquake rupture, yet large-scale simulations
still rely heavily on heuristic constitutive laws and fitted internal variables. DDCF adapts data-driven computational
mechanics to friction: interface memory is learned from sliding histories, physical constraints are embedded in the
learning process, and the resulting models are designed for use inside larger numerical simulations.

The programme connects four complementary directions: data-driven constitutive modeling, neural operators for
discretization-independent learning and scale transfer, GPU acceleration for computationally intensive solvers, and
automatic differentiation for physics-constrained training and gradient-based optimization.

**Project facts**

- Funding scheme: SNSF Ambizione
- Grant number: 216341
- Grant amount: CHF 830,128
- Project period: 1 January 2024 – 31 December 2027
- Host institution: EPFL, Laboratory for Computational Solid Mechanics (LSMS)
- Disciplines: Mechanical Engineering and Civil Engineering
- Status: ongoing

**Primary call to action:** View the official SNSF project  
**Primary URL:** https://data.snf.ch/grants/grant/216341

## Peripheral Node 1 — Data-Driven Constitutive Modeling

### Compact node

**Label:** Interface Memory  
**Title:** Data-Driven Constitutive Modeling  
**Teaser:** Learn friction laws directly from sliding histories instead of prescribing empirical state evolution.

### Detail dialog

**Summary**

This research direction builds constitutive laws that infer the evolution of a frictional interface from sequences of
sliding velocity and friction response. Recurrent neural networks use their hidden state as a learned representation
of interface memory, replacing the single empirical state variable and evolution equation used in conventional
rate-and-state friction.

**Research scope**

The demonstrated proof of concept uses gated recurrent units trained on synthetic slide-hold-slide histories
generated from rate-and-state models with aging and slip evolution. The networks reproduce friction changes after
velocity jumps, including noisy cases, without receiving the conventional internal state variable during training.
The next stage introduces spring-block dynamics, stick-slip, healing, and laboratory observations so the learned law
can be embedded in larger-scale mechanical and geophysical simulations.

**Key concepts**

- History-dependent friction
- Rate-and-state friction
- Gated recurrent units and learned hidden states
- Slide-hold-slide protocols
- Spring-block dynamics and stick-slip
- Constitutive models for larger-scale simulation

## Peripheral Node 2 — Learning Neural Operators

### Compact node

**Label:** Scale Transfer  
**Title:** Learning Neural Operators  
**Teaser:** Learn mappings between complete loading histories and friction responses across discretizations and scales.

### Detail dialog

**Summary**

Neural operators extend the project from fixed-length sequence models toward models that learn relationships between
functions: an imposed velocity history and the resulting friction evolution. This formulation is intended to reduce
dependence on a particular time discretization or sampling frequency.

**Research scope**

The objective is to accept histories of different lengths and resolutions, improve consistency across experimental
protocols, and transfer knowledge between laboratory conditions and crustal-scale applications. Neural operators are
therefore the bridge from a successful recurrent-network proof of concept to reusable friction models that can work
across datasets, discretizations, and simulation scales.

**Key concepts**

- Operator learning
- Variable-length histories
- Discretization independence
- Multiple sampling frequencies
- Laboratory-to-crustal generalization
- Reusable multiscale friction models

## Peripheral Node 3 — GPU Acceleration

### Compact node

**Label:** High-Performance Computing  
**Title:** GPU Acceleration  
**Teaser:** Move learning, calibration, and friction-related solvers onto massively parallel hardware.

### Detail dialog

**Summary**

GPU acceleration provides the computational layer required to train data-driven friction models, evaluate many
loading histories, and deploy learned laws inside demanding simulations. The aim is to turn the project’s models from
research prototypes into scalable computational tools.

**Research scope**

This direction develops GPU-oriented workflows for high-throughput dataset generation, neural-model training,
sensitivity evaluation, and repeated constitutive updates. It also includes GPU solvers for friction-related
multiphysics problems such as elastohydrodynamic lubrication. The long-term objective is to make multiscale interface
simulations and optimization studies tractable at resolutions that are impractical with serial workflows.

**Key concepts**

- Parallel training and inference
- High-throughput virtual experiments
- Accelerated constitutive updates
- Elastohydrodynamic-lubrication solvers
- Large-scale interface simulation
- Hardware-aware scientific computing

## Peripheral Node 4 — Automatic Differentiation

### Compact node

**Label:** Differentiable Physics  
**Title:** Automatic Differentiation  
**Teaser:** Use exact computational derivatives to enforce friction physics and optimize interfaces.

### Detail dialog

**Summary**

Automatic differentiation supplies derivatives of model predictions with respect to loading variables and parameters.
DDCF uses these derivatives to encode physical knowledge directly in the learning objective rather than relying only
on agreement with training data.

**Research scope**

The demonstrated recurrent-network model uses automatic differentiation to enforce the direct effect: the
characteristic logarithmic dependence of friction on sliding velocity. This creates a physics-constrained loss term
that guides learning even when no additional target value is supplied. The broader direction extends differentiable
physics to model calibration, sensitivity analysis, inverse problems, and gradient-based optimization of
meta-interfaces.

**Key concepts**

- Physics-constrained loss functions
- Exact model sensitivities
- Friction direct effect
- Gradient-based calibration
- Inverse design
- Differentiable-physics optimization

## Shared Resources

1. **Official SNSF project**
   - https://data.snf.ch/grants/grant/216341
2. **Data-Driven Dynamic Friction Models based on Recurrent Neural Networks**
   - DOI: https://doi.org/10.1016/j.acags.2025.100249
   - Open manuscript: https://arxiv.org/abs/2402.14148
3. **Companion dataset**
   - https://zenodo.org/records/13341474

## Visual Asset Mapping

- Central node and project overview: `frontend/public/images/DDCF_collage.png`
- Constitutive modeling: `frontend/public/images/friction_scales.png` or
  `frontend/public/images/panel_DDCF_v2.png`
- Neural operators: `frontend/public/images/datasets.png`
- GPU acceleration: `frontend/public/images/FEM-DD.png`
- Automatic differentiation: `frontend/public/images/panel_DDCF.png`
- SNSF funding acknowledgement: official English colour logo for dark backgrounds,
  `frontend/public/images/SNF_logo_standard_web_color_neg_e.png`, downloaded from the SNSF logo page:
  https://www.snf.ch/en/d3iYI2UUG6uDFSaE/page/aboutus/contact/logo-snf

The final mapping must be confirmed visually during implementation; these assignments are implementation candidates,
not scientific captions.

## Source Provenance

- `context-in-text/goal.md`
- `context-in-text/DDCF_collage.md`
- `context-in-text/research_statement_4_Carlson.md`
- `context-in-text/CV_May_2026-1.md`
- SNSF Data Portal, grant 216341
- Cortes and Garcia-Suarez, “Data-Driven Dynamic Friction Models based on Recurrent Neural Networks”

## Resolved Content Decision

The May 2026 CV records the SNSF amount as CHF 830,128, while the current SNSF Data Portal records an approved amount
of CHF 842,376. On 30 July 2026, the user selected the lower value. The approved public amount for this website is
therefore CHF 830,128.
