import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
              <a class="navbar-brand text-info fw-light" href="#">DIGITAL HIVE</a>
              
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="fw-bold nav-link active text-danger fs-4" aria-current="page" href="#">D'LittMan</a>
                      </li>
      </ul>
                  <div className="d-flex justify-content-end">
                      <ul class="navbar-nav">
        <li class="nav-item">
                          <a class="nav-link" href="#"><i class="bi bi-search fs-4 ms-3"></i>
        </a></li>
        <li class="nav-item">
                          <a class="nav-link" href="#"><i class="bi bi-gear fs-4 ms-3"></i>
                          </a></li>
        <li class="nav-item">
                          <a class="nav-link" href="#"><i class="bi bi-bell fs-4 ms-3"></i>
                          </a></li>
        <li class="nav-item">
                          <a class="nav-link" href="#"><i class="bi bi-r-square fs-4 ms-3"></i>
        </a></li></ul></div>
                          
    
     
    </div>
  </div>
</nav></div>
  )
}
