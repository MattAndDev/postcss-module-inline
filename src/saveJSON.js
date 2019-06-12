import { writeFile } from "fs";

export default function saveJSON(cssFile, json) {
  console.log(cssFile);
  
  return new Promise((resolve, reject) => {
    writeFile(
      `${cssFile}.json`,
      JSON.stringify(json),
      e => (e ? reject(e) : resolve(json))
    );
  });
}
