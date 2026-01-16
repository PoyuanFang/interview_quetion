'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import BackButton from '@/components/BackButton';

// API 回傳的商品格式
interface Product {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

// 圖表要的資料格式
interface ChartData {
  name: string;
  價格: number;
  數量: number;
}

const SimpleBarChart = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const fetchData = async () => {
    try {
      // 使用 Fake Store API
      const res = await fetch('https://fakestoreapi.com/products?limit=8');
      const json: Product[] = await res.json();

      // 自定義 X 軸的標籤陣列
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

      const formatData = json.map((product, index) => {
        return {
          name: months[index],
          價格: product.price,
          數量: product.rating.count,
        };
      });

      setChartData(formatData);
    } catch (error) {
      console.error('抓取資料失敗:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col w-full min-h-screen justify-center items-center'>
      <BackButton className='fixed left-4 top-4' />
      <div className='mb-4'>使用套件：<a href="https://recharts.org/" target="_blank">Recharts</a></div>
      <ResponsiveContainer width="90%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="價格" fill="#2465b5" name="價格" stackId='a' />
          <Bar dataKey="數量" fill="#65b985" name="數量" stackId='a' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;