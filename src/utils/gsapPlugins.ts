import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록 함수
export const registerGSAPPlugins = () => {
  gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록
  gsap.registerPlugin(useGSAP); // useGSAP 훅 등록 (사용자가 정의한 훅)
};
