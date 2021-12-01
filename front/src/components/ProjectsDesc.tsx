import { useState, useEffect, useCallback } from "react";

export interface IProjectsDesc {
  value?: string;
  color?: string;
  bold?: boolean;
  nextLine?: boolean;
}
const ProjectsDesc = (prop: IProjectsDesc[]) => {
  var initvalue: IProjectsDesc[] = [{}];
  const [arrProp, setArrProp] = useState(initvalue);

  useEffect(() => {
    var tempArr = [];
    for (var i = 0; i < Object.keys(prop).length; i++) {
      tempArr.push(prop[i]);
    }
    setArrProp(tempArr);
  }, [prop]);

  const createDesc = useCallback((v: IProjectsDesc[]) => {
    var desc: any[] = [];
    v.map((v: IProjectsDesc) => {
      if (v.bold) {
        desc.push(
          <span>
            <strong>{v.value}</strong>
          </span>
        );
      } else if (v.color) {
        desc.push(<span style={{ color: `${v.color}` }}>{v.value}</span>);
      } else if (v.nextLine) {
        desc.push(<br />);
        desc.push(<br />);
      } else {
        desc.push(<span>{v.value}</span>);
      }
    });
    return desc;
  }, []);

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid lightgrey",
          marginBottom: "2rem",
          paddingBottom: "2rem",
        }}
      >
        {createDesc(arrProp)}
      </div>
    </>
  );
};
export default ProjectsDesc;
