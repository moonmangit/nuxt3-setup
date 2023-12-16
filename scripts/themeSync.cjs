const fs = require("fs");
const path = require("path");

// get color flag from command args
const configPath = path.resolve(__dirname, "../nuxt.config.ts");
const configFile = fs.readFileSync(configPath, "utf8");

const theme = configFile.match(/(?<=css: \[")(.*)(?="])/g)[0];
const themePath = path.resolve(__dirname, `../node_modules/${theme}`);
const themeFile = fs.readFileSync(themePath, "utf8");

// list all lines in :root
const rootLines = themeFile
  .match(/(?<=:root {)(.*)(?=})/gs)[0]
  .split("\n")
  .filter((line) => {
    // only that has this format --color-name: value, value can be #fff,#ffffff,rgb(255,255,255),rgba(255,255,255,0.5),hsl(0,0%,100%)
    return line.match(/(--.*:.*(#|rgb|hsl|rgba))/g);
  });

// convert to array of objects
const colorArr = rootLines.map((line) => {
  const [key, value] = line.split(":");
  let _k = key.trim().split("--")[1];
  // remove ; from value if exists
  let _v = value.trim();
  if (_v.endsWith(";")) {
    _v = _v.slice(0, -1);
  }
  return { key: _k, value: _v };
});

// convert to object
const colorObject = colorArr.reduce((acc, cur) => {
  acc[`auto-${cur.key}`] = cur.value;
  return acc;
}, {});

// write to new file name theme.json
const themeJsonPath = path.resolve(__dirname, "theme.json");
fs.writeFileSync(themeJsonPath, JSON.stringify(colorObject, null, 2));
