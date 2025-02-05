import Masonry from 'masonry-layout';
import { useState, useCallback, useEffect, useRef } from 'react';

import { MASONRY_CONFIG } from '../constants/layout';

export const useMasonryLayout = () => {
  const masonryInstance = useRef<Masonry | null>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    setElement(node);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => prev + 1);
  }, []);

  // 이미지 박스 너비 계산
  const calculateItemWidth = useCallback(() => {
    const screenWidth = window.innerWidth;
    const minColumns = Math.floor(
      screenWidth / MASONRY_CONFIG.MIN_COLUMN_WIDTH
    );
    const calculatedWidth =
      Math.floor((screenWidth - MASONRY_CONFIG.MARGIN) / minColumns) -
      MASONRY_CONFIG.GUTTER;

    return calculatedWidth;
  }, []);

  // 레이아웃 재계산
  const handleResize = useCallback(() => {
    setItemWidth(calculateItemWidth());
  }, [calculateItemWidth]);

  // 초기 레이아웃 계산
  useEffect(() => {
    handleResize();
  }, [handleResize]);

  // 인스턴스 정리 함수
  const destroyMasonry = useCallback(() => {
    const instance = masonryInstance.current;
    if (instance && typeof instance.destroy === 'function') {
      instance.destroy();
      masonryInstance.current = null;
    }
  }, []);

  // 새로운 Masonry 레이아웃 초기화
  const initMasonry = useCallback(() => {
    if (!element || !itemWidth) return;
    destroyMasonry();

    masonryInstance.current = new Masonry(element, {
      itemSelector: '.grid-item',
      columnWidth: itemWidth,
      gutter: MASONRY_CONFIG.GUTTER,
      resize: false,
      transitionDuration: 0,
    });
  }, [element, itemWidth, destroyMasonry]);

  // element가 변경될 때마다 Masonry 초기화
  useEffect(() => {
    if (imagesLoaded === totalImages && totalImages > 0) {
      initMasonry();
    }
  }, [imagesLoaded, totalImages, initMasonry]);

  return {
    setRef,
    itemWidth,
    handleResize,
    destroyMasonry,
    handleImageLoad,
    setTotalImages,
  };
};
