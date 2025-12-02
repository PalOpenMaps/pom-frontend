import { readdirSync, readFileSync, writeFileSync } from "fs";
import { csvFormat } from "d3-dsv";

const dir = "./raw-data/poha";
const output = "./raw-data/poha.csv";

const files = readdirSync(dir);

const interviews = {};

for (const file of files) {
  const slug = file.split(".")[0];
  const data = JSON.parse(readFileSync(`${dir}/${file}`));
  for (const interview of data) {
    const id = interview.interview_id;
    if (!interviews[id]) interviews[id] = {...interview, areas: slug};
    else interviews[id].areas += `,${slug}`;
  }
}

const rows = Object.values(interviews);

writeFileSync(output, csvFormat(rows));
