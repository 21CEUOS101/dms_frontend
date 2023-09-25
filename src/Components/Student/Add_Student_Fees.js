import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Add_Student_FeesInfo = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const schema = yup.object().shape({
    student_id: yup.string().required("Student ID is required"),
    txn_date: yup.string().required("Transaction Date is required"),
    voucher_number: yup.string().required("Voucher Number is required"),
    batch_year: yup.string().required("Batch Year is required"),
    session_no: yup.string().required("Session Number is required"),
    admission_type: yup.string().required("Admission Type is required"),
    fees_amount: yup.string().required("Fees Amount is required"),
    txn_status: yup.string().required("Transaction Status is required"),
    payment_mode: yup.string().required("Payment Mode is required"),
    cheque_number: yup.string(),
    cheque_date: yup.string(),
    bank_name: yup.string(),
    paid_date: yup.string().required("Paid Date is required"),
    reconsile_date: yup.string(),
    reconsile_number: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
    onSubmit(data);
  };

  return (
    <div className="col-xxl">
      <div className="card mb-4 h-auto w-fit">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="student_id">
            Student ID:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="student_id"
              name="student_id"
              required
              {...register("student_id")}
            />
            <p className="text-danger">{errors?.student_id?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="txn_date">
            Transaction Date:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="txn_date"
              name="txn_date"
              required
              {...register("txn_date")}
            />
            <p className="text-danger">{errors?.txn_date?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="voucher_number">
            Voucher Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="voucher_number"
              name="voucher_number"
              required
              {...register("voucher_number")}
            />
            <p className="text-danger">{errors?.voucher_number?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="batch_year">
            Batch Year:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="batch_year"
              name="batch_year"
              required
              {...register("batch_year")}
            />
            <p className="text-danger">{errors?.batch_year?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="session_no">
            Session Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="session_no"
              name="session_no"
              required
              {...register("session_no")}
            />
            <p className="text-danger">{errors?.session_no?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="admission_type">
            Admission Type:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="admission_type"
              name="admission_type"
              required
              {...register("admission_type")}
            />
            <p className="text-danger">{errors?.admission_type?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="fees_amount">
            Fees Amount:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="fees_amount"
              name="fees_amount"
              required
              {...register("fees_amount")}
            />
            <p className="text-danger">{errors?.fees_amount?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="txn_status">
            Transaction Status:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="txn_status"
              name="txn_status"
              required
              {...register("txn_status")}
            />
            <p className="text-danger">{errors?.txn_status?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="payment_mode">
            Payment Mode:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="payment_mode"
              name="payment_mode"
              required
              {...register("payment_mode")}
            />
            <p className="text-danger">{errors?.payment_mode?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="cheque_number">
            Cheque Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="cheque_number"
              name="cheque_number"
              {...register("cheque_number")}
            />
            <p className="text-danger">{errors?.cheque_number?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="cheque_date">
            Cheque Date:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="cheque_date"
              name="cheque_date"
              {...register("cheque_date")}
            />
            <p className="text-danger">{errors?.cheque_date?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="bank_name">
            Bank Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="bank_name"
              name="bank_name"
              {...register("bank_name")}
            />
            <p className="text-danger">{errors?.bank_name?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="paid_date">
            Paid Date:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="paid_date"
              name="paid_date"
              required
              {...register("paid_date")}
            />
            <p className="text-danger">{errors?.paid_date?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="reconsile_date">
            Reconcile Date:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="reconsile_date"
              name="reconsile_date"
              {...register("reconsile_date")}
            />
            <p className="text-danger">{errors?.reconsile_date?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="reconsile_number">
            Reconcile Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="reconsile_number"
              name="reconsile_number"
              {...register("reconsile_number")}
            />
            <p className="text-danger">{errors?.reconsile_number?.message}</p>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Student_FeesInfo
