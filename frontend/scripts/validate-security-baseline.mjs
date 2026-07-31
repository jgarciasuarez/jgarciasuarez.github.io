import { readFile } from "node:fs/promises";

const packageLock = JSON.parse(
  await readFile(new URL("../package-lock.json", import.meta.url), "utf8"),
);
const baseline = JSON.parse(
  await readFile(
    new URL("../security-audit-baseline.json", import.meta.url),
    "utf8",
  ),
);

const rootPackage = packageLock.packages?.[""];
const framework = packageLock.packages?.[
  `node_modules/${baseline.framework.name}`
];

if (framework?.version !== baseline.framework.version) {
  throw new Error(
    `Reviewed ${baseline.framework.name} version changed: expected ${baseline.framework.version}, received ${framework?.version ?? "missing"}`,
  );
}

for (const [name, expectedVersion] of Object.entries(
  baseline.transitivePackages,
)) {
  const dependency = packageLock.packages?.[`node_modules/${name}`];
  if (dependency?.version !== expectedVersion) {
    throw new Error(
      `Reviewed transitive dependency changed: ${name} expected ${expectedVersion}, received ${dependency?.version ?? "missing"}`,
    );
  }
  if (
    rootPackage?.dependencies?.[name] ||
    rootPackage?.devDependencies?.[name]
  ) {
    throw new Error(`${name} is no longer transitive and requires a new risk review`);
  }
}

if (baseline.openHighSeverityRuntimeAdvisories !== 3) {
  throw new Error("The reviewed high-severity advisory baseline must be explicit");
}

const reviewedHighAlerts = baseline.reviewedAlerts.filter(
  (alert) => alert.severity === "high",
);
const reviewedMediumAlerts = baseline.reviewedAlerts.filter(
  (alert) => alert.severity === "medium",
);
if (
  reviewedHighAlerts.length !== baseline.openHighSeverityRuntimeAdvisories ||
  reviewedMediumAlerts.length !== baseline.openMediumSeverityRuntimeAdvisories
) {
  throw new Error(
    "The reviewed Dependabot alert inventory does not match its severity baseline",
  );
}

for (const alert of baseline.reviewedAlerts) {
  if (!baseline.transitivePackages[alert.package]) {
    throw new Error(
      `Reviewed alert ${alert.ghsa} is not tied to a tracked transitive package`,
    );
  }
}

console.log(
  `Security baseline validated: ${baseline.openHighSeverityRuntimeAdvisories} high and ${baseline.openMediumSeverityRuntimeAdvisories} medium reviewed runtime advisories via ${baseline.framework.name}@${baseline.framework.version} (${Object.entries(baseline.transitivePackages)
    .map(([name, version]) => `${name}@${version}`)
    .join(", ")})`,
);
