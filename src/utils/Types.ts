export interface reportLayout{
    x: number,
    y: number,
    width: number,
    height: number
}

export interface BarChartData {
    label: string;
    strategy: number;
    benchmark: number;
}

export interface PerformanceBarChartProps {
    data: BarChartData[];
}