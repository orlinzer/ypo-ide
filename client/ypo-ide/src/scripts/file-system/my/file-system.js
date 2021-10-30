/**
 * @abstract Virtual File System
 * @author Or Linzer (orlinzer@gmail.com)
 */

import FileSystemDirectoryEntry from './file-system-directory-entry';

export class FileSystem {

  constructor () {
    this._root = new FileSystemDirectoryEntry('');
  }

  get root () {
    return this._root;
  }
}

export default FileSystem;