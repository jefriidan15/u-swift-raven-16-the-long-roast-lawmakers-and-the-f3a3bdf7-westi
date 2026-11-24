import * as fs from "node:fs";

// One satirical sentence: the lawmaker's authority, undercut by the file
// he cannot convert. Written to /output/entry.txt for the judge.
const ENTRY =
  "The senator who wrote the bill to regulate artificial intelligence has been trying to convert his own speech to PDF since Tuesday, and his office now lists it as a pending infrastructure project.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
