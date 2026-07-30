# Research Statement

Joaquin Garcia-Suarez

## Vision
My group’s aim is to develop theoretical and computational tools that unlock results previously out of reach — like wear forecasting or precise location of acoustic bandgaps — in technological problems where solid and fluid mechanics interact with interfaces and across scales. The three themes that will define our research during the next five years are: (I) interface mechanics; (II) wave propagation in layered media; and (III) computational strategies to enable (I) and (II).

## Theme I — Solids and Fluids in Interface Mechanics Across Scales
Interfaces set durability, feel, and failure: microscale wear often dictates machinery lifetime; thin-film lubrication controls whether soft bodies make or avoid contact; frictional weakening governs rupture of geophysical and mechanical interfaces. Key variables (e.g., wear volume, contact area and frictional force) remain challenging to predict. After meaningful contributions, my group has a clear research program that could be funded by competitive government grants or via industry collaborations.

**Figure 1.** Across twelve orders of magnitude in length scales, we utilize molecular dynamics, roughness statistics, elastohydrodynamic lubrication theory, and data-driven friction models to predict wear [1], track surface evolution [2], control soft contact [3], and enable fault rupture simulations [4].

**Figure 2.** Scaling change in wear volume v. tangential work: plasticity yields to fracture [1].

At the nanoscale we have used molecular dynamics to resolve two-asperity junction failure [1, 5], then distilled the numerical results into two wear-work scaling laws relating the debris volume $V_d$ and the tangential work to slide $W_t$: $V_d \sim W_t$ in the small-asperity, plasticity-dominated regime and $V_d \sim W_t^{3/2}$ in the fracture-dominated regime [1], see fig. 2. These findings suggest that nanoscale debris creation can be more energetically favorable than previously assumed. While macroscale experiments often report an approximately linear relation [6], our next objective is to reconcile the apparent cross-scale mismatch by showing that this linearity arises not from a different failure mechanism but from the geometry and statistics of random rough surfaces [7]. At AnyU, this program would benefit greatly from interactions with (for reliability/lifetime [8]) and with members of the such as Profs. X and Y (to deepen the nanomechanical aspects) and Z (consider influence of oxidation).

For soft solids interacting with a surface through a thin fluid layer [9], I coupled lubrication theory to solid inertia and deformations to derive a governing dimensionless group $\phi$ – the ratio between the characteristic time of viscous pre-contact drainage and the time required for elastic waves to traverse the leading edge – that classifies the regimes of fluid-mediated normal impact of compliant solids (and of droplets) [3]: for $\phi \ll 1$ the response is quasi-static – inertia can be neglected, elasticity dominates – and only a small air bubble is entrapped; for $\phi \sim 1$ inertia and elasticity compete, producing delayed touchdown leading to maximum air entrainment; for $\phi \gg 1$ local deceleration – inertia – dominates, small bubbles form.

**Figure 3.** Fluid-mediated approach of soft solid (fingertip) to rigid surface ($r_{contact} > 0$) [3].

Experiments – supported by our numerical simulations – exhibit these three regimes, as shown in fig. 3: the framework explains the evolution of the bubble’s characteristic dimensions, both vertical ($H$) and radial ($L$), the latter corresponding directly to the experimentally measured contact radius $r_{contact}$. This scaling unifies a wide range of observations – across solid and droplet impact – and provides a predictive map for dynamic contact area optimization for soft solids. I am now examining how air entrainment can be suppressed by geometry and surface curvature [10], aiming for a broader framework of how fluid–structure interaction (FSI) governs contact formation. This mechanics also determines the haptic forces that develop during the pre-contact squeeze phase [11] and the porosity patterns observed in inkjet bioprinting [12]. I anticipate collaborations with Prof. I on the theoretical aspects, Prof. II on analysis of low-Re flows coupled to rough surfaces, Profs. III and IV on high-fidelity FSI simulations, as well as with Prof. IV on the theory of adhesion and contact experiments in soft materials.

In the context of dynamic rupture, my team is developing data-informed friction laws that are constrained by laboratory observations [4]. These models provide an alternative to the limited heuristic formulations currently used in large-scale simulations of fault slip. By blending machine learning (ML) with rate-and-state theory, we aim to capture the complexity of real frictional history dependence with velocity weakening and strengthening. The broader goal is to translate recent advances in machine learning into tools that serve the needs of geophysicists and mechanical engineers [13], where friction often limits predictive accuracy in simulations ranging from fault slip to thin-film molecular lubrication.

## Theme II — Wave Propagation in Heterogeneous Media: One Math, Many Physics

**Figure 4.** Current work (funded by SNSF Ambizione project) focused on developing data-driven, machine-learned friction models [4].

Layered media underpin photonic, phononic and acoustic devices; all require robust bandgap placement and broadband transmission or absorption; achieving this is traditionally left to brute-force evolutionary inverse design methods. Forward predictions are run using the transfer matrix method (TMM), a numerical black-box lacking both a bridge between wave physics and performance, and a tractable means of uncertainty quantification (UQ) beyond costly Monte Carlo. Since my PhD, I have been developing an alternative to TMM exploiting the group-theoretic structure of transfer matrices (see top panel of fig. 5): a physics-agnostic prediction framework that spans electrons, light, elastic and acoustic waves, based on a Lie-group approach to wave propagation in layered media that has already yielded a key result: the harmonic decomposition of transfer matrices [14]. The latter enables closed-form expressions, e.g., for the Bloch discriminant of band edges and slab’s transmission/reflection coefficients.

