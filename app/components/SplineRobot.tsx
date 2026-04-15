"use client";

import Spline from "@splinetool/react-spline/next";

type SplineRobotProps = {
  className?: string;
};

export default function SplineRobot({ className }: SplineRobotProps) {
  return (
    <Spline
      scene="https://prod.spline.design/d5Lkm6mcbjKppZN7/scene.splinecode"
      className={className}
    />
  );
}
