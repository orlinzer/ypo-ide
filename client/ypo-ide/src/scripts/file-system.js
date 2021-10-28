'use strict';

// https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry

// https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API

// https://developer.mozilla.org/en-US/docs/Web/API/FileSystem



// File and Directory Entries API
// The File and Directory Entries API simulates a local file system that web apps can navigate within and access files in. You can develop apps which read, write, and create files and/or directories in a virtual, sandboxed file system.

export class FileSystem {

  constructor() {
    // Taking care of the browser-specific prefixes.
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

    // ...

    function onError (error) {
      console.error(error);
    }

    function onFs(fs){
      fs.root.getDirectory ('Documents', {create:true}, function(directoryEntry) {
        //directoryEntry.isFile === false
        //directoryEntry.isDirectory === true
        //directoryEntry.name === 'Documents'
        //directoryEntry.fullPath === '/Documents'

        }, onError);

      }

    let TEMPORARY;

    // Opening a file system with temporary storage
    window.requestFileSystem(TEMPORARY, 1024 * 1024 /*1MB*/, onFs, onError);

    ///////////////////////////////////////////////////////////////////////////

    // this.input = document.createElement('input');
    // if (!this.input) { throw new Error('can\'t create HTML element'); }

    // this.input.type = 'file';
    // this.input.style.display('none');

    // document.appendChild(this.input);
  }

}