const fs = require("fs-extra");
const path = require("path");

const root = __dirname;

// Paths
const hostDist = path.join(root, "host", "dist");
const productsDist = path.join(root, "products", "dist");
const cartDist = path.join(root, "cart", "dist");
const deployFolder = path.join(root, "build");

// Clean deploy folder
fs.emptyDirSync(deployFolder);

// Copy host build to root of deploy
fs.copySync(hostDist, deployFolder);

// Copy remotes into subfolders
fs.copySync(productsDist, path.join(deployFolder, "products"));
fs.copySync(cartDist, path.join(deployFolder, "cart"));

// Create _redirects for SPA routing
const redirects = `
/products/* /products/index.html 200
/cart/* /cart/index.html 200
/* /index.html 200
`;

fs.writeFileSync(path.join(deployFolder, "_redirects"), redirects.trim());
