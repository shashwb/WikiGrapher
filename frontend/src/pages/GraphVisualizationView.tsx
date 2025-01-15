import React, { useEffect } from "react";
import * as d3 from "d3";

/**
 * GraphVisualizationView component.
 *
 * This component is responsible for rendering the graph visualization.
 *
 * @returns {JSX.Element} The GraphVisualizationView component.
 */

const GraphVisualizationView = () => {
  useEffect(() => {
    const svg = d3.select("#graph").attr("width", 400).attr("height", 400);

    const nodesData = [
      { id: "Bollywood", x: Math.random() * 400, y: Math.random() * 400 },
      { id: "India", x: Math.random() * 400, y: Math.random() * 400 },
      { id: "Movies", x: Math.random() * 400, y: Math.random() * 400 },
    ];
    const linksData = [
      { source: "Bollywood", target: "India" },
      { source: "Bollywood", target: "Movies" },
    ];

    const simulation = d3
      .forceSimulation(nodesData)
      .force(
        "link",
        d3.forceLink(linksData).id((node: any) => node.id)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(200, 200));

    simulation.on("tick", () => {
      svg
        .selectAll("circle")
        .data(nodesData)
        .join("circle")
        .attr("cx", (node) => node.x)
        .attr("cy", (node) => node.y)
        .attr("r", 10)
        .attr("fill", "#22c55e");
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Graph View</h2>
      <svg id="graph" />
    </div>
  );
};

export default GraphVisualizationView;
