import { seedUserZero } from "../packages/db/src/seed";

async function main() {
  console.log("Bootstrapping local MyFace node...");
  const plan = await seedUserZero();
  console.log("Bootstrap plan generated. Wire this into Drizzle insert/upsert calls after database connection finalization.");
  console.log(JSON.stringify(plan, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
