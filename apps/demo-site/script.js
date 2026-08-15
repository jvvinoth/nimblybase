const terminal = document.querySelector("#terminal");
const idea = document.querySelector("#idea");
const simulate = document.querySelector("#simulate");

const lines = [
  "Product Agent: reading app idea...",
  "Product Agent: schema -> users, projects, files, summaries, webhook_events",
  "Product Agent: services -> auth, D1, R2, edge function, AI gateway, domain",
  "Infrastructure Agent: calling nimblybase.create_project",
  "Infrastructure Agent: provisioning Cloudflare D1 + R2",
  "Infrastructure Agent: deploying edge function /api/summarize",
  "Infrastructure Agent: preparing Entri domain connection flow",
  "Verification Agent: checking API health, logs, DNS readiness, cost ledger",
  "Verification Agent: evidence report ready",
  "",
  "Output: project URL, API keys, service map, logs, usage estimate, rollback plan",
];

function runSimulation() {
  const summary = idea.value.trim().replace(/\s+/g, " ").slice(0, 140);
  terminal.textContent = `Input: ${summary}\n\n`;
  let index = 0;
  simulate.disabled = true;
  const timer = setInterval(() => {
    terminal.textContent += `${lines[index]}\n`;
    index += 1;
    if (index >= lines.length) {
      clearInterval(timer);
      simulate.disabled = false;
    }
  }, 260);
}

simulate.addEventListener("click", runSimulation);

setTimeout(runSimulation, 700);
