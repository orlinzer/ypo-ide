// import Editor from "@monaco-editor/react";
import MonacoEditor, { editor } from 'monaco-editor';

import { Close as CloseIcon } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useTheme
} from "@mui/material";
import { NextPage } from "next";
import React,
{
  EventHandler,
  ReactEventHandler,
  useState
} from "react";
// import BlocklyEditor from "../components/BlocklyWorkspace/BlocklyEditor";
import BlocklyWorkspace from "../components/BlocklyWorkspace/BlocklyWorkspace";
import Layout from "../components/Layout/Layout";
import TreeView,
{ RenderTree } from "../components/TreeView/TreeView";
import Editor from '../components/Editor/Editor';
import FileExplorer from '../components/FileExplorer/FileExplorer';

// TODO
// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

export const data: RenderTree = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;


  return (
    <Box
      hidden={value !== index}
      sx={{
        p: 0,
        flexGrow: 1,
        minHeight: 0,
        minWidth: 0,
        // display: value !== index ? 'none' : 'block',
      }}
      component='div'
    // onDrop={() => {
    //   console.log('drop');
    // }}
    // onDropCapture={() => {

    // }}
    // onDragOver={() => {
    //   console.log('dragOver');
    // }}
    >
      {children}
    </Box>
  );

  // return (
  //   <div
  //     role="tabpanel"
  //     hidden={value !== index}
  //     id={`file-tabpanel-${index}`}
  //     aria-labelledby={`file-tab-${index}`}
  //     style={{
  //       flexGrow: 1
  //     }}
  //     {...other}
  //   >
  //     {value === index && (
  //       <Box sx={{
  //         p: 3,
  //         flexGrow: 1
  //       }}>
  //         {children}
  //       </Box>
  //     )}
  //   </div>
  // );
}

interface FileTabProps {
  index: number;
  fileName: string;
  onClick: { (): void };
  onClose: { (): void };
}

function FileTab(props: FileTabProps) {
  const { index, fileName, onClick, onClose, ...other } = props;

  return (
    <Tab
      label={(
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',
            p: 0,
            m: 0,
            color: 'text.primary',
            background: 'background.default'
          }}
        >
          <Typography sx={{ textTransform: 'none' }}>{fileName}</Typography>
          <IconButton size="small" onClick={onClose}><CloseIcon /></IconButton>
        </Box>
      )}
      id={`file-tab-${index}`}
      aria-controls={`file-tabpanel-${index}`}
      value={index}
      onClick={onClick}
    />
  );
}

export const UserPage: NextPage = () => {
  const [value, setValue] = useState(0);

  const theme = useTheme();

  const [files, setFiles] = useState([
    {
      name: 'index.html',
      type: 'html',
      value: '',
    },
    {
      name: 'common.css',
      type: 'css',
      value: '',
    },
    {
      name: 'main.js',
      type: 'javascript',
      value: '',
    }
  ]);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: any) => {
    setValue(newValue);
  };

  console.log(theme.palette.mode);

  // Blockly editor
  // return (
  //   <Layout>
  //     <Editor />
  //   </Layout>
  // );

  return (
    <Layout>

      <Grid
        container
        sx={{
          flexGrow: 1,
        }}
      >

        {/* <TreeView nodes={[data]} /> */}
        <Grid
          item
          xs={2}
        >
          <FileExplorer url={'/'} />
        </Grid>

        <Grid
          item
          // xs={12}
          xs={10}
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignContent: 'stretch',
            alignItems: 'stretch',
            justifyContent: 'start'
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              // borderColor: 'divider'
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              // textColor="primary"
              // indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              selectionFollowsFocus
              aria-label="file tabs"
            >
              {files.map((file, index) => (
                <FileTab
                  key={file.name}
                  index={index}
                  fileName={file.name}
                  onClick={() => setValue(index)}
                  onClose={() => setFiles((oldFiles) => oldFiles.filter((oldFile) => oldFile.name !== file.name))}
                />
              ))}
            </Tabs>
          </Box>
          {files.map((file, index) => (
            <TabPanel key={file.name} value={value} index={index}>
              <Editor />
              {/* <Editor
                defaultLanguage={file.type}
                theme={theme.palette.mode === 'dark' ? 'vs-dark' : 'light'}
                value={file.value}
              /> */}
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default UserPage;
