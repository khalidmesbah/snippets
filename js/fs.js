import fs from "fs";


/* fs module methods
  * open(filePath,flag)
  * read(buffer, options)
  * readFile(path, options)
  * write(data, options)
  *   - write data to files
  *   - creates files that don't exist
  *   - doesn't overwrite content
  *   - file must be opened
  *   - dependent on open flag
  * writeFile(path, data, options)
  *   - write data to files
  *   - creates files that don't exist
  *   - overwrites existing files
  * unlink(filePath): remove a file
  * rename(originalPath, newPath)
  * mkdir(directoryPath)
  * rmdir(directoryPath): remove an empty directory
*/

/* Flags
  * r : open for reading
  * r+: open for reading and writing
  * w+: open for reading and writing
  *     replace the current file
  *     creates it if it doesn't exist
  * a : open for reading and writing
  *     appends data to the end
  * a+: open for reading and writing
  *     appends data to the end
  *     creates it if it doesn't exist
  */ 

const filePath = "t.md";
const flag = "a+";

const open = async (filePath,flag) => {
  try {
    return await fs.promises.open(filePath, flag);
  } catch (err) {
    console.log(err);
  }
};

const writeFile = async text => {
  try {
    await fs.promises.writeFile(filePath, text);
  } catch (err) {
    console.log(err);
  }
};

const write = async text => {
  try {
    const f = await open();
    await f.write(text);
  } catch (err) {
    console.log(err);
  }
};

const read = async text => {
  try {
    const buff = new Buffer.alloc(26);
    const f = await open();
    await f.read(buff, 0, 26);
    console.log(buff);
  } catch (err) {
    console.log(err);
  }
};

const readFile = async filePath => {
  try {
    const res = await fs.promises.readFile(filePath, "utf-8");
    return res;
  } catch (err) {
    console.log(err);
  }
};

const deleteF = async () => {
  try {
    await fs.remove(filePath);
  } catch (err) {
    console.log(err);
  }
};

const rename = async () =>{
  try{
    await fs.promises.mkdir('tt')
    const f = await fs.promises.rename(filePath,"tt/"+filePath)
  }catch(err){
    console.log(err)
  }
}


const rerename = async () =>{
  try{
    await fs.promises.rename("tt/"+filePath,filePath)
    await fs.promises.rmdir("tt")
  }catch(err){
    console.log(err)
  }
}

writeFile("the king")
write("\nloda hi")
// rename();
// rerename();
// read();
// console.log(`-------------`)
readFile();
