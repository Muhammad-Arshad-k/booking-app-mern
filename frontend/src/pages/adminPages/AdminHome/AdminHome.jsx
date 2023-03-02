import Sidebar from "../../../admincomponents/sidebar/Sidebar";
import Navbar from "../../../admincomponents/navbar/Navbar";
import "./adminhome.scss";
import Widget from "../../../admincomponents/widget/Widget";
import Featured from "../../../admincomponents/featured/Featured";
import Chart from "../../../admincomponents/chart/Chart";
import Table from "../../../admincomponents/table/Table";

const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;