The same math – up to relabeling of the physical variables and parameters – models a variety of applications: broadband acoustic absorption in anechoic tiles, light wavelength selective transmission for color filters, and elastic bandgaps for vibration isolation [15], see fig. 5. In contrast with the current state-of-the-art [16], the decomposition’s structure opens the door to GPU-bound second-order optimization in all those areas. We are expanding the key result from 2x2 matrices to 4x4 to capture waves in composite Euler-Bernouilli beams [17] that can serve as waveguides. My team will focus next on including viscoelastic layers and inclined waves, and couple to surrounding fluids to design underwater/air absorbers with flat, wide transmission plateaus under mass and fabrication constraints.

## Theme III — Methods Development (supports I–II)

**Figure 5.** Group-theoretic physics-agnostic framework to design structures for acoustic, electromagnetic and elastic wave control [14].

We develop methods as needed to address specific problems [18, 19]. For instance, in FSI, I am developing compact, physics-based Python scripts (adapted from [20]) for elastohydrodynamic lubrication simulations of elastic solids [21]. The current model combines an axisymmetric Reynolds equation with a Green’s function–based elastic response in dimensionless form, which can easily handle different shapes, and upcoming work will extend it to include dissipative rebounds, viscoelasticity, and 2D roughness effects.

## References
[1] Garcia-Suarez, J., Brink, T., Molinari, J.-F. (2023) “Breakdown of Reye’s theory in nanoscale wear”. Journal of the Mechanics and Physics of Solids.
[2] Garcia-Suarez, J., Brink, T., Molinari, J.-F. (2024) “Roughness evolution induced by third-body wear”. Tribology Letters.
[3] Bilotto, J., Kolinski, J., Lecampion, B., Molinari, S., Subhash, G., Garcia-Suarez, J. (2024) “Fluid-mediated impact of soft solids”. Journal of Fluid Mechanics.
[4] Cortes, G., and Garcia-Suarez, J. (2025) “Data-driven dynamic friction models based on Recurrent Neural Networks”, Applied Computing and Geosciences.
[5] Wattel, S., Garcia-Suarez, J., Molinari, J.-F. (2022) “Understanding the mechanisms of adhesive wear for heterogeneous materials through atomistic simulations”, Extreme Mechanics Letters.
[6] Aghababaei, R., Wagner, D., Molinari, J.-F. (2017) “On the debris-level origins of adhesive wear”, Proceedings of the National Academy of Sciences.
[7] Xu, Y., Li, X., Chen, Q., Zhou, Y. (2024) “Persson’s theory of purely normal elastic rough surface contact: a tutorial based on stochastic process theory”, International Journal of Solids and Structures.
[8] Holmberg, K., Erdemir, A. (2017) “Influence of tribology on energy consumption, costs and emission”. Friction.
[9] Rallabandi, B. (2024) “Fluid-elastic interactions near contact at low Reynolds number”, Annual Review of Fluid Mechanics.
[10] Garcia-Suarez, J. “A matter of shape: contact area optimization in soft lubrication”, Submitted to Tribology letters (arXiv:2411.04641).
[11] Wiertlewski, M., Fenton Friesen, R., and Colgate, J. E. (2016) “Partial squeeze film levitation modulates fingertip friction”, Proceedings of the National Academy of Sciences.
[12] Derby, B. (2012) “Printing and prototyping of tissues and scaffolds”, Science.
[13] Carlson, J. M., and Batista, A. A. (1996) “Constitutive relation for the friction between lubricated surfaces”, Physical Review E.
[14] Garcia-Suarez, J. (2022) “Harmonic decomposition of the trace of 1D transfer matrices in layered media”. Journal of the Mechanics and Physics of Solids.
[15] González-Carbajal, J., Lemm, M., Garcia-Suarez, J. (2024) “On the lowest-frequency bandgap of 1D phononic crystals”. European Journal of Mechanics - A/Solids.
[16] Morrison, N., Pan, S., and Ma, E. Y. “Physics-agnostic inverse design using transfer matrices”, APL Machine Learning.
[17] Sangiorgio, N., Garcia-Suarez, J. (2025) “Harmonic decomposition of transfer matrices for bending waves”, To be submitted to Journal of the Mechanics and Physics of Solids (in preparation).
[18] Wattel, S., Molinari, J.-F., Ortiz, M., Garcia-Suarez, J. (2023) “Mesh d-refinement: a data-based computational framework to account for complex material response”. Mechanics of Materials.
[19] Cortes, G., Sangiorgio, N., Garcia-Suarez, J. (2024) “Phase-space iterative solvers”. Submitted to Computational Mechanics (arxiv 2309.14031).
[20] Bertin, V. elastohydrodynamic-bouncing, GitHub repository, https://github.com/vincent-bertin/elastohydrodynamic-bouncing (accessed 2025-11-13).
[21] Garcia-Suarez, J. soft-contact, GitHub repository, https://github.com/jgarciasuarez/soft-contact (accessed 2025-11-14).
