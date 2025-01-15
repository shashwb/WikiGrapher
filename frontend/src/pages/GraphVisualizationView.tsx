import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

/**
 * GraphVisualizationView component.
 *
 * This component is responsible for rendering the graph visualization.
 *
 * @returns {JSX.Element} The GraphVisualizationView component.
 */

const GraphVisualizationView = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const { width, height } = svgElement.getBoundingClientRect();

    const nodes = [
      { id: "Bollywood", x: width * Math.random(), y: height * Math.random() },
      { id: "India", x: width * Math.random(), y: height * Math.random() },
      { id: "Movies", x: width * Math.random(), y: height * Math.random() },
    ];

    const links = [
      { source: "Bollywood", target: "India" },
      { source: "Bollywood", target: "Movies" },
    ];

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id((node: any) => node.id)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    simulation.on("tick", () => {
      d3.select(svgElement)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("cx", (node) => node.x)
        .attr("cy", (node) => node.y)
        .attr("r", 10)
        .attr("fill", "#22c55e");
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Graph View</h2>
      <svg
        ref={svgRef}
        width="100%"
        viewBox="0 0 100% 100%"
        preserveAspectRatio="xMinYMin meet"
        id="graph"
      />
    </div>
  );
};

export default GraphVisualizationView;
