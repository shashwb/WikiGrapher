/** page for displaying the graph view  */
import React, { useState, useEffect, useMemo } from "react";

/** adding d3 */
import * as d3 from "d3";

import { useAuth0 } from "@auth0/auth0-react";
import { link } from "fs";

interface Node extends d3.SimulationNodeDatum {
  id: string;
  x: number;
  y: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: Node;
  target: Node;
}

const nodes: Node[] = [
  {
    id: "India",
    x: Math.random() * 400,
    y: Math.random() * 400,
  },
  {
    id: "Bollywood",
    x: Math.random() * 400,
    y: Math.random() * 400,
  },
  {
    id: "Movies",
    x: Math.random() * 400,
    y: Math.random() * 400,
  },
];

/** this is more of a template for now */
const links = [
  {
    source: "Bollywood",
    target: "India",
  },
  {
    source: "Bollywood",
    target: "Movies",
  },
];

const getId = (node: Node) => node.id;

const d3Map = <T, U>( // so this should be a MAP consisting of key: T and value: U
  data: T[], // data is of type T
  keyAccessor: (datum: T) => string, // fn takes a single parameter, datum. it will return a string
  valueAccessor: (datum: T) => U
): Map<string, U> => {
  return new Map(
    Array.from(data, (datum) => [keyAccessor(datum), valueAccessor(datum)])
  );
};

const RADIUS = 8;
const LINK_WIDTH = 3;

const GraphView: React.FC = () => {
  // const [nodes, setNodes] = useState<Node[]>(nodes);
  // const [links, setLinks] = useState<Link[]>(links);

  useEffect(() => {
    const svg = d3.select("#graph").attr("width", 400).attr("height", 400);
  }, []);

  // const newLinks = useMemo(() => {
  //   const sources = links.map((link) => link.source);
  //   const targets = links.map((link) => link.target);
  //   const nodesMap = d3Map(nodes, getId, (d) => d); // access the id for key, access the entire node for the value
  //   /** newLinks return value */
  //   return links.map((_, i) => {
  //     return {
  //       source: nodesMap.get(sources[i]), // gets bollywood as source, with all node info
  //       target: nodesMap.get(targets[i]), // I get all node information about the target
  //     };
  //   });
  // }, [links, nodes]);
  // console.log("newLinks", newLinks);

  return (
    <div>
      <h1>Your Graph Goes Here!!</h1>
      <svg id="graph"></svg>
    </div>
  );
};

export default GraphView;
