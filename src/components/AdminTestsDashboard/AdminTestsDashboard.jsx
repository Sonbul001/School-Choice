import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import AddTestPopup from "../AddTestPopup/AddTestPopup";
import AdminNavbar from "../AdminsNavbar/AdminNavbar";
import Test from "../TestComponent/Test";
import Data from "../TestComponent/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import "./AdminTestsDashboard.css";

function AdminTestsDashboard() {
	const tests = Data.map((test) => {
		return <Test name={test.name} type={test.type} price={test.price} link={test.link} />;
	});
	return (
		<div className="admin-dashboard-tests">
			<div className="admin-dashboard-tests-navbar">
				<Navbar />
			</div>
			<div className="grade1">{tests}</div>
			<div className="admin-dashboard-tests-footer">
				<Footer />
			</div>
		</div>
	);
}

export default AdminTestsDashboard;
