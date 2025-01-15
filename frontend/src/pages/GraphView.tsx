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

const initNodes: Node[] = [
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
const initLinks = [
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

/** graph props */
interface GraphExampleProps {
  height: number;
  width: number;
}

const d3Map = <T, U>( // so this should be a MAP consisting of key: T and value: U
  data: T[], // data is of type T
  keyAccessor: (datum: T) => string, // fn takes a single parameter, datum. it will return a string
  valueAccessor: (datum: T) => U
): Map<string, U> => {
  return new Map(
    Array.from(data, (datum) => [keyAccessor(datum), valueAccessor(datum)])
  );
};

/**
 * Page component for displaying a graph view.
 *
 * Renders a graph with initial nodes and links, using d3.js.
 *
 * @param {GraphExampleProps} props
 * @prop {number} width - The width of the graph.
 * @prop {number} height - The height of the graph.
 * @returns {JSX.Element} The GraphView component.
 */
const GraphView = ({ width, height }: GraphExampleProps) => {
  const RADIUS = 8;
  const LINK_WIDTH = 3;
  useEffect(() => {
    const svg = d3.select("#graph").attr("width", 400).attr("height", 400);
  }, []);

  const newLinks = useMemo(() => {
    const sources = initLinks.map((link) => link.source);
    const targets = initLinks.map((link) => link.target);
    const nodesMap = d3Map(initNodes, getId, (d) => d); // access the id for key, access the entire node for the value
    /** newLinks return value */
    const newLinks = initLinks.map((_, i) => {
      return {
        source: nodesMap.get(sources[i]), // gets bollywood as source, with all node info
        target: nodesMap.get(targets[i]), // I get all node information about the target
      };
    });
    return newLinks as Link[];
  }, [initNodes]);

  const [nodes, setNodes] = useState<Node[]>(initNodes);
  const [links, setLinks] = useState<Link[]>(newLinks);

  return (
    <div>
      <svg height={height} width={width}>
        <rect
          width={width}
          height={height}
          fill="white"
          rx={14}
          fillOpacity={"#272b4b"}
        />
        {links.map((link) => {
          const { source, target } = link;
          console.log("link", link);
          const modSource = source as Node;
          const modTarget = target as Node;
          return (
            <line
              key={`${modSource.id}=${modTarget.id}`}
              stroke="white"
              strokeWidth={LINK_WIDTH}
              strokeOpacity={1}
              x1={modSource.x}
              y1={modSource.y}
              x2={modTarget.x}
              y2={modTarget.y}
            />
          );
        })}
        {nodes.map((node) => (
          <circle
            key={node.id}
            r={RADIUS}
            stroke="black"
            strokeWidth={1}
            fill="red"
            x={node.x}
            y={node.y}
          />
        ))}
      </svg>
    </div>
  );
};

export default GraphView;
