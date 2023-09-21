import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateFeesInfo = ({ id }) => {
  const [formData, setFormData] = useState({
    student_id: "",
    txn_date: "",
    voucher_number: "",
    batch_year: "",
    session_no: "",
    admission_type: "",
    fees_amount: "",
    txn_status: "",
    payment_mode: "",
    cheque_number: "",
    cheque_date: "",
    bank_name: "",
    paid_date: "",
    reconsile_date: "",
    reconsile_number: "",
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    axios.get(`http://localhost:3001/student/getStudentFeesInfo/${id}`).then(
      (data) => {
        console.log(data?.data[0]);
        setFormData(data?.data[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const updateData = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:3001/admin/updateStudentFeesInfo",
        formData
      );

      console.log("Update response:", response.data); // Log the response

      setStatus(
        response.data.acknowledged
          ? "Payment Info Updated Successfully!"
          : "Payment Info Updation Failed!"
      );

      setTimeout(() => {
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error("Update error:", error); // Log any errors
      setStatus("Payment Info Updation Failed!");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.txn_date ||
      !formData.voucher_number ||
      !formData.batch_year ||
      !formData.session_no ||
      !formData.admission_type ||
      !formData.fees_amount ||
      !formData.txn_status ||
      !formData.payment_mode ||
      !formData.paid_date
    ) {
      alert("Please fill all the required fields!");
      return;
    } else {
      console.log(formData);
      await updateData();
    }
  };

  useEffect(() => {
    preData();
  }, [id]);

  return (
    <div className="container">
      <h1 className="mb-3">Fees Info Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="student_id" className="form-label">
            Student ID:
          </label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            value={formData.student_id}
            disabled
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="txn_date" className="form-label">
            Transaction Date:
          </label>
          <input
            type="text"
            id="txn_date"
            name="txn_date"
            value={formData.txn_date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="voucher_number" className="form-label">
            Voucher Number:
          </label>
          <input
            type="text"
            id="voucher_number"
            name="voucher_number"
            value={formData.voucher_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="batch_year" className="form-label">
            Batch Year:
          </label>
          <input
            type="text"
            id="batch_year"
            name="batch_year"
            value={formData.batch_year}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="session_no" className="form-label">
            Session Number:
          </label>
          <input
            type="text"
            id="session_no"
            name="session_no"
            value={formData.session_no}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="admission_type" className="form-label">
            Admission Type:
          </label>
          <input
            type="text"
            id="admission_type"
            name="admission_type"
            value={formData.admission_type}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fees_amount" className="form-label">
            Fees Amount:
          </label>
          <input
            type="text"
            id="fees_amount"
            name="fees_amount"
            value={formData.fees_amount}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="txn_status" className="form-label">
            Transaction Status:
          </label>
          <input
            type="text"
            id="txn_status"
            name="txn_status"
            value={formData.txn_status}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="payment_mode" className="form-label">
            Payment Mode:
          </label>
          <input
            type="text"
            id="payment_mode"
            name="payment_mode"
            value={formData.payment_mode}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cheque_number" className="form-label">
            Cheque Number:
          </label>
          <input
            type="text"
            id="cheque_number"
            name="cheque_number"
            value={formData.cheque_number}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cheque_date" className="form-label">
            Cheque Date:
          </label>
          <input
            type="text"
            id="cheque_date"
            name="cheque_date"
            value={formData.cheque_date}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="bank_name" className="form-label">
            Bank Name:
          </label>
          <input
            type="text"
            id="bank_name"
            name="bank_name"
            value={formData.bank_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="paid_date" className="form-label">
            Paid Date:
          </label>
          <input
            type="text"
            id="paid_date"
            name="paid_date"
            value={formData.paid_date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reconsile_date" className="form-label">
            Reconciliation Date:
          </label>
          <input
            type="text"
            id="reconsile_date"
            name="reconsile_date"
            value={formData.reconsile_date}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reconsile_number" className="form-label">
            Reconciliation Number:
          </label>
          <input
            type="text"
            id="reconsile_number"
            name="reconsile_number"
            value={formData.reconsile_number}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {status !== "" && <p>{status}</p>}
      </form>
    </div>
  );
};

export default UpdateFeesInfo;
