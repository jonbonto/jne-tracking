import React from 'react';

export default (props) => {
  const { error, cnote, detail } = props.result;
  const content = error ? <p className="has-text-danger">{`Error: ${error}`}</p> : (
    cnote ? (
      <div className="has-text-left">
        <p className="has-text-centered has-text-primary">Penerima</p>
        <p>Nama: {cnote.cnote_receiver_name}</p>
        <p>Alamat: {detail[0].cnote_receiver_addr1}, {detail[0].cnote_receiver_addr2}, {detail[0].cnote_receiver_addr3}</p>
        <p>Kota: {cnote.city_name}</p>
        <br />
        <p className="has-text-centered has-text-primary">Pengirim</p>
        <p>Nama: {detail[0].cnote_shipper_name}</p>
        <p>Alamat: {detail[0].cnote_shipper_addr1}, {detail[0].cnote_shipper_addr2}, {detail[0].cnote_shipper_addr3}</p>
        <p>Kota: {detail[0].cnote_shipper_city}</p>
        <br />
        <p className="has-text-centered has-text-primary">Lain - lain</p>
        <p>AWB: {cnote.cnote_no}</p>
        <p>Layanan: {cnote.cnote_services_code}</p>
        <p>Berat: {detail[0].cnote_weight}</p>
        <p>Dikirim: {new Date(cnote.cnote_date).toString()}</p>
        <p>Sampai: {new Date(cnote.cnote_pod_date).toString()}</p>
      </div>
    ) : null
  );
  return (
    <div class="result card">
      <header class="card-header">
        <p class="has-text-centered card-header-title">
          Hasil Pengecekan
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {content}
        </div>
      </div>
    </div>
  );
}
