import { join } from "node:path";
import { addPath } from "@actions/core";

//#region src/index.ts
for (const path of ["bin", "sbin"]) addPath(join("/home/linuxbrew/.linuxbrew", path));

//#endregion