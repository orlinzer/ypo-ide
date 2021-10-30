/**
 * @abstract Virtual File System
 * @author Or Linzer (orlinzer@gmail.com)
 */

import FileSystemEntry from "./file-system-entry";

export class FileSystemFileEntry extends FileSystemEntry {

  constructor (name, file) {
    super();

    if (file) {
      this.file = file;
    } else {
      this.file = new File(new Blob(), name);
    }
  }

  get isFile () {
    return true;
  }

  get isDirectory () {
    return false;
  }

  get name () {
    return this.file.name;
  }

  copy () {
    return new FileSystemEntry();
  }

  copyTo (entry) {
    if(entry && entry.isDirectory()) {
      // entry.entrys.push()
    }
    // TODO
  }

  moveTo (entry) {
    // TODO
  }

  destroy () {
    // TODO
  }
}

export default FileSystemFileEntry;