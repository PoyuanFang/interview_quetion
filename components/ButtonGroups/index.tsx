'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import BackButton from '@/components/BackButton';

export default function ButtonGroups(): React.ReactElement {
  // 1: 定義計數狀態
  const [count, setCount] = useState<number>(0);

  const [isClickDisabled, setIsClickDisabled] = useState<boolean>(false);

  // 處理點擊計數
  const handleCountClick = (): void => {
    setCount((prev: number) => prev + 1);
  };

  // 2: 按下 CLEAR 讓數值歸零
  const handleClear = (): void => {
    setCount(0);
  };

  // 3: 切換 Disable/Able 狀態
  const handleToggleDisable = (): void => {
    setIsClickDisabled((prev: boolean) => !prev);
  };

  return (
    <div className='min-h-screen flex flex-col items-center p-10 relative'>
      <BackButton className='fixed left-4 top-4' />
      <div className='my-10'>
        <ol>
          <li>1. CLICK:0 按鈕中的數字，請⽤ useState 處理該值，按下按鈕時讓數字 +1。</li>
          <li>2. 按下 CLEAR 按鈕，讓 useState 中的值歸零。</li>
          <li>3. 按下 DISABLE 按鈕，讓最上⾯的 CLICK 按鈕失效，並且讓 DISABLE 變成 ABLE；按鈕顯⽰
            ABLE 時，按下則會 讓 CLICK 按鈕恢復成可按，並帶有 + 1 功能的⽣效狀態。</li>
        </ol>
        <br />
        注意：請使⽤ ButtonGroup 的 CSS API 來調整樣式及完成 disable 功能。
      </div>

      <ButtonGroup
        orientation="vertical"
        variant="outlined"
        size="large"
        sx={{
          '& .MuiButton-root': {
            fontSize: '1.2rem',
            padding: '10px 40px',
            textTransform: 'none',
            fontWeight: 'bold',
            width: '200px',
          }
        }}
      >
        {/* 1. CLICK:0 按鈕 */}
        <Button
          onClick={handleCountClick}
          disabled={isClickDisabled}
        >
          CLICK:{count}
        </Button>

        {/* 2. CLEAR 按鈕 */}
        <Button onClick={handleClear}>
          CLEAR
        </Button>

        {/* 3. DISABLE/ABLE 按鈕 */}
        <Button onClick={handleToggleDisable}>
          {isClickDisabled ? 'ABLE' : 'DISABLE'}
        </Button>
      </ButtonGroup>
    </div>
  );
}