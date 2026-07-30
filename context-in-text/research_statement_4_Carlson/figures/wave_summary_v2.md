# Wave Phenomena Summary (v2)

This figure summarizes a unified mathematical framework for describing wave propagation through layered media across different physical domains.

The graphic is divided into several sections:
1. **General Structure (Top):** Presents the governing matrix differential equations for wave propagation. It shows how the state vector $[f, f']^T$ evolves across "one homogeneous layer" via a matrix exponential $\exp(A_k l)$, and across "multiple layers" via the product of transfer matrices $T_N \dots T_1$.
2. **Applications (Middle Row):**
   - **Acoustics:** Illustrates a submarine utilizing an "anti-sonar coating (anechoic tile)." It highlights an absorption efficiency near 1, calculated as $A = 1 - |R| - |T|$.
   - **Optics:** Shows a layered "color filter" struck by "Incoming light," accompanied by a plot showing transmission peaking at a specific wavelength (530 nm).
   - **Elasticity:** Depicts an "Engineered soil barrier" beneath a structure, designed to reflect seismic waves through "Low-frequency bandgaps."
3. **Harmonic Structure (Bottom):** Cites Garcia-Suarez (2022) JMPS, stating that "Transfer matrices possess harmonic structure." It provides the equation $T_{11} = \sum_k \mathcal{T}_k \cos(\tau_k \omega)$, noting that amplitudes ($\mathcal{T}_k$) and periods ($\tau_k$) are known in closed form based on layer thicknesses and material properties.
