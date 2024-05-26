import { useParams } from "react-router-dom";

const Master = () => {
  const { formName } = useParams();
  return <div>Master - {formName}</div>;
};
export default Master;
