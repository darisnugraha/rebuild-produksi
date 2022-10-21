import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Row, Col, Card } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import {
  getAllDashboard,
  getAllAbuCastingOutstand,
  getAllAbuPotongOutstand,
  getAllAbuTukangOutstand,
  getAllCastingOutstand,
  getAllBahanOutstand,
} from "../../../application/actions/dashboard";
import TableJoOutstand from "../../components/dashboard/table-jo-outstand";
import TableSetorAbuTukangCor from "../../components/dashboard/table-abu-setor-tukang-cor";
import TableSetorAbuTukangPotong from "../../components/dashboard/table-abu-setor-tukang-potong";
import TableSetorAbuTukang from "../../components/dashboard/table-abu-setor-tukang";
import TableTukangCorOutstand from "../../components/dashboard/table-tukang-cor-outstand";
import TableTukangPotongOutstand from "../../components/dashboard/table-tukang-potong-outstand";
import getLocal from "../../../infrastructure/services/local/get-local";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDashboard);
    dispatch(getAllAbuCastingOutstand);
    dispatch(getAllAbuPotongOutstand);
    dispatch(getAllAbuTukangOutstand);
    dispatch(getAllCastingOutstand);
    dispatch(getAllBahanOutstand);
    document.title = "Dashboard";
  }, [dispatch]);

  const dataUser = getLocal("userInfo");
  const level = dataUser.level;

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      <h1 className="page-header">Dashboard</h1>
      <Panel className={level === "ADMIN BAHAN" ? "d-none" : ""}>
        <PanelHeader>JOB ORDER OUTSTAND</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <Row>
              <Col span={24} style={{ marginTop: 10 }}>
                <TableJoOutstand />
              </Col>
            </Row>
          </Card>
        </PanelBody>
      </Panel>

      <Panel className={level === "ADMIN PUSAT" ? "d-none" : ""}>
        <PanelHeader>ABU SETOR TUKANG COR</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <Row>
              <Col span={24} style={{ marginTop: 10 }}>
                <TableSetorAbuTukangCor />
              </Col>
            </Row>
          </Card>
        </PanelBody>
      </Panel>

      <Panel className={level === "ADMIN PUSAT" ? "d-none" : ""}>
        <PanelHeader>ABU SETOR TUKANG POTONG</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <Row>
              <Col span={24} style={{ marginTop: 10 }}>
                <TableSetorAbuTukangPotong />
              </Col>
            </Row>
          </Card>
        </PanelBody>
      </Panel>

      <Panel className={level === "ADMIN PUSAT" ? "d-none" : ""}>
        <PanelHeader>ABU SETOR TUKANG</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <Row>
              <Col span={24} style={{ marginTop: 10 }}>
                <TableSetorAbuTukang />
              </Col>
            </Row>
          </Card>
        </PanelBody>
      </Panel>

      <Panel>
        <PanelHeader>TUKANG COR OUTSTAND</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <Row>
              <Col span={24} style={{ marginTop: 10 }}>
                <TableTukangCorOutstand />
              </Col>
            </Row>
          </Card>
        </PanelBody>
      </Panel>

      <Panel>
        <PanelHeader>TUKANG POTONG OUTSTAND</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <Row>
              <Col span={24} style={{ marginTop: 10 }}>
                <TableTukangPotongOutstand />
              </Col>
            </Row>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default Dashboard;
