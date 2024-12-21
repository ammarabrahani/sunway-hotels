import { onCLS, onFCP, onINP, onLCP, onTTFB, Metric } from "web-vitals";

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    onCLS(onPerfEntry); // Cumulative Layout Shift
    onFCP(onPerfEntry); // First Contentful Paint
    onINP(onPerfEntry); // Interaction to Next Paint
    onLCP(onPerfEntry); // Largest Contentful Paint
    onTTFB(onPerfEntry); // Time to First Byte
  }
};

export default reportWebVitals;
