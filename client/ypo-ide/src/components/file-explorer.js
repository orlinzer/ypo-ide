import * as React from "react";

import './styles/file-explorer.css'

// import FileSystem from "../scripts/file-system";

export class FileExplorer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      files: [] // TODO: remove
    }

    if (props.files) {
      // TODO
      if (!Array.isArray(props.files)) { return; }
      props.files.forEach((file, index) => {
        this.state.files.push({ id: index, data: file });
      })
    }

    if (props.fileSystem) {
      this.state.fileSystem = props.fileSystem;
    } else {
      // this.state.fileSystem = new FileSystem();
    }
  }

  // editorDidMount (editor, monaco) {
    // console.log('editorDidMount', editor);
    // editor.focus();
  // }

  // onChange (newValue, e) {
    // console.log('onChange', newValue, e);
  // }

  render () {
    return (
      <div className="file-explorer">
        <ul className="file-list">
          {
            this.state.files.map(function (file) {
                return (
                  <li key={file.id}>{file.data}</li>
                );
              }
            )
          }
        </ul>
      </div>
    );
  }
}

export default FileExplorer;