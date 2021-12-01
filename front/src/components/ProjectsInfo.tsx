import { useEffect, useMemo, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";

export interface IProjectsInfo {
  subject: string;
  desc: string;
  isLink?: boolean;
  url?: string;
}

const SubjectWrapper = styled(Col)`
  font-weight: bold;
`;

const ProjectsInfo = (prop: IProjectsInfo[]) => {
  var initvalue: IProjectsInfo[] = [{ subject: "", desc: "" }];
  const [arrProp, setArrProp] = useState(initvalue);
  useEffect(() => {
    var tempArr = [];
    for (var i = 0; i < Object.keys(prop).length; i++) {
      tempArr.push(prop[i]);
    }
    setArrProp(tempArr);
  }, [prop]);

  return (
    <>
      {arrProp.map((v: IProjectsInfo, i: number) => {
        if (v.isLink) {
          return (
            <Row style={{ marginBottom: "1rem" }} key={i}>
              <SubjectWrapper xs={12} md={4} style={{ marginBottom: "0.5rem" }}>
                <CheckOutlined style={{ marginRight: "0.5rem" }} />
                {v.subject}
              </SubjectWrapper>
              <Col xs={12} md={8}>
                <a
                  style={{ color: "#355E87" }}
                  href={v.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {v.desc}
                </a>
              </Col>
            </Row>
          );
        } else {
          return (
            <Row style={{ marginBottom: "1rem" }} key={i}>
              <SubjectWrapper xs={12} md={4} style={{ marginBottom: "0.5rem" }}>
                <CheckOutlined style={{ marginRight: "0.5rem" }} />
                {v.subject}
              </SubjectWrapper>
              <Col xs={12} md={8}>
                {v.desc}
              </Col>
            </Row>
          );
        }
      })}
    </>
  );
};
export default ProjectsInfo;
