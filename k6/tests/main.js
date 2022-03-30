import { sleep } from 'k6'

import cura_healthcare_service from "./cura_healthcare_service.js";

export const options = {
  stages: [
    // Ramp-up 
    { duration: '5s', target: 10 },

    // Stay at 10 VUs for 5s
    { duration: '5s', target: 10 },

    // Ramp-down
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    // More than 10% of error be considered as fail
    error_rate: ["rate<0.1"],
  }
}


export default function main() {
	cura_healthcare_service();
  sleep(1);
}