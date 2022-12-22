import { VictoryLine, VictoryChart, VictoryScatter, VictoryAxis } from "victory";
import { ChartProps } from "../redux/models";

export default function LineChart(props: ChartProps) {
  const { data } = props;

  return (
    <div>
      <VictoryChart height={130} width={700}>
        <VictoryLine
          data={data}
          style={{
            data: { stroke: "rgba(255, 255, 255, 0.3)", strokeWidth: 1 },
            labels: { fill: "#fff", fontSize: 24 },
          }}
          labels={({ datum }) => datum.y}
        />
        <VictoryScatter
          style={{ data: { fill: "#fff" }, labels: { fill: "transparent", fontSize: 0 } }}
          size={5}
          data={data}
        />
        <VictoryAxis
          tickFormat={() => ""}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "transparent" },
          }}
        />
      </VictoryChart>
    </div>
  );
}
