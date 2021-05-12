// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function enterClicked () {
  // this code will calculate the area of the trapezoid

  // input
  const a = parseInt(document.getElementById("a-base").value)
  const b = parseInt(document.getElementById("b-base").value)
  const height = parseInt(document.getElementById("trapezoid-height").value)

  // process
  const area = ((a + b) / 2) * h

  //output
  document.getElementById('area').innerHTML = 'The area is: ' + area.toFixed(2) + 'mm²'
}
