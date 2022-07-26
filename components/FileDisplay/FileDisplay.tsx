import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, List, Typography } from "@mui/material";
import { NextComponentType, NextPage } from "next";
import { useState } from "react";
import FilesPage from "../../pages/files/[path]";

import styles from './FileDisplay.module.css';

export type FileDisplayProps = {
  path: string,
}

export const FileDisplay: NextPage<FileDisplayProps> = (props) => {
  const { path } = props;



  return (
    <></>
  );
};

export default FileDisplay;
