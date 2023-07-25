declare module '*.scss' {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module '\*.svg' {
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __IS_DEV__: boolean;
declare const __API__: string;

