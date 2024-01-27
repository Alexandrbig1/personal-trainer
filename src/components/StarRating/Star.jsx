import { FullStar, EmptyStar } from "./Star.styled";

export default function Star({ value, full }) {
  return <>{full ? <FullStar value={value} /> : <EmptyStar value={value} />}</>;
}
