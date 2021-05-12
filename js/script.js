// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function enterClicked () {
  // this code will calculate the area of the trapezoid

  // input
  const aBase = parseInt(document.getElementById("a-base").value)
  const bBase = parseInt(document.getElementById("b-base").value)
  const height = parseInt(document.getElementById("trapezoid-height").value)

  // process
  const area = ((aBase + bBase) / 2) * height

  //output
  document.getElementById('area').innerHTML = 'The area is: ' + area + ' mm²'
}
