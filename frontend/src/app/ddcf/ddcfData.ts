export type DDCFItemId =
  | "ddcf"
  | "constitutive-modeling"
  | "neural-operators"
  | "gpu-acceleration"
  | "automatic-differentiation";

export type DDCFItem = {
  id: DDCFItemId;
  label: string;
  title: string;
  shortTitle: string;
  teaser: string;
  summary: string;
  scope: string;
  concepts: string[];
  image: string;
  imageAlt: string;
  accent: "cyan" | "violet" | "blue" | "amber" | "rose";
};

export const officialProjectUrl =
  "https://data.snf.ch/grants/grant/216341";

export const sharedResources = [
  {
    label: "Official SNSF project",
    href: officialProjectUrl,
  },
  {
    label: "Published article",
    href: "https://doi.org/10.1016/j.acags.2025.100249",
  },
  {
    label: "Open manuscript",
    href: "https://arxiv.org/abs/2402.14148",
  },
  {
    label: "Companion dataset",
    href: "https://zenodo.org/records/13341474",
  },
] as const;

export const projectFacts = [
  ["Funding scheme", "SNSF Ambizione"],
  ["Grant number", "216341"],
  ["Grant amount", "CHF 830,128"],
  ["Project period", "1 January 2024 – 31 December 2027"],
  ["Host institution", "EPFL · LSMS"],
  ["Disciplines", "Mechanical and Civil Engineering"],
  ["Status", "Ongoing"],
] as const;

