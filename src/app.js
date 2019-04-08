// @flow
import React, { Component } from 'react';
import './app.css';
// import { Counter } from './counter.with-behaviour-as-wrapper-component';
import { Counter } from './counter/index.js';

export const App = () => (
  <div className="App">
    <Counter title="I am a counter" />
  </div>
);
