const core = require("@actions/core");

for (const path of ["bin", "sbin"]) {
  core.addPath("/home/linuxbrew/.linuxbrew/" + path);
}
