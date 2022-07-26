import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, List, Typography } from "@mui/material";
import axios from "axios";
import { NextComponentType, NextPage } from "next";
import { useState } from "react";
import { DirectoryContent } from "../../lib/models/fs/Directory";
import FileDescriptor from "../../lib/models/fs/FileDescriptor";

import styles from './FileExplorer.module.css';

export type FileExplorerProps = {
  path: string;
};

// export const FileExplorer: NextComponentType = () => {
export const FileExplorer: NextPage<FileExplorerProps> = (props) => {

  const { path } = props;
  const [files, setFiles] = useState<DirectoryContent>([]);

  // TODO use filesystem api
  const load = async (path?: string) => {
    const myAxios = axios.create({
      baseURL: '/api/v1/filesystem/list',
      method: 'POST',
      timeout: 3600,
      headers: { 'content-type': 'application/json' },
      // withCredentials: true,
    });

    const response = await myAxios.request({
      data: { path: path },
      // headers: {
      //   Authorization: 'Bearer accesstoken'
      // }
    });

    console.log('response', response);
    console.log('response', response?.data?.result);
    setList(response?.data?.result);
  };

  return (
    <Box
      className={styles.box}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          area-controls='panel1a-content'
          id={'panel1a-header'}
        >
          <Typography>Directory 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Directory 1 content</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          area-controls='panel1a-content'
          id={'panel1a-header'}
        >
          <Typography>Directory 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Directory 2 content</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          area-controls='panel1a-content'
          id={'panel1a-header'}
        >
          <Typography>Directory 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              area-controls='panel1a-content'
              id={'panel1a-header'}
            >
              <Typography>Directory 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Directory 1 content</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              area-controls='panel1a-content'
              id={'panel1a-header'}
            >
              <Typography>Directory 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Directory 2 content</Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FileExplorer;
