
interface MainProps {
  children: JSX.Element;
  // children?: any;
  // children: IntrinsicAttributes;
}

interface MainState {
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
  right?: boolean;
  width?: number;
  height?: number;
}

export default function Main<MainProps, MainState>({ children }: MainProps) {
  return (
    <main>
      {children}
    </main>
  )
}
