/**
 * @abstract Virtual File System Entry
 * @author Or Linzer (orlinzer@gmail.com)
 */

export class FileSystemEntry {

  static FileSystemEntryTypes = {
    FILE: 'FILE',
    DIRECTORY: 'DIRECTORY'
  };

  // TODO
  constructor (name) {
    // this._type
    this._name = name;
    // this._fullPath
    // this._fileSystem
    // this._parent
  }

  get isFile () {
    return this._type === this.FileSystemEntryTypes.FILE;
  }

  get isDirectory () {
    return this._type === this.FileSystemEntryTypes.DIRECTORY;
  }

  get name () {
    return this._name;
  }

  get fullPath () {
    if (!this._parent) { return '/'; }
    return this._parent.fullPath + '/' + this._name;
  }

  get fileSystem () {
    return this._fileSystem;
  }

  get parent () {
    return this._parent;
  }
}

export default FileSystemEntry;