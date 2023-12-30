import { UUID } from "crypto";

interface DemoData {
  id: UUID | number;
  title: string;
  descript: string;
  vidlink?: string;
}

const demo: Array<DemoData> = [
  { id: 1, title: "random", descript: "filler text" },
  { id: 2, title: "random", descript: "filler text" },
  { id: 3, title: "random", descript: "filler text" },
  { id: 4, title: "random", descript: "filler text" },
  { id: 5, title: "random", descript: "filler text" },
  { id: 6, title: "random", descript: "filler text" },
  { id: 7, title: "random", descript: "filler text" },
  { id: 8, title: "random", descript: "filler text" },
];
export default demo;
