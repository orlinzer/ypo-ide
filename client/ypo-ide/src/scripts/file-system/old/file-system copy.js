// 'use strict';

// // https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API
// // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
// // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry

// // https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API

// // https://developer.mozilla.org/en-US/docs/Web/API/FileSystem



// // Taking care of the browser-specific prefixes.
// window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
// console.log('requestFileSystem', window.requestFileSystem);
// window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;
// console.log('directoryEntry', window.directoryEntry); // undefine
// window.fileEntry = window.fileEntry || window.webkitFileEntry;
// console.log('fileEntry', window.fileEntry); // undefine

// // let domFS = window.DOMFileSystem;

// export let fileSystem;

// // Opening a file system with temporary storage
// window.requestFileSystem(
//   // if it's acceptable for the browser to delete the files at its own discretion, such as if storage space runs low
//   window.TEMPORARY,
//   //  if you need the files to remain in place unless the user or the web site or app explicitly permit it. Persistent storage requires that the user grant the site quota.
//   // window.PERSISTENT,

//   // The amount of storage space you wish to have allocated for your app's use.
//   1024 * 1024 /* 1MB */,

//   function onFileSystem (fs) {
//     console.log(fs);

//     fileSystem = fs;
//   },

//   errorHandler
//   // function (error) {
//   //   console.error('Error: ', error);
//   // }
// );

// function errorHandler (error) {
//   // let msg = '';

//   // switch (error.code) {
//   //   case FileError.QUOTA_EXCEEDED_ERR:
//   //     msg = 'QUOTA_EXCEEDED_ERR';
//   //     break;
//   //   case FileError.NOT_FOUND_ERR:
//   //     msg = 'NOT_FOUND_ERR';
//   //     break;
//   //   case FileError.SECURITY_ERR:
//   //     msg = 'SECURITY_ERR';
//   //     break;
//   //   case FileError.INVALID_MODIFICATION_ERR:
//   //     msg = 'INVALID_MODIFICATION_ERR';
//   //     break;
//   //   case FileError.INVALID_STATE_ERR:
//   //     msg = 'INVALID_STATE_ERR';
//   //     break;
//   //   default:
//   //     msg = 'Unknown Error';
//   //     break;
//   // };

//   // console.log('Error: ' + msg);
//   console.log('Error: ' + error);
// }

// export function getRoot() {
//   if (!fileSystem) { return; }

//   return fileSystem.root;
// }

// export function createDirectory (root, path) {
//   return new Promise((resolve, reject) => {
//     root.getDirectory(path,
//       {
//         create: true,
//         exclusive: true
//       },
//       function (directoryEntry) {
//         resolve(directoryEntry);
//       },
//       function errorHandler (error) {
//         reject(error);
//       }
//     );
//   });
// }

// export function createOrOpenDirectory (root, path) {
//   return new Promise((resolve, reject) => {
//     root.getDirectory(path,
//       {
//         create: true,
//         exclusive: false
//       },
//       function successHandler (directoryEntry) {
//         resolve(directoryEntry);
//       },
//       function errorHandler (error) {
//         reject(error);
//       }
//     );
//   });
// }

// export function openDirectory (root, path) {
//   return new Promise((resolve, reject) => {
//     root.getDirectory(path,
//       {
//         create: false,
//         exclusive: false
//       },
//       function successHandler (directoryEntry) {
//         resolve(directoryEntry);
//       },
//       function errorHandler (error) {
//         reject(error);
//       }
//     );
//   });
// }

// export function deleteDirectory (root, path) {

// }

// let filesystem = window.FileSystemEntry.filesystem;
// let rootDirEntry = window.fileEntry.filesystem.root;




// export class FileSystem {

//   constructor() {


//     // this.fs = window.FileSystem;
//     // this.fs = window.FileSystemEntry;
//     // this.fs = window.FileSystemDirectoryEntry;
//     // this.fs = window.FileSystemFileEntry;
//     // console.log(this.fs);

//     ///////////////////////////////////////////////////////////////////////////

//     // // Taking care of the browser-specific prefixes.
//     // window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
//     // window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;
//     // window.fileEntry = window.fileEntry || window.webkitFileEntry;

//     // // console.log('Linzer Test');
//     // // ...

//     // function onFs(fs){
//     //   console.log(fs);

//     //   console.log(this);

//     //   // fs.root.getDirectory ('Documents', { create:true }, function(directoryEntry) {
//     //   //   // console.log('Linzer Test');
//     //   //   console.log(directoryEntry);

//     //   //   // directoryEntry.filesystem : DOMFileSystem { name: 'https_localhost_3000:Temporary', root: DirectoryEntry }

//     //   //   // directoryEntry.fullPath === '/Documents'
//     //   //   // directoryEntry.isDirectory === true
//     //   //   // directoryEntry.isFile === false
//     //   //   // directoryEntry.name === 'Documents'

//     //   //   // directoryEntry.createReader()
//     //   //   // directoryEntry.getDirectory()
//     //   //   // directoryEntry.getFile()
//     //   //   // directoryEntry.removeRecursively()

//     //   //   }, onError);

//     //   // fs.root.getFile ('Documents.txt', { create:true }, function(fileEntry) {
//     //   //   // console.log('Linzer Test');
//     //   //   console.log(fileEntry);

//     //   //   // fileEntry.isFile === false
//     //   //   // fileEntry.isDirectory === true
//     //   //   // fileEntry.name === 'Documents'
//     //   //   // fileEntry.fullPath === '/Documents'

//     //   // }, onError);

//     // }

//     // this.tmpFSStorage = {};
//     // this.fs = {};

//     // let tmpfs = {};

//     // // Opening a file system with temporary storage
//     // window.requestFileSystem(
//     //   this.tmpStorage,
//     //   1024 * 1024 /* 1MB */,
//     //   // this.onFileSystem,
//     //   function onFileSystem (fs) {
//     //     console.log(fs);
//     //     console.log(tmpfs);
//     //     // console.log(this.fileSystem);
//     //     // console.log(this.fs);

//     //     // this.fs = fs;
//     //     // onFileSystemEnd();
//     //   },
//     //   function onRequestFileSystemError (err) {
//     //     console.error('Error on requestFileSystem: ', err);
//     //   }
//     // );

//     ///////////////////////////////////////////////////////////////////////////

//     // this.input = document.createElement('input');
//     // if (!this.input) { throw new Error('can\'t create HTML element'); }

//     // this.input.type = 'file';
//     // this.input.style.display('none');

//     // document.appendChild(this.input);
//   }

//   // onFileSystem (fs) {
//   //   console.log(fs);
//   //   this.fs = fs;
//   //   console.log(this);
//   // }
// }

// export default FileSystem;

export default this;