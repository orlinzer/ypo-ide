/**
 * @abstract Virtual File System
 * @author Or Linzer (orlinzer@gmail.com)
 */

import FileSystemEntry from "./file-system-entry";

export class FileSystemDirectoryEntry extends FileSystemEntry {

  constructor (name) {
    super(name);

    this.entries = [];
  }

  get isFile () {
    return false;
  }

  get isDirectory () {
    return true;
  }

  forEach (callback) {
    this.entries.forEach(callback);
  }

  add (entry) {
    // TODO
  }
}

export default FileSystemDirectoryEntry;