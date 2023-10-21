import { useGTM as useVueGTM } from "@gtm-support/vue-gtm";

export default () => {
  const gtm = useVueGTM();
  return gtm;
};
