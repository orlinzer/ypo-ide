
import React from 'react';

// import MonacoEditor from 'react-monaco-editor';
import Editor from '@monaco-editor/react';

import './styles/code-editor.css';

export class CodeEditor extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Editor

        /**
         * @description Default value of the current model
         *
         * @default undefined
         *
         * @type { string }
         */
        // defaultValue={''}

        /**
         * @description Default language of the current model
         *
         * @default undefined
         *
         * @type { string }
         */
        // defaultLanguage={''}

        /**
         * @description Default path of the current model. Will be passed as the third argument to .createModel method - monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))
         *
         * @default undefined
         *
         * @type { string }
         */
        // defaultPath={''}

        /**
         * @description Value of the current model
         *
         * @default undefined
         *
         * @type { string }
         */
        // value={''}

        /**
         * @description Language of the current model (all languages that are supported by monaco-editor)
         *
         * @default undefined
         *
         * @type { enum:... }
         */
        // language='javascript'
        language='html'

        // /**
        //  * @description Path of the current model. Will be passed as the third argument to .createModel method - monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))
        //  *
        //  * @default undefined
        //  *
        //  * @type { string }
        //  */
        // path={''}

        /**
         * @description The theme for the monaco. Available options "vs-dark" | "light". Define new themes by monaco.editor.defineTheme
         *
         * @default 'light'
         *
         * @type { enum: 'light', 'vs-dark' }
         */
        // theme={this.props.theme || 'light'}

        // /**
        //  * @description The line to jump on it
        //  *
        //  * @default undefined
        //  *
        //  * @type { number }
        //  */
        // // line={''}

        // /**
        //  * @description The loading screen before the editor will be mounted
        //  *
        //  * @default 'Loading...'
        //  *
        //  * @type { React Node }
        //  */
        // loading={''}

        // /**
        //  * @description IStandaloneEditorConstructionOptions
        //  *
        //  * @default {}
        //  *
        //  * @type { object }
        //  */
        // options={''}

        // /**
        //  * @description IEditorOverrideServices
        //  *
        //  * @default {}
        //  *
        //  * @type { object }
        //  */
        // overrideServices={''}

        // /**
        //  * @description Indicator whether to save the models' view states between model changes or not
        //  *
        //  * @default true
        //  *
        //  * @type { boolean }
        //  */
        // saveViewState={''}

        // /**
        //  * @description Indicator whether to dispose the current model when the Editor is unmounted or not
        //  *
        //  * @default false
        //  *
        //  * @type { boolean }
        //  */
        // keepCurrentModel={''}

        // /**
        //  * @description Width of the editor wrapper
        //  *
        //  * @default '100%'
        //  *
        //  * @type { union: number | string }
        //  */
        // width={''}

        // /**
        //   * @description Height of the editor wrapper
        //   *
        //   * @default '100%'
        //   *
        //   * @type { union: number | string }
        //   */
        // height={''}

        /**
          * @description Class name for the editor container
          *
          * @default undefined
          *
          * @type { string }
          */
        className='code-editor'

      // /**
      //   * @description Props applied to the wrapper element
      //   *
      //   * @default {}
      //   *
      //   * @type { object }
      //   */
      // wrapperProps={''}

      // /**
      //   * @description Signature: function(monaco: Monaco) => void. An event is emitted before the editor is mounted. It gets the monaco instance as a first argument
      //   *
      //   * @default noop
      //   *
      //   * @type { function }
      //   */
      // beforeMount={''}

      // /**
      //   * @description Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void. An event is emitted when the editor is mounted. It gets the editor instance as a first argument and the monaco instance as a second
      //   *
      //   * @default noop
      //   *
      //   * @type { function }
      //   */
      // onMount={''}

      // /**
      //   * @description Signature: function(value: string | undefined, ev: monaco.editor.IModelContentChangedEvent) => void. An event is emitted when the content of the current model is changed
      //   *
      //   * @default undefined
      //   *
      //   * @type { function }
      //   */
      // onChange={''}

      // /**
      //   * @description Signature: function(markers: monaco.editor.IMarker[]) => void. An event is emitted when the content of the current model is changed and the current model markers are ready
      //   *
      //   * @default noop
      //   *
      //   * @type { function }
      //   */
      // onValidate={''}

      />
    );
  }

  editorDidMount() {

  }

  editorDidUpdate() {

  }

  editorWillUnmount() {

  }

  componentDidMount() {

  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  // this.setState({
  //   theme: this.props.theme
  // });
  // console.log('code-editor updated');
  // }

  componentWillUnmount() {

  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   if (nextProps.theme && this.state.theme !== nextProps.theme) {
  //     // this.setState({
  //     //   theme: nextProps.theme !== 'vs-dark'?'light':'vs-code'
  //     // })
  //     return true;
  //   }
  //   return nextState && nextState !== this.state;
  // }
}

export default CodeEditor;