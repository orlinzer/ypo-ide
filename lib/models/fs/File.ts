import FileDescriptor from "./fileDescriptor";

export type FileContent = string | Blob;

export type File = {
  content: FileContent;
} & FileDescriptor;

export default File;
