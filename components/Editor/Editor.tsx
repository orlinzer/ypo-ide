import { Box, List, ListItem } from "@mui/material";
import { Properties, Property } from "csstype";
import React, { CSSProperties } from "react";
// import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
// import * as monaco from "monaco-editor";
import loader from '@monaco-editor/loader';

import { ClassNames } from "@emotion/react";
// This is OK! It is not an Error
import { Theme, Toolbox, WorkspaceSvg } from "blockly";
import { editor } from "monaco-editor";
import Blockly from 'blockly';

export interface EditorProps {
  width?: Property.Width<string | number>;
  height?: Property.Height<string | number>;
  value?: string;
};

export const Editor = ({ }: EditorProps) => {
  const style: CSSProperties = {
    width: '100%',
    height: '100%',
  };

  let containerElement: HTMLDivElement;
  let blocklyDiv: HTMLDivElement;

  let blocklyToolBox = {
    "kind": "categoryToolbox",

    // "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "category",
        name: "Logic",
        colour: "#5b80a5",

        cssConfig: {
          container: 'blocklyToolboxCategory',
          row: 'blocklyTreeRow',
          icon: 'blocklyTreeIcon',
          label: 'blocklyTreeLabel',
          selected: 'blocklyTreeSelected',
          openicon: 'blocklyTreeIconOpen',
          closedicon: 'blocklyTreeIconClosed',
        },
        toolboxitemid: 'Logic',
        // 'categorystyle': 'logic_category',
        contents: [
          {
            kind: "block",
            "type": "controls_if",
            // "colour": "#5b80a5",
          },
          {
            "kind": "block",
            "type": "logic_compare",
            'fields': {
              'OP': "EQ",
            },
          },
          {
            "kind": "block",
            "type": "logic_operation",
            'fields': {
              'OP': "AND",
            },
          },
          {
            "kind": "block",
            "type": "logic_negate",
          },
          {
            "kind": "block",
            "type": "logic_boolean",
            'fields': {
              'BOOL': "TRUE",
            },
          },
          {
            "kind": "block",
            "type": "logic_null",
          },
          {
            "kind": "block",
            "type": "logic_ternary",
          },
        ],
      },
      {
        "kind": "category",
        "name": "Loops",
        "colour": "#5ba55b",
        "contents": [
          {
            "kind": "block",
            "type": "controls_repeat_ext",
            "inputs": {
              "TIMES": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 10
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "controls_whileUntil",
            'fields': {
              'MODE': "WHILE",
            },
          },
          {
            "kind": "block",
            "type": "controls_for",
            'fields': {
              'VAR': {
                "name": "index",
                "type": "Number"
              },
            },
            "inputs": {
              "FROM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }
              },
              "TO": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 10
                  }
                }
              },
              "BY": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }
              },
            },
          },
          {
            "kind": "block",
            "type": "controls_forEach",
            'fields': {
              'VAR': {
                "name": "index",
                "type": "Number"
              },
            },
          },
          {
            "kind": "block",
            "type": "controls_flow_statements",
            'fields': {
              'FLOW': 'BREAK',
            },
          },
        ],
      },
      {
        "kind": "category",
        "name": "Math",
        "colour": "#5b67a5",
        "contents": [
          {
            "kind": "block",
            "type": "math_number",
            'fields': {
              'NUM': "0",
            },
          },
          {
            "kind": "block",
            "type": "math_arithmetic",
            'fields': {
              'OP': "ADD",
            },
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }
              },
            }
          },
        ],
      },
    ]
  };

  let blocklyOptions = {
    collapse: true,
    comments: true,
    css: true,
    disable: false,
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true,
    },
    horizontalLayout: false,
    maxBlocks: Infinity,
    maxInstances: Infinity,
    // media: '',
    move: {
      scrollbars: {
        horizontal: true,
        vertical: true
      },
      drag: true,
      wheel: true,
    },
    oneBasedIndex: true,
    readOnly: false,
    renderer: 'geras',
    rtl: false,
    scrollbars: true,
    sounds: true,
    theme: {
      "colourPrimary": "#4a148c",
      "colourSecondary": "#AD7BE9",
      "colourTertiary": "#CDB6E9"
    },

    // toolbox: document.getElementById('toolbox'),
    toolbox: blocklyToolBox,
    toolboxPosition: 'start',
    trashcan: false,
    maxTrashcanContents: 32,
    // plugins: { },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
      pinch: true
    },
  };

  let myEditor: editor.IStandaloneCodeEditor;
  let workspace: WorkspaceSvg;

  const assignBlockly = (component: HTMLDivElement) => {
    blocklyDiv = component;

    if (!workspace) {
      workspace = Blockly.inject(blocklyDiv, blocklyOptions);
      // workspace = Blockly.WorkspaceSvg(new Blockly.Options(blocklyOptions));

      // console.log(workspace.toolbox_);
      // console.log(workspace.toolbox_.setSelectedItem());
      // console.log(workspace.toolbox_.contents_[0]);

      // let toolbox = new Toolbox(workspace);

      // console.log(toolbox);
      // console.log(toolbox.getToolboxItems());

      // var category = toolbox.getToolboxItems()[0];
      // var category = toolbox.getToolboxItemById('categoryId');

    }
  };

  // const assignRef = (component: HTMLDivElement) => {
  //   containerElement = component;

  //   loader.init().then(monaco => {
  //     if (!myEditor) {
  //       myEditor = monaco.editor.create(containerElement, {
  //         value: '// some comment',
  //         language: 'javascript',
  //         dragAndDrop: true,
  //       });
  //     }

  //     myEditor.onMouseMove(function (e) {
  //       // var contentWidget = {
  //       //   // domNode: null,
  //       //   domNode: HTMLDivElement,
  //       //   getId: function () {
  //       //     return 'my.content.widget';
  //       //   },
  //       //   getDomNode: function () {
  //       //     if (!this.domNode) {
  //       //       this.domNode = document.createElement('div');
  //       //       this.domNode.innerHTML = 'My content widget';
  //       //       this.domNode.style.background = 'grey';
  //       //     }
  //       //     return this.domNode;
  //       //   },
  //       //   getPosition: function () {
  //       //     return {
  //       //       position: {
  //       //         lineNumber: e.target.position?.lineNumber,
  //       //         column: e.target.position?.column
  //       //       },
  //       //       preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE, monaco.editor.ContentWidgetPositionPreference.BELOW]
  //       //     };
  //       //   }
  //       // };
  //       // myEditor.layoutContentWidget(contentWidget)
  //     });
  //   });

  // const editor = monaco.editor.create(containerElement, {
  //   value: '',
  //   language: '',
  //   // ...(ClassNames ? { extraEditorClassName: ClassName } : {}),
  //   // ...options,
  //   // ...(theme ? Theme : {}),
  // },
  //   // overrideServices
  // );
  // };

  return (
    // <div ref={assignRef}></div>
    <Box
      style={{
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'stretch',
      }}
    >
      {/* <Box
        style={{
          width: '20%',
          // height: '100%',
        }}
        component={'div'}
      >
        <List>
          <ListItem>
            bla
          </ListItem>
        </List>
      </Box> */}

      {/* <Box
        style={{
          width: '80%',
          // height: '100%',
        }}
        component={'div'}
        ref={assignRef}
        onDrop={(e: any) => {
          console.log('drop');
          e.preventDefault();
        }}
        onDragOver={(e: any) => {
          console.log('dragOver');
          e.preventDefault();
        }}
        draggable='true'
      >
      </Box> */}

      <Box
        style={{
          width: '50%',
          // height: '100%',
        }}
        component={'div'}
        ref={assignBlockly}
        onDrop={(e: any) => {
          console.log('drop');
          e.preventDefault();
        }}
        onDragOver={(e: any) => {
          console.log('dragOver');
          e.preventDefault();
        }}
        draggable='true'
      >
      </Box>
    </Box>
  );
};

export default Editor;
