import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


// TODO
export default function LinearBuffer({ propProgress, propBuffer }: any) {
  const [progress, setProgress] = React.useState(propProgress ? propProgress : 0);
  const [buffer, setBuffer] = React.useState(propBuffer ? propBuffer : 100);

  React.useEffect(() => {
    setProgress(propProgress);
  }, [propProgress]);

  React.useEffect(() => {
    setBuffer(propBuffer);
  }, [propBuffer]);

  // const progressRef = React.useRef(() => { });
  // React.useEffect(() => {
  //   progressRef.current = () => {
  //     if (progress > 100) {
  //       setProgress(0);
  //       setBuffer(10);
  //     } else {
  //       const diff = Math.random() * 10;
  //       const diff2 = Math.random() * 10;
  //       setProgress(progress + diff);
  //       setBuffer(progress + diff + diff2);
  //     }
  //   };
  // });

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     progressRef.current();
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} color="secondary" />
    </Box>
  );
}
