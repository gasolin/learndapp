// according to https://github.com/facebook/docusaurus/issues/1258#issuecomment-594393744
// use in *.mdx like:
// import Mermaid from '@theme/Mermaid'
//
// <Mermaid chart={`
// flowchart TD
//     cr([Create Request]) --> backoffice[Backoffice Server REST]
// `}/>

import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
	startOnLoad: true
});

// https://github.com/e-attestations/react-mermaid2/blob/master/src/Mermaid.js
const DEFAULT_CONFIG = {
  startOnLoad: true,
  // theme: "neutral",
  logLevel: "fatal",
  securityLevel: "strict",
}

const Mermaid = ({ chart, config }) => {
  // Mermaid initilize its config
  mermaid.initialize({...DEFAULT_CONFIG, ...config})

	useEffect(() => {
		mermaid.contentLoaded();
  }, [config]);

  if (!chart) return null;
	return <div className="mermaid">{chart}</div>;
};

export default Mermaid;
