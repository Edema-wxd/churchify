import { UUID } from "crypto";

interface DemoData {
  id: UUID | number;
  title: string;
  descript: string;
  vidlink?: string;
}

const demo: Array<DemoData> = [
  { id: 1, title: "random", descript: "filler text" },
];
export default demo;
