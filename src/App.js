import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.js";
export default function (App) {
  return (
    <div className='container py-5'>
    <div className='row'>
    <div className='col-12 text-center'>
    <h1 className='fw-bold'>FEEDUITEUN APPS</h1>
    <hr className='w-75 mx-auto'/>
    <h2 className='fw-bold'>Rp.1.500.000,-</h2>
    <span className='title-m'>sisa uang kamu tersisa 75% lagi</span>
    <div className='row'>
    <div className='col-'>
    <div className='card-wrapper p-4'>
    <div className='icon-wrapper mb-1'>
<i class="bi bi-wallet1"></i>
<span className='title-sm'>pemasukan</span>
<h3 className='fw-bold'>Rp.2.000.000,-</h3>
<span className='title-sm text-ungu fw-bold'>50</span>
<span className='title-sm'>transaksi</span>
    <div className='row mt-5'>
    <div className='col-12 d-flex justify-content-between align-items-center'>
    <h4>ringkasan transaksi</h4>
    <div className='wrapper-button'>
      <button className='button btn-ungu'>pengeluaran<i class="bi bi-plus-circle-fil"></i></button>
      <button className='button btn-pink'>pengeluaran<i class="bi bi-dash-circle-fil"></i></button>
    <div className='row mt-5'>
      <div className='col-12 d-flex 
    justify-content-between align-items-center'>
    <div className='d-flex align-item-center'>
<div className='icon-wrapper'>
  <i class="bi bi-wallet2"></i>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>

  </div>
</div>
</div>
</div>
    </div>
    </div>
    </div>
  );
}