export const ddcfItems: Record<DDCFItemId, DDCFItem> = {
  ddcf: {
    id: "ddcf",
    label: "SNSF Ambizione · Grant 216341",
    title: "Data-Driven Computational Friction",
    shortTitle: "DDCF",
    teaser:
      "From laboratory observations to predictive friction laws for multiscale simulation.",
    summary:
      "DDCF develops data-driven computational tools to replace empirical friction laws with models learned from physical and experimental evidence. The project targets history-dependent friction across scales, from laboratory interfaces and industrial contact to fault slip, while preserving the physical constraints required for reliable simulation.",
    scope:
      "Friction controls phenomena ranging from machinery durability to earthquake rupture, yet large-scale simulations still rely heavily on heuristic constitutive laws and fitted internal variables. DDCF adapts data-driven computational mechanics to friction: interface memory is learned from sliding histories, physical constraints are embedded in the learning process, and the resulting models are designed for use inside larger numerical simulations. The programme connects four complementary directions: data-driven constitutive modeling, neural operators for discretization-independent learning and scale transfer, GPU acceleration for computationally intensive solvers, and automatic differentiation for physics-constrained training and gradient-based optimization.",
    concepts: [
      "History-dependent friction",
      "Physics-constrained learning",
      "Multiscale simulation",
      "Differentiable mechanics",
    ],
    image: "/images/DDCF_collage_corrected.webp",
    imageAlt:
      "Collage showing the experimental and computational scales studied in DDCF.",
    accent: "cyan",
  },
  "constitutive-modeling": {
    id: "constitutive-modeling",
    label: "Interface Memory",
    title: "Data-Driven Constitutive Modeling",
    shortTitle: "Constitutive Modeling",
    teaser:
      "Learn friction laws directly from sliding histories instead of prescribing empirical state evolution.",
    summary:
      "This research direction builds constitutive laws that infer the evolution of a frictional interface from sequences of sliding velocity and friction response. Recurrent neural networks use their hidden state as a learned representation of interface memory, replacing the single empirical state variable and evolution equation used in conventional rate-and-state friction.",
    scope:
      "The demonstrated proof of concept uses gated recurrent units trained on synthetic slide-hold-slide histories generated from rate-and-state models with aging and slip evolution. The networks reproduce friction changes after velocity jumps, including noisy cases, without receiving the conventional internal state variable during training. The next stage introduces spring-block dynamics, stick-slip, healing, and laboratory observations so the learned law can be embedded in larger-scale mechanical and geophysical simulations.",
    concepts: [
      "History-dependent friction",
      "Rate-and-state friction",
      "Gated recurrent units",
      "Slide-hold-slide protocols",
      "Spring-block dynamics",
    ],
    image: "/images/friction_scales.png",
    imageAlt:
      "Diagram comparing friction phenomena and models across physical scales.",
    accent: "violet",
  },
  "neural-operators": {
    id: "neural-operators",
    label: "Scale Transfer",
    title: "Learning Neural Operators",
    shortTitle: "Neural Operators",
    teaser:
      "Learn mappings between complete loading histories and friction responses across discretizations and scales.",
    summary:
      "Neural operators extend the project from fixed-length sequence models toward models that learn relationships between functions: an imposed velocity history and the resulting friction evolution. This formulation is intended to reduce dependence on a particular time discretization or sampling frequency.",
    scope:
      "The objective is to accept histories of different lengths and resolutions, improve consistency across experimental protocols, and transfer knowledge between laboratory conditions and crustal-scale applications. Neural operators are therefore the bridge from a successful recurrent-network proof of concept to reusable friction models that can work across datasets, discretizations, and simulation scales.",
    concepts: [
      "Operator learning",
      "Variable-length histories",
      "Discretization independence",
      "Multiple sampling frequencies",
      "Laboratory-to-crustal generalization",
    ],
    image: "/images/datasets.webp",
    imageAlt:
      "Dataset visualisation for learning relationships between loading histories and friction responses.",
    accent: "blue",
  },
  "gpu-acceleration": {
    id: "gpu-acceleration",
    label: "High-Performance Computing",
    title: "GPU Acceleration",
    shortTitle: "GPU Acceleration",
    teaser:
      "Move learning, calibration, and friction-related solvers onto massively parallel hardware.",
    summary:
      "GPU acceleration provides the computational layer required to train data-driven friction models, evaluate many loading histories, and deploy learned laws inside demanding simulations. The aim is to turn the project’s models from research prototypes into scalable computational tools.",
    scope:
      "This direction develops GPU-oriented workflows for high-throughput dataset generation, neural-model training, sensitivity evaluation, and repeated constitutive updates. It also includes GPU solvers for friction-related multiphysics problems such as elastohydrodynamic lubrication. The long-term objective is to make multiscale interface simulations and optimization studies tractable at resolutions that are impractical with serial workflows.",
    concepts: [
      "Parallel training and inference",
      "High-throughput virtual experiments",
      "Accelerated constitutive updates",
      "Multiphysics GPU solvers",
      "Hardware-aware computing",
    ],
    image: "/images/FEM-DD.png",
    imageAlt:
      "Computational mechanics visualisation associated with accelerated numerical solvers.",
    accent: "amber",
  },
  "automatic-differentiation": {
    id: "automatic-differentiation",
    label: "Differentiable Physics",
    title: "Automatic Differentiation",
    shortTitle: "Automatic Differentiation",
    teaser:
      "Use exact computational derivatives to enforce friction physics and optimize interfaces.",
    summary:
      "Automatic differentiation supplies derivatives of model predictions with respect to loading variables and parameters. DDCF uses these derivatives to encode physical knowledge directly in the learning objective rather than relying only on agreement with training data.",
    scope:
      "The demonstrated recurrent-network model uses automatic differentiation to enforce the direct effect: the characteristic logarithmic dependence of friction on sliding velocity. This creates a physics-constrained loss term that guides learning even when no additional target value is supplied. The broader direction extends differentiable physics to model calibration, sensitivity analysis, inverse problems, and gradient-based optimization of meta-interfaces.",
    concepts: [
      "Physics-constrained losses",
      "Exact model sensitivities",
      "Friction direct effect",
      "Gradient-based calibration",
      "Inverse design",
    ],
    image: "/images/panel_DDCF.png",
    imageAlt:
      "Diagram of the differentiable data-driven friction modelling workflow.",
    accent: "rose",
  },
};

export const peripheralItemIds: DDCFItemId[] = [
  "constitutive-modeling",
  "neural-operators",
  "gpu-acceleration",
  "automatic-differentiation",
];
