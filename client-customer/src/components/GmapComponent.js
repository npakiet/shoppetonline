import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">12/5A, Trần Hưng Đạo, Quận 5, Tphcm</h2>
        <iframe title='gmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7687736214857!2d106.66802081084536!3d10.75229575959369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efeac7c7049%3A0x5f4ffb18fa7abeae!2zNDcvMTIgxJAuIFRy4bqnbiBIxrBuZyDEkOG6oW8sIFBoxrDhu51uZyAwNiwgUXXhuq1uIDUsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1701248811295!5m2!1svi!2s" width="800" height="600" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}
export default Gmap;