import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  BarSeries,
  ChartTheme,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  ILoadedEventArgs,
  DataLabel,
} from '@syncfusion/ej2-react-charts';

import {
  areaCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  barCustomSeries,
} from '../../data/dummy';

import { checksContext } from '../../context/ContextProvider';
import { ChartsHeader, Header, LineChart } from '../../components';

const Bar = () => {
  const { currentMode } = checksContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg  bg-white rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage" />

      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
        />

        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
