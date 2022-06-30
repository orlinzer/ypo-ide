import { NextComponentType, NextPage } from "next";
import { useState } from "react";

import styles from './WebViewer.module.css';

interface WebViewerProps {
  url: string;
}

// export const WebViewer: NextComponentType = () => {
export const WebViewer: NextPage<WebViewerProps> = ({ url }: WebViewerProps) => {

  return (
    <iframe className={styles.frame} src={url}></iframe>
  );
};

export default WebViewer;
