import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, List, Typography } from "@mui/material";
import { NextComponentType, NextPage } from "next";
import { useState } from "react";

import styles from './FileExplorer.module.css';

interface FileExplorerProps {
  url: string;
}

// export const FileExplorer: NextComponentType = () => {
export const FileExplorer: NextPage<FileExplorerProps> = ({ url }: FileExplorerProps) => {

  // TODO use filesystem api

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
