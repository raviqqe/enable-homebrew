import { join } from "node:path";
import { addPath } from "@actions/core";

for (const path of ["bin", "sbin"]) {
  addPath(join("/home/linuxbrew/.linuxbrew", path));
}
