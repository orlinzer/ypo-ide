
import React from 'react';

// import MonacoEditor from 'react-monaco-editor';
import { DiffEditor } from '@monaco-editor/react';

import './styles/code-editor.css';

export class DiffCodeEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DiffEditor


        /**
         * @description The original source (left one) value
         *
         * @default undefined
         *
         * @type { string }
         */
        original={''}

        /**
         * @description The modified source (right one) value
         *
         * @default undefined
         *
         * @type { string }
         */
        modified={''}

        /**
         * @description Language for the both models - original and modified (all languages that are supported by monaco-editor)
         *
         * @default undefined
         *
         * @type { enum:... }
         */
        language={''}

        /**
         * @description This prop gives you the opportunity to specify the language of the original source separately, otherwise, it will get the value of the language property
         *
         * @default undefined
         *
         * @type { enum:... }
         */
        originalLanguage={''}

        /**
         * @description This prop gives you the opportunity to specify the language of the modified source separately, otherwise, it will get the value of language property
         *
         * @default undefined
         *
         * @type { enum:... }
         */
        modifiedLanguage={''}

        /**
         * @description Path for the "original" model. Will be passed as a third argument to .createModel method - monaco.editor.createModel(..., ..., monaco.Uri.parse(originalModelPath))
         *
         * @default undefined
         *
         * @type { string }
         */
        originalModelPath={''}

        /**
         * @description Path for the "modified" model. Will be passed as a third argument to .createModel method - monaco.editor.createModel(..., ..., monaco.Uri.parse(modifiedModelPath))
         *
         * @default undefined
         *
         * @type { string }
         */
        modifiedModelPath={''}

        /**
         * @description Indicator whether to dispose the current original model when the DiffEditor is unmounted or not
         *
         * @default false
         *
         * @type { boolean }
         */
        keepCurrentOriginalModel={''}

        /**
         * @description Indicator whether to dispose the current modified model when the DiffEditor is unmounted or not
         *
         * @default false
         *
         * @type { boolean }
         */
        keepCurrentModifiedModel={''}

        /**
         * @description The theme for the monaco. Available options "vs-dark" | "light". Define new themes by monaco.editor.defineTheme
         *
         * @default 'light'
         *
         * @type { enum: 'light', 'vs-dark' }
         */
        theme={''}

        /**
         * @description The line to jump on it
         *
         * @default undefined
         *
         * @type { number }
         */
        line={''}

        /**
         * @description The loading screen before the editor will be mounted
         *
         * @default 'Loading...'
         *
         * @type { React Node }
         */
        loading={''}

        /**
         * @description IDiffEditorConstructionOptions
         *
         * @default {}
         *
         * @type { object }
         */
        options={''}

        /**
         * @description Width of the editor wrapper
         *
         * @default '100%'
         *
         * @type { union: number | string }
         */
        width={''}

        /**
          * @description Height of the editor wrapper
          *
          * @default '100%'
          *
          * @type { union: number | string }
          */
        height={''}

        /**
          * @description Class name for the editor container
          *
          * @default undefined
          *
          * @type { string }
          */
        className={''}

        /**
          * @description Props applied to the wrapper element
          *
          * @default {}
          *
          * @type { object }
          */
        wrapperProps={''}

        /**
          * @description Signature: function(monaco: Monaco) => void. An event is emitted before the editor is mounted. It gets the monaco instance as a first argument
          *
          * @default noop
          *
          * @type { function }
          */
        beforeMount={''}

        /**
          * @description Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void. An event is emitted when the editor is mounted. It gets the editor instance as a first argument and the monaco instance as a second
          *
          * @default noop
          *
          * @type { function }
          */
        onMount={''}

      />
    );
  }

  editorDidMount () {

  }

  editorDidUpdate () {

  }

  editorWillUnmount () {

  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  componentWillUnmount() {

  }
}

export default DiffCodeEditor;