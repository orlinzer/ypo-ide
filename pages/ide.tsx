import Editor from "@monaco-editor/react";
import { Close as CloseIcon } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { NextPage } from "next";
import React, { EventHandler, ReactEventHandler, useState } from "react";
import BlocklyEditor from "../components/BlocklyWorkspace/BlocklyEditor";
import BlocklyWorkspace from "../components/BlocklyWorkspace/BlocklyWorkspace";
import Layout from "../components/Layout/Layout";

// TODO
// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

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
        p: 3,
        flexGrow: 1
      }}
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
            m: 0
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

export const userPage: NextPage = () => {
  const [value, setValue] = useState(0);
  const [files, setFiles] = useState([
    {
      name: 'index.html',
      type: 'html',
      view: (
        <Editor
          defaultLanguage='html'
        />
      )
    },
    {
      name: 'common.css',
      type: 'css',
      view: (
        <Editor
          defaultLanguage='css'
        />
      )
    },
    {
      name: 'main.js',
      type: 'javascript',
      view: (
        <Editor
          defaultLanguage='javascript'
        />
      )
    }
  ]);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Grid container sx={{
        flexGrow: 1
      }}>
        <Accordion>
          <AccordionSummary>
            a
          </AccordionSummary>
          <AccordionDetails>
            Aaaaaaaaaaaa
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            b
          </AccordionSummary>
          <AccordionDetails>
            Bbbbbbbb
          </AccordionDetails>
        </Accordion>
        <Grid item xs={12} sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignContent: 'stretch',
          alignItems: 'stretch',
          justifyContent: 'start'
        }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              selectionFollowsFocus
              aria-label="file tabs"
            >
              {files.map((file, index) => (
                <FileTab
                  index={index}
                  fileName={file.name}
                  onClick={() => setValue(index)}
                  onClose={() => {
                    setFiles((oldFiles) => oldFiles.filter((oldFile) => oldFile.name !== file.name))
                  }}
                />
              ))}
            </Tabs>
          </Box>
          {files.map((file, index) => (
            <TabPanel value={value} index={index}>
              {file.view}
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default userPage;
