import React from "react";
import SideNavBar from "../components/sidenavbar/SideNavBar";
import "./details.css";
function Details() {
  return (
    <div className="page">
      <SideNavBar />
      <div className="main--content">
        <div className="header-wrapper">
          <div className="header--title">
            <div className="profile">
              <h3>H</h3>
            </div>
            <div className="titre">
              <h2>Welcome to your account!</h2>
              <h6>Accounting</h6>
            </div>

            <div className="white">
              <h2>Appointements history</h2>
              <br />
              <hr color=" #EFEEEE" />
              <div className="table-section">
                <h3>Your latest appointements :</h3>
                <div className="table-container">
                  <table className="table">
                    <thead className="thead">
                      <tr>
                        <th> Appointment Doctor</th>
                        <th>Appointment date</th>
                        <th>appointement Hour</th>
                        <th>Edit appointement</th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      <tr className="tr">
                        <td className="td">1</td>
                        <td className="td">1</td>
                        <td className="td">1</td>
                        <td className="td">
                          <div className="check">
                            <a className="sup" href="">
                              Cancel
                            </a>
                            <a className="edit" href="">
                              edit
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="td">11111111111111111111111</td>
                        <td className="td">1</td>
                        <td className="td">1</td>
                        <td className="td">
                          <div className="check">
                            <a className="sup" href="">
                              Cancel
                            </a>
                            <a className="edit" href="">
                              edit
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td">No appointment in booking yet</td>
                      </tr>
                      <tr className="tr">
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td">No appointment in booking yet</td>
                      </tr>
                      <tr className="tr">
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td">No appointment in booking yet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
