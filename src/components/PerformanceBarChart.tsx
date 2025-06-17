import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Svg, Rect, Text as SvgText, Line } from 'react-native-svg';
import { scaleBand, scaleLinear } from 'd3-scale';
import { PerformanceBarChartProps } from '../utils/Types';

const screenWidth = Dimensions.get('window').width;
const chartHeight = 220;
const barMinWidth = 40; // Minimum width per label (strategy + benchmark)
const leftPadding = 30;

const PerformanceBarChart: React.FC<PerformanceBarChartProps> = ({ data }) => {
    const barCount = data.length;
    const calculatedWidth = Math.max(screenWidth - 40, barCount * (barMinWidth + 10));

    const maxValue = Math.max(...data.map(d => Math.max(d.strategy, d.benchmark, 0)));
    const minValue = Math.min(...data.map(d => Math.min(d.strategy, d.benchmark, 0)));
    const barPadding = 0.3;

    const xScale = scaleBand()
        .domain(data.map(d => d.label))
        .range([leftPadding, calculatedWidth])
        .padding(barPadding);

    const yScale = scaleLinear()
        .domain([Math.min(-20, minValue), Math.max(30, maxValue)])
        .range([chartHeight, 0]);

    const yTicks = [30, 25, 20, 15, 10, 5, 0, -5, -10, -15, -20];

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Svg height={chartHeight + 60} width={calculatedWidth + 20}>
                    {/* Y-axis grid lines and labels */}
                    {yTicks.map((tick, i) => (
                        <React.Fragment key={`tick-${i}`}>
                            <SvgText
                                x={0}
                                y={yScale(tick) + 4}
                                fontSize={10}
                                fill="#aaa"
                                textAnchor="start"
                            >
                                {tick}%
                            </SvgText>
                            <Line
                                x1={leftPadding}
                                x2={calculatedWidth}
                                y1={yScale(tick)}
                                y2={yScale(tick)}
                                stroke={tick === 0 ? '#ccc' : '#eee'}
                                strokeWidth={tick === 0 ? 1.2 : 0.5}
                            />
                        </React.Fragment>
                    ))}

                    {data.map((d, i) => {
                        const x = xScale(d.label)!;
                        const barWidth = xScale.bandwidth() / 2;
                        const strategyHeight = Math.abs(yScale(d.strategy) - yScale(0));
                        const benchmarkHeight = Math.abs(yScale(d.benchmark) - yScale(0));

                        return (
                            <React.Fragment key={d.label}>
                                <Rect
                                    x={x}
                                    y={d.strategy < 0 ? yScale(0) : yScale(d.strategy)}
                                    width={barWidth}
                                    height={strategyHeight}
                                    fill="#3366FF"
                                    rx={2}
                                />
                                <Rect
                                    x={x + barWidth + 4}
                                    y={d.benchmark < 0 ? yScale(0) : yScale(d.benchmark)}
                                    width={barWidth}
                                    height={benchmarkHeight}
                                    fill="#5AC8FA"
                                    rx={2}
                                />

                                <SvgText
                                    x={x + barWidth / 2}
                                    y={d.strategy < 0 ? yScale(0) + 14 : yScale(d.strategy) - 4}
                                    fontSize={10}
                                    fill="#000"
                                    fontWeight="bold"
                                    textAnchor="middle"
                                >
                                    {d.strategy}%
                                </SvgText>

                                <SvgText
                                    x={x + barWidth + 4 + barWidth / 2}
                                    y={d.benchmark < 0 ? yScale(0) + 14 : yScale(d.benchmark) - 4}
                                    fontSize={10}
                                    fill="#000"
                                    fontWeight="bold"
                                    textAnchor="middle"
                                >
                                    {d.benchmark}%
                                </SvgText>

                                <SvgText
                                    x={x + barWidth}
                                    y={chartHeight + 20}
                                    fontSize={10}
                                    fill="#333"
                                    textAnchor="middle"
                                >
                                    {d.label}
                                </SvgText>
                            </React.Fragment>
                        );
                    })}
                </Svg>
            </ScrollView>

            <View style={styles.legendRow}>
                <View style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: '#3366FF' }]} />
                    <SvgText fontSize={12} fill="#333">Credent AIM Multi Cap Strategy</SvgText>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: '#5AC8FA' }]} />
                    <SvgText fontSize={12} fill="#333">BSE 500</SvgText>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    legendRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        gap: 16,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 6,
    },
    rowIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
});

export default PerformanceBarChart;