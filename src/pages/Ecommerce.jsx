import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import {
  earningData,
  ecomPieChartData,
  SparklineAreaData,
} from '../data/dummy';
import { checksContext } from '../context/ContextProvider';

const Ecommerce = () => {
  const { currentColorSelected } = checksContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
          h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-contain bg-right bg-no-repeat"
        >
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-lg">$86,456,45</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              size="sm"
              color="white"
              bgColor={currentColorSelected}
              text="download"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1 m-3 items-center">
          {earningData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-1/3 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>

              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>

              <p className="mt-1 text-sm text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center ">
        <div className="bg-white p-10 dark:bg-secondary-dark-bg rounded-2xl md:w-780 dark:text-gray-200 m-3 ">
          <div className="flex items-center justify-between ">
            <p className="text-xl font-semibold">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p className="flex gap-2 text-gray-600 hover:drop-shadow-xl items-center">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex gap-2 text-green-400 hover:drop-shadow-xl items-center">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="flex gap-10 mt-10  justify-center flex-wrap ">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$897468</span>
                  <span className="p-1.5 hover:drop-shadow-xl rounded-full bg-green-400 ml-3 text-xs cursor-pointer text-white">
                    8%
                  </span>
                </p>

                <p className="mt-1 text-gray-500">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$897468</span>
                </p>

                <p className="mt-1 text-gray-500">Expnense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColorSelected}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColorSelected}
                  text="Download Reports"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
