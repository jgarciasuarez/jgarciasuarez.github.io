---
layout: about
title: About me
permalink: /about/
---

## Joaquin Garcia-Suarez

I am a SNSF Ambizione Fellow at the [Computational Solid Mechanics Laboratory](https://www.epfl.ch/labs/lsms/), Prof. Molinari’s group at EPFL. I received a PhD in aeronautics from the Graduate Aerospace Laboratories at the California Institute of Technology ([GALCIT](https://galcit.caltech.edu/), minor in applied and computational mathematics).

I am a mechanician working on topics pertaining to multiscale data-driven modeling of friction (mainly) and material deformation, tribology and interface phenomena, wave propagation, earthquake engineering... and the intersections thereof.

I approach problems as an engineer but without shying away from the theoretical and numerical aspects; in the words of [Prof. Hans Liepmann](https://oralhistories.library.caltech.edu/260/1/Liepmann%20OHO%20final.pdf): “understanding of fundamentals with an appreciation for applications”.

The tools I use to tackle problems are numerical methods, applied mathematics and data-based approaches. You can find materials to reproduce almost every result I have ever published in the thematic repositories in my [Github page](https://github.com/jgarciasuarez); in general, each repository corresponds to one publication. 


## Research topics I’m currently interested in and relevant contributions:

For a comprehensive up-to-date list of publications, please visit my [Google Scholar profile](https://scholar.google.com/citations?user=TwRZ6qsAAAAJ&hl=en).

### Data-driven: friction and mechanics

Phenomenological constitutive laws have traditionally been used to model both frictional phenomena and material mechanical response, particularly for computational analysis. Event though some materials can be faithfully represented in certain conditions, oftentimes complex behavior (damage, cyclic loadind, dissipation) is either not properly captured or represented at the expense of a large set of parameters that require painstaking calibration. The new data-driven computational mechanics paradigm presents an alternative that works directly with datasets (either experimental or mined from micromechanical simulations) thus avoiding both modeling biases and calibration altogether. 


- Wattel, S., Molinari, J. F., Ortiz, M., & Garcia-Suarez, J. (2023). Mesh d-refinement: a data-based computational framework to account for complex material response. Mechanics of Materials, 180, 104630. [link](https://www.sciencedirect.com/science/article/pii/S0167663623000765)


- Garcia‐Suarez, J., Cornet, A., Wattel, S., & Molinari, J. F. (2023). Data‐driven 1D wave propagation for site response analysis. International Journal for Numerical and Analytical Methods in Geomechanics, 47(15), 2691-2705. [link](https://onlinelibrary.wiley.com/doi/full/10.1002/nag.3596)


### Tribology

Utilizing numerical simulations to capture the micro and nano phenomena that control the creation of wear debris and the emergence of friction during sliding of contacting surfaces. More recently also interaction between soft solids and lubricated interfaces.


- Garcia-Suarez, J., Brink, T., & Molinari, J. F. (2023). Breakdown of Reye’s theory in nanoscale wear. Journal of the Mechanics and Physics of Solids, 173, 105236. [link](https://www.sciencedirect.com/science/article/pii/S0022509623000406)


- Bilotto, J., Kolinski, J., Lecampion, B., Molinari, S., Subhash, G., Garcia-Suarez, J. (2024). Fluid-mediated impact of soft solids. Journal of Fluid Mechanics 997, p.A35. [link](https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/fluidmediated-impact-of-soft-solids/E208CFA7E3181F48FB66DCE0DF20A182)


### Wave propagation in layered media

The goal is to comprehend how the mechanical properties of the layering of a certain system affect the propagation of waves in it. This can impact a number of (apparently) different fields: for instance, it can help design dispersion relations in laminates, or it can allow assessing the influence of certain soil strata in seismic ground amplification. The knowledge of the exact form of the entries of the global transfer matrix (see publication titled "Harmonic decomposition of the trace of 1D transfer matrices in layered media") could resolve open questions, e.g., how to "engineer" the soil stratification to act as a seismic wave barrier. Moving forward, I would like to explore the performance of layered structures as (a) seismic barriers and (b) analog computers.


- Garcia-Suarez, J. (2022). Harmonic decomposition of the trace of 1D transfer matrices in layered media. Journal of the Mechanics and Physics of Solids, 163, 104830. [link](https://www.sciencedirect.com/science/article/pii/S0022509622000461)


### Seismic response of rock pinnacles

Understanding the mechanics of seismic response of rock towers (a certain kind of fragile geological feature) using FEM simulations along with structural engineering models, to later update seismic hazard estimations. 


- Donnellan, A., Garcia‐Suarez, J., McPhillips, D., Asimaki, D., Goulet, C., Meng, X., Devine, S., & Lyzenga, G. (2022). Toppling of a Trona Pinnacles Spire following the M w 5.5 Ridgecrest Aftershock of June 2020. Seismological Society of America, 93(3), 1768-1776. [link](https://pubs.geoscienceworld.org/ssa/srl/article-abstract/93/3/1768/612853/Toppling-of-a-Trona-Pinnacles-Spire-following-the)


### Site response analysis   

Assessing ground deformation during earthquake events under idealized conditions, and how to define equivalent homogeneous properties and simple results that could be incorporated to seismic design codes.


- Garcia-Suarez, J., Seylabi, E., & Asimaki, D. (2022). Application of ray methods to one-dimensional site response of inhomogeneous soil deposits. Géotechnique, 1-12. [link](https://doi.org/10.1680/jgeot.21.00164)




<!--
- **Geophysics problems involving discrete particles: fault gouge**

There are a number of recurrent themes in geophysics that can benefit enormously from a numerical framework able of capturing interaction between continuum and discrete media (evolution of fluvial sediments, glacial tills, etc). In particular, one of such problems is the mechanics of fault gouge: the capacity to simulate faithfully its evolution can bring about new insights on earthquake sources. 


- **Application of path-independent integrals to soil-structure interaction**    

My PhD work focused on studying the potential of the path-independent integrals of continuum mechanics to provide a new approach to problems in soil-structure interaction. I was chiefly interested in the problem of assessment of seismic increment of pressures on retaining walls.

## Publications (as of 2022)

### Peer-reviewed articles and PhD thesis

1. Garcia-Suarez, J. (2022). Harmonic decomposition of the trace of 1D transfer matrices in layered media. Journal of the Mechanics and Physics of Solids, 163, 104830. [link](https://www.sciencedirect.com/science/article/pii/S0022509622000461)
2. Garcia-Suarez, J., Seylabi, E., & Asimaki, D. (2022). Application of ray methods to one-dimensional site response of inhomogeneous soil deposits. Géotechnique, 1-12. [link](https://doi.org/10.1680/jgeot.21.00164)
3. Garcia-Suarez, J., González-Carbajal, J., & Asimaki, D. (2022). Analytical 1D transfer functions for layered soils. Soil Dynamics and Earthquake Engineering, 163, 107532. [link](https://www.sciencedirect.com/science/article/pii/S0267726122003773)
4. Wattel, S., Garcia‐Suarez, J., & Molinari, J.-F. (2022). Understanding the mechanisms of adhesive wear for heterogeneous materials through atomistic simulations. Extreme Mechanics Letters (in press). [link](https://doi.org/10.1016/j.eml.2022.101913)
5. Voisin-Leprince, M., Garcia‐Suarez, J., Anciaux, G., & Molinari, J.-F. (2022). FEM-DEM bridging coupling for the modeling of gouge. International Journal for Numerical Methods in Engineering (accepted). [preprint link](https://engrxiv.org/preprint/view/2581)
6. Subhash, G., Garcia‐Suarez, J., Cheenady, A., Bavdekar, S., Whittington, W., & Molinari, J.-F. (2022). Stress wave propagation through a 180° bend junction in a square cross-sectional bar. International Journal of Engineering Science, 180, 103748.. [link](https://doi.org/10.1016/j.ijengsci.2022.103748)
7. Donnellan, A., Garcia‐Suarez, J., McPhillips, D., Asimaki, D., Goulet, C., Meng, X., Devine, S., & Lyzenga, G. (2022). Toppling of a Trona Pinnacles Spire following the M w 5.5 Ridgecrest Aftershock of June 2020. Seismological Society of America, 93(3), 1768-1776. [link](https://pubs.geoscienceworld.org/ssa/srl/article-abstract/93/3/1768/612853/Toppling-of-a-Trona-Pinnacles-Spire-following-the)
8. Garcia-Suarez, J., Asimaki, D., & Ortiz, M. (2021). Applications of the J-integral to dynamical problems in geotechnical engineering. Journal of the Mechanics and Physics of Solids. [link](https://www.sciencedirect.com/science/article/pii/S002250962100051X)
9. Garcia-Suarez, J., & Asimaki, D. (2020). On the fundamental resonant mode of inhomogeneous soil deposits. Soil Dynamics and Earthquake Engineering. [link](https://www.sciencedirect.com/science/article/pii/S0267726119314599)
10. Garcia-Suarez, J., & Asimaki, D. (2020). Exact seismic response of smooth rigid retaining walls resting on stiff soil. International Journal for Numerical and Analytical Methods in Geomechanics. [link](https://onlinelibrary.wiley.com/doi/abs/10.1002/nag.3082)
11. Garcia-Suarez, J., Seylabi, Elnaz E., & Asimaki, D. (2020). Seismic harmonic response of inhomogeneous soil: scaling analysis. Géotechnique. [link](https://www.icevirtuallibrary.com/doi/abs/10.1680/jgeot.19.P.042)
12. Garcia-Suarez, J., Seylabi, Elnaz E., & Asimaki, D. (2020). Linear one-dimensional site response analysis in the presence of stiffness-less free surface for certain power-law heterogeneities. Soil Dynamics and Earthquake Engineering. [link](https://www.sciencedirect.com/science/article/pii/S0267726120311568)
13. Garcia-Suarez, J. (2020). Application of path-independent integrals to soil-structure interaction. Caltech PhD Thesis. [link](https://thesis.library.caltech.edu/13587/)


### Preprints
1. Garcia-Suarez, J., Cornet, A., Wattel, S., & Molinari, J.-F. (2022). Data-driven numerical site response. [preprint link](https://arxiv.org/abs/2209.12800) 
2. Garcia-Suarez, J., Brink, T., & Molinari, J.-F. (2022). Breakdown of Reye's theory in nanoscale wear. [preprint link](https://arxiv.org/abs/2207.09561)

### Recent research in poster format
1. Wattel, S., Garcia‐Suarez, J., & Molinari, J.-F. (2022). Data-driven d-refinement: a proof-of-concept (IUTAM symposium on data-driven mechanics and surrogate modeling, October 26-28 2022, Arts et Métiers ParisTech, Paris, France). [link](https://figshare.com/articles/poster/Data-Driven_Refinement_for_linear_FEM_simulations/21395211)


### Conference papers
1. Garcia-Suarez, J., & Asimaki, D. (2018). A quasi-static displacement-based approximation of seismic earth pressures on rigid walls. In Geotechnical Earthquake Engineering and Soil Dynamics V Conference. American Society of Civil Engineers. [link](https://authors.library.caltech.edu/95709/)
2. Asimaki, D., Garcia-Suarez, J., Kusanovic, D., Nguyen, K., &  Seylabi, E. (2019). Next generation reduced order models for soil-structure interaction. In Proceedings of the 7th International Conference on Earthquake Geotechnical Engineering. Asociazione Geotecnica Italiana. [link](https://books.google.com/books?hl=en&lr=&id=_Jq4DwAAQBAJ&oi=fnd&pg=PA138&dq=info:9fOivXcBMYUJ:scholar.google.com&ots=uGoTF5wc02&sig=yz3uraQxYVDCwSmh0D14nq1YxdM#v=onepage&q&f=false)
-->

## Teaching experience

I have been a teaching assistant for Prof. Asimaki’s class AM/CE 151a Dynamics and Vibrations (Fall 2017, Fall 2018 and Fall 2019).

Moreover, I have had a chance to teach one special lecture on Dimensional Analysis (Prof. Asimaki’s class ME 12b Mechanics, Winter 2019) and another one on Dynamic Fracture Mechanics (Prof. Rosakis’ class Ae265a Static and Dynamic Failure of Brittle Solids and Interfaces, Fall 2019). During my time at EPFL, I have occasionally taught Continuum Mechanics lectures when Prof. Molinari was not available. In 2025, I'll begin teaching CIVIL425: Continuum Mechanics and Applications. 

## Awards
- SNSF Ambizione Fellowship, 2023.
- Demetriades-Tsafka-Kokkalis Prize in Seismo-Engineering, Prediction, and Protection, 2020.
- Tyson Fellowship, 2019.
- Registrar Office's best TAs recognition (based on results of student surveys), Fall 2017.
- Talentia Scholarship, 2015.
