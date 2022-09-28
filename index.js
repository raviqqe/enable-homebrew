import * as core from "@actions/core";

for (const path of ["bin", "sbin"]) {
  core.addPath("/home/linuxbrew/.linuxbrew/" + path);
}
