import FileDescriptor from "./fileDescriptor";

export type DirectoryContent = FileDescriptor[];

export type Directory = {
  content: DirectoryContent;
} & FileDescriptor;

export default Directory;
